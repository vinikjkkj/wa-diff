__d(
  "WAWebAddonServiceWebLive",
  [
    "WAWebAddonService",
    "WAWebAssociatedMessagesRevokeUtils",
    "WAWebRequestDeleteAddOns",
    "WebDi.Async",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAddonService").AddonService.make(function* () {
      var e = {
        requestDeleteAddOns: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebRequestDeleteAddOns").requestDeleteAddOns(t, n);
          });
        },
        requestDeleteAddOnsFireAndForget: function (t, n) {
          return o("WebDi.Fx").sync(function () {
            return o(
              "WAWebRequestDeleteAddOns",
            ).requestDeleteAddOnsFireAndForget(t, n);
          });
        },
        getHydratedAssociatedChildMessageModelsFromParentMsgs: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebAssociatedMessagesRevokeUtils",
            ).getHydratedAssociatedChildMessageModelsFromParentMsgs(t);
          });
        },
      };
      return e;
    });
    l.AddonServiceWebLive = e;
  },
  98,
);
