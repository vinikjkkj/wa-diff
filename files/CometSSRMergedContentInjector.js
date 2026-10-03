__d(
  "CometSSRMergedContentInjector",
  [
    "CometClientRootRendererUtils",
    "CometSSRContentRevealer",
    "CometSSRDebugHelper",
    "CometSSRFizzConstants",
    "CometSSRHydrationHelpers",
    "CometSSRLogger",
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
      x = 0,
      $ = null;
    function P() {
      $ != null && (window.clearTimeout($), ($ = null));
    }
    function N() {
      var e;
      return _ == null
        ? !1
        : _.gks.use_content_visibility_hidden &&
            ((e = window.CSS) == null ? void 0 : e.supports) &&
            window.CSS.supports("content-visibility", "hidden");
    }
    function M() {
      if (
        _ &&
        r("justknobx")._("3483") &&
        !o("CometSSRContentRevealer").getIsSplashRemoved()
      ) {
        var e;
        o("CometSSRContentRevealer").unhideElement(
          (e = _) == null ? void 0 : e.eid,
          pe(),
          N(),
        );
      }
      Ee();
    }
    function w(t) {
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
      A() ||
        ((h = !0),
        (n = se) == null || n.removeSplashScreen(),
        ke(m, p),
        X(t, "ERROR"));
    }
    function A() {
      return (!!y && y.status === "ERROR") || h;
    }
    function F(e) {
      var t;
      if (_ == null)
        return r("FBLogger")("comet_ssr").mustfix(
          "setStatusDisabled(): Cannot disable SSR - ssrInit did not run (disabledReason: %s)",
          e,
        );
      (P(),
        o("CometSSRContentRevealer").unhideElement(
          (t = _) == null ? void 0 : t.eid,
          pe(),
          N(),
        ),
        H({
          id: "Error - SSR is disabled from server",
          payloadType: "LAST",
          renderPassCount: 0,
          status: e,
        }));
    }
    function O(e) {
      if (_ == null)
        return r("FBLogger")("comet_ssr").mustfix(
          'logQPLPoint(): Cannot log QPL point "%s" - ssrInit did not run',
          e,
        );
      _.enabled && r("qplTimingsServerJS")(_.cavalry_get_lid, e);
    }
    function B(e, t) {
      (W(e) || w("Checks for useMatchViewport failed"),
        t != null && ie.current.logViewportGuess(t));
    }
    function W(e) {
      return window.matchMedia
        ? e.every(function (e) {
            var t = e.dimension,
              n = e.numPixels,
              r = e.operation,
              o = e.result,
              a = q(r, t, n);
            return window.matchMedia(a).matches === o;
          })
        : !1;
    }
    function q(e, t, n) {
      return "(" + e + "-" + t + ": " + n + "px)";
    }
    function U(e) {
      var t;
      S.push(e);
      var n = "pending",
        r = "no_error",
        o = "success";
      if (e.status === "success") n = "content_injected";
      else {
        e.status === "fail_ssr_disabled" && P();
        var a = ue(e.status);
        (e.status !== "fail_ssr_disabled" && he(a),
          (r = a),
          (n = "client_rendered"),
          (o = "error"),
          (le = le === null || le === "unknown" ? a : le));
      }
      var i = {
          readyPreloaders: (t = e.readyPreloaders) != null ? t : [],
          wallTime: 0,
        },
        l = e.renderPassCount;
      ((R[l] = { debug: i, errorStatus: r, renderStatus: n, status: o }),
        (x = l));
    }
    function V(e, t) {
      var n = e.revealSSRContent;
      return {
        removeSplashScreen: function () {
          n &&
            n(function () {
              return o("CometSSRContentRevealer").unhideElement(t, pe(), N());
            });
        },
      };
    }
    function H(e, t) {
      if (!A()) {
        if ((U(e), z(e), j(e.fizzRootId || ""), !v)) {
          k.push(e);
          return;
        }
        G(e);
      }
    }
    function G(e) {
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
        w("Error processing SSR payload " + (e.id || "Global") + ": " + a);
        return;
      }
      if ((_.gks.comet_ssr_wait_for_dev || M(), o === "LAST")) {
        var i;
        (O("ssr_injected"),
          (i = se) == null || i.removeSplashScreen(),
          X("", "INJECTED"));
      } else {
        var l;
        (l = se) == null || l.removeSplashScreen();
      }
      (ie.current.logSSRIndividualPaint(!0, e.renderPassCount), Se());
    }
    function z(e) {
      O("ssr_received_" + e.id);
    }
    function j(e) {
      if (!C) {
        if (((C = !0), _ == null))
          return r("FBLogger")("comet_ssr").mustfix(
            "mountSSRRootContent(): Cannot mount SSR root content - ssrInit did not run",
          );
        ((D = document.getElementById(_.eid)), D && I && fe(D, I));
      }
    }
    function K() {
      return { removeSplashScreen: g };
    }
    function Q() {
      if (D != null) {
        var e = D;
        N()
          ? e.style.setProperty("content-visibility", "hidden")
          : (e.style.display = "none");
      }
    }
    function X(e, t) {
      var n, a, i;
      if (!b) {
        ((b = !0),
          P(),
          (y = {
            msg: e,
            processedPayloads: S,
            status: t,
            unbindListeners: g,
          }));
        var l = y;
        (o("CometSSRContentRevealer").unhideElement(
          (n = (a = _) == null ? void 0 : a.eid) != null ? n : "",
          pe(),
          N(),
        ),
          l.status !== "INJECTED"
            ? (ke(m, p), ge())
            : ((i = _) != null && i.gks.comet_ssr_wait_for_dev) || M(),
          r("maybeScheduleFeedHydration")(p),
          ie.current.logSSRInjection(l),
          Se(),
          (f = !0));
      }
    }
    function Y(e) {
      if (((D = e), !!_)) {
        if (
          (_.gks.mwp_ssr_enabled && _.enabled) ||
          _.gks.stop_render_at_splashscreen
        )
          _.is_in_crawler_mode || Q();
        else if (!_.enabled) {
          var t;
          F((t = _.disabled_reason) != null ? t : "fail_ssr_disabled");
        }
      }
    }
    function J() {
      (m == null &&
        Z("SSR wait for too long and cannot receive Comet Root Component"),
        p == null &&
          !o("CometClientRootRendererUtils").getIsClientSideRendered() &&
          Z("SSR wait for too long and never hydrated/client rendered"));
    }
    function Z(e) {
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
    function ee(e) {
      (o("CometSSRContentRevealer").unhideElement(e.eid, pe(), N()),
        !f &&
          !o("CometClientRootRendererUtils").getIsClientSideRendered() &&
          (w("Timed out waiting for SSR payload"),
          r("FBLogger")("comet_ssr").warn(
            "Browser timed out waiting for SSR payload (timeout: %dms, arrivedPayloads: %d, isSSRCompleted: %s, isCSR: %s)",
            c,
            S.length,
            String(f),
            String(o("CometClientRootRendererUtils").getIsClientSideRendered()),
          ),
          J()));
    }
    function te(e) {
      ((_ = e),
        O("ssr_init"),
        (D = document.getElementById(e.eid)),
        P(),
        ($ = window.setTimeout(function () {
          (($ = null), ee(e));
        }, c)));
      var t = ["success_status", "eid"].filter(function (t) {
        return !e[t];
      });
      if (
        (t.length > 0 &&
          w("Error receiving SSRData: missing keys " + t.toString()),
        D)
      )
        Y(D);
      else if (!_.enabled) {
        var n;
        F((n = _.disabled_reason) != null ? n : "fail_ssr_disabled");
      }
      ((window.__invalidateSSR = function (e) {
        (r("FBLogger")("comet_ssr").warn(e),
          H({
            id: "Error",
            payloadType: "LAST",
            renderPassCount: 0,
            status: "fail_js_error",
          }));
      }),
        e.gks.comet_ssr_wait_for_dev &&
          (window.__comet_ssr_continue = function () {
            M();
          }),
        typeof window.requireLazy == "function" &&
          window.requireLazy(["m#ReactDOM"], function (e) {
            O("ssr_reactdom_ready");
          }));
    }
    function ne() {
      var e, t;
      return (e = (t = _) == null ? void 0 : t.is_in_crawler_mode) != null
        ? e
        : !1;
    }
    function re(e) {
      window.__onSSRError && window.__onSSRError(e);
    }
    function oe(e) {
      window.__SSRFailJestOnError && window.__SSRFailJestOnError(e);
    }
    function ae() {
      ((window.__receivedSSRErrors = window.__receivedSSRErrors || []),
        (window.__onSSRError =
          window.__onSSRError ||
          function (e) {
            var t;
            (t = window.__receivedSSRErrors) == null || t.push(e);
          }));
    }
    var ie = o("CometSSRLogger").getSSRLogger(),
      le = null,
      se = K();
    function ue(e) {
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
    var ce = null,
      de = !1;
    function me(e) {
      de || ((ce = e), A() && (ce(), (de = !0)));
    }
    function pe() {
      return r("justknobx")._("957") || ne();
    }
    function _e(e, t, n, r, a) {
      for (
        v = !0,
          m = t,
          d = n,
          o("CometSSRContentRevealer").setExternalSplashScreenController(
            a.revealSSRContent,
          ),
          e &&
            ((I = e),
            (ie.current = o("CometSSRLogger").initLogger(e)),
            o("CometSSRHydrationHelpers").initHydrationHelperTraceAPIObj(e),
            fe(D, e),
            ie.current.logSSRFizzInit()),
          se = V(a, r),
          A() && ke(m, p),
          ie.current.logSSRPayloadQueued(k.length === 0);
        k.length > 0;
      ) {
        var i = k.shift();
        i != null && G(i);
      }
    }
    function fe(e, t) {
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
    function ge() {
      le = le === null || le === "unknown" ? "ssr_disabled" : le;
    }
    function he(e) {
      r("gkx")("23415") &&
        r("jestOnlyViolation")(
          "Encountered error during server rendering: " +
            e +
            "! See slog for error details. (client rendering prevented since comet_ssr_fatal_on_error is enabled)",
          "comet_ssr",
        );
    }
    function ye(e, t, n) {
      (T.push({ error: t, errorInfo: n, message: e }), Se());
    }
    function Ce(e) {
      if (!A() && Object.keys(R).length !== 0) {
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
          Se());
      }
    }
    function be(e) {
      A() || (e.length > 0 && L.push(e), Se());
    }
    function ve(e) {
      A() || (E.push(e), Se());
    }
    function Se() {
      (o("CometSSRDebugHelper").updateSSRDebugState({
        globalBoundaryErrorStatus: le,
        ignoredHydrationErrors: T,
        lastPayloadArrived: b,
        sampleProfiles: L,
        serverInfoList: E,
        ssrFinishedSuccessfully: b && !h,
        ssrRenderPassStatuses: babelHelpers.extends({}, R),
      }),
        o("CometSSRDebugHelper").triggerDebugStateUpdate());
    }
    function Re() {
      b || ((b = !0), Se());
    }
    function Le() {
      ((h = !0), (b = !0), Se());
    }
    window.__SSRFailJestOnError = he;
    function Ee() {
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
    function ke(e, t) {
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
    ((l.logQPLPoint = O),
      (l.onViewportGuessValidation = B),
      (l.updateRenderPassStatus = U),
      (l.onPayloadReceived = H),
      (l.processRootElement = Y),
      (l.ssrInit = te),
      (l.onSSRError = re),
      (l.onSSRFailJestOnError = oe),
      (l.injectOnSSRErrorHandlerDefaultOnWindow = ae),
      (l.onForceHydration = me),
      (l.initFizz = _e),
      (l.logRecoverableHydrationError = ye),
      (l.updateSSRRequestTime = Ce),
      (l.updateSampleProfile = be),
      (l.updateServerInfo = ve),
      (l.updateSSRDebugState = Se),
      (l.markSSRComplete = Re),
      (l.markSSRError = Le));
  },
  98,
);
