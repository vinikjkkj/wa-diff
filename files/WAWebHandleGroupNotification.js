__d(
  "WAWebHandleGroupNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebAsISOCountryCode",
    "WAWebCommsWapMd",
    "WAWebCurrentUser",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebGroupApiConst",
    "WAWebGroupHistoryPostJoinTypes.flow",
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
    "isStringNullOrEmpty",
    "nullthrows",
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
            joinTime: t.maybeAttrTime("join_time"),
            groupHistorySentState: o(
              "WAWebGroupHistoryPostJoinTypes.flow",
            ).parseGroupHistorySentState(
              t.maybeAttrString("group_history_sent_state"),
            ),
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
        : e === "accept"
          ? o("WAWebGroupType").ADD_REASON.ACCEPT
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
    function I(e) {
      var t = e.attrString("unlink_type"),
        n = e.hasAttr("unlink_reason") ? e.attrString("unlink_reason") : null,
        r = e.mapChildrenWithTag("group", function (e) {
          return {
            id: o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("jid")),
            subject: e.attrString("subject"),
            subjectTime: e.attrInt("s_t"),
          };
        });
      if (t === "parent_group") {
        if (n === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT)
          return {
            actionType:
              o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK,
            groupDatas: r,
          };
        if (n === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT)
          return {
            actionType:
              o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK,
            groupDatas: r,
          };
      } else if (t === "sub_group") {
        if (n === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT)
          return {
            actionType:
              o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK,
            groupDatas: r,
          };
        if (n === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT)
          return {
            actionType:
              o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_SUB_GROUP_UNLINK,
            groupDatas: r,
          };
      }
      var a = {
        sub_group: o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK,
        parent_group: o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK,
        sibling_group: o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK,
      };
      return { actionType: a[t], groupDatas: r };
    }
    function T(e, t, n) {
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
    var D = new (r("WADeprecatedWapParser"))(
      "groupNotificationParser",
      function (e) {
        if ((e.assertTag("notification"), e.hasAttr("to"))) {
          var t,
            n = e.attrString("to"),
            a = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().toJid(),
            i =
              (t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) == null
                ? void 0
                : t.toJid(),
            l = n === a,
            s = !r("isStringNullOrEmpty")(i) && n === i;
          !l &&
            !s &&
            e.throw(
              'to have "to" matching meLid ("' +
                a +
                '") or mePn ("' +
                (i != null ? i : "") +
                '"), but instead has "' +
                n +
                '"',
            );
        }
        var u = o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("from")),
          c = e.hasAttr("participant")
            ? o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("participant"))
            : null,
          d = null;
        try {
          var p = e.maybeAttrPhoneUserJid("participant_pn");
          d = p != null ? o("WAWebJidToWid").userJidToUserWid(p) : null;
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
        var _ = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
          f = e.attrTime("t"),
          g = e.hasAttr("addressing_mode")
            ? e.attrString("addressing_mode") === "lid"
            : !1,
          h =
            e.hasAttr("participant_username") && _
              ? e.attrString("participant_username")
              : null,
          C =
            e.hasAttr("participant_country_code") && _
              ? o("WAWebAsISOCountryCode").asISOCountryCode(
                  e.attrString("participant_country_code"),
                )
              : null;
        function v(e) {
          return {
            jid: e.hasAttr("jid")
              ? o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("jid"))
              : void 0,
          };
        }
        var D,
          x = e
            .mapChildren(function (t) {
              var n,
                a = t.tag();
              switch (a) {
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.CREATE:
                  return T(u, t, c);
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.ADD:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    participants: y(u, t, a),
                    reason: t.hasAttr("reason")
                      ? S(t.attrString("reason"))
                      : null,
                    isLidAddressingMode: g,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.DELETE:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE,
                    reason: t.hasAttr("reason")
                      ? L(t.attrString("reason"))
                      : null,
                    groupDatas: [{ id: u, subject: "" }],
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REMOVE:
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.REMOVE,
                    participants: y(u, t, a),
                    reason: t.hasAttr("reason")
                      ? R(t.attrString("reason"))
                      : null,
                    isLidAddressingMode: g,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.PROMOTE:
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.PROMOTE,
                    participants: y(u, t, a),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.DEMOTE:
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.DEMOTE,
                    participants: y(u, t, a),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE:
                  return babelHelpers.extends(
                    {
                      actionType: o("WAWebHandleGroupNotificationConst")
                        .GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE,
                      participants: y(u, t, a),
                    },
                    v(t),
                  );
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE:
                  return babelHelpers.extends(
                    {
                      actionType: o("WAWebHandleGroupNotificationConst")
                        .GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE,
                      participants: y(u, t, a),
                    },
                    v(t),
                  );
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MODIFY:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.MODIFY,
                    participants: y(u, t, a),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.SUBJECT:
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.SUBJECT,
                    subject: t.attrString("subject"),
                    s_o: t.hasAttr("s_o")
                      ? o("WAWebJidToWid").userJidToUserWid(
                          t.attrUserJid("s_o"),
                        )
                      : null,
                    subjectOwnerPn: t.hasAttr("s_o_pn")
                      ? o("WAWebJidToWid").userJidToUserWid(
                          t.attrUserJid("s_o_pn"),
                        )
                      : null,
                    subjectOwnerUsername: t.maybeAttrString("s_o_username"),
                    s_t: t.maybeAttrTime("s_t"),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.DESC:
                  return t.hasChild("delete")
                    ? {
                        actionType:
                          o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE,
                        descId: t.attrString("id"),
                      }
                    : {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD,
                        descId: t.attrString("id"),
                        desc: t.hasChild("body")
                          ? t.child("body").contentString()
                          : null,
                        descTime: f,
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
                      (n = t.maybeAttrString("threshold")) != null ? n : void 0,
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
                    code: t.attrString("code"),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.EPHEMERAL:
                  return o("WAWebABProps").getABPropConfigValue(
                    "dm_initiator_trigger_groups",
                  )
                    ? {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                        duration: t.attrInt("expiration"),
                        trigger: t.hasAttr("trigger")
                          ? t.attrInt("trigger")
                          : void 0,
                        initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(c),
                      }
                    : {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                        duration: t.attrInt("expiration"),
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
                    participants: t.mapChildrenWithTag(
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
                    expiration: t.attrInt("expiration"),
                    type: t.attrString("type"),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.LINK: {
                  var i = t.attrString("link_type"),
                    l = {
                      sub_group:
                        o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK,
                      parent_group:
                        o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK,
                      sibling_group:
                        o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK,
                    };
                  return {
                    actionType: l[i],
                    groupDatas: t.mapChildrenWithTag("group", function (e) {
                      return {
                        id: o("WAWebJidToWid").groupJidToWid(
                          e.attrGroupJid("jid"),
                        ),
                        subject: e.attrString("subject"),
                        subjectTime: e.attrInt("s_t"),
                        hiddenSubgroup:
                          i !== "parent_group"
                            ? e.hasChild("hidden_group")
                            : void 0,
                      };
                    }),
                  };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.UNLINK:
                  return I(t);
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MEMBERSHIP_APPROVAL_MODE: {
                  var s;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .MEMBERSHIP_APPROVAL_MODE,
                    value:
                      ((s = t.child("group_join")) == null
                        ? void 0
                        : s.attrString("state")) === "on",
                    triggered: t.hasAttr("triggered")
                      ? t.attrString("triggered")
                      : void 0,
                  };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MEMBERSHIP_APPROVAL_REQUEST: {
                  var d;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .MEMBERSHIP_APPROVAL_REQUEST,
                    requestMethod:
                      (d = E[t.attrString("request_method")]) != null
                        ? d
                        : o("WAWebRequestMethodType").RequestMethod.InviteLink,
                    parentGroupId: t.hasAttr("parent_group_jid")
                      ? o("WAWebJidToWid").groupJidToWid(
                          t.attrGroupJid("parent_group_jid"),
                        )
                      : void 0,
                  };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.ALLOW_ADMIN_REPORTS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS,
                    shouldSkipGenMsg: !1,
                    value: !0,
                    author: c,
                    triggered: t.hasAttr("triggered")
                      ? t.attrString("triggered")
                      : void 0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.NOT_ALLOW_ADMIN_REPORTS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS,
                    shouldSkipGenMsg: !1,
                    value: !1,
                    author: c,
                    triggered: t.hasAttr("triggered")
                      ? t.attrString("triggered")
                      : void 0,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REPORTS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED,
                    shouldSkipGenMsg: !0,
                    value: f,
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.CREATED_MEMBERSHIP_REQUESTS: {
                  var m;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .CREATED_MEMBERSHIP_REQUESTS,
                    requestMethod:
                      (m = E[t.attrString("request_method")]) != null
                        ? m
                        : o("WAWebRequestMethodType").RequestMethod.InviteLink,
                    parentGroupId: t.hasAttr("parent_group_jid")
                      ? o("WAWebJidToWid").groupJidToWid(
                          t.attrGroupJid("parent_group_jid"),
                        )
                      : void 0,
                    requests: t.hasChildren()
                      ? t.mapChildrenWithTag("requested_user", function (e) {
                          return {
                            wid: o("WAWebJidToWid").userJidToUserWid(
                              e.attrUserJid("jid"),
                            ),
                            username:
                              _ && e.hasAttr("username")
                                ? e.attrString("username")
                                : void 0,
                            phoneNumber: e.hasAttr("phone_number")
                              ? o("WAWebJidToWid").userJidToUserWid(
                                  e.attrUserJid("phone_number"),
                                )
                              : void 0,
                          };
                        })
                      : [{ wid: r("nullthrows")(c) }],
                    skipGenMsg:
                      t.maybeAttrString("suppress_sys_msg") === "true",
                  };
                }
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REVOKED_MEMBERSHIP_REQUESTS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .REVOKED_MEMBERSHIP_REQUESTS,
                    requests: t.mapChildrenWithTag("participant", function (e) {
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
                      parentGroupId: u,
                    },
                    b(t),
                  );
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REVOKED_SUB_GROUP_SUGGESTIONS:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .REVOKED_SUB_GROUP_SUGGESTIONS,
                    parentGroupId: u,
                    subgroupSuggestions: t.mapChildrenWithTag(
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
                    subgroupSuggestions: t.mapChildrenWithTag(
                      "sub_group_suggestion",
                      function (e) {
                        return o("WAWebJidToWid").groupJidToWid(
                          e.attrGroupJid("jid"),
                        );
                      },
                    ),
                    parentGroupId: u,
                    oldOwner: o("WAWebJidToWid").userJidToUserWid(
                      e.attrUserJid("participant"),
                    ),
                    newOwner: o("WAWebJidToWid").userJidToUserWid(
                      t.attrUserJid("jid"),
                    ),
                  };
                case o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.MEMBER_ADD_MODE:
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE,
                    memberAddMode: o(
                      "WAWebSchemaGroupMetadata",
                    ).MemberAddMode.cast(t.contentString()),
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
                  D = !0;
                  return;
                }
                default:
                  throw e.createParseError("Unrecognized group action " + a);
              }
            })
            .filter(Boolean);
        return {
          externalId: e.attrString("id"),
          chatId: u,
          isLidAddressingMode: g,
          author: c,
          authorPhoneNumber: d,
          authorUsername: h,
          authorUsernameCountryCode: C,
          ts: e.attrTime("t"),
          pushname: e.maybeAttrString("notify"),
          offline: e.maybeAttrString("offline"),
          actions: x,
          hasIncompleteParticipantInformation: _ && D === !0,
        };
      },
    );
    function x(e) {
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
      var i = D.parse(e);
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
        : $(i.success);
    }
    function $(e) {
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
                        ).handleAction({ action: n, isOffline: t, meta: e });
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
    ((l.handleGroupNotification = x), (l.handleParsedGroupNotification = $));
  },
  98,
);
