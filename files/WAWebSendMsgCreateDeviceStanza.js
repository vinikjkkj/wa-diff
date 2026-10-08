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
    "WAWebBotUtils",
    "WAWebCommsWapMd",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebGenerateBotGroupMetadata",
    "WAWebGroupMsgSendUtils",
    "WAWebHandleMsgCommon",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebPQSessionScope",
    "WAWebRemoveQuotedAttachmentMediaFields",
    "WAWebReportingTokenUtils",
    "WAWebResolveGroupAgentParticipants",
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
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [l],
              }),
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
              h({
                msgProtobuf: u,
                msgRecord: e,
                origin: r,
                params: babelHelpers.extends({ type: "user" }, n),
              })
            );
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l = e.msgProtobuf,
            s = e.msgRecord,
            d = e.params,
            m = d.option,
            p = d.participant,
            _ = d.to;
          if (
            (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: [p],
            }),
            m.type === c.AppStateSync)
          )
            return (u || (u = n("Promise"))).reject(
              r("err")(
                "[messaging] createGroupDeviceMsgStanza: not expect for App State Sync message",
              ),
            );
          var f = s.data.id.remote;
          if (!f.isGroup())
            return (u || (u = n("Promise"))).reject(
              r("err")(
                "[messaging] createGroupDeviceMsgStanza: function called for non group WID",
              ),
            );
          var y = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
              f.toString(),
            ),
            C = yield o("WAWebGroupMsgSendUtils").getGroupData(
              f.toString(),
              y,
              s,
            ),
            b = (t = C.groupAgentParticipants) != null ? t : [],
            v = b;
          if (m.type === c.Retry && p.isBot()) {
            var S = yield o(
              "WAWebResolveGroupAgentParticipants",
            ).resolveGroupAgentFanoutForGroupSend(C);
            if (
              ((v = S.resolvedGroupAgentParticipants),
              b.some(function (e) {
                return e.equals(p);
              }) &&
                !v.some(function (e) {
                  return e.equals(p);
                }))
            )
              return (u || (u = n("Promise"))).reject(
                r("err")(
                  "[messaging] createGroupDeviceMsgStanza: retry requested for an ineligible group agent",
                ),
              );
          }
          var R =
              m.type === c.Retry &&
              (a =
                (i = s.data.botGroupParticipants) == null
                  ? void 0
                  : i.filter(g)) != null
                ? a
                : v,
            L =
              p.equals(o("WAWebBotUtils").META_BOT_FBID_WID) &&
              (yield o(
                "WAWebResolveGroupAgentParticipants",
              ).hasMuseNoticeGroupAgent(b)),
            E = babelHelpers.extends({}, C, { groupAgentParticipants: v }),
            k = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
              o(
                "WAWebRemoveQuotedAttachmentMediaFields",
              ).isGroupWithAgentParticipant(C)
                ? o(
                    "WAWebRemoveQuotedAttachmentMediaFields",
                  ).removeQuotedAttachmentMediaFields(l)
                : l,
              R,
            ),
            I = o("WAWebUserPrefsMeUser").isMeAccount(p)
              ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                  k,
                  _,
                )
              : k;
          return (
            yield o("WAWebICDCMetaApi").populateICDCMeta(
              o("WAWebWidFactory").asUserWidOrThrow(p),
              I,
            ),
            h({
              msgProtobuf: I,
              msgRecord: s,
              params: babelHelpers.extends(
                {
                  type: "group",
                  groupData: E,
                  groupAgentPolicyParticipants: R,
                  groupHasMuseAgent: L,
                },
                d,
              ),
            })
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return (
        !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
        !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r,
            a,
            i,
            l,
            u,
            d,
            m,
            p,
            _ = t.msgProtobuf,
            f = t.msgRecord,
            g = t.origin,
            h = t.params,
            y = f.data,
            C = h.botMessageSecret,
            b = h.isLidBot,
            v = h.option,
            S = h.to,
            R,
            L;
          h.type === "user" ? (R = h.recipient) : (L = h.participant);
          var E = L || S,
            k = (n = v.retryCount) != null ? n : 0,
            I = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(_),
            T = y.id,
            D = o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(_, y),
            x = !1;
          if (k > 0) {
            var $;
            (($ = f.data) == null
              ? void 0
              : $.senderOrRecipientAccountTypeHosted) === !0 && (x = !0);
          }
          var P = S.isBot() && R != null && !R.isBot(),
            N = !!(((r = L) != null && r.isBot()) || P),
            M =
              h.type === "group" &&
              ((a = L) == null ? void 0 : a.isBot()) === !0 &&
              ((i = h.groupData.groupAgentParticipants) == null
                ? void 0
                : i.some(function (e) {
                    return e.equals(L);
                  })) === !0,
            w =
              h.type === "group"
                ? (l =
                    (u = h.groupAgentPolicyParticipants) != null
                      ? u
                      : h.groupData.groupAgentParticipants) != null
                  ? l
                  : []
                : [],
            A =
              ((d = L) == null ? void 0 : d.isBot()) === !0 &&
              w.some(function (e) {
                return e.equals(L);
              }),
            F =
              h.type === "group" &&
              L != null &&
              L.equals(o("WAWebBotUtils").META_BOT_FBID_WID),
            O = A || (F && w.length > 0),
            B = !1;
          if (
            (m = L) != null &&
            m.isBot() &&
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
          ) {
            var W = f.data.id.remote,
              q = yield o("WAWebGroupMsgSendUtils").getGroupData(
                W.toString(),
                void 0,
              );
            B = q.isOpenBotGroup === !0;
          }
          var U =
              E.isHosted() &&
              o("WAWebMessagingGatingUtils").isSimpleSignalEnabled(),
            V = M || (N && C != null),
            H = V
              ? yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: _,
                  messageSecret: y.messageSecret,
                  botMessageSecret: C,
                  groupHasMuseAgent:
                    h.type === "group" && h.groupHasMuseAgent === !0,
                  hasGroupAgentTarget: O,
                  hasOpenBotTarget: F,
                  isGroupAgentParticipantSend: A,
                  isGroupMsg: h.type === "group",
                  isOpenBotGroup: B,
                  mentionedJidList: O && !F ? null : y.mentionedJidList,
                })
              : _,
            G =
              A && ((p = L) == null ? void 0 : p.isFbidBot()) === !0
                ? o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(H)
                : H,
            z =
              h.type === "user" &&
              v.type === c.Retry &&
              !N &&
              !o("WAWebUserPrefsMeUser").isMeAccount(S),
            j = yield o("WAWebPQSessionScope").resolvePqSendScope(E, z),
            K = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              E,
              k,
              G,
              y,
              D,
              j,
              U,
            ),
            Q = K.ciphertext,
            X = K.type,
            Y = null;
          if (X === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
            var J = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Y = o("WAWap").wap("device-identity", null, J);
          }
          (v.type !== c.Retry &&
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(f, [E])),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var Z;
          v.pushPriority != null
            ? (Z = o("WAWap").CUSTOM_STRING(v.pushPriority))
            : (Z = v.type === c.AppStateSync ? "high" : o("WAWap").DROP_ATTR);
          var ee = null;
          h.type === "group" &&
            (ee =
              h.groupData.isLidAddressingMode === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var te = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: S,
              groupData: h.type === "group" ? h.groupData : void 0,
              includeAttributes: {
                appendHostedSenderIntent: x,
                isCategoryPeerMessage: v.type === c.AppStateSync,
                origin: g,
              },
              msgProtobuf: _,
              msgRecord: f,
            }),
            ne = R && P ? R : S,
            re = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(X),
                session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(Q)
                  ? o("WAWap").CUSTOM_STRING("pq")
                  : o("WAWap").DROP_ATTR,
                state:
                  U && X === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                    ? o("WAWap").CUSTOM_STRING("false")
                    : o("WAWap").DROP_ATTR,
                count: k === 0 ? o("WAWap").DROP_ATTR : o("WAWap").INT(k),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(I),
                "decrypt-fail": o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeDecryptFail(
                  o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(_),
                ),
              },
              Q,
            );
          if (N) {
            var oe = S.isBot() ? S : L;
            ((oe != null && oe.isBot()) || s(0, 75934),
              (re = o("WAWap").wap(
                "bot",
                { is_lid: b === !0 ? "true" : o("WAWap").DROP_ATTR },
                o("WAWap").wap(
                  "to",
                  { jid: o("WAWebCommsWapMd").DEVICE_JID(oe) },
                  re,
                ),
              )));
          }
          var ae =
              !o("WAWebUserPrefsMeUser").isMeAccount(S) &&
              f.data.kind !== o("WAWebMsgType").MsgKind.PeerMessage
                ? yield o("WAWebReportingTokenUtils").genReportingTokenBody(
                    f.data,
                    _,
                  )
                : null,
            ie = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated(),
            le,
            se,
            ue;
          if (
            ie &&
            o("WAWebUserPrefsMeUser").isMeAccount(ne) &&
            R != null &&
            R.isRegularUser()
          )
            if (R.isLid()) {
              if (
                ((le = o("WAWebApiContact").getPhoneNumber(R)),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
              ) {
                var ce = yield o("WAWebApiContact").getContactRecord(R);
                (ce == null ? void 0 : ce.username) != null &&
                  (ue = ce.username);
              }
            } else {
              var de;
              ((se =
                (de = h.peerRecipientLid) != null
                  ? de
                  : o("WAWebLidMigrationUtils").toLid(R)),
                se != null &&
                  !se.isLid() &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "createDeviceMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      se.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-device"));
            }
          return o("WAWap").wap(
            "message",
            {
              id: o("WAWap").CUSTOM_STRING(T.id),
              to: o("WAWebCommsWapMd").JID(ne),
              participant:
                L && !N
                  ? o("WAWebCommsWapMd").DEVICE_JID(L)
                  : o("WAWap").DROP_ATTR,
              recipient:
                R && !N
                  ? o("WAWebCommsWapMd").USER_JID(R)
                  : o("WAWap").DROP_ATTR,
              type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(_),
              peer_recipient_pn: le
                ? o("WAWebCommsWapMd").USER_JID(le)
                : o("WAWap").DROP_ATTR,
              peer_recipient_lid: se
                ? o("WAWebCommsWapMd").USER_JID(se)
                : o("WAWap").DROP_ATTR,
              peer_recipient_username:
                ue !== void 0
                  ? o("WAWap").CUSTOM_STRING(
                      o("WAWebUsernameTypes").serializeUsername(ue),
                    )
                  : o("WAWap").DROP_ATTR,
              edit: o("WAWebSendMsgCommonApi").editAttribute(_, y.subtype),
              category:
                v.type === c.AppStateSync ? "peer" : o("WAWap").DROP_ATTR,
              push_priority: Z,
              privacy_sensitive:
                v.privacySensitive != null
                  ? o("WAWap").CUSTOM_STRING(
                      v.privacySensitive.valueOf().toString(),
                    )
                  : o("WAWap").DROP_ATTR,
              addressing_mode:
                ee != null
                  ? o("WAWap").CUSTOM_STRING(ee)
                  : o("WAWap").DROP_ATTR,
            },
            re,
            Y,
            te,
            ae,
          );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.MsgType = c),
      (l.PrivacySensitiveType = d),
      (l.createUserDeviceMsgStanza = m),
      (l.createGroupDeviceMsgStanza = _));
  },
  98,
);
