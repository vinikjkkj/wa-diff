__d(
  "focusWithinLayer",
  ["DOMQuery", "Focus", "TabbableElements", "getActiveElement"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("DOMQuery").scry(e, ".autofocus")[0],
        a = !0;
      if (n) n.tabIndex !== 0 && (a = !1);
      else {
        var i = r("getActiveElement")();
        if (o("DOMQuery").isNodeOfType(i, ["input", "textarea"])) return;
        for (var l = o("TabbableElements").find(e), s = 0; s < l.length; s++) {
          var u = l[s];
          if (
            u.tagName !== "A" ||
            u.getAttribute("role") === "button" ||
            u.getAttribute("role") === "menuitem"
          ) {
            n = l[s];
            break;
          }
        }
      }
      n
        ? a
          ? o("Focus").set(n, t)
          : o("Focus").setWithoutOutline(n)
        : e.offsetWidth || ((e.tabIndex = -1), o("Focus").setWithoutOutline(e));
    }
    l.default = e;
  },
  98,
);
