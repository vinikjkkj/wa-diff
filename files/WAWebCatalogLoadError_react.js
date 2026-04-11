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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.ctaDisplayType,
        a = e.shouldShowHeader,
        i = a === void 0 ? !0 : a,
        l = m,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Verify email")), (t[0] = d))
        : (d = t[0]);
      var p = d,
        _;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "We were unable to load your catalog.")),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g = f;
      if (n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.LINK) {
        var h;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = s._(
              /*BTDS*/ "{error-desc-text} Go to {=m3} to verify your email.",
              [
                s._param("error-desc-text", f),
                s._implicitParam(
                  "=m3",
                  u.jsx(r("WAWebClickableLink.react"), {
                    onClick: l,
                    testid: void 0,
                    children: s._(/*BTDS*/ "Catalog Manager"),
                  }),
                ),
              ],
            )),
            (t[2] = h))
          : (h = t[2]),
          (g = h));
      } else if (
        n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON
      ) {
        var y;
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = s._(
              /*BTDS*/ "{error-desc-text} Go to Catalog Manager to verify your email.",
              [s._param("error-desc-text", f)],
            )),
            (t[3] = y))
          : (y = t[3]),
          (g = y));
      }
      var C;
      t[4] !== n
        ? ((C =
            (n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON ||
              n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.NONE) &&
            u.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
              iconXstyle: c.secondaryColor,
              directional: !0,
              height: 24,
              width: 24,
            })),
          (t[4] = n),
          (t[5] = C))
        : (C = t[5]);
      var b;
      t[6] !== i
        ? ((b =
            i &&
            u.jsx(o("WAWebText.react").WAWebTextTitle, {
              textAlign: "center",
              xstyle: [
                o("WAWebUISpacing").uiPadding.bottom5,
                o("WAWebUISpacing").uiPadding.top16,
              ],
              children: p,
            })),
          (t[6] = i),
          (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== g
        ? ((v = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            testid: void 0,
            textAlign: "center",
            xstyle: o("WAWebUISpacing").uiPadding.bottom24,
            children: g,
          })),
          (t[8] = g),
          (t[9] = v))
        : (v = t[9]);
      var S;
      t[10] !== n
        ? ((S =
            n === o("WAWebCatalogLoadErrorLoadable").CTADisplayType.BUTTON &&
            u.jsx(r("WAWebBox.react"), {
              xstyle: o("WAWebUISpacing").uiMargin.bottom24,
              children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                onClick: l,
                testid: void 0,
                children: s._(/*BTDS*/ "Go to Catalog Manager"),
              }),
            })),
          (t[10] = n),
          (t[11] = S))
        : (S = t[11]);
      var R;
      return (
        t[12] !== C || t[13] !== b || t[14] !== v || t[15] !== S
          ? ((R = u.jsxs(r("WAWebBox.react"), {
              align: "center",
              direction: "vertical",
              flex: !0,
              testid: void 0,
              xstyle: o("WAWebUISpacing").uiPadding.horiz24,
              children: [C, b, v, S],
            })),
            (t[12] = C),
            (t[13] = b),
            (t[14] = v),
            (t[15] = S),
            (t[16] = R))
          : (R = t[16]),
        R
      );
    }
    function m() {
      o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow({
        entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
          .CATALOG_ENTRY_POINT_PROFILE,
        isInitialStep: !0,
      });
    }
    l.CatalogLoadError = d;
  },
  226,
);
