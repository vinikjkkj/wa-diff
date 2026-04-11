__d(
  "WAWebMexFetchNewsletterDehydratedJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDehydratedJobQuery.graphql",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l =
              e !== void 0
                ? e
                : (e = n("WAWebMexFetchNewsletterDehydratedJobQuery.graphql")),
            u = r("WAWebWid").isNewsletter(t) ? "JID" : "INVITE",
            c = {
              input: { key: t, type: u, view_role: a },
              fetch_wamo_sub: i.fetchWamoSub === !0,
            },
            d = yield o("WAWebMexClient").fetchQuery(l, c);
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER] fetched verify+subCount+wamoSub for ",
                    "",
                  ])),
                t,
              )
              .tags("GQL", "MEX"),
            d
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.mexGetNewsletterDehydrated = u;
  },
  98,
);
