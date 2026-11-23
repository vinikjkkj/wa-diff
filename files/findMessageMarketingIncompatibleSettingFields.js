__d(
  "findMessageMarketingIncompatibleSettingFields",
  [
    "AdsPromotedObjectTypes",
    "MessageMarketingUpstreamSettings",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
      return (
        a === void 0 &&
          (a = o("MessageMarketingUpstreamSettings").getCompatibleSettings(
            t,
            n,
          )),
        Object.keys(a)
          .filter(function (e) {
            return a[e] !== void 0;
          })
          .filter(function (e) {
            if (e === "specialAdCategories") {
              var n;
              return !(
                (n = a[e]) != null &&
                n.some(function (n) {
                  return n == null
                    ? void 0
                    : n.equals(o("immutable").List(t[e]));
                })
              );
            }
            if (
              (e === "appHasUnsupportedMMP" &&
                t.promotedObjectType !==
                  r("AdsPromotedObjectTypes").MOBILE_APP) ||
              (r("gkx")("1075") && t[e] === void 0)
            )
              return !1;
            var i = a[e];
            return !(i != null && i.includes(t[e]));
          })
      );
    };
    l.findMessageMarketingIncompatibleSettingFields = e;
  },
  98,
);
