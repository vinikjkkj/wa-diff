__d(
  "WAWebMexUpdateNewsletterJob",
  [
    "WAWebMexClient",
    "WAWebMexNewsletterUtils",
    "WAWebMexUpdateNewsletterJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.base64EncodedPic,
            a = t.description,
            i = t.name,
            l = t.newsletterID,
            s = t.reactionCodesSetting,
            u =
              e !== void 0
                ? e
                : (e = n("WAWebMexUpdateNewsletterJobMutation.graphql")),
            c = {
              newsletter_id: l,
              updates: {
                name: i,
                description: a,
                picture: r,
                settings:
                  s != null
                    ? {
                        reaction_codes: {
                          value: o(
                            "WAWebMexNewsletterUtils",
                          ).mapReactionCodesSettingToMexInput(s),
                        },
                      }
                    : null,
              },
            },
            d = yield o("WAWebMexClient").fetchQuery(u, c);
          return d;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexUpdateNewsletter = s;
  },
  98,
);
