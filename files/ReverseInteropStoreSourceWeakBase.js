__d(
  "ReverseInteropStoreSourceWeakBase",
  [
    "ReverseInteropStoreSourceBase",
    "abstractMethod",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$ReverseInteropStoreSourceWeakBase$p_1 =
            o("relay-runtime/store/RelayStoreUtils").ROOT_ID + ":" + t),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__getGQLParams = function (t) {
          return r("abstractMethod")(this.constructor.name, "__getGQLParams");
        }),
        (n.__serializeKey = function (t) {
          return JSON.stringify(this.__getGQLParams(t));
        }),
        (n.getRelayId = function (t) {
          var e = this.__getGQLParams(t),
            n = o("relay-runtime/store/RelayStoreUtils").getStableStorageKey(
              this.$ReverseInteropStoreSourceWeakBase$p_1,
              e,
            );
          return n;
        }),
        t
      );
    })(r("ReverseInteropStoreSourceBase"));
    l.default = e;
  },
  98,
);
