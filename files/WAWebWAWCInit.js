__d(
  "WAWebWAWCInit",
  ["WALogger", "WAWebWAWCStorage", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return r("WAWebWAWCStorage").openDB();
    }
    async function u() {
      var t = r("WAWebWAWCStorage").opening;
      t != null && (await t);
      try {
        await r("WAWebWAWCStorage").idb();
      } catch (t) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "ensureWAWCOpen: idb() failed, fall back to openDB",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("wawc-ensure-open-fallback"),
          await r("WAWebWAWCStorage").openDB());
      }
    }
    ((l.initWAWC = s), (l.ensureWAWCOpen = u));
  },
  98,
);
