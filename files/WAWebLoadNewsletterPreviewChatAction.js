__d(
  "WAWebLoadNewsletterPreviewChatAction",
  [
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterPreviewJob",
    "WAWebNewsletterRoleIdentifier",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][loadNewsletterPreviewChat] Start",
              ])),
          );
          try {
            var a,
              i = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(t),
              l = yield o("WAWebNewsletterPreviewJob").getNewsletterPreviewData(
                t,
                i,
                n,
              ),
              d = l.ids,
              m = l.newsletterMessages,
              p = l.newsletterMetadata,
              _ = l.newsletterReactions,
              f = l.newsletterVotes;
            if (p == null)
              throw r("err")("Did not receive newsletter preview data");
            var g = r("WAWebNewsletterCollection").get(p.idJid);
            if (
              g != null &&
              (o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                g.newsletterMetadata,
              ) ||
                o("WAWebNewsletterMembershipUtil").iAmSubscriber(
                  g.newsletterMetadata,
                ))
            )
              return g;
            var h = o(
                "WAWebNewsletterModelUtils",
              ).mapPreviewNewsletterToMetadata(p),
              y = o("WAWebNewsletterModelUtils").mapPreviewNewsletterToChat(p);
            yield o(
              "WAWebNewsletterPreviewJob",
            ).persistPreviewNewsletterInfoInDb(y, h, m);
            var C =
                p == null || (a = p.newsletterPictureMetadataMixin) == null
                  ? void 0
                  : a.picture,
              b =
                C != null
                  ? o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(
                      p.idJid,
                      C,
                    )
                  : null;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletters][loadNewsletterPreviewChat] updating models",
                ])),
            );
            var v = yield o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.loadNewsletterPreviewChat({
              metadata: h,
              pic: b,
              newsletter: y,
              messages: m,
            });
            return (
              yield o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.updateNewsletterMessages({
                ids: d,
                reactions: _,
                pollVotes: f,
              }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters][loadNewsletterPreviewChat] End",
                  ])),
              ),
              v
            );
          } catch (e) {
            var S = e instanceof Error ? e : {},
              R = S.message,
              L = S.name;
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][loadNewsletterPreviewChat] preview failed ",
                      "-",
                      "",
                    ])),
                  L,
                  R,
                )
                .tags("newsletter")
                .sendLogs(
                  "newsletter-failed-to-retrieve-newsletter-preview-data",
                ),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.loadNewsletterPreviewChat = d;
  },
  98,
);
