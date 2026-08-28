__d(
  "GeoPrivateARIADOMFocusManager",
  ["FocusManager", "scrollNodeIntoView"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = '[role="option"]:not([aria-disabled="true"])',
      s = '[role="option"][aria-selected="true"]:not([aria-disabled="true"])';
    function u(e) {
      (o("FocusManager").focusElement(e, { preventScroll: !0 }),
        r("scrollNodeIntoView")(e),
        (e.tabIndex = 0));
      function t() {
        ((e.tabIndex = -1), e.removeEventListener("blur", t));
      }
      e.addEventListener("blur", t);
    }
    function c(e) {
      return e.findIndex(function (e) {
        var t;
        return (t = document.activeElement) == null ? void 0 : t.contains(e);
      });
    }
    function d(e, t) {
      var n, r;
      return (n =
        (r = e.textContent) == null
          ? void 0
          : r.toLowerCase().startsWith(t.toLowerCase())) != null
        ? n
        : !1;
    }
    function m(e) {
      var t, n;
      return (t = (n = e.current) == null ? void 0 : n.querySelector(s)) != null
        ? t
        : void 0;
    }
    function p(t) {
      var n,
        r = (n = t.current) == null ? void 0 : n.querySelectorAll(e);
      return r ? Array.from(r) : [];
    }
    function _(e) {
      var t;
      return (t = e.id) != null ? t : e.textContent;
    }
    function f(e) {
      return e.getAttribute("aria-disabled") === "true";
    }
    var g = {
        focus: u,
        getFirstSelectedOption: m,
        getFocusedIndex: c,
        getMatchesOption: d,
        getOptions: p,
        getUniqueID: _,
        getIsDisabled: f,
      },
      h = g;
    l.default = h;
  },
  98,
);
