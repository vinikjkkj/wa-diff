__d(
  "AdsCopyCopyErrorToastReducerPlugin",
  [
    "errorCode",
    "AdsCopyFailToastStrings",
    "AdsDuplicationLargeCopyUsabilityGKUtils",
    "adsFormatDuplicationErrorMessage",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "copyFailureToast",
      u = new Set([1792167]),
      c = 0,
      d = {
        reduce: function (n, a) {
          var t = o(
            "AdsDuplicationLargeCopyUsabilityGKUtils",
          ).shouldEnableDuplicationFailureUsability({
            exposure_source: "FAILURE_TOAST",
          });
          r("gkx")("6917");
          var i = a.error.error_subcode,
            l = i != null && u.has(i);
          if (!t && !l) return n;
          var s = a.level,
            d = a.ids.length,
            m =
              d > 1
                ? o("AdsCopyFailToastStrings").getFailureToastHeaderPlural(s)
                : o("AdsCopyFailToastStrings").getFailureToastHeaderSingular(s),
            p = r("adsFormatDuplicationErrorMessage")(a.error),
            _ = o("AdsCopyFailToastStrings").getFailureToastBody(s, p),
            f = {
              canDismiss: !0,
              cardType: "error",
              "data-testid": "ads_copy_error_toast",
              header: m,
              id: e + "_" + c++,
              bodyText: _,
            };
          return n
            .filter(function (t) {
              return t.id.indexOf(e) < 0;
            })
            .concat(f);
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
