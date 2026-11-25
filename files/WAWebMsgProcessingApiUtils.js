__d(
  "WAWebMsgProcessingApiUtils",
  [
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebBatchedStatusIdUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebCTWAGatingUtils",
    "WAWebCoexV2SyncdBotPeerMessage",
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
    "WAWebHandleMsgTypes",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgAGMProcessing",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebMsmsgMsgSecretCache",
    "WAWebSchemaMessage",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumDsmError",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "WAWebWidFactory",
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
      C;
    async function b(e) {
      var t = e.chatWid,
        n = e.msg,
        a = e.msgBotInfo;
      if (
        !(
          a == null ||
          t == null ||
          !r("WAWebWid").isGroup(t) ||
          !(n.ephemeralDuration == null || n.ephemeralDuration === 0)
        )
      )
        try {
          var i = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
          i != null &&
            i.ephemeralDuration > 0 &&
            ((n.ephemeralDuration = i.ephemeralDuration),
            o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot group] Applied group ephemeral duration ",
                    " to bot message",
                  ])),
                String(i.ephemeralDuration),
              )
              .sendLogs("bot-group-ephemeral-fallback"));
        } catch (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot group] ephemeral fallback failed: ",
                  "",
                ])),
              e,
            )
            .sendLogs("bot-group-ephemeral-fallback-error");
        }
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
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
        g = V(d);
      if (!o("WAWebUserUtils").isMeAccount(g)) return R(d, p);
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
        (O(h, m), (f = { history: r("nullthrows")(h.historySyncMetaData) }));
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
    function R(e, t) {
      var n = o("WAWebCoexV2SyncdBotPeerMessage").getCoexV2BotKeyRequest(e, t);
      if (n == null) {
        v(t);
        return;
      }
      return { appStateSyncKeyRequest: n };
    }
    async function L(e) {
      return o("WAWebCoexV2SyncdBotPeerMessage").isCoexV2BotPeerMessage(e.info)
        ? o("WAWebCoexV2SyncdBotPeerMessage").parseCoexV2BotPeerMessage(
            e.info,
            e.msgProtobuf,
          )
        : E(e);
    }
    async function E(e) {
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
        ((a = m.protocolMessage) == null ? void 0 : a.appStateSyncKeyShare) !=
          null ||
        ((i = m.protocolMessage) == null ? void 0 : i.appStateSyncKeyRequest) !=
          null ||
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
        case o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT:
          return o("WAWebUserUtils").isMeAccount(d.author) ? I(e) : D(e);
        case o("WAWebHandleMsgTypes").MESSAGE_TYPE.GROUP:
          return d.isDirect &&
            o("WAWebUserUtils").isMeAccount(d.author) &&
            !H(e)
            ? I(e)
            : D(e);
        case o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST: {
          if (
            e.ciphertextType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
          ) {
            if (!d.bclHashValidated)
              throw r("err")(
                "parseMessage: participants for peer broadcast message is not validated",
              );
            return D(e);
          }
          return e.isMessageRetry === !0 &&
            e.msgProtobuf.deviceSentMessage == null
            ? D(e)
            : T(e);
        }
        case o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST:
          return D(e);
        case o("WAWebHandleMsgTypes").MESSAGE_TYPE.DIRECT_PEER_STATUS:
          return d.isDirect === !0 ? k(e) : T(e);
        case o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_STATUS:
          return D(e);
        default:
          throw r("err")("Unrecognized MESSAGE_TYPE");
      }
    }
    async function k(e) {
      try {
        return await I(e);
      } catch (n) {
        if (n instanceof o("WAWebHandleMsgError").DeviceSentMessageError) {
          var t = Object.keys(e.msgProtobuf).filter(function (e) {
            return e !== "$$unknownFieldCount" && e !== "messageContextInfo";
          });
          if (t.length === 1 && t[0] === "senderKeyDistributionMessage")
            return D(e);
        }
        throw n;
      }
    }
    async function I(t) {
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
        l = await x(
          o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(n),
          r,
        );
      return babelHelpers.extends(
        { deviceSent: { destination: o("WAWebWidFactory").createWid(i) } },
        l,
      );
    }
    async function T(e) {
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
        l = await x(
          o("WAWebDeviceSentMessageProtoUtils").unwrapDeviceSentMessage(t),
          n,
        );
      return babelHelpers.extends({ deviceSent: { phash: i, info: r } }, l);
    }
    async function D(e) {
      var t = e.msgProtobuf,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u);
      if (t.deviceSentMessage != null)
        throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
          U(n.info.author),
          o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER,
        );
      var r = await x(t, n);
      return babelHelpers.extends({ deviceSent: null }, r);
    }
    async function x(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        d,
        m,
        p,
        g = t.bizInfo,
        h = t.hidePlaceholder,
        y = t.hsmInfo,
        C = t.info,
        v = t.isMessageRetry,
        S = t.isOffline,
        R = t.msgBotInfo,
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
      if (o("WAWebDeviceSentMessageProtoUtils").containsDeviceSentMessage(e))
        throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(
          U(C.author),
          o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM,
        );
      var T = babelHelpers.extends(
          {},
          o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: e,
            message: F(C),
            msgContext: "relay",
            paymentInfo: L,
            bizInfo: g,
            editAttr: C.edit,
            rcat: E == null ? void 0 : E.rcat,
            bizSource:
              E == null || (n = E.msgMeta) == null ? void 0 : n.bizSource,
            msgMeta: E == null ? void 0 : E.msgMeta,
            msgBotInfo: R,
          }),
        ),
        D = E == null || (a = E.msgMeta) == null ? void 0 : a.isReadByPeer;
      D === !0 && ((T.read = !0), (T.ack = o("WAWebAck").ACK.READ));
      var x = T,
        N = x.disappearingModeTrigger,
        M = (i = T.id.remote) != null ? i : T.from;
      if (M != null && r("WAWebWid").isGroup(M) && N != null) {
        var w = await o(
          "WAWebDisappearingModeGroupsProtoUtils",
        ).updateDisappearingModeForGroups(N, M);
        w != null && (T = babelHelpers.extends({}, T, w));
      }
      if (
        (O(
          T,
          R,
          E == null || (l = E.msgMeta) == null ? void 0 : l.targetSenderJid,
          E == null || (s = E.msgMeta) == null ? void 0 : s.targetId,
        ),
        (E == null || (u = E.msgMeta) == null ? void 0 : u.targetId) != null &&
          M != null &&
          r("WAWebWid").isGroup(M))
      )
        try {
          var A, q;
          await B(
            T,
            M,
            E == null || (A = E.msgMeta) == null ? void 0 : A.targetSenderJid,
            E == null || (q = E.msgMeta) == null ? void 0 : q.targetId,
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot group] processBotGroupGossip failed with error: ",
                  "",
                ])),
              e,
            )
            .sendLogs("failed-to-process-bot-group-gossip");
        }
      if ((await b({ chatWid: M, msg: T, msgBotInfo: R }), y != null)) {
        var V = y.category,
          H = y.tag;
        ((T.hsmTag = H), (T.hsmCategory = V));
      }
      if (
        (E == null || (d = E.msgMeta) == null ? void 0 : d.bizSource) != null
      ) {
        var G;
        T.bizSource =
          E == null || (G = E.msgMeta) == null ? void 0 : G.bizSource;
      }
      var z =
        (m = C.metaFrom) != null
          ? m
          : E == null || (p = E.msgMeta) == null
            ? void 0
            : p.from;
      z != null && (T.metaFrom = z);
      var j =
          e.senderKeyDistributionMessage != null
            ? $(C, e.senderKeyDistributionMessage)
            : null,
        K =
          e.rootSecretDistributeMessage != null
            ? P(e.rootSecretDistributeMessage, e, T.id.id)
            : null,
        Q =
          T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          j == null &&
          K == null,
        X = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && j != null,
        Y = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && K != null,
        J = null;
      if (Q && E != null) {
        var Z = E.decrypted,
          ee = E.reparsing,
          te = babelHelpers.objectWithoutPropertiesLoose(E, c);
        ((T.futureproofParams = te), (T.futureproofBuffer = Z));
      }
      if (
        (C.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_STATUS &&
          ((T.campaignId = C.campaignId),
          (T.campaignDuration = C.campaignDuration)),
        C.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST &&
          ((T.broadcastId = C.chat),
          (T.bclParticipants = C.bclParticipants),
          (J = T)),
        C.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST)
      ) {
        var ne;
        T.broadcastId = C.chat;
        var re = o("WAWebWidFactory").asUserWidOrThrow(
            (ne = C.preMatChat) != null ? ne : C.author,
          ),
          oe = C.ephSetting,
          ae = T.ephemeralSharedSecret;
        if (oe != null && ae != null) {
          var ie = await o(
              "WAWebEphemeralDecodeBroadcastSetting",
            ).decodeBroadcastEphemeralSetting({
              broadcastJid: C.chat,
              recipient: o("WAWebUserUtils").getMeLidUserOrThrow(),
              sender: re,
              ephSetting: oe,
              sharedSecret: ae,
            }),
            le = ie.ephemeralDuration,
            se = ie.ephemeralSettingTimestamp;
          ((T.ephemeralDuration = le),
            (T.ephemeralSettingTimestamp = se),
            o("WALogger")
              .LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] decoded eph_setting sender=",
                    " dur=",
                    " ts=",
                    "",
                  ])),
                re.toString(),
                le,
                se,
              )
              .tags("messaging"));
        }
      }
      var ue = [],
        ce = T.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN,
        de = X || Y || (ce && h === !0 && T.futureproofType == null);
      return (
        de ||
          (C.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
            ? (ue = await W(T, C.bclParticipants))
            : ((T.subtype === "payment_transaction_request_cancelled" ||
                T.subtype === "payment_action_request_declined") &&
                T.paymentRequestMessageKey == null) ||
              ((T.reportingTokenInfo = I),
              (T.plainProtobufBytes = k),
              (T.preMatChat = C.preMatChat),
              (T.isRetry = v),
              (T.isOffline = S),
              (C.author !== T.from || C.author !== T.author) &&
                (T.senderWithDevice = C.author),
              o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(
                T.ctwaContext,
                T.id.fromMe,
                C.chat,
              )
                ? (ue = await o(
                    "WAWebMsgAGMProcessing",
                  ).generateAutomatedGreetingMsgs(T, C))
                : (ue = [T]))),
        {
          senderKey: j,
          rootSecretDistribute: K,
          storeMsg: J,
          renderableMsgs: ue,
        }
      );
    }
    function $(e, t) {
      if (!e.chat.isGroup() && !e.chat.isBroadcast())
        throw r("err")("should not have senderkey");
      var n = t.axolotlSenderKeyDistributionMessage,
        a = t.groupId;
      if (a == null || e.chat.toString({ legacy: !0 }) !== a)
        throw (
          o("WALogger").ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function P(e, t, n) {
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
    function N(e) {
      return !(
        (e.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          e.type !== o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST) ||
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
          a === o("WAWebHandleMsgTypes").PlaceholderType.E2E
            ? void 0
            : a ===
                o("WAWebHandleMsgTypes").PlaceholderType.BOT_UNAVAILABLE_FANOUT
              ? "bot_unavailable_fanout"
              : a ===
                  o("WAWebHandleMsgTypes").PlaceholderType
                    .HOSTED_UNAVAILABLE_FANOUT
                ? "hosted_unavailable_fanout"
                : a ===
                    o("WAWebHandleMsgTypes").PlaceholderType
                      .VIEW_ONCE_UNAVAILABLE_FANOUT
                  ? "view_once_unavailable_fanout"
                  : a ===
                      o("WAWebHandleMsgTypes").PlaceholderType
                        .ACP_UNAVAILABLE_FANOUT
                    ? "acp_unavailable_fanout"
                    : a === o("WAWebHandleMsgTypes").PlaceholderType.FANOUT
                      ? "fanout"
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              a,
                          );
                        })(),
        l = n.isReadByPeer === !0,
        s = n.isGroupStatus === !0 ? !0 : void 0,
        u = babelHelpers.extends({}, F(t), {
          type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
          kind: o("WAWebMsgType").MsgKind.Ciphertext,
          subtype: i,
          e2eSenderType: o("WAWebWamMsgUtils").getWamE2eSenderType(t.author),
          placeholderAddReason: r,
          bclParticipants:
            t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
              ? t.bclParticipants
              : void 0,
          read: l ? !0 : void 0,
          isGroupStatus: s,
        });
      l && (u.ack = o("WAWebAck").ACK.READ);
      var c = o("WAWebHandleMsgMetaUtils").getMsgTypeFromMsgMeta(n);
      return c != null
        ? babelHelpers.extends({}, u, {
            parentMsgKey: o("WAWebE2EProtoUtils").createMsgKeyFromThreadInfo({
              info: t,
              msgMeta: n,
              realType: c,
            }),
            kind: o("WAWebMsgType").MsgKind.PlaceholderAddon,
            realType: c,
          })
        : babelHelpers.extends({}, u, {
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
        !o("WAWebUserUtils").isMeDevice(t.author) &&
        o("WAWebUserUtils").isMeAccount(t.author)
      )
        return t.author;
    }
    function F(e) {
      var t,
        n,
        a,
        i = q(e),
        l = o("WAWebUserUtils").getMeLidUserOrThrow(),
        s = o("WAWebUserUtils").getMePnLessOrFallback_DO_NOT_USE(),
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
            author: A(i, e),
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
    async function B(e, t, n, a) {
      var i, l;
      if (!(n == null || a == null)) {
        var s = n ? o("WAWebUserUtils").isMeAccount(n) : !0,
          u = { fromMe: s, remote: t, id: a },
          c = o(
            "WAWebMsmsgMsgSecretCache",
          ).msmsgBotGroupGossipDataCache.getMsmsgBotGroupGossipDataFromCache({
            fromMe: s,
            id: a,
            participant: n,
            remote: t,
          });
        u.participant =
          (i = o("WAWebLidMigrationUtils").toPn(n)) != null ? i : n;
        var d = new (r("WAWebMsgKey"))(u).toString();
        if (c == null) {
          var m = await o("WAWebSchemaMessage").getMessageTable().get(d);
          if (m != null) {
            var p = o("WAWebDBMessageSerialization").messageFromDbRow(m);
            c = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
              p == null ? void 0 : p.botGroupParticipants,
              p == null ? void 0 : p.botGroupParticipant,
            );
          }
        } else
          c.isLegacySingular &&
            o(
              "WAWebMsmsgMsgSecretCache",
            ).msmsgBotGroupGossipDataCache.deleteMsmsgBotGroupGossipDataFromCache(
              d,
            );
        var _ = e.id.participant,
          f = _ == null ? void 0 : _.user,
          g =
            ((l = c) == null ? void 0 : l.isLegacySingular) === !1 &&
            _ != null &&
            _.isFbidBot() &&
            f != null &&
            c.participants.some(function (e) {
              return e.user === f;
            }),
          h =
            g &&
            t.isGroup() &&
            o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(_),
          y = o("WAWebMsmsgMsgSecretCache").getBotGroupParticipantForResponse(
            c,
            _,
            h,
          );
        if (
          t.isGroup() &&
          o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(y)
        ) {
          var C,
            b = e;
          Object.assign(b, {
            botGroupParticipant: y,
            botGroupParticipants:
              ((C = c) == null ? void 0 : C.isLegacySingular) === !1
                ? [].concat(c.participants)
                : null,
          });
        }
      }
    }
    async function W(e, t) {
      var n = await Promise.all(
        t.map(async function (t) {
          var n = t.ephSetting,
            a = t.preMatWid,
            i = t.wid,
            l = a != null ? a : r("nullthrows")(i),
            s;
          try {
            s = new (r("WAWebMsgKey"))({ remote: i, fromMe: !0, id: e.id.id });
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
            var p = await o(
              "WAWebEphemeralDecodeBroadcastSetting",
            ).decodeBroadcastEphemeralSetting({
              broadcastJid: m,
              recipient: l,
              sender: l.isLid()
                ? o("WAWebUserUtils").getMeLidUserOrThrow()
                : o("WAWebUserUtils").getMePnUserOrThrow_DO_NOT_USE(),
              ephSetting: n,
              sharedSecret: d,
            });
            ((u = p.ephemeralDuration), (c = p.ephemeralSettingTimestamp));
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
            from: o("WAWebUserUtils").getMePnLessOrFallback_DO_NOT_USE(),
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
        }),
      );
      return n.filter(Boolean);
    }
    function q(e) {
      if (e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_BROADCAST)
        return new (r("WAWebMsgKey"))({
          remote: o("WAWebWidFactory").asUserWidOrThrow(e.author),
          fromMe: !1,
          id: e.externalId,
        });
      if (e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT) {
        var t =
          e.metaFrom != null
            ? o("WAWebUserUtils").isMeAccount(e.metaFrom)
            : o("WAWebUserUtils").isMeAccount(e.author);
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
        fromMe: o("WAWebUserUtils").isMeAccount(e.author),
        participant: o("WAWebWidFactory").asUserWidOrThrow(e.author),
        id: e.chat.isStatus()
          ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(e.externalId)
          : e.externalId,
      });
    }
    function U(e) {
      return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID
        ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
        : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION;
    }
    function V(e) {
      return e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT
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
    function G(e, t, n, a) {
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
    ((l.parseProtocolMessage = S),
      (l.parseMessage = L),
      (l.isRevokeInfo = N),
      (l.generatePlaceholder = M),
      (l.genDebugPlaceholderMsg = w),
      (l.generateBaseMsg = F),
      (l.generateBclMsgs = W),
      (l.messageInfoToKey = q),
      (l.getDeviceType = U),
      (l.getFrom = V),
      (l.shouldOmitSessionPersistence = G));
  },
  98,
);
