__d(
  "WAWebOpenOrgAdminFlowAction",
  ["WALogger", "WAWebDrawerManager", "WAWebOrgAdminFlowLoadable", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t, n) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] opened Admin Hub page=",
            "",
          ])),
        n != null ? n : "default",
      ),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          u.jsx(r("WAWebOrgAdminFlowLoadable"), {
            initialOrganizationID: t,
            initialPage: n,
          }),
          { disableRotateFocus: !0, transition: "none" },
        ));
    }
    l.openOrgAdminFlow = c;
  },
  98,
);
