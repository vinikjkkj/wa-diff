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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return u({
        groupType: o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        parentGroupId: e,
        request: !1,
        subgroupId: t,
      });
    }
    function s(e) {
      var t = e.parentGroupId,
        n = e.request,
        r = e.subgroupId;
      return u({
        groupType: o("WAWebGroupType").GroupType.LINKED_SUBGROUP,
        parentGroupId: t,
        request: n,
        subgroupId: r,
      });
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupType,
            n = e.parentGroupId,
            r = e.request,
            a = e.subgroupId,
            i = self.performance.now(),
            l = !0,
            s;
          try {
            s = yield o("WAWebGroupJoinSubgroupJob").joinSubgroup({
              groupType: t,
              parentGroupId: n,
              request: r,
              subgroupId: a,
            });
          } catch (e) {
            return (
              (l = !1),
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (e) {
                  throw (
                    e.status === 404 || e.status === 405
                      ? o(
                          "WAWebQuerySubGroupAction",
                        ).queryAndUpdateSubgroupsMetadata(n)
                      : e.status === 409 &&
                        o("WAWebGroupQueryBridge").sendQueryGroup(a),
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      e.status,
                    )
                  );
                },
              )(e)
            );
          } finally {
            if (r) {
              var u = self.performance.now() - i;
              o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCreate({
                groupId: a,
                isSuccessful: l,
                responseTime: u,
              });
            }
          }
          return s;
        })),
        c.apply(this, arguments)
      );
    }
    ((l.joinAnnouncementGroup = e), (l.joinSubgroup = s));
  },
  98,
);
