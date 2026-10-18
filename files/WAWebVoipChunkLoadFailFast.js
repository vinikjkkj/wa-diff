__d(
  "WAWebVoipChunkLoadFailFast",
  [
    "BootloaderEvents",
    "Promise",
    "WALogger",
    "WAWebVoipDeferredBootLogging",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 3e4,
      d = 80,
      m = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this, "A VoIP chunk failed to load") || this),
            (t.name = "VoipChunkLoadError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      p = new Map(),
      _ = new Set(),
      f = !1;
    function g(e, t) {
      return (
        y(),
        new (u || (u = n("Promise")))(function (n, r) {
          var o = self.performance.now(),
            a = !1,
            i = !1,
            l = self.setTimeout(function () {
              ((a = !0), u());
            }, c);
          _.add(u);
          function s() {
            return i ? !1 : ((i = !0), self.clearTimeout(l), _.delete(u), !0);
          }
          function u() {
            var e = a ? b(t) : null;
            e == null || !s() || (R(e, o), r(new m()));
          }
          e.then(
            function (e) {
              s() && n(e);
            },
            function (e) {
              s() && (L(e, o), r(new m()));
            },
          );
        })
      );
    }
    function h() {
      (p.clear(), _.clear(), (f = !1));
    }
    function y() {
      f || ((f = !0), o("BootloaderEvents").onBootloadError(C));
    }
    function C(e) {
      var t = e.bootloaderData,
        n = e.erroredResources,
        r = n.values().next().value;
      if (r != null) {
        var o = v(r);
        for (var a of t.components) p.has(a) || p.set(a, o);
        _.forEach(function (e) {
          return e();
        });
      }
    }
    function b(e) {
      for (var t of e) {
        var n = p.get(t);
        if (n != null) return { moduleId: t, resource: n };
      }
      return null;
    }
    function v(e) {
      var t = e.split(/[?#]/)[0];
      return t.slice(t.lastIndexOf("/") + 1).slice(0, d);
    }
    function S(e) {
      return Math.round(self.performance.now() - e);
    }
    function R(t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] chunk_load_failed source=bootload_error module=",
                  " resource=",
                  " waited_ms=",
                  "",
                ])),
              t.moduleId,
              t.resource,
              S(n),
            )
            .tags("non-sad")
            .sendLogs("voip-deferred-boot-chunk-load-failed");
        },
      );
    }
    function L(e, t) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] chunk_load_failed source=load_rejected waited_ms=",
                  "",
                ])),
              S(t),
            )
            .catching(r("getErrorSafe")(e))
            .tags("non-sad")
            .sendLogs("voip-deferred-boot-chunk-load-failed");
        },
      );
    }
    ((l.VoipChunkLoadError = m),
      (l.failFastOnVoipChunkLoadError = g),
      (l.resetVoipChunkLoadFailFastForTesting = h));
  },
  98,
);
