__d(
  "WAWebNewsletterGetRecommendedNewslettersAction",
  [
    "WALogger",
    "WAWebGetNewsletterDirectoryChats",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNewsletterDirectorySearchJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][getRecommendedNewslettersAction] Start",
          ])),
      );
      var t = await o(
          "WAWebNewsletterDirectorySearchJob",
        ).getRecommendedNewsletters(
          o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).getMaybeMyCountryCodeIso(),
        ),
        n = await o(
          "WAWebGetNewsletterDirectoryChats",
        ).getDirectoryNewsletterChats(t, { skipSubscribedNewsletters: !0 });
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletters][getRecommendedNewslettersAction] End",
            ])),
        ),
        n
      );
    }
    l.getRecommendedNewslettersAction = u;
  },
  98,
);
