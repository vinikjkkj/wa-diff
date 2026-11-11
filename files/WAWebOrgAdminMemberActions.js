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
            C(t, n, a)
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
          var r = n === void 0 ? {} : n,
            a = r.downloadDirectory,
            i = a === void 0 ? !0 : a,
            l = yield o("WAWebOrgAdminMemberJobs").removeOrgMember(e, t);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] member removed",
                ])),
            ),
            C(e, t, l, i)
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (
            ((t = o("WAWebOrgCollection").OrgCollection.get(e)) == null
              ? void 0
              : t.isMemberDirectoryEnabled) !== !0
          )
            return !0;
          var n = yield o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(e, {
            createModels: !0,
            force: !0,
          });
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] directory after a member change: ",
                  "",
                ])),
              n.status,
            ),
            n.status === "success"
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield o("WAWebOrgAdminMemberJobs").saveOrgSettings(e, t),
            i = a.org,
            l = a.row;
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = n.org,
              i = n.rows;
            return (
              r === void 0 && (r = !0),
              a != null &&
                o("WAWebOrgBridgeApi").applyOrgRows({
                  isFullList: !1,
                  rows: [a],
                }),
              o("WAWebOrgBridgeApi").applyOrgContactRows({
                createModels: !1,
                lids: [t],
                rows: i,
              }),
              r ? f(e) : !0
            );
          },
        )),
        b.apply(this, arguments)
      );
    }
    ((l.updateOrgMemberRole = d),
      (l.removeOrgMemberFromOrg = p),
      (l.downloadOrgDirectoryAfterMemberChanges = f),
      (l.saveOrganizationSettings = h));
  },
  98,
);
