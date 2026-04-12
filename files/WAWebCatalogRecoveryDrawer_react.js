__d(
  "WAWebCatalogRecoveryDrawer.react",
  [
    "fbt",
    "WAWebAdsManagementRecoveryNeeded.react",
    "WAWebCatalogCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebWarningOutlineIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.catalogId,
        l = a.emailMask,
        u = s._(/*BTDS*/ "Verify email"),
        m = s._(
          /*BTDS*/ "We were unable to load your catalog. Verify your email to view your products.",
        ),
        p = d(
          function () {
            o("WAWebCatalogCollection").CatalogCollection.find(i);
          },
          [i],
        ),
        _ = c.jsx(r("WAWebAdsManagementRecoveryNeeded.react"), {
          emailMask: l,
          handleCodeEntered: p,
          headerDescription: m,
          headerText: u,
          Icon: o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
        });
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "settings",
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "catalog-recovery" },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Catalog"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: o("WAWebDrawerManager").closeDrawerLeft,
            focusBackOrCancel: !0,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(r("WAWebDrawerSection.react"), {
              theme: "expand-height",
              animation: !1,
              children: _,
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = m;
    l.CatalogRecoveryDrawer = p;
  },
  226,
);
