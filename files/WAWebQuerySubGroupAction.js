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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o("WAWebMexFetchAllSubgroupsJob").mexFetchAllSubgroups(
        e,
        t != null && t.length ? t[0] : void 0,
        "INTERACTIVE",
      );
      await s(n, e);
    }
    async function s(e, t) {
      var n = o("WAWebUpdateSubgroupsCommunityAction").getUnjoinedSubgroups(e),
        r = n.map(function (e) {
          return e.id;
        });
      (await o("WAWebGroupUnjoinedSubgroupJob").updateUnjoinedSubgroupsJob(
        n,
        t,
      ),
        await o("WAWebGroupUnjoinedSubgroupJob").cleanUnjoinedSubgroupsJob(
          r,
          t,
        ),
        o(
          "WAWebUpdateSubgroupsCommunityAction",
        ).updateUnjoinedSubgroupsInCollection(n, t),
        o(
          "WAWebUpdateSubgroupsCommunityAction",
        ).cleanUnjoinedSubgroupsInCollection(r, t));
    }
    async function u(t, n) {
      var a = r("WAWebGroupMetadataCollection").get(n),
        i;
      try {
        i = await o("WAWebGroupQuerySubGroupsJob").querySubgroup({
          anyJoinedSubgroupId:
            a != null && a.joinedSubgroups.length
              ? a.joinedSubgroups[0]
              : void 0,
          parentGroupId: n,
          subgroupId: t,
        });
      } catch (t) {
        return o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          function (t) {
            (t.status === 404 || t.status === 405) && e(n);
          },
        )(t);
      }
      await o(
        "WAWebLidMappingUsernameLearnUtils",
      ).processParsedGroupInfosForLidMappingAndUsernames([i]);
      var l = r("WAWebUnjoinedSubgroupMetadataCollection").get(t.toString());
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
    }
    ((l.queryAndUpdateSubgroupsMetadata = e), (l.querySubgroupInfo = u));
  },
  98,
);
