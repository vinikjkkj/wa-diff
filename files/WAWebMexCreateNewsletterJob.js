__d(
  "WAWebMexCreateNewsletterJob",
  ["WAWebMexClient", "WAWebMexCreateNewsletterJobMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, r, a) {
      var i =
          e !== void 0
            ? e
            : (e = n("WAWebMexCreateNewsletterJobMutation.graphql")),
        l = { input: { name: t, description: r, picture: a } },
        s = await o("WAWebMexClient").fetchQuery(i, l);
      return s;
    }
    l.mexCreateNewsletter = s;
  },
  98,
);
