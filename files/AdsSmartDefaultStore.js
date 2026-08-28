__d(
  "AdsSmartDefaultStore",
  [
    "AdsSmartDefaultStoreSource",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsSmartDefaultStore.DATA_UPDATED",
      s = {
        ad_account_id: null,
        attribution_model_default: null,
        leads: null,
        engagement: null,
        traffic: null,
        sales: null,
        lead_gen: null,
        conversions: null,
      },
      u = (function (t) {
        function n() {
          var n,
            o = new (r("AdsSmartDefaultStoreSource"))();
          return (
            (n = t.call(this, o, e) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function (e) {
                return c.get(e);
              });
            })),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.get = function (t) {
            return this.getSingleValue(t, s);
          }),
          (o.getAttributionModelDefault = function (t) {
            var e;
            return (e = this.get(t).getValue()) == null
              ? void 0
              : e.attribution_model_default;
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    u.__moduleID = i.id;
    var c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
