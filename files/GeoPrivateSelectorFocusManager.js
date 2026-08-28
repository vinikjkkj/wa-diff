__d(
  "GeoPrivateSelectorFocusManager",
  [
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "FocusManager",
    "GeoPrivateSelectorItemUtils",
    "areEqual",
    "react",
    "scrollNodeIntoView",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useMemo,
      d = u.useRef;
    function m(e) {
      (o("FocusManager").focusElement(e, { preventScroll: !0 }),
        r("scrollNodeIntoView")(e),
        (e.tabIndex = 0));
      function t() {
        ((e.tabIndex = -1), e.removeEventListener("blur", t));
      }
      e.addEventListener("blur", t);
    }
    function p(t, n, a, i, l) {
      function s(e) {
        return typeof e == "string" ? e : e.label.toString().toLowerCase();
      }
      function u(t) {
        return i.findIndex(function (n) {
          if (o("GeoPrivateSelectorItemUtils").isItem(n)) {
            var a = r(
              "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
            )(n).props;
            return (e || (e = r("areEqual")))(a.value, t.value);
          }
          return !1;
        });
      }
      function c(e) {
        var t, n;
        return Array.from(
          (t =
            (n = e.current) == null
              ? void 0
              : n.querySelectorAll('[role="option"]')) != null
            ? t
            : [],
        );
      }
      function d(e, t) {
        var n = s(e),
          r = c(t);
        for (var o of r) if (p(o) === n) return o;
      }
      function p(e) {
        var t,
          n,
          r = e == null ? void 0 : e.getAttribute("aria-labelledby"),
          o =
            r != null
              ? (t = document) == null
                ? void 0
                : t.getElementById(r)
              : e;
        return o == null || (n = o.textContent) == null
          ? void 0
          : n.toLowerCase();
      }
      var _ = null;
      function f(e, n) {
        var o = u(e),
          a = t.current;
        if (!(o < 0 || a == null)) {
          a.scrollToItemIfNeeded(o, { behavior: "instant" });
          var i = function () {
            var t = d(e, n);
            t != null && (r("scrollNodeIntoView")(t), m(t));
          };
          (i(), window.clearTimeout(_), (_ = window.setTimeout(i, 100)));
        }
      }
      function g(e) {
        var t,
          n = p((t = document) == null ? void 0 : t.activeElement);
        return n == null
          ? 0
          : e.findIndex(function (e) {
              return n === s(e);
            });
      }
      function h(e, t) {
        return s(e).startsWith(t.toLowerCase());
      }
      function y() {
        var e = [];
        return (
          n.forEach(function (t) {
            t.isDisabled !== !0 && e.push(t);
          }),
          e
        );
      }
      function C() {
        return a.values().next().value;
      }
      function b(e) {
        return s(e);
      }
      function v(e) {
        return l(e);
      }
      return {
        focus: f,
        getFirstSelectedOption: C,
        getFocusedIndex: g,
        getMatchesOption: h,
        getOptions: y,
        getUniqueID: b,
        getIsDisabled: v,
      };
    }
    function _(e, t, n, r) {
      var o = d(null),
        a = c(
          function () {
            return p(o, e, t, n, r);
          },
          [n, e, t, r],
        );
      return [o, a];
    }
    l.useGeoPrivateVirtualListFocusManager = _;
  },
  98,
);
