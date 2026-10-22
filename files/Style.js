__d(
  "Style",
  ["$", "FBLogger", "StyleCore"],
  function (t, n, r, o, a, i, l) {
    var e = babelHelpers.extends({}, r("StyleCore"), {
        get: function (t, n) {
          var e = t;
          return (
            typeof e == "string" &&
              (r("FBLogger")("Style").mustfix(
                "Style.get: Support for node IDs is deprecated.",
              ),
              (e = r("$")(e))),
            r("StyleCore").get(e, n)
          );
        },
        getFloat: function (t, n) {
          var e = t;
          return (
            typeof e == "string" &&
              (r("FBLogger")("Style").mustfix(
                "Style.getFloat: Support for node IDs is deprecated.",
              ),
              (e = r("$")(e))),
            r("StyleCore").getFloat(e, n)
          );
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
