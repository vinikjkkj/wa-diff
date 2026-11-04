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
        ((c = e), k());
      });
    var d = !1,
      m = !1,
      p = null,
      _ = new Map(),
      f = [],
      g = 12e4,
      h = !1,
      y = g,
      C = 0,
      b = 0,
      v = !1,
      S = !1;
    function R(e) {
      var t = _.get(e);
      t === s ||
        c == null ||
        (t == null ? c(e, 1) : Math.floor(Math.random() * t) === 0 && c(e, t));
    }
    function L(e) {
      f.push(e);
    }
    function E() {
      (p != null && (r("clearTimeout")(p), (p = null)),
        (m = !1),
        (d = !0),
        k());
    }
    function k() {
      if (d && c != null)
        for (; f.length > 0; ) {
          var e = f.pop();
          e != null && R(e);
        }
    }
    function I() {
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
        t != null && R(t);
      }
    }
    o("VultureJSPageLifecycle").onPageHide(I);
    function T() {
      ((C = Date.now()),
        (p = r("setTimeout")(function () {
          ((S = !0),
            E(),
            r("FBLogger")("vulture_js", "sample_rate_load_timeout").warn(
              "Timed out attemping to fetch VultureJS sample rates after %s seconds. Page hidden during the load: %s",
              x(),
              v,
            ));
        }, y)));
    }
    o("VultureJSPageLifecycle").onVisibilityChange(function (e) {
      !h ||
        d ||
        (e && (v = !0),
        e && p != null
          ? (r("clearTimeout")(p),
            (p = null),
            (y = Math.max(0, y - (Date.now() - C))))
          : !e && p == null && T());
    });
    function D() {
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
                S &&
                  r("FBLogger")(
                    "vulture_js",
                    "sample_rate_loaded_after_timeout",
                  ).info(
                    "VultureJS sample rates loaded %s seconds after the load started. Page hidden during the load: %s",
                    x(),
                    v,
                  );
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
        .finally(E);
    }
    function x() {
      return Math.round((Date.now() - b) / 1e3);
    }
    function $() {
      m ||
        ((m = !0),
        (e || (e = r("ExecutionEnvironment"))).canUseDOM
          ? r("setTimeout")(function () {
              ((h = !0),
                (b = Date.now()),
                (v = o("VultureJSPageLifecycle").isPageHidden()),
                v || T(),
                D());
            }, u)
          : D());
    }
    function P(e) {
      if (o("VultureJSGating").isLoggingEnabled()) {
        if (o("VultureJSServerHits").collectServerHit(e)) return;
        d && c != null ? R(e) : (L(e), $());
      }
    }
    l.default = P;
  },
  98,
);
