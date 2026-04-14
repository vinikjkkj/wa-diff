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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m(e) {
      var t = e.businessWid,
        n = e.chat,
        r = e.ctaText,
        a = e.onClick,
        i = o("WAWebUserPrefsMeUser").isMeAccount(t),
        l = d(
          function () {
            return i && o("WAWebMobilePlatforms").isSMB()
              ? o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo()
              : null;
          },
          [i],
        ),
        u = c(
          function () {
            if ((a(), i))
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                  adsAccountInfo: l,
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
                    chat: n,
                    catalogOwnerJid: o("WAWebWidFactory")
                      .asUserWidOrThrow(t)
                      .toJid(),
                  },
                ),
                { transition: "slide-left", newDrawerContext: e },
              );
            }
          },
          [l, t, n, i, a],
        );
      return s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
        items: [
          {
            label: r,
            onClick: u,
            Icon: o("WAWebCatalogFilledIcon.react").CatalogFilledIcon,
          },
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
