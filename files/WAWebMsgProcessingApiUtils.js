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
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                      "[bot group] Failed to fetch group metadata for ephemeral fallback: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("bot-group-ephemeral-fallback-error");
            }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
    function v(e) {
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
        g = j(d);
      if (!o("WAWebUserPrefsMeUser").isMeAccount(g)) {
        b(p);
        return;
      }
      if (
        ((t = p.protocolMessage) == null
          ? void 0
          : t.historySyncNotification) != null
      ) {
        var h = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: p,
          message: B(d),
          msgContext: "relay",
          paymentInfo: _,
          bizInfo: c,
        });
        (W(h, m), (f = { history: r("WANullthrows")(h.historySyncMetaData) }));
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
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return v({
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
                ? k(e)
                : x(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP:
              return d.isDirect &&
                o("WAWebUserPrefsMeUser").isMeAccount(d.author) &&
                !K(e)
                ? k(e)
                : x(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST: {
              if (
                e.ciphertextType ===
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg
              ) {
                if (!d.bclHashValidated)
                  throw r("err")(
                    "parseMessage: participants for peer broadcast message is not validated",
                  );
                return x(e);
              }
              return e.isMessageRetry === !0 &&
                e.msgProtobuf.deviceSentMessage == null
                ? x(e)
                : T(e);
            }
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST:
              return x(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS:
              return d.isDirect === !0 ? L(e) : T(e);
            case o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS:
              return x(e);
            default:
              throw r("err")("Unrecognized MESSAGE_TYPE");
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
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield k(e);
          } catch (n) {
            if (n instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
              var t = Object.keys(e.msgProtobuf).filter(function (e) {
                return (
                  e !== "$$unknownFieldCount" && e !== "messageContextInfo"
                );
              });
              if (t.length === 1 && t[0] === "senderKeyDistributionMessage")
                return x(e);
            }
            throw n;
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            a = n.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              z(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.destinationJid == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              z(r.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.destinationJid,
            l = yield P(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(n),
              r,
            );
          return babelHelpers.extends(
            { deviceSent: { destination: o("WAWebWidFactory").createWid(i) } },
            l,
          );
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
            n = babelHelpers.objectWithoutPropertiesLoose(e, s),
            r = n.info,
            a = t.deviceSentMessage;
          if (a == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              z(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM,
            );
          if (a.phash == null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              z(r.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
            );
          var i = a.phash,
            l = yield P(
              o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(t),
              n,
            );
          return babelHelpers.extends({ deviceSent: { phash: i, info: r } }, l);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
          if (t.deviceSentMessage != null)
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
              z(n.info.author),
              o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER,
            );
          var r = yield P(t, n);
          return babelHelpers.extends({ deviceSent: null }, r);
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            g = t.info,
            h = t.isMessageRetry,
            C = t.isOffline,
            b = t.msgBotInfo,
            v = t.paymentInfo,
            S = t.processDecryptedProtoParams,
            R = t.protobufBytes,
            L = t.reportingTokenInfo;
          if (e == null)
            return { senderKey: null, storeMsg: null, renderableMsgs: [] };
          var E = babelHelpers.extends(
              {},
              o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: e,
                message: B(g),
                msgContext: "relay",
                paymentInfo: v,
                bizInfo: m,
                editAttr: g.edit,
                rcat: S == null ? void 0 : S.rcat,
                bizSource:
                  S == null || (n = S.msgMeta) == null ? void 0 : n.bizSource,
                msgMeta: S == null ? void 0 : S.msgMeta,
                msgBotInfo: b,
              }),
            ),
            k = S == null || (a = S.msgMeta) == null ? void 0 : a.isReadByPeer;
          k === !0 && ((E.read = !0), (E.ack = o("WAWebAck").ACK.READ));
          var I = E,
            T = I.disappearingModeTrigger,
            D = (i = E.id.remote) != null ? i : E.from;
          if (
            D != null &&
            r("WAWebWid").isGroup(D) &&
            T != null &&
            o("WAWebABProps").getABPropConfigValue(
              "dm_initiator_trigger_groups",
            )
          ) {
            var x = yield o(
              "WAWebDisappearingModeGroupsProtoUtils",
            ).updateDisappearingModeForGroups(T, D);
            x != null && (E = babelHelpers.extends({}, E, x));
          }
          if (
            (W(
              E,
              b,
              S == null || (l = S.msgMeta) == null ? void 0 : l.targetSenderJid,
              S == null || (s = S.msgMeta) == null ? void 0 : s.targetId,
            ),
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              (S == null || (u = S.msgMeta) == null ? void 0 : u.targetId) !=
                null &&
              D != null &&
              r("WAWebWid").isGroup(D))
          )
            try {
              var $, P;
              yield q(
                E,
                D,
                S == null || ($ = S.msgMeta) == null
                  ? void 0
                  : $.targetSenderJid,
                S == null || (P = S.msgMeta) == null ? void 0 : P.targetId,
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
          if ((yield y(E, D, b), _ != null)) {
            var N = _.category,
              w = _.tag;
            ((E.hsmTag = w),
              (E.hsmCategory = N),
              w === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING &&
                o(
                  "WAWebMarketingMessagesUserFeedbackGatingUtils",
                ).triggerExposureMMUserControls());
          }
          if (
            (S == null || (d = S.msgMeta) == null ? void 0 : d.bizSource) !=
            null
          ) {
            var A;
            E.bizSource =
              S == null || (A = S.msgMeta) == null ? void 0 : A.bizSource;
          }
          var F =
              e.senderKeyDistributionMessage != null
                ? M(g, e.senderKeyDistributionMessage)
                : null,
            O = E.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && F == null,
            U = E.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && F != null,
            H = null;
          if (O && S != null) {
            var G = S.decrypted,
              z = S.reparsing,
              j = babelHelpers.objectWithoutPropertiesLoose(S, c);
            ((E.futureproofParams = j), (E.futureproofBuffer = G));
          }
          if (
            (g.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS &&
              ((E.campaignId = g.campaignId),
              (E.campaignDuration = g.campaignDuration)),
            g.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST &&
              ((E.broadcastId = g.chat),
              (E.bclParticipants = g.bclParticipants),
              (H = E)),
            g.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST)
          ) {
            var K;
            E.broadcastId = g.chat;
            var Q = (K = g.preMatChat) != null ? K : g.author,
              X = g.ephSetting,
              Y = E.ephemeralSharedSecret;
            if (X != null && Y != null) {
              var J = yield o(
                  "WAWebEphemeralDecodeBroadcastSetting",
                ).decodeBroadcastEphemeralSetting({
                  broadcastJid: g.chat,
                  recipient: Q.isLid()
                    ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                    : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  sender: Q,
                  ephSetting: X,
                  sharedSecret: Y,
                }),
                Z = J.ephemeralDuration,
                ee = J.ephemeralSettingTimestamp;
              ((E.ephemeralDuration = Z), (E.ephemeralSettingTimestamp = ee));
            }
          }
          var te = [],
            ne = E.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            re = U || (ne && p === !0 && E.futureproofType == null);
          return (
            re ||
              (g.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                ? (te = yield V(E, g.bclParticipants))
                : ((E.subtype === "payment_transaction_request_cancelled" ||
                    E.subtype === "payment_action_request_declined") &&
                    E.paymentRequestMessageKey == null) ||
                  ((E.reportingTokenInfo = L),
                  (E.plainProtobufBytes = R),
                  (E.preMatChat = g.preMatChat),
                  (E.isRetry = h),
                  (E.isOffline = C),
                  (g.author !== E.from || g.author !== E.author) &&
                    (E.senderWithDevice = g.author),
                  o("WAWebBizGatingUtils").shouldGenerateAGMMsgs(E.ctwaContext)
                    ? (te = yield o(
                        "WAWebMsgAGMProcessing",
                      ).generateAutomatedGreetingMsgs(E, g))
                    : (te = [E]))),
            { senderKey: F, storeMsg: H, renderableMsgs: te }
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
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
    function w(e) {
      return !(
        (e.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          e.type !==
            o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) ||
        e.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
      );
    }
    function A(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = e.placeholderAddReason,
        a = e.placeholderType;
      if (!w(t)) return null;
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
        s = babelHelpers.extends({}, B(t), {
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
    function F(e, t) {
      var n = babelHelpers.extends({}, B(e), {
        type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
        kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
        body: t.toString(),
      });
      return n;
    }
    function O(e, t) {
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
    function B(e) {
      var t,
        n,
        a,
        i = G(e),
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
          author: O(i, e),
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
    function W(e, t, n, r) {
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
    function q(e, t, n, r) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
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
    function z(e) {
      return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID
        ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
        : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION;
    }
    function j(e) {
      return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
        ? e.author
        : e.chat;
    }
    function K(e) {
      var t;
      return (
        ((t = e.meta) == null ? void 0 : t.appdata) ===
          o("WAWebHandleMsgCommon").APPDATA.default &&
        e.msgProtobuf.senderKeyDistributionMessage != null
      );
    }
    function Q(e, t, n) {
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
    ((l.parseProtocolMessage = v),
      (l.parseMessage = S),
      (l.isRevokeInfo = w),
      (l.generatePlaceholder = A),
      (l.genDebugPlaceholderMsg = F),
      (l.generateBaseMsg = B),
      (l.generateBclMsgs = V),
      (l.messageInfoToKey = G),
      (l.getDeviceType = z),
      (l.getFrom = j),
      (l.shouldOmitSessionPersistence = Q));
  },
  98,
);
