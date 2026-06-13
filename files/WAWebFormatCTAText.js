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
        l = e.noShareableHistory,
        c = e.recipients,
        m = e.subtype,
        p = e.type,
        _;
      switch (p) {
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION: {
          r("WAWebWid").isCAPISupportAccount(a == null ? void 0 : a.remote)
            ? (_ = null)
            : (_ = s._(/*BTDS*/ "Learn more"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.GP2: {
          _ = d(m, n, c, t, i, l);
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL: {
          m === "event_edit_decrypted"
            ? (_ = s._(/*BTDS*/ "See event"))
            : m === "limit_sharing_system_message" &&
              (_ = r("WAWebFbtCommon")("Learn more"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED: {
          _ = s._(/*BTDS*/ "View poll");
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION: {
          m ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .ScheduledMessageCreated && (_ = s._(/*BTDS*/ "View"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE: {
          m === "limit_sharing_system_message" ||
          m === "biz_automatically_labeled_chat_system_message"
            ? (_ = r("WAWebFbtCommon")("Learn more"))
            : (m === "biz_per_customer_3pd_data_share_opt_in" ||
                m === "biz_per_customer_3pd_data_share_opt_out") &&
              (_ = s._(/*BTDS*/ "Manage"));
          break;
        }
      }
      return _ == null
        ? null
        : u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            weight: "medium",
            size: "inherit",
            children: _,
          });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n, a, i, l) {
      if (
        o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(e)
      ) {
        var u = m(n, a, i, l);
        if (u != null) return u;
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
    function m(e, t, n, r) {
      if (e == null || t == null) return null;
      var a = t.groupMetadata;
      if (a == null) return null;
      if (e.length > 1) {
        var i = o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).groupContextFromMetadata(a);
        if (
          !o(
            "WAWebGroupHistoryPostJoinEligibility",
          ).isPostJoinHistoryGroupEligible(i)
        )
          return null;
        var l = e.some(function (e) {
          if (e == null || o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
          var t = a.participants.get(e);
          return (
            t != null &&
            o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).isEligibleForPostJoinHistory(t, i, n)
          );
        });
        return l && r !== !0 ? p() : null;
      }
      if (e.length !== 1 || e[0] == null) return null;
      var s = e[0];
      if (o("WAWebUserPrefsMeUser").isMeAccount(s)) return null;
      var u = a.participants.get(s);
      if (u == null) return null;
      var c = o(
        "WAWebGroupHistoryPostJoinEligibility",
      ).isEligibleForPostJoinHistory(
        u,
        o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(a),
        n,
      );
      return c && r !== !0 ? p() : null;
    }
    function p() {
      return s._(/*BTDS*/ "Send message history");
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
