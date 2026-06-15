__d(
  "WAWebMsgProcessingApiUtils",
  [
    "Promise",
    "WAHex",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBackendJobs.flow",
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
      y;
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
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
    function S(e) {
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
        g = Q(d);
      if (!o("WAWebUserPrefsMeUser").isMeAccount(g)) {
        v(p);
        return;
      }
      if (
        ((t = p.protocolMessage) == null
          ? void 0
          : t.historySyncNotification) != null
      ) {
        var h = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: p,
          message: q(d),
          msgContext: "relay",
          paymentInfo: _,
          bizInfo: c,
        });
        (U(h, m), (f = { history: r("WANullthrows")(h.historySyncMetaData) }));
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
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return S({
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
                ? I(e)
                : $(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP:
              return d.isDirect &&
                o("WAWebUserPrefsMeUser").isMeAccount(d.author) &&
                !X(e)
                ? I(e)
                : $(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST: {
              if (
                e.ciphertextType ===
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg
              ) {
                if (!d.bclHashValidated)
                  throw r("err")(
                    "parseMessage: participants for peer broadcast message is not validated",
                  );
                return $(e);
              }
              return e.isMessageRetry === !0 &&
                e.msgProtobuf.deviceSentMessage == null
                ? $(e)
                : D(e);
            }
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST:
              return $(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS:
              return d.isDirect === !0 ? E(e) : D(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS:
              return $(e);
            default:
              throw r("err")("Unrecognized MESSAGE_TYPE");
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield I(e);
          } catch (n) {
            if (n instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
              var t = Object.keys(e.msgProtobuf).filter(function (e) {
                return (
                  e !== "$$unknownFieldCount" && e !== "messageContextInfo"
                );
              });
              if (t.length === 1 && t[0] === "senderKeyDistributionMessage")
                return $(e);
            }
            throw n;
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            a = n.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              K(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.destinationJid == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              K(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.destinationJid,
            l = yield N(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(n),
              r,
            );
          return babelHelpers.extends(
            { deviceSent: { destination: o("WAWebWidFactory").createWid(i) } },
            l,
          );
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
          var t = e.msgProtobuf,
            n = babelHelpers.objectWithoutPropertiesLoose(e, s),
            r = n.info,
            a = t.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              K(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.phash == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              K(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.phash,
            l = yield N(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(t),
              n,
            );
          return babelHelpers.extends({ deviceSent: { phash: i, info: r } }, l);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
          if (t.deviceSentMessage != null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              K(n.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER,
            );
          var r = yield N(t, n);
          return babelHelpers.extends({ deviceSent: null }, r);
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            h = t.info,
            y = t.isMessageRetry,
            b = t.isOffline,
            v = t.msgBotInfo,
            S = t.paymentInfo,
            R = t.processDecryptedProtoParams,
            L = t.protobufBytes,
            E = t.reportingTokenInfo;
          if (e == null)
            return {
              senderKey: null,
              rootSecretDistribute: null,
              storeMsg: null,
              renderableMsgs: [],
            };
          var k = babelHelpers.extends(
              {},
              o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: e,
                message: q(h),
                msgContext: "relay",
                paymentInfo: S,
                bizInfo: m,
                editAttr: h.edit,
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
            (U(
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
              var P, N;
              yield V(
                k,
                x,
                R == null || (P = R.msgMeta) == null
                  ? void 0
                  : P.targetSenderJid,
                R == null || (N = R.msgMeta) == null ? void 0 : N.targetId,
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
          if ((yield C(k, x, v), _ != null)) {
            var M = _.category,
              F = _.tag;
            ((k.hsmTag = F), (k.hsmCategory = M));
          }
          if (
            (R == null || (d = R.msgMeta) == null ? void 0 : d.bizSource) !=
            null
          ) {
            var O;
            k.bizSource =
              R == null || (O = R.msgMeta) == null ? void 0 : O.bizSource;
          }
          var B =
              e.senderKeyDistributionMessage != null
                ? w(h, e.senderKeyDistributionMessage)
                : null,
            W =
              e.rootSecretDistributeMessage != null
                ? A(e.rootSecretDistributeMessage, e, k.id.id)
                : null,
            H =
              k.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              B == null &&
              W == null,
            z = k.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && B != null,
            j = k.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && W != null,
            K = null;
          if (H && R != null) {
            var Q = R.decrypted,
              X = R.reparsing,
              Y = babelHelpers.objectWithoutPropertiesLoose(R, c);
            ((k.futureproofParams = Y), (k.futureproofBuffer = Q));
          }
          if (
            (h.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS &&
              ((k.campaignId = h.campaignId),
              (k.campaignDuration = h.campaignDuration)),
            h.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              ((k.broadcastId = h.chat),
              (k.bclParticipants = h.bclParticipants),
              (K = k)),
            h.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST)
          ) {
            var J;
            k.broadcastId = h.chat;
            var Z = o("WAWebWidFactory").asUserWidOrThrow(
                (J = h.preMatChat) != null ? J : h.author,
              ),
              ee = h.ephSetting,
              te = k.ephemeralSharedSecret;
            if (ee != null && te != null) {
              var ne = yield o(
                  "WAWebEphemeralDecodeBroadcastSetting",
                ).decodeBroadcastEphemeralSetting({
                  broadcastJid: h.chat,
                  recipient: Z.isLid()
                    ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                    : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  sender: Z,
                  ephSetting: ee,
                  sharedSecret: te,
                }),
                re = ne.ephemeralDuration,
                oe = ne.ephemeralSettingTimestamp;
              ((k.ephemeralDuration = re),
                (k.ephemeralSettingTimestamp = oe),
                o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:retry] decoded eph_setting sender=",
                        " dur=",
                        " ts=",
                        "",
                      ])),
                    Z.toString(),
                    re,
                    oe,
                  )
                  .tags("messaging"));
            }
          }
          var ae = [],
            ie = k.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            le = z || j || (ie && p === !0 && k.futureproofType == null);
          return (
            le ||
              (h.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                ? (ae = yield G(k, h.bclParticipants))
                : ((k.subtype === "payment_transaction_request_cancelled" ||
                    k.subtype === "payment_action_request_declined") &&
                    k.paymentRequestMessageKey == null) ||
                  ((k.reportingTokenInfo = E),
                  (k.plainProtobufBytes = L),
                  (k.preMatChat = h.preMatChat),
                  (k.isRetry = y),
                  (k.isOffline = b),
                  (h.author !== k.from || h.author !== k.author) &&
                    (k.senderWithDevice = h.author),
                  o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(k.ctwaContext)
                    ? (ae = yield o(
                        "WAWebMsgAGMProcessing",
                      ).generateAutomatedGreetingMsgs(k, h))
                    : (ae = [k]))),
            {
              senderKey: B,
              rootSecretDistribute: W,
              storeMsg: K,
              renderableMsgs: ae,
            }
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
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
    function A(e, t, n) {
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
        targetMessageKey: new Uint8Array(o("WAHex").parseHex(n)),
        rootSecret: new Uint8Array(l),
      };
    }
    function F(e) {
      return !(
        (e.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          e.type !==
            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) ||
        e.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
      );
    }
    function O(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = e.placeholderAddReason,
        a = e.placeholderType;
      if (!F(t)) return null;
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
        s = babelHelpers.extends({}, q(t), {
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
    function B(e, t) {
      var n = babelHelpers.extends({}, q(e), {
        type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
        kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
        body: t.toString(),
      });
      return n;
    }
    function W(e, t) {
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
    function q(e) {
      var t,
        n,
        a,
        i = j(e),
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
        d = babelHelpers.extends(
          {
            id: i,
            from: c,
            to: i.fromMe ? i.remote : l,
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            t: e.ts || 0,
            ack: o("WAWebMsgKeyUtils").isNoteToSelf(i)
              ? o("WAWebAck").ACK.READ
              : o("WAWebAck").ACK.SENT,
            author: W(i, e),
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
    function U(e, t, n, r) {
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
    function V(e, t, n, r) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield (y || (y = n("Promise"))).all(
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
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
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
    function K(e) {
      return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID
        ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
        : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION;
    }
    function Q(e) {
      return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
        ? e.author
        : e.chat;
    }
    function X(e) {
      var t;
      return (
        ((t = e.meta) == null ? void 0 : t.appdata) ===
          o("WAWebHandleMsgCommon").APPDATA.default &&
        e.msgProtobuf.senderKeyDistributionMessage != null
      );
    }
    function Y(e, t, n) {
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
    ((l.parseProtocolMessage = S),
      (l.parseMessage = R),
      (l.isRevokeInfo = F),
      (l.generatePlaceholder = O),
      (l.genDebugPlaceholderMsg = B),
      (l.generateBaseMsg = q),
      (l.generateBclMsgs = G),
      (l.messageInfoToKey = j),
      (l.getDeviceType = K),
      (l.getFrom = Q),
      (l.shouldOmitSessionPersistence = Y));
  },
  98,
);
