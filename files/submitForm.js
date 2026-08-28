__d(
  "submitForm",
  ["cr:6114"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.querySelector('input[type="submit"]');
      t != null
        ? t.click()
        : ((t = n("cr:6114").create("input", {
            type: "submit",
            className: "hidden_elem",
          })),
          n("cr:6114").appendContent(e, t),
          t.click(),
          n("cr:6114").remove(t));
    }
    l.default = e;
  },
  98,
);
