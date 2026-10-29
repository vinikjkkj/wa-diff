__d(
  "WAWebAccountLinkingScheduledJobs",
  [
    "WALogger",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebGraphQLServerError",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebAccountLinkingAPI").__setRef(
        "WAWebAccountLinkingScheduledJobs",
      ),
      c = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield c.getPingExpirationTime(),
            n = Date.now() / 1e3;
          if (n > t) {
            try {
              var r = yield u.load(),
                a = r.ping;
              yield a();
            } catch (t) {
              var i =
                t instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? o("WAWebGraphQLServerError").formatGraphQLServerError(t)
                  : t;
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] ping failed: ",
                      "",
                    ])),
                  i,
                )
                .tags("waffle", "account-linking", "ping")
                .sendLogs("waffle-ping-failed", { sampling: 0.01 });
              return;
            }
            try {
              var l = yield u.load(),
                d = l.fetchServiceData;
              yield d();
            } catch (e) {
              var m =
                e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
                  : e;
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] fetchServiceData failed: ",
                      "",
                    ])),
                  m,
                )
                .tags("waffle", "account-linking", "fetch-service-data")
                .sendLogs("waffle-fetch-service-data-failed", {
                  sampling: 0.01,
                });
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.scheduledWaffleJobs = d;
  },
  98,
);
