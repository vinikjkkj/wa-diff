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
      f;
    function g(e) {
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
    function h(e) {
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
        h = V(d);
      if (!o("WAWebUserPrefsMeUser").isMeAccount(h)) {
        g(p);
        return;
      }
      if (
        ((t = p.protocolMessage) == null
          ? void 0
          : t.historySyncNotification) != null
      ) {
        var y = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: p,
          message: w(d),
          msgContext: "relay",
          paymentInfo: _,
          bizInfo: c,
        });
        (A(y, m), (f = { history: r("WANullthrows")(y.historySyncMetaData) }));
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return h({
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
                ? S(e)
                : k(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP:
              return d.isDirect &&
                o("WAWebUserPrefsMeUser").isMeAccount(d.author) &&
                !H(e)
                ? S(e)
                : k(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST: {
              if (
                e.ciphertextType ===
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg
              ) {
                if (!d.bclHashValidated)
                  throw r("err")(
                    "parseMessage: participants for peer broadcast message is not validated",
                  );
                return k(e);
              }
              return e.isMessageRetry === !0 &&
                e.msgProtobuf.deviceSentMessage == null
                ? k(e)
                : L(e);
            }
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST:
              return k(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS:
              return d.isDirect === !0 ? b(e) : L(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS:
              return k(e);
            default:
              throw r("err")("Unrecognized MESSAGE_TYPE");
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield S(e);
          } catch (n) {
            if (n instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
              var t = Object.keys(e.msgProtobuf).filter(function (e) {
                return (
                  e !== "$$unknownFieldCount" && e !== "messageContextInfo"
                );
              });
              if (t.length === 1 && t[0] === "senderKeyDistributionMessage")
                return k(e);
            }
            throw n;
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
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            a = n.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              U(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.destinationJid == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              U(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.destinationJid,
            l = yield T(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(n),
              r,
            );
          return babelHelpers.extends(
            { deviceSent: { destination: o("WAWebWidFactory").createWid(i) } },
            l,
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = babelHelpers.objectWithoutPropertiesLoose(e, s),
            r = n.info,
            a = t.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              U(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.phash == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              U(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.phash,
            l = yield T(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(t),
              n,
            );
          return babelHelpers.extends({ deviceSent: { phash: i, info: r } }, l);
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
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
          if (t.deviceSentMessage != null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              U(n.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER,
            );
          var r = yield T(t, n);
          return babelHelpers.extends({ deviceSent: null }, r);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i,
            l,
            s,
            u,
            d,
            m = t.bizInfo,
            _ = t.hidePlaceholder,
            f = t.hsmInfo,
            g = t.info,
            h = t.isMessageRetry,
            y = t.isOffline,
            C = t.msgBotInfo,
            b = t.paymentInfo,
            v = t.processDecryptedProtoParams,
            S = t.protobufBytes,
            R = t.reportingTokenInfo;
          if (e == null)
            return { senderKey: null, storeMsg: null, renderableMsgs: [] };
          var L = babelHelpers.extends(
              {},
              o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: e,
                message: w(g),
                msgContext: "relay",
                paymentInfo: b,
                bizInfo: m,
                editAttr: g.edit,
                rcat: v == null ? void 0 : v.rcat,
                bizSource:
                  v == null || (n = v.msgMeta) == null ? void 0 : n.bizSource,
                msgMeta: v == null ? void 0 : v.msgMeta,
                msgBotInfo: C,
              }),
            ),
            E = v == null || (a = v.msgMeta) == null ? void 0 : a.isReadByPeer;
          E === !0 && ((L.read = !0), (L.ack = o("WAWebAck").ACK.READ));
          var k = L,
            I = k.disappearingModeTrigger,
            T = (i = L.id.remote) != null ? i : L.from;
          if (
            T != null &&
            r("WAWebWid").isGroup(T) &&
            I != null &&
            o("WAWebABProps").getABPropConfigValue(
              "dm_initiator_trigger_groups",
            )
          ) {
            var D = yield o(
              "WAWebDisappearingModeGroupsProtoUtils",
            ).updateDisappearingModeForGroups(I, T);
            D != null && (L = babelHelpers.extends({}, L, D));
          }
          if (
            (A(
              L,
              C,
              v == null || (l = v.msgMeta) == null ? void 0 : l.targetSenderJid,
              v == null || (s = v.msgMeta) == null ? void 0 : s.targetId,
            ),
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              (v == null || (u = v.msgMeta) == null ? void 0 : u.targetId) !=
                null &&
              T != null &&
              r("WAWebWid").isGroup(T))
          )
            try {
              var $, P;
              yield F(
                L,
                T,
                v == null || ($ = v.msgMeta) == null
                  ? void 0
                  : $.targetSenderJid,
                v == null || (P = v.msgMeta) == null ? void 0 : P.targetId,
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
          if (f != null) {
            var N = f.category,
              M = f.tag;
            ((L.hsmTag = M),
              (L.hsmCategory = N),
              M === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING &&
                o(
                  "WAWebMarketingMessagesUserFeedbackGatingUtils",
                ).triggerExposureMMUserControls());
          }
          if (
            (v == null || (d = v.msgMeta) == null ? void 0 : d.bizSource) !=
            null
          ) {
            var O;
            L.bizSource =
              v == null || (O = v.msgMeta) == null ? void 0 : O.bizSource;
          }
          var W =
              e.senderKeyDistributionMessage != null
                ? x(g, e.senderKeyDistributionMessage)
                : null,
            q = L.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && W == null,
            U = L.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && W != null,
            V = null;
          if (q && v != null) {
            var H = v.decrypted,
              G = v.reparsing,
              z = babelHelpers.objectWithoutPropertiesLoose(v, c);
            ((L.futureproofParams = z), (L.futureproofBuffer = H));
          }
          if (
            (g.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS &&
              ((L.campaignId = g.campaignId),
              (L.campaignDuration = g.campaignDuration)),
            g.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              ((L.broadcastId = g.chat),
              (L.bclParticipants = g.bclParticipants),
              (V = L)),
            g.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST)
          ) {
            var j;
            L.broadcastId = g.chat;
            var K = (j = g.preMatChat) != null ? j : g.author,
              Q = g.ephSetting,
              X = L.ephemeralSharedSecret;
            if (Q != null && X != null) {
              var Y = yield o(
                  "WAWebEphemeralDecodeBroadcastSetting",
                ).decodeBroadcastEphemeralSetting({
                  broadcastJid: g.chat,
                  recipient: K.isLid()
                    ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                    : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  sender: K,
                  ephSetting: Q,
                  sharedSecret: X,
                }),
                J = Y.ephemeralDuration,
                Z = Y.ephemeralSettingTimestamp;
              ((L.ephemeralDuration = J), (L.ephemeralSettingTimestamp = Z));
            }
          }
          var ee = [],
            te = L.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            ne = U || (te && _ === !0 && L.futureproofType == null);
          return (
            ne ||
              (g.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                ? (ee = yield B(L, g.bclParticipants))
                : ((L.subtype === "payment_transaction_request_cancelled" ||
                    L.subtype === "payment_action_request_declined") &&
                    L.paymentRequestMessageKey == null) ||
                  ((L.reportingTokenInfo = R),
                  (L.plainProtobufBytes = S),
                  (L.preMatChat = g.preMatChat),
                  (L.isRetry = h),
                  (L.isOffline = y),
                  (g.author !== L.from || g.author !== L.author) &&
                    (L.senderWithDevice = g.author),
                  o("WAWebBizGatingUtils").shouldGenerateAGMMsgs(L.ctwaContext)
                    ? (ee = yield o(
                        "WAWebMsgAGMProcessing",
                      ).generateAutomatedGreetingMsgs(L, g))
                    : (ee = [L]))),
            { senderKey: W, storeMsg: V, renderableMsgs: ee }
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
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
    function $(e) {
      return !(
        (e.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          e.type !==
            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) ||
        e.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
      );
    }
    function P(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = e.placeholderAddReason,
        a = e.placeholderType;
      if (!$(t)) return null;
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
        s = babelHelpers.extends({}, w(t), {
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
    function N(e, t) {
      var n = babelHelpers.extends({}, w(e), {
        type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
        kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
        body: t.toString(),
      });
      return n;
    }
    function M(e, t) {
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
    function w(e) {
      var t,
        n,
        a,
        i = q(e),
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
          author: M(i, e),
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
    function A(e, t, n, r) {
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
    function F(e, t, n, r) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield (f || (f = n("Promise"))).all(
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
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                    var f = babelHelpers.extends({}, e, {
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
                    return f;
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
        W.apply(this, arguments)
      );
    }
    function q(e) {
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
    function U(e) {
      return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID
        ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
        : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION;
    }
    function V(e) {
      return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
        ? e.author
        : e.chat;
    }
    function H(e) {
      var t;
      return (
        ((t = e.meta) == null ? void 0 : t.appdata) ===
          o("WAWebHandleMsgCommon").APPDATA.default &&
        e.msgProtobuf.senderKeyDistributionMessage != null
      );
    }
    function G(e, t) {
      if (e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
        var n = t.msgInfo.chat.isGroup(),
          r = t.msgMeta.capi === !0;
        return n && r;
      }
      return !1;
    }
    ((l.parseProtocolMessage = h),
      (l.parseMessage = y),
      (l.isRevokeInfo = $),
      (l.generatePlaceholder = P),
      (l.genDebugPlaceholderMsg = N),
      (l.generateBaseMsg = w),
      (l.generateBclMsgs = B),
      (l.messageInfoToKey = q),
      (l.getDeviceType = U),
      (l.getFrom = V),
      (l.shouldOmitSessionPersistence = G));
  },
  98,
);
