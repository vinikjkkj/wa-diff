__d(
  "AdsPromoAdsStickySettingOnPublishCompletedLoggerPlugin",
  ["AdsPromoAdsStickySettingPublishStash", "cr:3003", "cr:3203"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          try {
            var e = o("AdsPromoAdsStickySettingPublishStash").getStashedFlags();
            if (e.size === 0 || t.isInitialRequestFailure) return;
            var r = n("cr:3203") != null ? n("cr:3203") : n("cr:3003");
            if (r != null)
              for (var a of e) {
                var i = a[0],
                  l = a[1];
                r.updateAlwaysOnFlags(i, l);
              }
          } catch (e) {
          } finally {
            o("AdsPromoAdsStickySettingPublishStash").clearStash();
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
