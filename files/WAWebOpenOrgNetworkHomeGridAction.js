__d(
  "WAWebOpenOrgNetworkHomeGridAction",
  [
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebOrgNetworkHomeGridLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = null;
    function c(e) {
      var t = s.jsx(r("WAWebOrgNetworkHomeGridLoadable"), { orgId: e });
      ((u = t),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(t, {
          disableRotateFocus: !0,
          transition: "none",
        }));
    }
    function d() {
      var e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
        "mid",
      );
      e != null && m(e.drawer) && e.closeDrawer(e.drawerId);
    }
    function m(e) {
      return u != null && e === u;
    }
    ((l.openOrgNetworkHomeGrid = c),
      (l.closeOrgNetworkHomeGrid = d),
      (l.isOrgNetworkHomeGrid = m));
  },
  98,
);
