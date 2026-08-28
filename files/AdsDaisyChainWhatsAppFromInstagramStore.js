__d(
  "AdsDaisyChainWhatsAppFromInstagramStore",
  [
    "AdsDaisyChainWhatsAppFromInstagramStoreSource",
    "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerQuery.graphql",
    "AdsLoadStateUtils_LEGACY",
    "AdsManagerRelayEnvironment",
    "LoadObject",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
    "preloadRelayFetchQuery",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsDaisyChainWhatsAppFromInstagramStore.DATA_UPDATED",
      s = {
        id: null,
        formattedPhoneNumber: null,
        unformattedPhoneNumber: null,
      },
      u = (function (t) {
        function n() {
          var n,
            o = new (r("AdsDaisyChainWhatsAppFromInstagramStoreSource"))();
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
        var a = n.prototype;
        return (
          (a.get = function (t) {
            var e = this.getSingleValue(t, s);
            if (e.isEmpty() || e.isLoading()) {
              var n = { selectedPageID: t, passCountryCodeGK: !0 };
              return (
                r("preloadRelayFetchQuery")(
                  r("AdsManagerRelayEnvironment"),
                  r(
                    "AdsDaisyChainWhatsAppFromInstagramStoreSourceServerQuery.graphql",
                  ),
                  n,
                ),
                o("AdsLoadStateUtils_LEGACY").fromLoadObject(
                  r("LoadObject").loading({ creatorModuleID: i.id }),
                )
              );
            }
            return o("AdsLoadStateUtils_LEGACY").fromLoadObject(e);
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
