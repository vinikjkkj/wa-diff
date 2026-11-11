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
      c = null,
      d = null;
    function m(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[org-network-home] opened",
          ])),
      );
      var n = u.jsx(r("WAWebOrgNetworkHomeGridLoadable"), { orgId: t });
      ((c = n),
        (d = t),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(n, {
          disableRotateFocus: !0,
          transition: "none",
        }));
    }
    function p(e) {
      var t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
        "mid",
      );
      t != null && _(t.drawer, e) && t.closeDrawer(t.drawerId);
    }
    function _(e, t) {
      return c != null && e === c && (t == null || t === d);
    }
    ((l.openOrgNetworkHomeGrid = m),
      (l.closeOrgNetworkHomeGrid = p),
      (l.isOrgNetworkHomeGrid = _));
  },
  98,
);
