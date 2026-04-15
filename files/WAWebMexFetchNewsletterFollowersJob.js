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
            return { followers: [] };
          var c = d(u.followers.edges),
            p = o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).isNewsletterUsernamePnPrivacyEnabled();
          return (
            p && (yield m(c)),
            {
              followers:
                (a = r("compactMap")(c, function (e) {
                  var t,
                    n,
                    r,
                    a = e.admin_profile,
                    i = e.follow_time,
                    l = e.node,
                    s = e.role,
                    u = l.id,
                    c = l.pn;
                  if (u == null) return null;
                  var d =
                    c != null ? o("WAWebWidFactory").createWid(c) : void 0;
                  return {
                    displayName: l.display_name,
                    id: o("WAWebWidFactory").createWid(u),
                    role: o("WAWebMexNewsletterUtils").mapRoleToMembership(s),
                    phoneNumber: d,
                    followTime:
                      i != null
                        ? o("WATimeUtils").castToUnixTime(
                            Number.parseInt(i, 10),
                          )
                        : null,
                    username: p
                      ? (t = l.username_info) == null
                        ? void 0
                        : t.username
                      : void 0,
                    adminProfile:
                      a != null && a.name != null
                        ? {
                            id: a.id,
                            name: a.name,
                            pictureDirectPath:
                              (n = a.picture) == null ? void 0 : n.direct_path,
                            pictureId: (r = a.picture) == null ? void 0 : r.id,
                          }
                        : null,
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
