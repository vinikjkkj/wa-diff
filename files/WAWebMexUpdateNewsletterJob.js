__d(
  "WAWebMexUpdateNewsletterJob",
  [
    "WAWebMexClient",
    "WAWebMexNewsletterUtils",
    "WAWebMexUpdateNewsletterJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r, a, i, l) {
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
        c = await o("WAWebMexClient").fetchQuery(s, u);
      return c;
    }
    l.mexUpdateNewsletter = s;
  },
  98,
);
