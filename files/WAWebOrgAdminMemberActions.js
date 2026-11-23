__d(
  "WAWebOrgAdminMemberActions",
  [
    "WALogger",
    "WAWebOrgAdminMemberJobs",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n, r) {
      var a = await o("WAWebOrgAdminMemberJobs").changeOrgMemberRole(t, n, r);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[org-admin] member role changed to ",
              "",
            ])),
          r,
        ),
        f(t, n, a)
      );
    }
    async function m(e, t, n) {
      var r = n === void 0 ? {} : n,
        a = r.downloadDirectory,
        i = a === void 0 ? !0 : a,
        l = await o("WAWebOrgAdminMemberJobs").removeOrgMember(e, t);
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[org-admin] member removed",
            ])),
        ),
        f(e, t, l, i)
      );
    }
    async function p(e) {
      var t;
      if (
        ((t = o("WAWebOrgCollection").OrgCollection.get(e)) == null
          ? void 0
          : t.isMemberDirectoryEnabled) !== !0
      )
        return !0;
      var n = await o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(e, {
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
    }
    async function _(e, t) {
      var n,
        r,
        a = await o("WAWebOrgAdminMemberJobs").saveOrgSettings(e, t),
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
          o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !1, rows: [l] }),
        i
      );
    }
    async function f(e, t, n, r) {
      var a = n.org,
        i = n.rows;
      return (
        r === void 0 && (r = !0),
        a != null &&
          o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !1, rows: [a] }),
        o("WAWebOrgBridgeApi").applyOrgContactRows({
          createModels: !1,
          lids: [t],
          rows: i,
        }),
        r ? p(e) : !0
      );
    }
    ((l.updateOrgMemberRole = d),
      (l.removeOrgMemberFromOrg = m),
      (l.downloadOrgDirectoryAfterMemberChanges = p),
      (l.saveOrganizationSettings = _));
  },
  98,
);
