__d(
  "WAWebAddonServiceClient",
  ["WAWebAddonService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        requestDeleteAddOns: function (n, r) {
          return e(o("WAWebAddonService").AddonService, function (e) {
            return e.requestDeleteAddOns(n, r);
          });
        },
        requestDeleteAddOnsFireAndForget: function (n, r) {
          return e(o("WAWebAddonService").AddonService, function (e) {
            return e.requestDeleteAddOnsFireAndForget(n, r);
          });
        },
        getHydratedAssociatedChildMessageModelsFromParentMsgs: function (n) {
          return e(o("WAWebAddonService").AddonService, function (e) {
            return e.getHydratedAssociatedChildMessageModelsFromParentMsgs(n);
          });
        },
      };
    }
    l.addonServiceClient = e;
  },
  98,
);
