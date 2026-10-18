__d(
  "WAWebOpenOrgNetworkHomeGridAction",
  ["WAWebDrawerManager", "WAWebOrgNetworkHomeGridLoadable", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        s.jsx(r("WAWebOrgNetworkHomeGridLoadable"), { orgId: e }),
        { disableRotateFocus: !0, transition: "none" },
      );
    }
    l.openOrgNetworkHomeGrid = u;
  },
  98,
);
