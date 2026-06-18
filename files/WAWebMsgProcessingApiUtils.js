__d(
  "WAWebMsgProcessingApiUtils",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebBatchedStatusIdUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCTWAGatingUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBMessageSerialization",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebDisappearingModeGroupsProtoUtils",
    "WAWebE2EProtoParser",
    "WAWebE2EProtoUtils",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgAGMProcessing",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebMsmsgMsgSecretCache",
    "WAWebSchemaMessage",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumDsmError",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgProtobuf"],
      s = ["msgProtobuf"],
      u = ["msgProtobuf"],
      c = ["decrypted", "reparsing"],
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S;
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !(
              n == null ||
              t == null ||
              !r("WAWebWid").isGroup(t) ||
              !(e.ephemeralDuration == null || e.ephemeralDuration === 0)
            )
          )
            try {
              var a = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
              a != null &&
                a.ephemeralDuration > 0 &&
                ((e.ephemeralDuration = a.ephemeralDuration),
                o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot group] Applied group ephemeral duration ",
                        " to bot message",
                      ])),
                    String(a.ephemeralDuration),
                  )
                  .sendLogs("bot-group-ephemeral-fallback"));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot group] ephemeral fallback failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("bot-group-ephemeral-fallback-error");
            }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u = "";
      (((t = e.protocolMessage) == null ? void 0 : t.historySyncNotification) !=
      null
        ? (u = "historySyncNotification")
        : ((n = e.protocolMessage) == null
              ? void 0
              : n.initialSecurityNotificationSettingSync) != null
          ? (u = "initialSecurityNotificationSettingSync")
          : ((r = e.protocolMessage) == null
                ? void 0
                : r.appStateSyncKeyRequest) != null
            ? (u = "appStateSyncKeyRequest")
            : ((a = e.protocolMessage) == null
                  ? void 0
                  : a.appStateSyncKeyShare) != null
              ? (u = "appStateSyncKeyShare")
              : ((i = e.protocolMessage) == null
                    ? void 0
                    : i.peerDataOperationRequestResponseMessage) != null
                ? (u = "peerDataOperationRequestResponseMessage")
                : ((l = e.protocolMessage) == null
                      ? void 0
                      : l.peerDataOperationRequestMessage) != null
                  ? (u = "peerDataOperationRequestMessage")
                  : ((s = e.protocolMessage) == null
                      ? void 0
                      : s.cloudApiThreadControlNotification) != null &&
                    (u = "cloudApiThreadControlNotification"),
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "protocol message: wid error in type ",
                "",
              ])),
            u,
          )
          .sendLogs("wid error"));
    }
    function k(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        c = e.bizInfo,
        d = e.info,
        m = e.msgBotInfo,
        p = e.msgProtobuf,
        _ = e.paymentInfo,
        f,
        g = Z(d);
      if (!o("WAWebUserPrefsMeUser").isMeAccount(g)) {
        E(p);
        return;
      }
      if (
        ((t = p.protocolMessage) == null
          ? void 0
          : t.historySyncNotification) != null
      ) {
        var h = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: p,
          message: G(d),
          msgContext: "relay",
          paymentInfo: _,
          bizInfo: c,
        });
        (z(h, m), (f = { history: r("WANullthrows")(h.historySyncMetaData) }));
      } else if (
        ((n = p.protocolMessage) == null
          ? void 0
          : n.initialSecurityNotificationSettingSync) != null
      ) {
        var y;
        f = {
          securityNotificationEnabled: {
            isEnabled:
              (y =
                p.protocolMessage.initialSecurityNotificationSettingSync
                  .securityNotificationEnabled) != null
                ? y
                : !0,
          },
        };
      } else if (
        ((a = p.protocolMessage) == null ? void 0 : a.appStateSyncKeyShare) !=
        null
      )
        f = { appStateSyncKeyShare: p.protocolMessage.appStateSyncKeyShare };
      else if (
        ((i = p.protocolMessage) == null ? void 0 : i.appStateSyncKeyRequest) !=
        null
      )
        f = {
          appStateSyncKeyRequest: p.protocolMessage.appStateSyncKeyRequest,
        };
      else if (
        ((l = p.protocolMessage) == null
          ? void 0
          : l.peerDataOperationRequestResponseMessage) != null
      ) {
        var C;
        f = {
          peerDataOperationRequestResponseMessage:
            (C = p.protocolMessage) == null
              ? void 0
              : C.peerDataOperationRequestResponseMessage,
        };
      } else if (
        ((s = p.protocolMessage) == null
          ? void 0
          : s.peerDataOperationRequestMessage) != null
      ) {
        var b;
        f = {
          peerDataOperationRequestMessage:
            (b = p.protocolMessage) == null
              ? void 0
              : b.peerDataOperationRequestMessage,
        };
      } else if (
        ((u = p.protocolMessage) == null
          ? void 0
          : u.cloudApiThreadControlNotification) != null
      ) {
        var v;
        f = {
          cloudApiThreadControlNotification:
            (v = p.protocolMessage) == null
              ? void 0
              : v.cloudApiThreadControlNotification,
        };
      }
      return f;
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l,
            s,
            u,
            c,
            d = e.info,
            m = e.msgProtobuf;
          if (
            ((t = m.protocolMessage) == null
              ? void 0
              : t.historySyncNotification) != null ||
            ((n = m.protocolMessage) == null
              ? void 0
              : n.initialSecurityNotificationSettingSync) != null ||
            ((a = m.protocolMessage) == null
              ? void 0
              : a.appStateSyncKeyShare) != null ||
            ((i = m.protocolMessage) == null
              ? void 0
              : i.appStateSyncKeyRequest) != null ||
            ((l = m.protocolMessage) == null
              ? void 0
              : l.peerDataOperationRequestResponseMessage) != null ||
            ((s = m.protocolMessage) == null
              ? void 0
              : s.peerDataOperationRequestMessage) != null ||
            ((u = m.protocolMessage) == null
              ? void 0
              : u.cloudApiThreadControlNotification) != null
          )
            return k({
              info: d,
              msgProtobuf: m,
              paymentInfo: e.paymentInfo,
              bizInfo: e.bizInfo,
              hsmInfo: e.hsmInfo,
            });
          if (
            ((c = m.protocolMessage) == null
              ? void 0
              : c.lidMigrationMappingSyncMessage) != null
          )
            return {
              lidMigrationSyncMessage:
                m.protocolMessage.lidMigrationMappingSyncMessage,
            };
          switch (d.type) {
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT:
              return o("WAWebUserPrefsMeUser").isMeAccount(d.author)
                ? $(e)
                : w(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP:
              return d.isDirect &&
                o("WAWebUserPrefsMeUser").isMeAccount(d.author) &&
                !ee(e)
                ? $(e)
                : w(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST: {
              if (
                e.ciphertextType ===
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg
              ) {
                if (!d.bclHashValidated)
                  throw r("err")(
                    "parseMessage: participants for peer broadcast message is not validated",
                  );
                return w(e);
              }
              return e.isMessageRetry === !0 &&
                e.msgProtobuf.deviceSentMessage == null
                ? w(e)
                : N(e);
            }
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST:
              return w(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS:
              return d.isDirect === !0 ? D(e) : N(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS:
              return w(e);
            default:
              throw r("err")("Unrecognized MESSAGE_TYPE");
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield $(e);
          } catch (n) {
            if (n instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
              var t = Object.keys(e.msgProtobuf).filter(function (e) {
                return (
                  e !== "$$unknownFieldCount" && e !== "messageContextInfo"
                );
              });
              if (t.length === 1 && t[0] === "senderKeyDistributionMessage")
                return w(e);
            }
            throw n;
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            a = n.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              J(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.destinationJid == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              J(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.destinationJid,
            l = yield F(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(n),
              r,
            );
          return babelHelpers.extends(
            { deviceSent: { destination: o("WAWebWidFactory").createWid(i) } },
            l,
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = babelHelpers.objectWithoutPropertiesLoose(e, s),
            r = n.info,
            a = t.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              J(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.phash == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              J(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.phash,
            l = yield F(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(t),
              n,
            );
          return babelHelpers.extends({ deviceSent: { phash: i, info: r } }, l);
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
          if (t.deviceSentMessage != null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              J(n.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER,
            );
          var r = yield F(t, n);
          return babelHelpers.extends({ deviceSent: null }, r);
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i,
            l,
            s,
            u,
            d,
            m = t.bizInfo,
            p = t.hidePlaceholder,
            _ = t.hsmInfo,
            C = t.info,
            b = t.isMessageRetry,
            v = t.isOffline,
            S = t.msgBotInfo,
            L = t.paymentInfo,
            E = t.processDecryptedProtoParams,
            k = t.protobufBytes,
            I = t.reportingTokenInfo;
          if (e == null)
            return {
              senderKey: null,
              rootSecretDistribute: null,
              storeMsg: null,
              renderableMsgs: [],
            };
          var T = babelHelpers.extends(
              {},
              o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: e,
                message: G(C),
                msgContext: "relay",
                paymentInfo: L,
                bizInfo: m,
                editAttr: C.edit,
                rcat: E == null ? void 0 : E.rcat,
                bizSource:
                  E == null || (n = E.msgMeta) == null ? void 0 : n.bizSource,
                msgMeta: E == null ? void 0 : E.msgMeta,
                msgBotInfo: S,
              }),
            ),
            D = E == null || (a = E.msgMeta) == null ? void 0 : a.isReadByPeer;
          D === !0 && ((T.read = !0), (T.ack = o("WAWebAck").ACK.READ));
          var x = T,
            $ = x.disappearingModeTrigger,
            P = (i = T.id.remote) != null ? i : T.from;
          if (
            P != null &&
            r("WAWebWid").isGroup(P) &&
            $ != null &&
            o("WAWebABProps").getABPropConfigValue(
              "dm_initiator_trigger_groups",
            )
          ) {
            var N = yield o(
              "WAWebDisappearingModeGroupsProtoUtils",
            ).updateDisappearingModeForGroups($, P);
            N != null && (T = babelHelpers.extends({}, T, N));
          }
          if (
            (z(
              T,
              S,
              E == null || (l = E.msgMeta) == null ? void 0 : l.targetSenderJid,
              E == null || (s = E.msgMeta) == null ? void 0 : s.targetId,
            ),
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              (E == null || (u = E.msgMeta) == null ? void 0 : u.targetId) !=
                null &&
              P != null &&
              r("WAWebWid").isGroup(P))
          )
            try {
              var M, w;
              yield j(
                T,
                P,
                E == null || (M = E.msgMeta) == null
                  ? void 0
                  : M.targetSenderJid,
                E == null || (w = E.msgMeta) == null ? void 0 : w.targetId,
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot group] processBotGroupGossip failed with error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("failed-to-process-bot-group-gossip");
            }
          if ((yield R(T, P, S), _ != null)) {
            var A = _.category,
              F = _.tag;
            ((T.hsmTag = F), (T.hsmCategory = A));
          }
          if (
            (E == null || (d = E.msgMeta) == null ? void 0 : d.bizSource) !=
            null
          ) {
            var O;
            T.bizSource =
              E == null || (O = E.msgMeta) == null ? void 0 : O.bizSource;
          }
          var q =
              e.senderKeyDistributionMessage != null
                ? B(C, e.senderKeyDistributionMessage)
                : null,
            U =
              e.rootSecretDistributeMessage != null
                ? W(e.rootSecretDistributeMessage, e, T.id.id)
                : null,
            V =
              T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              q == null &&
              U == null,
            H = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && q != null,
            K = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && U != null,
            X = null;
          if (V && E != null) {
            var Y = E.decrypted,
              J = E.reparsing,
              Z = babelHelpers.objectWithoutPropertiesLoose(E, c);
            ((T.futureproofParams = Z), (T.futureproofBuffer = Y));
          }
          if (
            (C.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS &&
              ((T.campaignId = C.campaignId),
              (T.campaignDuration = C.campaignDuration)),
            C.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              ((T.broadcastId = C.chat),
              (T.bclParticipants = C.bclParticipants),
              (X = T)),
            C.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST)
          ) {
            var ee;
            T.broadcastId = C.chat;
            var te = o("WAWebWidFactory").asUserWidOrThrow(
                (ee = C.preMatChat) != null ? ee : C.author,
              ),
              ne = C.ephSetting,
              re = T.ephemeralSharedSecret;
            if (ne != null && re != null) {
              te.isLid() ||
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[bcl] decoding eph_setting=",
                      " from ",
                      "",
                    ])),
                  ne,
                  te.server,
                ),
                o("WALogger")
                  .LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[bcl] decoding with non-LID sender",
                      ])),
                  )
                  .sendLogs("bcl-eph-setting-decode-non-lid-sender"));
              var oe = yield o(
                  "WAWebEphemeralDecodeBroadcastSetting",
                ).decodeBroadcastEphemeralSetting({
                  broadcastJid: C.chat,
                  recipient: te.isLid()
                    ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                    : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  sender: te,
                  ephSetting: ne,
                  sharedSecret: re,
                }),
                ae = oe.ephemeralDuration,
                ie = oe.ephemeralSettingTimestamp;
              ((T.ephemeralDuration = ae),
                (T.ephemeralSettingTimestamp = ie),
                o("WALogger")
                  .LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:retry] decoded eph_setting sender=",
                        " dur=",
                        " ts=",
                        "",
                      ])),
                    te.toString(),
                    ae,
                    ie,
                  )
                  .tags("messaging"));
            }
          }
          var le = [],
            se = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            ue = H || K || (se && p === !0 && T.futureproofType == null);
          return (
            ue ||
              (C.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                ? (le = yield Q(T, C.bclParticipants))
                : ((T.subtype === "payment_transaction_request_cancelled" ||
                    T.subtype === "payment_action_request_declined") &&
                    T.paymentRequestMessageKey == null) ||
                  ((T.reportingTokenInfo = I),
                  (T.plainProtobufBytes = k),
                  (T.preMatChat = C.preMatChat),
                  (T.isRetry = b),
                  (T.isOffline = v),
                  (C.author !== T.from || C.author !== T.author) &&
                    (T.senderWithDevice = C.author),
                  o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(T.ctwaContext)
                    ? (le = yield o(
                        "WAWebMsgAGMProcessing",
                      ).generateAutomatedGreetingMsgs(T, C))
                    : (le = [T]))),
            {
              senderKey: q,
              rootSecretDistribute: U,
              storeMsg: X,
              renderableMsgs: le,
            }
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      if (!e.chat.isGroup() && !e.chat.isBroadcast())
        throw r("err")("should not have senderkey");
      var n = t.axolotlSenderKeyDistributionMessage,
        a = t.groupId;
      if (a == null || e.chat.toString({ legacy: !0 }) !== a)
        throw (
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "parseSenderKeyDistribution: expected: ",
                ", got: ",
                "",
              ])),
            e.chat.toString(),
            a != null ? a : "null",
          ),
          r("err")(
            "parseSenderKeyDistribution: stanza group id mismatched with protobuf",
          )
        );
      if (!n)
        throw r("err")(
          "senderKeyDistributionMessage: from " +
            e.author.toString() +
            " has no content",
        );
      return { groupId: a, key: n };
    }
    function W(e, t, n) {
      var a,
        i = e.chatJid;
      if (i == null || i === "")
        throw r("err")("parseRootSecretDistribute: missing chatJid");
      var l = (a = t.messageContextInfo) == null ? void 0 : a.messageSecret;
      if (l == null)
        throw r("err")(
          "parseRootSecretDistribute: missing messageContextInfo.messageSecret",
        );
      return {
        chatJid: o("WAWebWidFactory").createWid(i),
        stanzaId: n,
        rootSecret: new Uint8Array(l),
      };
    }
    function q(e) {
      return !(
        (e.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          e.type !==
            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) ||
        e.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
      );
    }
    function U(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = e.placeholderAddReason,
        a = e.placeholderType;
      if (!q(t)) return null;
      var i =
          a === o("WAWebHandleMsgTypes.flow").PlaceholderType.E2E
            ? void 0
            : a ===
                o("WAWebHandleMsgTypes.flow").PlaceholderType
                  .BOT_UNAVAILABLE_FANOUT
              ? "bot_unavailable_fanout"
              : a ===
                  o("WAWebHandleMsgTypes.flow").PlaceholderType
                    .HOSTED_UNAVAILABLE_FANOUT
                ? "hosted_unavailable_fanout"
                : a ===
                    o("WAWebHandleMsgTypes.flow").PlaceholderType
                      .VIEW_ONCE_UNAVAILABLE_FANOUT
                  ? "view_once_unavailable_fanout"
                  : a ===
                      o("WAWebHandleMsgTypes.flow").PlaceholderType.BOT_ORPHAN
                    ? "bot_orphan"
                    : a === o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT
                      ? "fanout"
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              a,
                          );
                        })(),
        l = n.isReadByPeer === !0,
        s = babelHelpers.extends({}, G(t), {
          type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
          kind: o("WAWebMsgType").MsgKind.Ciphertext,
          subtype: i,
          e2eSenderType: o("WAWebWamMsgUtils").getWamE2eSenderType(t.author),
          placeholderAddReason: r,
          bclParticipants:
            t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
              ? t.bclParticipants
              : void 0,
          read: l ? !0 : void 0,
        });
      l && (s.ack = o("WAWebAck").ACK.READ);
      var u = o("WAWebHandleMsgMetaUtils").getMsgTypeFromMsgMeta(n);
      return u != null
        ? babelHelpers.extends({}, s, {
            parentMsgKey: o("WAWebE2EProtoUtils").createMsgKeyFromThreadInfo(
              n,
              t,
              u,
            ),
            kind: o("WAWebMsgType").MsgKind.PlaceholderAddon,
            realType: u,
          })
        : babelHelpers.extends({}, s, {
            kind: o("WAWebMsgType").MsgKind.PlaceholderMessage,
          });
    }
    function V(e, t) {
      var n = babelHelpers.extends({}, G(e), {
        type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
        kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
        body: t.toString(),
      });
      return n;
    }
    function H(e, t) {
      if (t.botParticipant != null) return t.botParticipant;
      if (
        (!e.fromMe && r("WAWebWid").isGroup(e.remote)) ||
        r("WAWebWid").isStatus(e.remote)
      )
        return e.participant;
      if (
        !o("WAWebUserPrefsMeUser").isMeDevice(t.author) &&
        o("WAWebUserPrefsMeUser").isMeAccount(t.author)
      )
        return t.author;
    }
    function G(e) {
      var t,
        n,
        a,
        i = Y(e),
        l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        s = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        u;
      i.fromMe &&
      r("WAWebWid").isGroup(i.remote) &&
      e.author.isLid() &&
      l != null
        ? (u = l)
        : (u = s);
      var c = i.fromMe ? u : i.remote,
        d = babelHelpers.extends(
          {
            id: i,
            from: c,
            to: i.fromMe ? i.remote : s,
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            t: e.ts || 0,
            ack: o("WAWebMsgKeyUtils").isNoteToSelf(i)
              ? o("WAWebAck").ACK.READ
              : o("WAWebAck").ACK.SENT,
            author: H(i, e),
            notifyName: e.pushname || "",
            invis: !1,
            count: e.count,
            clientReceivedTsMillis: e.clientReceivedTsMillis,
          },
          e.serverStoreTimeMicros != null
            ? { serverStoreTimeMicros: e.serverStoreTimeMicros }
            : null,
        );
      return (
        e.hostedBizEncStateMismatch === !0 &&
          (t = d.id) != null &&
          (t = t.remote) != null &&
          t.isUser() &&
          (d.hostedBizEncStateMismatch = !0),
        e.senderOrRecipientAccountTypeHosted === !0 &&
          (n = d.id) != null &&
          (n = n.remote) != null &&
          n.isUser() &&
          (d.senderOrRecipientAccountTypeHosted = !0),
        e.placeholderCreatedWhenAccountIsHosted != null &&
          (a = d.id) != null &&
          (a = a.remote) != null &&
          a.isUser() &&
          (d.placeholderCreatedWhenAccountIsHosted =
            e.placeholderCreatedWhenAccountIsHosted),
        d
      );
    }
    function z(e, t, n, r) {
      if (t != null) {
        var o = e;
        Object.assign(o, {
          botEditTargetId: t.botEditTargetId,
          botEditType: t.botEditType,
          bizBotType: t.bizBotType,
          botTargetSenderJid: n,
          botMsgBodyType: t.botMsgBodyType,
          botResponseTargetId: r,
        });
      }
    }
    function j(e, t, n, r) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i;
            if (!(n == null || a == null)) {
              var l = n ? o("WAWebUserPrefsMeUser").isMeAccount(n) : !0,
                s = { fromMe: l, remote: t, id: a },
                u = null;
              ((u = o(
                "WAWebMsmsgMsgSecretCache",
              ).msmsgBotGroupGossipDataCache.getMsmsgBotGroupGossipDataFromCache(
                l,
                t,
                a,
                n,
              )),
                (s.participant =
                  (i = o("WAWebLidMigrationUtils").toPn(n)) != null ? i : n));
              var c = new (r("WAWebMsgKey"))(s).toString();
              if (u == null) {
                var d = yield o("WAWebSchemaMessage").getMessageTable().get(c);
                if (d != null) {
                  var m;
                  u =
                    (m = o("WAWebDBMessageSerialization").messageFromDbRow(
                      d,
                    )) == null
                      ? void 0
                      : m.botGroupParticipant;
                }
              } else
                o(
                  "WAWebMsmsgMsgSecretCache",
                ).msmsgBotGroupGossipDataCache.deleteMsmsgBotGroupGossipDataFromCache(
                  c,
                );
              if (
                u != null &&
                u.user === o("WAWebBotUtils").META_BOT_FBID_WID.user
              ) {
                var p = e;
                Object.assign(p, { botGroupParticipant: u });
              }
            }
          },
        )),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield (S || (S = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t.ephSetting,
                      a = t.preMatWid,
                      i = t.wid,
                      l = a != null ? a : r("WANullthrows")(i),
                      s;
                    try {
                      s = new (r("WAWebMsgKey"))({
                        remote: i,
                        fromMe: !0,
                        id: e.id.id,
                      });
                    } catch (e) {
                      return (
                        o("WALogger").WARN(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "drop: cannot create MsgKey: ",
                              "",
                            ])),
                          r("getErrorSafe")(e).stack,
                        ),
                        null
                      );
                    }
                    var u,
                      c,
                      d = e.ephemeralSharedSecret,
                      m = e.broadcastId;
                    if (m != null && n != null && d != null) {
                      var p = yield o(
                        "WAWebEphemeralDecodeBroadcastSetting",
                      ).decodeBroadcastEphemeralSetting({
                        broadcastJid: m,
                        recipient: l,
                        sender: l.isLid()
                          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                          : o(
                              "WAWebUserPrefsMeUser",
                            ).getMePnUserOrThrow_DO_NOT_USE(),
                        ephSetting: n,
                        sharedSecret: d,
                      });
                      ((u = p.ephemeralDuration),
                        (c = p.ephemeralSettingTimestamp));
                    }
                    l.isLid() ||
                      (o("WALogger").LOG(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateBclMsgs] eph_setting=",
                            " recipient=",
                            "",
                          ])),
                        n,
                        l.server,
                      ),
                      o("WALogger")
                        .LOG(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
                              "[generateBclMsgs] non-LID recipient found",
                            ])),
                        )
                        .sendLogs("gen-bcl-msgs-non-lid-recipient"));
                    var _ = babelHelpers.extends({}, e, {
                      id: s,
                      from: o(
                        "WAWebUserPrefsMeUser",
                      ).getMePnUserOrThrow_DO_NOT_USE(),
                      to: l,
                      broadcast: !0,
                      ephemeralDuration: u,
                      ephemeralSettingTimestamp: c,
                      protocolMessageKey:
                        e.protocolMessageKey == null
                          ? void 0
                          : new (r("WAWebMsgKey"))({
                              remote: l,
                              fromMe: !0,
                              id: e.protocolMessageKey.id,
                            }),
                    });
                    return _;
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
          return a.filter(Boolean);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return e.type ===
        o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST
        ? new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").asUserWidOrThrow(e.author),
            fromMe: !1,
            id: e.externalId,
          })
        : e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
          ? e.botParticipant != null
            ? new (r("WAWebMsgKey"))({
                remote: e.chat,
                fromMe: o("WAWebUserPrefsMeUser").isMeAccount(e.author),
                id: e.externalId,
                participant: o("WAWebWidFactory").asUserWidOrThrow(
                  r("WANullthrows")(e.botParticipant),
                ),
              })
            : new (r("WAWebMsgKey"))({
                remote: e.chat,
                fromMe: o("WAWebUserPrefsMeUser").isMeAccount(e.author),
                id: e.externalId,
              })
          : new (r("WAWebMsgKey"))({
              remote: e.chat,
              fromMe: o("WAWebUserPrefsMeUser").isMeAccount(e.author),
              participant: o("WAWebWidFactory").asUserWidOrThrow(e.author),
              id: e.chat.isStatus()
                ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(
                    e.externalId,
                  )
                : e.externalId,
            });
    }
    function J(e) {
      return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID
        ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
        : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION;
    }
    function Z(e) {
      return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
        ? e.author
        : e.chat;
    }
    function ee(e) {
      var t;
      return (
        ((t = e.meta) == null ? void 0 : t.appdata) ===
          o("WAWebHandleMsgCommon").APPDATA.default &&
        e.msgProtobuf.senderKeyDistributionMessage != null
      );
    }
    function te(e, t, n) {
      if (e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
        var r = t.msgMeta.capi === !0,
          a = t.msgInfo.chat.isGroup();
        if (a && r) return !0;
        if (r && o("WAWebMessagingGatingUtils").isSimpleSignalEnabled()) {
          if (n.isStateless === !0) return !0;
          o(
            "WAWebSimpleSignalDowngradeStore",
          ).markCoexUserDowngradedFromSimpleSignal(t.msgInfo.chat);
        }
      }
      return !1;
    }
    ((l.parseProtocolMessage = k),
      (l.parseMessage = I),
      (l.isRevokeInfo = q),
      (l.generatePlaceholder = U),
      (l.genDebugPlaceholderMsg = V),
      (l.generateBaseMsg = G),
      (l.generateBclMsgs = Q),
      (l.messageInfoToKey = Y),
      (l.getDeviceType = J),
      (l.getFrom = Z),
      (l.shouldOmitSessionPersistence = te));
  },
  98,
);
