__d(
  "WAWebLogCustomerManagerListJourney",
  ["ErrorPubSub", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      try {
        t();
      } catch (t) {
        try {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] Journey logging failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("cm-list-journey-log-failed");
        } catch (e) {
          (s || (s = r("ErrorPubSub"))).reportError(r("getErrorSafe")(e));
        }
      }
    }
    l.default = u;
  },
  98,
);
