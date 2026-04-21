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
    "WAWebBizCoexGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebBusinessHSMTypes",
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
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgAGMProcessing",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebMsmsgMsgSecretCache",
    "WAWebSchemaMessage",
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
      h;
    function y(e) {
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
    function C(e) {
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
        g = G(d);
      if (!o("WAWebUserPrefsMeUser").isMeAccount(g)) {
        y(p);
        return;
      }
      if (
        ((t = p.protocolMessage) == null
          ? void 0
          : t.historySyncNotification) != null
      ) {
        var h = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: p,
          message: F(d),
          msgContext: "relay",
          paymentInfo: _,
          bizInfo: c,
        });
        (O(h, m), (f = { history: r("WANullthrows")(h.historySyncMetaData) }));
      } else if (
        ((n = p.protocolMessage) == null
          ? void 0
          : n.initialSecurityNotificationSettingSync) != null
      ) {
        var C;
        f = {
          securityNotificationEnabled: {
            isEnabled:
              (C =
                p.protocolMessage.initialSecurityNotificationSettingSync
                  .securityNotificationEnabled) != null
                ? C
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
        var b;
        f = {
          peerDataOperationRequestResponseMessage:
            (b = p.protocolMessage) == null
              ? void 0
              : b.peerDataOperationRequestResponseMessage,
        };
      } else if (
        ((s = p.protocolMessage) == null
          ? void 0
          : s.peerDataOperationRequestMessage) != null
      ) {
        var v;
        f = {
          peerDataOperationRequestMessage:
            (v = p.protocolMessage) == null
              ? void 0
              : v.peerDataOperationRequestMessage,
        };
      } else if (
        ((u = p.protocolMessage) == null
          ? void 0
          : u.cloudApiThreadControlNotification) != null
      ) {
        var S;
        f = {
          cloudApiThreadControlNotification:
            (S = p.protocolMessage) == null
              ? void 0
              : S.cloudApiThreadControlNotification,
        };
      }
      return f;
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return C({
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
                ? L(e)
                : T(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP:
              return d.isDirect &&
                o("WAWebUserPrefsMeUser").isMeAccount(d.author) &&
                !z(e)
                ? L(e)
                : T(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST: {
              if (
                e.ciphertextType ===
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg
              ) {
                if (!d.bclHashValidated)
                  throw r("err")(
                    "parseMessage: participants for peer broadcast message is not validated",
                  );
                return T(e);
              }
              return e.isMessageRetry === !0 &&
                e.msgProtobuf.deviceSentMessage == null
                ? T(e)
                : k(e);
            }
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST:
              return T(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS:
              return d.isDirect === !0 ? S(e) : k(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS:
              return T(e);
            default:
              throw r("err")("Unrecognized MESSAGE_TYPE");
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield L(e);
          } catch (n) {
            if (n instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
              var t = Object.keys(e.msgProtobuf).filter(function (e) {
                return (
                  e !== "$$unknownFieldCount" && e !== "messageContextInfo"
                );
              });
              if (t.length === 1 && t[0] === "senderKeyDistributionMessage")
                return T(e);
            }
            throw n;
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            a = n.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              H(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.destinationJid == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              H(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.destinationJid,
            l = yield x(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(n),
              r,
            );
          return babelHelpers.extends(
            { deviceSent: { destination: o("WAWebWidFactory").createWid(i) } },
            l,
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = babelHelpers.objectWithoutPropertiesLoose(e, s),
            r = n.info,
            a = t.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              H(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.phash == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              H(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.phash,
            l = yield x(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(t),
              n,
            );
          return babelHelpers.extends({ deviceSent: { phash: i, info: r } }, l);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
          if (t.deviceSentMessage != null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              H(n.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER,
            );
          var r = yield x(t, n);
          return babelHelpers.extends({ deviceSent: null }, r);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i,
            l,
            s,
            u,
            d,
            m = t.bizInfo,
            g = t.hidePlaceholder,
            h = t.hsmInfo,
            y = t.info,
            C = t.isMessageRetry,
            b = t.isOffline,
            v = t.msgBotInfo,
            S = t.paymentInfo,
            R = t.processDecryptedProtoParams,
            L = t.protobufBytes,
            E = t.reportingTokenInfo;
          if (e == null)
            return { senderKey: null, storeMsg: null, renderableMsgs: [] };
          var k = babelHelpers.extends(
              {},
              o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: e,
                message: F(y),
                msgContext: "relay",
                paymentInfo: S,
                bizInfo: m,
                editAttr: y.edit,
                rcat: R == null ? void 0 : R.rcat,
                bizSource:
                  R == null || (n = R.msgMeta) == null ? void 0 : n.bizSource,
                msgMeta: R == null ? void 0 : R.msgMeta,
                msgBotInfo: v,
              }),
            ),
            I = R == null || (a = R.msgMeta) == null ? void 0 : a.isReadByPeer;
          I === !0 && ((k.read = !0), (k.ack = o("WAWebAck").ACK.READ));
          var T = k,
            D = T.disappearingModeTrigger,
            x = (i = k.id.remote) != null ? i : k.from;
          if (
            x != null &&
            r("WAWebWid").isGroup(x) &&
            D != null &&
            o("WAWebABProps").getABPropConfigValue(
              "dm_initiator_trigger_groups",
            )
          ) {
            var $ = yield o(
              "WAWebDisappearingModeGroupsProtoUtils",
            ).updateDisappearingModeForGroups(D, x);
            $ != null && (k = babelHelpers.extends({}, k, $));
          }
          if (
            (O(
              k,
              v,
              R == null || (l = R.msgMeta) == null ? void 0 : l.targetSenderJid,
              R == null || (s = R.msgMeta) == null ? void 0 : s.targetId,
            ),
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              (R == null || (u = R.msgMeta) == null ? void 0 : u.targetId) !=
                null &&
              x != null &&
              r("WAWebWid").isGroup(x))
          )
            try {
              var N, M;
              yield B(
                k,
                x,
                R == null || (N = R.msgMeta) == null
                  ? void 0
                  : N.targetSenderJid,
                R == null || (M = R.msgMeta) == null ? void 0 : M.targetId,
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot group] processBotGroupGossip failed with error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("failed-to-process-bot-group-gossip");
            }
          if (
            v != null &&
            x != null &&
            r("WAWebWid").isGroup(x) &&
            (k.ephemeralDuration == null || k.ephemeralDuration === 0)
          )
            try {
              var w = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(x);
              w != null &&
                w.ephemeralDuration > 0 &&
                ((k.ephemeralDuration = w.ephemeralDuration),
                o("WALogger")
                  .LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot group] Applied group ephemeral duration ",
                        " to bot message",
                      ])),
                    String(w.ephemeralDuration),
                  )
                  .sendLogs("bot-group-ephemeral-fallback"));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot group] Failed to fetch group metadata for ephemeral fallback: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("bot-group-ephemeral-fallback-error");
            }
          if (h != null) {
            var A = h.category,
              W = h.tag;
            ((k.hsmTag = W),
              (k.hsmCategory = A),
              W === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING &&
                o(
                  "WAWebMarketingMessagesUserFeedbackGatingUtils",
                ).triggerExposureMMUserControls());
          }
          if (
            (R == null || (d = R.msgMeta) == null ? void 0 : d.bizSource) !=
            null
          ) {
            var U;
            k.bizSource =
              R == null || (U = R.msgMeta) == null ? void 0 : U.bizSource;
          }
          var V =
              e.senderKeyDistributionMessage != null
                ? P(y, e.senderKeyDistributionMessage)
                : null,
            H = k.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && V == null,
            G = k.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && V != null,
            z = null;
          if (H && R != null) {
            var j = R.decrypted,
              K = R.reparsing,
              Q = babelHelpers.objectWithoutPropertiesLoose(R, c);
            ((k.futureproofParams = Q), (k.futureproofBuffer = j));
          }
          if (
            (y.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS &&
              ((k.campaignId = y.campaignId),
              (k.campaignDuration = y.campaignDuration)),
            y.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              ((k.broadcastId = y.chat),
              (k.bclParticipants = y.bclParticipants),
              (z = k)),
            y.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST)
          ) {
            var X;
            k.broadcastId = y.chat;
            var Y = (X = y.preMatChat) != null ? X : y.author,
              J = y.ephSetting,
              Z = k.ephemeralSharedSecret;
            if (J != null && Z != null) {
              var ee = yield o(
                  "WAWebEphemeralDecodeBroadcastSetting",
                ).decodeBroadcastEphemeralSetting({
                  broadcastJid: y.chat,
                  recipient: Y.isLid()
                    ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                    : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  sender: Y,
                  ephSetting: J,
                  sharedSecret: Z,
                }),
                te = ee.ephemeralDuration,
                ne = ee.ephemeralSettingTimestamp;
              ((k.ephemeralDuration = te), (k.ephemeralSettingTimestamp = ne));
            }
          }
          var re = [],
            oe = k.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            ae = G || (oe && g === !0 && k.futureproofType == null);
          return (
            ae ||
              (y.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                ? (re = yield q(k, y.bclParticipants))
                : ((k.subtype === "payment_transaction_request_cancelled" ||
                    k.subtype === "payment_action_request_declined") &&
                    k.paymentRequestMessageKey == null) ||
                  ((k.reportingTokenInfo = E),
                  (k.plainProtobufBytes = L),
                  (k.preMatChat = y.preMatChat),
                  (k.isRetry = C),
                  (k.isOffline = b),
                  (y.author !== k.from || y.author !== k.author) &&
                    (k.senderWithDevice = y.author),
                  o("WAWebBizGatingUtils").shouldGenerateAGMMsgs(k.ctwaContext)
                    ? (re = yield o(
                        "WAWebMsgAGMProcessing",
                      ).generateAutomatedGreetingMsgs(k, y))
                    : (re = [k]))),
            { senderKey: V, storeMsg: z, renderableMsgs: re }
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
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
    function N(e) {
      return !(
        (e.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          e.type !==
            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) ||
        e.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
      );
    }
    function M(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = e.placeholderAddReason,
        a = e.placeholderType;
      if (!N(t)) return null;
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
                  : a === o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT
                    ? "fanout"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            a,
                        );
                      })(),
        l = n.isReadByPeer === !0,
        s = babelHelpers.extends({}, F(t), {
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
    function w(e, t) {
      var n = babelHelpers.extends({}, F(e), {
        type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
        kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
        body: t.toString(),
      });
      return n;
    }
    function A(e, t) {
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
    function F(e) {
      var t,
        n,
        a,
        i = V(e),
        l = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        u;
      o("WAWebABProps").getABPropConfigValue("parse_encrypted_dsm_msg_fix")
        ? i.fromMe && e.author.isLid()
          ? (u = s)
          : (u = l)
        : i.fromMe &&
            r("WAWebWid").isGroup(i.remote) &&
            e.author.isLid() &&
            s != null
          ? (u = s)
          : (u = l);
      var c = i.fromMe ? u : i.remote,
        d = {
          id: i,
          from: c,
          to: i.fromMe ? i.remote : l,
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          t: e.ts || 0,
          ack: o("WAWebMsgKeyUtils").isNoteToSelf(i)
            ? o("WAWebAck").ACK.READ
            : o("WAWebAck").ACK.SENT,
          author: A(i, e),
          notifyName: e.pushname || "",
          invis: !1,
          count: e.count,
          clientReceivedTsMillis: e.clientReceivedTsMillis,
        };
      return (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          e.hostedBizEncStateMismatch === !0 &&
          (t = d.id) != null &&
          (t = t.remote) != null &&
          t.isUser() &&
          (d.hostedBizEncStateMismatch = !0),
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          e.senderOrRecipientAccountTypeHosted === !0 &&
          (n = d.id) != null &&
          (n = n.remote) != null &&
          n.isUser() &&
          (d.senderOrRecipientAccountTypeHosted = !0),
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          e.placeholderCreatedWhenAccountIsHosted != null &&
          (a = d.id) != null &&
          (a = a.remote) != null &&
          a.isUser() &&
          (d.placeholderCreatedWhenAccountIsHosted =
            e.placeholderCreatedWhenAccountIsHosted),
        d
      );
    }
    function O(e, t, n, r) {
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
    function B(e, t, n, r) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield (h || (h = n("Promise"))).all(
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
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
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
              id: e.externalId,
            });
    }
    function H(e) {
      return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID
        ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
        : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION;
    }
    function G(e) {
      return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
        ? e.author
        : e.chat;
    }
    function z(e) {
      var t;
      return (
        ((t = e.meta) == null ? void 0 : t.appdata) ===
          o("WAWebHandleMsgCommon").APPDATA.default &&
        e.msgProtobuf.senderKeyDistributionMessage != null
      );
    }
    function j(e, t, n) {
      if (e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
        var r = t.msgMeta.capi === !0,
          a = t.msgInfo.chat.isGroup();
        if (
          (a && r) ||
          (r &&
            n.isStateless === !0 &&
            o("WAWebMessagingGatingUtils").isSimpleSignalEnabled())
        )
          return !0;
      }
      return !1;
    }
    ((l.parseProtocolMessage = C),
      (l.parseMessage = b),
      (l.isRevokeInfo = N),
      (l.generatePlaceholder = M),
      (l.genDebugPlaceholderMsg = w),
      (l.generateBaseMsg = F),
      (l.generateBclMsgs = q),
      (l.messageInfoToKey = V),
      (l.getDeviceType = H),
      (l.getFrom = G),
      (l.shouldOmitSessionPersistence = j));
  },
  98,
);
