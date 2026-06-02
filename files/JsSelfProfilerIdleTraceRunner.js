__d(
  "JsSelfProfilerIdleTraceRunner",
  [
    "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
    "QPLEvent",
    "Random",
    "VisibilityListener",
    "WebLoom",
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
      d = (s || (s = o("QPLEvent"))).getMarkerId(r("qpl")._(45088770, "466")),
      m = 0,
      p = d + "_" + m;
    function _(e, t) {
      return Math.floor(r("Random").random() * (t - e)) + e;
    }
    function f(e) {
      return Math.floor(e * -Math.log(r("Random").random()));
    }
    function g(e) {
      return new Promise(function (t) {
        return void window.setTimeout(t, e);
      });
    }
    async function h(t, a) {
      if (n("cr:13597") == null) {
        var i = new Error("JSSP Idle Trace initialized but JSSP was disabled.");
        throw (i.stack, i);
      }
      t > 0 && (await g(t));
      var l = (e || (e = r("performanceAbsoluteNow")))();
      (r("WebLoom").startTrace(
        p,
        c,
        l,
        new Set([n("cr:13597").loomProviderId]),
      ),
        await g(a));
      var s = e(),
        u = o("VisibilityListener").getHiddenTime(l, s);
      r("WebLoom").endTrace(p, s, {
        qpl_action: 2,
        hidden: u != null && u > 0,
      });
    }
    async function y() {
      for (
        var e = r(
            "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
          ).PAUSE_FOR,
          t = r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").RUN_FOR,
          n = r("JsSelfProfilerIdleProfilerSitevarConfig.experimental").REPEAT,
          o = _(n.min, n.max),
          a = 0;
        a < o;
        a++
      ) {
        var i = _(e.min, e.max),
          l = _(t.min, t.max);
        await h(i * 1e3, l * 1e3);
      }
    }
    async function C() {
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
        var s = f(o);
        await h(s, a);
      }
    }
    var b = {
        init: async function (t) {
          if (n("cr:13597") == null) {
            var e = new Error(
              "JSSP Idle Trace initialized but JSSP was disabled.",
            );
            throw (e.stack, e);
          }
          if (n("cr:13597").isSupported() && u !== !0) {
            var o = r(
                "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
              ).DISTRIBUTION,
              a = r(
                "JsSelfProfilerIdleProfilerSitevarConfig.experimental",
              ).CONFIGURED_DISTRIBUTION;
            switch (
              ((c = {
                type: "QPL",
                qpl_marker_id: String(d),
                qpl_instance_key: m,
                sample_rate: 1,
                trace_policy: t,
              }),
              (u = !0),
              a.val)
            ) {
              case o.uniform:
                await y();
                break;
              case o.exponential:
                await C();
                break;
            }
          }
        },
      },
      v = b;
    l.default = v;
  },
  98,
);
