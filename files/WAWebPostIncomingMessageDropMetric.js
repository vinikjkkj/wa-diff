__d(
  "WAWebPostIncomingMessageDropMetric",
  [
    "WADeprecatedWapParser",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2WamClassification",
    "WAWebGetMetricE2eDestination",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes",
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
      return e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT
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
          var a = e.maybeChild("meta");
          a != null &&
            a.hasAttr("from") &&
            (t.metaFrom = o("WAWebJidToWid").jidWithTypeToWid(
              a.attrJidWithType("from"),
            ));
        } catch (e) {
          t.metaFrom = null;
        }
        try {
          t.offline = e.attrInt("offline");
        } catch (e) {}
        try {
          t.edit = e.attrInt("edit");
        } catch (e) {}
        try {
          var i = e.attrString("category"),
            l = o("WAWebWamMsgUtils").getWamInvisibleMessageCategoryType(i);
          l != null && (t.invisibleMessageCategoryType = l);
        } catch (e) {}
        var s = e.maybeChild("enc");
        if (s != null) {
          try {
            t.e2eType = s.attrEnumValues(
              "type",
              o("WAWebBackendJobs.flow").CiphertextType.members(),
            );
          } catch (e) {}
          try {
            t.encMediaType = o("WAWebBackendJobs.flow").EncMediaType.cast(
              s.maybeAttrString("mediatype"),
            );
          } catch (e) {}
          try {
            t.sessionType = s.maybeAttrString("session_type");
          } catch (e) {
            t.sessionType = null;
          }
          try {
            t.retryCount = s.attrInt("count");
          } catch (e) {}
        }
        try {
          var u, c;
          t.botType = o("WAWebWamEnumBotType").BOT_TYPE.UNKNOWN;
          var d =
            (u = e.maybeChild("bot")) == null
              ? void 0
              : u.maybeAttrString("biz_bot");
          (d === "1"
            ? (t.relayBotType = o("WAWebWamEnumBotType").BOT_TYPE.BOT_1P_BIZ)
            : d === "3" &&
              (t.relayBotType = o("WAWebWamEnumBotType").BOT_TYPE.BOT_3P_BIZ),
            (c = t.author) != null && c.isBot()
              ? (t.botType = o("WAWebWamEnumBotType").BOT_TYPE.METABOT)
              : t.relayBotType != null && (t.botType = t.relayBotType));
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
        C,
        b = e.messageDropReason,
        v = e.stanza,
        S = null;
      try {
        S = s.parse(v).success;
      } catch (e) {}
      var R = new (o(
        "WAWebIncomingMessageDropWamEvent",
      ).IncomingMessageDropWamEvent)({
        messageDropReason: b,
        isPq:
          ((t = S) == null ? void 0 : t.sessionType) != null
            ? S.sessionType === "pq"
            : void 0,
        offline: ((n = S) == null ? void 0 : n.offline) != null,
        offlineCount: (r = S) == null ? void 0 : r.offline,
        messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
          encMediaType: (a = S) == null ? void 0 : a.encMediaType,
          msgType: (i = S) == null ? void 0 : i.type,
          msgPollType: (l = S) == null ? void 0 : l.pollType,
        }),
      });
      if (((u = S) == null ? void 0 : u.from) != null) {
        var L = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(
          S.from,
        );
        L != null && (R.e2eDestination = L);
      }
      var E = (c = S) == null ? void 0 : c.author,
        k = o("WAWebCoexV2WamClassification").getCoexV2DropWamClassification(
          E,
          (d = S) == null ? void 0 : d.metaFrom,
        ),
        I =
          b ===
            o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
              .COEX_V2_RECV_UNSUPPORTED ||
          b ===
            o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
              .COEX_V2_INVALID_SENDER;
      if (k != null)
        ((R.e2eSenderType = k.e2eSenderType),
          (R.encryptionType = k.encryptionType));
      else if (E != null) {
        var T = o("WAWebWamMsgUtils").getWamE2eSenderType(E);
        (T != null && (R.e2eSenderType = T),
          E.isHosted() &&
            (R.encryptionType = o(
              "WAWebWamEnumEncryptionTypeCode",
            ).ENCRYPTION_TYPE_CODE.COEX));
      }
      if (
        (((m = S) == null ? void 0 : m.e2eType) != null &&
          (R.e2eCiphertextType = o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(S.e2eType)),
        ((p = S) == null ? void 0 : p.retryCount) != null &&
          (R.retryCount = S.retryCount),
        ((_ = S) == null ? void 0 : _.edit) ===
        o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
          ? (R.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN)
          : ((f = S) == null ? void 0 : f.edit) ===
              o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
            (R.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
        !I &&
          k == null &&
          ((g = S) == null ? void 0 : g.from) != null &&
          ((h = S) == null ? void 0 : h.author) != null)
      ) {
        var D;
        if (
          ((D = S) == null || (D = D.author) == null ? void 0 : D.isBot()) ===
          !0
        ) {
          var x;
          ((x = S) == null || (x = x.from) == null ? void 0 : x.isBot()) === !0
            ? (R.agentEngagementType = o(
                "WAWebWamEnumAgentEngagementEnumType",
              ).AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT)
            : (R.agentEngagementType = o(
                "WAWebWamEnumAgentEngagementEnumType",
              ).AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED);
        }
      }
      if (I) R.botType = o("WAWebWamEnumBotType").BOT_TYPE.UNKNOWN;
      else if (k != null) {
        var $, P;
        R.botType =
          ($ = (P = S) == null ? void 0 : P.relayBotType) != null
            ? $
            : o("WAWebWamEnumBotType").BOT_TYPE.UNKNOWN;
      } else if (((y = S) == null ? void 0 : y.botType) != null) {
        var N;
        R.botType = (N = S) == null ? void 0 : N.botType;
      }
      (((C = S) == null ? void 0 : C.invisibleMessageCategoryType) != null &&
        (R.invisibleMessageCategory = S.invisibleMessageCategoryType),
        R.commit());
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
    function _(e, t) {
      var n;
      u({
        messageDropReason:
          (n = o("WAWebCoexV2WamClassification").getCoexV2ReceiveDropReason(
            t,
          )) != null
            ? n
            : o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
                .INVALID_HOSTED_COMPANION_STANZA,
        stanza: e,
      });
    }
    function f(t, n) {
      var r = t.enc,
        a = t.error,
        i = t.msgBotInfo,
        l = t.msgInfo,
        s = t.msgMeta,
        u = new (o(
          "WAWebIncomingMessageDropWamEvent",
        ).IncomingMessageDropWamEvent)({
          messageDropReason: n,
          isPq: r.sessionType != null ? r.sessionType === "pq" : void 0,
          e2eCiphertextType: o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(r.e2eType),
          messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
            encMediaType: r.encMediaType,
            msgType: s.type,
            msgPollType: s.pollType,
          }),
          retryCount: r.retryCount,
          offline: l.offline != null,
          e2eFailureReason: a == null ? void 0 : a.e2eFailureReason,
          sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(
            o("WAWebSessionScopeWamUtils").getIncomingSkdmSessionScope({
              from: e(l),
              isGroupStatus: s.isGroupStatus,
              isSkdm: s.isSkdm,
              metaSessionScope: s.metaSessionScope,
            }),
          ),
        }),
        c = e(l),
        d = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(c);
      d != null && (u.e2eDestination = d);
      var m = l.metaFrom,
        p = o("WAWebCoexV2WamClassification").getCoexV2DropWamClassification(
          l.author,
          m,
        );
      if (p != null)
        ((u.e2eSenderType = p.e2eSenderType),
          (u.encryptionType = p.encryptionType),
          (u.botType = o("WAWebWamMsgUtils").getWamBotType({
            chatId: l.chat,
            bizBotType: i == null ? void 0 : i.bizBotType,
          })));
      else if (c) {
        var _ = o("WAWebWamMsgUtils").getWamE2eSenderType(c);
        (_ != null && (u.e2eSenderType = _),
          c.isHosted() &&
            (u.encryptionType = o(
              "WAWebWamEnumEncryptionTypeCode",
            ).ENCRYPTION_TYPE_CODE.COEX));
      }
      l.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
        ? (u.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN)
        : l.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
          (u.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER);
      var f = o("WAWebWamMsgUtils").getWamInvisibleMessageCategoryType(
        l.category,
      );
      if ((f != null && (u.invisibleMessageCategory = f), l.offline != null)) {
        var g = parseInt(l.offline, 10);
        Number.isNaN(g) || (u.offlineCount = g);
      }
      u.commit();
    }
    function g(e) {
      f(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
          .RECEIVED_WITH_OLD_COUNTER,
      );
    }
    function h(e) {
      f(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
          .DUPLICATE_MESSAGE,
      );
    }
    function y(e) {
      f(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
          .INVALID_PROTOBUF,
      );
    }
    function C(e) {
      f(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE
          .INVALID_STANZA,
      );
    }
    function b(e) {
      f(
        e,
        o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.EXPIRED,
      );
    }
    ((l.postIncomingMessageDropInvalidStanza = c),
      (l.postIncomingMessageDropUnknownMessageType = d),
      (l.postIncomingMessageDropInternalError = m),
      (l.postIncomingMessageDropDBOperationFailed = p),
      (l.postIncomingMessageDropForCoexV2RelayOrHostedCompanion = _),
      (l.postIncomingMessageDropOldCounter = g),
      (l.postIncomingMessageDropDuplicateMessage = h),
      (l.postIncomingMessageDropInvalidProtobuf = y),
      (l.postIncomingMessageDropInvalidStanzaFromDecryptedMessageInfo = C),
      (l.postIncomingMessageDropExpired = b));
  },
  98,
);
