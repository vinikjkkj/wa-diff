__d(
  "WAWebFetchNewsletterProfilePic",
  [
    "WAJids",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l,
            s = { id: e },
            u = o("WAJids").toNewsletterJid(e.toString()),
            c = yield o("WAWebNewsletterMetadataJob").getNewsletterMetadata(
              u,
              t,
              { picture: !0 },
            ),
            d =
              c == null || (n = c.newsletterPictureMetadataMixin) == null
                ? void 0
                : n.picture;
          if (d == null) return s;
          var m = o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
            u,
            d,
          );
          return babelHelpers.extends({}, s, {
            tag: (r = m.tag) != null ? r : void 0,
            eurl: (a = m.eurl) != null ? a : void 0,
            previewEurl: (i = m.previewEurl) != null ? i : void 0,
            stale: m.stale,
            eurlStale: !1,
            timestamp: (l = m.timestamp) != null ? l : Date.now(),
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.fetchNewsletterProfilePic = e;
  },
  98,
);
