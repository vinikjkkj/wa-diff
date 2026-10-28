__d(
  "WAWebOpenOrgNetworkHomeGridAction",
  [
    "WALogger",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebOrgNetworkHomeGridLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = null;
    function d(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[org-network-home] opened",
          ])),
      );
      var n = u.jsx(r("WAWebOrgNetworkHomeGridLoadable"), { orgId: t });
      ((c = n),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(n, {
          disableRotateFocus: !0,
          transition: "none",
        }));
    }
    function m() {
      var e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
        "mid",
      );
      e != null && p(e.drawer) && e.closeDrawer(e.drawerId);
    }
    function p(e) {
      return c != null && e === c;
    }
    ((l.openOrgNetworkHomeGrid = d),
      (l.closeOrgNetworkHomeGrid = m),
      (l.isOrgNetworkHomeGrid = p));
  },
  98,
);
