__d(
  "AdsUEditorAdgroupSectionsLayoutRelayEntrypointController",
  [
    "AdsManagerRelayEntrypointController",
    "AdsUEditorAdgroupSectionsLayout.entrypoint",
    "cancelIdleCallback",
    "clearTimeout",
    "getAdsUEditorAdgroupSectionsLayoutQueryVariablesForPrefetch",
    "requestIdleCallback",
    "setTimeout",
    "stableStringify",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = new (r("AdsManagerRelayEntrypointController"))(
        r("AdsUEditorAdgroupSectionsLayout.entrypoint"),
        void 0,
        { shouldPreserveDisplayedEntrypointWhilePreloading: !0 },
      ),
      u = !1,
      c = [],
      d = !1,
      m = 0,
      p = new Set(),
      _ = null,
      f = null,
      g = null,
      h = null,
      y = 0,
      C = null;
    function b(e) {
      return { queryVariables: e };
    }
    function v(e) {
      return r("stableStringify")(b(e));
    }
    function S() {
      return c[c.length - 1];
    }
    function R() {
      var e;
      return (e = S()) == null ? void 0 : e.owner;
    }
    function L() {
      ((y += 1),
        p.forEach(function (e) {
          return e();
        }));
    }
    function E(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function k() {
      return y;
    }
    function I(e, t) {
      var n = S();
      ((c = c.filter(function (t) {
        return t.owner !== e;
      })),
        c.push({ owner: e, selectionKey: t }));
      var r = !u || d;
      ((u = !0),
        (d = !1),
        ((n == null ? void 0 : n.owner) !== e ||
          (n == null ? void 0 : n.selectionKey) !== t ||
          r) &&
          L());
    }
    function T() {
      ((_ = null), (f = null), s.dispose(!0), (h = null), (d = !1), L());
    }
    function D(e) {
      var t = R();
      if (
        ((c = c.filter(function (t) {
          return t.owner !== e;
        })),
        c.length === 0 && d)
      ) {
        T();
        return;
      }
      t !== R() && L();
    }
    function x(e) {
      return R() === e;
    }
    function $() {
      return u;
    }
    function P() {
      C != null && (r("cancelIdleCallback")(C.callbackID), (C = null));
    }
    function N() {
      g != null && (r("clearTimeout")(g), (g = null));
    }
    function M() {
      return ((m += 1), P(), N(), m);
    }
    function w() {
      ((_ = null), (f = null), s.cancelPendingPreload(), (h = null));
    }
    function A(t, n, o) {
      (s.preloadEntrypoint(t),
        (h = n),
        (g = r("setTimeout")(function () {
          m === o &&
            (s.cancelPendingPreload(), (_ = null), (g = null), (h = null));
        }, e)));
    }
    function F(e) {
      var t;
      if (!(_ != null || f != null)) {
        var n = b(e),
          o = v(e);
        if (!(((t = C) == null ? void 0 : t.key) === o || h === o)) {
          if (s.getEntrypointReferenceForDisplay(n) != null) {
            (M(), s.cancelPendingPreload(), (h = null));
            return;
          }
          var a = M();
          (s.cancelPendingPreload(), (h = null));
          var i = r("requestIdleCallback")(function () {
            m === a && ((C = null), A(n, o, a));
          });
          C = { callbackID: i, generation: a, key: o };
        }
      }
    }
    function O(e, t) {
      F(
        o(
          "getAdsUEditorAdgroupSectionsLayoutQueryVariablesForPrefetch",
        ).getAdsUEditorAdgroupSectionsLayoutQueryVariablesForPrefetch(e, t),
      );
    }
    function B(e) {
      var t,
        n = !u || d;
      ((u = !0), (d = !1));
      var r = b(e),
        o = v(e);
      if (s.getEntrypointReferenceForDisplay(r) != null) {
        (M(), w(), n && L());
        return;
      }
      if (((t = f) == null ? void 0 : t.key) === o) {
        ((_ = o), M(), n && L());
        return;
      }
      if (h === o) {
        ((_ = o), n && L());
        return;
      }
      (M(), w());
      var a = m;
      (A(r, o, a), (_ = o), L());
    }
    function W(e, t) {
      B(
        o(
          "getAdsUEditorAdgroupSectionsLayoutQueryVariablesForPrefetch",
        ).getAdsUEditorAdgroupSectionsLayoutQueryVariablesForPrefetch(e, t),
      );
    }
    function q(e) {
      if (!(f !== e || !u)) {
        var t = R();
        if (!(t != null && t !== e.owner)) {
          if (!s.promotePendingEntrypointForDisplay(e.entryPointParams)) {
            (w(), L());
            return;
          }
          ((_ = null), (f = null), (h = null), L());
        }
      }
    }
    function U(e, t, n) {
      var r = { entryPointParams: e, key: t, owner: n };
      ((f = r), q(r));
    }
    function V(e, t, n) {
      if (!(!u || !x(n))) {
        var r = b(e),
          o = v(e);
        if (s.getEntrypointReferenceForDisplay(r) != null) {
          ((_ = null), (f != null || h != null) && (M(), w()));
          return;
        }
        var a = f;
        if (a != null && a.key === o) {
          ((a.owner = n), q(a));
          return;
        }
        (M(),
          h !== o && (w(), s.preloadEntrypoint(r), (h = o)),
          s.getPendingEntrypointReference(r) != null && U(r, o, n));
      }
    }
    function H() {
      (M(), w());
    }
    function G(e) {
      return s.getEntrypointReferenceForDisplay(b(e));
    }
    function z(e, t) {
      if (!u) return null;
      var n = R();
      return (n != null && n !== t) || (n == null && _ !== v(e))
        ? null
        : s.getPendingEntrypointReference(b(e));
    }
    function j(e, t, n) {
      return {
        controllerRevision: n,
        exactEntryPointReference: G(e),
        pendingEntryPointReference: z(e, t),
      };
    }
    function K() {
      s.disposeSupersededEntrypoints();
    }
    function Q() {
      if (((u = !1), (d = !0), M(), w(), c.length === 0)) {
        T();
        return;
      }
      L();
    }
    var X = {
        activateDisplayOwner: I,
        cancelPendingPreload: H,
        deactivateDisplayOwner: D,
        dispose: Q,
        disposeSupersededEntrypoints: K,
        getEntrypointReferenceForDisplay: G,
        getEntrypointReferenceSnapshot: j,
        getPendingEntrypointReference: z,
        getRevision: k,
        isDisplayEnabled: $,
        isDisplayOwner: x,
        loadEntrypointForDisplay: V,
        prepareEntrypointForDisplay: B,
        prepareEntrypointForDisplayForIDs: W,
        preloadEntrypoint: F,
        preloadEntrypointForIDs: O,
        subscribe: E,
      },
      Y = X;
    l.default = Y;
  },
  98,
);
