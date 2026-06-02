__d(
  "WAWebGetNewsletterDirectoryChats",
  [
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterSyntheticStatusUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      try {
        var a = n.skipSubscribedNewsletters,
          i = t.map(async function (e) {
            var t,
              n = r("WAWebNewsletterCollection").get(e.idJid);
            return (n == null || (t = n.newsletterMetadata) == null
              ? void 0
              : t.isPreview) === !1
              ? (await c(n, e), a ? Promise.resolve(null) : Promise.resolve(n))
              : u(e);
          }),
          l = await Promise.all(i);
        return l.filter(Boolean);
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getDirectoryNewsletterChats] dir chats failed",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-failed-to-search-newsletter-directory"),
          t
        );
      }
    }
    async function u(e) {
      var t,
        n = o("WAWebNewsletterModelUtils").mapDirectoryNewsletterToChat(e),
        r = o("WAWebNewsletterModelUtils").mapDirectoryNewsletterToMetadata(e),
        a = (t = e.newsletterPictureMetadataMixin) == null ? void 0 : t.picture,
        i =
          a != null
            ? o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
                e.idJid,
                a,
              )
            : null,
        l = await o(
          "WAWebNewsletterBridgeApi",
        ).NewsletterBridgeApi.loadNewsletterPreviewChat({
          newsletter: n,
          metadata: r,
          pic: i,
        });
      if (l != null) {
        var s,
          u,
          c = e.newsletterStatusMetadata;
        o("WAWebNewsletterSyntheticStatusUtils").maybeCreateOrCleanupSynthetic(
          l.id,
          (s = c == null ? void 0 : c.lastStatusServerId) != null ? s : null,
          (u = c == null ? void 0 : c.lastStatusSentTime) != null ? u : null,
          e.idJid,
        );
      }
      return l;
    }
    async function c(e, t) {
      var n,
        r = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(
          o(
            "WAWebNewsletterModelUtils",
          ).convertDirectoryNewsletterMetadataToNewsletterMetadata(t),
        );
      ((n = e.newsletterMetadata) == null || n.set(r, { merge: !0 }),
        await d(t));
    }
    async function d(e) {
      var t,
        n = (t = e.newsletterPictureMetadataMixin) == null ? void 0 : t.picture;
      if (n != null) {
        var r = o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
          e.idJid,
          n,
        );
        await o(
          "WAWebNewsletterBridgeApi",
        ).NewsletterBridgeApi.updateNewsletterPicture({ pic: r });
      }
    }
    l.getDirectoryNewsletterChats = s;
  },
  98,
);
