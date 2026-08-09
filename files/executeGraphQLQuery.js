__d(
  "executeGraphQLQuery",
  ["DTSG", "FBLogger", "MAWBridge", "asyncToGeneratorRuntime", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("relay-runtime").getRequest(t);
          if (a.params.operationKind === "subscription")
            throw r("FBLogger")("messenger_web").mustfixThrow(
              "executeGraphQLQuery: Expected query or mutation operation",
            );
          var i = { force: !0 },
            l = o("DTSG").getToken();
          if (l == null || l === "" || typeof l != "string") {
            if (
              ((l = yield o("MAWBridge")
                .getBridge()
                .sendAndReceive("event", "getDTSGToken")
                .catch(function (e) {
                  throw r("FBLogger")("messenger_web").mustfixThrow(
                    "executeGraphQLQuery: Failed to get DTSG token from the main thread",
                    e,
                  );
                })),
              l == null || l === "" || typeof l != "string")
            )
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "executeGraphQLQuery: Received an empty DTSG token from the main thread",
              );
            o("DTSG").setToken(l);
          }
          var s = o("relay-runtime").createOperationDescriptor(a, n, i);
          return e.execute(s.request.node.params, s.request.variables, i);
        })),
        s.apply(this, arguments)
      );
    }
    l.executeGraphQLQuery = e;
  },
  98,
);
