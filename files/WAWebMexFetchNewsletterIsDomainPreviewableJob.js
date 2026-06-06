__d(
  "WAWebMexFetchNewsletterIsDomainPreviewableJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery.graphql",
            ));
    async function c(e) {
      var t,
        n,
        r = { url_domains: e },
        a = await o("WAWebMexClient").fetchQuery(u, r);
      o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[MEX][NEWSLETTER] fetched domains previewable status ",
              "",
            ])),
          JSON.stringify(e),
        )
        .tags("GQL", "MEX");
      var i =
          (t =
            (n = a.xwa2_newsletter_message_integrity) == null
              ? void 0
              : n.url_previews) != null
            ? t
            : [],
        l = new Map(
          i.map(function (e) {
            var t = e.is_previewable,
              n = e.url_domain;
            return [n, t === !0];
          }),
        );
      return l;
    }
    l.mexFetchNewsletterIsDomainPreviewable = c;
  },
  98,
);
