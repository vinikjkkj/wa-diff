__d(
  "Style",
  ["$", "FBLogger", "StyleCore"],
  function (t, n, r, o, a, i, l) {
    var e = babelHelpers.extends({}, r("StyleCore"), {
        get: function (t, n) {
          return (
            typeof t == "string" &&
              (r("FBLogger")("Style").mustfix(
                "Style.get: Support for node IDs is deprecated.",
              ),
              (t = r("$")(t))),
            r("StyleCore").get(t, n)
          );
        },
        getFloat: function (t, n) {
          return (
            typeof t == "string" &&
              (r("FBLogger")("Style").mustfix(
                "Style.getFloat: Support for node IDs is deprecated.",
              ),
              (t = r("$")(t))),
            r("StyleCore").getFloat(t, n)
          );
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
