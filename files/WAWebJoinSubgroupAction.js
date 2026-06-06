__d(
  "WAWebJoinSubgroupAction",
  [
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupJoinSubgroupJob",
    "WAWebGroupQueryBridge",
    "WAWebGroupType",
    "WAWebQuerySubGroupAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return u(
        e,
        t,
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        !1,
      );
    }
    function s(e, t, n) {
      return u(e, t, o("WAWebGroupType").GroupType.LINKED_SUBGROUP, n);
    }
    async function u(e, t, n, r) {
      var a = self.performance.now(),
        i = !0,
        l;
      try {
        l = await o("WAWebGroupJoinSubgroupJob").joinSubgroup({
          groupType: n,
          parentGroupId: e,
          request: r,
          subgroupId: t,
        });
      } catch (n) {
        return (
          (i = !1),
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").ServerStatusCodeError,
            function (n) {
              throw (
                n.status === 404 || n.status === 405
                  ? o(
                      "WAWebQuerySubGroupAction",
                    ).queryAndUpdateSubgroupsMetadata(e)
                  : n.status === 409 &&
                    o("WAWebGroupQueryBridge").sendQueryGroup(t),
                new (o("WAWebBackendErrors").ServerStatusCodeError)(n.status)
              );
            },
          )(n)
        );
      } finally {
        if (r) {
          var s = self.performance.now() - a;
          o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCreate({
            groupId: t,
            isSuccessful: i,
            responseTime: s,
          });
        }
      }
      return l;
    }
    ((l.joinAnnouncementGroup = e), (l.joinSubgroup = s));
  },
  98,
);
