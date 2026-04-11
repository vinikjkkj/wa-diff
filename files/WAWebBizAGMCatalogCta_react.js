__d(
  "WAWebBizAGMCatalogCta.react",
  [
    "WAWebActiveAccountInfoContext.react",
    "WAWebBizToolsFlowLoadable",
    "WAWebBizToolsFlowSteps",
    "WAWebCatalogFilledIcon.react",
    "WAWebDrawerManager",
    "WAWebMessageBubbleActions.react",
    "WAWebMobilePlatforms",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWidFactory",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.businessWid,
        r = e.chat,
        a = e.ctaText,
        i = e.onClick,
        l;
      t[0] !== n
        ? ((l = o("WAWebUserPrefsMeUser").isMeAccount(n)),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        c;
      t[2] !== u
        ? ((c =
            u && o("WAWebMobilePlatforms").isSMB()
              ? o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo()
              : null),
          (t[2] = u),
          (t[3] = c))
        : (c = t[3]);
      var d = c,
        m;
      t[4] !== d || t[5] !== n || t[6] !== r || t[7] !== u || t[8] !== i
        ? ((m = function () {
            if ((i(), u))
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                  adsAccountInfo: d,
                  entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType")
                    .BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS,
                  initialStep: o("WAWebBizToolsFlowSteps").BizToolsSteps
                    .Catalog,
                }),
                { transition: "pop-drawer-fast", focusOnUnMount: !0 },
              );
            else {
              var e = o(
                "WAWebProductCatalogContext",
              ).buildProductCatalogContext(
                new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_CATALOG_MESSAGE,
              );
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                s.jsx(
                  o("WAWebProductDetailsFlowLoadable")
                    .ProductDetailsFlowLoadable,
                  {
                    chat: r,
                    catalogOwnerJid: o("WAWebWidFactory")
                      .asUserWidOrThrow(n)
                      .toJid(),
                  },
                ),
                { transition: "slide-left", newDrawerContext: e },
              );
            }
          }),
          (t[4] = d),
          (t[5] = n),
          (t[6] = r),
          (t[7] = u),
          (t[8] = i),
          (t[9] = m))
        : (m = t[9]);
      var p = m,
        _;
      return (
        t[10] !== a || t[11] !== p
          ? ((_ = s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              items: [
                {
                  label: a,
                  onClick: p,
                  Icon: o("WAWebCatalogFilledIcon.react").CatalogFilledIcon,
                },
              ],
            })),
            (t[10] = a),
            (t[11] = p),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    l.default = m;
  },
  98,
);
