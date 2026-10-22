__d(
  "WAWebOrgAdminMemberActions",
  [
    "WAWebOrgAdminMemberJobs",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return p(
            e,
            t,
            yield o("WAWebOrgAdminMemberJobs").changeOrgMemberRole(e, t, n),
          );
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
          return p(
            e,
            t,
            yield o("WAWebOrgAdminMemberJobs").removeOrgMember(e, t),
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebOrgAdminMemberJobs").saveOrgSettings(e, t),
            r = n.org,
            a = n.row;
          return (
            a != null &&
              o("WAWebOrgCollection").OrgCollection.get(r.id) != null &&
              o("WAWebOrgBridgeApi").applyOrgRows({
                isFullList: !1,
                rows: [a],
              }),
            r
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = n.org,
            i = n.rows;
          if (
            (a != null &&
              o("WAWebOrgBridgeApi").applyOrgRows({
                isFullList: !1,
                rows: [a],
              }),
            o("WAWebOrgBridgeApi").applyOrgContactRows({
              createModels: !1,
              lids: [t],
              rows: i,
            }),
            ((r = o("WAWebOrgCollection").OrgCollection.get(e)) == null
              ? void 0
              : r.isMemberDirectoryEnabled) !== !0)
          )
            return !0;
          var l = yield o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(e, {
            createModels: !0,
            force: !0,
          });
          return l.status === "success";
        })),
        _.apply(this, arguments)
      );
    }
    ((l.updateOrgMemberRole = e),
      (l.removeOrgMemberFromOrg = u),
      (l.saveOrganizationSettings = d));
  },
  98,
);
