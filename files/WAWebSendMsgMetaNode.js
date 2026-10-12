__d(
  "WAWebSendMsgMetaNode",
  [
    "WAWap",
    "WAWebBotLoggingUtils",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgCommon",
    "WAWebMsgType",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgStanzaContributor",
    "WAWebSessionScope",
    "WAWebUsernameTypes",
    "WAWebVerifyProtobufMsgObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "forward";
    function s(e, t) {
      var n = t == null ? void 0 : t.origin;
      return e.isLid() &&
        n != null &&
        n === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
        ? n
        : null;
    }
    function u(t) {
      var n = t.botMetricsOrigin,
        r = t.chatId,
        a = t.includeAttributes,
        i = t.msgRecord;
      if (n != null && o("WAWebBotUtils").isMetaAiBot(r)) return n;
      var l =
        i.data.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
        i.data.isForwarded === !0;
      return l ? e : s(r, a);
    }
    function c(e) {
      var t,
        n,
        r,
        a,
        i = e.chatId,
        l = e.groupData,
        s = e.includeAttributes,
        c = e.msgProtobuf,
        m = e.msgRecord,
        y = e.scheduledMsgMetadata,
        C =
          (t = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(c)) != null
            ? t
            : c,
        b = p(C),
        v = d(
          (y == null ? void 0 : y.kind) === "schedule"
            ? y.originalMessageAssociationType
            : (n = c.messageContextInfo) == null ||
                (n = n.messageAssociation) == null
              ? void 0
              : n.associationType,
        ),
        S = _(C),
        R = g(s),
        L;
      m.type === "addon" &&
        (L = o("WAWebE2EProtoUtils").extractCommentTargetIdAndSenderLid(
          m.data,
        ));
      var E = m.data.botMetricsMetadata,
        k =
          E != null
            ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(
                E.destinationEntryPoint,
              )
            : null,
        I = (r = E == null ? void 0 : E.destinationId) != null ? r : null,
        T = u({
          botMetricsOrigin: k,
          chatId: i,
          includeAttributes: s,
          msgRecord: m,
        }),
        D = f(m, s),
        x = h(m),
        $ = ((a = m.data.mediaData) == null ? void 0 : a.isViewOnce) === !0,
        P = m.data.isGroupStatus === !0,
        N =
          P &&
          (s == null ? void 0 : s.hasPairwisePayload) === !0 &&
          s.sessionScope === o("WAWebSessionScope").SessionScope.STATUS,
        M =
          y != null
            ? o(
                "WAWebScheduledMsgStanzaContributor",
              ).genScheduledMsgMetaContribution(y)
            : null,
        w =
          M != null ||
          b != null ||
          S != null ||
          L != null ||
          T != null ||
          I != null ||
          (s == null ? void 0 : s.appendHostedSenderIntent) === !0 ||
          D != null ||
          $ ||
          R != null ||
          x != null ||
          v != null ||
          P;
      if (w) {
        var A, F;
        return o("WAWap").wap(
          "meta",
          {
            origin:
              T != null ? o("WAWap").CUSTOM_STRING(T) : o("WAWap").DROP_ATTR,
            destination_id:
              I != null ? o("WAWap").CUSTOM_STRING(I) : o("WAWap").DROP_ATTR,
            sender_intent:
              (s == null ? void 0 : s.appendHostedSenderIntent) === !0
                ? "hosted"
                : o("WAWap").DROP_ATTR,
            polltype: b != null ? b : o("WAWap").DROP_ATTR,
            event_type: S != null ? S : o("WAWap").DROP_ATTR,
            thread_msg_id:
              ((A = L) == null ? void 0 : A.threadMsgId) != null
                ? o("WAWap").CUSTOM_STRING(L.threadMsgId)
                : o("WAWap").DROP_ATTR,
            thread_msg_sender_jid:
              (F = L) != null && F.threadMsgSenderLid
                ? o("WAWebCommsWapMd").USER_JID(L.threadMsgSenderLid)
                : o("WAWap").DROP_ATTR,
            appdata:
              D != null ? o("WAWap").CUSTOM_STRING(D) : o("WAWap").DROP_ATTR,
            view_once: $ ? "true" : o("WAWap").DROP_ATTR,
            conversation_thread_id:
              R != null ? o("WAWap").CUSTOM_STRING(R) : o("WAWap").DROP_ATTR,
            tag_reason:
              x != null ? o("WAWap").CUSTOM_STRING(x) : o("WAWap").DROP_ATTR,
            message_association_type:
              v != null ? o("WAWap").CUSTOM_STRING(v) : o("WAWap").DROP_ATTR,
            is_group_status: P ? "true" : o("WAWap").DROP_ATTR,
            session_scope: N ? "status" : o("WAWap").DROP_ATTR,
            type:
              M != null
                ? o("WAWap").CUSTOM_STRING(
                    o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE,
                  )
                : o("WAWap").DROP_ATTR,
            st:
              (M == null ? void 0 : M.scheduledTimestampS) != null
                ? o("WAWap").CUSTOM_STRING(String(M.scheduledTimestampS))
                : o("WAWap").DROP_ATTR,
          },
          M == null ? void 0 : M.keyNode,
        );
      }
    }
    function d(e) {
      var t;
      return e == null ? null : (t = m.get(e)) != null ? t : null;
    }
    var m = new Map([
      [
        o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        "hd_image_dual_upload",
      ],
    ]);
    function p(e) {
      var t, n;
      return e.pollCreationMessage != null ||
        e.pollCreationMessageV2 != null ||
        e.pollCreationMessageV3 != null ||
        e.pollCreationMessageV5 != null ||
        e.pollCreationMessageV6 != null
        ? o("WAWebHandleMsgCommon").POLL_TYPES.creation
        : ((t = e.pollUpdateMessage) == null ? void 0 : t.vote) != null
          ? o("WAWebHandleMsgCommon").POLL_TYPES.vote
          : (e.pollResultSnapshotMessage != null ||
                e.pollResultSnapshotMessageV3 != null) &&
              r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()
            ? o("WAWebHandleMsgCommon").POLL_TYPES.result_snapshot
            : ((n = e.secretEncryptedMessage) == null
                  ? void 0
                  : n.secretEncType) ===
                o("WAWebProtobufsE2E.pb")
                  .Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT
              ? o("WAWebHandleMsgCommon").POLL_TYPES.edit
              : null;
    }
    function _(e) {
      var t;
      return e.eventMessage != null
        ? o("WAWebHandleMsgCommon").EVENT_TYPES.creation
        : e.encEventResponseMessage != null
          ? o("WAWebHandleMsgCommon").EVENT_TYPES.response
          : ((t = e.secretEncryptedMessage) == null
                ? void 0
                : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT
            ? o("WAWebHandleMsgCommon").EVENT_TYPES.edit
            : null;
    }
    function f(e, t) {
      var n =
        e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        e.data.subtype === "member_label";
      if (n) return "member_tag";
      var r =
          e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          e.data.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSyncResponse,
        a = (t == null ? void 0 : t.isCategoryPeerMessage) === !0;
      return r || a
        ? "default"
        : e.data.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE
          ? "group_history"
          : null;
    }
    function g(e) {
      var t = e != null ? e : {},
        n = t.hashedAiThreadId;
      return n != null ? n : null;
    }
    function h(e) {
      var t,
        n =
          e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          e.data.subtype === "member_label";
      if (!n) return null;
      var r = (t = e.data.memberLabelData) == null ? void 0 : t.label;
      return r === "" || r == null ? "user_delete" : "user_update";
    }
    ((l.getOriginAttribute = s), (l.getMetaOrigin = u), (l.genMetaNode = c));
  },
  98,
);
