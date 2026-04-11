__d(
  "WAWebMessagePluginGenerateReportingTokenContentRegistry",
  [
    "WAWebGenerateAudioOrPttReportingTokenContent",
    "WAWebGenerateChatReportingTokenContent",
    "WAWebGenerateDocumentReportingTokenContent",
    "WAWebGenerateImageReportingTokenContent",
    "WAWebGenerateInteractiveResponseReportingTokenContent",
    "WAWebGeneratePtvReportingTokenContent",
    "WAWebGenerateStickerReportingTokenContent",
    "WAWebGenerateVideoReportingTokenContent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      { type: "album", subtype: void 0, generateReportingTokenContent: null },
      {
        type: "audio",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGenerateAudioOrPttReportingTokenContent",
        ),
      },
      {
        type: "biz_content_placeholder",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "buttons_response",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "chat",
        subtype: "url",
        generateReportingTokenContent: r(
          "WAWebGenerateChatReportingTokenContent",
        ),
      },
      {
        type: "chat",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGenerateChatReportingTokenContent",
        ),
      },
      {
        type: "ciphertext",
        subtype: "bot_unavailable_fanout",
        generateReportingTokenContent: null,
      },
      {
        type: "ciphertext",
        subtype: "fanout",
        generateReportingTokenContent: null,
      },
      {
        type: "ciphertext",
        subtype: "hosted_unavailable_fanout",
        generateReportingTokenContent: null,
      },
      {
        type: "ciphertext",
        subtype: "view_once_unavailable_fanout",
        generateReportingTokenContent: null,
      },
      {
        type: "ciphertext",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      { type: "comment", subtype: void 0, generateReportingTokenContent: null },
      {
        type: "debug_placeholder",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "document",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGenerateDocumentReportingTokenContent",
        ),
      },
      {
        type: "event_creation",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "event_edit_encrypted",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "event_response",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "group-history",
        subtype: "message_history_bundle",
        generateReportingTokenContent: null,
      },
      {
        type: "groups_v4_invite",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      { type: "hsm", subtype: void 0, generateReportingTokenContent: null },
      {
        type: "image",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGenerateImageReportingTokenContent",
        ),
      },
      {
        type: "interactive",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGenerateInteractiveResponseReportingTokenContent",
        ),
      },
      {
        type: "interactive_response",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "keep_in_chat",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      { type: "list", subtype: void 0, generateReportingTokenContent: null },
      {
        type: "list_response",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "loading_media",
        subtype: "loading_image",
        generateReportingTokenContent: null,
      },
      {
        type: "loading_media",
        subtype: "loading_video",
        generateReportingTokenContent: null,
      },
      {
        type: "location",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "message_edit_encrypted",
        subtype: "message_edit",
        generateReportingTokenContent: null,
      },
      {
        type: "message_history_notice",
        subtype: "message_history_notice",
        generateReportingTokenContent: null,
      },
      {
        type: "multi_vcard",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "native_flow",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "newsletter_admin_invite",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "newsletter_follower_invite",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "newsletter_question_response",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "notification_template",
        subtype: "contact_info_card",
        generateReportingTokenContent: null,
      },
      { type: "order", subtype: void 0, generateReportingTokenContent: null },
      {
        type: "payment",
        subtype: "ciphertext",
        generateReportingTokenContent: null,
      },
      {
        type: "payment",
        subtype: "futureproof",
        generateReportingTokenContent: null,
      },
      {
        type: "payment",
        subtype: "invite",
        generateReportingTokenContent: null,
      },
      {
        type: "payment",
        subtype: "request",
        generateReportingTokenContent: null,
      },
      { type: "payment", subtype: "send", generateReportingTokenContent: null },
      {
        type: "pin_message",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "pinned_message",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "poll_add_option_decrypted",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "poll_add_option_encrypted",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "poll_creation",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "poll_edit_encrypted",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "poll_result_snapshot",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "poll_update",
        subtype: "poll_vote",
        generateReportingTokenContent: null,
      },
      { type: "product", subtype: void 0, generateReportingTokenContent: null },
      {
        type: "protocol",
        subtype: "admin_revoke",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "bot_feedback",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "bot_memu_onboarding",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "bot_request_welcome",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "ephemeral_setting",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "ephemeral_sync_response",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "event_edit_decrypted",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "history_sync_notification",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "limit_sharing_system_message",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "member_label",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "message_edit",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "message_edit_decrypted",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "poll_edit_decrypted",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "sender_revoke",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "share_phone_number",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "status_group_mention_message",
        generateReportingTokenContent: null,
      },
      {
        type: "protocol",
        subtype: "status_mention_message",
        generateReportingTokenContent: null,
      },
      {
        type: "ptt",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGenerateAudioOrPttReportingTokenContent",
        ),
      },
      {
        type: "ptv",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGeneratePtvReportingTokenContent",
        ),
      },
      {
        type: "quarantined",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "reaction",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "reaction_enc",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "request_phone_number",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "revoked",
        subtype: "admin",
        generateReportingTokenContent: null,
      },
      {
        type: "revoked",
        subtype: "sender",
        generateReportingTokenContent: null,
      },
      {
        type: "rich_response",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "status_notification",
        subtype: "status_notification_message",
        generateReportingTokenContent: null,
      },
      {
        type: "sticker",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGenerateStickerReportingTokenContent",
        ),
      },
      {
        type: "sticker-pack",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "template_button_reply",
        subtype: void 0,
        generateReportingTokenContent: null,
      },
      {
        type: "unknown",
        subtype: "payment_action_request_declined",
        generateReportingTokenContent: null,
      },
      {
        type: "unknown",
        subtype: "payment_transaction_request_cancelled",
        generateReportingTokenContent: null,
      },
      {
        type: "unknown",
        subtype: "phone",
        generateReportingTokenContent: null,
      },
      {
        type: "unknown",
        subtype: "phone_only_feature",
        generateReportingTokenContent: null,
      },
      { type: "unknown", subtype: void 0, generateReportingTokenContent: null },
      { type: "vcard", subtype: void 0, generateReportingTokenContent: null },
      {
        type: "video",
        subtype: void 0,
        generateReportingTokenContent: r(
          "WAWebGenerateVideoReportingTokenContent",
        ),
      },
    ];
    l.default = e;
  },
  98,
);
