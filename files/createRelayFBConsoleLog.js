__d(
  "createRelayFBConsoleLog",
  [
    "$InternalEnum",
    "RelayFBNetworkLoggerController",
    "getGraphiQLURL",
    "relay-runtime/util/withProvidedVariables",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      o("RelayFBNetworkLoggerController").log(
        "GraphiQL:",
        r("getGraphiQLURL")(e, t, n),
      );
    }
    var s = n("$InternalEnum").Mirrored([
      "Regular",
      "LiveQuery",
      "Subscription",
    ]);
    function u(e) {
      var t;
      return e.operationKind === "subscription"
        ? s.Subscription
        : ((t = e.metadata) == null ? void 0 : t.live) != null
          ? s.LiveQuery
          : s.Regular;
    }
    function c(e) {
      return parseFloat((e / 1024).toFixed(1)) + "KB";
    }
    function d(t) {
      var n = new Map();
      return function (a) {
        switch (a.name) {
          case "suspense.fragment": {
            var i = a.data,
              l = a.fragment,
              c = a.isMissingData,
              d = a.isPromiseCached,
              m = a.isRelayHooks,
              p = a.pendingOperations,
              _;
            (c
              ? m
                ? (_ =
                    "Fragment suspended due to data missing for fragment (`undefined` fields).")
                : (_ =
                    "Fragment suspended from a Fragment Container component due to data missing for fragment (`undefined` fields), and the Container being rendered under a Relay Hooks query.")
              : (_ = "Unknown reason."),
              o("RelayFBNetworkLoggerController").logGroup(
                "Suspense: Relay Fragment " + l.name + " Suspended",
                function () {
                  (o("RelayFBNetworkLoggerController").log(
                    "On pending request:",
                    p.map(function (e) {
                      return {
                        identifier: e.identifier,
                        name: e.node.params.name,
                        variables: e.variables,
                      };
                    }),
                  ),
                    o("RelayFBNetworkLoggerController").log("Reason:", _),
                    o("RelayFBNetworkLoggerController").log(
                      "Fragment Data: ",
                      i,
                    ),
                    m &&
                      o("RelayFBNetworkLoggerController").log(
                        "Was initial suspense for pending request:",
                        d ? "no" : "yes",
                      ));
                },
                !0,
              ));
            break;
          }
          case "suspense.query": {
            var f,
              g = a.operation.request,
              h = a.fetchPolicy,
              y = a.isPromiseCached,
              C = a.queryAvailability,
              b = a.renderPolicy,
              v = (f = C == null ? void 0 : C.status) != null ? f : "unknown",
              S;
            if (v === "unknown") S = "Unknown.";
            else {
              var R;
              (v === "stale"
                ? (R = "query data being stale.")
                : h === "network-only"
                  ? (R =
                      '"network-only" fetch policy, regardless of availability in cache')
                  : b === "full"
                    ? (R =
                        "data being " +
                        v +
                        ", and partial rendering being disabled")
                    : (R =
                        "query data being " +
                        v +
                        ", and the given fetch and render policies"),
                (S = "Query suspended due to " + R + "."));
            }
            o("RelayFBNetworkLoggerController").logGroup(
              "Suspense: Relay Query " + g.node.params.name + " Suspended",
              function () {
                var e;
                ((e = o("RelayFBNetworkLoggerController")).log(
                  "On pending request:",
                  {
                    identifier: g.identifier,
                    name: g.node.params.name,
                    variables: g.variables,
                  },
                ),
                  e.log("Fetch policy:", h),
                  e.log("Render policy:", b),
                  e.log("Query data availability:", v),
                  e.log("Reason:", S),
                  e.log(
                    "Was initial suspense for pending request:",
                    y ? "no" : "yes",
                  ));
              },
              !0,
            );
            break;
          }
          case "queryresource.fetch":
          case "fetchquery.fetch": {
            var L = a.fetchPolicy,
              E = a.operation,
              k = a.queryAvailability,
              I = a.shouldFetch;
            if (
              L === "store-only" ||
              L === "store-or-network" ||
              L === "store-and-network"
            ) {
              var T = E.request;
              o("RelayFBNetworkLoggerController").logGroup(
                "Checking Relay Store for " + T.node.params.name,
                function () {
                  var e;
                  ((e = o("RelayFBNetworkLoggerController")).log(
                    "Variables:",
                    T.variables,
                  ),
                    e.log("Fetch policy:", L),
                    e.log("Render policy:", a.renderPolicy),
                    e.log(
                      "Has stale data:",
                      k.status === "stale" ? "yes" : "no",
                    ),
                    o("RelayFBNetworkLoggerController").log(
                      "Has missing data:",
                      k.status === "missing" ? "yes" : "no",
                    ),
                    o("RelayFBNetworkLoggerController").log(
                      "Fully resolvable from store:",
                      k.status === "available" ? "yes" : "no",
                    ),
                    o("RelayFBNetworkLoggerController").log(
                      "Network request:",
                      I ? "required" : "skipped",
                    ));
                },
                !0,
              );
            }
            break;
          }
          case "network.start": {
            n.set(a.networkRequestId, {
              info: [],
              params: a.params,
              responses: [],
              startTime: Date.now(),
              variables: a.variables,
            });
            break;
          }
          case "network.next": {
            var D = Date.now(),
              x = n.get(a.networkRequestId);
            if (x == null) return;
            var $ = a.response,
              P = 0,
              N = u(x.params);
            N !== s.Regular
              ? o("RelayFBNetworkLoggerController").logGroup(
                  "Relay " +
                    (N === s.Subscription ? "Subscription" : "LiveQuery") +
                    ": " +
                    x.params.name,
                  function () {
                    (e(
                      x.params,
                      r("relay-runtime/util/withProvidedVariables")(
                        x.variables,
                        x.params.providedVariables,
                        new Map(),
                      ),
                      t,
                    ),
                      o("RelayFBNetworkLoggerController").log("Response:", $));
                  },
                  !1,
                )
              : x.responses.push({
                  content: $,
                  contentLength: P,
                  timestamp: D,
                });
            break;
          }
          case "network.complete": {
            var M = n.get(a.networkRequestId);
            if (M == null) return;
            if ((n.delete(a.networkRequestId), u(M.params) === s.Regular)) {
              var w =
                "Relay " +
                (M.params.operationKind === "query" ? "Query" : "Mutation") +
                ": " +
                M.params.name;
              o("RelayFBNetworkLoggerController").logGroup(
                w,
                function () {
                  var n = r("relay-runtime/util/withProvidedVariables")(
                    M.variables,
                    M.params.providedVariables,
                    new Map(),
                  );
                  (e(M.params, n, t),
                    o("RelayFBNetworkLoggerController").log("Variables:", n),
                    o("RelayFBNetworkLoggerController").log(
                      "Duration:",
                      Date.now() - M.startTime + " ms",
                    ),
                    M.responses.forEach(function (e, t, n) {
                      o("RelayFBNetworkLoggerController").log(
                        n.length === 1
                          ? "Response:"
                          : "Response " +
                              (t + 1) +
                              "/" +
                              n.length +
                              " " +
                              ("(" + (e.timestamp - M.startTime) + "ms"),
                        e.content,
                      );
                    }),
                    M.info.forEach(function (e) {
                      o("RelayFBNetworkLoggerController").log("Info:", e);
                    }));
                },
                !1,
              );
            }
            break;
          }
          case "network.error": {
            var A = n.get(a.networkRequestId);
            if (A == null) return;
            (n.delete(a.networkRequestId),
              o("RelayFBNetworkLoggerController").logGroup(
                "Relay Error: " + A.params.name,
                function () {
                  (e(A.params, A.variables, t),
                    o("RelayFBNetworkLoggerController").log(
                      "Variables:",
                      A.variables,
                    ),
                    o("RelayFBNetworkLoggerController").log(
                      "Error:",
                      String(a.error),
                    ));
                },
                !1,
              ));
            break;
          }
          case "network.unsubscribe": {
            var F = n.get(a.networkRequestId);
            if (F == null) return;
            (n.delete(a.networkRequestId),
              u(F.params) !== s.Subscription &&
                o("RelayFBNetworkLoggerController").logGroup(
                  "Relay Unsubscribe: " + F.params.name,
                  function () {
                    (e(F.params, F.variables, t),
                      o("RelayFBNetworkLoggerController").log(
                        "Variables:",
                        F.variables,
                      ));
                  },
                  !1,
                ));
            break;
          }
          case "network.info": {
            var O = n.get(a.networkRequestId);
            if (O == null) return;
            O.info.push(a.info);
            break;
          }
        }
      };
    }
    l.default = d;
  },
  98,
);
