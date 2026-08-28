__d(
  "AdsExperimentsToolbarTestButtonModalProviderPlugin",
  ["AdsExperimentsAutoOpenUtils", "AdsExperimentsFunnelLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        var e = o(
            "AdsExperimentsAutoOpenUtils",
          ).getAdsExperimentsAutoOpenCreationModalParams(),
          t = e.integrationType,
          n = e.prefilledUsecase,
          a = e.shouldAutoOpenModal,
          i = e.testAction;
        return a
          ? (r("AdsExperimentsFunnelLogger").logCreationAction({
              entryPoint: "UrlParam",
              firstComponentName: "ads_manager_multiselect_test_toolbar_dialog",
              funnelEntranceAction: "URL_PARAM",
              name: "ENTER_FUNNEL",
              testType: "CAMPAIGN_COMPARISON",
              urlParam: i,
            }),
            {
              integrationType: t,
              isModalVisible: !0,
              source: "UrlParam",
              prefilledUsecase: n,
            })
          : { isModalVisible: !1 };
      },
      s = { initialState: e() },
      u = s;
    l.default = u;
  },
  98,
);
