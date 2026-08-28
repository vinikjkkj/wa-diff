__d(
  "getPluginForMessageMarketingCompatibleSettings",
  ["AdsMessageMarketingCompatibleSettingsPluginResolver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return r("AdsMessageMarketingCompatibleSettingsPluginResolver").resolve(
          {
            channel: n,
            objective: t.objective,
            hasProductCatalog: t.hasProductCatalog,
          },
        );
      },
      s = e;
    l.default = s;
  },
  98,
);
