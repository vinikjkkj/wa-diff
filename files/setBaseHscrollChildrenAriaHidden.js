__d(
  "setBaseHscrollChildrenAriaHidden",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = Array.from(e.children[0].children).filter(function (e) {
          return e.tagName === "DIV";
        }),
        n = e.getBoundingClientRect();
      t.forEach(function (e) {
        var t = e.getBoundingClientRect();
        if (n != null) {
          var r = t.right < n.left,
            o = t.left > n.right;
          ((o || r) &&
            e.getAttribute("aria-hidden") !== "true" &&
            e.setAttribute("aria-hidden", "true"),
            !o &&
              !r &&
              e.getAttribute("aria-hidden") === "true" &&
              e.removeAttribute("aria-hidden"));
        }
      });
    }
    i.default = e;
  },
  66,
);
