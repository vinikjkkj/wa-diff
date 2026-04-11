__d(
  "WAWebSpamUtils",
  ["WAWebMsgGetters", "WAWebSpamConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o(
        "WAWebSpamConstants",
      ).SUPPORTED_MESSAGE_TYPES_FOR_MESSAGE_LEVEL_REPORTING.has(e);
    }
    function s(e) {
      return (
        o(
          "WAWebSpamConstants",
        ).PAID_PARTNERSHIP_LABEL_SUPPORTED_MESSAGE_TYPES.has(e.type) &&
        !o("WAWebMsgGetters").getIsGif(e)
      );
    }
    function u(e) {
      return o("WAWebSpamConstants").SPAM_REPORT_SUPPORTED_MESSAGE_TYPES.has(e);
    }
    function c(e) {
      return e === "album"
        ? 0
        : e === "audio"
          ? 1
          : e === "automated_greeting_message"
            ? 2
            : e === "biz_content_placeholder"
              ? 3
              : e === "biz-cover-photo"
                ? 4
                : e === "broadcast_notification"
                  ? 5
                  : e === "buttons_response"
                    ? 6
                    : e === "call_log"
                      ? 7
                      : e === "chat"
                        ? 8
                        : e === "ciphertext"
                          ? 9
                          : e === "comment"
                            ? 10
                            : e === "debug"
                              ? 11
                              : e === "debug_placeholder"
                                ? 12
                                : e === "document"
                                  ? 13
                                  : e === "e2e_notification"
                                    ? 14
                                    : e === "event_creation"
                                      ? 15
                                      : e === "event_edit_encrypted"
                                        ? 16
                                        : e === "event_response"
                                          ? 17
                                          : e === "gp2"
                                            ? 18
                                            : e === "groups_v4_invite"
                                              ? 19
                                              : e === "guest_upsell_system_msg"
                                                ? 20
                                                : e === "history_bundle"
                                                  ? 21
                                                  : e === "hsm"
                                                    ? 22
                                                    : e === "image"
                                                      ? 23
                                                      : e === "interactive"
                                                        ? 24
                                                        : e ===
                                                            "interactive_response"
                                                          ? 25
                                                          : e === "keep_in_chat"
                                                            ? 26
                                                            : e === "list"
                                                              ? 27
                                                              : e ===
                                                                  "list_response"
                                                                ? 28
                                                                : e ===
                                                                    "location"
                                                                  ? 29
                                                                  : e ===
                                                                      "multi_vcard"
                                                                    ? 30
                                                                    : e ===
                                                                        "native_flow"
                                                                      ? 31
                                                                      : e ===
                                                                          "newsletter_admin_invite"
                                                                        ? 32
                                                                        : e ===
                                                                            "newsletter_notification"
                                                                          ? 33
                                                                          : e ===
                                                                              "newsletter_question_response"
                                                                            ? 34
                                                                            : e ===
                                                                                "notification"
                                                                              ? 35
                                                                              : e ===
                                                                                  "notification_template"
                                                                                ? 36
                                                                                : e ===
                                                                                    "order"
                                                                                  ? 37
                                                                                  : e ===
                                                                                      "oversized"
                                                                                    ? 38
                                                                                    : e ===
                                                                                        "payment"
                                                                                      ? 39
                                                                                      : e ===
                                                                                          "pin_message"
                                                                                        ? 40
                                                                                        : e ===
                                                                                            "pinned_message"
                                                                                          ? 41
                                                                                          : e ===
                                                                                              "poll_creation"
                                                                                            ? 42
                                                                                            : e ===
                                                                                                "poll_result_snapshot"
                                                                                              ? 43
                                                                                              : e ===
                                                                                                  "poll_update"
                                                                                                ? 44
                                                                                                : e ===
                                                                                                    "product"
                                                                                                  ? 45
                                                                                                  : e ===
                                                                                                      "protocol"
                                                                                                    ? 46
                                                                                                    : e ===
                                                                                                        "ptt"
                                                                                                      ? 47
                                                                                                      : e ===
                                                                                                          "ptv"
                                                                                                        ? 48
                                                                                                        : e ===
                                                                                                            "reaction"
                                                                                                          ? 49
                                                                                                          : e ===
                                                                                                              "reaction_enc"
                                                                                                            ? 50
                                                                                                            : e ===
                                                                                                                "request_phone_number"
                                                                                                              ? 51
                                                                                                              : e ===
                                                                                                                  "revoked"
                                                                                                                ? 52
                                                                                                                : e ===
                                                                                                                    "rich_response"
                                                                                                                  ? 53
                                                                                                                  : e ===
                                                                                                                      "status"
                                                                                                                    ? 54
                                                                                                                    : e ===
                                                                                                                        "status_notification"
                                                                                                                      ? 55
                                                                                                                      : e ===
                                                                                                                          "sticker"
                                                                                                                        ? 56
                                                                                                                        : e ===
                                                                                                                            "sticker-pack"
                                                                                                                          ? 57
                                                                                                                          : e ===
                                                                                                                              "template_button_reply"
                                                                                                                            ? 58
                                                                                                                            : e ===
                                                                                                                                "unknown"
                                                                                                                              ? 59
                                                                                                                              : e ===
                                                                                                                                  "vcard"
                                                                                                                                ? 60
                                                                                                                                : e ===
                                                                                                                                    "video"
                                                                                                                                  ? 61
                                                                                                                                  : e ===
                                                                                                                                      "newsletter_follower_invite"
                                                                                                                                    ? 62
                                                                                                                                    : e ===
                                                                                                                                        "group-history"
                                                                                                                                      ? 63
                                                                                                                                      : e ===
                                                                                                                                          "message_history_notice"
                                                                                                                                        ? 64
                                                                                                                                        : e ===
                                                                                                                                            "quarantined"
                                                                                                                                          ? 65
                                                                                                                                          : e ===
                                                                                                                                              "message_edit_encrypted"
                                                                                                                                            ? 66
                                                                                                                                            : e ===
                                                                                                                                                "loading_media"
                                                                                                                                              ? 67
                                                                                                                                              : e ===
                                                                                                                                                  "poll_edit_encrypted"
                                                                                                                                                ? 68
                                                                                                                                                : e ===
                                                                                                                                                    "poll_add_option_encrypted"
                                                                                                                                                  ? 69
                                                                                                                                                  : e ===
                                                                                                                                                      "poll_add_option_decrypted"
                                                                                                                                                    ? 70
                                                                                                                                                    : (function () {
                                                                                                                                                        throw Error(
                                                                                                                                                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                                                                                                                            e,
                                                                                                                                                        );
                                                                                                                                                      })();
    }
    ((l.isMsgTypeSupportedForMsgLevelReporting = e),
      (l.isMsgTypeSupportedForPaidPartnershipLabel = s),
      (l.isSpamSupportedForMessageType = u),
      (l.msgTypeToReportLocalMessageType = c));
  },
  98,
);
