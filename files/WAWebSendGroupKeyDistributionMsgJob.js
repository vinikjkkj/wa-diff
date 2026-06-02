__d(
  "WAWebSendGroupKeyDistributionMsgJob",
  [
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiMessageInfoStore",
    "WAWebApiParticipantStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebGetGroupKeyDistributionMsg",
    "WAWebGroupMsgSendUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebPhashUtils",
    "WAWebSchemaParticipant",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgQueueMap",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "cr:10198",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendGroupKeyDistributionMsg: sending ",
              "",
            ])),
          t,
        )
        .tags("messaging");
      var r = t.remote;
      return o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
        r.toString(),
        function () {
          return d(t, n);
        },
      );
    }
    async function d(e, t) {
      var n = e.id,
        a = e.remote,
        i = await o("WAWebSchemaParticipant")
          .getParticipantTable()
          .get(a.toString()),
        l = await o("WAWebGroupMsgSendUtils").getGroupData(a.toString(), i);
      t.setGroupData(l);
      var c = await o(
          "WAWebApiParticipantStore",
        ).getGroupSenderKeyListFromParticipantRecord(a, i),
        d = c.rotateKey,
        p = c.skDistribList,
        _ = c.skList,
        f = _.concat(p);
      if (p.length === 0) {
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupKeyDistributionMsg: skip sending ",
                ": sender key distribution list is empty",
              ])),
            e,
          )
          .tags("messaging");
        return;
      }
      (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
        f.map(function (t) {
          return { msgKey: e, receiverId: t };
        }),
      ),
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
          p,
          !1,
          o("WAWebSessionScope").SessionScope.DEFAULT,
        ));
      var g = await o("WAWebPhashUtils").phashV2(
          [].concat(f, [
            o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
          ]),
        ),
        h = await m(a, p, d),
        y = h[0],
        C = h[1],
        b = o("WAWap").wap(
          "message",
          {
            id: o("WAWap").CUSTOM_STRING(n),
            to: o("WAWebCommsWapMd").CHAT_JID(a),
            phash: o("WAWap").CUSTOM_STRING(g),
            type: "text",
            device_fanout: "false",
          },
          o("WAWap").wap("meta", { appdata: "default" }),
          o("WAWap").wap("enc", {
            v: o("WAWap").CUSTOM_STRING(
              o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
            ),
            type: o("WAWap").CUSTOM_STRING(
              o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
            ),
            "decrypt-fail": "hide",
          }),
          y,
          C,
        );
      await o("WAWebSignalProtocolStore")
        .getSignalProtocolStore()
        .flushBufferToDiskIfNotMemOnlyMode();
      var v = await o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
          b,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: n,
            class: "message",
            from: a,
            participant: null,
          }),
        ),
        S = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(v);
      return S.error
        ? (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendSenderKeyMsg: Invalid ack from server",
                ])),
            )
            .tags("messaging"),
          Promise.reject(
            r("err")(
              "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
            ),
          ))
        : (await o("WAWebApiParticipantStore").markHasSenderKey(a, p),
          S.success);
    }
    async function m(e, t, n) {
      var r = t.every(function (e) {
          return e.isLid();
        }),
        a = r
          ? o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow()
          : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
      n && (await o("WAWebSignal").Session.deleteGroupSenderKeyInfo(e, a));
      var i = await o("WAWebSignal").Session.getGroupSenderKeyInfo(e, a),
        l = await o("WAWebGetGroupKeyDistributionMsg").getKeyDistributionMsg(
          null,
          e,
          t,
          i,
          !0,
        ),
        s = null,
        u = !1;
      l &&
        l.length > 0 &&
        (s = o("WAWap").wap(
          "participants",
          null,
          l.map(function (e) {
            var t = e.ciphertext,
              n = e.participant,
              r = e.type;
            return (
              r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (u = !0),
              o("WAWap").wap(
                "to",
                { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    "decrypt-fail": "hide",
                    type: o("WAWap").CUSTOM_STRING(r),
                  },
                  t,
                ),
              )
            );
          }),
        ));
      var c = null;
      if (u) {
        var d = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
        c = o("WAWap").wap("device-identity", null, d);
      }
      return [s, c];
    }
    l.encryptAndSendGroupKeyDistributionMsg = c;
  },
  98,
);
