__d(
  "WAWebRestoreProfilePictures",
  [
    "WALogger",
    "WAWebApiHydrateWidsUtil",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaProfilePicThumb",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t = self.performance.now(),
        n = await o("WAWebSchemaProfilePicThumb")
          .getProfilePicThumbTable()
          .all(),
        a = [],
        i = [];
      (n.forEach(function (e) {
        var t = o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.get(e.id);
        t != null ||
        o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.isProfilePicRefreshNeeded(e.timestamp)
          ? i.push(e.id)
          : a.push(e);
      }),
        i.length > 0 &&
          o("WAWebSchemaProfilePicThumb")
            .getProfilePicThumbTable()
            .bulkRemove(i)
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[restoreProfilePictures]: failed to bulk-remove outdated profile pics",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("restore-profile-pics-bulk-remove-failed");
            }));
      var l = a.map(function (e) {
        return babelHelpers.extends(
          {},
          o("WAWebApiHydrateWidsUtil").hydrateWids(e),
          { stale: !1, eurlStale: !1 },
        );
      });
      o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(l, {
        silent: !0,
        merge: !1,
      });
    }
    l.restoreProfilePictures = s;
  },
  98,
);
