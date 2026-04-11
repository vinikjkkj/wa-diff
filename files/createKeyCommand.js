__d(
  "createKeyCommand",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["alt", "command", "shift"];
    function l(t) {
      return e
        .filter(function (e) {
          return (t == null ? void 0 : t[e]) === !0;
        })
        .concat(t == null ? void 0 : t.key)
        .join(" ");
    }
    i.default = l;
  },
  66,
);
