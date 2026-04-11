__d(
  "Style",
  ["$", "StyleCore"],
  function (t, n, r, o, a, i, l) {
    var e = babelHelpers.extends({}, r("StyleCore"), {
        get: function (t, n) {
          return (
            typeof t == "string" && (t = r("$")(t)),
            r("StyleCore").get(t, n)
          );
        },
        getFloat: function (t, n) {
          return (
            typeof t == "string" && (t = r("$")(t)),
            r("StyleCore").getFloat(t, n)
          );
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
