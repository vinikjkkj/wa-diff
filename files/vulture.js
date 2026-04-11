__d(
  "vulture",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "JSResource",
    "VultureJSGating",
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
    function S() {
      m ||
        ((m = !0),
        (e || (e = r("ExecutionEnvironment"))).canUseDOM
          ? ((p = r("setTimeout")(function () {
              (C(),
                r("FBLogger")("vulture_js", "sample_rate_load_timeout").warn(
                  "Timed out attemping to fetch VultureJS sample rates",
                ));
            }, g)),
            r("setTimeout")(v, u))
          : v());
    }
    function R(e) {
      o("VultureJSGating").isLoggingEnabled() &&
        (d && c != null ? h(e) : (y(e), S()));
    }
    l.default = R;
  },
  98,
);
