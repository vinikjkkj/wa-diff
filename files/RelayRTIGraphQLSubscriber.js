__d(
  "RelayRTIGraphQLSubscriber",
  [
    "invariant",
    "CurrentUser",
    "Random",
    "RelayRTIUtils",
    "RelayRuntime",
    "err",
    "getErrorSafe",
    "gkx",
    "makeGraphQLSubscriptionRequest",
    "promiseDone",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "gqls_workplace_logging_relay",
      u = "gqls_default_logging_relay",
      c = 1e3,
      d = 100;
    function m(e, t, n, r, o, a, i, l) {
      return p(e, t, r, o, a, i, l).do({
        next: function () {
          n && n.clear();
        },
      });
    }
    function p(t, n, o, a, i, l, m) {
      var p,
        _ = (p = t.metadata) == null ? void 0 : p.subscriptionName;
      typeof _ == "string" || s(0, 13280, t.name);
      var g = null;
      return (
        r("gkx")("21003") && r("Random").coinflip(d) && (g = e),
        g == null &&
          (r("gkx")("21004") ||
            (r("gkx")("21005") && r("Random").coinflip(c))) &&
          (g = u),
        f(t, n, g, o, a, i, l, m).do({
          start: function () {},
          next: function () {},
          unsubscribe: function () {},
        })
      );
    }
    function _(e) {
      return e == null
        ? null
        : { requestId: r("uuidv4")(), forceLogContext: e };
    }
    function f(e, t, n, a, i, l, s, u) {
      return o("RelayRuntime").Observable.create(function (c) {
        var d,
          m = e.id;
        if (typeof m != "string")
          throw r("err")("Found illegal doc_id in RelayRTIGraphQLSubscriber");
        var p = e.metadata.subscriptionName;
        if (typeof p != "string")
          throw r("err")("Found null usecase in RelayRTIGraphQLSubscriber");
        var f = { usecase: p, doc_id: m, routing_hint: e.name };
        a != null &&
          a !== r("CurrentUser").getID() &&
          (f = babelHelpers.extends({}, f, { page_id: a }));
        var g = o("RelayRTIUtils").experimentPegasusResumptionGroup(p);
        g != null &&
          (f = babelHelpers.extends({}, f, { resumption_group_name: g }));
        var h = (d = t["%options"]) != null ? d : {};
        ((h.useOSSResponseFormat = !0),
          n != null && (h.client_logged_context = n),
          (h.client_has_ods_usecase_counters = !0),
          (f = babelHelpers.extends({}, f, {
            variables: babelHelpers.extends({}, t, { "%options": h }),
          })));
        var y = _(n);
        (y != null &&
          (f = babelHelpers.extends({}, f, { instrumentation_data: y })),
          u != null && (f = babelHelpers.extends({}, f, { streamOptions: u })));
        var C = !1,
          b = r("makeGraphQLSubscriptionRequest")(f)
            .onActive(function () {
              i != null && i();
            })
            .onResponse(function (e) {
              if (!C)
                try {
                  var t = JSON.parse(e);
                  c.next(t);
                } catch (e) {
                  c.error(r("getErrorSafe")(e));
                }
            })
            .onError(function (e) {
              c.error(e);
            })
            .onPause(function (e, t) {
              s == null || s(e, t);
            })
            .onResume(function (e) {
              l == null || l(e);
            })
            .send();
        return function () {
          ((C = !0),
            r("promiseDone")(
              b.then(function (e) {
                e.cancel();
              }),
            ));
        };
      });
    }
    ((l.subscribeWithLoggingWithCacheInvalidation = m), (l.subscribe = f));
  },
  98,
);
