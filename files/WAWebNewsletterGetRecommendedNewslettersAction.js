__d(
  "WAWebNewsletterGetRecommendedNewslettersAction",
  [
    "WALogger",
    "WAWebGetNewsletterDirectoryChats",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNewsletterDirectorySearchJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getRecommendedNewslettersAction] Start",
              ])),
          );
          var t = yield o(
              "WAWebNewsletterDirectorySearchJob",
            ).getRecommendedNewsletters(
              o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).getMaybeMyCountryCodeIso(),
            ),
            n = yield o(
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
        })),
        c.apply(this, arguments)
      );
    }
    l.getRecommendedNewslettersAction = u;
  },
  98,
);
