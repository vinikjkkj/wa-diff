__d(
  "WAWebMexUpdateNewsletterJob",
  [
    "WAWebMexClient",
    "WAWebMexNewsletterUtils",
    "WAWebMexUpdateNewsletterJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
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
        d = await o("WAWebMexClient").fetchQuery(u, c);
      return d;
    }
    l.mexUpdateNewsletter = s;
  },
  98,
);
