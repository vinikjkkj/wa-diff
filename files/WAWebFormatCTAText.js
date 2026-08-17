__d(
  "WAWebFormatCTAText",
  [
    "fbt",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebFbtCommon",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryPostJoinSubtype",
    "WAWebGroupType",
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
        i = e.latestJoinTimeByRecipient,
        l = e.msgT,
        c = e.recipients,
        m = e.shareableHistoryInfo,
        p = e.subtype,
        _ = e.templateParams,
        f = e.type,
        g;
      switch (f) {
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION: {
          r("WAWebWid").isCAPISupportAccount(a == null ? void 0 : a.remote)
            ? (g = null)
            : (g = s._(/*BTDS*/ "Learn more"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.GP2: {
          g = d({
            chat: t,
            iAmAdmin: n,
            latestJoinTimeByRecipient: i,
            msgT: l,
            recipients: c,
            shareableHistoryInfo: m,
            subtype: p,
            templateParams: _,
          });
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL: {
          p === "event_edit_decrypted"
            ? (g = s._(/*BTDS*/ "See event"))
            : p === "limit_sharing_system_message" &&
              (g = r("WAWebFbtCommon")("Learn more"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED: {
          g = s._(/*BTDS*/ "View poll");
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION: {
          p ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .ScheduledMessageCreated && (g = s._(/*BTDS*/ "View"));
          break;
        }
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE: {
          p === "limit_sharing_system_message" ||
          p === "biz_automatically_labeled_chat_system_message"
            ? (g = r("WAWebFbtCommon")("Learn more"))
            : (p === "biz_per_customer_3pd_data_share_opt_in" ||
                p === "biz_per_customer_3pd_data_share_opt_out") &&
              (g = s._(/*BTDS*/ "Manage"));
          break;
        }
      }
      return g == null
        ? null
        : u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            weight: "medium",
            size: "inherit",
            children: g,
          });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t,
        n = e.chat,
        a = e.iAmAdmin,
        i = e.latestJoinTimeByRecipient,
        l = e.msgT,
        u = e.recipients,
        c = e.shareableHistoryInfo,
        d = e.subtype,
        p = e.templateParams;
      if (
        o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(d)
      ) {
        var _ = m(u, n, l, c, i);
        if (_ != null) return _;
      }
      switch (d) {
        case "growth_unlocked":
        case "revoke_invite":
          return s._(/*BTDS*/ "View the new invite link");
        case "add":
          return s._(/*BTDS*/ "View members");
        case "description":
        case "parent_group_description":
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
        case "membership_approval_mode":
          return o(
            "WAWebGroupType",
          ).GroupSettingChangeSystemMessageIsAdmin.cast(
            p == null || (t = p[1]) == null ? void 0 : t.toString(),
          ) === o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin
            ? s._(/*BTDS*/ "Change")
            : null;
        case "ephemeral_keep_in_chat":
          return r("WAWebFbtCommon")("Learn more");
        case "join_flood_notification":
          return a !== !0 ? null : s._(/*BTDS*/ "Manage members");
        case "created_subgroup_suggestion":
          return s._(/*BTDS*/ "Approve or reject");
        default:
          return null;
      }
    }
    function m(e, t, n, r, a) {
      if (e == null || t == null) return null;
      var i = t.groupMetadata;
      if (i == null) return null;
      var l = function (t) {
        return a == null || a.get(t.toString()) === n;
      };
      if (e.length > 1) {
        if (
          !o(
            "WAWebGroupHistoryPostJoinEligibility",
          ).hasResolvableNonSelfRecipient(e, n, a)
        )
          return null;
        var s = o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).groupContextFromMetadata(i);
        if (
          !o(
            "WAWebGroupHistoryPostJoinEligibility",
          ).isPostJoinHistoryGroupEligible(s)
        )
          return null;
        var u = e.some(function (e) {
          if (e == null || o("WAWebUserPrefsMeUser").isMeAccount(e) || !l(e))
            return !1;
          var t = i.participants.get(e);
          return (
            t != null &&
            o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).canSendPostJoinHistoryToParticipant(t, s, n, r)
          );
        });
        return u ? p() : null;
      }
      if (e.length !== 1 || e[0] == null) return null;
      var c = e[0];
      if (o("WAWebUserPrefsMeUser").isMeAccount(c) || !l(c)) return null;
      var d = i.participants.get(c);
      return d == null
        ? null
        : o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).canSendPostJoinHistoryToParticipant(
              d,
              o(
                "WAWebGroupHistoryPostJoinEligibility",
              ).groupContextFromMetadata(i),
              n,
              r,
            )
          ? p()
          : null;
    }
    function p() {
      return s._(/*BTDS*/ "Send message history");
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
