__d(
  "WAWebMexFetchNewsletterReportsJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterReportsJobQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterReportsJobQuery.graphql"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = {},
            t = yield o("WAWebMexClient").fetchQuery(u, e);
          if ((t == null ? void 0 : t.xwa2_channels_reports) == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "Mex unexpected null response for fetching newsletter reports",
            );
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER][WA-ICE][DSAR] fetched newsletter reports",
                  ])),
              )
              .tags("GQL", "MEX", "wa-ice", "DSAR"),
            t
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterReports = c;
  },
  98,
);
