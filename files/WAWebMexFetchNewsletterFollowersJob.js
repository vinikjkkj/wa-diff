__d(
  "WAWebMexFetchNewsletterFollowersJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContactUsernameFields",
    "WAWebDBCreateLidPnMappings",
    "WAWebLidMigrationUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterFollowersJobQuery.graphql",
    "WAWebMexNewsletterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSetUsernameJob",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
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
    async function c(e, t) {
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
        l = await o("WAWebMexClient").fetchQuery(u, i),
        c = l.xwa2_newsletter_followers;
      if (c == null) return null;
      if (((n = c.followers) == null ? void 0 : n.edges) == null)
        return { followers: [] };
      var _ = m(c.followers.edges),
        f = o("WAWebABProps").getABPropConfigValue(
          "username_channels_pn_privacy_enabled",
        );
      try {
        (await d(_), f && (await p(_)));
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
          (a = r("compactMap")(_, function (e) {
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
              username: f
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
    }
    async function d(e) {
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
        (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: t,
          write: "now",
          learningSource: "newsletter-followers",
        }));
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
    async function p(e) {
      var t = e.map(function (e) {
          return e.node.id != null
            ? o("WAWebWidFactory").createWid(e.node.id)
            : null;
        }),
        n = await o(
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
              displayNameLID: (u = e.node.display_name) != null ? u : void 0,
            };
          }
          return null;
        });
      a.length > 0 && (await o("WAWebSetUsernameJob").setUsernamesJob(a));
    }
    l.mexFetchNewsletterFollowers = c;
  },
  98,
);
