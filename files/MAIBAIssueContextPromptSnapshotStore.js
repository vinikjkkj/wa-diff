__d(
  "MAIBAIssueContextPromptSnapshotStore",
  ["ExecutionEnvironment", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useSyncExternalStore,
      c = 0,
      d = 0,
      m = null,
      p = new Set(),
      _ = 0,
      f = 0,
      g = null,
      h = new WeakSet(),
      y = new Set();
    function C() {
      y.forEach(function (e) {
        return e();
      });
    }
    function b() {
      return { epoch: ++_ };
    }
    function v(e, t, n, r, o) {
      if (!(h.has(e) || e.epoch < f)) {
        f = e.epoch;
        var a = g,
          i = void 0;
        (a != null &&
          a.token === e &&
          a.routeIdentity === t &&
          a.surface === n &&
          a.viewerKey === r &&
          (i = a.adAccountID),
          (g = {
            adAccountID: i,
            routeIdentity: t,
            status: o,
            surface: n,
            token: e,
            viewerKey: r,
          }),
          C());
      }
    }
    function S(e, t, n, r) {
      var o;
      return (
        h.delete(e),
        ((o = g) == null ? void 0 : o.token) !== e && v(e, t, n, r, "LOADING"),
        function () {
          var t;
          (h.add(e),
            ((t = g) == null ? void 0 : t.token) === e && ((g = null), C()));
        }
      );
    }
    function R(e, t, n, r) {
      v(e, t, n, r, "ERROR");
    }
    function L(e, t, n, r) {
      v(e, t, n, r, "READY");
    }
    function E() {
      return { epoch: ++c };
    }
    function k(e) {
      return (
        p.add(e),
        (d = Math.max(d, e.epoch)),
        function () {
          var t;
          (p.delete(e),
            ((t = m) == null ? void 0 : t.token) === e && ((m = null), C()));
        }
      );
    }
    function I(e, t) {
      var n;
      !p.has(e) ||
        e.epoch !== d ||
        (m != null && m.token.epoch > e.epoch) ||
        ((m = { snapshot: t, token: e }),
        g != null &&
          g.viewerKey === t.viewerKey &&
          g.routeIdentity === t.routeIdentity &&
          g.surface === ((n = t.surface) != null ? n : "BSH") &&
          (g = babelHelpers.extends({}, g, {
            adAccountID: t.adAccountID,
            status: "READY",
          })),
        C());
    }
    function T(e) {
      return (
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    var D = T;
    function x(t, n) {
      var o,
        a,
        i = (o = m) == null ? void 0 : o.snapshot;
      return !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        t === "" ||
        t === "0" ||
        i == null ||
        i.viewerKey !== t ||
        ((a = i.surface) != null ? a : "BSH") !== n ||
        (n !== "BSH" &&
          (g == null ||
            g.status !== "READY" ||
            g.viewerKey !== t ||
            g.surface !== n ||
            g.routeIdentity !== i.routeIdentity ||
            (g.adAccountID !== void 0 && g.adAccountID !== i.adAccountID)))
        ? null
        : i;
    }
    function $() {
      return m;
    }
    function P() {
      return null;
    }
    function N() {
      return g;
    }
    function M() {
      return null;
    }
    function w() {
      ((c = 0),
        (d = 0),
        (m = null),
        p.clear(),
        (_ = 0),
        (f = 0),
        (g = null),
        (h = new WeakSet()),
        y.clear());
    }
    function A(t, n) {
      var o,
        a = u(D, N, M),
        i = u(D, $, P),
        l = i == null ? void 0 : i.snapshot;
      return !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        t == null ||
        t === "" ||
        t === "0" ||
        a == null ||
        a.status !== "READY" ||
        a.viewerKey !== t ||
        a.surface !== n ||
        l == null ||
        l.viewerKey !== t ||
        ((o = l.surface) != null ? o : "BSH") !== n ||
        l.routeIdentity !== a.routeIdentity ||
        (a.adAccountID !== void 0 && l.adAccountID !== a.adAccountID)
        ? null
        : l.adAccountID;
    }
    function F(t, n, o) {
      var a = u(D, N, M);
      return !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        t == null ||
        t === "" ||
        t === "0" ||
        a == null ||
        a.viewerKey !== t ||
        a.surface !== o ||
        (a.status === "READY" &&
          a.adAccountID !== void 0 &&
          a.adAccountID !== (n != null ? n : null))
        ? null
        : a.status;
    }
    function O(t, n, o) {
      var a,
        i = o === void 0 ? "BSH" : o,
        l = u(D, $, P),
        s = l == null ? void 0 : l.snapshot;
      return !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        t == null ||
        t === "" ||
        t === "0" ||
        s == null ||
        s.viewerKey !== t ||
        s.adAccountID !== (n != null ? n : null) ||
        ((a = s.surface) != null ? a : "BSH") !== i
        ? null
        : s;
    }
    ((l.createMAIBAIssueContextPromptOwnerLifecycleToken = b),
      (l.activateMAIBAIssueContextPromptOwnerLifecycle = S),
      (l.markMAIBAIssueContextPromptOwnerError = R),
      (l.markMAIBAIssueContextPromptOwnerReady = L),
      (l.createMAIBAIssueContextPromptSnapshotOwnerToken = E),
      (l.activateMAIBAIssueContextPromptSnapshotOwner = k),
      (l.publishMAIBAIssueContextPromptSnapshot = I),
      (l.subscribeMAIBAIssueContextPromptSnapshot = T),
      (l.getMAIBAIssueContextPromptSnapshotForSurface = x),
      (l.resetMAIBAIssueContextPromptSnapshotStore = w),
      (l.useMAIBAIssueContextPromptOwnerAdAccountID = A),
      (l.useMAIBAIssueContextPromptOwnerStatus = F),
      (l.useMAIBAIssueContextPromptSnapshot = O));
  },
  98,
);
