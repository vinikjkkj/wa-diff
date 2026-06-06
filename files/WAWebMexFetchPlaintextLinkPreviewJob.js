__d(
  "WAWebMexFetchPlaintextLinkPreviewJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchPlaintextLinkPreviewJobQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchPlaintextLinkPreviewJobQuery.graphql"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n, r, a;
          try {
            new URL(e);
          } catch (t) {
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER] ",
                    " is not a valid url",
                  ])),
                e,
              ),
              null
            );
          }
          var i = { input: { url: e } },
            l = yield o("WAWebMexClient").fetchQuery(u, i),
            c = l.xwa2_newsletter_link_preview,
            d =
              (c == null ? void 0 : c.direct_path) != null &&
              (c == null ? void 0 : c.hash) != null
                ? {
                    directPath: c.direct_path,
                    thumbHash: c.hash,
                    thumbHeight: (t = c.height) != null ? t : 0,
                    thumbWidth: (n = c.width) != null ? n : 0,
                  }
                : void 0;
          return {
            url: e,
            title: (r = c == null ? void 0 : c.title) != null ? r : void 0,
            description:
              (a = c == null ? void 0 : c.description) != null ? a : void 0,
            hqThumbnail: d,
            thumbData: c == null ? void 0 : c.thumb_data,
          };
        })),
        d.apply(this, arguments)
      );
    }
    l.mexFetchPlaintextLinkPreview = c;
  },
  98,
);
