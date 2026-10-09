__d(
  "StreamGroupRegistry",
  ["DGWBestEffortCallbacks", "DGWLoggingContext", "Random", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = new Map()), (this.$2 = new Set()));
      }
      var t = e.prototype;
      return (
        (t.setStreamGroupAndTransport = function (t, n) {
          this.$1.set(t, n);
        }),
        (t.containsStreamGroup = function (t) {
          return this.$1.has(t);
        }),
        (t.removeStreamGroupAndTransport = function (t) {
          this.$1.delete(t);
        }),
        (t.getStreamGroupTransport = function (t) {
          var e = this.$1.get(t);
          if (e == null) throw r("err")("No stream group transport");
          return e;
        }),
        (t.deauthAllStreamGroups = function () {
          var e = Array.from(this.$1.values());
          o("DGWBestEffortCallbacks").runCallbacksBestEffort(
            e.map(function (e) {
              return function () {
                return e.deauth();
              };
            }),
            function (e) {
              o("DGWLoggingContext").DGWLoggingContext.bumpODSKey(
                o("DGWLoggingContext").DGWLoggingComponent.RAW_CLIENT,
                "deauth_broadcast_transport_error",
              );
            },
          );
        }),
        (t.getNewStreamGroupId = function () {
          for (var e = o("Random").uint32(); this.$2.has(e); )
            e = o("Random").uint32();
          return (this.$2.add(e), e);
        }),
        e
      );
    })();
    l.StreamGroupRegistry = e;
  },
  98,
);
