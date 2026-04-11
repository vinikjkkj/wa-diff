__d(
  "liveQueryFetch",
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
    function e(e, t, n, a) {
      if (!u())
        return o("RelayRuntime").Observable.create(function (e) {
          e.complete();
        });
      var i = Date.now();
      (e.id != null || s(0, 13279),
        e.metadata.live != null &&
          typeof e.metadata.live.timeStamp == "number" &&
          (i = e.metadata.live.timeStamp));
      var l = babelHelpers.extends(
        {
          doc_id: r("nullthrows")(e.id),
          config_id: n.config_id,
          operation_name: e.name,
          actor_id: n.actor_id,
          variables: t,
        },
        a,
      );
      n.access_token !== "" &&
        (l = babelHelpers.extends({}, l, { access_token: n.access_token }));
      var c = o("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
      return (
        c != null &&
          ((c = babelHelpers.extends({}, c, {
            client_send_request_timestamp: i,
          })),
          (l = babelHelpers.extends({}, l, { logging_context: c }))),
        o("RelayRuntime").Observable.create(function (t) {
          var n = r("makeGraphQLLiveQueryRequest")(l)
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
          return function () {
            r("promiseDone")(n, function (e) {
              e.cancel();
            });
          };
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
