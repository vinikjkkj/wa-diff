__d(
  "WAWebSendGroupKeyDistributionMsgJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "cr:10198",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n) {
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
          return m(t, n);
        },
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = e.id,
            i = e.remote,
            l = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .get(i.toString()),
            d = yield o("WAWebGroupMsgSendUtils").getGroupData(i.toString(), l);
          t.setGroupData(d);
          var m = yield o(
              "WAWebApiParticipantStore",
            ).getGroupSenderKeyListFromParticipantRecord(i, l),
            p = m.rotateKey,
            f = m.skDistribList,
            g = m.skList,
            h = g.concat(f);
          if (f.length === 0) {
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
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
            h.map(function (t) {
              return { msgKey: e, receiverId: t };
            }),
          ),
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              f,
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            ));
          var y = yield o("WAWebPhashUtils").phashV2(
              [].concat(h, [o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow()]),
            ),
            C = yield _(i, f, p),
            b = C[0],
            v = C[1],
            S = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(a),
                to: o("WAWebCommsWapMd").CHAT_JID(i),
                phash: o("WAWap").CUSTOM_STRING(y),
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
              b,
              v,
            );
          yield o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode();
          var R = yield o(
              "WADeprecatedSendIq",
            ).deprecatedSendStanzaAndReturnAck(
              S,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: a,
                class: "message",
                from: i,
                participant: null,
              }),
            ),
            L = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(R);
          return L.error
            ? (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendSenderKeyMsg: Invalid ack from server",
                    ])),
                )
                .tags("messaging"),
              (c || (c = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
                ),
              ))
            : (yield o("WAWebApiParticipantStore").markHasSenderKey(i, f),
              L.success);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
          n && (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(e, r));
          var a = yield o("WAWebSignal").Session.getGroupSenderKeyInfo(e, r),
            i = yield o(
              "WAWebGetGroupKeyDistributionMsg",
            ).getKeyDistributionMsg(null, e, t, a, !0),
            l = null,
            s = !1;
          i &&
            i.length > 0 &&
            (l = o("WAWap").wap(
              "participants",
              null,
              i.map(function (e) {
                var t = e.ciphertext,
                  n = e.participant,
                  r = e.type;
                return (
                  r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                    (s = !0),
                  o("WAWap").wap(
                    "to",
                    { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                    o("WAWap").wap(
                      "enc",
                      {
                        v: o("WAWap").CUSTOM_STRING(
                          o(
                            "WAWebBackendJobsCommon",
                          ).CIPHERTEXT_VERSION.toString(),
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
          var u = null;
          if (s) {
            var c = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            u = o("WAWap").wap("device-identity", null, c);
          }
          return [l, u];
        })),
        f.apply(this, arguments)
      );
    }
    l.encryptAndSendGroupKeyDistributionMsg = d;
  },
  98,
);
