__d(
  "WAWebBizNativeAdsNavigateToAdCreation",
  ["WAWebBizNativeAdsFlowTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      if (e != null && e.adCreationEntrypointReference == null) {
        var a = e.prepareAdCreation(n);
        r != null && a.then(r);
      } else r == null || r(e == null ? void 0 : e.pageId);
      t.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation);
    }
    l.default = e;
  },
  98,
);
