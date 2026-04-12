__d(
  "WAWebCatalogLoadError.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebButton.react",
    "WAWebCatalogLoadErrorLoadable",
    "WAWebCatalogManagementFlowLoadable",
    "WAWebClickableLink.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWarningOutlineIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.ctaDisplayType,
        n = e.shouldShowHeader,
        a = n === void 0 ? !0 : n,
        i = function () {
          o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow({
            entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
              .CATALOG_ENTRY_POINT_PROFILE,
            isInitialStep: !0,
          });
        },
        l = s._(/*BTDS*/ "Verify email"),
        d = s._(/*BTDS*/ "We were unable to load your catalog."),
        m = d;
      return (
        t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.LINK
          ? (m = s._(
              /*BTDS*/ "{error-desc-text} Go to {=m3} to verify your email.",
              [
                s._param("error-desc-text", d),
                s._implicitParam(
                  "=m3",
                  u.jsx(r("WAWebClickableLink.react"), {
                    onClick: i,
                    testid: void 0,
                    children: s._(/*BTDS*/ "Catalog Manager"),
                  }),
                ),
              ],
            ))
          : t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON &&
            (m = s._(
              /*BTDS*/ "{error-desc-text} Go to Catalog Manager to verify your email.",
              [s._param("error-desc-text", d)],
            )),
        u.jsxs(r("WAWebBox.react"), {
          align: "center",
          direction: "vertical",
          flex: !0,
          testid: void 0,
          xstyle: o("WAWebUISpacing").uiPadding.horiz24,
          children: [
            (t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON ||
              t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.NONE) &&
              u.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
                iconXstyle: c.secondaryColor,
                directional: !0,
                height: 24,
                width: 24,
              }),
            a &&
              u.jsx(o("WAWebText.react").WAWebTextTitle, {
                textAlign: "center",
                xstyle: [
                  o("WAWebUISpacing").uiPadding.bottom5,
                  o("WAWebUISpacing").uiPadding.top16,
                ],
                children: l,
              }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              testid: void 0,
              textAlign: "center",
              xstyle: o("WAWebUISpacing").uiPadding.bottom24,
              children: m,
            }),
            t === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON &&
              u.jsx(r("WAWebBox.react"), {
                xstyle: o("WAWebUISpacing").uiMargin.bottom24,
                children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                  onClick: i,
                  testid: void 0,
                  children: s._(/*BTDS*/ "Go to Catalog Manager"),
                }),
              }),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.CatalogLoadError = d));
  },
  226,
);
