__d(
  "BizSuitePageGatingStore",
  ["BizSuitePageGatingEventTypes", "Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { gk: {}, qe: {}, installed: !1 };
    function u() {
      s.installed = !0;
    }
    function c() {
      return s.installed;
    }
    function d(e) {
      (s[e.type][e.unitID] == null && (s[e.type][e.unitID] = {}),
        s[e.type][e.unitID][e.name] == null &&
          (s[e.type][e.unitID][e.name] = {
            asyncState: o("BizSuitePageGatingEventTypes").PageGatingAsyncState
              .PENDING,
            entry: null,
            exposed: !1,
            pristine: !1,
            listeners: new Set(),
          }),
        (s[e.type][e.unitID][e.name].entry = e),
        (s[e.type][e.unitID][e.name].asyncState = o(
          "BizSuitePageGatingEventTypes",
        ).PageGatingAsyncState.FULFILLED));
    }
    function m(e, t, n, r) {
      return (
        r === void 0 && (r = null),
        s[n][e] == null && (s[n][e] = {}),
        s[n][e][t] == null &&
          (s[n][e][t] = {
            asyncState: o("BizSuitePageGatingEventTypes").PageGatingAsyncState
              .PENDING,
            entry: null,
            exposed: !1,
            pristine: !0,
            listeners: new Set(),
          }),
        r != null && s[n][e][t].listeners.add(r),
        s[n][e][t]
      );
    }
    function p(e, t, n) {
      var r;
      return (r = s[n]) == null || (r = r[e]) == null ? void 0 : r[t];
    }
    function _(e, t) {
      var n;
      return (n = s[t]) == null ? void 0 : n[e];
    }
    function f(e, t, n, r) {
      r === void 0 && (r = null);
      var o = p(e, t, n);
      r != null && o != null && (o.listeners.delete(r), r.remove());
    }
    function g(e) {
      for (var t of Object.keys((n = s.gk[e]) != null ? n : {})) {
        var n, r;
        if (
          ((r = s.gk[e]) == null || (r = r[t]) == null ? void 0 : r.entry) !=
          null
        )
          return !0;
      }
      for (var o of Object.keys((a = s.gk[e]) != null ? a : {})) {
        var a, i;
        if (
          ((i = s.qe[e]) == null || (i = i[o]) == null ? void 0 : i.entry) !=
          null
        )
          return !0;
      }
      return !1;
    }
    function h(e) {
      var t = Object.keys(s[e]);
      if (t.length === 0) return [];
      var n = s[e][t[0]];
      return Object.values(n != null ? n : {})
        .map(function (e) {
          return e.entry;
        })
        .filter(Boolean);
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = [];
          for (var r of ["gk", "qe"])
            for (var o of Object.keys(s[r]))
              for (var a of Object.keys(s[r][o])) {
                var i = s[r][o][a],
                  l = i == null ? void 0 : i.deferredPromise;
                if (l != null) {
                  var u = l[1];
                  (u(null), t.push(l));
                }
              }
          ((s.gk = {}),
            (s.qe = {}),
            yield (e || (e = n("Promise"))).all(
              t
                .map(function (e) {
                  return e[0];
                })
                .filter(Boolean),
            ));
        })),
        C.apply(this, arguments)
      );
    }
    ((l.install = u),
      (l.isInstalled = c),
      (l.registerEntry = d),
      (l.initializeEntryState = m),
      (l.getPageGatingEntryState = p),
      (l.getPageGatingStates = _),
      (l.disposeListener = f),
      (l.hasEntriesForPage = g),
      (l.getGatingListForFirstPage = h),
      (l.resetPageGatingStore = y));
  },
  98,
);
