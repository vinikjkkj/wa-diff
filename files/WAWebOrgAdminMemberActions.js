__d(
  "WAWebOrgAdminMemberActions",
  [
    "WALogger",
    "WAWebOrgAdminMemberJobs",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = yield o("WAWebOrgAdminMemberJobs").changeOrgMemberRole(
            t,
            n,
            r,
          );
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] member role changed to ",
                  "",
                ])),
              r,
            ),
            h(t, n, a)
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebOrgAdminMemberJobs").removeOrgMember(e, t);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] member removed",
                ])),
            ),
            h(e, t, n)
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield o("WAWebOrgAdminMemberJobs").saveOrgSettings(e, t),
            i = a.org,
            l = a.row;
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] settings saved directory_visible=",
                  " member_tags=",
                  "",
                ])),
              String(i.isMemberDirectoryEnabled),
              (n = (r = i.memberTagOptions) == null ? void 0 : r.length) != null
                ? n
                : 0,
            ),
            l != null &&
              o("WAWebOrgCollection").OrgCollection.get(i.id) != null &&
              o("WAWebOrgBridgeApi").applyOrgRows({
                isFullList: !1,
                rows: [l],
              }),
            i
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] directory after a member change: ",
                  "",
                ])),
              l.status,
            ),
            l.status === "success"
          );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.updateOrgMemberRole = d),
      (l.removeOrgMemberFromOrg = p),
      (l.saveOrganizationSettings = f));
  },
  98,
);
