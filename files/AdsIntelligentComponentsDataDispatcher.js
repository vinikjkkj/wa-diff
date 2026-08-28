__d(
  "AdsIntelligentComponentsDataDispatcher",
  [
    "AYMTSequentialDisplayManager",
    "AYMTTipsLoader",
    "AdsApplicationUtils",
    "AdsIntelligentComponentsActions",
    "AdsIntelligentComponentsDataLoader",
    "URI",
    "emptyFunction",
    "isDevelopersURI",
    "promiseDone",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "AYMTIntelligentComponentsChannel",
      u = new Map(),
      c = null;
    function d(e) {
      var t = e.messagesIDs;
      if (t == null || t.length === 0) {
        c = e;
        return;
      }
      for (var n of t) u.set(n, e);
    }
    function m(e, t) {
      var n,
        r = e[0];
      if (r == null)
        return (
          o("AdsIntelligentComponentsActions").dispatchMessages(t, {
            messages: {
              aymt_tips: {},
              help_articles: null,
              SAVED_MESSAGES_PANE: null,
            },
          }),
          !0
        );
      var a = typeof r.name == "string" ? r.name : "",
        i = (n = u.get(a)) != null ? n : c;
      if (a === "" || i == null) return !1;
      var l = {};
      return (
        (l[a] = r),
        o("AdsIntelligentComponentsActions").dispatchMessages(i, {
          messages: {
            aymt_tips: l,
            help_articles: null,
            SAVED_MESSAGES_PANE: null,
          },
        }),
        !0
      );
    }
    function p(e) {
      var t = babelHelpers.extends({}, e),
        n = t.high_collision_tips;
      if (!Array.isArray(n)) return [];
      var r = [];
      for (var o of n) typeof o == "string" && r.push(o);
      return r;
    }
    function _(e) {
      o(
        "AYMTSequentialDisplayManager",
      ).AYMTCollisionExposureObserver.reportEligibleTips(s, p(e));
    }
    function f(e) {
      var t = {};
      return (e != null && (t.ad_account_id = String(e)), t);
    }
    function g(t, n) {
      if (
        !o("AdsApplicationUtils").isFAME() &&
        !r("isDevelopersURI")((e || (e = r("URI"))).getRequestURI())
      ) {
        if (r("qex")._("488") === !0 && t.placement === "aymt_tips") {
          (d(t),
            r("promiseDone")(
              o("AdsIntelligentComponentsDataLoader").loadMessages(t),
              _,
              r("emptyFunction"),
            ),
            r("AYMTTipsLoader").loadTips(
              f(n == null ? void 0 : n.account_id),
              s,
              {},
              !1,
              function (e) {
                return m(e, t);
              },
            ));
          return;
        }
        (o(
          "AYMTSequentialDisplayManager",
        ).AYMTCollisionExposureObserver.registerSurface(s),
          r("promiseDone")(
            o("AdsIntelligentComponentsDataLoader").loadMessages(t),
            function (e) {
              (_(e),
                o("AdsIntelligentComponentsActions").dispatchMessages(t, e));
            },
            function (e) {
              o("AdsIntelligentComponentsActions").messagesLoadError(t, e);
            },
          ));
      }
    }
    ((l.buildICV3Params = f), (l.loadMessages = g));
  },
  98,
);
