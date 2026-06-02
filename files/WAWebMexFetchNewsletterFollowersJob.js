__d(
  "WAWebMexFetchNewsletterFollowersJob",
  [
    "WATimeUtils",
    "WAWebApiContactUsernameFields",
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterFollowersJobQuery.graphql",
    "WAWebMexNewsletterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSetUsernameJob",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterFollowersJobQuery.graphql"));
    async function u(e, t) {
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
        l = await o("WAWebMexClient").fetchQuery(s, i),
        u = l.xwa2_newsletter_followers;
      if (u == null) return null;
      if (((n = u.followers) == null ? void 0 : n.edges) == null)
        return { followers: [] };
      var m = c(u.followers.edges),
        p = o(
          "WAWebUsernameWorkerCompatibleGatingUtils",
        ).isNewsletterUsernamePnPrivacyEnabled();
      return (
        p && (await d(m)),
        {
          followers:
            (a = r("compactMap")(m, function (e) {
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
        }
      );
    }
    function c(e) {
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
    async function d(e) {
      var t = e.map(function (e) {
          return e.node.id != null
            ? o("WAWebWidFactory").createWid(e.node.id)
            : null;
        }),
        n = await o(
          "WAWebApiContactUsernameFields",
        ).bulkGetContactToUsernameInfoMap(t.filter(Boolean)),
        a = r("compactMap")(
          await Promise.all(
            e.map(async function (e) {
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
              if (l != null && l !== s) return { userId: i, username: l };
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
            }),
          ),
          function (e) {
            return e;
          },
        );
      a.length > 0 && (await o("WAWebSetUsernameJob").setUsernamesJob(a));
    }
    l.mexFetchNewsletterFollowers = u;
  },
  98,
);
