__d(
  "CometSSRClientInjector",
  [
    "CometSSRContentRevealer",
    "CometSSRHydrationHelpers",
    "CometSSRLogger",
    "CometSSRMergedContentInjector",
    "CometSSRStateManager",
    "FBLogger",
    "getErrorSafe",
    "justknobx",
    "qplTimingsServerJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = o("CometSSRLogger").getSSRLogger(),
      c = 0,
      d = [],
      m = function () {};
    function p() {
      return s;
    }
    function _(t) {
      try {
        ((s = t),
          C("ssr_init"),
          e == null && (e = new (r("CometSSRStateManager"))()),
          e.onSSRInit(t),
          (!t.enabled || !t.gks.mwp_ssr_enabled) && y());
      } catch (e) {
        var n,
          o = r("getErrorSafe")(e);
        throw (
          r("FBLogger")("comet_ssr")
            .catching(o)
            .mustfix(
              "ssrInit(): Error while processing SSR init (enabled: %s, gks.mwp_ssr_enabled: %s): %s",
              t == null ? void 0 : t.enabled,
              t == null || (n = t.gks) == null ? void 0 : n.mwp_ssr_enabled,
              o.message,
            ),
          o
        );
      }
    }
    function f(t) {
      try {
        (d.push(t),
          e == null && (e = new (r("CometSSRStateManager"))()),
          e.onSSRPayloadArrived(t),
          t.payloadType === "LAST" && u.current.logLastSSRPayloadArrived(),
          o("CometSSRMergedContentInjector").updateRenderPassStatus(t),
          C("ssr_received_" + t.id),
          u.current.logSSRIndividualPaint(!0, c),
          o("CometSSRMergedContentInjector").updateSSRDebugState(),
          c++);
      } catch (e) {
        var n = r("getErrorSafe")(e);
        throw (
          r("FBLogger")("comet_ssr")
            .catching(n)
            .mustfix(
              "onPayloadReceived(): Error while processing SSR payload (id: %s, payloadType: %s, renderPass: %s): %s",
              t == null ? void 0 : t.id,
              t == null ? void 0 : t.payloadType,
              c,
              n.message,
            ),
          n
        );
      }
    }
    function g(t, n, a, i, l) {
      try {
        (e == null && (e = new (r("CometSSRStateManager"))()),
          o("CometSSRContentRevealer").setExternalSplashScreenController(
            l.revealSSRContent,
          ),
          t &&
            (o("CometSSRLogger").initLogger(t),
            o("CometSSRHydrationHelpers").initHydrationHelperTraceAPIObj(t),
            h(t),
            u.current.logSSRFizzInit()),
          e && e.onRootComponentLoaded(i, n, a, l.revealSSRContent));
      } catch (e) {
        var s = r("getErrorSafe")(e);
        throw (
          r("FBLogger")("comet_ssr")
            .catching(s)
            .mustfix(
              "initFizz(): Error while processing Fizz init (rootElementID: %s, traceAPI: %s): %s",
              i,
              t != null ? "available" : "unavailable",
              s.message,
            ),
          s
        );
      }
    }
    function h(e) {
      e.onComplete(function () {
        e.addMetadata(
          "ssr_total_page_element_count",
          document.querySelectorAll("*").length,
        );
      });
    }
    function y() {
      try {
        (e == null && (e = new (r("CometSSRStateManager"))()),
          e.disableSSRInFlight(),
          s && b(s.eid),
          o("CometSSRMergedContentInjector").updateRenderPassStatus({
            id: "Error - SSR is disabled from server",
            payloadType: "LAST",
            renderPassCount: 0,
            status: "fail_ssr_disabled",
          }),
          o("CometSSRMergedContentInjector").markSSRError());
      } catch (e) {
        var t,
          n,
          a = r("getErrorSafe")(e);
        throw (
          r("FBLogger")("comet_ssr")
            .catching(a)
            .mustfix(
              "disableSSRInFlight(): Error while disabling SSR in flight (ssrData.enabled: %s, ssrData.eid: %s): %s",
              (t = s) == null ? void 0 : t.enabled,
              (n = s) == null ? void 0 : n.eid,
              a.message,
            ),
          a
        );
      }
    }
    function C(e) {
      if (s == null)
        return r("FBLogger")("comet_ssr").mustfix(
          'logQPLPoint(): Cannot log QPL point "%s" - ssrInit did not run',
          e,
        );
      s.enabled && r("qplTimingsServerJS")(s.cavalry_get_lid, e);
    }
    function b(e) {
      o("CometSSRContentRevealer").unhideElement(e, S(), v());
    }
    function v() {
      var e;
      return s == null
        ? !1
        : s.gks.use_content_visibility_hidden &&
            ((e = window.CSS) == null ? void 0 : e.supports) &&
            window.CSS.supports("content-visibility", "hidden");
    }
    function S() {
      var e,
        t,
        n =
          (e = (t = s) == null ? void 0 : t.is_in_crawler_mode) != null
            ? e
            : !1;
      return r("justknobx")._("957") || n;
    }
    function R(e, t) {
      (L(e) || y(), t != null && u.current.logViewportGuess(t));
    }
    function L(e) {
      return window.matchMedia
        ? e.every(function (e) {
            var t = e.dimension,
              n = e.numPixels,
              r = e.operation,
              o = e.result,
              a = E(r, t, n);
            return window.matchMedia(a).matches === o;
          })
        : !1;
    }
    function E(e, t, n) {
      return "(" + e + "-" + t + ": " + n + "px)";
    }
    function k(e, t) {
      (s != null && t === "INJECTED" && C("ssr_injected"),
        u.current.logSSRInjection({
          msg: e,
          processedPayloads: d,
          status: t,
          unbindListeners: m,
        }));
    }
    function I() {
      return d;
    }
    ((l.getSSRData = p),
      (l.ssrInit = _),
      (l.onPayloadReceived = f),
      (l.initFizz = g),
      (l.disableSSRInFlight = y),
      (l.logQPLPoint = C),
      (l.unhideElement = b),
      (l.onViewportGuessValidation = R),
      (l.logSSRInjection = k),
      (l.getArrivedPayloads = I));
  },
  98,
);
