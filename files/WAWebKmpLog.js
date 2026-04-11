__d(
  "WAWebKmpLog",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        d: function (t, n, r) {},
        i: function (n, r, a) {
          o("WALogger").LOG(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            n,
          );
        },
        e: function (t, n, r) {
          o("WALogger").ERROR(
            s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            t,
          );
        },
        w: function (t, n, r) {
          o("WALogger").WARN(
            u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            t,
          );
        },
      };
    l.log = c;
  },
  98,
);
