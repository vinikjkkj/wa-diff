__d(
  "WAWebAddonServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebAddonService",
    "WebDi.Async",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebAssociatedMessagesRevokeUtils",
      ).__setRef("WAWebAddonServiceWebLive"),
      u = r("JSResourceForInteraction")("WAWebRequestDeleteAddOns").__setRef(
        "WAWebAddonServiceWebLive",
      ),
      c = o("WAWebAddonService").AddonService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([s.load(), u.load()]);
          }),
          r = t[0].getHydratedAssociatedChildMessageModelsFromParentMsgs,
          a = t[1],
          i = a.requestDeleteAddOns,
          l = a.requestDeleteAddOnsFireAndForget,
          c = {
            requestDeleteAddOns: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t, n);
              });
            },
            requestDeleteAddOnsFireAndForget: function (t, n) {
              return o("WebDi.Fx").sync(function () {
                return l(t, n);
              });
            },
            getHydratedAssociatedChildMessageModelsFromParentMsgs: function (
              t,
            ) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t);
              });
            },
          };
        return c;
      });
    l.AddonServiceWebLive = c;
  },
  98,
);
