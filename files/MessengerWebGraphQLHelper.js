__d(
  "MessengerWebGraphQLHelper",
  [
    "errorCode",
    "ActorURI",
    "AsyncRequest",
    "DTSG",
    "DTSGParser",
    "Deferred",
    "FBLogger",
    "WebGraphQLConfig",
    "XGraphQLBatchAPIController",
    "cr:2148",
    "cr:2703",
    "cr:4351",
    "getAsyncParams",
    "getBizInboxThreadsRelayQueryMigration",
    "getBizInboxUnifiedThreadsQuery",
    "getErrorSafe",
    "nullthrows",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "for (;;);",
      u = e.length;
    function c(e, t) {
      return m([e], t)[0];
    }
    function d(e, t, o) {
      var a = n("react-relay"),
        i = a.fetchQuery,
        l = n("cr:2148") == null ? void 0 : n("cr:2148").getForActorID(o),
        s = new (r("Deferred"))(),
        u = s.getPromise();
      return (
        i(r("nullthrows")(l), e, t.variables).subscribe({
          start: function () {},
          complete: function () {},
          error: function (t) {
            s.reject({
              data: {},
              errors: [{ message: t.message, severity: "CRITICAL", error: t }],
            });
          },
          next: function (t) {
            t
              ? s.resolve(t)
              : s.reject({
                  data: {},
                  errors: [
                    {
                      message: "Unexpected response received from server.",
                      severity: "CRITICAL",
                      response: t,
                    },
                  ],
                });
          },
        }),
        u
      );
    }
    function m(t, a) {
      var i = a == null ? void 0 : a.actorID;
      if (t.length === 1 && i) {
        var l, s;
        if (n("cr:4351")) {
          var c,
            m = (c = a == null ? void 0 : a.batchName) != null ? c : "",
            _ = t[0].variables,
            f = n("cr:4351").getUnifiedChannelFromMercuryOperations(
              m,
              _.source,
            );
          if (
            f &&
            m &&
            (m === "MessengerGraphQLThreadlistFetcher" ||
              m === "MessengerGraphQLThreadFetcher") &&
            _.source &&
            n("cr:4351").shouldUseUnifiedQuery(f, _) &&
            o("getBizInboxUnifiedThreadsQuery").getShouldUnifyThreadQueries()
          )
            return [n("cr:4351").execUnifiedQuery(f)];
        }
        if (
          (n("cr:2703") == null ? void 0 : n("cr:2703").params.id) ===
            ((l = t[0]) == null ? void 0 : l.id) &&
          !((s = t[0]) != null && s.variables.before) &&
          r("getBizInboxThreadsRelayQueryMigration")()
        )
          return [d(n("cr:2703"), t[0], i)];
      }
      var g = {},
        h = {},
        y = t.map(function (e, t) {
          var n = "o" + t;
          g[n] = { doc_id: r("nullthrows")(e.id), query_params: e.variables };
          var o = new (r("Deferred"))();
          return ((h[n] = o), o.getPromise());
        }),
        C = babelHelpers.extends({}, r("getAsyncParams")("POST"));
      a && a.actorID != null && (C[o("ActorURI").PARAMETER_ACTOR] = a.actorID);
      var b = a && a.batchName ? { batch_name: a.batchName } : {},
        v = new (r("AsyncRequest"))()
          .setURI(r("XGraphQLBatchAPIController").getURIBuilder().getURI())
          .setOption("suppressEvaluation", !0)
          .setMethod("POST")
          .setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
          .setData(
            babelHelpers.extends({}, b, C, { queries: JSON.stringify(g) }),
          )
          .setHandler(function (t) {
            var n = t.getPayload(),
              a = n.response;
            try {
              if (a.startsWith(e)) {
                var i = a.substring(u),
                  l = JSON.parse(i);
                if (l.error == 1357001) {
                  Object.keys(h).forEach(function (e) {
                    h[e].isSettled() ||
                      h[e].reject({
                        data: {},
                        errors: [
                          {
                            message: "Not logged in.",
                            severity: "CRITICAL",
                            should_end_session: !0,
                          },
                        ],
                      });
                  });
                  return;
                }
              }
              r("DTSGParser").updateFromAsyncResponse(a);
              var s = a.split("\r\n");
              s.pop();
              var c = s.map(function (e) {
                return JSON.parse(e);
              });
              c.forEach(function (e) {
                return Object.keys(e).forEach(function (t) {
                  var n = h[t];
                  if (n) {
                    var r = e[t];
                    if (r.extensions) {
                      var a,
                        i = (a = r.extensions) == null ? void 0 : a.dtsg_token;
                      i && o("DTSG").setToken(i);
                    }
                    p(r)
                      ? n.resolve(r.data)
                      : r.errors
                        ? n.reject(r)
                        : r.data
                          ? n.resolve(r.data)
                          : n.reject({
                              data: {},
                              errors: [
                                {
                                  message:
                                    "Unexpected response received from server.",
                                  severity: "CRITICAL",
                                  response: r,
                                },
                              ],
                            });
                  }
                });
              });
            } catch (e) {
              var d = r("getErrorSafe")(e);
              r("FBLogger")("webgraphql")
                .catching(d)
                .mustfix(
                  "Bad response: ",
                  "%s%s",
                  a.substr(0, 250),
                  a.length > 250 ? "[truncated]" : "",
                );
            }
            Object.keys(h).forEach(function (e) {
              h[e].isSettled() ||
                h[e].reject({
                  data: {},
                  errors: [
                    {
                      message: "No response received from server.",
                      severity: "CRITICAL",
                    },
                  ],
                });
            });
          })
          .setTimeoutHandler(r("WebGraphQLConfig").timeout, function () {
            Object.keys(h).forEach(function (e) {
              h[e].isSettled() ||
                h[e].reject({
                  data: {},
                  errors: [
                    { message: "Request timed out.", severity: "CRITICAL" },
                  ],
                });
            });
          })
          .setErrorHandler(function (e) {
            var t = e.getErrorDescription();
            Object.keys(h).forEach(function (n) {
              h[n].isSettled() ||
                h[n].reject({
                  data: {},
                  errors: [
                    { message: t, severity: "CRITICAL", error: e.getError() },
                  ],
                });
            });
          });
      return (
        a && a.msgrRegion && v.setRequestHeader("X-MSGR-Region", a.msgrRegion),
        v.setAllowCrossPageTransition(!0),
        v.send(),
        y
      );
    }
    function p(e) {
      var t, n;
      return (t =
        e == null || (n = e.errors) == null
          ? void 0
          : n.every(function (e) {
              var t;
              return e == null || (t = e.path) == null
                ? void 0
                : t.includes("message_capabilities2");
            })) != null
        ? t
        : !1;
    }
    ((l.exec = c), (l.execRelayQuery = d), (l.execAll = m));
  },
  98,
);
