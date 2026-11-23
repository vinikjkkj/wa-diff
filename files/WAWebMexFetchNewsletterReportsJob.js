__d(
  "WAWebMexFetchNewsletterReportsJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterReportsJobQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterReportsJobQuery.graphql"));
    async function c(e) {
      var t = { locale: e },
        n = await o("WAWebMexClient").fetchQuery(u, t);
      if ((n == null ? void 0 : n.xwa2_channels_reports) == null)
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
        n
      );
    }
    l.mexFetchNewsletterReports = c;
  },
  98,
);
