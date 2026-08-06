__d(
  "WAWebMsgProcessingApiUtils",
  [
    "Promise",
    "WAJids",
    "WALogger",
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
    "justknobx",
    "nullthrows",
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
      b;
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
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
    function L(e) {
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
        g = Y(d);
      if (!o("WAWebUserPrefsMeUser").isMeAccount(g)) {
        R(p);
        return;
      }
      if (
        ((t = p.protocolMessage) == null
          ? void 0
          : t.historySyncNotification) != null
      ) {
        var h = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: p,
          message: V(d),
          msgContext: "relay",
          paymentInfo: _,
          bizInfo: c,
        });
        (H(h, m), (f = { history: r("nullthrows")(h.historySyncMetaData) }));
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
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return L({
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
                ? D(e)
                : N(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP:
              return d.isDirect &&
                o("WAWebUserPrefsMeUser").isMeAccount(d.author) &&
                !J(e)
                ? D(e)
                : N(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST: {
              if (
                e.ciphertextType ===
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg
              ) {
                if (!d.bclHashValidated)
                  throw r("err")(
                    "parseMessage: participants for peer broadcast message is not validated",
                  );
                return N(e);
              }
              return e.isMessageRetry === !0 &&
                e.msgProtobuf.deviceSentMessage == null
                ? N(e)
                : $(e);
            }
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST:
              return N(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS:
              return d.isDirect === !0 ? I(e) : $(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS:
              return N(e);
            default:
              throw r("err")("Unrecognized MESSAGE_TYPE");
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
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield D(e);
          } catch (n) {
            if (n instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
              var t = Object.keys(e.msgProtobuf).filter(function (e) {
                return (
                  e !== "$$unknownFieldCount" && e !== "messageContextInfo"
                );
              });
              if (t.length === 1 && t[0] === "senderKeyDistributionMessage")
                return N(e);
            }
            throw n;
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
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            a = n.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              X(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.destinationJid == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              X(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.destinationJid,
            l = yield w(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(n),
              r,
            );
          return babelHelpers.extends(
            { deviceSent: { destination: o("WAWebWidFactory").createWid(i) } },
            l,
          );
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
            n = babelHelpers.objectWithoutPropertiesLoose(e, s),
            r = n.info,
            a = t.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              X(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.phash == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              X(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.phash,
            l = yield w(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(t),
              n,
            );
          return babelHelpers.extends({ deviceSent: { phash: i, info: r } }, l);
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
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
          if (t.deviceSentMessage != null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              X(n.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER,
            );
          var r = yield w(t, n);
          return babelHelpers.extends({ deviceSent: null }, r);
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i,
            l,
            s,
            u,
            d,
            m,
            p = t.bizInfo,
            _ = t.hidePlaceholder,
            h = t.hsmInfo,
            y = t.info,
            C = t.isMessageRetry,
            b = t.isOffline,
            S = t.msgBotInfo,
            R = t.paymentInfo,
            L = t.processDecryptedProtoParams,
            E = t.protobufBytes,
            k = t.reportingTokenInfo;
          if (e == null)
            return {
              senderKey: null,
              rootSecretDistribute: null,
              storeMsg: null,
              renderableMsgs: [],
            };
          var I = babelHelpers.extends(
              {},
              o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: e,
                message: V(y),
                msgContext: "relay",
                paymentInfo: R,
                bizInfo: p,
                editAttr: y.edit,
                rcat: L == null ? void 0 : L.rcat,
                bizSource:
                  L == null || (n = L.msgMeta) == null ? void 0 : n.bizSource,
                msgMeta: L == null ? void 0 : L.msgMeta,
                msgBotInfo: S,
              }),
            ),
            T = L == null || (a = L.msgMeta) == null ? void 0 : a.isReadByPeer;
          T === !0 && ((I.read = !0), (I.ack = o("WAWebAck").ACK.READ));
          var D = I,
            x = D.disappearingModeTrigger,
            $ = (i = I.id.remote) != null ? i : I.from;
          if ($ != null && r("WAWebWid").isGroup($) && x != null) {
            var P = yield o(
              "WAWebDisappearingModeGroupsProtoUtils",
            ).updateDisappearingModeForGroups(x, $);
            P != null && (I = babelHelpers.extends({}, I, P));
          }
          if (
            (H(
              I,
              S,
              L == null || (l = L.msgMeta) == null ? void 0 : l.targetSenderJid,
              L == null || (s = L.msgMeta) == null ? void 0 : s.targetId,
            ),
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              (L == null || (u = L.msgMeta) == null ? void 0 : u.targetId) !=
                null &&
              $ != null &&
              r("WAWebWid").isGroup($))
          )
            try {
              var N, M;
              yield G(
                I,
                $,
                L == null || (N = L.msgMeta) == null
                  ? void 0
                  : N.targetSenderJid,
                L == null || (M = L.msgMeta) == null ? void 0 : M.targetId,
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
          if ((yield v(I, $, S), h != null)) {
            var w = h.category,
              A = h.tag;
            ((I.hsmTag = A), (I.hsmCategory = w));
          }
          if (
            (L == null || (d = L.msgMeta) == null ? void 0 : d.bizSource) !=
            null
          ) {
            var B;
            I.bizSource =
              L == null || (B = L.msgMeta) == null ? void 0 : B.bizSource;
          }
          (L == null || (m = L.msgMeta) == null ? void 0 : m.from) != null &&
            (I.metaFrom = L.msgMeta.from);
          var W =
              e.senderKeyDistributionMessage != null
                ? F(y, e.senderKeyDistributionMessage)
                : null,
            q =
              e.rootSecretDistributeMessage != null
                ? O(e.rootSecretDistributeMessage, e, I.id.id)
                : null,
            U =
              I.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              W == null &&
              q == null,
            z = I.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && W != null,
            K = I.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && q != null,
            Q = null;
          if (U && L != null) {
            var X = L.decrypted,
              Y = L.reparsing,
              J = babelHelpers.objectWithoutPropertiesLoose(L, c);
            ((I.futureproofParams = J), (I.futureproofBuffer = X));
          }
          if (
            (y.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS &&
              ((I.campaignId = y.campaignId),
              (I.campaignDuration = y.campaignDuration)),
            y.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              ((I.broadcastId = y.chat),
              (I.bclParticipants = y.bclParticipants),
              (Q = I)),
            y.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST)
          ) {
            var Z;
            I.broadcastId = y.chat;
            var ee = o("WAWebWidFactory").asUserWidOrThrow(
                (Z = y.preMatChat) != null ? Z : y.author,
              ),
              te = y.ephSetting,
              ne = I.ephemeralSharedSecret;
            if (te != null && ne != null) {
              var re = yield o(
                  "WAWebEphemeralDecodeBroadcastSetting",
                ).decodeBroadcastEphemeralSetting({
                  broadcastJid: y.chat,
                  recipient: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                  sender: ee,
                  ephSetting: te,
                  sharedSecret: ne,
                }),
                oe = re.ephemeralDuration,
                ae = re.ephemeralSettingTimestamp;
              ((I.ephemeralDuration = oe),
                (I.ephemeralSettingTimestamp = ae),
                o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:retry] decoded eph_setting sender=",
                        " dur=",
                        " ts=",
                        "",
                      ])),
                    ee.toString(),
                    oe,
                    ae,
                  )
                  .tags("messaging"));
            }
          }
          var ie = [],
            le = I.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            se = z || K || (le && _ === !0 && I.futureproofType == null);
          return (
            se ||
              (y.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                ? (ie = yield j(I, y.bclParticipants))
                : ((I.subtype === "payment_transaction_request_cancelled" ||
                    I.subtype === "payment_action_request_declined") &&
                    I.paymentRequestMessageKey == null) ||
                  ((I.reportingTokenInfo = k),
                  (I.plainProtobufBytes = E),
                  (I.preMatChat = y.preMatChat),
                  (I.isRetry = C),
                  (I.isOffline = b),
                  (y.author !== I.from || y.author !== I.author) &&
                    (I.senderWithDevice = y.author),
                  o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(I.ctwaContext)
                    ? (ie = yield o(
                        "WAWebMsgAGMProcessing",
                      ).generateAutomatedGreetingMsgs(I, y))
                    : (ie = [I]))),
            {
              senderKey: W,
              rootSecretDistribute: q,
              storeMsg: Q,
              renderableMsgs: ie,
            }
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
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
    function O(e, t, n) {
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
    function B(e) {
      return !(
        (e.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          e.type !==
            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) ||
        e.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
      );
    }
    function W(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = e.placeholderAddReason,
        a = e.placeholderType;
      if (!B(t)) return null;
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
        s = babelHelpers.extends({}, V(t), {
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
            parentMsgKey: o("WAWebE2EProtoUtils").createMsgKeyFromThreadInfo({
              info: t,
              msgMeta: n,
              realType: u,
            }),
            kind: o("WAWebMsgType").MsgKind.PlaceholderAddon,
            realType: u,
          })
        : babelHelpers.extends({}, s, {
            kind: o("WAWebMsgType").MsgKind.PlaceholderMessage,
          });
    }
    function q(e, t) {
      var n = babelHelpers.extends({}, V(e), {
        type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
        kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
        body: t.toString(),
      });
      return n;
    }
    function U(e, t) {
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
    function V(e) {
      var t,
        n,
        a,
        i = Q(e),
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
            author: U(i, e),
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
    function H(e, t, n, r) {
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
    function G(e, t, n, r) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield (b || (b = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t.ephSetting,
                      a = t.preMatWid,
                      i = t.wid,
                      l = a != null ? a : r("nullthrows")(i),
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
                    l.isLid() ||
                      (o("WALogger").LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateBclMsgs] eph_setting=",
                            " recipient=",
                            "",
                          ])),
                        n,
                        l.server,
                      ),
                      o("WALogger")
                        .LOG(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
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
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST)
        return new (r("WAWebMsgKey"))({
          remote: o("WAWebWidFactory").asUserWidOrThrow(e.author),
          fromMe: !1,
          id: e.externalId,
        });
      if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT) {
        var t =
          e.metaFrom != null
            ? o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom)
            : o("WAWebUserPrefsMeUser").isMeAccount(e.author);
        return e.botParticipant != null
          ? new (r("WAWebMsgKey"))({
              remote: e.chat,
              fromMe: t,
              id: e.externalId,
              participant: o("WAWebWidFactory").asUserWidOrThrow(
                r("nullthrows")(e.botParticipant),
              ),
            })
          : new (r("WAWebMsgKey"))({
              remote: e.chat,
              fromMe: t,
              id: e.externalId,
            });
      }
      return new (r("WAWebMsgKey"))({
        remote: e.chat,
        fromMe: o("WAWebUserPrefsMeUser").isMeAccount(e.author),
        participant: o("WAWebWidFactory").asUserWidOrThrow(e.author),
        id: e.chat.isStatus()
          ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(e.externalId)
          : e.externalId,
      });
    }
    function X(e) {
      return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID
        ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
        : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION;
    }
    function Y(e) {
      return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
        ? e.author
        : e.chat;
    }
    function J(e) {
      var t;
      return (
        ((t = e.meta) == null ? void 0 : t.appdata) ===
          o("WAWebHandleMsgCommon").APPDATA.default &&
        e.msgProtobuf.senderKeyDistributionMessage != null
      );
    }
    function Z(e, t, n, a) {
      if (a.isBot() && r("justknobx")._("4101")) return !0;
      if (e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
        var i = t.msgMeta.capi === !0,
          l = t.msgInfo.chat.isGroup();
        if (l && i) return !0;
        if (i && o("WAWebMessagingGatingUtils").isSimpleSignalEnabled()) {
          if (n.isStateless === !0) return !0;
          o(
            "WAWebSimpleSignalDowngradeStore",
          ).markCoexUserDowngradedFromSimpleSignal(t.msgInfo.chat);
        }
      }
      return !1;
    }
    ((l.parseProtocolMessage = L),
      (l.parseMessage = E),
      (l.isRevokeInfo = B),
      (l.generatePlaceholder = W),
      (l.genDebugPlaceholderMsg = q),
      (l.generateBaseMsg = V),
      (l.generateBclMsgs = j),
      (l.messageInfoToKey = Q),
      (l.getDeviceType = X),
      (l.getFrom = Y),
      (l.shouldOmitSessionPersistence = Z));
  },
  98,
);
