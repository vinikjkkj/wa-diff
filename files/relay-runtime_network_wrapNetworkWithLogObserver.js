__d(
  "relay-runtime/network/wrapNetworkWithLogObserver",
  ["relay-runtime/util/generateID"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return {
        execute: function (o, a, i, l, s, u, c, d) {
          var r = n("relay-runtime/util/generateID")(),
            m = {
              start: function (n) {
                e.__log({
                  name: "network.start",
                  networkRequestId: r,
                  params: o,
                  variables: a,
                  cacheConfig: i,
                });
              },
              next: function (n) {
                e.__log({
                  name: "network.next",
                  networkRequestId: r,
                  response: n,
                });
              },
              error: function (n) {
                e.__log({
                  name: "network.error",
                  networkRequestId: r,
                  error: n,
                });
              },
              complete: function () {
                e.__log({ name: "network.complete", networkRequestId: r });
              },
              unsubscribe: function () {
                e.__log({ name: "network.unsubscribe", networkRequestId: r });
              },
            },
            p = function (n) {
              e.__log({ name: "network.info", networkRequestId: r, info: n });
            };
          return t.execute(o, a, i, l, p, u, c, d).do(m);
        },
      };
    }
    a.exports = e;
  },
  null,
);
