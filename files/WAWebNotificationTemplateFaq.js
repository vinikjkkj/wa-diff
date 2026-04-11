__d(
  "WAWebNotificationTemplateFaq",
  ["WAWebFaqUrl"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      switch (e) {
        case "non_verified_transition":
          return o("WAWebFaqUrl").getNonVerifiedTransitionFaqUrl();
        case "unverified_transition":
          return o("WAWebFaqUrl").getUnverifiedTransitionFaqUrl();
        case "verified_transition":
          return o("WAWebFaqUrl").getE2EEnterpriseFaqUrl();
        case "verified_low_unknown":
          return o("WAWebFaqUrl").getVerifiedLowUnknownFaqUrl();
        case "verified_high":
          return o("WAWebFaqUrl").getVerifiedHighFaqUrl();
        case "biz_intro_top":
        case "biz_intro_bottom":
        case "biz_two_tier_migration_bottom":
        case "biz_name_change":
        case "biz_verified_transition_top_to_bottom":
        case "verified_initial_unknown":
        case "verified_initial_low":
        case "verified_initial_high":
        case "verified_transition_any_to_none":
        case "verified_transition_any_to_high":
        case "verified_transition_high_to_low":
        case "verified_transition_high_to_unknown":
        case "verified_transition_unknown_to_low":
        case "verified_transition_low_to_unknown":
        case "verified_transition_none_to_low":
        case "verified_transition_none_to_unknown":
          return o("WAWebFaqUrl").getBusinessFaqUrl();
        case "blue_msg_bsp_fb_to_bsp_premise":
        case "blue_msg_bsp_fb_to_self_fb":
        case "blue_msg_bsp_fb_to_self_premise":
        case "blue_msg_bsp_fb_unverified":
        case "blue_msg_bsp_fb_unverified_to_bsp_premise_verified":
        case "blue_msg_bsp_fb_unverified_to_self_fb_verified":
        case "blue_msg_bsp_fb_unverified_to_self_premise_verified":
        case "blue_msg_bsp_fb_verified":
        case "blue_msg_bsp_fb_verified_to_bsp_premise_unverified":
        case "blue_msg_bsp_fb_verified_to_self_fb_unverified":
        case "blue_msg_bsp_fb_verified_to_self_premise_unverified":
        case "blue_msg_bsp_premise_to_self_premise":
        case "blue_msg_bsp_premise_unverified":
        case "blue_msg_bsp_premise_unverified_to_self_premise_verified":
        case "blue_msg_bsp_premise_verified":
        case "blue_msg_bsp_premise_verified_to_self_premise_unverified":
        case "blue_msg_consumer_to_bsp_fb_unverified":
        case "blue_msg_consumer_to_bsp_premise_unverified":
        case "blue_msg_consumer_to_self_fb_unverified":
        case "blue_msg_consumer_to_self_premise_unverified":
        case "blue_msg_self_fb_to_bsp_premise":
        case "blue_msg_self_fb_to_self_premise":
        case "blue_msg_self_fb_unverified":
        case "blue_msg_self_fb_unverified_to_bsp_premise_verified":
        case "blue_msg_self_fb_unverified_to_self_premise_verified":
        case "blue_msg_self_fb_verified":
        case "blue_msg_self_fb_verified_to_bsp_premise_unverified":
        case "blue_msg_self_fb_verified_to_self_premise_unverified":
        case "blue_msg_self_premise_to_bsp_premise":
        case "blue_msg_self_premise_unverified":
        case "blue_msg_self_premise_verified":
        case "blue_msg_to_bsp_fb":
        case "blue_msg_to_consumer":
        case "blue_msg_to_self_fb":
        case "blue_msg_unverified_to_bsp_fb_verified":
        case "blue_msg_unverified_to_bsp_premise_verified":
        case "blue_msg_unverified_to_self_fb_verified":
        case "blue_msg_unverified_to_verified":
        case "blue_msg_verified_to_bsp_fb_unverified":
        case "blue_msg_verified_to_bsp_premise_unverified":
        case "blue_msg_verified_to_self_fb_unverified":
        case "blue_msg_verified_to_unverified":
          return o("WAWebFaqUrl").getE2EEnterpriseFaqUrl();
        case "biz_privacy_mode_init_fb":
        case "biz_privacy_mode_to_fb":
        case "biz_privacy_mode_init_bsp":
        case "biz_privacy_mode_to_bsp":
          return t.isCAPISupportAccount()
            ? o("WAWebFaqUrl").getSupportChatSafetyFaqUrl()
            : o("WAWebFaqUrl").getE2EEnterpriseFaqUrl();
        case "order_ephemeral_exemption":
          return o("WAWebFaqUrl").getOrderEphemeralExemptionUrl();
        case "biz_me_account_type_is_hosted":
        case "biz_me_account_type_is_hosted_transition":
        case "biz_account_type_changed_to_hosted":
        case "biz_account_type_is_hosted":
          return o("WAWebFaqUrl").getCoexHostedFaqUrl();
        default:
          return o("WAWebFaqUrl").getFaqUrl();
      }
    }
    l.default = e;
  },
  98,
);
