__d(
  "AdsPEFilterButtonDropdownController",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = null,
      c = null,
      d = 0,
      m = 0,
      p = new Set(),
      _ = new Map(),
      f = new Set();
    function g() {
      for (var e of f) e();
    }
    function h(e, t) {
      (t === u && e === c) || ((c = e), (u = t), g());
    }
    function y() {
      return { epoch: ++d };
    }
    function C(e) {
      return (
        p.add(e),
        (m = Math.max(m, e.epoch)),
        function () {
          (p.delete(e), _.delete(e), (m = 0));
          var t = null;
          for (var n of p) n.epoch > m && ((m = n.epoch), (t = n));
          if (e === c) {
            var r,
              o = t != null && (r = _.get(t)) != null ? r : null;
            h(o != null ? t : null, o);
          }
        }
      );
    }
    function b(e, t) {
      p.has(e) &&
        (_.set(e, t),
        !(e.epoch !== m || (c != null && c.epoch > e.epoch)) && h(e, t));
    }
    function v(e) {
      return (
        f.add(e),
        function () {
          f.delete(e);
        }
      );
    }
    function S() {
      return u;
    }
    function R() {
      return S();
    }
    function L() {
      return s(v, R, R);
    }
    var E = !1,
      k = new Set();
    function I() {
      if (!E) {
        E = !0;
        for (var e of k) e();
      }
    }
    function T(e) {
      return (
        k.add(e),
        function () {
          k.delete(e);
        }
      );
    }
    function D() {
      return E;
    }
    function x() {
      return s(T, D, D);
    }
    ((l.createFilterButtonDropdownInputsOwner = y),
      (l.activateFilterButtonDropdownInputsOwner = C),
      (l.updateFilterButtonDropdownInputs = b),
      (l.subscribeToFilterButtonDropdownInputs = v),
      (l.getFilterButtonDropdownInputs = S),
      (l.useFilterButtonDropdownInputs = L),
      (l.requestFilterButtonDropdownInputs = I),
      (l.useIsFilterButtonDropdownInputsRequested = x));
  },
  98,
);
