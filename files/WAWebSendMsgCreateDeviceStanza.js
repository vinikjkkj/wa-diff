__d(
  "WAWebSendMsgCreateDeviceStanza",
  [
    "invariant",
    "$InternalEnum",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBizCoexGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebCommsWapMd",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebGroupMsgSendUtils",
    "WAWebHandleMsgCommon",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = n("$InternalEnum").Mirrored(["Retry", "AppStateSync"]),
      c = n("$InternalEnum")({ OnDemand: 1 });
    async function d(e, t, n, r) {
      var a = n.option,
        i = n.recipient,
        l = n.to,
        c = t;
      return (
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
          [l],
          !1,
          o("WAWebSessionScope").SessionScope.DEFAULT,
        ),
        o("WAWebUserPrefsMeUser").isMeAccount(l) && a.type !== u.AppStateSync
          ? (i != null || s(0, 56363),
            (c = o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
              t,
              i,
            )),
            await o("WAWebICDCMetaApi").populateICDCMeta(
              o("WAWebWidFactory").asUserWidOrThrow(i),
              c,
            ))
          : await o("WAWebICDCMetaApi").populateICDCMeta(
              o("WAWebWidFactory").asUserWidOrThrow(l),
              c,
            ),
        p(e, c, babelHelpers.extends({ type: "user" }, n), r)
      );
    }
    async function m(e, t, n) {
      var a = n.option,
        i = n.participant,
        l = n.to;
      if (
        (await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
          [i],
          !1,
          o("WAWebSessionScope").SessionScope.DEFAULT,
        ),
        a.type === u.AppStateSync)
      )
        return Promise.reject(
          r("err")(
            "[messaging] createGroupDeviceMsgStanza: not expect for App State Sync message",
          ),
        );
      var s = e.data.id.remote;
      if (!s.isGroup())
        return Promise.reject(
          r("err")(
            "[messaging] createGroupDeviceMsgStanza: function called for non group WID",
          ),
        );
      var c = await o("WAWebGroupMsgSendUtils").getParticipantRecord(
          s.toString(),
        ),
        d = await o("WAWebGroupMsgSendUtils").getGroupData(s.toString(), c, e),
        m = o("WAWebUserPrefsMeUser").isMeAccount(i)
          ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(t, l)
          : t;
      return (
        await o("WAWebICDCMetaApi").populateICDCMeta(
          o("WAWebWidFactory").asUserWidOrThrow(i),
          m,
        ),
        p(e, m, babelHelpers.extends({ type: "group", groupData: d }, n))
      );
    }
    async function p(t, n, r, a) {
      var i,
        l,
        c,
        d = t.data,
        m = r.botMessageSecret,
        p = r.isLidBot,
        _ = r.option,
        f = r.to,
        g,
        h;
      r.type === "user" ? (g = r.recipient) : (h = r.participant);
      var y = h || f,
        C = (i = _.retryCount) != null ? i : 0,
        b = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(n),
        v = d.id,
        S = o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(n, d),
        R = !1;
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() && C > 0) {
        var L;
        ((L = t.data) == null
          ? void 0
          : L.senderOrRecipientAccountTypeHosted) === !0 && (R = !0);
      }
      var E = f.isBot() && g != null && !g.isBot(),
        k = !!(((l = h) != null && l.isBot()) || E),
        I = !1;
      if (
        (c = h) != null &&
        c.isBot() &&
        o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
      ) {
        var T = t.data.id.remote,
          D = await o("WAWebGroupMsgSendUtils").getGroupData(
            T.toString(),
            void 0,
          );
        I = D.isOpenBotGroup === !0;
      }
      var x =
          y.isHosted() &&
          o("WAWebMessagingGatingUtils").isSimpleSignalEnabled(),
        $ =
          k && m
            ? await o(
                "WAWebE2EProtoGenerator",
              ).updateBotInvokeMsgProtoCopyForCapi({
                message: n,
                botMessageSecret: m,
                isOpenBotGroup: I,
                mentionedJidList: d.mentionedJidList,
              })
            : n,
        P = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
          y,
          C,
          $,
          d,
          S,
          void 0,
          x,
        ),
        N = P.ciphertext,
        M = P.type,
        w = null;
      if (M === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
        var A = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
        w = o("WAWap").wap("device-identity", null, A);
      }
      (_.type !== u.Retry &&
        (await o("WAWebSendMsgCommonApi").updateIdentityRange(t, [y])),
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode());
      var F;
      _.pushPriority != null
        ? (F = o("WAWap").CUSTOM_STRING(_.pushPriority))
        : (F = _.type === u.AppStateSync ? "high" : o("WAWap").DROP_ATTR);
      var O = null;
      r.type === "group" &&
        (O =
          r.groupData.isLidAddressingMode === !0
            ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
            : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
      var B = o("WAWebSendMsgMetaNode").genMetaNode({
          chatId: f,
          groupData: r.type === "group" ? r.groupData : void 0,
          includeAttributes: {
            appendHostedSenderIntent: R,
            isCategoryPeerMessage: _.type === u.AppStateSync,
            origin: a,
          },
          msgProtobuf: n,
          msgRecord: t,
        }),
        W = g && E ? g : f,
        q = o("WAWap").wap(
          "enc",
          {
            v: o("WAWap").CUSTOM_STRING(
              o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
            ),
            type: o("WAWap").CUSTOM_STRING(M),
            state:
              x && M === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                ? o("WAWap").CUSTOM_STRING("false")
                : o("WAWap").DROP_ATTR,
            count: C === 0 ? o("WAWap").DROP_ATTR : o("WAWap").INT(C),
            mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(b),
            "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(
              o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(n),
            ),
          },
          N,
        );
      if (k) {
        var U = f.isBot() ? f : h;
        ((U != null && U.isBot()) || s(0, 75934),
          (q = o("WAWap").wap(
            "bot",
            { is_lid: p === !0 ? "true" : o("WAWap").DROP_ATTR },
            o("WAWap").wap(
              "to",
              { jid: o("WAWebCommsWapMd").DEVICE_JID(U) },
              q,
            ),
          )));
      }
      var V =
          !o("WAWebUserPrefsMeUser").isMeAccount(f) &&
          t.data.kind !== o("WAWebMsgType").MsgKind.PeerMessage
            ? await o("WAWebReportingTokenUtils").genReportingTokenBody(
                t.data,
                n,
              )
            : null,
        H = o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.isLidMigrated(),
        G,
        z,
        j;
      if (
        H &&
        o("WAWebUserPrefsMeUser").isMeAccount(W) &&
        g != null &&
        g.isRegularUser()
      )
        if (g.isLid()) {
          if (
            ((G = o("WAWebApiContact").getPhoneNumber(g)),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
          ) {
            var K = await o("WAWebApiContact").getContactRecord(g);
            (K == null ? void 0 : K.username) != null && (j = K.username);
          }
        } else {
          var Q;
          ((z =
            (Q = r.peerRecipientLid) != null
              ? Q
              : o("WAWebLidMigrationUtils").toLid(g)),
            z != null &&
              !z.isLid() &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "createDeviceMsgStanza: peerRecipientLid is not a LID: ",
                      "",
                    ])),
                  z.toLogString(),
                )
                .sendLogs("peer-recipient-lid-not-lid-device"));
        }
      return o("WAWap").wap(
        "message",
        {
          id: o("WAWap").CUSTOM_STRING(v.id),
          to: o("WAWebCommsWapMd").JID(W),
          participant:
            h && !k ? o("WAWebCommsWapMd").DEVICE_JID(h) : o("WAWap").DROP_ATTR,
          recipient:
            g && !k ? o("WAWebCommsWapMd").USER_JID(g) : o("WAWap").DROP_ATTR,
          type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
          peer_recipient_pn: G
            ? o("WAWebCommsWapMd").USER_JID(G)
            : o("WAWap").DROP_ATTR,
          peer_recipient_lid: z
            ? o("WAWebCommsWapMd").USER_JID(z)
            : o("WAWap").DROP_ATTR,
          peer_recipient_username:
            j !== void 0 ? o("WAWap").CUSTOM_STRING(j) : o("WAWap").DROP_ATTR,
          edit: o("WAWebSendMsgCommonApi").editAttribute(n, d.subtype),
          category: _.type === u.AppStateSync ? "peer" : o("WAWap").DROP_ATTR,
          push_priority: F,
          privacy_sensitive:
            _.privacySensitive != null
              ? o("WAWap").CUSTOM_STRING(
                  _.privacySensitive.valueOf().toString(),
                )
              : o("WAWap").DROP_ATTR,
          addressing_mode:
            O != null ? o("WAWap").CUSTOM_STRING(O) : o("WAWap").DROP_ATTR,
        },
        q,
        w,
        B,
        V,
      );
    }
    ((l.MsgType = u),
      (l.PrivacySensitiveType = c),
      (l.createUserDeviceMsgStanza = d),
      (l.createGroupDeviceMsgStanza = m));
  },
  98,
);
