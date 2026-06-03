__d(
  "WAWebMexFetchNewsletterFollowersJob",
  [
    "Promise",
    "WATimeUtils",
    "WAWebApiContactUsernameFields",
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterFollowersJobQuery.graphql",
    "WAWebMexNewsletterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSetUsernameJob",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterFollowersJobQuery.graphql"));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            l = yield o("WAWebMexClient").fetchQuery(u, i),
            s = l.xwa2_newsletter_followers;
          if (s == null) return null;
          if (((n = s.followers) == null ? void 0 : n.edges) == null)
            return { followers: [] };
          var c = m(s.followers.edges),
            d = o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).isNewsletterUsernamePnPrivacyEnabled();
          return (
            d && (yield p(c)),
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
                  var m =
                    c != null ? o("WAWebWidFactory").createWid(c) : void 0;
                  return {
                    displayName: l.display_name,
                    id: o("WAWebWidFactory").createWid(u),
                    role: o("WAWebMexNewsletterUtils").mapRoleToMembership(s),
                    phoneNumber: m,
                    followTime:
                      i != null
                        ? o("WATimeUtils").castToUnixTime(
                            Number.parseInt(i, 10),
                          )
                        : null,
                    username: d
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
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return e.node.id != null
                ? o("WAWebWidFactory").createWid(e.node.id)
                : null;
            }),
            a = yield o(
              "WAWebApiContactUsernameFields",
            ).bulkGetContactToUsernameInfoMap(t.filter(Boolean)),
            i = r("compactMap")(
              yield (s || (s = n("Promise"))).all(
                e.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t,
                          n,
                          r = e.node.id,
                          i =
                            r != null
                              ? o("WAWebLidMigrationUtils").toUserLid(
                                  o("WAWebWidFactory").createWid(r),
                                )
                              : null;
                        if (i == null) return null;
                        var l =
                            (t = e.node.username_info) == null
                              ? void 0
                              : t.username,
                          s =
                            (n = a.get(i.toJid())) == null
                              ? void 0
                              : n.username;
                        if (
                          l != null &&
                          l !==
                            o("WAWebUsernameTypes").serializeMaybeUsername(s)
                        )
                          return {
                            userId: i,
                            username: o("WAWebUsernameTypes").asUsername(l),
                          };
                        if (l == null && s != null) {
                          var u;
                          return {
                            userId: i,
                            deleteUsername: !0,
                            forceDelete: !0,
                            displayNameLID:
                              (u = e.node.display_name) != null ? u : void 0,
                          };
                        }
                        return null;
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              function (e) {
                return e;
              },
            );
          i.length > 0 && (yield o("WAWebSetUsernameJob").setUsernamesJob(i));
        })),
        _.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterFollowers = c;
  },
  98,
);
