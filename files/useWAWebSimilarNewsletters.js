__d(
  "useWAWebSimilarNewsletters",
  [
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "compactMap",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("useWAWebModelValues").useOptionalModelValues(
          o("useWAWebModelValues").useModelValues(e, ["newsletterMetadata"])
            .newsletterMetadata,
          ["similarNewsletters"],
        ),
        n = r("useWAWebEventTargetValue")(
          t,
          ["similarNewsletters"],
          function () {
            var e =
              (t == null ? void 0 : t.similarNewsletters) != null
                ? r("compactMap")(t.similarNewsletters, function (e) {
                    return r("WAWebNewsletterCollection").get(e);
                  })
                : [];
            return e;
          },
        ),
        a = n.filter(function (e) {
          var t = e.newsletterMetadata;
          return o("WAWebNewsletterMembershipUtil").iAmGuest(t);
        });
      return {
        similarNewsletters: n,
        similarNewslettersToDisplay: a,
        hasEnoughNewsletters:
          a.length >=
          o(
            "WAWebNewsletterGatingUtils",
          ).getSimilarNewslettersMinDisplayLimit(),
      };
    }
    l.useSimilarNewsletters = e;
  },
  98,
);
