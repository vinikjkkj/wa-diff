__d(
  "WAWebSafari14Fix",
  ["WALogger", "WAWebUA", "WAWebWAWCStorage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            o("WAWebUA").UA.isLocalStorageBroken &&
              (yield r("WAWebWAWCStorage").loadUserIdb());
          } catch (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "loadUserIdbForBrokenSafariVersion failed with error ",
                  "",
                ])),
              t,
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.loadUserIdbForBrokenSafariVersion = s;
  },
  98,
);
