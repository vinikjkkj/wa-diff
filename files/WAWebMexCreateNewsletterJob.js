__d(
  "WAWebMexCreateNewsletterJob",
  [
    "WAWebMexClient",
    "WAWebMexCreateNewsletterJobMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i =
              e !== void 0
                ? e
                : (e = n("WAWebMexCreateNewsletterJobMutation.graphql")),
            l = { input: { name: t, description: r, picture: a } },
            s = yield o("WAWebMexClient").fetchQuery(i, l);
          return s;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexCreateNewsletter = s;
  },
  98,
);
