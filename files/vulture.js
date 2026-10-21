__d(
  "vulture",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "JSResource",
    "VultureJSGating",
    "VultureJSHTTPTransport",
    "VultureJSPageLifecycle",
    "VultureJSServerHits",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "objectEntries",
    "requireDeferred",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = 1e4,
      c = null;
    r("requireDeferred")("bumpVultureJSHash")
      .__setRef("vulture")
      .onReadyImmediately(function (e) {
        ((c = e), b());
      });
    var d = !1,
      m = !1,
      p = null,
      _ = new Map(),
      f = [],
      g = 12e4;
    function h(e) {
      var t = _.get(e);
      t === s ||
        c == null ||
        (t == null ? c(e, 1) : Math.floor(Math.random() * t) === 0 && c(e, t));
    }
    function y(e) {
      f.push(e);
    }
    function C() {
      (p != null && (r("clearTimeout")(p), (p = null)),
        (m = !1),
        (d = !0),
        b());
    }
    function b() {
      if (d && c != null)
        for (; f.length > 0; ) {
          var e = f.pop();
          e != null && h(e);
        }
    }
    function v() {
      if (c == null) {
        if (f.length === 0) return;
        var e = o("VultureJSHTTPTransport").sendVultureJSHits(f);
        (r("FBLogger")("vulture_js", "pagehide_before_bump_loaded").warn(
          "Page hid with %s queued hits before bumpVultureJSHash loaded. Sent over HTTP: %s",
          f.length,
          e,
        ),
          e && (f.length = 0));
        return;
      }
      for (; f.length > 0; ) {
        var t = f.pop();
        t != null && h(t);
      }
    }
    o("VultureJSPageLifecycle").onPageHide(v);
    function S() {
      r("JSResource")("VultureJSSampleRatesLoader")
        .__setRef("vulture")
        .load()
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield e.loadSampleRates();
                for (var n of r("objectEntries")(t)) {
                  var o = n[0],
                    a = n[1];
                  _.set(o, a);
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .catch(function (e) {
          r("FBLogger")("vulture_js", "sample_rate_load_timeout")
            .catching(e)
            .mustfix("Failed to fetch sample rates:  %s", e.getMessage());
        })
        .finally(C);
    }
    function R() {
      m ||
        ((m = !0),
        (e || (e = r("ExecutionEnvironment"))).canUseDOM
          ? ((p = r("setTimeout")(function () {
              (C(),
                r("FBLogger")("vulture_js", "sample_rate_load_timeout").warn(
                  "Timed out attemping to fetch VultureJS sample rates",
                ));
            }, g)),
            r("setTimeout")(S, u))
          : S());
    }
    function L(e) {
      if (o("VultureJSGating").isLoggingEnabled()) {
        if (o("VultureJSServerHits").collectServerHit(e)) return;
        d && c != null ? h(e) : (y(e), R());
      }
    }
    l.default = L;
  },
  98,
);
