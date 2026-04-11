__d(
  "WAWebMexFetchNewsletterFollowersJob",
  [
    "WATimeUtils",
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterFollowersJobQuery.graphql",
    "WAWebMexNewsletterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSetUsernameJob",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterFollowersJobQuery.graphql"));
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
            u = l.xwa2_newsletter_followers;
          if (u == null) return null;
          if (((n = u.followers) == null ? void 0 : n.edges) == null)
            return { subscribers: [] };
          var c = d(u.followers.edges),
            p = o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).isNewsletterUsernamePnPrivacyEnabled();
          return (
            p && (yield m(c)),
            {
              subscribers:
                (a = r("compactMap")(c, function (e) {
                  var t,
                    n = e.follow_time,
                    r = e.node,
                    a = e.role,
                    i = r.id,
                    l = r.pn;
                  if (i == null) return null;
                  var s =
                      n != null
                        ? o("WATimeUtils").castToUnixTime(
                            Number.parseInt(n, 10),
                          )
                        : null,
                    u = l != null ? o("WAWebWidFactory").createWid(l) : void 0;
                  return {
                    displayName: r.display_name,
                    id: o("WAWebWidFactory").createWid(i),
                    role: o("WAWebMexNewsletterUtils").mapRoleToMembership(a),
                    phoneNumber: u,
                    subscribeTime: s,
                    username: p
                      ? (t = r.username_info) == null
                        ? void 0
                        : t.username
                      : void 0,
                  };
                })) != null
                  ? a
                  : [],
            }
          );
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.reduce(function (e, t) {
            var n,
              r = t.node.id,
              a =
                r != null
                  ? o("WAWebLidMigrationUtils").toUserLid(
                      o("WAWebWidFactory").createWid(r),
                    )
                  : null,
              i = (n = t.node.username_info) == null ? void 0 : n.username;
            return (
              i != null && a != null && e.push({ userId: a, username: i }),
              e
            );
          }, []);
          t.length > 0 && (yield o("WAWebSetUsernameJob").setUsernamesJob(t));
        })),
        p.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterFollowers = u;
  },
  98,
);
