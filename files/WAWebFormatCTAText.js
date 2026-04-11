__d(
  "WAWebFormatCTAText",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebMsgType",
    "WAWebText_DONOTUSE.react",
    "WAWebWid",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.iAmAdmin,
        n = e.id,
        a = e.subtype,
        i = e.type,
        l;
      switch (i) {
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION: {
          r("WAWebWid").isCAPISupportAccount(n == null ? void 0 : n.remote)
            ? (l = null)
            : (l = s._(/*BTDS*/ "Learn more"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.GP2: {
          l = d(a, t);
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL: {
          a === "event_edit_decrypted"
            ? (l = s._(/*BTDS*/ "See event"))
            : a === "limit_sharing_system_message" &&
              (l = r("WAWebFbtCommon")("Learn more"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED: {
          l = s._(/*BTDS*/ "View poll");
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE: {
          a === "limit_sharing_system_message" ||
          a === "biz_automatically_labeled_chat_system_message"
            ? (l = r("WAWebFbtCommon")("Learn more"))
            : (a === "biz_per_customer_3pd_data_share_opt_in" ||
                a === "biz_per_customer_3pd_data_share_opt_out") &&
              (l = s._(/*BTDS*/ "Manage"));
          break;
        }
      }
      return l == null
        ? null
        : u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            weight: "medium",
            size: "inherit",
            children: l,
          });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t) {
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
    l.default = c;
  },
  226,
);
