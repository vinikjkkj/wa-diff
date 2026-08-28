__d(
  "adsExperimentsWaitForAdgroupsThenDispatchStoreUtils",
  [
    "AdsExperimentsFunnelLogger",
    "AdsPEAdgroupSelectors",
    "FluxContainerSubscriptions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3;
    function s(t, n) {
      var a = function () {
        return t.every(function (e) {
          var t = o("AdsPEAdgroupSelectors").getCachedSelector_LEGACY()(e);
          return t.isDone() && t.hasValue();
        });
      };
      if (a()) {
        n();
        return;
      }
      var i = new (r("FluxContainerSubscriptions"))(
        "adsExperimentsWaitForAdgroupsThenDispatch",
      );
      i.setStores(
        o("AdsPEAdgroupSelectors").getCachedSelector_LEGACY.getStores(),
      );
      var l = window.setTimeout(function () {
        (i.reset(),
          r("AdsExperimentsFunnelLogger").logCreationAction({
            name: "DEBUG",
            debugActionName: "WAIT_FOR_ADGROUP_DISPATCH_TIMEOUT",
            actionPayloadValues: new Map([["timeout_ms", String(e)]]),
          }),
          n());
      }, e);
      i.addListener(function () {
        a() && (window.clearTimeout(l), i.reset(), n());
      });
    }
    l.default = s;
  },
  98,
);
