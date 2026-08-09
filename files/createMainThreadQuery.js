__d(
  "createMainThreadQuery",
  [
    "FBLogger",
    "IGDWebUtils",
    "MAWRotateDTSG",
    "WARetryableError",
    "asyncToGeneratorRuntime",
    "executeGraphQLQuery",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.getNetwork(),
        n = { execute: t.execute };
      return n;
    }
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("relay-runtime").getRequest(e);
          if (a.params.operationKind !== "query")
            throw r("FBLogger")("messenger_web").mustfixThrow(
              "createWorkerQuery: Expected query operation",
            );
          var i = o("IGDWebUtils").isOnInstagramWeb(),
            l = yield o("executeGraphQLQuery")
              .executeGraphQLQuery(n, e, t)
              .then(function (e) {
                return e.toPromise();
              })
              .then(function (e) {
                var t,
                  n = Array.isArray(e)
                    ? (t = e[0]) == null
                      ? void 0
                      : t.data
                    : e == null
                      ? void 0
                      : e.data;
                if (n != null) return n;
              })
              .catch(function (e) {
                if (
                  (("code" in e && e.code === 1357004) ||
                    ("message" in e && e.message.indexOf("1357004") !== -1) ||
                    (typeof e == "string" && e.indexOf("1357004") !== -1)) &&
                  !i
                )
                  return (
                    r("FBLogger")("messenger_web").info(
                      "Failed with expired DTSG, attempting to rotate.",
                    ),
                    o("MAWRotateDTSG")
                      .tryRotateDTSG()
                      .then(function (t) {
                        throw t ? new (r("WARetryableError"))(e) : e;
                      })
                  );
                throw e;
              });
          return l;
        })),
        u.apply(this, arguments)
      );
    }
    ((l.getWorkerLikeRelayEnvironment = e), (l.createMainThreadQuery = s));
  },
  98,
);
