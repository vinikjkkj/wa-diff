__d(
  "GeoPrivateSelectorItemUtils",
  [
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "GeoPrivateComponentUtils",
    "areEqual",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = 20;
    function m(e) {
      return e.length > d && !f(e);
    }
    function p(e) {
      var t,
        n =
          (t = o("GeoPrivateComponentUtils").getElementComponentName(e)) != null
            ? t
            : "";
      return (
        (n == null ? void 0 : n.includes("GeoSelectorItem")) ||
        (n == null ? void 0 : n.includes("GeoBaseSelectorItem")) ||
        (n == null ? void 0 : n.includes("GeoMultiSelectorItem"))
      );
    }
    function _(e) {
      var t,
        n =
          (t = o("GeoPrivateComponentUtils").getElementComponentName(e)) != null
            ? t
            : "";
      return (
        (n == null ? void 0 : n.includes("GeoSelectorGroup")) ||
        (n == null ? void 0 : n.includes("GeoMultiSelectorGroup"))
      );
    }
    function f(e) {
      return e.some(_);
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      if (t[0] !== e) {
        var a = function (t) {
          t.forEach(function (e) {
            if (
              r(
                "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
              )(e).props != null
            ) {
              if (p(e)) {
                var t = r(
                  "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                )(e).props;
                n.set(t.value, t);
              } else if (_(e)) {
                var o = r(
                  "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                )(e).props;
                a(u.Children.toArray(o.children));
              }
            }
          });
        };
        ((n = new Map()), a(e), (t[0] = e), (t[1] = n));
      } else n = t[1];
      return n;
    }
    function h(e) {
      var t;
      return (t = e.isDisabled) != null ? t : !1;
    }
    function y(t, n) {
      var a = o("react-compiler-runtime").c(3),
        i;
      if (a[0] !== t || a[1] !== n) {
        i = new Map();
        var l = [].concat(n),
          s = new Set(l),
          u = function (n) {
            return s.has(n.value)
              ? !0
              : n.value != null && typeof n.value == "object"
                ? l.some(function (t) {
                    return (e || (e = r("areEqual")))(t, n.value);
                  })
                : !1;
          };
        (t.forEach(function (e) {
          u(e) && i.set(e.value, e);
        }),
          (a[0] = t),
          (a[1] = n),
          (a[2] = i));
      } else i = a[2];
      return i;
    }
    ((l.getShouldVirtualize = m),
      (l.isItem = p),
      (l.useItems = g),
      (l.getIsItemDisabled = h),
      (l.useSelectedItems = y));
  },
  98,
);
