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
        _ = e.scheduledMsgMetadata,
        b =
          (t = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(c)) != null
            ? t
            : c,
        v = d(i, m, c),
        S = f(b),
        R = p(
          (_ == null ? void 0 : _.kind) === "schedule"
            ? _.originalMessageAssociationType
            : (n = c.messageContextInfo) == null ||
                (n = n.messageAssociation) == null
              ? void 0
              : n.associationType,
        ),
        L = g(b),
        E = y(s),
        k;
      m.type === "addon" &&
        (k = o("WAWebE2EProtoUtils").extractCommentTargetIdAndSenderLid(
          m.data,
        ));
      var I = m.data.botMetricsMetadata,
        T =
          I != null
            ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(
                I.destinationEntryPoint,
              )
            : null,
        D = (r = I == null ? void 0 : I.destinationId) != null ? r : null,
        x = u({
          botMetricsOrigin: T,
          chatId: i,
          includeAttributes: s,
          msgRecord: m,
        }),
        $ = h(m, s),
        P = C(m),
        N = ((a = m.data.mediaData) == null ? void 0 : a.isViewOnce) === !0,
        M = m.data.isGroupStatus === !0,
        w =
          M &&
          (s == null ? void 0 : s.hasPairwisePayload) === !0 &&
          s.sessionScope === o("WAWebSessionScope").SessionScope.STATUS,
        A =
          _ != null
            ? o(
                "WAWebScheduledMsgStanzaContributor",
              ).genScheduledMsgMetaContribution(_)
            : null,
        F = [
          A != null,
          v != null,
          S != null,
          L != null,
          k != null,
          x != null,
          D != null,
          (s == null ? void 0 : s.appendHostedSenderIntent) === !0,
          $ != null,
          N,
          E != null,
          P != null,
          R != null,
          M,
        ].some(function (e) {
          return e;
        });
      if (F) {
        var O, B;
        return o("WAWap").wap(
          "meta",
          {
            content_type:
              v != null ? o("WAWap").CUSTOM_STRING(v) : o("WAWap").DROP_ATTR,
            origin:
              x != null ? o("WAWap").CUSTOM_STRING(x) : o("WAWap").DROP_ATTR,
            destination_id:
              D != null ? o("WAWap").CUSTOM_STRING(D) : o("WAWap").DROP_ATTR,
            sender_intent:
              (s == null ? void 0 : s.appendHostedSenderIntent) === !0
                ? "hosted"
                : o("WAWap").DROP_ATTR,
            polltype: S != null ? S : o("WAWap").DROP_ATTR,
            event_type: L != null ? L : o("WAWap").DROP_ATTR,
            thread_msg_id:
              ((O = k) == null ? void 0 : O.threadMsgId) != null
                ? o("WAWap").CUSTOM_STRING(k.threadMsgId)
                : o("WAWap").DROP_ATTR,
            thread_msg_sender_jid:
              (B = k) != null && B.threadMsgSenderLid
                ? o("WAWebCommsWapMd").USER_JID(k.threadMsgSenderLid)
                : o("WAWap").DROP_ATTR,
            appdata:
              $ != null ? o("WAWap").CUSTOM_STRING($) : o("WAWap").DROP_ATTR,
            view_once: N ? "true" : o("WAWap").DROP_ATTR,
            conversation_thread_id:
              E != null ? o("WAWap").CUSTOM_STRING(E) : o("WAWap").DROP_ATTR,
            tag_reason:
              P != null ? o("WAWap").CUSTOM_STRING(P) : o("WAWap").DROP_ATTR,
            message_association_type:
              R != null ? o("WAWap").CUSTOM_STRING(R) : o("WAWap").DROP_ATTR,
            is_group_status: M ? "true" : o("WAWap").DROP_ATTR,
            session_scope: w ? "status" : o("WAWap").DROP_ATTR,
            type:
              A != null
                ? o("WAWap").CUSTOM_STRING(
                    o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE,
                  )
                : o("WAWap").DROP_ATTR,
            st:
              (A == null ? void 0 : A.scheduledTimestampS) != null
                ? o("WAWap").CUSTOM_STRING(String(A.scheduledTimestampS))
                : o("WAWap").DROP_ATTR,
          },
          A == null ? void 0 : A.keyNode,
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
    function g(e) {
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
    function h(e, t) {
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
    function y(e) {
      var t = e != null ? e : {},
        n = t.hashedAiThreadId;
      return n != null ? n : null;
    }
    function C(e) {
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
