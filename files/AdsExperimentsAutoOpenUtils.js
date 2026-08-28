__d(
  "AdsExperimentsAutoOpenUtils",
  ["AdsExperimentsIntegrationTypeEnum", "AdsInterfacesRouter", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = new (e || (e = r("URI")))(window.location.href);
      return t.getQueryData().bot_response_id;
    }
    function u() {
      var t,
        n = new (e || (e = r("URI")))(window.location.href),
        o = n.getQueryData();
      return {
        usecase: o.ab_test_usecase,
        testAction: o.ab_test_action,
        channel: (t = o.channel) != null ? t : "",
      };
    }
    function c() {
      var e = u(),
        t = e.testAction,
        n = e.usecase;
      switch (t) {
        case "curated_reports_placement_integration":
          return {
            integrationType: r("AdsExperimentsIntegrationTypeEnum")
              .CURATED_REPORTS_PLACEMENT,
            shouldAutoOpenModal: !0,
            prefilledUsecase: "PLACEMENT_VARIABLE",
            testAction: t,
          };
        case "am_open":
          return {
            shouldAutoOpenModal: !0,
            prefilledUsecase: n,
            testAction: t,
          };
        case "duplication_dialog_open":
          return {
            prefilledUsecase: null,
            shouldAutoOpenModal: !1,
            shouldAutoOpenDuplicationDialog: !0,
            testAction: t,
          };
      }
      return { shouldAutoOpenModal: !1, prefilledUsecase: n, testAction: t };
    }
    function d() {
      var t = new (e || (e = r("URI")))(window.location.href),
        n = t.getQueryData();
      n.ab_test_action != null &&
        (m(t, "ab_test_action"),
        n.ab_test_usecase != null && m(t, "ab_test_usecase"),
        n.channel != null && m(t, "channel"),
        window.history.pushState(null, "", t.toString()));
    }
    function m(e, t) {
      var n;
      (e.removeQueryData(t),
        r("AdsInterfacesRouter")
          .get()
          .updateParams(((n = {}), (n[t] = null), n)));
    }
    ((l.getMaybeExtractMAIBABotResponseId = s),
      (l.getAdsExperimentsAutoOpenCreationModalParams = c),
      (l.adsExperimentsRemoveAutoOpenParam = d));
  },
  98,
);
