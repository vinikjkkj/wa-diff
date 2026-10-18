__d(
  "WAWebVoipHiddenPrewarmIdleWork",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipInitEventEmitter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e3,
      u = new Set(),
      c = !1;
    function d(e, t) {
      return p() ? (g(e, t), !0) : _() ? (h(e, t)(), !0) : !1;
    }
    function m() {
      document.hidden &&
        ((c = !0), document.addEventListener("visibilitychange", f));
    }
    function p() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight() &&
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getVoipInitTrigger() === "hidden_prewarm" &&
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getWasVoipInitedByHiddenPrewarm()
      );
    }
    function _() {
      return (
        c &&
        document.hidden &&
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getWasVoipInitedByHiddenPrewarm()
      );
    }
    function f() {
      document.hidden ||
        ((c = !1),
        document.removeEventListener("visibilitychange", f),
        u.forEach(function (e) {
          return self.clearTimeout(e);
        }),
        u.clear());
    }
    function g(e, t) {
      var n = h(e, t);
      o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.once(
        "voipInitSuccess",
        function () {
          _() && n();
        },
      );
    }
    function h(t, n) {
      var r = !1,
        a = function () {
          r || ((r = !0), n());
        },
        i = o("WAWebPonyfillsIdleCallback").requestIdleCallback(a);
      return function () {
        var n = self.setTimeout(function () {
          (u.delete(n),
            !(r || !document.hidden) &&
              (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(i),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (o(
                    "WAWebCoreActionsODS",
                  ).logCallVoipBootHiddenPrewarmPostInitRanHidden(t),
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] hidden_prewarm post_init ran_hidden work=",
                          "",
                        ])),
                      t,
                    ));
                },
              ),
              a()));
        }, s);
        u.add(n);
      };
    }
    ((l.HIDDEN_TAB_IDLE_FALLBACK_MS = s),
      (l.requestHiddenPrewarmIdleWork = d),
      (l.watchTabFromHiddenPrewarmSuccess = m));
  },
  98,
);
