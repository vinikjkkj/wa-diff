__d(
  "WAWebMexFetchNewsletterSubscribersJob",
  [
    "WATimeUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterSubscribersJobQuery.graphql",
    "WAWebMexNewsletterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterSubscribersJobQuery.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i = {
              input: {
                newsletter_id: e,
                count: Math.min(
                  o("WAWebNewsletterGatingUtils").getMaxSubscriberNumber(),
                  t,
                ),
              },
            },
            l = yield o("WAWebMexClient").fetchQuery(s, i),
            u = l.xwa2_newsletter_subscribers;
          if (u == null) return null;
          if (((n = u.subscribers) == null ? void 0 : n.edges) == null)
            return { subscribers: [] };
          var c = d(u.subscribers.edges);
          return {
            subscribers:
              (a = r("compactMap")(c, function (e) {
                var t = e.node,
                  n = e.role,
                  r = e.subscribe_time,
                  a = t.id,
                  i = t.pn;
                if (a == null) return null;
                var l =
                    r != null
                      ? o("WATimeUtils").castToUnixTime(Number.parseInt(r, 10))
                      : null,
                  s = i != null ? o("WAWebWidFactory").createWid(i) : void 0;
                return {
                  displayName: t.display_name,
                  id: o("WAWebWidFactory").createWid(a),
                  role: o("WAWebMexNewsletterUtils").mapRoleToMembership(n),
                  phoneNumber: s,
                  subscribeTime: l,
                };
              })) != null
                ? a
                : [],
          };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = e.filter(function (e) {
          return e.role === "ADMIN" || e.role === "OWNER";
        }),
        n = new Set(
          t.map(function (e) {
            return e.node.id;
          }),
        ),
        r = e.filter(function (e) {
          return !n.has(e.node.id);
        });
      return [].concat(t, r);
    }
    l.mexFetchNewsletterSubscribers = u;
  },
  98,
);
