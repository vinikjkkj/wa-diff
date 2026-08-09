__d(
  "WorkerRelayNetwork",
  [
    "ActorURIConfig",
    "MAWCurrentUser",
    "RelayAPIConfig",
    "WAResolvable",
    "createRelayFBNetwork",
    "createRelayFBNetworkFetch",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAResolvable").Resolvable)();
    function s() {
      var t = c(o("MAWCurrentUser").getID()),
        n = { execute: t.execute };
      return (e.resolve(n), n);
    }
    function u() {
      return e.promise;
    }
    function c(e, t) {
      var n = {
          actorID: e,
          batchResponseChunks: !0,
          getAdditionalData: function () {
            var t = {};
            return (
              e != null && (t[r("ActorURIConfig").PARAMETER_ACTOR] = e),
              r("RelayAPIConfig").useXController === !1 &&
                r("RelayAPIConfig").accessToken !== "" &&
                (t.access_token = r("RelayAPIConfig").accessToken),
              t
            );
          },
          graphURI: t,
        },
        a = r("createRelayFBNetworkFetch")(n),
        i = function (t, n, r) {
          return o("relay-runtime").Observable.create(function (e) {
            return e.complete();
          });
        };
      return r("createRelayFBNetwork")(a, i, null, null);
    }
    ((l.createWorkerNetworkExecute = s), (l.getWorkerNetworkExecute = u));
  },
  98,
);
