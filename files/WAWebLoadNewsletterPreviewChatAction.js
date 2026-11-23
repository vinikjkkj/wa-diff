__d(
  "WAWebLoadNewsletterPreviewChatAction",
  [
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterPreviewJob",
    "WAWebNewsletterRoleIdentifier",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][loadNewsletterPreviewChat] Start",
          ])),
      );
      try {
        var a,
          i,
          l,
          d,
          m,
          p = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(t),
          _ = await o("WAWebNewsletterPreviewJob").getNewsletterPreviewData(
            t,
            p,
            n,
          ),
          f = _.ids,
          g = _.newsletterMessages,
          h = _.newsletterMetadata,
          y = _.newsletterReactions,
          C = _.newsletterVotes;
        if (h == null)
          throw r("err")("Did not receive newsletter preview data");
        var b = r("WAWebNewsletterCollection").get(h.idJid);
        if (
          b != null &&
          (((a =
            (i = b.newsletterMetadata) == null
              ? void 0
              : i.iAmAdminOrOwner()) != null &&
            a) ||
            ((l =
              (d = b.newsletterMetadata) == null
                ? void 0
                : d.iAmSubscriber()) != null &&
              l))
        )
          return b;
        var v = o("WAWebNewsletterModelUtils").mapPreviewNewsletterToMetadata(
            h,
          ),
          S = o("WAWebNewsletterModelUtils").mapPreviewNewsletterToChat(h);
        await o("WAWebNewsletterPreviewJob").persistPreviewNewsletterInfoInDb(
          S,
          v,
          g,
        );
        var R =
            h == null || (m = h.newsletterPictureMetadataMixin) == null
              ? void 0
              : m.picture,
          L =
            R != null
              ? o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
                  h.idJid,
                  R,
                )
              : null;
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletters][loadNewsletterPreviewChat] updating models",
            ])),
        );
        var E = await o(
          "WAWebNewsletterBridgeApi",
        ).NewsletterBridgeApi.loadNewsletterPreviewChat({
          metadata: v,
          pic: L,
          newsletter: S,
          messages: g,
        });
        return (
          await o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.updateNewsletterMessages({
            ids: f,
            reactions: y,
            pollVotes: C,
          }),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][loadNewsletterPreviewChat] End",
              ])),
          ),
          E
        );
      } catch (e) {
        var k = e instanceof Error ? e : {},
          I = k.message,
          T = k.name;
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][loadNewsletterPreviewChat] preview failed ",
                  "-",
                  "",
                ])),
              T,
              I,
            )
            .tags("newsletter")
            .sendLogs("newsletter-failed-to-retrieve-newsletter-preview-data"),
          e
        );
      }
    }
    l.loadNewsletterPreviewChat = d;
  },
  98,
);
