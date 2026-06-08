__d(
  "WAWebFormatCTAText",
  [
    "fbt",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebFbtCommon",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryPostJoinSubtype",
    "WAWebMsgType",
    "WAWebText_DONOTUSE.react",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.iAmAdmin,
        a = e.id,
        i = e.msgT,
        l = e.recipients,
        c = e.subtype,
        m = e.type,
        p;
      switch (m) {
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION: {
          r("WAWebWid").isCAPISupportAccount(a == null ? void 0 : a.remote)
            ? (p = null)
            : (p = s._(/*BTDS*/ "Learn more"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.GP2: {
          p = d(c, n, l, t, i);
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL: {
          c === "event_edit_decrypted"
            ? (p = s._(/*BTDS*/ "See event"))
            : c === "limit_sharing_system_message" &&
              (p = r("WAWebFbtCommon")("Learn more"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED: {
          p = s._(/*BTDS*/ "View poll");
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION: {
          c ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .ScheduledMessageCreated && (p = s._(/*BTDS*/ "View"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE: {
          c === "limit_sharing_system_message" ||
          c === "biz_automatically_labeled_chat_system_message"
            ? (p = r("WAWebFbtCommon")("Learn more"))
            : (c === "biz_per_customer_3pd_data_share_opt_in" ||
                c === "biz_per_customer_3pd_data_share_opt_out") &&
              (p = s._(/*BTDS*/ "Manage"));
          break;
        }
      }
      return p == null
        ? null
        : u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            weight: "medium",
            size: "inherit",
            children: p,
          });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n, a, i) {
      if (
        o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(e)
      ) {
        var l = m(n, a, i);
        if (l != null) return l;
      }
      switch (e) {
        case "growth_unlocked":
        case "revoke_invite":
          return s._(/*BTDS*/ "View the new invite link");
        case "add":
          return s._(/*BTDS*/ "View members");
        case "description":
        case "initial_pHash_mismatch":
        case "default_sub_group_promote":
        case "default_sub_group_demote":
          return s._(/*BTDS*/ "View");
        case "growth_locked":
        case "hidden_group":
          return r("WAWebFbtCommon")("Learn more");
        case "membership_approval_request":
        case "created_membership_requests":
          return s._(/*BTDS*/ "Review");
        case "join_flood_notification":
          return t !== !0 ? null : s._(/*BTDS*/ "Manage members");
        case "created_subgroup_suggestion":
          return s._(/*BTDS*/ "Approve or reject");
        default:
          return null;
      }
    }
    function m(e, t, n) {
      if (e == null || t == null) return null;
      var r = t.groupMetadata;
      if (r == null) return null;
      if (e.length > 1) {
        var a = o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).groupContextFromMetadata(r);
        if (
          !o(
            "WAWebGroupHistoryPostJoinEligibility",
          ).isPostJoinHistoryGroupEligible(a)
        )
          return null;
        var i = e.some(function (e) {
          if (e == null || o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
          var t = r.participants.get(e);
          return (
            t != null &&
            o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).isEligibleForPostJoinHistory(t, a, n)
          );
        });
        return i ? p() : _();
      }
      if (e.length !== 1 || e[0] == null) return null;
      var l = e[0];
      if (o("WAWebUserPrefsMeUser").isMeAccount(l)) return null;
      var s = r.participants.get(l);
      if (s == null) return null;
      var u = o(
        "WAWebGroupHistoryPostJoinEligibility",
      ).isEligibleForPostJoinHistory(
        s,
        o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(r),
        n,
      );
      return u ? p() : _();
    }
    function p() {
      return s._(/*BTDS*/ "Send message history");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "View member actions");
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
