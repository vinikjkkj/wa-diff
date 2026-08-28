__d(
  "Decoil",
  ["DecoilRoot.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useMemo,
      m = s.useSyncExternalStore;
    function p(e) {
      return e;
    }
    function _(e) {
      return function (t) {
        return babelHelpers.extends({}, e, { key: e.key + "." + t });
      };
    }
    function f(e) {
      var t = c(o("DecoilRoot.react").DecoilRootContext),
        n = t.getForAtom;
      return d(
        function () {
          return n(e);
        },
        [n, e],
      );
    }
    function g(e) {
      var t = f(e);
      return m(t.subscribe, t.getSnapshot);
    }
    function h(e) {
      var t = f(e);
      return u(
        function (e) {
          t.update(e);
        },
        [t],
      );
    }
    function y(e) {
      var t = g(e),
        n = h(e);
      return [t, n];
    }
    ((l.atom = p),
      (l.atomFamily = _),
      (l.useDecoilValue = g),
      (l.useSetDecoilState = h),
      (l.useDecoilState = y));
  },
  98,
);
