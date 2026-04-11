__d(
  "WebBloksAccessibilitySetFocus",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n,
        r =
          (n = t.uiMutableContainer) == null || (n = n.domNode) == null
            ? void 0
            : n.current,
        o = r == null ? void 0 : r.getAttribute("tabindex");
      (o == null && (r == null || r.setAttribute("tabindex", "-1")),
        r == null || r.focus());
    }
    i.default = e;
  },
  66,
);
