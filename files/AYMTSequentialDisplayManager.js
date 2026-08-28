__d(
  "AYMTSequentialDisplayManager",
  [
    "AYMTTipDismissalNotifier",
    "AYMTTipImpressionNotifier",
    "ExecutionEnvironment",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        "AYMTCampaignManagerMegaphoneChannel",
        "AYMTAMGlobalBannerChannel",
        "AYMTCampaignManagerModalChannel",
        "AYMTIntelligentComponentsChannel",
        "AYMTAMDAnchorlessNUXChannel",
      ],
      u = [].concat(s),
      c = 3e4,
      d = 5e3,
      m = 2e4,
      p = 1e4,
      _ = 2;
    function f(e) {
      var t = new Set(),
        n = new Map(),
        r = !1;
      function o() {
        if (!r) {
          var o = 0;
          for (var a of t) {
            var i, l;
            if (
              ((i = (l = n.get(a)) == null ? void 0 : l.size) != null
                ? i
                : 0) !== 0 &&
              (o++, o > 1)
            ) {
              ((r = !0), e());
              return;
            }
          }
        }
      }
      return {
        registerSurface: function (n) {
          (t.add(n), o());
        },
        reportEligibleTips: function (t, r) {
          (n.set(t, new Set(r)), o());
        },
      };
    }
    function g(e) {
      var t = new Set(s),
        n = new Set(u),
        r = new Map(),
        o = new Map(),
        a = new Set(),
        i = new Set(),
        l = null,
        f = [],
        g = 0,
        h = null,
        y = null,
        C = null,
        b = null,
        v = null,
        S = null,
        R = null,
        L = null,
        E = !1,
        k = !1,
        I = 0,
        T = 0,
        D = !0,
        x = !1;
      function $() {
        return a.size === s.length;
      }
      function P() {
        return (l == null && (l = e.isV3Enabled()), l);
      }
      function N() {
        C != null && (e.clearTimeout(C), (C = null));
      }
      function M() {
        b != null && (e.clearTimeout(b), (b = null));
      }
      function w() {
        v != null && (e.clearTimeout(v), (v = null));
      }
      function A() {
        S != null && (e.clearTimeout(S), (S = null));
      }
      function F() {
        C != null ||
          E ||
          k ||
          (C = e.setTimeout(function () {
            ((C = null), Z(!0));
          }, c));
      }
      function O() {
        b != null ||
          k ||
          x ||
          E ||
          (b = e.setTimeout(function () {
            ((b = null), (x = !0), Z());
          }, d));
      }
      function B() {
        (R != null && (R(), (R = null)), L != null && (L(), (L = null)));
      }
      function W() {
        (N(),
          M(),
          w(),
          A(),
          B(),
          (f = []),
          (g = 0),
          (h = null),
          (y = null),
          (E = !1));
      }
      function q() {
        (W(),
          r.clear(),
          o.clear(),
          a.clear(),
          i.clear(),
          (x = !1),
          (l = null),
          (I = 0),
          T++,
          (D = !0),
          (k = !1));
      }
      function U(e, n) {
        return n !== T || E || k || !t.has(e)
          ? !1
          : (a.delete(e), o.delete(e), !0);
      }
      function V(e) {
        var t = D;
        return ((D = !1), { cycleID: T, isNewCycle: t });
      }
      function H() {
        for (var e of u)
          if (!i.has(e)) {
            var t = r.get(e);
            t != null && (t([]), i.add(e));
          }
        (W(), (k = !0), (D = !1));
      }
      function G(t, n) {
        (w(),
          (y = null),
          (h = t.tipID),
          (S = e.setTimeout(function () {
            ((S = null), h === t.tipID && ((h = null), Q()));
          }, p)));
        var r;
        try {
          r = n([t.tip]);
        } catch (t) {
          (A(), (h = null), e.setTimeout(Q, 0));
          return;
        }
        if (r === !1) {
          (A(), (h = null), Q());
          return;
        }
        (i.add(t.channelName), I++);
      }
      function z(t) {
        (w(),
          (y = t),
          (v = e.setTimeout(function () {
            y !== t || r.has(t.channelName) || ((v = null), (y = null), Q());
          }, m)));
      }
      function j(e) {
        var t = y;
        if (!(t == null || t.channelName !== e)) {
          var n = r.get(e);
          n != null && (w(), A(), G(t, n));
        }
      }
      function K(r, o) {
        e.setTimeout(function () {
          o === T && (j(r), t.has(r) ? Z() : n.has(r) || ee(r));
        }, 0);
      }
      function Q() {
        if (!(h != null || y != null)) {
          if ((A(), w(), I >= _)) {
            H();
            return;
          }
          for (; g < f.length; ) {
            var e = f[g++],
              t = r.get(e.channelName);
            if (t == null) {
              z(e);
              return;
            }
            G(e, t);
            return;
          }
          H();
        }
      }
      function X(e) {
        h === e && A();
      }
      function Y(e) {
        h === e && (A(), (h = null), Q());
      }
      function J() {
        var e = new Map();
        u.forEach(function (t, n) {
          var r = o.get(t);
          if (r != null)
            for (var a of r.candidates) {
              var i = JSON.stringify([t, a.tipID]),
                l = {
                  channelName: t,
                  channelOrder: n,
                  rankingScore: a.rankingScore,
                  tip: a.tip,
                  tipID: a.tipID,
                  tipIndex: a.tipIndex,
                },
                s = e.get(i);
              (s == null ||
                (t !== "AYMTIntelligentComponentsChannel" &&
                  l.rankingScore > s.rankingScore)) &&
                e.set(i, l);
            }
        });
        var t = function (t, n) {
            return (
              n.rankingScore - t.rankingScore ||
              t.channelOrder - n.channelOrder ||
              t.tipIndex - n.tipIndex
            );
          },
          n = function (t, n) {
            var e = t.tip.ads_guidance_bluetip_data != null,
              r = n.tip.ads_guidance_bluetip_data != null;
            return e === r ? t.tipIndex - n.tipIndex : e ? -1 : 1;
          },
          r = Array.from(e.values()),
          a = r
            .filter(function (e) {
              return e.channelName !== "AYMTIntelligentComponentsChannel";
            })
            .sort(t),
          i = r
            .filter(function (e) {
              return e.channelName === "AYMTIntelligentComponentsChannel";
            })
            .sort(n);
        return a.concat(i);
      }
      function Z(t) {
        (t === void 0 && (t = !1),
          !(k || E || (!t && (!x || !$()))) &&
            ((E = !0),
            N(),
            M(),
            (f = J()),
            (L = e.subscribeToImpressions(X)),
            (R = e.subscribeToDismissals(Y)),
            Q()));
      }
      function ee(e) {
        if (!n.has(e)) {
          var t = r.get(e),
            a = o.get(e);
          t == null || a == null || (t(a.tips), r.delete(e), o.delete(e));
        }
      }
      return {
        addChannelResult: function (r, i, l, s) {
          s !== T ||
            k ||
            (o.set(r, { candidates: l, tips: i }),
            t.has(r) ? (a.add(r), Z()) : n.has(r) || ee(r));
        },
        beginChannelLoad: V,
        isV3Enabled: P,
        registerChannel: function (n, i, l) {
          var e;
          i === T &&
            (r.set(n, l),
            ((e = y) == null ? void 0 : e.channelName) === n && w(),
            t.has(n) && (o.has(n) && a.add(n), F(), O()),
            K(n, i));
        },
        supersedeChannelLoad: U,
        reset: function () {
          q();
        },
      };
    }
    var h = g({
        clearTimeout: function (n) {
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            window.clearTimeout(n);
        },
        isV3Enabled: function () {
          return r("qex")._("488") === !0;
        },
        setTimeout: function (n, o) {
          return (e || (e = r("ExecutionEnvironment"))).canUseDOM
            ? window.setTimeout(n, o)
            : null;
        },
        subscribeToDismissals: o("AYMTTipDismissalNotifier")
          .subscribeToTipDismissals,
        subscribeToImpressions: o("AYMTTipImpressionNotifier")
          .subscribeToTipImpressions,
      }),
      y = f(function () {
        r("qex")._("935");
      });
    ((l.V3_CRITICAL_CHANNELS = s),
      (l.CHANNEL_BARRIER_TIMEOUT_MS = c),
      (l.CHANNEL_REGISTRATION_GRACE_PERIOD_MS = d),
      (l.DISPATCHER_REGISTRATION_TIMEOUT_MS = m),
      (l.RENDER_CONFIRMATION_TIMEOUT_MS = p),
      (l.MAX_DISPATCHED_TIPS_PER_PAGE = _),
      (l.createAYMTCollisionExposureObserver = f),
      (l.createAYMTSequentialDisplayManager = g),
      (l.AYMTSequentialDisplayManager = h),
      (l.AYMTCollisionExposureObserver = y));
  },
  98,
);
