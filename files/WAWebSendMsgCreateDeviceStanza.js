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
    "WAWebPQSessionScope",
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
            (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: [l],
            }),
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
            g({
              msgProtobuf: _,
              msgRecord: e,
              params: babelHelpers.extends({ type: "group", groupData: p }, a),
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
            i = t.msgProtobuf,
            l = t.msgRecord,
            u = t.origin,
            d = t.params,
            m = l.data,
            p = d.botMessageSecret,
            _ = d.isLidBot,
            f = d.option,
            g = d.to,
            h,
            y;
          d.type === "user" ? (h = d.recipient) : (y = d.participant);
          var C = y || g,
            b = (n = f.retryCount) != null ? n : 0,
            v = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
            S = m.id,
            R = o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(i, m),
            L = !1;
          if (b > 0) {
            var E;
            ((E = l.data) == null
              ? void 0
              : E.senderOrRecipientAccountTypeHosted) === !0 && (L = !0);
          }
          var k = g.isBot() && h != null && !h.isBot(),
            I = !!(((r = y) != null && r.isBot()) || k),
            T = !1;
          if (
            (a = y) != null &&
            a.isBot() &&
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()
          ) {
            var D = l.data.id.remote,
              x = yield o("WAWebGroupMsgSendUtils").getGroupData(
                D.toString(),
                void 0,
              );
            T = x.isOpenBotGroup === !0;
          }
          var $ =
              C.isHosted() &&
              o("WAWebMessagingGatingUtils").isSimpleSignalEnabled(),
            P =
              I && p
                ? yield o(
                    "WAWebE2EProtoGenerator",
                  ).updateBotInvokeMsgProtoCopyForCapi({
                    message: i,
                    botMessageSecret: p,
                    isOpenBotGroup: T,
                    mentionedJidList: m.mentionedJidList,
                  })
                : i,
            N =
              d.type === "user" &&
              f.type === c.Retry &&
              !I &&
              !o("WAWebUserPrefsMeUser").isMeAccount(g),
            M = yield o("WAWebPQSessionScope").resolvePqSendScope(C, N),
            w = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              C,
              b,
              P,
              m,
              R,
              M,
              $,
            ),
            A = w.ciphertext,
            F = w.type,
            O = null;
          if (F === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
            var B = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            O = o("WAWap").wap("device-identity", null, B);
          }
          (f.type !== c.Retry &&
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(l, [C])),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var W;
          f.pushPriority != null
            ? (W = o("WAWap").CUSTOM_STRING(f.pushPriority))
            : (W = f.type === c.AppStateSync ? "high" : o("WAWap").DROP_ATTR);
          var q = null;
          d.type === "group" &&
            (q =
              d.groupData.isLidAddressingMode === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var U = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: g,
              groupData: d.type === "group" ? d.groupData : void 0,
              includeAttributes: {
                appendHostedSenderIntent: L,
                isCategoryPeerMessage: f.type === c.AppStateSync,
                origin: u,
              },
              msgProtobuf: i,
              msgRecord: l,
            }),
            V = h && k ? h : g,
            H = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(F),
                session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(A)
                  ? o("WAWap").CUSTOM_STRING("pq")
                  : o("WAWap").DROP_ATTR,
                state:
                  $ && F === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                    ? o("WAWap").CUSTOM_STRING("false")
                    : o("WAWap").DROP_ATTR,
                count: b === 0 ? o("WAWap").DROP_ATTR : o("WAWap").INT(b),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(v),
                "decrypt-fail": o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeDecryptFail(
                  o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(i),
                ),
              },
              A,
            );
          if (I) {
            var G = g.isBot() ? g : y;
            ((G != null && G.isBot()) || s(0, 75934),
              (H = o("WAWap").wap(
                "bot",
                { is_lid: _ === !0 ? "true" : o("WAWap").DROP_ATTR },
                o("WAWap").wap(
                  "to",
                  { jid: o("WAWebCommsWapMd").DEVICE_JID(G) },
                  H,
                ),
              )));
          }
          var z =
              !o("WAWebUserPrefsMeUser").isMeAccount(g) &&
              l.data.kind !== o("WAWebMsgType").MsgKind.PeerMessage
                ? yield o("WAWebReportingTokenUtils").genReportingTokenBody(
                    l.data,
                    i,
                  )
                : null,
            j = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated(),
            K,
            Q,
            X;
          if (
            j &&
            o("WAWebUserPrefsMeUser").isMeAccount(V) &&
            h != null &&
            h.isRegularUser()
          )
            if (h.isLid()) {
              if (
                ((K = o("WAWebApiContact").getPhoneNumber(h)),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
              ) {
                var Y = yield o("WAWebApiContact").getContactRecord(h);
                (Y == null ? void 0 : Y.username) != null && (X = Y.username);
              }
            } else {
              var J;
              ((Q =
                (J = d.peerRecipientLid) != null
                  ? J
                  : o("WAWebLidMigrationUtils").toLid(h)),
                Q != null &&
                  !Q.isLid() &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "createDeviceMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      Q.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-device"));
            }
          return o("WAWap").wap(
            "message",
            {
              id: o("WAWap").CUSTOM_STRING(S.id),
              to: o("WAWebCommsWapMd").JID(V),
              participant:
                y && !I
                  ? o("WAWebCommsWapMd").DEVICE_JID(y)
                  : o("WAWap").DROP_ATTR,
              recipient:
                h && !I
                  ? o("WAWebCommsWapMd").USER_JID(h)
                  : o("WAWap").DROP_ATTR,
              type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(i),
              peer_recipient_pn: K
                ? o("WAWebCommsWapMd").USER_JID(K)
                : o("WAWap").DROP_ATTR,
              peer_recipient_lid: Q
                ? o("WAWebCommsWapMd").USER_JID(Q)
                : o("WAWap").DROP_ATTR,
              peer_recipient_username:
                X !== void 0
                  ? o("WAWap").CUSTOM_STRING(
                      o("WAWebUsernameTypes").serializeUsername(X),
                    )
                  : o("WAWap").DROP_ATTR,
              edit: o("WAWebSendMsgCommonApi").editAttribute(i, m.subtype),
              category:
                f.type === c.AppStateSync ? "peer" : o("WAWap").DROP_ATTR,
              push_priority: W,
              privacy_sensitive:
                f.privacySensitive != null
                  ? o("WAWap").CUSTOM_STRING(
                      f.privacySensitive.valueOf().toString(),
                    )
                  : o("WAWap").DROP_ATTR,
              addressing_mode:
                q != null ? o("WAWap").CUSTOM_STRING(q) : o("WAWap").DROP_ATTR,
            },
            H,
            O,
            U,
            z,
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
