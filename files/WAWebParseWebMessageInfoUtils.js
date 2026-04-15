__d(
  "WAWebParseWebMessageInfoUtils",
  [
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDecodeJid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebParseMsgPaymentInfo",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufsWeb.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return e.originalSelfAuthorUserJidString == null
        ? o("WAWebUserPrefsMeUser").getMaybeMePnUser()
        : o("WAWebDecodeJid").decodeJid(e.originalSelfAuthorUserJidString);
    }
    function c(t, n) {
      var a = o("WAWebDecodeJid").decodeJidAndValidate(
          n.remoteJid,
          "remoteJid",
        ),
        i = o("WAWebDecodeJid").decodeJidAndValidate(
          n.participant,
          "participant",
        ),
        l = u(t),
        s = o("WAWebDecodeJid").decodeJidAndValidate(
          t.participant,
          "participant",
        );
      (i == null &&
        a != null &&
        r("WAWebWid").isWid(a) &&
        a === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID) &&
        (i = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID)),
        (r("WAWebWid").isGroup(a) || r("WAWebWid").isStatus(a)) &&
          (i == null &&
            (n.fromMe === !0
              ? (i = l)
              : t.participant != null &&
                (i = o("WAWebDecodeJid").decodeJid(t.participant))),
          (s = s != null ? s : i)));
      try {
        var c = new (r("WAWebMsgKey"))({
          fromMe: r("WANullthrows")(n.fromMe),
          remote: a,
          id: r("WANullthrows")(n.id),
          participant: i,
        });
        return { msgKey: c, author: s };
      } catch (t) {
        var d = r("getErrorSafe")(t);
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: cannot create MsgKey: ",
                ", ",
                "",
              ])),
            d.message,
            d.stack,
          )
          .sendLogs("history-sync-message-drop-cannot-create-msgkey", {
            sampling: 0.01,
          });
        return;
      }
    }
    function d(e, t) {
      if (e.messageStubType != null) {
        var n = o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType,
          r;
        e: {
          if (e.messageStubType === n.REVOKE) {
            ((t.type = "revoked"),
              (t.subtype = "sender"),
              (t.kind = o("WAWebMsgType").MsgKind.RevokedMessage));
            var a = e.messageStubParameters,
              i = a != null && a.length > 0 ? a[0] : null;
            if (i != null) {
              var l;
              t.protocolMessageKey =
                (l = c(e, babelHelpers.extends({}, e.key, { id: i }))) == null
                  ? void 0
                  : l.msgKey;
            }
            r = t;
            break e;
          }
          if (e.messageStubType === n.CIPHERTEXT) {
            ((t.type = "ciphertext"),
              (t.kind = o("WAWebMsgType").MsgKind.Ciphertext),
              (r = t));
            break e;
          }
          if (e.messageStubType === n.OVERSIZED) {
            ((t.type = "oversized"),
              (t.kind = o("WAWebMsgType").MsgKind.Oversized),
              (r = t));
            break e;
          }
          if (e.messageStubType === n.FUTUREPROOF) {
            ((t.kind = o("WAWebMsgType").MsgKind.Unknown),
              (t.subtype = "phone"),
              (r = t));
            break e;
          }
          if (e.messageStubType === n.CAPI_GROUP_NE2EE_SYSTEM_MESSAGE) {
            ((t.type = "notification_template"),
              (t.subtype = "is_capi_hosted_group"),
              (r = t));
            break e;
          }
          if (e.messageStubType === n.QUARANTINED_MESSAGE) {
            var s, u;
            ((t.type = o("WAWebMsgType").MSG_TYPE.QUARANTINED),
              (t.kind = o("WAWebMsgType").MsgKind.QuarantinedMessage),
              (t.quarantineOriginalProtobuf =
                (s = e.quarantinedMessage) == null ? void 0 : s.originalData),
              (t.quarantineExtractedText =
                (u = e.quarantinedMessage) == null ? void 0 : u.extractedText),
              (r = t));
            break e;
          }
          {
            r = m(e, t);
            break e;
          }
        }
        return r;
      }
    }
    function m(e, t) {
      var n, a, i;
      if (e.messageStubType != null) {
        var l = o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType;
        if (
          ((t.type = "notification_template"),
          (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
          (t.templateParams = Array.isArray(e.messageStubParameters)
            ? e.messageStubParameters.map(function (t) {
                return e.messageStubType === l.GROUP_CREATE ||
                  e.messageStubType === l.GROUP_CHANGE_SUBJECT
                  ? t
                  : o("WAWebDecodeJid").decodeJid(t);
              })
            : void 0),
          e.messageStubType == null)
        )
          return ((t.templateParams = void 0), t);
        switch (e.messageStubType) {
          case l.NON_VERIFIED_TRANSITION:
            t.subtype = "non_verified_transition";
            break;
          case l.UNVERIFIED_TRANSITION:
            t.subtype = "unverified_transition";
            break;
          case l.VERIFIED_TRANSITION:
            t.subtype = "verified_transition";
            break;
          case l.VERIFIED_LOW_UNKNOWN:
            t.subtype = "verified_low_unknown";
            break;
          case l.VERIFIED_HIGH:
            t.subtype = "verified_high";
            break;
          case l.VERIFIED_INITIAL_UNKNOWN:
            t.subtype = "verified_initial_unknown";
            break;
          case l.VERIFIED_INITIAL_LOW:
            t.subtype = "verified_initial_low";
            break;
          case l.VERIFIED_INITIAL_HIGH:
            t.subtype = "verified_initial_high";
            break;
          case l.VERIFIED_TRANSITION_ANY_TO_NONE:
            t.subtype = "verified_transition_any_to_none";
            break;
          case l.VERIFIED_TRANSITION_ANY_TO_HIGH:
            t.subtype = "verified_transition_any_to_high";
            break;
          case l.VERIFIED_TRANSITION_HIGH_TO_LOW:
            t.subtype = "verified_transition_high_to_low";
            break;
          case l.VERIFIED_TRANSITION_HIGH_TO_UNKNOWN:
            t.subtype = "verified_transition_high_to_unknown";
            break;
          case l.VERIFIED_TRANSITION_UNKNOWN_TO_LOW:
            t.subtype = "verified_transition_unknown_to_low";
            break;
          case l.VERIFIED_TRANSITION_LOW_TO_UNKNOWN:
            t.subtype = "verified_transition_low_to_unknown";
            break;
          case l.VERIFIED_TRANSITION_NONE_TO_LOW:
            t.subtype = "verified_transition_none_to_low";
            break;
          case l.VERIFIED_TRANSITION_NONE_TO_UNKNOWN:
            t.subtype = "verified_transition_none_to_unknown";
            break;
          case l.GROUP_CREATE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "create"),
              (t.body = t.templateParams[0]),
              (t.templateParams = void 0));
            break;
          case l.REPORT_TO_ADMIN_ENABLED_STATUS:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "allow_admin_reports"));
            break;
          case l.GROUP_DELETE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "delete"),
              (t.templateParams = void 0));
            break;
          case l.GROUP_CHANGE_SUBJECT:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "subject"),
              (t.body = t.templateParams[0]),
              (t.templateParams = void 0));
            break;
          case l.GROUP_CHANGE_ICON:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "picture"),
              (t.body = t.templateParams[0]),
              (t.templateParams = void 0));
            break;
          case l.GROUP_CHANGE_INVITE_LINK:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "revoke_invite"));
            break;
          case l.GROUP_CHANGE_DESCRIPTION:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "description"),
              (t.body = t.templateParams[0]));
            break;
          case l.GROUP_CHANGE_RESTRICT:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "restrict"),
              (t.body = t.templateParams[0]));
            break;
          case l.GROUP_CHANGE_ANNOUNCE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "announce"),
              (t.body = t.templateParams[0]));
            break;
          case l.GROUP_CHANGE_NO_FREQUENTLY_FORWARDED:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "no_frequently_forwarded"),
              (t.body = t.templateParams[0]));
            break;
          case l.GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "announce_msg_bounce"),
              (t.templateParams = void 0));
            break;
          case l.GROUP_PARTICIPANT_ADD:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "add"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0),
              Array.isArray(t.recipients) &&
                t.recipients.length === 1 &&
                t.author === t.recipients[0] &&
                (t.author = void 0),
              r("WAWebWid").isPSA(t.author) && (t.author = void 0));
            break;
          case l.GROUP_PARTICIPANT_REMOVE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "remove"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GROUP_PARTICIPANT_PROMOTE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "promote"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GROUP_PARTICIPANT_DEMOTE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "demote"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GROUP_PARTICIPANT_INVITE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "invite"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GROUP_PARTICIPANT_LEAVE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "leave"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GROUP_PARTICIPANT_CHANGE_NUMBER:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "modify"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GROUP_V4_ADD_INVITE_SENT:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "v4_add_invite_sent"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GROUP_PARTICIPANT_ADD_REQUEST_JOIN:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "v4_add_invite_join"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GROUP_INVITE_LINK_GROWTH_LOCKED:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype =
                t.templateParams[0] === "true"
                  ? "growth_locked"
                  : "growth_unlocked"),
              (t.body = "invite"),
              (t.templateParams = void 0));
            break;
          case l.GROUP_PARTICIPANT_LINKED_GROUP_JOIN:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "linked_group_join"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.BROADCAST_CREATE:
            ((t.type = "broadcast_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.BroadcastNotification),
              (t.subtype = "create"),
              (t.body = (n = t.templateParams[0]) != null ? n : "0"),
              (t.templateParams = void 0));
            break;
          case l.BROADCAST_ADD:
            ((t.type = "broadcast_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.BroadcastNotification),
              (t.subtype = "add"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.BROADCAST_REMOVE:
            ((t.type = "broadcast_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.BroadcastNotification),
              (t.subtype = "remove"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.GENERIC_NOTIFICATION:
            ((t.type = "notification"),
              (t.kind = o("WAWebMsgType").MsgKind.Notification),
              (t.body = t.templateParams[0]),
              (t.templateParams = void 0));
            break;
          case l.E2E_IDENTITY_CHANGED:
            ((t.type = "e2e_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.E2eNotification),
              (t.subtype = "identity"),
              (t.body =
                t.templateParams[0] instanceof r("WAWebWid")
                  ? t.templateParams[0].toString()
                  : t.templateParams[0]),
              (t.templateParams = void 0));
            break;
          case l.E2E_IDENTITY_UNAVAILABLE:
            ((t.type = "e2e_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.E2eNotification),
              (t.subtype = "e2e_identity_unavailable"));
            break;
          case l.CHAT_PSA:
            ((t.type = "e2e_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.E2eNotification),
              (t.subtype = "chat_psa"));
            break;
          case l.E2E_DEVICE_CHANGED:
            ((t.type = "e2e_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.E2eNotification),
              (t.subtype = "device"),
              (t.body =
                t.templateParams[0] instanceof r("WAWebWid")
                  ? t.templateParams[0].toString()
                  : t.templateParams[0]),
              (t.devicesAdded = parseInt(t.templateParams[1], 10)),
              (t.devicesRemoved = parseInt(t.templateParams[2], 10)),
              (t.templateParams = void 0));
            break;
          case l.E2E_ENCRYPTED:
            ((t.type = "e2e_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.E2eNotification),
              (t.subtype = "encrypt"));
            break;
          case l.E2E_ENCRYPTED_NOW:
            ((t.type = "e2e_notification"),
              (t.kind = o("WAWebMsgType").MsgKind.E2eNotification),
              (t.subtype = "encrypt_now"));
            break;
          case l.CALL_MISSED_VOICE:
            ((t.type = "call_log"),
              (t.kind = o("WAWebMsgType").MsgKind.CallLog),
              (t.subtype = "miss"));
            break;
          case l.CALL_MISSED_VIDEO:
            ((t.type = "call_log"),
              (t.kind = o("WAWebMsgType").MsgKind.CallLog),
              (t.subtype = "miss_video"));
            break;
          case l.CALL_MISSED_GROUP_VOICE:
            ((t.type = "call_log"),
              (t.kind = o("WAWebMsgType").MsgKind.CallLog),
              (t.subtype = "miss_group"));
            break;
          case l.CALL_MISSED_GROUP_VIDEO:
            ((t.type = "call_log"),
              (t.kind = o("WAWebMsgType").MsgKind.CallLog),
              (t.subtype = "miss_group_video"));
            break;
          case l.SILENCED_UNKNOWN_CALLER_AUDIO:
          case l.SILENCED_UNKNOWN_CALLER_VIDEO:
            ((t.type = "call_log"),
              (t.kind = o("WAWebMsgType").MsgKind.CallLog),
              (t.subtype = "silence"));
            break;
          case l.INDIVIDUAL_CHANGE_NUMBER:
            t.subtype = "change_number";
            break;
          case l.SENDER_INVITE:
            t.subtype = "sender_invite";
            break;
          case l.RECEIVER_INVITE:
            t.subtype = "receiver_invite";
            break;
          case l.MASKED_THREAD_CREATED:
            t.subtype = "masked_thread_created";
            break;
          case l.CAG_MASKED_THREAD_CREATED:
            t.subtype = "cag_masked_thread_created";
            break;
          case l.CHANGE_EPHEMERAL_SETTING:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "ephemeral"),
              (t.author = t.templateParams[1]));
            break;
          case l.PAYMENT_CIPHERTEXT:
            if (
              ((t.type = "payment"),
              (t.kind = o("WAWebMsgType").MsgKind.Payment),
              (t.subtype = "ciphertext"),
              e.paymentInfo != null)
            ) {
              var u = o("WAWebParseMsgPaymentInfo").parseMsgPaymentInfo(
                e.paymentInfo,
              );
              ((t.paymentStatus = u.paymentStatus),
                (t.paymentTxnStatus = u.paymentTxnStatus),
                (t.paymentCurrency = u.paymentCurrency),
                (t.paymentAmount1000 = u.paymentAmount1000),
                (t.paymentMessageReceiverJid = u.paymentMessageReceiverJid),
                (t.paymentExpiryTimestamp = u.paymentExpiryTimestamp),
                (t.paymentTransactionTimestamp =
                  u.paymentTransactionTimestamp));
            }
            break;
          case l.PAYMENT_FUTUREPROOF:
            if (
              ((t.type = "payment"),
              (t.kind = o("WAWebMsgType").MsgKind.Payment),
              (t.subtype = "futureproof"),
              e.paymentInfo != null)
            ) {
              var d = o("WAWebParseMsgPaymentInfo").parseMsgPaymentInfo(
                e.paymentInfo,
              );
              ((t.paymentStatus = d.paymentStatus),
                (t.paymentTxnStatus = d.paymentTxnStatus),
                (t.paymentCurrency = d.paymentCurrency),
                (t.paymentAmount1000 = d.paymentAmount1000),
                (t.paymentMessageReceiverJid = d.paymentMessageReceiverJid),
                (t.paymentExpiryTimestamp = d.paymentExpiryTimestamp),
                (t.paymentTransactionTimestamp =
                  d.paymentTransactionTimestamp));
            }
            break;
          case l.PAYMENT_ACTION_REQUEST_CANCELLED:
            t.subtype = "payment_transaction_request_cancelled";
            break;
          case l.PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED:
            t.subtype = "payment_transaction_status_update_failed";
            break;
          case l.PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED:
            t.subtype = "payment_transaction_status_update_refunded";
            break;
          case l.PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED:
            t.subtype = "payment_transaction_status_update_refund_failed";
            break;
          case l.PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP:
            t.subtype = "payment_transaction_status_receiver_pending_setup";
            break;
          case l.PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP:
            t.subtype =
              "payment_transaction_status_receiver_success_after_hiccup";
            break;
          case l.PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER:
            t.subtype = "payment_action_account_setup_reminder";
            break;
          case l.PAYMENT_ACTION_SEND_PAYMENT_REMINDER:
            t.subtype = "payment_action_send_payment_reminder";
            break;
          case l.PAYMENT_ACTION_SEND_PAYMENT_INVITATION:
            t.subtype = "payment_action_send_payment_invitation";
            break;
          case l.PAYMENT_ACTION_REQUEST_DECLINED:
            t.subtype = "payment_action_request_declined";
            break;
          case l.PAYMENT_ACTION_REQUEST_EXPIRED:
            t.subtype = "payment_action_request_expired";
            break;
          case l.BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM:
            t.subtype = "biz_verified_transition_top_to_bottom";
            break;
          case l.BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP:
            t.subtype = "biz_verified_transition_bottom_to_top";
            break;
          case l.BIZ_INTRO_TOP:
            t.subtype = "biz_intro_top";
            break;
          case l.BIZ_INTRO_BOTTOM:
            t.subtype = "biz_intro_bottom";
            break;
          case l.BIZ_NAME_CHANGE:
            t.subtype = "biz_name_change";
            break;
          case l.BIZ_MOVE_TO_CONSUMER_APP:
            t.subtype = "biz_move_to_consumer_app";
            break;
          case l.BIZ_TWO_TIER_MIGRATION_TOP:
            t.subtype = "biz_two_tier_migration_top";
            break;
          case l.BIZ_TWO_TIER_MIGRATION_BOTTOM:
            t.subtype = "biz_two_tier_migration_bottom";
            break;
          case l.BLUE_MSG_BSP_FB_TO_BSP_PREMISE:
            t.subtype = "blue_msg_bsp_fb_to_bsp_premise";
            break;
          case l.BLUE_MSG_BSP_FB_TO_SELF_FB:
            t.subtype = "blue_msg_bsp_fb_to_self_fb";
            break;
          case l.BLUE_MSG_BSP_FB_TO_SELF_PREMISE:
            t.subtype = "blue_msg_bsp_fb_to_self_premise";
            break;
          case l.BLUE_MSG_BSP_FB_UNVERIFIED:
            t.subtype = "blue_msg_bsp_fb_unverified";
            break;
          case l.BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED:
            t.subtype = "blue_msg_bsp_fb_unverified_to_bsp_premise_verified";
            break;
          case l.BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED:
            t.subtype = "blue_msg_bsp_fb_unverified_to_self_fb_verified";
            break;
          case l.BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED:
            t.subtype = "blue_msg_bsp_fb_unverified_to_self_premise_verified";
            break;
          case l.BLUE_MSG_BSP_FB_VERIFIED:
            t.subtype = "blue_msg_bsp_fb_verified";
            break;
          case l.BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_bsp_fb_verified_to_bsp_premise_unverified";
            break;
          case l.BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED:
            t.subtype = "blue_msg_bsp_fb_verified_to_self_fb_unverified";
            break;
          case l.BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_bsp_fb_verified_to_self_premise_unverified";
            break;
          case l.BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE:
            t.subtype = "blue_msg_bsp_premise_to_self_premise";
            break;
          case l.BLUE_MSG_BSP_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_bsp_premise_unverified";
            break;
          case l.BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED:
            t.subtype =
              "blue_msg_bsp_premise_unverified_to_self_premise_verified";
            break;
          case l.BLUE_MSG_BSP_PREMISE_VERIFIED:
            t.subtype = "blue_msg_bsp_premise_verified";
            break;
          case l.BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED:
            t.subtype =
              "blue_msg_bsp_premise_verified_to_self_premise_unverified";
            break;
          case l.BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED:
            t.subtype = "blue_msg_consumer_to_bsp_fb_unverified";
            break;
          case l.BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_consumer_to_bsp_premise_unverified";
            break;
          case l.BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED:
            t.subtype = "blue_msg_consumer_to_self_fb_unverified";
            break;
          case l.BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_consumer_to_self_premise_unverified";
            break;
          case l.BLUE_MSG_SELF_FB_TO_BSP_PREMISE:
            t.subtype = "blue_msg_self_fb_to_bsp_premise";
            break;
          case l.BLUE_MSG_SELF_FB_TO_SELF_PREMISE:
            t.subtype = "blue_msg_self_fb_to_self_premise";
            break;
          case l.BLUE_MSG_SELF_FB_UNVERIFIED:
            t.subtype = "blue_msg_self_fb_unverified";
            break;
          case l.BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED:
            t.subtype = "blue_msg_self_fb_unverified_to_bsp_premise_verified";
            break;
          case l.BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED:
            t.subtype = "blue_msg_self_fb_unverified_to_self_premise_verified";
            break;
          case l.BLUE_MSG_SELF_FB_VERIFIED:
            t.subtype = "blue_msg_self_fb_verified";
            break;
          case l.BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_self_fb_verified_to_bsp_premise_unverified";
            break;
          case l.BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_self_fb_verified_to_self_premise_unverified";
            break;
          case l.BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE:
            t.subtype = "blue_msg_self_premise_to_bsp_premise";
            break;
          case l.BLUE_MSG_SELF_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_self_premise_unverified";
            break;
          case l.BLUE_MSG_SELF_PREMISE_VERIFIED:
            t.subtype = "blue_msg_self_premise_verified";
            break;
          case l.BLUE_MSG_TO_BSP_FB:
            t.subtype = "blue_msg_to_bsp_fb";
            break;
          case l.BLUE_MSG_TO_CONSUMER:
            t.subtype = "blue_msg_to_consumer";
            break;
          case l.BLUE_MSG_TO_SELF_FB:
            t.subtype = "blue_msg_to_self_fb";
            break;
          case l.BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED:
            t.subtype = "blue_msg_unverified_to_bsp_fb_verified";
            break;
          case l.BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED:
            t.subtype = "blue_msg_unverified_to_bsp_premise_verified";
            break;
          case l.BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED:
            t.subtype = "blue_msg_unverified_to_self_fb_verified";
            break;
          case l.BLUE_MSG_UNVERIFIED_TO_VERIFIED:
            t.subtype = "blue_msg_unverified_to_verified";
            break;
          case l.BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED:
            t.subtype = "blue_msg_verified_to_bsp_fb_unverified";
            break;
          case l.BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED:
            t.subtype = "blue_msg_verified_to_bsp_premise_unverified";
            break;
          case l.BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED:
            t.subtype = "blue_msg_verified_to_self_fb_unverified";
            break;
          case l.BLUE_MSG_VERIFIED_TO_UNVERIFIED:
            t.subtype = "blue_msg_verified_to_unverified";
            break;
          case l.BIZ_PRIVACY_MODE_INIT_FB:
            ((t.subtype = "biz_privacy_mode_init_fb"),
              (a = t.id) != null &&
                (a = a.remote) != null &&
                a.isBot() &&
                (t.subtype = "bot_init"));
            break;
          case l.BIZ_PRIVACY_MODE_INIT_BSP:
            t.subtype = "biz_privacy_mode_init_bsp";
            break;
          case l.BIZ_PRIVACY_MODE_TO_FB:
            ((t.subtype = "biz_privacy_mode_to_fb"),
              (i = t.id) != null &&
                (i = i.remote) != null &&
                i.isBot() &&
                (t.subtype = "bot_init"));
            break;
          case l.BIZ_PRIVACY_MODE_TO_BSP:
            t.subtype = "biz_privacy_mode_to_bsp";
            break;
          case l.DISAPPEARING_MODE:
            t.subtype = "disappearing_mode";
            break;
          case l.BLOCK_CONTACT:
            t.subtype = "block_contact";
            break;
          case l.ADMIN_REVOKE: {
            var m;
            ((t.type = "revoked"),
              (t.subtype = "admin"),
              (t.kind = o("WAWebMsgType").MsgKind.RevokedMessage),
              (t.revokeSender =
                t.templateParams[1] instanceof r("WAWebWid")
                  ? t.templateParams[1]
                  : void 0),
              t.revokeSender ||
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "ProtocolParser: admin revoke came without admin JID",
                    ])),
                ));
            var p = t.templateParams[0];
            ((t.protocolMessageKey =
              (m = c(e, {
                remoteJid: e.key.remoteJid,
                fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t.from),
                id: p,
                participant: e.key.participant,
              })) == null
                ? void 0
                : m.msgKey),
              (t.templateParams = void 0));
            break;
          }
          case l.COMMUNITY_LINK_PARENT_GROUP:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "parent_group_link"));
            break;
          case l.COMMUNITY_LINK_SIBLING_GROUP:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "sibling_group_link"));
            break;
          case l.COMMUNITY_LINK_SUB_GROUP:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "sub_group_link"));
            break;
          case l.COMMUNITY_CREATE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "community_create"));
            break;
          case l.COMMUNITY_UNLINK_PARENT_GROUP:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "parent_group_unlink"));
            break;
          case l.INTEGRITY_UNLINK_PARENT_GROUP:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "integrity_parent_group_unlink"));
            break;
          case l.COMMUNITY_UNLINK_SIBLING_GROUP:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "sibling_group_unlink"));
            break;
          case l.COMMUNITY_UNLINK_SUB_GROUP:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "sub_group_unlink"));
            break;
          case l.COMMUNITY_PARTICIPANT_PROMOTE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "linked_group_promote"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.COMMUNITY_PARTICIPANT_DEMOTE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "linked_group_demote"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.EPHEMERAL_KEEP_IN_CHAT:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "ephemeral_keep_in_chat"));
            break;
          case l.GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "membership_approval_mode"));
            break;
          case l.GROUP_MEMBER_ADD_MODE: {
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "member_add_mode"));
            break;
          }
          case l.GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD: {
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.recipients = t.templateParams),
              (t.subtype = "created_membership_requests"));
            break;
          }
          case l.GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "membership_approval_request"));
            break;
          case l.GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "auto_add"));
            break;
          case l.COMMUNITY_PARENT_GROUP_DELETED:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "delete_parent_group"));
            break;
          case l.BIZ_CHAT_ASSIGNMENT:
            t.subtype = "chat_assignment";
            break;
          case l.BIZ_CHAT_ASSIGNMENT_UNASSIGN:
            t.subtype = "chat_assignment_unassign";
            break;
          case l.COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "subject"),
              (t.body = t.templateParams[1]));
            break;
          case l.CAG_INVITE_AUTO_ADD:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "invite_auto_add"),
              (t.recipients = [o("WAWebUserPrefsMeUser").getMaybeMePnUser()]));
            break;
          case l.CAG_INVITE_AUTO_JOINED:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "invite_auto_add"),
              (t.recipients = t.templateParams),
              (t.templateParams = void 0));
            break;
          case l.COMMUNITY_PARTICIPANT_ADD_RICH:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "community_participant_add_rich"));
            break;
          case l.SUB_GROUP_PARTICIPANT_ADD_RICH:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "sub_group_participant_add_rich"));
            break;
          case l.SUB_GROUP_INVITE_RICH:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "sub_group_invite_rich"),
              (t.author = void 0));
            break;
          case l.COMMUNITY_INVITE_AUTO_ADD_RICH:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "community_invite_auto_add_rich"),
              (t.author = void 0));
            break;
          case l.COMMUNITY_INVITE_RICH:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "community_invite_rich"),
              (t.author = void 0));
            break;
          case l.COMMUNITY_LINK_PARENT_GROUP_RICH:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "community_link_parent_group_rich"));
            break;
          case l.COMMUNITY_CHANGE_DESCRIPTION:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "parent_group_description"),
              (t.body = t.templateParams[0]));
            break;
          case l.PINNED_MESSAGE_IN_CHAT: {
            ((t.type = "pinned_message"),
              (t.kind = o("WAWebMsgType").MsgKind.PinnedMessage));
            break;
          }
          case l.COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "allow_non_admin_sub_group_creation"));
            break;
          case l.EMPTY_SUBGROUP_CREATE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "empty_subgroup_create"));
            break;
          case l.SUGGESTED_SUBGROUP_ANNOUNCE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "created_subgroup_suggestion"));
            break;
          case l.SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "subgroup_admin_triggered_auto_add"));
            break;
          case l.GENERAL_CHAT_ADD:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "general_chat_add"));
            break;
          case l.GENERAL_CHAT_AUTO_ADD_DISABLED:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "general_chat_auto_add_disabled"));
            break;
          case l.BIZ_BOT_1P_MESSAGING_ENABLED:
            ((t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
              (t.subtype = "biz_bot_1p_disclosure"));
            break;
          case l.BIZ_BOT_3P_MESSAGING_ENABLED:
            ((t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
              (t.subtype = "biz_bot_3p_disclosure"));
            break;
          case l.CHANGE_USERNAME:
            ((t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
              (t.subtype = "change_username"),
              r("WAWebWid").isGroup(t.id.remote) &&
                (t.viewMode =
                  o("WAWebViewMode.flow").ViewModeType.GROUP_MEMBER_UPDATES));
            break;
          case l.BIZ_COEX_PRIVACY_INIT_SELF:
            if (!o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
              t.templateParams = void 0;
              break;
            }
            ((t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
              (t.subtype = "biz_me_account_type_is_hosted"));
            break;
          case l.BIZ_COEX_PRIVACY_TRANSITION_SELF:
            if (!o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
              t.templateParams = void 0;
              break;
            }
            ((t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
              (t.subtype = "biz_me_account_type_is_hosted_transition"));
            break;
          case l.BIZ_COEX_PRIVACY_INIT:
            if (!o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
              t.templateParams = void 0;
              break;
            }
            ((t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
              (t.subtype = "biz_account_type_is_hosted"));
            break;
          case l.BIZ_COEX_PRIVACY_TRANSITION:
            if (!o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
              t.templateParams = void 0;
              break;
            }
            ((t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
              (t.subtype = "biz_account_type_changed_to_hosted"));
            break;
          case l.SUPPORT_AI_EDUCATION:
            ((t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate),
              (t.subtype = "saga_init"));
            break;
          case l.EVENT_CANCELED:
          case l.EVENT_UPDATED: {
            var _,
              f = babelHelpers.extends(
                {},
                o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(t),
                {
                  type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                  subtype: "event_edit_decrypted",
                  kind: o("WAWebMsgType").MsgKind.ProtocolEventEdit,
                  eventName: t.templateParams[0],
                  eventStartTime: o("WATimeUtils").unixTime(),
                  isEventCanceled: e.messageStubType === l.EVENT_CANCELED,
                  protocolMessageKey: r("WANullthrows")(
                    (_ = c(e, r("WANullthrows")(e.targetMessageId))) == null
                      ? void 0
                      : _.msgKey,
                    "Error: buildMsgKey or targetMessageId is null or missing for event edit system message history sync parsing",
                  ),
                  editMsgType: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
                  latestEditMsgKey: void 0,
                  latestEditSenderTimestampMs: void 0,
                },
              );
            return f;
          }
          case l.COMMUNITY_OWNER_UPDATED:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "community_owner_update"));
            break;
          case l.COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN:
            t.templateParams[0] === "on" &&
              ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = "community_hidden_group"));
            break;
          case l.SUPPORT_SYSTEM_MESSAGE:
            t.subtype = "support_system_message";
            break;
          case l.BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE:
            ((t.subtype = "biz_automatically_labeled_chat_system_message"),
              (t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate));
            break;
          case l.GROUP_OPEN_BOT_ADDED:
            if (
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled()
            ) {
              ((t.subtype = "group_transition_to_bot_group"),
                (t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
                (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate));
              break;
            } else {
              t.templateParams = void 0;
              break;
            }
          case l.GROUP_TEE_BOT_ADDED:
            if (
              o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            ) {
              ((t.subtype = "group_transition_to_tee_bot_group"),
                (t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
                (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate));
              break;
            } else {
              t.templateParams = void 0;
              break;
            }
          case l.CONTACT_INFO:
            ((t.subtype = o(
              "WAWebCommonMsgSubtypeTypes",
            ).MsgSubtype.ContactInfoCard),
              (t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
              (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate));
            break;
          case l.BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE:
            if (
              o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled()
            ) {
              ((t.subtype = "biz_per_customer_3pd_data_share_opt_in"),
                (t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
                (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate));
              break;
            } else {
              t.templateParams = void 0;
              break;
            }
          case l.BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE:
            if (
              o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled()
            ) {
              ((t.subtype = "biz_per_customer_3pd_data_share_opt_out"),
                (t.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
                (t.kind = o("WAWebMsgType").MsgKind.NotificationTemplate));
              break;
            } else {
              t.templateParams = void 0;
              break;
            }
          case l.GROUP_MEMBER_SHARE_GROUP_HISTORY_MODE:
            ((t.type = "gp2"),
              (t.kind = o("WAWebMsgType").MsgKind.Gp2),
              (t.subtype = o(
                "WAWebCommonMsgSubtypeTypes",
              ).MsgSubtype.MemberShareGroupHistoryMode));
            break;
          default:
            t.templateParams = void 0;
            break;
        }
        return t;
      }
    }
    ((l.getMeJid = u), (l.buildMsgKey = c), (l.parseMsgStubProto = d));
  },
  98,
);
