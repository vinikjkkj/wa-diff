__d(
  "WAWebMexFetchNewsletterJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterJobQuery.graphql",
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
                : (e = n("WAWebMexFetchNewsletterJobQuery.graphql")),
            u = r("WAWebWid").isNewsletter(t) ? "JID" : "INVITE",
            c = u !== "INVITE",
            d = {
              input: { key: t, type: u, view_role: a },
              fetch_viewer_metadata: i.fetchViewerMetadata,
              fetch_full_image: c,
              fetch_creation_time: i.fetchCreationTime === !0,
              fetch_wamo_sub: i.fetchWamoSub === !0,
              fetch_status_metadata: i.fetchStatusMetadata === !0,
            },
            m = yield o("WAWebMexClient").fetchQuery(l, d);
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER] fetched get newsletter job for ",
                    "",
                  ])),
                t,
              )
              .tags("GQL", "MEX"),
            m
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.mexGetNewsletter = u;
  },
  98,
);
