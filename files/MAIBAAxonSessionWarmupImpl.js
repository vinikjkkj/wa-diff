__d(
  "MAIBAAxonSessionWarmupImpl",
  [
    "ALToolTab",
    "AdsALAppData",
    "MAIBAAxonSessionWarmupImplMutation.graphql",
    "MAIBAAxonSessionWarmupQPL",
    "MAIBARelayEnvironment",
    "MAIBAUGPAdsManagerTools",
    "RelayModern",
    "ServerTime",
    "WebStorage",
    "XFBAutoLoggingToolEnumUtils.facebook",
    "XFBAutoLoggingToolTabEnumUtils.facebook",
    "getMAIBAPageAdAccountID",
    "maibaDeferToBackground",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("MAIBAAxonSessionWarmupImplMutation.graphql")),
      d = 1800 * 1e3,
      m = new Map(),
      p = new Set(r("MAIBAUGPAdsManagerTools")),
      _ = "maiba_axon_warmup_server_skips",
      f = 720 * 60 * 1e3,
      g = 2e3,
      h = 3e3;
    function y() {
      var e,
        t =
          (e = (s || (s = r("WebStorage"))).getLocalStorageForRead()) == null
            ? void 0
            : e.getItem(_);
      try {
        var n = t == null ? null : JSON.parse(t);
        return n != null && typeof n == "object" ? n : {};
      } catch (e) {
        return {};
      }
    }
    function C(e) {
      var t = (s || (s = r("WebStorage"))).getLocalStorage();
      if (t != null) {
        var n = o("ServerTime").getMillis(),
          a = {};
        for (var i of Object.entries(y())) {
          var l = i[0],
            u = i[1];
          typeof u == "number" && u > n && (a[l] = u);
        }
        ((a[e] = n + f), s.setItemGuarded(t, _, JSON.stringify(a)));
      }
    }
    function b(e) {
      return e != null && e !== "" && e !== "0" ? e : null;
    }
    function v(e) {
      var t,
        n = e != null ? e : r("getMAIBAPageAdAccountID")();
      if (n == null) return null;
      var a = b(
          (t = o("AdsALAppData").getAppData()) == null ? void 0 : t.business_id,
        ),
        i = o("ALToolTab").getCurrentToolTab(),
        l = i.tab,
        s = i.tool,
        u = S(s),
        c = o("XFBAutoLoggingToolTabEnumUtils.facebook").fromJSEnum(l);
      return {
        adAccountId: n,
        businessId: a,
        key: JSON.stringify([n, a, u, c]),
        surface: u,
        tab: c,
      };
    }
    function S(e) {
      return o("XFBAutoLoggingToolEnumUtils.facebook").fromJSEnum(e);
    }
    function R() {
      var e = o("ALToolTab").getCurrentToolTab(),
        t = e.tab,
        n = e.tool;
      return (
        n != null &&
        p.has(n) &&
        !(
          n === "Billing & Payments" &&
          t != null &&
          String(t).startsWith("MBS Billing")
        )
      );
    }
    function L(e) {
      I("page_load", e);
    }
    function E(e) {
      I(
        "conversation_account",
        o("MAIBAAxonSessionWarmupQPL").startWarmupMarker(),
        e,
      );
    }
    function k() {
      var e = o("MAIBAAxonSessionWarmupQPL").startWarmupMarker();
      r("maibaDeferToBackground")(
        function (t) {
          (t &&
            o("MAIBAAxonSessionWarmupQPL").pointWarmupMarker(
              e,
              o("MAIBAAxonSessionWarmupQPL").WARMUP_POINT_IDLE_DEADLINE_REACHED,
            ),
            o("MAIBAAxonSessionWarmupQPL").pointWarmupMarker(
              e,
              o("MAIBAAxonSessionWarmupQPL").WARMUP_POINT_DEFER_RAN,
            ),
            I("panel_open", e));
        },
        { deadline: (u || (u = r("performanceNow")))() + h, timeout: g },
      );
    }
    function I(e, t, n) {
      var a;
      if (!R()) {
        o("MAIBAAxonSessionWarmupQPL").abandonWarmupMarker(
          t,
          "ineligible_surface",
          e,
        );
        return;
      }
      var i = v(n);
      if (i == null) {
        o("MAIBAAxonSessionWarmupQPL").abandonWarmupMarker(
          t,
          "no_ad_account",
          e,
        );
        return;
      }
      var l = i.adAccountId,
        s = i.businessId,
        p = i.key,
        _ = i.surface,
        f = i.tab,
        g = o("MAIBARelayEnvironment").MAIBARelayEnvironment;
      if (g == null) {
        o("MAIBAAxonSessionWarmupQPL").abandonWarmupMarker(
          t,
          "no_relay_environment",
          e,
        );
        return;
      }
      var h = JSON.stringify([l, _]);
      if (
        e !== "panel_open" &&
        ((a = y()[h]) != null ? a : 0) > o("ServerTime").getMillis()
      ) {
        o("MAIBAAxonSessionWarmupQPL").abandonWarmupMarker(
          t,
          "server_skipped_recently",
          e,
        );
        return;
      }
      var b = (u || (u = r("performanceNow")))(),
        S = m.get(p);
      if (S != null && b - S < d) {
        o("MAIBAAxonSessionWarmupQPL").abandonWarmupMarker(
          t,
          "already_warmed",
          e,
        );
        return;
      }
      m.set(p, b);
      var L = o("MAIBAAxonSessionWarmupQPL").generateWarmupId();
      (o("MAIBAAxonSessionWarmupQPL").completeWarmupMarker(t, {
        adAccountId: l,
        fireTimeMs: u(),
        trigger: e,
        warmupId: L,
      }),
        o("RelayModern").commitMutation(g, {
          mutation: c,
          variables: {
            input: {
              ad_account_id: l,
              business_id: s,
              surface: _,
              tab: f,
              warmup_id: L,
            },
          },
          onCompleted: function (t) {
            t.maiba_warm_up_axon_session === !1 && C(h);
          },
          onError: function () {
            m.get(p) === b && m.delete(p);
          },
        }));
    }
    function T() {
      m.clear();
    }
    ((l.isCurrentSurfaceEligible = R),
      (l.start = L),
      (l.startForAdAccount = E),
      (l.startOnPanelOpen = k),
      (l.fire = I),
      (l.resetForTesting = T));
  },
  98,
);
