__d(
  "WAWebHandleGroupNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WANullthrows",
    "WAWap",
    "WAWebABProps",
    "WAWebAsISOCountryCode",
    "WAWebCommsWapMd",
    "WAWebCurrentUser",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebGroupApiConst",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupType",
    "WAWebGroupsQueryApi",
    "WAWebHandleGroupNotificationAction",
    "WAWebHandleGroupNotificationConst",
    "WAWebHandleGroupNotificationV2",
    "WAWebHandleGroupsDirtyNotification",
    "WAWebJidToWid",
    "WAWebLimitSharingGatingUtils",
    "WAWebMessageQueue",
    "WAWebOfflineHandler",
    "WAWebRequestMethodType",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebUsernameGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      if (e.hasChild("description")) {
        var t = e.child("description");
        if (t.hasChild("body")) {
          var n = t.child("body");
          if (n.hasContent())
            return { content: n.contentString(), id: t.attrString("id") };
        }
      }
      return null;
    }
    function h(e, t) {
      var n = e.hasAttr("creator")
        ? o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("creator"))
        : null;
      if (e.hasChild("ephemeral")) {
        var r = e.child("ephemeral");
        if (
          r.hasAttr("expiration") &&
          o("WAWebABProps").getABPropConfigValue("dm_initiator_trigger_groups")
        ) {
          var a,
            i = t
              ? void 0
              : o("WAWebEphemeralityTypes").DisappearingModeTrigger
                  .UnknownGroups;
          return {
            ephemeralDuration: r.attrInt("expiration"),
            disappearingModeTrigger:
              (a = o("WAWebEphemeralityUtils").getDisappearingModeTriggerString(
                r.maybeAttrString("trigger"),
              )) != null
                ? a
                : i,
            disappearingModeInitiatedByMe: o(
              "WAWebUserPrefsMeUser",
            ).isMeAccount(n),
          };
        }
        return { ephemeralDuration: r.attrInt("expiration") };
      }
      return null;
    }
    function y(e, t, n) {
      return t.mapChildrenWithTag("participant", function (t) {
        var r,
          a =
            (r = t.maybeAttrEnum(
              "type",
              o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES,
            )) != null
              ? r
              : "participant",
          i = t.maybeAttrLidUserJid("lid"),
          l = t.maybeAttrPhoneUserJid("phone_number"),
          s = {
            displayName: t.maybeAttrString("display_name"),
            id: o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("jid")),
            isSuperAdmin:
              a === o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES.superadmin,
            isAdmin:
              a === o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES.admin ||
              a === o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES.superadmin,
            lid: i != null ? o("WAWebJidToWid").userJidToUserWid(i) : null,
            phoneNumber:
              l != null ? o("WAWebJidToWid").userJidToUserWid(l) : null,
            username: t.maybeAttrString("username"),
          },
          u =
            n ===
            o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
              .REMOVE;
        return (u || C(e, s, n), s);
      });
    }
    function C(t, n, r) {
      try {
        var a =
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
          n.username != null;
        !a &&
          n.displayName == null &&
          n.phoneNumber == null &&
          n.id.isLid() &&
          !o("WAWebUserPrefsMeUser").isMeAccount(n.id) &&
          (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[lid group] no phone mapping for lid tag=",
                " sw=",
                "",
              ])),
            r,
            o("WAWebUserPrefsNotifications")
              .getGlobalOfflineNotifications()
              .toString(),
          ),
          o("WAWebCurrentUser").isEmployee()
            ? (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid group] group id=",
                    ", lid=",
                    "",
                  ])),
                t.toString(),
                n.id.toString(),
              ),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[lid group] missing group mapping in parser for employee",
                    ])),
                )
                .sendLogs(
                  "[lid group] missing group mapping in parser for employee",
                ))
            : o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[lid group] missing group mapping in action parser",
                    ])),
                )
                .sendLogs(
                  "[lid group] missing group mapping in action parser",
                ));
      } catch (e) {
        o("WALogger").ERROR(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[lid group] check mapping failed ",
              "",
            ])),
          e,
        );
      }
    }
    function b(e) {
      var t = e.child("sub_group_suggestion"),
        n = o("WAWebJidToWid").groupJidToWid(t.attrGroupJid("jid")),
        r = o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("creator")),
        a = t.attrTime("creation"),
        i = t.child("subject"),
        l = i.contentString(),
        s,
        u,
        c;
      if (t.hasChild("description")) {
        var d = t.child("description");
        if (d.hasChild("body")) {
          var m = d.child("body");
          m.hasContent() && (s = m.contentString());
        }
      }
      if (t.hasChild("is_existing_group")) {
        var p = t.child("is_existing_group");
        p.hasContent() && (u = p.contentString() === "true");
      }
      if (t.hasChild("participant_count")) {
        var _ = t.child("participant_count");
        _.hasContent() && (c = _.contentInt());
      }
      return {
        id: n,
        owner: r,
        subject: l,
        description: s,
        t: a,
        isExistingGroup: u != null ? u : !1,
        participantCount: c,
      };
    }
    var v = {
      invite: (f = o("WAWebGroupType")).ADD_REASON.INVITE,
      linked_group_join: f.ADD_REASON.LINKED_GROUP_JOIN,
      auto_add: f.ADD_REASON.AUTO_ADD,
      default_sub_group_admin_add: f.ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD,
      default_sub_group_promote: f.ADD_REASON.DEFAULT_SUBGROUP_PROMOTE,
      invite_auto_add: f.ADD_REASON.INVITE_AUTO_ADD,
      general_chat_auto_add: f.ADD_REASON.GENERAL_CHAT_AUTO_ADD,
    };
    function S(e) {
      return e === "invite"
        ? o("WAWebGroupType").ADD_REASON.INVITE
        : e === "linked_group_join"
          ? o("WAWebGroupType").ADD_REASON.LINKED_GROUP_JOIN
          : e === "auto_add"
            ? o("WAWebGroupType").ADD_REASON.AUTO_ADD
            : e === "default_sub_group_admin_add"
              ? o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD
              : e === "default_sub_group_promote"
                ? o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE
                : e === "invite_auto_add"
                  ? o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD
                  : e === "general_chat_auto_add"
                    ? o("WAWebGroupType").ADD_REASON.GENERAL_CHAT_AUTO_ADD
                    : null;
    }
    function R(e) {
      return e === "default_sub_group_demote"
        ? o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE
        : null;
    }
    function L(e) {
      return e === "integrity_delete_parent"
        ? o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
        : e === "delete_parent"
          ? o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
          : null;
    }
    var E = {
        invite_link: o("WAWebRequestMethodType").RequestMethod.InviteLink,
        linked_group_join: o("WAWebRequestMethodType").RequestMethod
          .LinkedGroupJoin,
        non_admin_add: o("WAWebRequestMethodType").RequestMethod.NonAdminAdd,
      },
      k = {
        approved: f.RevokedSubGroupSuggestionReason.APPROVED,
        rejected: f.RevokedSubGroupSuggestionReason.REJECTED,
        cancelled: f.RevokedSubGroupSuggestionReason.CANCELLED,
      };
    function I(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c,
        d = t.child("group"),
        m = t.hasAttr("type") && t.attrString("type") === "new",
        p = y(
          e,
          d,
          o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE,
        ),
        _ = g(d),
        f = h(d, m),
        C = o("WAWebGroupsQueryApi").extractLinkedParent(d),
        b = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        S = {
          subject: d.attrString("subject"),
          restrict: d.hasChild("locked"),
          announce: d.hasChild("announcement"),
          noFrequentlyForwarded: d.hasChild("no_frequently_forwarded"),
          ephemeralDuration: f ? f.ephemeralDuration : void 0,
          disappearingModeTrigger:
            f && f.disappearingModeTrigger != null
              ? f.disappearingModeTrigger
              : void 0,
          disappearingModeInitiatedByMe: f
            ? f.disappearingModeInitiatedByMe
            : void 0,
          owner: d.hasAttr("creator")
            ? o("WAWebJidToWid").userJidToUserWid(d.attrUserJid("creator"))
            : void 0,
          creatorPn: d.hasAttr("creator_pn")
            ? o("WAWebJidToWid").userJidToUserWid(d.attrUserJid("creator_pn"))
            : null,
          creatorCountryCode:
            b && d.hasAttr("creator_country_code")
              ? o("WAWebAsISOCountryCode").asISOCountryCode(
                  d.attrString("creator_country_code"),
                )
              : null,
          creatorUsername:
            b && d.hasAttr("creator_username")
              ? d.attrString("creator_username")
              : null,
          creation: d.attrTime("creation"),
          participants: p,
          desc: _ ? _.content : void 0,
          descId: _ ? _.id : void 0,
          subjectOwner: d.hasAttr("s_o")
            ? o("WAWebJidToWid").userJidToUserWid(d.attrUserJid("s_o"))
            : void 0,
          subjectOwnerPn: d.hasAttr("s_o_pn")
            ? o("WAWebJidToWid").userJidToUserWid(d.attrUserJid("s_o_pn"))
            : void 0,
          subjectOwnerUsername: b ? d.maybeAttrString("s_o_username") : void 0,
          subjectTime: (r = d.maybeAttrTime("s_t")) != null ? r : void 0,
          support: d.hasChild("support"),
          isParentGroup: d.hasChild("parent"),
          isParentGroupClosed:
            ((a = d.maybeChild("parent")) == null
              ? void 0
              : a.maybeAttrString("default_membership_approval_mode")) ===
            "request_required",
          parentGroup: C ? C.parentGroup : void 0,
          defaultSubgroup: d.hasChild("default_sub_group"),
          generalSubgroup: d.hasChild("general_chat"),
          size: (i = d.maybeAttrInt("size")) != null ? i : void 0,
          membershipApprovalMode:
            (d == null ||
            (l = d.maybeChild("membership_approval_mode")) == null ||
            (l = l.maybeChild("group_join")) == null
              ? void 0
              : l.maybeAttrString("state")) === "on",
          allowNonAdminSubGroupCreation:
            d == null
              ? void 0
              : d.hasChild("allow_non_admin_sub_group_creation"),
          generalChatAutoAddDisabled:
            (s = t.hasChild("auto_add_disabled")) != null ? s : void 0,
          hiddenSubgroup: d == null ? void 0 : d.hasChild("hidden_group"),
          groupSafetyCheck:
            d == null ? void 0 : d.hasChild("group_safety_check"),
          groupAdder: n || void 0,
          hasCapi: d == null ? void 0 : d.hasChild("capi"),
          limitSharingEnabled: o("WAWebLimitSharingGatingUtils").isOpusEnabled()
            ? !1
            : d.hasChild("limit_sharing_enabled"),
          memberLinkMode: (function (e) {
            if (
              e === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
            )
              return o("WAWebGroupMemberLinkMode").MemberLinkMode
                .ALL_MEMBER_LINK;
            if (e === o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK)
              return o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK;
          })(
            (u = d.maybeChild("member_link_mode")) == null
              ? void 0
              : u.contentString(),
          ),
          memberAddMode: o("WAWebSchemaGroupMetadata").MemberAddMode.cast(
            (c = d.maybeChild("member_add_mode")) == null
              ? void 0
              : c.contentString(),
          ),
        };
      return {
        actionType: o("WAWebHandleGroupNotificationConst")
          .GROUP_NOTIFICATION_TAG.CREATE,
        reason: t.hasAttr("reason")
          ? t.attrEnumOrNullIfUnknown("reason", v)
          : null,
        contextGroupId: t.hasAttr("context_group_jid")
          ? o("WAWebJidToWid").groupJidToWid(
              t.attrGroupJid("context_group_jid"),
            )
          : null,
        groupInfo: S,
      };
    }
    var T = new (r("WADeprecatedWapParser"))(
      "groupNotificationParser",
      function (e) {
        (e.assertTag("notification"),
          e.hasAttr("to") &&
            e.assertAttr(
              "to",
              o("WAWebUserPrefsMeUser")
                .getMeDevicePnOrThrow_DO_NOT_USE()
                .toJid(),
            ));
        var t = o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("from")),
          n = e.hasAttr("participant")
            ? o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("participant"))
            : null,
          a = null;
        try {
          var i = e.maybeAttrPhoneUserJid("participant_pn");
          a = i != null ? o("WAWebJidToWid").userJidToUserWid(i) : null;
        } catch (e) {
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Known error T150827746: ",
                "",
              ])),
            r("getErrorSafe")(e).toString(),
          );
        }
        var l = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
          s = e.attrTime("t"),
          u = e.hasAttr("addressing_mode")
            ? e.attrString("addressing_mode") === "lid"
            : !1,
          c =
            e.hasAttr("participant_username") && l
              ? e.attrString("participant_username")
              : null,
          d =
            e.hasAttr("participant_country_code") && l
              ? o("WAWebAsISOCountryCode").asISOCountryCode(
                  e.attrString("participant_country_code"),
                )
              : null;
        function p(e) {
          return {
            jid: e.hasAttr("jid")
              ? o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("jid"))
              : void 0,
          };
        }
        var _,
          f = e
            .mapChildren(function (a) {
              var i,
                c = a.tag();
              switch (c) {
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.CREATE:
                  return I(t, a, n);
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.ADD:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    participants: y(t, a, c),
                    reason: a.hasAttr("reason")
                      ? S(a.attrString("reason"))
                      : null,
                    isLidAddressingMode: u,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.DELETE:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE,
                    reason: a.hasAttr("reason")
                      ? L(a.attrString("reason"))
                      : null,
                    groupDatas: [{ id: t, subject: "" }],
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REMOVE:
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.REMOVE,
                    participants: y(t, a, c),
                    reason: a.hasAttr("reason")
                      ? R(a.attrString("reason"))
                      : null,
                    isLidAddressingMode: u,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.PROMOTE:
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.PROMOTE,
                    participants: y(t, a, c),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.DEMOTE:
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.DEMOTE,
                    participants: y(t, a, c),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE:
                  return babelHelpers.extends(
                    {
                      actionType: o("WAWebHandleGroupNotificationConst")
                        .GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE,
                      participants: y(t, a, c),
                    },
                    p(a),
                  );
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE:
                  return babelHelpers.extends(
                    {
                      actionType: o("WAWebHandleGroupNotificationConst")
                        .GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE,
                      participants: y(t, a, c),
                    },
                    p(a),
                  );
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MODIFY:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.MODIFY,
                    participants: y(t, a, c),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.SUBJECT:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.SUBJECT,
                    subject: a.attrString("subject"),
                    s_o: a.hasAttr("s_o")
                      ? o("WAWebJidToWid").userJidToUserWid(
                          a.attrUserJid("s_o"),
                        )
                      : null,
                    subjectOwnerPn: a.hasAttr("s_o_pn")
                      ? o("WAWebJidToWid").userJidToUserWid(
                          a.attrUserJid("s_o_pn"),
                        )
                      : null,
                    subjectOwnerUsername: a.maybeAttrString("s_o_username"),
                    s_t: a.maybeAttrTime("s_t"),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.DESC:
                  return a.hasChild("delete")
                    ? {
                        actionType:
                          o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE,
                        descId: a.attrString("id"),
                      }
                    : {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD,
                        descId: a.attrString("id"),
                        desc: a.hasChild("body")
                          ? a.child("body").contentString()
                          : null,
                        descTime: s,
                      };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.SUSPENDED:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND,
                    value: !0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.UNSUSPENDED:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND,
                    value: !1,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.LOCKED:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.RESTRICT,
                    value: !0,
                    threshold:
                      (i = a.maybeAttrString("threshold")) != null ? i : void 0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.UNLOCKED:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.RESTRICT,
                    value: !1,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.ANNOUNCE:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE,
                    value: !0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.NOT_ANNOUNCE:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE,
                    value: !1,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.NO_FREQUENTLY_FORWARDED:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD,
                    value: !0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.FREQUENTLY_FORWARDED_OK:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD,
                    value: !1,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.INVITE:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE,
                    code: a.attrString("code"),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.EPHEMERAL:
                  return o("WAWebABProps").getABPropConfigValue(
                    "dm_initiator_trigger_groups",
                  )
                    ? {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                        duration: a.attrInt("expiration"),
                        trigger: a.hasAttr("trigger")
                          ? a.attrInt("trigger")
                          : void 0,
                        initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(n),
                      }
                    : {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                        duration: a.attrInt("expiration"),
                      };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.NOT_EPHEMERAL:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                    duration: 0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REVOKE_INVITE:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE,
                    participants: a.mapChildrenWithTag(
                      "participant",
                      function (e) {
                        return {
                          id: o("WAWebJidToWid").userJidToUserWid(
                            e.attrUserJid("jid"),
                          ),
                          expiration: e.attrInt("expiration"),
                        };
                      },
                    ),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.GROWTH_UNLOCKED:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.GROWTH_LOCKED:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED,
                    expiration: a.attrInt("expiration"),
                    type: a.attrString("type"),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.LINK: {
                  var d = a.attrString("link_type"),
                    m = {
                      sub_group:
                        o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK,
                      parent_group:
                        o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK,
                      sibling_group:
                        o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK,
                    };
                  return {
                    actionType: m[d],
                    groupDatas: a.mapChildrenWithTag("group", function (e) {
                      return {
                        id: o("WAWebJidToWid").groupJidToWid(
                          e.attrGroupJid("jid"),
                        ),
                        subject: e.attrString("subject"),
                        subjectTime: e.attrInt("s_t"),
                        hiddenSubgroup:
                          d !== "parent_group"
                            ? e.hasChild("hidden_group")
                            : void 0,
                      };
                    }),
                  };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.UNLINK: {
                  var f = a.attrString("unlink_type"),
                    g = a.hasAttr("unlink_reason")
                      ? a.attrString("unlink_reason")
                      : null,
                    h = a.mapChildrenWithTag("group", function (e) {
                      return {
                        id: o("WAWebJidToWid").groupJidToWid(
                          e.attrGroupJid("jid"),
                        ),
                        subject: e.attrString("subject"),
                        subjectTime: e.attrInt("s_t"),
                      };
                    });
                  if (f === "parent_group") {
                    if (g === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT)
                      return {
                        actionType:
                          o("WAWebGroupType").GROUP_ACTIONS
                            .DELETE_PARENT_GROUP_UNLINK,
                        groupDatas: h,
                      };
                    if (
                      g ===
                      o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
                    )
                      return {
                        actionType:
                          o("WAWebGroupType").GROUP_ACTIONS
                            .INTEGRITY_PARENT_GROUP_UNLINK,
                        groupDatas: h,
                      };
                  } else if (f === "sub_group") {
                    if (g === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT)
                      return {
                        actionType:
                          o("WAWebGroupType").GROUP_ACTIONS
                            .DELETE_PARENT_GROUP_UNLINK,
                        groupDatas: h,
                      };
                    if (
                      g ===
                      o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
                    )
                      return {
                        actionType:
                          o("WAWebGroupType").GROUP_ACTIONS
                            .INTEGRITY_SUB_GROUP_UNLINK,
                        groupDatas: h,
                      };
                  }
                  var C = {
                    sub_group:
                      o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK,
                    parent_group:
                      o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK,
                    sibling_group:
                      o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK,
                  };
                  return { actionType: C[f], groupDatas: h };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MEMBERSHIP_APPROVAL_MODE: {
                  var v;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .MEMBERSHIP_APPROVAL_MODE,
                    value:
                      ((v = a.child("group_join")) == null
                        ? void 0
                        : v.attrString("state")) === "on",
                    triggered: a.hasAttr("triggered")
                      ? a.attrString("triggered")
                      : void 0,
                  };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MEMBERSHIP_APPROVAL_REQUEST: {
                  var T;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .MEMBERSHIP_APPROVAL_REQUEST,
                    requestMethod:
                      (T = E[a.attrString("request_method")]) != null
                        ? T
                        : o("WAWebRequestMethodType").RequestMethod.InviteLink,
                    parentGroupId: a.hasAttr("parent_group_jid")
                      ? o("WAWebJidToWid").groupJidToWid(
                          a.attrGroupJid("parent_group_jid"),
                        )
                      : void 0,
                  };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.ALLOW_ADMIN_REPORTS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS,
                    shouldSkipGenMsg: !o("WAWebABProps").getABPropConfigValue(
                      "report_to_admin_kill_switch",
                    ),
                    value: !0,
                    author: n,
                    triggered: a.hasAttr("triggered")
                      ? a.attrString("triggered")
                      : void 0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.NOT_ALLOW_ADMIN_REPORTS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS,
                    shouldSkipGenMsg: !o("WAWebABProps").getABPropConfigValue(
                      "report_to_admin_kill_switch",
                    ),
                    value: !1,
                    author: n,
                    triggered: a.hasAttr("triggered")
                      ? a.attrString("triggered")
                      : void 0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REPORTS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECIEVED,
                    shouldSkipGenMsg: !0,
                    value: s,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.CREATED_MEMBERSHIP_REQUESTS: {
                  var D;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .CREATED_MEMBERSHIP_REQUESTS,
                    requestMethod:
                      (D = E[a.attrString("request_method")]) != null
                        ? D
                        : o("WAWebRequestMethodType").RequestMethod.InviteLink,
                    parentGroupId: a.hasAttr("parent_group_jid")
                      ? o("WAWebJidToWid").groupJidToWid(
                          a.attrGroupJid("parent_group_jid"),
                        )
                      : void 0,
                    requests: a.hasChildren()
                      ? a.mapChildrenWithTag("requested_user", function (e) {
                          return {
                            wid: o("WAWebJidToWid").userJidToUserWid(
                              e.attrUserJid("jid"),
                            ),
                            username:
                              l && e.hasAttr("username")
                                ? e.attrString("username")
                                : void 0,
                            phoneNumber: e.hasAttr("phone_number")
                              ? o("WAWebJidToWid").userJidToUserWid(
                                  e.attrUserJid("phone_number"),
                                )
                              : void 0,
                          };
                        })
                      : [{ wid: r("WANullthrows")(n) }],
                    skipGenMsg:
                      a.maybeAttrString("suppress_sys_msg") === "true",
                  };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REVOKED_MEMBERSHIP_REQUESTS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .REVOKED_MEMBERSHIP_REQUESTS,
                    requests: a.mapChildrenWithTag("participant", function (e) {
                      return o("WAWebJidToWid").userJidToUserWid(
                        e.attrUserJid("jid"),
                      );
                    }),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                    value: !0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG
                  .NOT_ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                    value: !1,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.CREATED_SUBGROUP_SUGGESTION:
                  return babelHelpers.extends(
                    {
                      actionType:
                        o("WAWebGroupType").GROUP_ACTIONS
                          .CREATED_SUBGROUP_SUGGESTION,
                      parentGroupId: t,
                    },
                    b(a),
                  );
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REVOKED_SUB_GROUP_SUGGESTIONS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .REVOKED_SUB_GROUP_SUGGESTIONS,
                    parentGroupId: t,
                    subgroupSuggestions: a.mapChildrenWithTag(
                      "sub_group_suggestion",
                      function (e) {
                        return {
                          id: o("WAWebJidToWid").groupJidToWid(
                            e.attrGroupJid("jid"),
                          ),
                          owner: o("WAWebJidToWid").userJidToUserWid(
                            e.attrUserJid("creator"),
                          ),
                          reason: e.hasAttr("reason")
                            ? k[e.attrString("reason")]
                            : void 0,
                        };
                      },
                    ),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.CHANGE_NUMBER:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .SUBGROUP_SUGGESTIONS_CHANGE_NUMBER,
                    subgroupSuggestions: a.mapChildrenWithTag(
                      "sub_group_suggestion",
                      function (e) {
                        return o("WAWebJidToWid").groupJidToWid(
                          e.attrGroupJid("jid"),
                        );
                      },
                    ),
                    parentGroupId: t,
                    oldOwner: o("WAWebJidToWid").userJidToUserWid(
                      e.attrUserJid("participant"),
                    ),
                    newOwner: o("WAWebJidToWid").userJidToUserWid(
                      a.attrUserJid("jid"),
                    ),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MEMBER_ADD_MODE:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE,
                    memberAddMode: o(
                      "WAWebSchemaGroupMetadata",
                    ).MemberAddMode.cast(a.contentString()),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.AUTO_ADD_DISABLED:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .GENERAL_CHAT_AUTO_ADD_DISABLED,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.GROUP_SAFETY_CHECK:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK,
                    value: !0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MISSING_PARTICIPANT_IDENTIFICATION: {
                  _ = !0;
                  return;
                }
                default:
                  throw e.createParseError("Unrecognized group action " + c);
              }
            })
            .filter(Boolean);
        return {
          externalId: e.attrString("id"),
          chatId: t,
          isLidAddressingMode: u,
          author: n,
          authorPhoneNumber: a,
          authorUsername: c,
          authorUsernameCountryCode: d,
          ts: e.attrTime("t"),
          pushname: e.maybeAttrString("notify"),
          offline: e.maybeAttrString("offline"),
          actions: f,
          hasIncompleteParticipantInformation: l && _ === !0,
        };
      },
    );
    function D(e) {
      var t = e.content;
      if (t != null && Array.isArray(t) && t.length > 0) {
        var r = t[0],
          a = r.tag;
        if (a === "groups_dirty")
          return (_ || (_ = n("Promise"))).resolve(
            o(
              "WAWebHandleGroupsDirtyNotification",
            ).handleGroupsDirtyNotificationJob(e),
          );
      }
      var i = T.parse(e);
      return i.error
        ? (o("WALogger").ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            i.error.toString(),
          ),
          (_ || (_ = n("Promise"))).reject(i.error))
        : x(i.success);
    }
    function x(e) {
      var t =
        !!e.offline &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      return o(
        "WAWebHandleGroupNotificationV2",
      ).isGroupNotificationOptimizationEligible(e, t) && t
        ? o("WAWebHandleGroupNotificationV2").handleGroupNotificationV2(e, t)
        : o("WAWebMessageQueue").onMessageQueue({
            chatWid: e.chatId,
            isOffline: t,
            msgCategory: null,
            action: (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return (
                    yield (_ || (_ = n("Promise"))).all(
                      e.actions.map(function (n) {
                        return o(
                          "WAWebHandleGroupNotificationAction",
                        ).handleAction(e, n, t);
                      }),
                    ),
                    o("WAWap").wap("ack", {
                      to: o("WAWebCommsWapMd").GROUP_JID(e.chatId),
                      id: o("WAWap").CUSTOM_STRING(e.externalId),
                      class: "notification",
                      type: "w:gp2",
                      participant: e.author
                        ? o("WAWebCommsWapMd").USER_JID(e.author)
                        : o("WAWap").DROP_ATTR,
                    })
                  );
                },
              );
              function a() {
                return r.apply(this, arguments);
              }
              return a;
            })(),
          });
    }
    ((l.handleGroupNotification = D), (l.handleParsedGroupNotification = x));
  },
  98,
);
