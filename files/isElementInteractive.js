__d(
  "isElementInteractive",
  ["isContentEditable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
      s = new Set(["button", "checkbox", "radio", "submit"]);
    function u(t) {
      if ((!t) instanceof HTMLElement) return !1;
      var n = r("isContentEditable")(t),
        o = e.has(t.nodeName),
        a = t instanceof HTMLInputElement && s.has(t.type);
      return (n || o) && !a;
    }
    l.default = u;
  },
  98,
);
