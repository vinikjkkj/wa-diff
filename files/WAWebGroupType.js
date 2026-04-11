__d(
  "WAWebGroupType",
  [
    "$InternalEnum",
    "WAWebWamEnumGroupTypeClient",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("$InternalEnum"))({ On: "on", Off: "off" }),
      u = e({ Admin: "admin", Regular: "regular" }),
      c = e({ Server: "server", Full: "full" }),
      d = Object.freeze({
        SUBJECT: "subject",
        ADD: "add",
        PROMOTE: "promote",
        DEMOTE: "demote",
        DELETE: "delete",
        REMOVE: "remove",
        MODIFY: "modify",
        INVITE_CODE: "invite",
        DESC_ADD: "desc_add",
        DESC_REMOVE: "desc_remove",
        RESTRICT: "restrict",
        ANNOUNCE: "announce",
        NO_FORWARD: "no_frequently_forwarded",
        EPHEMERAL: "ephemeral",
        REVOKE_INVITE: "revoke_invite",
        SUSPEND: "suspend",
        GROWTH_LOCKED: "growth_locked",
        GROWTH_UNLOCKED: "growth_unlocked",
        SUB_GROUP_LINK: "sub_group_link",
        PARENT_GROUP_LINK: "parent_group_link",
        SIBLING_GROUP_LINK: "sibling_group_link",
        SUB_GROUP_UNLINK: "sub_group_unlink",
        PARENT_GROUP_UNLINK: "parent_group_unlink",
        SIBLING_GROUP_UNLINK: "sibling_group_unlink",
        DELETE_PARENT_GROUP: "delete_parent_group",
        DELETE_PARENT_GROUP_UNLINK: "delete_parent_group_unlink",
        DELETE_PARENT_SUB_GROUP_UNLINK: "delete_parent_sub_group_unlink",
        INTEGRITY_PARENT_GROUP_UNLINK: "integrity_parent_group_unlink",
        INTEGRITY_SUB_GROUP_UNLINK: "integrity_sub_group_unlink",
        LINKED_GROUP_PROMOTE: "linked_group_promote",
        LINKED_GROUP_DEMOTE: "linked_group_demote",
        MEMBERSHIP_APPROVAL_MODE: "membership_approval_mode",
        MEMBERSHIP_APPROVAL_REQUEST: "membership_approval_request",
        CREATED_MEMBERSHIP_REQUESTS: "created_membership_requests",
        REVOKED_MEMBERSHIP_REQUESTS: "revoked_membership_requests",
        ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          "allow_non_admin_sub_group_creation",
        ALLOW_ADMIN_REPORTS: "allow_admin_reports",
        ADMIN_REPORT_RECIEVED: "admin_report_received",
        CREATED_SUBGROUP_SUGGESTION: "created_subgroup_suggestion",
        REVOKED_SUB_GROUP_SUGGESTIONS: "revoked_sub_group_suggestions",
        SUBGROUP_SUGGESTIONS_CHANGE_NUMBER:
          "subgroup_suggestions_change_number",
        MEMBER_ADD_MODE: "member_add_mode",
        MEMBER_LINK_MODE: "member_link_mode",
        MEMBER_SHARE_GROUP_HISTORY_MODE: "member_share_group_history_mode",
        GENERAL_CHAT_AUTO_ADD_DISABLED: "general_chat_auto_add_disabled",
        COMMUNITY_OWNER_UPDATE: "community_owner_update",
        HIDDEN_GROUP: "hidden_group",
        GROUP_SAFETY_CHECK: "group_safety_check",
        JOIN_FLOOD_NOTIFICATION: "join_flood_notification",
      }),
      m = Object.freeze({
        INTEGRITY_DELETE_PARENT: "integrity_delete_parent",
        DELETE_PARENT: "delete_parent",
      }),
      p = Object.freeze({
        INVITE: "invite",
        LINKED_GROUP_JOIN: "linked_group_join",
        AUTO_ADD: "auto_add",
        DEFAULT_SUBGROUP_ADMIN_ADD: "default_subgroup_admin_add",
        DEFAULT_SUBGROUP_PROMOTE: "default_sub_group_promote",
        INVITE_AUTO_ADD: "invite_auto_add",
        GENERAL_CHAT_AUTO_ADD: "general_chat_auto_add",
      }),
      _ = Object.freeze({
        DEFAULT_SUBGROUP_DEMOTE: "default_sub_group_demote",
      }),
      f = e({
        APPROVED: "approved",
        REJECTED: "rejected",
        CANCELLED: "cancelled",
      }),
      g = e.Mirrored([
        "DEFAULT",
        "COMMUNITY",
        "LINKED_SUBGROUP",
        "LINKED_ANNOUNCEMENT_GROUP",
        "LINKED_GENERAL_GROUP",
      ]);
    function h(e) {
      return e.defaultSubgroup === !0
        ? g.LINKED_ANNOUNCEMENT_GROUP
        : e.generalSubgroup === !0
          ? g.LINKED_GENERAL_GROUP
          : e.parentGroup != null
            ? g.LINKED_SUBGROUP
            : e.isParentGroup === !0
              ? g.COMMUNITY
              : g.DEFAULT;
    }
    function y(e) {
      return e === g.LINKED_ANNOUNCEMENT_GROUP
        ? o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.DEFAULT_SUBGROUP
        : e === g.LINKED_SUBGROUP
          ? o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.SUBGROUP
          : e === g.DEFAULT || e === g.COMMUNITY || e === g.LINKED_GENERAL_GROUP
            ? o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM.GROUP
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function C(e) {
      if (e != null)
        return e === g.DEFAULT
          ? o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.REGULAR_GROUP
          : e === g.LINKED_SUBGROUP || e === g.LINKED_GENERAL_GROUP
            ? o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.SUB_GROUP
            : e === g.LINKED_ANNOUNCEMENT_GROUP
              ? o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT
                  .DEFAULT_SUB_GROUP
              : e === g.COMMUNITY
                ? o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT
                    .PARENT_GROUP
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    ((l.GroupSettingChangeSystemMessageToggleEnabled = s),
      (l.GroupSettingChangeSystemMessageIsAdmin = u),
      (l.GeneralChatAutoAddDisabledReasonEnum = c),
      (l.GROUP_ACTIONS = d),
      (l.DELETE_REASON = m),
      (l.ADD_REASON = p),
      (l.REMOVE_REASON = _),
      (l.RevokedSubGroupSuggestionReason = f),
      (l.GroupType = g),
      (l.getGroupTypeFromGroupMetadata = h),
      (l.groupTypeToWamEnum = y),
      (l.groupTypeToGroupTypeClient = C));
  },
  98,
);
