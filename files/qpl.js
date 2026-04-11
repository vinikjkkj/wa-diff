__d(
  "qpl",
  ["FBLogger", "QPLHasteSupportDataStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = {
        _: function (n, o) {
          var t = e[o];
          if (t == null) {
            var a = r("QPLHasteSupportDataStorage").get(o);
            (a == null
              ? (r("FBLogger")("staticresources").mustfix(
                  "Failed to find a Haste-supplied config for the QPL event identified by token `%s`.",
                  o,
                ),
                (t = { i: n }))
              : (t = babelHelpers.extends({ i: n }, a)),
              (e[o] = t));
          }
          return t;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
