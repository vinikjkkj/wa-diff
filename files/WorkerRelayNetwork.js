__d(
  "WorkerRelayNetwork",
  [
    "ActorURIConfig",
    "MAWCurrentUser",
    "RelayAPIConfig",
    "WAResolvable",
    "asyncToGeneratorRuntime",
    "createRelayFBNetwork",
    "createRelayFBNetworkFetch",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAResolvable").Resolvable)();
    function s() {
      var t = m(o("MAWCurrentUser").getID()),
        n = { execute: t.execute };
      return (e.resolve(n), n);
    }
    function u() {
      return e.promise;
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield e.promise;
          var n = m(o("MAWCurrentUser").getID(), void 0, t);
          return { execute: n.execute };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      var a = {
          actorID: e,
          batchResponseChunks: !0,
          customHeaders:
            n == null
              ? void 0
              : babelHelpers.extends({}, r("RelayAPIConfig").customHeaders, n),
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
        i = r("createRelayFBNetworkFetch")(a),
        l = function (t, n, r) {
          return o("relay-runtime").Observable.create(function (e) {
            return e.complete();
          });
        };
      return r("createRelayFBNetwork")(i, l, null, null);
    }
    ((l.createWorkerNetworkExecute = s),
      (l.getWorkerNetworkExecute = u),
      (l.getWorkerNetworkExecuteWithHeaders = c));
  },
  98,
);
