__d(
  "CometSSRClientInjector",
  [
    "CometSSRContentRevealer",
    "CometSSRHydrationHelpers",
    "CometSSRLogger",
    "CometSSRMergedContentInjector",
    "CometSSRStateManager",
    "ExecutionEnvironment",
    "FBLogger",
    "getErrorSafe",
    "justknobx",
    "qplTimingsServerJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null,
      c = o("CometSSRLogger").getSSRLogger(),
      d = 0,
      m = [],
      p = function () {};
    function _() {
      return u;
    }
    function f(e) {
      try {
        ((u = e),
          b("ssr_init"),
          s == null && (s = new (r("CometSSRStateManager"))()),
          s.onSSRInit(e),
          (!e.enabled || !e.gks.mwp_ssr_enabled) && C());
      } catch (o) {
        var t,
          n = r("getErrorSafe")(o);
        throw (
          r("FBLogger")("comet_ssr")
            .catching(n)
            .mustfix(
              "ssrInit(): Error while processing SSR init (enabled: %s, gks.mwp_ssr_enabled: %s): %s",
              e == null ? void 0 : e.enabled,
              e == null || (t = e.gks) == null ? void 0 : t.mwp_ssr_enabled,
              n.message,
            ),
          n
        );
      }
    }
    function g(e) {
      try {
        (m.push(e),
          s == null && (s = new (r("CometSSRStateManager"))()),
          s.onSSRPayloadArrived(e),
          e.payloadType === "LAST" && c.current.logLastSSRPayloadArrived(),
          o("CometSSRMergedContentInjector").updateRenderPassStatus(e),
          b("ssr_received_" + e.id),
          c.current.logSSRIndividualPaint(!0, d),
          o("CometSSRMergedContentInjector").updateSSRDebugState(),
          d++);
      } catch (n) {
        var t = r("getErrorSafe")(n);
        throw (
          r("FBLogger")("comet_ssr")
            .catching(t)
            .mustfix(
              "onPayloadReceived(): Error while processing SSR payload (id: %s, payloadType: %s, renderPass: %s): %s",
              e == null ? void 0 : e.id,
              e == null ? void 0 : e.payloadType,
              d,
              t.message,
            ),
          t
        );
      }
    }
    function h(e, t, n, a, i) {
      try {
        (s == null && (s = new (r("CometSSRStateManager"))()),
          o("CometSSRContentRevealer").setExternalSplashScreenController(
            i.revealSSRContent,
          ),
          e &&
            (o("CometSSRLogger").initLogger(e),
            o("CometSSRHydrationHelpers").initHydrationHelperTraceAPIObj(e),
            y(e),
            c.current.logSSRFizzInit()),
          s && s.onRootComponentLoaded(a, t, n, i.revealSSRContent));
      } catch (t) {
        var l = r("getErrorSafe")(t);
        throw (
          r("FBLogger")("comet_ssr")
            .catching(l)
            .mustfix(
              "initFizz(): Error while processing Fizz init (rootElementID: %s, traceAPI: %s): %s",
              a,
              e != null ? "available" : "unavailable",
              l.message,
            ),
          l
        );
      }
    }
    function y(t) {
      t.onComplete(function () {
        var n = 0;
        ((e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          (n = document.querySelectorAll("*").length),
          t.addMetadata("ssr_total_page_element_count", n));
      });
    }
    function C() {
      try {
        (s == null && (s = new (r("CometSSRStateManager"))()),
          s.disableSSRInFlight(),
          u && v(u.eid),
          o("CometSSRMergedContentInjector").updateRenderPassStatus({
            id: "Error - SSR is disabled from server",
            payloadType: "LAST",
            renderPassCount: 0,
            status: "fail_ssr_disabled",
          }),
          o("CometSSRMergedContentInjector").markSSRError());
      } catch (o) {
        var e,
          t,
          n = r("getErrorSafe")(o);
        throw (
          r("FBLogger")("comet_ssr")
            .catching(n)
            .mustfix(
              "disableSSRInFlight(): Error while disabling SSR in flight (ssrData.enabled: %s, ssrData.eid: %s): %s",
              (e = u) == null ? void 0 : e.enabled,
              (t = u) == null ? void 0 : t.eid,
              n.message,
            ),
          n
        );
      }
    }
    function b(e) {
      if (u == null)
        return r("FBLogger")("comet_ssr").mustfix(
          'logQPLPoint(): Cannot log QPL point "%s" - ssrInit did not run',
          e,
        );
      u.enabled && r("qplTimingsServerJS")(u.cavalry_get_lid, e);
    }
    function v(e) {
      o("CometSSRContentRevealer").unhideElement(e, R(), S());
    }
    function S() {
      if (u == null) return !1;
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t;
        return (
          u.gks.use_content_visibility_hidden &&
          ((t = window.CSS) == null ? void 0 : t.supports) != null &&
          window.CSS.supports("content-visibility", "hidden")
        );
      }
      return !1;
    }
    function R() {
      var e,
        t,
        n =
          (e = (t = u) == null ? void 0 : t.is_in_crawler_mode) != null
            ? e
            : !1;
      return r("justknobx")._("957") || n;
    }
    function L(e, t) {
      (E(e) || C(), t != null && c.current.logViewportGuess(t));
    }
    function E(t) {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        window.matchMedia
        ? t.every(function (e) {
            var t = e.dimension,
              n = e.numPixels,
              r = e.operation,
              o = e.result,
              a = k(r, t, n);
            return window.matchMedia(a).matches === o;
          })
        : !1;
    }
    function k(e, t, n) {
      return "(" + e + "-" + t + ": " + n + "px)";
    }
    function I(e, t) {
      (u != null && t === "INJECTED" && b("ssr_injected"),
        c.current.logSSRInjection({
          msg: e,
          processedPayloads: m,
          status: t,
          unbindListeners: p,
        }));
    }
    function T() {
      return m;
    }
    ((l.getSSRData = _),
      (l.ssrInit = f),
      (l.onPayloadReceived = g),
      (l.initFizz = h),
      (l.disableSSRInFlight = C),
      (l.logQPLPoint = b),
      (l.unhideElement = v),
      (l.onViewportGuessValidation = L),
      (l.logSSRInjection = I),
      (l.getArrivedPayloads = T));
  },
  98,
);
