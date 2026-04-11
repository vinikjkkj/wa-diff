__d(
  "WAWebNuxSyncKey",
  ["WAWebNux"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === o("WAWebNux").NUX.EPHEMERAL
        ? o("WAWebNux").NuxSyncKey.EPHEMERAL
        : e === o("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE
          ? o("WAWebNux").NuxSyncKey.EPHEMERAL_VIEW_ONCE
          : e === o("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE_RECEIVER
            ? o("WAWebNux").NuxSyncKey.EPHEMERAL_VIEW_ONCE_RECEIVER
            : e === o("WAWebNux").NUX.STATUS_QUICK_REPLIES
              ? o("WAWebNux").NuxSyncKey.STATUS_QUICK_REPLIES
              : e === o("WAWebNux").NUX.COMMUNITY
                ? o("WAWebNux").NuxSyncKey.COMMUNITY
                : e === o("WAWebNux").NUX.COMMUNITY_HOME
                  ? o("WAWebNux").NuxSyncKey.COMMUNITY_HOME
                  : e === o("WAWebNux").NUX.KEEP_IN_CHAT
                    ? o("WAWebNux").NuxSyncKey.KEEP_IN_CHAT
                    : e === o("WAWebNux").NUX.FORWARD_MEDIA_WITH_CAPTION
                      ? o("WAWebNux").NuxSyncKey.FORWARD_MEDIA_WITH_CAPTION
                      : e === o("WAWebNux").NUX.NEWSLETTER_MULTI_ADMIN
                        ? o("WAWebNux").NuxSyncKey.NEWSLETTER_MULTI_ADMIN
                        : e === o("WAWebNux").NUX.SUPPORT_AI
                          ? o("WAWebNux").NuxSyncKey.SUPPORT_AI
                          : e === o("WAWebNux").NUX.TOOLTIP_STATUS_ENTRY_POINT
                            ? o("WAWebNux").NuxSyncKey
                                .TOOLTIP_STATUS_ENTRY_POINT
                            : e === o("WAWebNux").NUX.STATUS_PRIVATE_MENTIONS
                              ? o("WAWebNux").NuxSyncKey.STATUS_PRIVATE_MENTIONS
                              : e ===
                                  o("WAWebNux").NUX
                                    .MESSAGE_LABEL_DEPRECATION_MIGRATED_PERMANENT
                                ? o("WAWebNux").NuxSyncKey
                                    .MESSAGE_LABEL_DEPRECATION_MIGRATED
                                : e === o("WAWebNux").NUX.ADD_TO_LISTS
                                  ? o("WAWebNux").NuxSyncKey.ADD_TO_LISTS
                                  : e === o("WAWebNux").NUX.WEB_UI_REFRESH
                                    ? o("WAWebNux").NuxSyncKey.WEB_UI_REFRESH
                                    : e === o("WAWebNux").NUX.DO_AUTOMATIC_LABEL
                                      ? o("WAWebNux").NuxSyncKey
                                          .DO_AUTOMATIC_LABEL
                                      : e ===
                                          o("WAWebNux").NUX.META_AI_CTA_BANNER
                                        ? o("WAWebNux").NuxSyncKey
                                            .META_AI_CTA_BANNER
                                        : e === o("WAWebNux").NUX.FEEDBACK_INTRO
                                          ? o("WAWebNux").NuxSyncKey
                                              .FEEDBACK_INTRO
                                          : e ===
                                              o("WAWebNux").NUX
                                                .NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER
                                            ? o("WAWebNux").NuxSyncKey
                                                .NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER
                                            : e ===
                                                o("WAWebNux").NUX
                                                  .NEWSLETTER_QUESTIONS_PRIVACY_BANNER
                                              ? o("WAWebNux").NuxSyncKey
                                                  .NEWSLETTER_QUESTIONS_PRIVACY_BANNER
                                              : e ===
                                                  o("WAWebNux").NUX
                                                    .NOTIFICATION_GRANULARITY_AWARENESS_BANNER
                                                ? o("WAWebNux").NuxSyncKey
                                                    .NOTIFICATION_GRANULARITY_AWARENESS_BANNER
                                                : e ===
                                                    o("WAWebNux").NUX
                                                      .EPHEMERAL_AFTER_READ
                                                  ? o("WAWebNux").NuxSyncKey
                                                      .EPHEMERAL_AFTER_READ
                                                  : o(
                                                        "WAWebNux",
                                                      ).isCommunityAdminPromotionNuxKey(
                                                        e,
                                                      ) ||
                                                      o(
                                                        "WAWebNux",
                                                      ).isChatAutoMutedNuxKey(e)
                                                    ? e
                                                    : null;
    }
    l.getNuxSyncKey = e;
  },
  98,
);
