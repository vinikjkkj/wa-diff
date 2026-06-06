__d(
  "WAWebSafari14Fix",
  ["WALogger", "WAWebUA", "WAWebWAWCStorage"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        o("WAWebUA").UA.isLocalStorageBroken &&
          (await r("WAWebWAWCStorage").loadUserIdb());
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
    }
    l.loadUserIdbForBrokenSafariVersion = s;
  },
  98,
);
