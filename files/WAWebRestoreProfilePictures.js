__d(
  "WAWebRestoreProfilePictures",
  [
    "WALogger",
    "WAWebApiHydrateWidsUtil",
    "WAWebProfilePicThumbCollection",
    "WAWebQplFlowWrapper",
    "WAWebSchemaProfilePicThumb",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("qpl")._(891431279, "3267");
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = self.performance.now();
          o("WAWebQplFlowWrapper").QPL.markerPoint(
            s,
            "RestoreProfilePictures_start",
          );
          var n = yield o("WAWebSchemaProfilePicThumb")
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
          (o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(
            l,
            { silent: !0, merge: !1 },
          ),
            o("WAWebQplFlowWrapper").QPL.markerPoint(
              s,
              "RestoreProfilePictures_end",
            ));
        })),
        c.apply(this, arguments)
      );
    }
    l.restoreProfilePictures = u;
  },
  98,
);
