__d(
  "getVisualCompletionDefaultConfig",
  [
    "JSScheduler",
    "cr:13699",
    "getReactComponentName",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
    "getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("gkx")("12291"),
      u = r("gkx")("12291") ? 500 : null;
    function c() {
      var t;
      return {
        SSRInjectedElements: n("cr:13699"),
        bypass_detached_element: s,
        check_css_bg_elements: !(t = r("gkx"))("13291"),
        defer_expensive_calculation: function (n) {
          (e || (e = o("JSScheduler"))).scheduleLoggingPriCallback(n);
        },
        enable_lcp_tracking: t("15957"),
        enableInstrumentationCorrectnessLogging: t("3739"),
        getMeaningfulReactComponentName: o("getReactComponentName")
          .getMeaningfulReactComponentName,
        getReactComponentStackFromDOMElement: r(
          "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
        ),
        getWrapperComponentPropArrayFromDOMElement: r(
          "getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK",
        ),
        intersection_observer_timeout: u,
        invisibleStyleMemoization: t("12293"),
        useIntersectionObserverForVisibility: t("21211"),
        observeTextMutation: !1,
        retain_element_reference: r("gkx")("4022") || r("gkx")("12296"),
        use_image_download_tracker: r("gkx")("6123"),
        log_lcp_image_url: r("gkx")("9738"),
        log_lcp_metadata: r("gkx")("12297"),
        log_pagelet_size: r("gkx")("19108"),
        logLateMutationReactStack: r("gkx")("20981"),
        onlyLogLateMutationAfterSSRPaint: function () {
          return r("justknobx")._("3483");
        },
        logVCReactStack: r("gkx")("20982"),
        logLCPReactStack: r("gkx")("6775"),
        enable_background_loading_state_polling: r("gkx")("766"),
      };
    }
    l.default = c;
  },
  98,
);
