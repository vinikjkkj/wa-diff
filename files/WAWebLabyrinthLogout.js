__d(
  "WAWebLabyrinthLogout",
  [
    "JSResourceForInteraction",
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebLabyrinthDebugStorage").__setRef(
        "WAWebLabyrinthLogout",
      );
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(!r("gkx")("23871") && !r("gkx")("27715")))
            try {
              var t = yield s.load(),
                n = t.destroy;
              yield n();
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "destroyStorage: loading Labyrinth debug storage failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("labyrinth-debug-storage-load-failed");
            }
        })),
        c.apply(this, arguments)
      );
    }
    l.clearLabyrinthAtLogout = u;
  },
  98,
);
