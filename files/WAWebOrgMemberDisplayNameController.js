__d(
  "WAWebOrgMemberDisplayNameController",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgDirectoryRepositoryState",
    "WAWebOrgMembershipSelector",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return r("JSResourceForInteraction")("WAWebOrgDirectoryRepository")
          .__setRef("WAWebOrgMemberDisplayNameController")
          .load();
      }),
      "OrgDirectoryRepository",
    );
    function s(e, t) {
      var n = o("WAWebOrgMembershipSelector").getPrimaryOrgContact(
        o("WAWebOrgContactCollection").OrgContactCollection.getByLid(e),
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs,
      );
      return n != null &&
        o("WAWebOrgCollection").OrgCollection.get(n.orgId) != null
        ? n.memberName
        : null;
    }
    function u(t, n) {
      var r = Array.from(new Set(t), function (e) {
          return o("WAWebOrgContactCollection").OrgContactCollection.byLid(e);
        }),
        a = "add bulk_add bulk_remove remove reset",
        i = function () {
          var n = o(
            "WAWebOrgDirectoryRepositoryState",
          ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs;
          (n == null || n.length > 0) &&
            e()
              .then(function (e) {
                return e.resolveOrgAffiliations(t, { reason: "ui" });
              })
              .catch(function () {});
        },
        l = function () {
          (i(), n());
        };
      (r.forEach(function (e) {
        return e.on("all", l);
      }),
        o("WAWebOrgCollection").OrgCollection.on(a, l));
      var s = o(
        "WAWebOrgDirectoryRepositoryState",
      ).subscribeToOrgDirectoryRepository(l);
      return (
        i(),
        function () {
          (r.forEach(function (e) {
            return e.off("all", l);
          }),
            o("WAWebOrgCollection").OrgCollection.off(a, l),
            s());
        }
      );
    }
    ((l.getOrgMemberName = s), (l.subscribeToOrgMemberName = u));
  },
  98,
);
