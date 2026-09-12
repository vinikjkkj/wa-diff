__d(
  "WAWebPostIncomingMessageDropMetric",
  [
    "WADeprecatedWapParser",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebGetMetricE2eDestination",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebIncomingMessageDropWamEvent",
    "WAWebJidToWid",
    "WAWebSessionScopeWamUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumMessageDropReasonType",
    "WAWebWamEnumRevokeType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
        ? e.author
        : e.chat;
    }
    var s = new (r("WADeprecatedWapParser"))(
      "incomingMsgParserForMetric",
      function (e) {
        var t = {};
        try {
          t.type = e.attrEnum(
            "type",
            o("WAWebHandleMsgCommon").STANZA_MSG_TYPES,
          );
        } catch (e) {}
        try {
          t.pollType =
            t.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll
              ? e
                  .child("meta")
                  .attrEnumOrNullIfUnknown(
                    "polltype",
                    o("WAWebHandleMsgCommon").POLL_TYPES,
                  )
              : null;
        } catch (e) {}
        try {
          var n, r;
          ((t.from = o("WAWebJidToWid").jidWithTypeToWid(
            e.attrJidWithType("from"),
          )),
            (n = t.from) != null && n.isUser()
              ? (t.author = t.from)
              : (r = t.from) != null &&
                r.isGroup() &&
                (t.author = e.hasAttr("participant")
                  ? o("WAWebJidToWid").deviceJidToDeviceWid(
                      e.attrDeviceJid("participant"),
                    )
                  : null));
        } catch (e) {}
        try {
          t.offline = e.attrInt("offline");
        } catch (e) {}
        try {
          t.edit = e.attrInt("edit");
        } catch (e) {}
        try {
          var a = e.attrString("category"),
            i = o("WAWebWamMsgUtils").getWamInvisibleMessageCategoryType(a);
          i != null && (t.invisibleMessageCategoryType = i);
        } catch (e) {}
        var l = e.maybeChild("enc");
        if (l != null) {
          try {
            t.e2eType = l.attrEnumValues(
              "type",
              o("WAWebBackendJobs.flow").CiphertextType.members(),
            );
          } catch (e) {}
          try {
            t.encMediaType = o("WAWebBackendJobs.flow").EncMediaType.cast(
              l.maybeAttrString("mediatype"),
            );
          } catch (e) {}
          try {
            t.sessionType = l.maybeAttrString("session_type");
          } catch (e) {
            t.sessionType = null;
          }
          try {
            t.retryCount = l.attrInt("count");
          } catch (e) {}
        }
        try {
          var s;
          if (
            ((t.botType = o("WAWebWamEnumBotType").BOT_TYPE.UNKNOWN),
            (s = t.author) != null && s.isBot())
          )
            t.botType = o("WAWebWamEnumBotType").BOT_TYPE.METABOT;
          else {
            var u,
              c =
                (u = e.maybeChild("bot")) == null
                  ? void 0
                  : u.maybeAttrString("biz_bot");
            c === "1"
              ? (t.botType = o("WAWebWamEnumBotType").BOT_TYPE.BOT_1P_BIZ)
              : c === "3" &&
                (t.botType = o("WAWebWamEnumBotType").BOT_TYPE.BOT_3P_BIZ);
          }
        } catch (e) {}
        return t;
      },
    );
    function u(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C = e.messageDropReason,
        b = e.stanza,
        v = null;
      try {
        v = s.parse(b).success;
      } catch (e) {}
      var S = new (o(
        "WAWebIncomingMessageDropWamEvent",
      ).IncomingMessageDropWamEvent)({
        messageDropReason: C,
        isPq:
          ((t = v) == null ? void 0 : t.sessionType) != null
            ? v.sessionType === "pq"
            : void 0,
        offline: ((n = v) == null ? void 0 : n.offline) != null,
        offlineCount: (r = v) == null ? void 0 : r.offline,
        messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
          encMediaType: (a = v) == null ? void 0 : a.encMediaType,
          msgType: (i = v) == null ? void 0 : i.type,
          msgPollType: (l = v) == null ? void 0 : l.pollType,
        }),
      });
      if (((u = v) == null ? void 0 : u.from) != null) {
        var R = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(
          v.from,
        );
        R != null && (S.e2eDestination = R);
      }
      var L = (c = v) == null ? void 0 : c.author;
      if (L != null) {
        var E = o("WAWebWamMsgUtils").getWamE2eSenderType(L);
        (E != null && (S.e2eSenderType = E),
          L.isHosted() &&
            (S.encryptionType = o(
              "WAWebWamEnumEncryptionTypeCode",
            ).ENCRYPTION_TYPE_CODE.COEX));
      }
      if (
        (((d = v) == null ? void 0 : d.e2eType) != null &&
          (S.e2eCiphertextType = o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(v.e2eType)),
        ((m = v) == null ? void 0 : m.retryCount) != null &&
          (S.retryCount = v.retryCount),
        ((p = v) == null ? void 0 : p.edit) ===
        o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
          ? (S.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN)
          : ((_ = v) == null ? void 0 : _.edit) ===
              o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
            (S.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
        ((f = v) == null ? void 0 : f.from) != null &&
          ((g = v) == null ? void 0 : g.author) != null)
      ) {
        var k;
        if (
          ((k = v) == null || (k = k.author) == null ? void 0 : k.isBot()) ===
          !0
        ) {
          var I;
          ((I = v) == null || (I = I.from) == null ? void 0 : I.isBot()) === !0
            ? (S.agentEngagementType = o(
                "WAWebWamEnumAgentEngagementEnumType",
              ).AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT)
            : (S.agentEngagementType = o(
                "WAWebWamEnumAgentEngagementEnumType",
              ).AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED);
        }
      }
      if (((h = v) == null ? void 0 : h.botType) != null) {
        var T;
        S.botType = (T = v) == null ? void 0 : T.botType;
      }
      (((y = v) == null ? void 0 : y.invisibleMessageCategoryType) != null &&
        (S.invisibleMessageCategory = v.invisibleMessageCategoryType),
        S.commit());
    }
    function c(e) {
      u({
        messageDropReason: o("WAWebWamEnumMessageDropReasonType")
          .MESSAGE_DROP_REASON_TYPE.INVALID_STANZA,
        stanza: e,
      });
    }
    function d(e) {
      u({
        messageDropReason: o("WAWebWamEnumMessageDropReasonType")
          .MESSAGE_DROP_REASON_TYPE.UNKNOWN_MESSAGE_TYPE,
        stanza: e,
      });
    }
    function m(e) {
      u({
        messageDropReason: o("WAWebWamEnumMessageDropReasonType")
          .MESSAGE_DROP_REASON_TYPE.INTERNAL_ERROR,
        stanza: e,
      });
    }
    function p(e) {
      u({
        messageDropReason: o("WAWebWamEnumMessageDropReasonType")
          .MESSAGE_DROP_REASON_TYPE.DB_OPERATION_FAILED,
        stanza: e,
      });
    }
    function _(e) {
      u({
        messageDropReason: o("WAWebWamEnumMessageDropReasonType")
          .MESSAGE_DROP_REASON_TYPE.INVALID_HOSTED_COMPANION_STANZA,
        stanza: e,
      });
    }
    function f(e) {
      u({
        messageDropReason: o("WAWebWamEnumMessageDropReasonType")
          .MESSAGE_DROP_REASON_TYPE.COEX_V2_RECV_UNSUPPORTED,
        stanza: e,
      });
    }
    function g(e) {
      u({
        messageDropReason: o("WAWebWamEnumMessageDropReasonType")
          .MESSAGE_DROP_REASON_TYPE.COEX_V2_INVALID_SENDER,
        stanza: e,
      });
    }
    function h(e, t) {
      if (t == null || !t.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) {
        _(e);
        return;
      }
      if (o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()) {
        g(e);
        return;
      }
      f(e);
    }
    function y(t, n) {
      var r = t.enc,
        a = t.error,
        i = t.msgInfo,
        l = t.msgMeta,
        s = new (o(
          "WAWebIncomingMessageDropWamEvent",
        ).IncomingMessageDropWamEvent)({
          messageDropReason: n,
          isPq: r.sessionType != null ? r.sessionType === "pq" : void 0,
          e2eCiphertextType: o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(r.e2eType),
          messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
            encMediaType: r.encMediaType,
            msgType: l.type,
            msgPollType: l.pollType,
          }),
          retryCount: r.retryCount,
          offline: i.offline != null,
          e2eFailureReason: a == null ? void 0 : a.e2eFailureReason,
          sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(
            o("WAWebSessionScopeWamUtils").getIncomingSkdmSessionScope({
              from: e(i),
              isGroupStatus: l.isGroupStatus,
              isSkdm: l.isSkdm,
              metaSessionScope: l.metaSessionScope,
            }),
          ),
        }),
        u = e(i),
        c = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(u);
      if ((c != null && (s.e2eDestination = c), u)) {
        var d = o("WAWebWamMsgUtils").getWamE2eSenderType(u);
        (d != null && (s.e2eSenderType = d),
          u.isHosted() &&
            (s.encryptionType = o(
              "WAWebWamEnumEncryptionTypeCode",
            ).ENCRYPTION_TYPE_CODE.COEX));
      }
      i.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
        ? (s.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN)
        : i.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          (s.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER);
      var m = o("WAWebWamMsgUtils").getWamInvisibleMessageCategoryType(
        i.category,
      );
      if ((m != null && (s.invisibleMessageCategory = m), i.offline != null)) {
        var p = parseInt(i.offline, 10);
        Number.isNaN(p) || (s.offlineCount = p);
      }
      s.commit();
    }
    function C(e) {
      y(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
          .RECEIVED_WITH_OLD_COUNTER,
      );
    }
    function b(e) {
      y(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
          .DUPLICATE_MESSAGE,
      );
    }
    function v(e) {
      y(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
          .INVALID_PROTOBUF,
      );
    }
    function S(e) {
      y(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
          .INVALID_STANZA,
      );
    }
    function R(e) {
      y(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.EXPIRED,
      );
    }
    ((l.postIncomingMessageDropInvalidStanza = c),
      (l.postIncomingMessageDropUnknownMessageType = d),
      (l.postIncomingMessageDropInternalError = m),
      (l.postIncomingMessageDropDBOperationFailed = p),
      (l.postIncomingMessageDropInvalidHostedCompanionStanza = _),
      (l.postIncomingMessageDropCoexV2RecvUnsupported = f),
      (l.postIncomingMessageDropCoexV2InvalidSender = g),
      (l.postIncomingMessageDropForCoexV2RelayOrHostedCompanion = h),
      (l.postIncomingMessageDropOldCounter = C),
      (l.postIncomingMessageDropDuplicateMessage = b),
      (l.postIncomingMessageDropInvalidProtobuf = v),
      (l.postIncomingMessageDropInvalidStanzaFromDecryptedMessageInfo = S),
      (l.postIncomingMessageDropExpired = R));
  },
  98,
);
