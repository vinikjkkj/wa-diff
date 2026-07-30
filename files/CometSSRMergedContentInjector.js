__d(
  "CometSSRMergedContentInjector",
  [
    "CometClientRootRendererUtils",
    "CometSSRContentRevealer",
    "CometSSRDebugHelper",
    "CometSSRFizzConstants",
    "CometSSRHydrationHelpers",
    "CometSSRLogger",
    "CometStyleXSheet",
    "FBLogger",
    "ReactDOM",
    "UserTimingUtils",
    "gkx",
    "jestOnlyViolation",
    "justknobx",
    "maybeScheduleFeedHydration",
    "performanceNow",
    "qplTimingsServerJS",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = 6e4,
      d = null,
      m = null,
      p = null,
      _ = null,
      f = !1,
      g = function () {},
      h = !1,
      y = null,
      C = !1,
      b = !1,
      v = !1,
      S = [],
      R = {},
      L = [],
      E = [],
      k = [],
      I = null,
      T = [],
      D = null,
      x = 0;
    function $() {
      var e;
      return _ == null
        ? !1
        : _.gks.use_content_visibility_hidden &&
            ((e = window.CSS) == null ? void 0 : e.supports) &&
            window.CSS.supports("content-visibility", "hidden");
    }
    function P() {
      if (
        _ &&
        r("justknobx")._("3483") &&
        !o("CometSSRContentRevealer").getIsSplashRemoved()
      ) {
        var e;
        o("CometSSRContentRevealer").unhideElement(
          (e = _) == null ? void 0 : e.eid,
          de(),
          $(),
        );
      }
      Le();
    }
    function N(t) {
      var n;
      if (r("gkx")("13494")) {
        var a = (e || (e = r("performanceNow")))();
        o("UserTimingUtils").markModern("ssr status error", {
          detail: {
            devtools: {
              dataType: "track-entry",
              properties: [
                ["error_type", "status_error"],
                ["error_message", t.slice(0, 200)],
              ],
              track: "SSR Client Side Logger",
              trackGroup: "SSR",
            },
          },
          startTime: a,
        });
      }
      M() ||
        ((h = !0),
        (n = ie) == null || n.removeSplashScreen(),
        Ee(m, p),
        K(t, "ERROR"));
    }
    function M() {
      return (!!y && y.status === "ERROR") || h;
    }
    function w(e) {
      var t;
      if (_ == null)
        return r("FBLogger")("comet_ssr").mustfix(
          "setStatusDisabled(): Cannot disable SSR - ssrInit did not run (disabledReason: %s)",
          e,
        );
      (o("CometSSRContentRevealer").unhideElement(
        (t = _) == null ? void 0 : t.eid,
        de(),
        $(),
      ),
        U({
          id: "Error - SSR is disabled from server",
          payloadType: "LAST",
          renderPassCount: 0,
          status: e,
        }));
    }
    function A(e) {
      if (_ == null)
        return r("FBLogger")("comet_ssr").mustfix(
          'logQPLPoint(): Cannot log QPL point "%s" - ssrInit did not run',
          e,
        );
      _.enabled && r("qplTimingsServerJS")(_.cavalry_get_lid, e);
    }
    function F(e, t) {
      (O(e) || N("Checks for useMatchViewport failed"),
        t != null && oe.current.logViewportGuess(t));
    }
    function O(e) {
      return window.matchMedia
        ? e.every(function (e) {
            var t = e.dimension,
              n = e.numPixels,
              r = e.operation,
              o = e.result,
              a = B(r, t, n);
            return window.matchMedia(a).matches === o;
          })
        : !1;
    }
    function B(e, t, n) {
      return "(" + e + "-" + t + ": " + n + "px)";
    }
    function W(e) {
      var t;
      S.push(e);
      var n = "pending",
        r = "no_error",
        o = "success";
      if (e.status === "success") n = "content_injected";
      else {
        var a = le(e.status);
        (e.status !== "fail_ssr_disabled" && fe(a),
          (r = a),
          (n = "client_rendered"),
          (o = "error"),
          (ae = ae === null || ae === "unknown" ? a : ae));
      }
      var i = {
          readyPreloaders: (t = e.readyPreloaders) != null ? t : [],
          wallTime: 0,
        },
        l = e.renderPassCount;
      ((R[l] = { debug: i, errorStatus: r, renderStatus: n, status: o }),
        (x = l));
    }
    function q(e, t) {
      var n = e.revealSSRContent;
      return {
        removeSplashScreen: function () {
          n &&
            n(function () {
              return o("CometSSRContentRevealer").unhideElement(t, de(), $());
            });
        },
      };
    }
    function U(e, t) {
      if (!M()) {
        if ((W(e), H(e), G(e.fizzRootId || ""), !v)) {
          k.push(e);
          return;
        }
        V(e);
      }
    }
    function V(e) {
      if (_ == null) {
        var t;
        return r("FBLogger")("comet_ssr").mustfix(
          'injectPayload(): Cannot inject payload "%s" - ssrInit did not run',
          (t = e == null ? void 0 : e.id) != null ? t : "unknown",
        );
      }
      var n = e.fizzRootId,
        o = e.payloadType,
        a = e.status;
      if (n == null || !o || a !== _.success_status) {
        N("Error processing SSR payload " + (e.id || "Global") + ": " + a);
        return;
      }
      if ((_.gks.comet_ssr_wait_for_dev || P(), o === "LAST")) {
        var i;
        (A("ssr_injected"),
          (i = ie) == null || i.removeSplashScreen(),
          K("", "INJECTED"));
      } else {
        var l;
        (l = ie) == null || l.removeSplashScreen();
      }
      (oe.current.logSSRIndividualPaint(!0, e.renderPassCount), ve());
    }
    function H(e) {
      A("ssr_received_" + e.id);
    }
    function G(e) {
      if (!C) {
        if (((C = !0), _ == null))
          return r("FBLogger")("comet_ssr").mustfix(
            "mountSSRRootContent(): Cannot mount SSR root content - ssrInit did not run",
          );
        ((D = document.getElementById(_.eid)), D && I && pe(D, I));
      }
    }
    function z() {
      return { removeSplashScreen: g };
    }
    function j() {
      if (D != null) {
        var e = D;
        $()
          ? e.style.setProperty("content-visibility", "hidden")
          : (e.style.display = "none");
      }
    }
    function K(e, t) {
      var n, a, i;
      if (!b) {
        ((b = !0),
          (y = {
            msg: e,
            processedPayloads: S,
            status: t,
            unbindListeners: g,
          }));
        var l = y;
        (o("CometSSRContentRevealer").unhideElement(
          (n = (a = _) == null ? void 0 : a.eid) != null ? n : "",
          de(),
          $(),
        ),
          l.status !== "INJECTED"
            ? (Ee(m, p), _e())
            : ((i = _) != null && i.gks.comet_ssr_wait_for_dev) || P(),
          r("maybeScheduleFeedHydration")(p),
          oe.current.logSSRInjection(l),
          ve(),
          (f = !0));
      }
    }
    function Q(e) {
      if (((D = e), !!_)) {
        if (
          (_.gks.mwp_ssr_enabled && _.enabled) ||
          _.gks.stop_render_at_splashscreen
        )
          _.is_in_crawler_mode || j();
        else if (!_.enabled) {
          var t;
          w((t = _.disabled_reason) != null ? t : "fail_ssr_disabled");
        }
      }
    }
    function X() {
      (m == null &&
        Y("SSR wait for too long and cannot receive Comet Root Component"),
        p == null &&
          !o("CometClientRootRendererUtils").getIsClientSideRendered() &&
          Y("SSR wait for too long and never hydrated/client rendered"));
    }
    function Y(e) {
      var t =
        "SSR Statuses:\n  Is root component available: " +
        String(m != null) +
        ",\n  Is hydration root available: " +
        String(p != null) +
        ",\n  Is client side rendered " +
        String(o("CometClientRootRendererUtils").getIsClientSideRendered()) +
        ",\n  Is SSR completed: " +
        String(f) +
        "\n  Is fizz initialized: " +
        String(v) +
        "\n  SSR data: " +
        JSON.stringify(_);
      r("FBLogger")("comet_ssr")
        .addMetadata("COMET_INFRA", "SSR", t)
        .mustfix(e);
    }
    function J(e) {
      (o("CometSSRContentRevealer").unhideElement(e.eid, de(), $()),
        !f &&
          !o("CometClientRootRendererUtils").getIsClientSideRendered() &&
          (N("Timed out waiting for SSR payload"),
          r("FBLogger")("comet_ssr").warn(
            "Browser timed out waiting for SSR payload (timeout: %dms, arrivedPayloads: %d, isSSRCompleted: %s, isCSR: %s)",
            c,
            S.length,
            String(f),
            String(o("CometClientRootRendererUtils").getIsClientSideRendered()),
          ),
          X()));
    }
    function Z(e) {
      ((_ = e), A("ssr_init"), (D = document.getElementById(e.eid)));
      var t = window.setTimeout(function () {
          J(e);
        }, c),
        n = ["success_status", "eid"].filter(function (t) {
          return !e[t];
        });
      if (
        (n.length > 0 &&
          N("Error receiving SSRData: missing keys " + n.toString()),
        D)
      )
        Q(D);
      else if (!_.enabled) {
        var o;
        w((o = _.disabled_reason) != null ? o : "fail_ssr_disabled");
      }
      ((window.__invalidateSSR = function (e) {
        (r("FBLogger")("comet_ssr").warn(e),
          U({
            id: "Error",
            payloadType: "LAST",
            renderPassCount: 0,
            status: "fail_js_error",
          }));
      }),
        e.gks.comet_ssr_wait_for_dev &&
          (window.__comet_ssr_continue = function () {
            P();
          }),
        typeof window.requireLazy == "function" &&
          window.requireLazy(["m#ReactDOM"], function (e) {
            A("ssr_reactdom_ready");
          }));
    }
    function ee() {
      var e, t;
      return (e = (t = _) == null ? void 0 : t.is_in_crawler_mode) != null
        ? e
        : !1;
    }
    function te(e) {
      window.__onSSRError && window.__onSSRError(e);
    }
    function ne(e) {
      window.__SSRFailJestOnError && window.__SSRFailJestOnError(e);
    }
    function re() {
      ((window.__receivedSSRErrors = window.__receivedSSRErrors || []),
        (window.__onSSRError =
          window.__onSSRError ||
          function (e) {
            var t;
            (t = window.__receivedSSRErrors) == null || t.push(e);
          }));
    }
    var oe = o("CometSSRLogger").getSSRLogger(),
      ae = null,
      ie = z();
    function le(e) {
      switch (e) {
        case "fail_js_error":
          return "server_js_error";
        case "fail_infra_error":
          return "server_infra_error";
        case "fail_ssr_disabled":
          return "ssr_disabled";
        case "fail_feed_module_not_supported":
          return "feed_module_not_supported";
        case "fail_bad_preloaders":
          return "bad_preloaders";
        case "fail_timed_out":
          return "timed_out";
        default:
          return "unknown";
      }
    }
    var se = null,
      ue = !1;
    function ce(e) {
      ue || ((se = e), M() && (se(), (ue = !0)));
    }
    function de() {
      return r("justknobx")._("957") || ee();
    }
    function me(e, t, n, r, a) {
      for (
        v = !0,
          m = t,
          d = n,
          o("CometSSRContentRevealer").setExternalSplashScreenController(
            a.revealSSRContent,
          ),
          e &&
            ((I = e),
            (oe.current = o("CometSSRLogger").initLogger(e)),
            o("CometSSRHydrationHelpers").initHydrationHelperTraceAPIObj(e),
            pe(D, e),
            oe.current.logSSRFizzInit()),
          ie = q(a, r),
          M() && Ee(m, p),
          oe.current.logSSRPayloadQueued(k.length === 0);
        k.length > 0;
      ) {
        var i = k.shift();
        i != null && V(i);
      }
    }
    function pe(e, t) {
      e != null &&
        t.onComplete(function () {
          (t.addMetadata("ssr_root_node_visible", e.style.display !== "none"),
            t.addMetadata(
              "ssr_total_page_element_count",
              document.querySelectorAll("*").length,
            ),
            t.addMetadata(
              "ssr_splash_screen_removed_on_complete",
              o("CometSSRContentRevealer").getIsSplashRemoved() === !0,
            ));
        });
    }
    function _e() {
      ae = ae === null || ae === "unknown" ? "ssr_disabled" : ae;
    }
    function fe(e) {
      r("gkx")("23415") &&
        r("jestOnlyViolation")(
          "Encountered error during server rendering: " +
            e +
            "! See slog for error details. (client rendering prevented since comet_ssr_fatal_on_error is enabled)",
          "comet_ssr",
        );
    }
    function ge(e, t, n) {
      (T.push({ error: t, errorInfo: n, message: e }), ve());
    }
    function he(e) {
      if (!M() && Object.keys(R).length !== 0) {
        var t = R[x];
        if (t == null) {
          r("FBLogger")("comet_ssr").warn(
            "updateSSRRequestTime(): Error finding render pass status for latestRenderPass=%d (available render passes: %s)",
            x,
            Object.keys(R).join(", "),
          );
          return;
        }
        (t.debug == null
          ? (t.debug = { readyPreloaders: [], wallTime: e })
          : (t.debug.wallTime = e),
          ve());
      }
    }
    function ye(e) {
      M() || (e.length > 0 && L.push(e), ve());
    }
    function Ce(e) {
      M() || (E.push(e), ve());
    }
    function be(e) {
      e.forEach(function (e) {
        return o("CometStyleXSheet").rootStyleSheet.insert.apply(
          o("CometStyleXSheet").rootStyleSheet,
          e,
        );
      });
    }
    function ve() {
      (o("CometSSRDebugHelper").updateSSRDebugState({
        globalBoundaryErrorStatus: ae,
        ignoredHydrationErrors: T,
        lastPayloadArrived: b,
        sampleProfiles: L,
        serverInfoList: E,
        ssrFinishedSuccessfully: b && !h,
        ssrRenderPassStatuses: babelHelpers.extends({}, R),
      }),
        o("CometSSRDebugHelper").triggerDebugStateUpdate());
    }
    function Se() {
      b || ((b = !0), ve());
    }
    function Re() {
      ((h = !0), (b = !0), ve());
    }
    window.__SSRFailJestOnError = fe;
    function Le() {
      if (
        !(
          p !== null ||
          o("CometClientRootRendererUtils").getIsClientSideRendered()
        )
      ) {
        if (m == null || _ == null)
          return r("FBLogger")("comet_ssr").mustfix(
            o("CometSSRLogger").SSR_NOT_INITIALIZED,
          );
        var e = o("CometClientRootRendererUtils").getOrCreateRootElement(_.eid);
        p = o("ReactDOM").hydrateRoot(
          e,
          m,
          babelHelpers.extends({}, d, {
            onRecoverableError: o("CometSSRHydrationHelpers")
              .onRecoverableError,
          }),
        );
      }
    }
    function Ee(e, t) {
      if (_ == null)
        return r("FBLogger")("comet_ssr").mustfix(
          o("CometSSRLogger").SSR_NOT_INITIALIZED,
        );
      if (e == null)
        return r("FBLogger")("comet_ssr").debug(
          "Root component is not initialized yet",
        );
      if (t == null) {
        var n = document.getElementById(
          o("CometSSRFizzConstants").ssrFizzRootId,
        );
        return (
          n && n.remove(),
          o("CometClientRootRendererUtils").initReactRender({
            rootComponent: e,
            rootElementID: _.eid,
            rootOptions: d != null ? d : {},
          })
        );
      }
      t.render(e);
    }
    ((l.logQPLPoint = A),
      (l.onViewportGuessValidation = F),
      (l.updateRenderPassStatus = W),
      (l.onPayloadReceived = U),
      (l.processRootElement = Q),
      (l.ssrInit = Z),
      (l.onSSRError = te),
      (l.onSSRFailJestOnError = ne),
      (l.injectOnSSRErrorHandlerDefaultOnWindow = re),
      (l.onForceHydration = ce),
      (l.initFizz = me),
      (l.logRecoverableHydrationError = ge),
      (l.updateSSRRequestTime = he),
      (l.updateSampleProfile = ye),
      (l.updateServerInfo = Ce),
      (l.replayStyleInjectsForSSR = be),
      (l.updateSSRDebugState = ve),
      (l.markSSRComplete = Se),
      (l.markSSRError = Re));
  },
  98,
);
