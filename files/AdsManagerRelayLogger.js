__d(
  "AdsManagerRelayLogger",
  ["CometRelayPerfStore", "ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        switch ((o("CometRelayPerfStore").log(t), t.name)) {
          case "queryresource.fetch": {
            var n = t.fetchPolicy;
            (n === "store-only" ||
              n === "store-or-network" ||
              n === "store-and-network") &&
              r("ifRequired")("AdsPerfInteractionsController", function (e) {
                var n = e.getAllOngoingInteraction();
                for (var r of n) {
                  var o,
                    a = r[0],
                    i = r[1],
                    l = "cacheHit_" + t.operation.request.node.params.name;
                  e.addCustomInteractionAnnotation(
                    a,
                    ((o = {}), (o[l] = !t.shouldFetch), o),
                  );
                }
              });
            break;
          }
        }
        e != null && e(t);
      };
    }
    l.createAdsManagerRelayLogger = e;
  },
  98,
);
