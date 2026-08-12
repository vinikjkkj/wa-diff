__d(
  "WAWebMexFetchNewsletterFollowersJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContactUsernameFields",
    "WAWebDBCreateLidPnMappings",
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
    "getErrorSafe",
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
            c = l.xwa2_newsletter_followers;
          if (c == null) return null;
          if (((n = c.followers) == null ? void 0 : n.edges) == null)
            return { followers: [] };
          var d = _(c.followers.edges),
            p = o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).isNewsletterUsernamePnPrivacyEnabled();
          try {
            (yield m(d), p && (yield f(d)));
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][NEWSLETTER] failed to sync follower phone numbers and usernames",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("newsletter-followers-learn-identifiers-failed");
          }
          return {
            followers:
              (a = r("compactMap")(d, function (e) {
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
                var d = c != null ? o("WAWebWidFactory").createWid(c) : void 0;
                return {
                  displayName: l.display_name,
                  id: o("WAWebWidFactory").createWid(u),
                  role: o("WAWebMexNewsletterUtils").mapRoleToMembership(s),
                  phoneNumber: d,
                  followTime:
                    i != null
                      ? o("WATimeUtils").castToUnixTime(Number.parseInt(i, 10))
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
          };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("compactMap")(e, function (e) {
            var t = e.node,
              n = t.id,
              r = t.pn,
              a =
                n != null
                  ? o("WAWebLidMigrationUtils").toUserLid(
                      o("WAWebWidFactory").createWid(n),
                    )
                  : null;
            return a == null || r == null
              ? null
              : { lid: a, pn: o("WAWebWidFactory").createUserWidOrThrow(r) };
          });
          t.length !== 0 &&
            (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: t,
              flushImmediately: !0,
              learningSource: "newsletter-followers",
            }));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return e.node.id != null
                ? o("WAWebWidFactory").createWid(e.node.id)
                : null;
            }),
            n = yield o(
              "WAWebApiContactUsernameFields",
            ).bulkGetContactToUsernameInfoMap(t.filter(Boolean)),
            a = r("compactMap")(e, function (e) {
              var t,
                r,
                a = e.node.id,
                i =
                  a != null
                    ? o("WAWebLidMigrationUtils").toUserLid(
                        o("WAWebWidFactory").createWid(a),
                      )
                    : null;
              if (i == null) return null;
              var l = (t = e.node.username_info) == null ? void 0 : t.username,
                s = (r = n.get(i.toJid())) == null ? void 0 : r.username;
              if (
                l != null &&
                l !== o("WAWebUsernameTypes").serializeMaybeUsername(s)
              )
                return {
                  userId: i,
                  username: o("WAWebUsernameTypes").asUsername(l),
                };
              if (l == null && e.node.pn != null && s != null) {
                var u;
                return {
                  userId: i,
                  deleteUsername: !0,
                  displayNameLID:
                    (u = e.node.display_name) != null ? u : void 0,
                };
              }
              return null;
            });
          a.length > 0 && (yield o("WAWebSetUsernameJob").setUsernamesJob(a));
        })),
        g.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterFollowers = c;
  },
  98,
);
