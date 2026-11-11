__d(
  "WAWebHandleGroupNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebAsISOCountryCode",
    "WAWebCurrentUser",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebGroupApiConst",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupReactionSettings",
    "WAWebGroupType",
    "WAWebGroupsQueryApi",
    "WAWebHandleGroupNotificationConst",
    "WAWebHandleGroupsDirtyNotification",
    "WAWebHandleParsedGroupNotification",
    "WAWebJidToWid",
    "WAWebLimitSharingGatingUtils",
    "WAWebRequestMethodType",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
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
    function C(e, t) {
      var n = e.hasAttr("creator")
        ? o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("creator"))
        : null;
      if (e.hasChild("ephemeral")) {
        var r = e.child("ephemeral");
        if (r.hasAttr("expiration")) {
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
    function b(e, t, n) {
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
              "WAWebGroupHistoryPostJoinTypes",
            ).parseGroupHistorySentState(
              t.maybeAttrString("group_history_sent_state"),
            ),
          },
          u =
            n ===
            o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
              .REMOVE;
        return (u || v(e, s, n), s);
      });
    }
    function v(t, n, r) {
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
    function S(e) {
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
    var R = {
      invite: (h = o("WAWebGroupType")).ADD_REASON.INVITE,
      linked_group_join: h.ADD_REASON.LINKED_GROUP_JOIN,
      auto_add: h.ADD_REASON.AUTO_ADD,
      default_sub_group_admin_add: h.ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD,
      default_sub_group_promote: h.ADD_REASON.DEFAULT_SUBGROUP_PROMOTE,
      invite_auto_add: h.ADD_REASON.INVITE_AUTO_ADD,
      general_chat_auto_add: h.ADD_REASON.GENERAL_CHAT_AUTO_ADD,
    };
    function L(e) {
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
    function E(e) {
      return e === "default_sub_group_demote"
        ? o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE
        : null;
    }
    function k(e) {
      return e === "integrity_delete_parent"
        ? o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
        : e === "delete_parent"
          ? o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
          : null;
    }
    var I = {
        invite_link: o("WAWebRequestMethodType").RequestMethod.InviteLink,
        linked_group_join: o("WAWebRequestMethodType").RequestMethod
          .LinkedGroupJoin,
        non_admin_add: o("WAWebRequestMethodType").RequestMethod.NonAdminAdd,
      },
      T = {
        approved: h.RevokedSubGroupSuggestionReason.APPROVED,
        rejected: h.RevokedSubGroupSuggestionReason.REJECTED,
        cancelled: h.RevokedSubGroupSuggestionReason.CANCELLED,
      };
    function D(e) {
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
        },
        i = a[t];
      return i == null
        ? (o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Unrecognized unlink_type: ",
                  "",
                ])),
              t,
            )
            .sendLogs("group-unrecognized-unlink-type"),
          null)
        : { actionType: i, groupDatas: r };
    }
    function x(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = t.child("group"),
        _ = t.hasAttr("type") && t.attrString("type") === "new",
        f = b(
          e,
          p,
          o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE,
        ),
        g = y(p),
        h = C(p, _),
        v = o("WAWebGroupsQueryApi").extractLinkedParent(p),
        S = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
        L = {
          subject: p.attrString("subject"),
          restrict: p.hasChild("locked"),
          announce: p.hasChild("announcement"),
          noFrequentlyForwarded: p.hasChild("no_frequently_forwarded"),
          ephemeralDuration: h ? h.ephemeralDuration : void 0,
          disappearingModeTrigger:
            h && h.disappearingModeTrigger != null
              ? h.disappearingModeTrigger
              : void 0,
          disappearingModeInitiatedByMe: h
            ? h.disappearingModeInitiatedByMe
            : void 0,
          owner: p.hasAttr("creator")
            ? o("WAWebJidToWid").userJidToUserWid(p.attrUserJid("creator"))
            : void 0,
          creatorPn: p.hasAttr("creator_pn")
            ? o("WAWebJidToWid").userJidToUserWid(p.attrUserJid("creator_pn"))
            : null,
          creatorCountryCode:
            S && p.hasAttr("creator_country_code")
              ? o("WAWebAsISOCountryCode").asISOCountryCode(
                  p.attrString("creator_country_code"),
                )
              : null,
          creatorUsername:
            S && p.hasAttr("creator_username")
              ? p.attrString("creator_username")
              : null,
          creation: p.attrTime("creation"),
          participants: f,
          desc: g ? g.content : void 0,
          descId: g ? g.id : void 0,
          subjectOwner: p.hasAttr("s_o")
            ? o("WAWebJidToWid").userJidToUserWid(p.attrUserJid("s_o"))
            : void 0,
          subjectOwnerPn: p.hasAttr("s_o_pn")
            ? o("WAWebJidToWid").userJidToUserWid(p.attrUserJid("s_o_pn"))
            : void 0,
          subjectOwnerUsername: S ? p.maybeAttrString("s_o_username") : void 0,
          subjectTime: (a = p.maybeAttrTime("s_t")) != null ? a : void 0,
          support: p.hasChild("support"),
          isParentGroup: p.hasChild("parent"),
          isParentGroupClosed:
            ((i = p.maybeChild("parent")) == null
              ? void 0
              : i.maybeAttrString("default_membership_approval_mode")) ===
            "request_required",
          parentGroup: v ? v.parentGroup : void 0,
          defaultSubgroup: p.hasChild("default_sub_group"),
          generalSubgroup: p.hasChild("general_chat"),
          size: (l = p.maybeAttrInt("size")) != null ? l : void 0,
          membershipApprovalMode:
            (p == null ||
            (s = p.maybeChild("membership_approval_mode")) == null ||
            (s = s.maybeChild("group_join")) == null
              ? void 0
              : s.maybeAttrString("state")) === "on",
          allowNonAdminSubGroupCreation:
            p == null
              ? void 0
              : p.hasChild("allow_non_admin_sub_group_creation"),
          generalChatAutoAddDisabled:
            (u = t.hasChild("auto_add_disabled")) != null ? u : void 0,
          hiddenSubgroup: p == null ? void 0 : p.hasChild("hidden_group"),
          groupSafetyCheck:
            p == null ? void 0 : p.hasChild("group_safety_check"),
          groupAdder: n || void 0,
          hasCapi: p == null ? void 0 : p.hasChild("capi"),
          limitSharingEnabled: o("WAWebLimitSharingGatingUtils").isOpusEnabled()
            ? !1
            : p.hasChild("limit_sharing_enabled"),
          memberLinkMode: (function (e) {
            if (
              e === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK
            )
              return o("WAWebGroupMemberLinkMode").MemberLinkMode
                .ALL_MEMBER_LINK;
            if (e === o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK)
              return o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK;
          })(
            (c = p.maybeChild("member_link_mode")) == null
              ? void 0
              : c.contentString(),
          ),
          groupReactionSettings:
            r("justknobx")._("7606") && p.hasChild("group_reaction_settings")
              ? o("WAWebGroupReactionSettings").parseGroupReactionSettings(
                  p.child("group_reaction_settings"),
                )
              : void 0,
          memberAddMode: o("WAWebSchemaGroupMetadata").MemberAddMode.cast(
            (d = p.maybeChild("member_add_mode")) == null
              ? void 0
              : d.contentString(),
          ),
          memberShareGroupHistoryMode: o(
            "WAWebGroupHistoryShareMode",
          ).MemberShareGroupHistoryMode.cast(
            (m = p.maybeChild("member_share_group_history_mode")) == null
              ? void 0
              : m.contentString(),
          ),
        };
      return {
        actionType: o("WAWebHandleGroupNotificationConst")
          .GROUP_NOTIFICATION_TAG.CREATE,
        reason: t.hasAttr("reason")
          ? t.attrEnumOrNullIfUnknown("reason", R)
          : null,
        contextGroupId: t.hasAttr("context_group_jid")
          ? o("WAWebJidToWid").groupJidToWid(
              t.attrGroupJid("context_group_jid"),
            )
          : null,
        groupInfo: L,
        isNewGroup: _,
      };
    }
    var $ = Object.keys(
      o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG,
    ).map(function (e) {
      return o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG[e];
    });
    function P(e) {
      return $.find(function (t) {
        return t === e;
      });
    }
    var N = new (r("WADeprecatedWapParser"))(
      "groupNotificationParser",
      function (e) {
        if ((e.assertTag("notification"), e.hasAttr("to"))) {
          var t,
            n = e.attrString("to"),
            a = o("WAWebUserUtils").getMeDeviceLidOrThrow().toJid(),
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
          var m = e.maybeAttrPhoneUserJid("participant_pn");
          d = m != null ? o("WAWebJidToWid").userJidToUserWid(m) : null;
        } catch (e) {
          o("WALogger").ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Known error T150827746: ",
                "",
              ])),
            r("getErrorSafe")(e).toString(),
          );
        }
        var f = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
          g = e.attrTime("t"),
          h = e.hasAttr("addressing_mode")
            ? e.attrString("addressing_mode") === "lid"
            : !1,
          y =
            e.hasAttr("participant_username") && f
              ? e.attrString("participant_username")
              : null,
          C =
            e.hasAttr("participant_country_code") && f
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
        var R,
          $ = e
            .mapChildren(function (t) {
              var n = P(t.tag());
              if (n == null)
                throw e.createParseError(
                  "Unrecognized group action " + t.tag(),
                );
              e: {
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .CREATE
                )
                  return x(u, t, c);
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .ADD
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    participants: b(u, t, n),
                    reason: t.hasAttr("reason")
                      ? L(t.attrString("reason"))
                      : null,
                    isLidAddressingMode: h,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .DELETE
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.DELETE,
                    reason: t.hasAttr("reason")
                      ? k(t.attrString("reason"))
                      : null,
                    groupDatas: [{ id: u, subject: "" }],
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .REMOVE
                )
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.REMOVE,
                    participants: b(u, t, n),
                    reason: t.hasAttr("reason")
                      ? E(t.attrString("reason"))
                      : null,
                    isLidAddressingMode: h,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .PROMOTE
                )
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.PROMOTE,
                    participants: b(u, t, n),
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .DEMOTE
                )
                  return {
                    actionType: o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.DEMOTE,
                    participants: b(u, t, n),
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .LINKED_GROUP_PROMOTE
                )
                  return babelHelpers.extends(
                    {
                      actionType: o("WAWebHandleGroupNotificationConst")
                        .GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE,
                      participants: b(u, t, n),
                    },
                    v(t),
                  );
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .LINKED_GROUP_DEMOTE
                )
                  return babelHelpers.extends(
                    {
                      actionType: o("WAWebHandleGroupNotificationConst")
                        .GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE,
                      participants: b(u, t, n),
                    },
                    v(t),
                  );
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .MODIFY
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.MODIFY,
                    participants: b(u, t, n),
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .SUBJECT
                )
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
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .DESC
                )
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
                        descTime: g,
                      };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .SUSPENDED
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND,
                    value: !0,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .UNSUSPENDED
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND,
                    value: !1,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .LOCKED
                ) {
                  var a;
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.RESTRICT,
                    value: !0,
                    threshold:
                      (a = t.maybeAttrString("threshold")) != null ? a : void 0,
                  };
                }
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .UNLOCKED
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.RESTRICT,
                    value: !1,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .ANNOUNCE
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE,
                    value: !0,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .NOT_ANNOUNCE
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE,
                    value: !1,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .NO_FREQUENTLY_FORWARDED
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD,
                    value: !0,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .FREQUENTLY_FORWARDED_OK
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD,
                    value: !1,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .INVITE
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE,
                    code: t.attrString("code"),
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .EPHEMERAL
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                    duration: t.attrInt("expiration"),
                    trigger: t.hasAttr("trigger")
                      ? t.attrInt("trigger")
                      : void 0,
                    initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(c),
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .NOT_EPHEMERAL
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL,
                    duration: 0,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .REVOKE_INVITE
                )
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
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .GROWTH_UNLOCKED
                )
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .GROWTH_LOCKED
                )
                  return {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED,
                    expiration: t.attrInt("expiration"),
                    type: t.attrString("type"),
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .LINK
                ) {
                  var i = t.attrString("link_type"),
                    l = {
                      sub_group:
                        o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK,
                      parent_group:
                        o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK,
                      sibling_group:
                        o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK,
                    },
                    s = l[i];
                  return s == null
                    ? (o("WALogger")
                        .WARN(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "Unrecognized link_type: ",
                              "",
                            ])),
                          i,
                        )
                        .sendLogs("group-unrecognized-link-type"),
                      null)
                    : {
                        actionType: s,
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
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .UNLINK
                )
                  return D(t);
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .MEMBERSHIP_APPROVAL_MODE
                ) {
                  var d;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .MEMBERSHIP_APPROVAL_MODE,
                    value:
                      ((d = t.child("group_join")) == null
                        ? void 0
                        : d.attrString("state")) === "on",
                    triggered: t.hasAttr("triggered")
                      ? t.attrString("triggered")
                      : void 0,
                  };
                }
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .MEMBERSHIP_APPROVAL_REQUEST
                ) {
                  var m;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .MEMBERSHIP_APPROVAL_REQUEST,
                    requestMethod:
                      (m = I[t.attrString("request_method")]) != null
                        ? m
                        : o("WAWebRequestMethodType").RequestMethod.InviteLink,
                    parentGroupId: t.hasAttr("parent_group_jid")
                      ? o("WAWebJidToWid").groupJidToWid(
                          t.attrGroupJid("parent_group_jid"),
                        )
                      : void 0,
                  };
                }
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .ALLOW_ADMIN_REPORTS
                )
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
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .NOT_ALLOW_ADMIN_REPORTS
                )
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
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .REPORTS
                )
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED,
                    shouldSkipGenMsg: !0,
                    value: g,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .CREATED_MEMBERSHIP_REQUESTS
                ) {
                  var p;
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .CREATED_MEMBERSHIP_REQUESTS,
                    requestMethod:
                      (p = I[t.attrString("request_method")]) != null
                        ? p
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
                              f && e.hasAttr("username")
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
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .REVOKED_MEMBERSHIP_REQUESTS
                )
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
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                )
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                    value: !0,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .NOT_ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                )
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                    value: !1,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .CREATED_SUBGROUP_SUGGESTION
                )
                  return babelHelpers.extends(
                    {
                      actionType:
                        o("WAWebGroupType").GROUP_ACTIONS
                          .CREATED_SUBGROUP_SUGGESTION,
                      parentGroupId: u,
                    },
                    S(t),
                  );
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .REVOKED_SUB_GROUP_SUGGESTIONS
                )
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
                            ? T[e.attrString("reason")]
                            : void 0,
                        };
                      },
                    ),
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .CHANGE_NUMBER
                )
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
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .GROUP_REACTION_SETTINGS
                )
                  return r("justknobx")._("7606")
                    ? {
                        actionType:
                          o("WAWebGroupType").GROUP_ACTIONS
                            .GROUP_REACTION_SETTINGS,
                        value: o(
                          "WAWebGroupReactionSettings",
                        ).parseGroupReactionSettings(t),
                      }
                    : void 0;
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .MEMBER_ADD_MODE
                )
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE,
                    memberAddMode: o(
                      "WAWebSchemaGroupMetadata",
                    ).MemberAddMode.cast(t.contentString()),
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .AUTO_ADD_DISABLED
                )
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS
                        .GENERAL_CHAT_AUTO_ADD_DISABLED,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .GROUP_SAFETY_CHECK
                )
                  return {
                    actionType:
                      o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK,
                    value: !0,
                  };
                if (
                  n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .MISSING_PARTICIPANT_IDENTIFICATION
                ) {
                  R = !0;
                  return;
                }
                throw n ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .IS_CAPI_HOSTED_GROUP ||
                  n ===
                    o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.LIMIT_SHARING_ENABLED
                  ? e.createParseError("Unrecognized group action " + n)
                  : Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        n,
                    );
              }
            })
            .filter(Boolean);
        return {
          externalId: e.attrString("id"),
          chatId: u,
          isLidAddressingMode: h,
          author: c,
          authorPhoneNumber: d,
          authorUsername: y,
          authorUsernameCountryCode: C,
          ts: e.attrTime("t"),
          pushname: e.maybeAttrString("notify"),
          offline: e.maybeAttrString("offline"),
          actions: $,
          hasIncompleteParticipantInformation: f && R === !0,
        };
      },
    );
    function M(e) {
      var t = e.content;
      if (t != null && Array.isArray(t) && t.length > 0) {
        var r = t[0],
          a = r.tag;
        if (a === "groups_dirty")
          return (g || (g = n("Promise"))).resolve(
            o(
              "WAWebHandleGroupsDirtyNotification",
            ).handleGroupsDirtyNotificationJob(e),
          );
      }
      var i = N.parse(e);
      return i.error
        ? (o("WALogger").ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            i.error.toString(),
          ),
          (g || (g = n("Promise"))).reject(i.error))
        : o("WAWebHandleParsedGroupNotification").handleParsedGroupNotification(
            i.success,
          );
    }
    l.handleGroupNotification = M;
  },
  98,
);
