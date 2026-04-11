__d(
  "WAWebQuerySubGroupAction",
  [
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQuerySubGroupsJob",
    "WAWebGroupUnjoinedSubgroupJob",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebMexFetchAllSubgroupsJob",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUpdateSubgroupsCommunityAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebMexFetchAllSubgroupsJob").mexFetchAllSubgroups(
            e,
            t != null && t.length ? t[0] : void 0,
            "INTERACTIVE",
          );
          yield u(n, e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebUpdateSubgroupsCommunityAction").getUnjoinedSubgroups(
              e,
            ),
            r = n.map(function (e) {
              return e.id;
            });
          (yield o("WAWebGroupUnjoinedSubgroupJob").updateUnjoinedSubgroupsJob(
            n,
            t,
          ),
            yield o("WAWebGroupUnjoinedSubgroupJob").cleanUnjoinedSubgroupsJob(
              r,
              t,
            ),
            o(
              "WAWebUpdateSubgroupsCommunityAction",
            ).updateUnjoinedSubgroupsInCollection(n, t),
            o(
              "WAWebUpdateSubgroupsCommunityAction",
            ).cleanUnjoinedSubgroupsInCollection(r, t));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = r("WAWebGroupMetadataCollection").get(n),
            i;
          try {
            i = yield o("WAWebGroupQuerySubGroupsJob").querySubgroup(
              t,
              n,
              a != null && a.joinedSubgroups.length
                ? a.joinedSubgroups[0]
                : void 0,
            );
          } catch (t) {
            return o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (t) {
                (t.status === 404 || t.status === 405) && e(n);
              },
            )(t);
          }
          yield o(
            "WAWebLidMappingUsernameLearnUtils",
          ).processParsedGroupInfosForLidMappingAndUsernames([i]);
          var l = r("WAWebUnjoinedSubgroupMetadataCollection").get(
            t.toString(),
          );
          if (l != null)
            return (
              l.set({
                subject: i.subject,
                participants: i.participants,
                desc: i.desc,
                creation: i.creation,
                owner: i.owner,
                size: i.size,
                adminRequestRequired: i.adminRequestRequired,
                membershipApprovalMode: i.membershipApprovalMode,
                membershipApprovalRequest: i.membershipApprovalRequest,
                suspended: i.suspended,
              }),
              l
            );
        })),
        m.apply(this, arguments)
      );
    }
    ((l.queryAndUpdateSubgroupsMetadata = e), (l.querySubgroupInfo = d));
  },
  98,
);
