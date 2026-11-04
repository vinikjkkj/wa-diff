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
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebUsernameTypes",
    "WAWebVerifyProtobufMsgObjectKeys",
    "justknobx",
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
      if (n != null && (o("WAWebBotUtils").isMetaAiBot(r) || r.isFbidBot()))
        return n;
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
        _ = e.scheduledMsgMetadata,
        v =
          (t = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(c)) != null
            ? t
            : c,
        S = d(i, m, c),
        R = f(v),
        L = p(
          (_ == null ? void 0 : _.kind) === "schedule"
            ? _.originalMessageAssociationType
            : (n = c.messageContextInfo) == null ||
                (n = n.messageAssociation) == null
              ? void 0
              : n.associationType,
        ),
        E = h(v),
        k = v.eventInviteMessage != null ? g : null,
        I = C(s),
        T;
      m.type === "addon" &&
        (T = o("WAWebE2EProtoUtils").extractCommentTargetIdAndSenderLid(
          m.data,
        ));
      var D = m.data.botMetricsMetadata,
        x =
          D != null
            ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(
                D.destinationEntryPoint,
              )
            : null,
        $ = (r = D == null ? void 0 : D.destinationId) != null ? r : null,
        P = u({
          botMetricsOrigin: x,
          chatId: i,
          includeAttributes: s,
          msgRecord: m,
        }),
        N = y(m, s),
        M = b(m),
        w = ((a = m.data.mediaData) == null ? void 0 : a.isViewOnce) === !0,
        A = m.data.isGroupStatus === !0,
        F =
          A &&
          (s == null ? void 0 : s.hasPairwisePayload) === !0 &&
          s.sessionScope === o("WAWebSessionScope").SessionScope.STATUS,
        O =
          _ != null
            ? o(
                "WAWebScheduledMsgStanzaContributor",
              ).genScheduledMsgMetaContribution(_)
            : null,
        B = [
          O != null,
          S != null,
          R != null,
          E != null,
          k != null,
          T != null,
          P != null,
          $ != null,
          (s == null ? void 0 : s.appendHostedSenderIntent) === !0,
          N != null,
          w,
          I != null,
          M != null,
          L != null,
          A,
        ].some(function (e) {
          return e;
        });
      if (B) {
        var W, q;
        return o("WAWap").wap(
          "meta",
          {
            content_type:
              S != null ? o("WAWap").CUSTOM_STRING(S) : o("WAWap").DROP_ATTR,
            origin:
              P != null ? o("WAWap").CUSTOM_STRING(P) : o("WAWap").DROP_ATTR,
            destination_id:
              $ != null ? o("WAWap").CUSTOM_STRING($) : o("WAWap").DROP_ATTR,
            sender_intent:
              (s == null ? void 0 : s.appendHostedSenderIntent) === !0
                ? "hosted"
                : o("WAWap").DROP_ATTR,
            polltype: R != null ? R : o("WAWap").DROP_ATTR,
            event_type: E != null ? E : o("WAWap").DROP_ATTR,
            context_source:
              k != null ? o("WAWap").CUSTOM_STRING(k) : o("WAWap").DROP_ATTR,
            thread_msg_id:
              ((W = T) == null ? void 0 : W.threadMsgId) != null
                ? o("WAWap").CUSTOM_STRING(T.threadMsgId)
                : o("WAWap").DROP_ATTR,
            thread_msg_sender_jid:
              (q = T) != null && q.threadMsgSenderLid
                ? o("WAWebCommsWapMd").USER_JID(T.threadMsgSenderLid)
                : o("WAWap").DROP_ATTR,
            appdata:
              N != null ? o("WAWap").CUSTOM_STRING(N) : o("WAWap").DROP_ATTR,
            view_once: w ? "true" : o("WAWap").DROP_ATTR,
            conversation_thread_id:
              I != null ? o("WAWap").CUSTOM_STRING(I) : o("WAWap").DROP_ATTR,
            tag_reason:
              M != null ? o("WAWap").CUSTOM_STRING(M) : o("WAWap").DROP_ATTR,
            message_association_type:
              L != null ? o("WAWap").CUSTOM_STRING(L) : o("WAWap").DROP_ATTR,
            is_group_status: A ? "true" : o("WAWap").DROP_ATTR,
            session_scope: F ? "status" : o("WAWap").DROP_ATTR,
            type:
              O != null
                ? o("WAWap").CUSTOM_STRING(
                    o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE,
                  )
                : o("WAWap").DROP_ATTR,
            st:
              (O == null ? void 0 : O.scheduledTimestampS) != null
                ? o("WAWap").CUSTOM_STRING(String(O.scheduledTimestampS))
                : o("WAWap").DROP_ATTR,
          },
          O == null ? void 0 : O.keyNode,
        );
      }
    }
    function d(e, t, n) {
      return e.isStatus() && m(n)
        ? "status_notify"
        : !r("justknobx")._("6915") || e.isNewsletter()
          ? null
          : t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon &&
              (e.isStatus() || t.data.isGroupStatus === !0)
            ? "add_on"
            : null;
    }
    function m(e) {
      var t,
        n =
          (t = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(e)) != null
            ? t
            : e;
      return n.statusNotificationMessage != null;
    }
    function p(e) {
      var t;
      return e == null ? null : (t = _.get(e)) != null ? t : null;
    }
    var _ = new Map([
      [
        o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        "hd_image_dual_upload",
      ],
    ]);
    function f(e) {
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
    var g = "event_invitation";
    function h(e) {
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
    function y(e, t) {
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
    function C(e) {
      var t = e != null ? e : {},
        n = t.hashedAiThreadId;
      return n != null ? n : null;
    }
    function b(e) {
      var t,
        n =
          e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          e.data.subtype === "member_label";
      if (!n) return null;
      var r = (t = e.data.memberLabelData) == null ? void 0 : t.label;
      return r === "" || r == null ? "user_delete" : "user_update";
    }
    ((l.getOriginAttribute = s),
      (l.getMetaOrigin = u),
      (l.genMetaNode = c),
      (l.getStatusContentType = d),
      (l.isStatusNotificationPayload = m));
  },
  98,
);
