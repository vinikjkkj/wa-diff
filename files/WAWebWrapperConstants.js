__d(
  "WAWebWrapperConstants",
  [],
  function (t, n, r, o, a, i) {
    var e = { IN: !1, OUT: !0 },
      l = { REACTION_BUTTON: 75 },
      s = [
        "biz_privacy_mode_init_fb",
        "biz_privacy_mode_init_bsp",
        "biz_privacy_mode_to_fb",
        "biz_privacy_mode_to_bsp",
        "biz_me_account_type_is_hosted",
        "biz_me_account_type_is_hosted_transition",
        "biz_account_type_is_hosted",
        "biz_account_type_changed_to_hosted",
        "is_capi_hosted_group",
        "support_system_message",
        "group_transition_to_bot_group",
      ],
      u = [
        "community_participant_add_rich",
        "community_invite_rich",
        "sub_group_participant_add_rich",
        "sub_group_invite_rich",
        "community_link_parent_group_rich",
        "community_create",
        "community_invite_auto_add_rich",
        "subgroup_admin_triggered_auto_add",
        "subgroup_admin_triggered_invite_auto_add",
        "empty_subgroup_create",
        "general_chat_add",
      ];
    ((i.MSG_DIRECTION = e),
      (i.DEBOUNCE_DURATION = l),
      (i.NON_E2E_NOTIFICATION_SUBTYPES = s),
      (i.NO_PADDING_SUBTYPES = u));
  },
  66,
);
