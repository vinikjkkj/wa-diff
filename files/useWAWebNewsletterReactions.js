__d(
  "useWAWebNewsletterReactions",
  [
    "Promise",
    "WALogger",
    "WAWebNewsletterReactionCollection",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t = m([]),
        r = t[0],
        a = t[1],
        i = m(!1),
        l = i[0],
        u = i[1];
      return (
        o("useWAWebListener").useListener(
          o("WAWebNewsletterReactionCollection")
            .NewsletterMessageReactionsCollection,
          "add change remove reset",
          function () {
            u(!l);
          },
        ),
        d(
          function () {
            n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                var t = yield (s || (s = n("Promise"))).all(
                  e.map(function (e) {
                    return o("WAWebNewsletterReactionCollection")
                      .NewsletterMessageReactionsCollection.find(e.toString())
                      .catch(function () {
                        return null;
                      });
                  }),
                );
                a(t.filter(Boolean));
              })()
              .catch(function (e) {});
          },
          [l],
        ),
        r
      );
    }
    l.default = p;
  },
  98,
);
