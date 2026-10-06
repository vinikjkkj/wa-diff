__d(
  "WAWebOpenOrgAdminFlowAction",
  ["WAWebDrawerManager", "WAWebOrgAdminFlowLoadable", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        s.jsx(r("WAWebOrgAdminFlowLoadable"), {
          initialOrganizationID: e,
          initialPage: t,
        }),
        { disableRotateFocus: !0, transition: "none" },
      );
    }
    l.openOrgAdminFlow = u;
  },
  98,
);
