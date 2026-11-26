__d(
  "WAWebOpenOrgAdminFlowAction",
  [
    "WALogger",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebOrgAdminFlowLoadable",
    "react",
    "useWAWebOrgInfoDisplayEnabled",
    "useWAWebViewerAdministersAnyOrg",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useEffect;
    function d(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] opened Admin Hub page=",
            "",
          ])),
        n != null ? n : "default",
      );
      var r = null;
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        u.jsx(m, {
          getDrawerId: function () {
            return r;
          },
          initialOrganizationID: t,
          initialPage: n,
        }),
        {
          disableRotateFocus: !0,
          onDrawerIdAssigned: function (t) {
            r = t;
          },
          transition: "none",
        },
      );
    }
    function m(e) {
      var t = e.getDrawerId,
        n = e.initialOrganizationID,
        a = e.initialPage,
        i = r("useWAWebOrgInfoDisplayEnabled")(),
        l = r("useWAWebViewerAdministersAnyOrg")(i),
        s = o("WAWebDrawerManagerContext").useMiddleDrawerManagerContext();
      return (
        c(
          function () {
            if (!(l || s == null)) {
              var e = t();
              e != null && s.isCurrentDrawer(e) && s.closeDrawer(e);
            }
          },
          [t, l, s],
        ),
        l
          ? u.jsx(r("WAWebOrgAdminFlowLoadable"), {
              initialOrganizationID: n,
              initialPage: a,
            })
          : null
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.openOrgAdminFlow = d));
  },
  98,
);
