__d(
  "WAWebMexFetchNewsletterDehydratedJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDehydratedJobQuery.graphql",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, a, i) {
      var l =
          e !== void 0
            ? e
            : (e = n("WAWebMexFetchNewsletterDehydratedJobQuery.graphql")),
        u = r("WAWebWid").isNewsletter(t) ? "JID" : "INVITE",
        c = {
          input: { key: t, type: u, view_role: a },
          fetch_wamo_sub: i.fetchWamoSub === !0,
        },
        d = await o("WAWebMexClient").fetchQuery(l, c);
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
    }
    l.mexGetNewsletterDehydrated = u;
  },
  98,
);
