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
    function s(e, t, n, r, o) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l) {
            var s =
                e !== void 0
                  ? e
                  : (e = n("WAWebMexUpdateNewsletterJobMutation.graphql")),
              u = {
                newsletter_id: t,
                updates: {
                  name: r,
                  description: a,
                  picture: i,
                  settings:
                    l != null
                      ? {
                          reaction_codes: {
                            value: o(
                              "WAWebMexNewsletterUtils",
                            ).mapReactionCodesSettingToMexInput(l),
                          },
                        }
                      : null,
                },
              },
              c = yield o("WAWebMexClient").fetchQuery(s, u);
            return c;
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.mexUpdateNewsletter = s;
  },
  98,
);
