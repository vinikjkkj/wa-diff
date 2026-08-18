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
        var f = (d = t["%options"]) != null ? d : {};
        ((f.useOSSResponseFormat = !0),
          n != null && (f.client_logged_context = n),
          (f.client_has_ods_usecase_counters = !0));
        var g = {
          usecase: p,
          doc_id: m,
          routing_hint: e.name,
          variables: babelHelpers.extends({}, t, { "%options": f }),
        };
        (a != null &&
          a !== r("CurrentUser").getID() &&
          (g = babelHelpers.extends({}, g, { page_id: a })),
          e.metadata.is_distillery === !0 &&
            r("gkx")("10299") &&
            (g = babelHelpers.extends({}, g, { is_distillery: !0 })));
        var h = o("RelayRTIUtils").experimentPegasusResumptionGroup(p);
        h != null &&
          (g = babelHelpers.extends({}, g, { resumption_group_name: h }));
        var y = _(n);
        (y != null &&
          (g = babelHelpers.extends({}, g, { instrumentation_data: y })),
          u != null && (g = babelHelpers.extends({}, g, { streamOptions: u })));
        var C = !1,
          b = r("makeGraphQLSubscriptionRequest")(g)
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
