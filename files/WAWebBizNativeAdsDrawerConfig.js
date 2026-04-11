__d(
  "WAWebBizNativeAdsDrawerConfig",
  [
    "fbt",
    "WAWebBizAdCreationLoadingFallback.react",
    "WAWebBizAdManagementLoadingFallback.react",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebDrawerHeader.react",
    "WAWebNoop",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d =
        ((e = {}),
        (e[o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation] = {
          drawerTheme: "starred",
          headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          loadingFallback: c.jsx(
            r("WAWebBizAdCreationLoadingFallback.react"),
            {},
          ),
          title: function () {
            return s._(/*BTDS*/ "Create new ad");
          },
        }),
        (e[o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement] =
          {
            drawerTheme: "starred",
            headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
            loadingFallback: c.jsx(
              r("WAWebBizAdManagementLoadingFallback.react"),
              {},
            ),
            title: function () {
              return s._(/*BTDS*/ "Advertise");
            },
          }),
        e);
    function m(e) {
      return d[e];
    }
    ((l.INITIAL_STEP = o(
      "WAWebBizNativeAdsFlowTypes",
    ).BizNativeAdsFlowSteps.AdManagement),
      (l.LOADING_BACK_HANDLER = r("WAWebNoop")),
      (l.getDrawerConfig = m));
  },
  226,
);
