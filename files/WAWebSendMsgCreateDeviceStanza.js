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
    "WAWebMsgType",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
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
            if (
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              C > 0
            ) {
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
            var x = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                y,
                C,
                k && m
                  ? o(
                      "WAWebE2EProtoGenerator",
                    ).updateBotInvokeMsgProtoCopyForCapi(n, m, I)
                  : n,
                d,
                S,
              ),
              $ = x.ciphertext,
              P = x.type,
              N = null;
            if (P === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
              var M = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              N = o("WAWap").wap("device-identity", null, M);
            }
            (_.type !== c.Retry &&
              (yield o("WAWebSendMsgCommonApi").updateIdentityRange(t, [y])),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var w;
            _.pushPriority != null
              ? (w = o("WAWap").CUSTOM_STRING(_.pushPriority))
              : (w = _.type === c.AppStateSync ? "high" : o("WAWap").DROP_ATTR);
            var A = null;
            r.type === "group" &&
              (A =
                r.groupData.isLidAddressingMode === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
            var F = o("WAWebSendMsgMetaNode").genMetaNode(
                f,
                t,
                n,
                r.type === "group" ? r.groupData : void 0,
                {
                  appendHostedSenderIntent: R,
                  isCategoryPeerMessage: _.type === c.AppStateSync,
                  origin: a,
                },
              ),
              O = g && E ? g : f,
              B = o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING(P),
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
                $,
              );
            if (k) {
              var W = f.isBot() ? f : h;
              ((W != null && W.isBot()) || s(0, 75934),
                (B = o("WAWap").wap(
                  "bot",
                  { is_lid: p === !0 ? "true" : o("WAWap").DROP_ATTR },
                  o("WAWap").wap(
                    "to",
                    { jid: o("WAWebCommsWapMd").DEVICE_JID(W) },
                    B,
                  ),
                )));
            }
            var q =
                !o("WAWebUserPrefsMeUser").isMeAccount(f) &&
                t.data.kind !== o("WAWebMsgType").MsgKind.PeerMessage
                  ? yield o("WAWebReportingTokenUtils").genReportingTokenBody(
                      t.data,
                      n,
                    )
                  : null,
              U = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated(),
              V,
              H,
              G;
            if (
              U &&
              o("WAWebUserPrefsMeUser").isMeAccount(O) &&
              g != null &&
              g.isRegularUser()
            )
              if (g.isLid()) {
                if (
                  ((V = o("WAWebApiContact").getPhoneNumber(g)),
                  o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
                ) {
                  var z = yield o("WAWebApiContact").getContactRecord(g);
                  (z == null ? void 0 : z.username) != null && (G = z.username);
                }
              } else {
                var j;
                ((H =
                  (j = r.peerRecipientLid) != null
                    ? j
                    : o("WAWebLidMigrationUtils").toLid(g)),
                  H != null &&
                    !H.isLid() &&
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "createDeviceMsgStanza: peerRecipientLid is not a LID: ",
                            "",
                          ])),
                        H.toLogString(),
                      )
                      .sendLogs("peer-recipient-lid-not-lid-device"));
              }
            return o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(v.id),
                to: o("WAWebCommsWapMd").JID(O),
                participant:
                  h && !k
                    ? o("WAWebCommsWapMd").DEVICE_JID(h)
                    : o("WAWap").DROP_ATTR,
                recipient:
                  g && !k
                    ? o("WAWebCommsWapMd").USER_JID(g)
                    : o("WAWap").DROP_ATTR,
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                peer_recipient_pn: V
                  ? o("WAWebCommsWapMd").USER_JID(V)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_lid: H
                  ? o("WAWebCommsWapMd").USER_JID(H)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  G !== void 0
                    ? o("WAWap").CUSTOM_STRING(G)
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(n, d.subtype),
                category:
                  _.type === c.AppStateSync ? "peer" : o("WAWap").DROP_ATTR,
                push_priority: w,
                privacy_sensitive:
                  _.privacySensitive != null
                    ? o("WAWap").CUSTOM_STRING(
                        _.privacySensitive.valueOf().toString(),
                      )
                    : o("WAWap").DROP_ATTR,
                addressing_mode:
                  A != null
                    ? o("WAWap").CUSTOM_STRING(A)
                    : o("WAWap").DROP_ATTR,
              },
              B,
              N,
              F,
              q,
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
