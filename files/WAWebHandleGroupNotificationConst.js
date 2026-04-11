__d(
  "WAWebHandleGroupNotificationConst",
  [
    "WATimeUtils",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebCommunityGatingUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupType",
    "WAWebGroupsParticipantsApi",
    "WAWebLidMigrationUtils",
    "WAWebNoop",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
      REMOVE: "remove",
      ADD: "add",
      DEMOTE: "demote",
      DELETE: "delete",
      PROMOTE: "promote",
      MODIFY: "modify",
      CREATE: "create",
      SUBJECT: "subject",
      DESC: "description",
      LOCKED: "locked",
      UNLOCKED: "unlocked",
      ANNOUNCE: "announcement",
      NOT_ANNOUNCE: "not_announcement",
      NO_FREQUENTLY_FORWARDED: "no_frequently_forwarded",
      FREQUENTLY_FORWARDED_OK: "frequently_forwarded_ok",
      INVITE: "invite",
      EPHEMERAL: "ephemeral",
      NOT_EPHEMERAL: "not_ephemeral",
      REVOKE_INVITE: "revoke",
      SUSPENDED: "suspended",
      UNSUSPENDED: "unsuspended",
      GROWTH_LOCKED: "growth_locked",
      GROWTH_UNLOCKED: "growth_unlocked",
      LINK: "link",
      UNLINK: "unlink",
      LINKED_GROUP_PROMOTE: "linked_group_promote",
      LINKED_GROUP_DEMOTE: "linked_group_demote",
      MEMBERSHIP_APPROVAL_MODE: "membership_approval_mode",
      MEMBERSHIP_APPROVAL_REQUEST: "membership_approval_request",
      CREATED_MEMBERSHIP_REQUESTS: "created_membership_requests",
      REVOKED_MEMBERSHIP_REQUESTS: "revoked_membership_requests",
      ALLOW_NON_ADMIN_SUB_GROUP_CREATION: "allow_non_admin_sub_group_creation",
      NOT_ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
        "not_allow_non_admin_sub_group_creation",
      ALLOW_ADMIN_REPORTS: "allow_admin_reports",
      NOT_ALLOW_ADMIN_REPORTS: "not_allow_admin_reports",
      REPORTS: "reports",
      CREATED_SUBGROUP_SUGGESTION: "created_sub_group_suggestion",
      REVOKED_SUB_GROUP_SUGGESTIONS: "revoked_sub_group_suggestions",
      CHANGE_NUMBER: "change_number",
      MEMBER_ADD_MODE: "member_add_mode",
      AUTO_ADD_DISABLED: "auto_add_disabled",
      IS_CAPI_HOSTED_GROUP: "is_capi_hosted_group",
      GROUP_SAFETY_CHECK: "group_safety_check",
      LIMIT_SHARING_ENABLED: "limit_sharing_enabled",
      MISSING_PARTICIPANT_IDENTIFICATION: "missing_participant_identification",
    });
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          return (
            !!r &&
            r.growthLockType === t &&
            ((n = r.growthLockExpiration) != null ? n : 0) >
              o("WATimeUtils").unixTime()
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE ||
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.SUSPEND ||
            t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS ||
            t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS ||
            t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS
                .SUBGROUP_SUGGESTIONS_CHANGE_NUMBER ||
            t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK
          )
            return !0;
          if (
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED ||
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED
          ) {
            if (
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED
            ) {
              if (t.type !== "invite") return !0;
              var n = yield s(e.chatId, t.type);
              if (n) return !0;
            }
            var a = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              e.chatId.toString(),
            );
            return !a;
          }
          if (
            (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE ||
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE) &&
            (yield _(e.chatId)) === !0
          )
            return !0;
          if (
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE ||
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE
          ) {
            var i =
              t.participants.length === 1 &&
              o("WAWebUserPrefsMeUser").isMeAccount(t.participants[0].id);
            if (!i) return !0;
          }
          if (
            t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE &&
            t.participants.length === 1 &&
            !o("WAWebUserPrefsMeUser").isMeAccount(t.participants[0].id)
          ) {
            var l = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              e.chatId.toString(),
            );
            if (!l) return !0;
          }
          if (
            t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
            t.participants.length === 1 &&
            r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(
                e.author,
                t.participants[0].id,
              ),
            )
          ) {
            var u = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                e.chatId.toString(),
              ),
              c = o("WAWebUserPrefsMeUser").isMeAccount(e.author);
            if (!u || c) return !0;
          }
          if (
            t.actionType ===
            o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION
          ) {
            var d = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              e.chatId.toString(),
            );
            if (
              !d ||
              (t.isExistingGroup === !0 &&
                !o(
                  "WAWebCommunityGatingUtils",
                ).memberSuggestedGroupsM3ReceiverEnabled())
            )
              return !0;
          }
          if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE) {
            var m = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(
                e.chatId,
              ),
              p =
                m != null
                  ? o("WAWebGroupType").getGroupTypeFromGroupMetadata(m)
                  : null;
            return t.reason ===
              o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT &&
              p === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? !1
              : (t.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT &&
                  p === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
                !0);
          }
          if (
            t.actionType ===
            o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST
          )
            return !0;
          if (
            t.actionType ===
            o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS
          ) {
            var f = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              e.chatId.toString(),
            );
            if (!f) return !0;
          }
          if (
            (t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS &&
              t.skipGenMsg) ||
            (t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS &&
              t.shouldSkipGenMsg === !0) ||
            (t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECIEVED &&
              t.shouldSkipGenMsg === !0) ||
            ((t.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE ||
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.MODIFY) &&
              (yield _(e.chatId)) === !0)
          )
            return !0;
          if (
            t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE ||
            t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE
          ) {
            var g = t.participants.every(function (e) {
                var t = e.id;
                return t.isLid();
              }),
              h = e.isLidAddressingMode === !0;
            if (!h && g) return !0;
          }
          return !1;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          if (!o("WAWebRuntimeEnvironmentUtils").isWorker())
            return o("WAWebBackendApi").frontendSendAndReceive(
              "notAlreadyInGroup",
              { groupId: e, participants: t },
            );
          var a = new Set(
            (n =
              (r = yield o("WAWebGroupsParticipantsApi").getParticipants(e)) ==
              null
                ? void 0
                : r.participants) != null
              ? n
              : [],
          );
          return t.filter(function (e) {
            var t = e.id;
            return !a.has(String(t));
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          return !!(t != null && t.defaultSubgroup);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = e.author,
        n = e.authorPhoneNumber;
      return t != null ? { id: t, phoneNumber: n } : null;
    }
    function h(t) {
      var n,
        o,
        a =
          (n = t.participants) != null
            ? n
            : (o = t.groupInfo) == null
              ? void 0
              : o.participants,
        i = a != null ? [].concat(a) : [];
      e: {
        var l = t;
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          "actionType" in l &&
          l.actionType === e.CREATE &&
          ((typeof l.groupInfo == "object" && l.groupInfo !== null) ||
            typeof l.groupInfo == "function") &&
          "owner" in l.groupInfo &&
          "creatorPn" in l.groupInfo &&
          "subjectOwner" in l.groupInfo &&
          "subjectOwnerPn" in l.groupInfo
        ) {
          var s = l.groupInfo.owner,
            u = l.groupInfo.creatorPn,
            c = l.groupInfo.subjectOwner,
            d = l.groupInfo.subjectOwnerPn;
          (s != null && i.push({ id: s, phoneNumber: u }),
            c != null && i.push({ id: c, phoneNumber: d }));
          break e;
        }
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          "actionType" in l &&
          l.actionType === e.SUBJECT &&
          "s_o" in l &&
          "subjectOwnerPn" in l
        ) {
          var m = l.s_o,
            p = l.subjectOwnerPn;
          m != null && p != null && i.push({ id: m, phoneNumber: p });
          break e;
        }
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          "actionType" in l &&
          l.actionType === e.CREATED_MEMBERSHIP_REQUESTS &&
          "requests" in l
        ) {
          var _ = l.requests;
          _.forEach(function (e) {
            var t = e.phoneNumber,
              n = e.wid;
            t != null && i.push({ id: n, phoneNumber: t });
          });
          break e;
        }
        {
          r("WAWebNoop")();
          break e;
        }
      }
      return i;
    }
    ((l.GROUP_NOTIFICATION_TAG = e),
      (l.shouldSkipGenMsg = c),
      (l.notAlreadyInGroup = m),
      (l.getIsCagById = _),
      (l.getAuthorLidPnFieldsFromMeta = g),
      (l.getMappingsFromAction = h));
  },
  98,
);
