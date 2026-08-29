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
        y = e.messageDropReason,
        C = e.stanza,
        b = null;
      try {
        b = s.parse(C).success;
      } catch (e) {}
      var v = new (o(
        "WAWebIncomingMessageDropWamEvent",
      ).IncomingMessageDropWamEvent)({
        messageDropReason: y,
        offline: ((t = b) == null ? void 0 : t.offline) != null,
        offlineCount: (n = b) == null ? void 0 : n.offline,
        messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
          encMediaType: (r = b) == null ? void 0 : r.encMediaType,
          msgType: (a = b) == null ? void 0 : a.type,
          msgPollType: (i = b) == null ? void 0 : i.pollType,
        }),
      });
      if (((l = b) == null ? void 0 : l.from) != null) {
        var S = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(
          b.from,
        );
        S != null && (v.e2eDestination = S);
      }
      var R = (u = b) == null ? void 0 : u.author;
      if (R != null) {
        var L = o("WAWebWamMsgUtils").getWamE2eSenderType(R);
        (L != null && (v.e2eSenderType = L),
          R.isHosted() &&
            (v.encryptionType = o(
              "WAWebWamEnumEncryptionTypeCode",
            ).ENCRYPTION_TYPE_CODE.COEX));
      }
      if (
        (((c = b) == null ? void 0 : c.e2eType) != null &&
          (v.e2eCiphertextType = o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(b.e2eType)),
        ((d = b) == null ? void 0 : d.retryCount) != null &&
          (v.retryCount = b.retryCount),
        ((m = b) == null ? void 0 : m.edit) ===
        o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
          ? (v.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN)
          : ((p = b) == null ? void 0 : p.edit) ===
              o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
            (v.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
        ((_ = b) == null ? void 0 : _.from) != null &&
          ((f = b) == null ? void 0 : f.author) != null)
      ) {
        var E;
        if (
          ((E = b) == null || (E = E.author) == null ? void 0 : E.isBot()) ===
          !0
        ) {
          var k;
          ((k = b) == null || (k = k.from) == null ? void 0 : k.isBot()) === !0
            ? (v.agentEngagementType = o(
                "WAWebWamEnumAgentEngagementEnumType",
              ).AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT)
            : (v.agentEngagementType = o(
                "WAWebWamEnumAgentEngagementEnumType",
              ).AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED);
        }
      }
      if (((g = b) == null ? void 0 : g.botType) != null) {
        var I;
        v.botType = (I = b) == null ? void 0 : I.botType;
      }
      (((h = b) == null ? void 0 : h.invisibleMessageCategoryType) != null &&
        (v.invisibleMessageCategory = b.invisibleMessageCategoryType),
        v.commit());
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
