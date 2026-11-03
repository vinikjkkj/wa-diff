__d(
  "WAWebBizAiMetaOneSubscriptionDeeplink",
  [
    "WAWebActiveSubscriptionProductTypes",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebBizAiMetaOneDialogRequestStore",
    "WAWebEligibleSubscriptionProductTypes",
    "WAWebMetaOneGating",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral",
    "WAWebWamEnumWsuaScreen",
    "WAWebWamEnumWsuaScreenElement",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new WeakMap();
    function s(e, t, n, r) {
      var a = u(n);
      return a == null ||
        !o("WAWebMetaOneGating").isMetaOneBizAiAdditionalEntryPointsEnabled()
        ? null
        : {
            onImpression: function () {
              var r = c(e, t, n, a);
              r != null && d(r.session, a);
            },
            onClick: function () {
              var i = c(e, t, n, a);
              i != null &&
                (d(i.session, a),
                o("WAWebBizAILargeScreensLogEvents").logBizAiHubDeeplinkClick(
                  n,
                ),
                m(
                  o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK,
                  i.session.sessionId,
                  a,
                ),
                o("WAWebBizAiMetaOneDialogRequestStore").requestMetaOneDialog(
                  null,
                  i.session.sessionId,
                  function () {
                    o("WAWebMsgCollection").MsgCollection.get(e) === i.msg &&
                      r();
                  },
                ));
            },
          };
    }
    function u(e) {
      var t, n;
      try {
        n = new URL(e);
      } catch (e) {
        return null;
      }
      if (
        n.protocol !== "whatsapp-smb:" ||
        n.host !== "biz-agents-monetization" ||
        n.pathname !== "/subscription-plans" ||
        n.username !== "" ||
        n.password !== ""
      )
        return null;
      var r = n.searchParams,
        o = (t = r.get("uuid")) == null ? void 0 : t.trim();
      return {
        suppliedSessionId: o != null && o !== "" ? o : null,
        sourceMessageType: r.get("ai_hub_message_type"),
      };
    }
    function c(t, n, a, i) {
      var l,
        s =
          (l = o("WAWebMsgCollection").MsgCollection.get(t)) == null
            ? void 0
            : l.safe();
      if (s == null || s.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE)
        return null;
      var u = s.unsafe(),
        c = e.get(u);
      c == null && ((c = new Map()), e.set(u, c));
      var d = c.get(n);
      if (d == null || d.url !== a) {
        var m;
        ((d = {
          url: a,
          sessionId:
            (m = i.suppliedSessionId) != null
              ? m
              : r("WAWebPonyfillsCryptoRandomUUID")(),
          hasLoggedView: !1,
        }),
          c.set(n, d));
      }
      return { msg: u, session: d };
    }
    function d(e, t) {
      e.hasLoggedView ||
        ((e.hasLoggedView = !0),
        m(o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW, e.sessionId, t));
    }
    function m(e, t, n) {
      var r =
        n.sourceMessageType === "SUBSCRIPTION_PLAN_LIMIT_APPROACHING"
          ? o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT
              .BIZ_AI_NEARING_LIMIT
          : n.sourceMessageType === "SUBSCRIPTION_PLAN_LIMIT_ENDED"
            ? o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT
                .BIZ_AI_LIMIT_REACHED
            : o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT
                .BIZ_AI_META_ONE_ENTRYPOINT;
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: e,
        wsuaActionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .GET_META_ONE_BUSINESS,
        wsuaActiveSubscriptions: o(
          "WAWebActiveSubscriptionProductTypes",
        ).getActiveSubscriptionProductTypes(),
        wsuaEligibleSubscriptions: o(
          "WAWebEligibleSubscriptionProductTypes",
        ).getEligibleSubscriptionProductTypes(),
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaReferral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL
          .BIZ_AI_AGENT_THREAD,
        wsuaScreen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.BIZ_AI_AGENT_THREAD,
        wsuaScreenElement: r,
        wsuaSessionId: t,
      }).commit();
    }
    l.getBizAiMetaOneSubscriptionActions = s;
  },
  98,
);
