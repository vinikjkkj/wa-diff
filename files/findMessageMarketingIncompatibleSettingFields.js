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
            var n;
            if (e === "specialAdCategories") {
              var i;
              return !(
                (i = a[e]) != null &&
                i.some(function (n) {
                  return n == null
                    ? void 0
                    : n.equals(o("immutable").List(t[e]));
                })
              );
            }
            return (e === "appHasUnsupportedMMP" &&
              t.promotedObjectType !==
                r("AdsPromotedObjectTypes").MOBILE_APP) ||
              (r("gkx")("1075") && t[e] === void 0)
              ? !1
              : !((n = a[e]) != null && n.includes(t[e]));
          })
      );
    };
    l.findMessageMarketingIncompatibleSettingFields = e;
  },
  98,
);
