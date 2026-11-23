__d(
  "WAWebNewsletterStatusCardAlbum",
  [
    "fbt",
    "WALogger",
    "WAWebNewsletterShareToStatusEligibility",
    "WAWebNewsletterStatusCardMedia",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      var t,
        n = (t = e[0]) == null ? void 0 : t.mediaData;
      return {
        count: e.length,
        isFirstLandscape: n != null && n.fullWidth > n.fullHeight,
        moreText:
          e.length >
          o("WAWebNewsletterShareToStatusEligibility")
            .NEWSLETTER_STATUS_CARD_ALBUM_MAX_ITEMS
            ? String(
                s._(/*BTDS*/ "", [
                  s._param(
                    "number",
                    e.length -
                      (o("WAWebNewsletterShareToStatusEligibility")
                        .NEWSLETTER_STATUS_CARD_ALBUM_MAX_ITEMS -
                        1),
                  ),
                ]),
              )
            : null,
      };
    }
    function c(e) {
      return e.find(function (e) {
        return e.caption != null && e.caption !== "";
      });
    }
    async function d(e) {
      var t = await Promise.all(
        e.map(function (e) {
          return e != null ? m(e) : null;
        }),
      );
      if (
        t.length > 0 &&
        t.every(function (e) {
          return e == null;
        })
      )
        throw r("err")(
          "loadCardAlbumTiles: none of the album media could be drawn",
        );
      return t;
    }
    async function m(t) {
      try {
        return await o("WAWebNewsletterStatusCardMedia").loadCardPhoto(t);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-status-card] drawing an album tile without its media, which could not be decoded",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      }
    }
    ((l.getCardAlbumContent = u),
      (l.getCardAlbumCaptionMsg = c),
      (l.loadCardAlbumTiles = d));
  },
  226,
);
