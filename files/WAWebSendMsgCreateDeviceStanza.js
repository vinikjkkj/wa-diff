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
    "WAWebGenerateBotMetadata",
    "WAWebGroupMsgSendUtils",
    "WAWebHandleMsgCommon",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebPQSessionScope",
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
              g({
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
            a = e.msgProtobuf,
            i = e.msgRecord,
            l = e.params,
            s = l.option,
            d = l.participant,
            m = l.to;
          if (
            (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: [d],
            }),
            s.type === c.AppStateSync)
          )
            return (u || (u = n("Promise"))).reject(
              r("err")(
                "[messaging] createGroupDeviceMsgStanza: not expect for App State Sync message",
              ),
            );
          var p = i.data.id.remote;
          if (!p.isGroup())
            return (u || (u = n("Promise"))).reject(
              r("err")(
                "[messaging] createGroupDeviceMsgStanza: function called for non group WID",
              ),
            );
          var _ = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
              p.toString(),
            ),
            f = yield o("WAWebGroupMsgSendUtils").getGroupData(
              p.toString(),
              _,
              i,
            ),
            h = (t = f.groupAgentParticipants) != null ? t : [],
            y = h;
          if (
            s.type === c.Retry &&
            d.isBot() &&
            ((y =
              f.isCag === !0 || f.isAnnouncementGroup === !0
                ? []
                : yield o(
                    "WAWebResolveGroupAgentParticipants",
                  ).resolveGroupAgentFanoutParticipants(h)),
            h.some(function (e) {
              return e.equals(d);
            }) &&
              !y.some(function (e) {
                return e.equals(d);
              }))
          )
            return (u || (u = n("Promise"))).reject(
              r("err")(
                "[messaging] createGroupDeviceMsgStanza: retry requested for an ineligible group agent",
              ),
            );
          var C = babelHelpers.extends({}, f, { groupAgentParticipants: y }),
            b = o("WAWebGenerateBotMetadata").addGroupAgentBotMetadata(a, y),
            v = o("WAWebUserPrefsMeUser").isMeAccount(d)
              ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                  b,
                  m,
                )
              : b;
          return (
            yield o("WAWebICDCMetaApi").populateICDCMeta(
              o("WAWebWidFactory").asUserWidOrThrow(d),
              v,
            ),
            g({
              msgProtobuf: v,
              msgRecord: i,
              params: babelHelpers.extends({ type: "group", groupData: C }, l),
            })
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r,
            a,
            i,
            l,
            u,
            d = t.msgProtobuf,
            m = t.msgRecord,
            p = t.origin,
            _ = t.params,
            f = m.data,
            g = _.botMessageSecret,
            h = _.isLidBot,
            y = _.option,
            C = _.to,
            b,
            v;
          _.type === "user" ? (b = _.recipient) : (v = _.participant);
          var S = v || C,
            R = (n = y.retryCount) != null ? n : 0,
            L = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(d),
            E = f.id,
            k = o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(d, f),
            I = !1;
          if (R > 0) {
            var T;
            ((T = m.data) == null
              ? void 0
              : T.senderOrRecipientAccountTypeHosted) === !0 && (I = !0);
          }
          var D = C.isBot() && b != null && !b.isBot(),
            x = !!(((r = v) != null && r.isBot()) || D),
            $ =
              _.type === "group" &&
              ((a = v) == null ? void 0 : a.isBot()) === !0 &&
              ((i = _.groupData.groupAgentParticipants) == null
                ? void 0
                : i.some(function (e) {
                    return e.equals(v);
                  })) === !0,
            P = !1;
          if (
            (l = v) != null &&
            l.isBot() &&
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
          ) {
            var N = m.data.id.remote,
              M = yield o("WAWebGroupMsgSendUtils").getGroupData(
                N.toString(),
                void 0,
              );
            P = M.isOpenBotGroup === !0;
          }
          var w =
              S.isHosted() &&
              o("WAWebMessagingGatingUtils").isSimpleSignalEnabled(),
            A = $ || (x && g != null),
            F = A
              ? yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: d,
                  messageSecret: f.messageSecret,
                  botMessageSecret: g,
                  isGroupAgentParticipantSend: $,
                  isOpenBotGroup: P,
                  mentionedJidList: $ ? null : f.mentionedJidList,
                })
              : d,
            O =
              $ && ((u = v) == null ? void 0 : u.isFbidBot()) === !0
                ? o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(F)
                : F,
            B =
              _.type === "user" &&
              y.type === c.Retry &&
              !x &&
              !o("WAWebUserPrefsMeUser").isMeAccount(C),
            W = yield o("WAWebPQSessionScope").resolvePqSendScope(S, B),
            q = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              S,
              R,
              O,
              f,
              k,
              W,
              w,
            ),
            U = q.ciphertext,
            V = q.type,
            H = null;
          if (V === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
            var G = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            H = o("WAWap").wap("device-identity", null, G);
          }
          (y.type !== c.Retry &&
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(m, [S])),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var z;
          y.pushPriority != null
            ? (z = o("WAWap").CUSTOM_STRING(y.pushPriority))
            : (z = y.type === c.AppStateSync ? "high" : o("WAWap").DROP_ATTR);
          var j = null;
          _.type === "group" &&
            (j =
              _.groupData.isLidAddressingMode === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var K = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: C,
              groupData: _.type === "group" ? _.groupData : void 0,
              includeAttributes: {
                appendHostedSenderIntent: I,
                isCategoryPeerMessage: y.type === c.AppStateSync,
                origin: p,
              },
              msgProtobuf: d,
              msgRecord: m,
            }),
            Q = b && D ? b : C,
            X = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(V),
                session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(U)
                  ? o("WAWap").CUSTOM_STRING("pq")
                  : o("WAWap").DROP_ATTR,
                state:
                  w && V === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                    ? o("WAWap").CUSTOM_STRING("false")
                    : o("WAWap").DROP_ATTR,
                count: R === 0 ? o("WAWap").DROP_ATTR : o("WAWap").INT(R),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(L),
                "decrypt-fail": o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeDecryptFail(
                  o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(d),
                ),
              },
              U,
            );
          if (x) {
            var Y = C.isBot() ? C : v;
            ((Y != null && Y.isBot()) || s(0, 75934),
              (X = o("WAWap").wap(
                "bot",
                { is_lid: h === !0 ? "true" : o("WAWap").DROP_ATTR },
                o("WAWap").wap(
                  "to",
                  { jid: o("WAWebCommsWapMd").DEVICE_JID(Y) },
                  X,
                ),
              )));
          }
          var J =
              !o("WAWebUserPrefsMeUser").isMeAccount(C) &&
              m.data.kind !== o("WAWebMsgType").MsgKind.PeerMessage
                ? yield o("WAWebReportingTokenUtils").genReportingTokenBody(
                    m.data,
                    d,
                  )
                : null,
            Z = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated(),
            ee,
            te,
            ne;
          if (
            Z &&
            o("WAWebUserPrefsMeUser").isMeAccount(Q) &&
            b != null &&
            b.isRegularUser()
          )
            if (b.isLid()) {
              if (
                ((ee = o("WAWebApiContact").getPhoneNumber(b)),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
              ) {
                var re = yield o("WAWebApiContact").getContactRecord(b);
                (re == null ? void 0 : re.username) != null &&
                  (ne = re.username);
              }
            } else {
              var oe;
              ((te =
                (oe = _.peerRecipientLid) != null
                  ? oe
                  : o("WAWebLidMigrationUtils").toLid(b)),
                te != null &&
                  !te.isLid() &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "createDeviceMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      te.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-device"));
            }
          return o("WAWap").wap(
            "message",
            {
              id: o("WAWap").CUSTOM_STRING(E.id),
              to: o("WAWebCommsWapMd").JID(Q),
              participant:
                v && !x
                  ? o("WAWebCommsWapMd").DEVICE_JID(v)
                  : o("WAWap").DROP_ATTR,
              recipient:
                b && !x
                  ? o("WAWebCommsWapMd").USER_JID(b)
                  : o("WAWap").DROP_ATTR,
              type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(d),
              peer_recipient_pn: ee
                ? o("WAWebCommsWapMd").USER_JID(ee)
                : o("WAWap").DROP_ATTR,
              peer_recipient_lid: te
                ? o("WAWebCommsWapMd").USER_JID(te)
                : o("WAWap").DROP_ATTR,
              peer_recipient_username:
                ne !== void 0
                  ? o("WAWap").CUSTOM_STRING(
                      o("WAWebUsernameTypes").serializeUsername(ne),
                    )
                  : o("WAWap").DROP_ATTR,
              edit: o("WAWebSendMsgCommonApi").editAttribute(d, f.subtype),
              category:
                y.type === c.AppStateSync ? "peer" : o("WAWap").DROP_ATTR,
              push_priority: z,
              privacy_sensitive:
                y.privacySensitive != null
                  ? o("WAWap").CUSTOM_STRING(
                      y.privacySensitive.valueOf().toString(),
                    )
                  : o("WAWap").DROP_ATTR,
              addressing_mode:
                j != null ? o("WAWap").CUSTOM_STRING(j) : o("WAWap").DROP_ATTR,
            },
            X,
            H,
            K,
            J,
          );
        })),
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
