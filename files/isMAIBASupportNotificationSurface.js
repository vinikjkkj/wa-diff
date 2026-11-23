__d(
  "isMAIBASupportNotificationSurface",
  ["ALToolTab"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("ALToolTab").getCurrentToolTab(),
        t = e.tool;
      return t === "Business Support" || t === "Business Help Center";
    }
    l.default = e;
  },
  98,
);
