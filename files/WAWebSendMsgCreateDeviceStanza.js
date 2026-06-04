__d(
  "WAWebSendMsgCreateDeviceStanza",
  [
    "invariant",
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
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
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = n("$InternalEnum").Mirrored(["Retry", "AppStateSync"]),
      d = n("$InternalEnum")({ OnDemand: 1 });
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = n.option,
              i = n.recipient,
              l = n.to,
              u = t;
            return (
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                [l],
                !1,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              ),
              o("WAWebUserPrefsMeUser").isMeAccount(l) &&
              a.type !== c.AppStateSync
                ? (i != null || s(0, 56363),
                  (u = o(
                    "WAWebDeviceSentMessageProtoUtils",
                  ).wrapDeviceSentMessage(t, i)),
                  yield o("WAWebICDCMetaApi").populateICDCMeta(
                    o("WAWebWidFactory").asUserWidOrThrow(i),
                    u,
                  ))
                : yield o("WAWebICDCMetaApi").populateICDCMeta(
                    o("WAWebWidFactory").asUserWidOrThrow(l),
                    u,
                  ),
              g(e, u, babelHelpers.extends({ type: "user" }, n), r)
            );
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = a.option,
            l = a.participant,
            s = a.to;
          if (
            (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              [l],
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            ),
            i.type === c.AppStateSync)
          )
            return (u || (u = n("Promise"))).reject(
              r("err")(
                "[messaging] createGroupDeviceMsgStanza: not expect for App State Sync message",
              ),
            );
          var d = e.data.id.remote;
          if (!d.isGroup())
            return (u || (u = n("Promise"))).reject(
              r("err")(
                "[messaging] createGroupDeviceMsgStanza: function called for non group WID",
              ),
            );
          var m = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
              d.toString(),
            ),
            p = yield o("WAWebGroupMsgSendUtils").getGroupData(
              d.toString(),
              m,
              e,
            ),
            _ = o("WAWebUserPrefsMeUser").isMeAccount(l)
              ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                  t,
                  s,
                )
              : t;
          return (
            yield o("WAWebICDCMetaApi").populateICDCMeta(
              o("WAWebWidFactory").asUserWidOrThrow(l),
              _,
            ),
            g(e, _, babelHelpers.extends({ type: "group", groupData: p }, a))
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i,
              l,
              u,
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
            if (C > 0) {
              var L;
              ((L = t.data) == null
                ? void 0
                : L.senderOrRecipientAccountTypeHosted) === !0 && (R = !0);
            }
            var E = f.isBot() && g != null && !g.isBot(),
              k = !!(((l = h) != null && l.isBot()) || E),
              I = !1;
            if (
              (u = h) != null &&
              u.isBot() &&
              o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
            ) {
              var T = t.data.id.remote,
                D = yield o("WAWebGroupMsgSendUtils").getGroupData(
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
                  ? yield o(
                      "WAWebE2EProtoGenerator",
                    ).updateBotInvokeMsgProtoCopyForCapi({
                      message: n,
                      botMessageSecret: m,
                      isOpenBotGroup: I,
                      mentionedJidList: d.mentionedJidList,
                    })
                  : n,
              P = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
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
              var A = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              w = o("WAWap").wap("device-identity", null, A);
            }
            (_.type !== c.Retry &&
              (yield o("WAWebSendMsgCommonApi").updateIdentityRange(t, [y])),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var F;
            _.pushPriority != null
              ? (F = o("WAWap").CUSTOM_STRING(_.pushPriority))
              : (F = _.type === c.AppStateSync ? "high" : o("WAWap").DROP_ATTR);
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
                  isCategoryPeerMessage: _.type === c.AppStateSync,
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
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    b,
                  ),
                  "decrypt-fail": o(
                    "WAWebBackendJobsCommon",
                  ).encodeMaybeDecryptFail(
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
                  ? yield o("WAWebReportingTokenUtils").genReportingTokenBody(
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
                  var K = yield o("WAWebApiContact").getContactRecord(g);
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
                  h && !k
                    ? o("WAWebCommsWapMd").DEVICE_JID(h)
                    : o("WAWap").DROP_ATTR,
                recipient:
                  g && !k
                    ? o("WAWebCommsWapMd").USER_JID(g)
                    : o("WAWap").DROP_ATTR,
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                peer_recipient_pn: G
                  ? o("WAWebCommsWapMd").USER_JID(G)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_lid: z
                  ? o("WAWebCommsWapMd").USER_JID(z)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  j !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(j),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(n, d.subtype),
                category:
                  _.type === c.AppStateSync ? "peer" : o("WAWap").DROP_ATTR,
                push_priority: F,
                privacy_sensitive:
                  _.privacySensitive != null
                    ? o("WAWap").CUSTOM_STRING(
                        _.privacySensitive.valueOf().toString(),
                      )
                    : o("WAWap").DROP_ATTR,
                addressing_mode:
                  O != null
                    ? o("WAWap").CUSTOM_STRING(O)
                    : o("WAWap").DROP_ATTR,
              },
              q,
              w,
              B,
              V,
            );
          },
        )),
        h.apply(this, arguments)
      );
    }
    ((l.MsgType = c),
      (l.PrivacySensitiveType = d),
      (l.createUserDeviceMsgStanza = m),
      (l.createGroupDeviceMsgStanza = _));
  },
  98,
);
