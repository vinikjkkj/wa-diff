__d(
  "liveQueryFetchWithWWWInitial",
  [
    "invariant",
    "LiveQueryEventsLoggingResolver",
    "RelayGraphQLRequestUtils",
    "RelayRuntime",
    "getErrorSafe",
    "makeGraphQLLiveQueryRequest",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i) {
      if (!u()) return a;
      e.id != null || s(0, 13279);
      var l = babelHelpers.extends(
        {
          doc_id: r("nullthrows")(e.id),
          config_id: n.config_id,
          operation_name: e.name,
          actor_id: n.actor_id,
          variables: t,
        },
        i,
      );
      n.access_token !== "" &&
        (l = babelHelpers.extends({}, l, { access_token: n.access_token }));
      var c = o("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
      return (
        c != null && (l = babelHelpers.extends({}, l, { logging_context: c })),
        o("RelayRuntime").Observable.create(function (t) {
          var n = !1,
            i = null;
          return (
            a.subscribe({
              next: function (r) {
                if (
                  r.extensions != null &&
                  r.extensions.is_final === !0 &&
                  r.extensions != null &&
                  r.extensions.live_query != null
                ) {
                  var e = r.extensions.live_query;
                  (typeof e.response_digest == "string" &&
                    (l = babelHelpers.extends({}, l, {
                      last_response_digest: e.response_digest,
                    })),
                    typeof e.disable == "boolean" && (n = e.disable));
                }
                t.next(r);
              },
              error: function (n) {
                t.error(n);
              },
              complete: function () {
                if (n) {
                  t.complete();
                  return;
                }
                i = r("makeGraphQLLiveQueryRequest")(l)
                  .onResponse(function (n) {
                    var a;
                    try {
                      ((a = r("RelayGraphQLRequestUtils").parsePayload(n)),
                        typeof a == "object" || s(0, 12937));
                    } catch (e) {
                      return t.error(r("getErrorSafe")(e));
                    }
                    if (!("errors" in a) && !("data" in a))
                      return t.error(
                        o("RelayRuntime").RelayError.createWarning(
                          "EmptyResponseError",
                          "Parsed network response is empty",
                        ),
                      );
                    if (a.errors) {
                      for (var i of a.errors)
                        if (i.severity === "CRITICAL") {
                          var l = r(
                            "RelayGraphQLRequestUtils",
                          ).createErrorFromPayload(i, e.name);
                          return t.error(l);
                        }
                    }
                    t.closed || t.next(a);
                  })
                  .onError(function (e) {})
                  .onActive(function () {})
                  .onPause(function (e, t) {})
                  .onResume(function (e) {})
                  .send();
              },
            }),
            function () {
              ((n = !0),
                i != null &&
                  r("promiseDone")(i, function (e) {
                    e.cancel();
                  }));
            }
          );
        })
      );
    }
    function u() {
      return "WebSocket" in window;
    }
    l.default = e;
  },
  98,
);
