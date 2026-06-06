__d(
  "JsSelfProfilerIdleTraceRunner",
  [
    "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
    "Promise",
    "QPLEvent",
    "Random",
    "VisibilityListener",
    "WebLoom",
    "asyncToGeneratorRuntime",
    "cr:13597",
    "performanceAbsoluteNow",
    "qex",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (u || (u = o("QPLEvent"))).getMarkerId(r("qpl")._(45088770, "466")),
      p = 0,
      _ = m + "_" + p;
    function f(e, t) {
      return Math.floor(r("Random").random() * (t - e)) + e;
    }
    function g(e) {
      return Math.floor(e * -Math.log(r("Random").random()));
    }
    function h(e) {
      return new (s || (s = n("Promise")))(function (t) {
        return void window.setTimeout(t, e);
      });
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (n("cr:13597") == null) {
            var i = new Error(
              "JSSP Idle Trace initialized but JSSP was disabled.",
            );
            throw (i.stack, i);
          }
          t > 0 && (yield h(t));
          var l = (e || (e = r("performanceAbsoluteNow")))();
          (r("WebLoom").startTrace(
            _,
            d,
            l,
            new Set([n("cr:13597").loomProviderId]),
          ),
            yield h(a));
          var s = e(),
            u = o("VisibilityListener").getHiddenTime(l, s);
          r("WebLoom").endTrace(_, s, {
            qpl_action: 2,
            hidden: u != null && u > 0,
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          for (
            var e = r(
                "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
              ).PAUSE_FOR,
              t = r(
                "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
              ).RUN_FOR,
              n = r(
                "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
              ).REPEAT,
              o = f(n.min, n.max),
              a = 0;
            a < o;
            a++
          ) {
            var i = f(e.min, e.max),
              l = f(t.min, t.max);
            yield y(i * 1e3, l * 1e3);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          for (
            var e,
              t,
              n,
              o =
                (e = r("qex")._("274")) != null
                  ? e
                  : r("JsSelfProfilerIdleProfilerSitevarConfig.experimental")
                      .EXP_INTERVAL_MS.val,
              a =
                (t = r("qex")._("290")) != null
                  ? t
                  : r("JsSelfProfilerIdleProfilerSitevarConfig.experimental")
                      .EXP_RUN_FOR_MS.val,
              i =
                (n = r("qex")._("977")) != null
                  ? n
                  : r("JsSelfProfilerIdleProfilerSitevarConfig.experimental")
                      .EXP_REPEAT.val,
              l = 0;
            l < i;
            l++
          ) {
            var s = g(o);
            yield y(s, a);
          }
        })),
        R.apply(this, arguments)
      );
    }
    var L = {
        init: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (n("cr:13597") == null) {
              var t = new Error(
                "JSSP Idle Trace initialized but JSSP was disabled.",
              );
              throw (t.stack, t);
            }
            if (n("cr:13597").isSupported() && c !== !0) {
              var o = r(
                  "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
                ).DISTRIBUTION,
                a = r(
                  "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
                ).CONFIGURED_DISTRIBUTION;
              switch (
                ((d = {
                  type: "QPL",
                  qpl_marker_id: String(m),
                  qpl_instance_key: p,
                  sample_rate: 1,
                  trace_policy: e,
                }),
                (c = !0),
                a.val)
              ) {
                case o.uniform:
                  yield b();
                  break;
                case o.exponential:
                  yield S();
                  break;
              }
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      E = L;
    l.default = E;
  },
  98,
);
