__d(
  "WAWebFormatCTAText",
  [
    "fbt",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebFbtCommon",
    "WAWebGroupAgentAddedRowProfile",
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
            : (p === "limit_sharing_system_message" ||
                p === "acp2_system_message") &&
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
          p === "acp2_system_message" ||
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
        o("WAWebGroupAgentAddedRowProfile").getAddedGroupAgentProfile(
          d,
          u,
          n,
        ) != null
      )
        return null;
      if (
        o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(d)
      ) {
        var _ = m({
          chat: n,
          latestJoinTimeByRecipient: i,
          msgT: l,
          recipients: u,
          shareableHistoryInfo: c,
        });
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
    function m(e) {
      var t = e.chat,
        n = e.latestJoinTimeByRecipient,
        r = e.msgT,
        a = e.recipients,
        i = e.shareableHistoryInfo;
      if (a == null || t == null) return null;
      var l = t.groupMetadata;
      if (l == null) return null;
      var s = function (t) {
        return n == null || n.get(t.toString()) === r;
      };
      if (a.length > 1) {
        if (
          !o(
            "WAWebGroupHistoryPostJoinEligibility",
          ).hasResolvableNonSelfRecipient(a, r, n)
        )
          return null;
        var u = o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).groupContextFromMetadata(l);
        if (
          !o(
            "WAWebGroupHistoryPostJoinEligibility",
          ).isPostJoinHistoryGroupEligible(u)
        )
          return null;
        var c = a.some(function (e) {
          if (e == null || o("WAWebUserPrefsMeUser").isMeAccount(e) || !s(e))
            return !1;
          var t = l.participants.get(e);
          return (
            t != null &&
            o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).canSendPostJoinHistoryToParticipant(t, u, r, i)
          );
        });
        return c &&
          o(
            "WAWebGroupHistoryPostJoinEligibility",
          ).isPostJoinHistoryExperimentArmEnabled(l.id)
          ? p()
          : null;
      }
      if (a.length !== 1 || a[0] == null) return null;
      var d = a[0];
      if (o("WAWebUserPrefsMeUser").isMeAccount(d) || !s(d)) return null;
      var m = l.participants.get(d);
      return m == null
        ? null
        : o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).shouldOfferPostJoinHistoryToParticipant(
              m,
              o(
                "WAWebGroupHistoryPostJoinEligibility",
              ).groupContextFromMetadata(l),
              r,
              i,
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
