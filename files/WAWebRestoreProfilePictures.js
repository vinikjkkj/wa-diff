__d(
  "WAWebRestoreProfilePictures",
  [
    "WAWebApiHydrateWidsUtil",
    "WAWebProfilePicThumbCollection",
    "WAWebQplFlowWrapper",
    "WAWebSchemaProfilePicThumb",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891431279, "3267");
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = self.performance.now();
          o("WAWebQplFlowWrapper").QPL.markerPoint(
            e,
            "RestoreProfilePictures_start",
          );
          var n = yield o("WAWebSchemaProfilePicThumb")
              .getProfilePicThumbTable()
              .all(),
            r = [],
            a = [];
          (n.forEach(function (e) {
            var t = o(
              "WAWebProfilePicThumbCollection",
            ).ProfilePicThumbCollection.get(e.id);
            t != null ||
            o(
              "WAWebProfilePicThumbCollection",
            ).ProfilePicThumbCollection.isProfilePicRefreshNeeded(e.timestamp)
              ? a.push(e.id)
              : r.push(e);
          }),
            a.length > 0 &&
              o("WAWebSchemaProfilePicThumb")
                .getProfilePicThumbTable()
                .bulkRemove(a));
          var i = r.map(function (e) {
            return babelHelpers.extends(
              {},
              o("WAWebApiHydrateWidsUtil").hydrateWids(e),
              { stale: !1, eurlStale: !1 },
            );
          });
          (o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(
            i,
            { silent: !0, merge: !1 },
          ),
            o("WAWebQplFlowWrapper").QPL.markerPoint(
              e,
              "RestoreProfilePictures_end",
            ));
        })),
        u.apply(this, arguments)
      );
    }
    l.restoreProfilePictures = s;
  },
  98,
);
