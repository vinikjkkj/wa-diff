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
          _e(),
          N(),
        );
      }
      ke();
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
        (n = ue) == null || n.removeSplashScreen(),
        Ie(m, p),
        Y(t, "ERROR"));
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
          _e(),
          N(),
        ),
        G({
          id: "Error - SSR is disabled from server",
          payloadType: "LAST",
          renderPassCount: 0,
          status: e,
        }));
    }
    function O() {
      return _;
    }
    function B(e) {
      if (_ == null)
        return r("FBLogger")("comet_ssr").mustfix(
          'logQPLPoint(): Cannot log QPL point "%s" - ssrInit did not run',
          e,
        );
      _.enabled && r("qplTimingsServerJS")(_.cavalry_get_lid, e);
    }
    function W(e, t) {
      (q(e) || w("Checks for useMatchViewport failed"),
        t != null && le.current.logViewportGuess(t));
    }
    function q(e) {
      return window.matchMedia
        ? e.every(function (e) {
            var t = e.dimension,
              n = e.numPixels,
              r = e.operation,
              o = e.result,
              a = U(r, t, n);
            return window.matchMedia(a).matches === o;
          })
        : !1;
    }
    function U(e, t, n) {
      return "(" + e + "-" + t + ": " + n + "px)";
    }
    function V(e) {
      var t;
      S.push(e);
      var n = "pending",
        r = "no_error",
        o = "success";
      if (e.status === "success") n = "content_injected";
      else {
        e.status === "fail_ssr_disabled" && P();
        var a = ce(e.status);
        (e.status !== "fail_ssr_disabled" && ye(a),
          (r = a),
          (n = "client_rendered"),
          (o = "error"),
          (se = se === null || se === "unknown" ? a : se));
      }
      var i = {
          readyPreloaders: (t = e.readyPreloaders) != null ? t : [],
          wallTime: 0,
        },
        l = e.renderPassCount;
      ((R[l] = { debug: i, errorStatus: r, renderStatus: n, status: o }),
        (x = l));
    }
    function H(e, t) {
      var n = e.revealSSRContent;
      return {
        removeSplashScreen: function () {
          n &&
            n(function () {
              return o("CometSSRContentRevealer").unhideElement(t, _e(), N());
            });
        },
      };
    }
    function G(e, t) {
      if (!A()) {
        if ((V(e), j(e), K(e.fizzRootId || ""), !v)) {
          k.push(e);
          return;
        }
        z(e);
      }
    }
    function z(e) {
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
        (B("ssr_injected"),
          (i = ue) == null || i.removeSplashScreen(),
          Y("", "INJECTED"));
      } else {
        var l;
        (l = ue) == null || l.removeSplashScreen();
      }
      (le.current.logSSRIndividualPaint(!0, e.renderPassCount), Re());
    }
    function j(e) {
      B("ssr_received_" + e.id);
    }
    function K(e) {
      if (!C) {
        if (((C = !0), _ == null))
          return r("FBLogger")("comet_ssr").mustfix(
            "mountSSRRootContent(): Cannot mount SSR root content - ssrInit did not run",
          );
        ((D = document.getElementById(_.eid)), D && I && ge(D, I));
      }
    }
    function Q() {
      return { removeSplashScreen: g };
    }
    function X() {
      if (D != null) {
        var e = D;
        N()
          ? e.style.setProperty("content-visibility", "hidden")
          : (e.style.display = "none");
      }
    }
    function Y(e, t) {
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
          _e(),
          N(),
        ),
          l.status !== "INJECTED"
            ? (Ie(m, p), he())
            : ((i = _) != null && i.gks.comet_ssr_wait_for_dev) || M(),
          r("maybeScheduleFeedHydration")(p),
          le.current.logSSRInjection(l),
          Re(),
          (f = !0));
      }
    }
    function J(e) {
      if (((D = e), !!_)) {
        if (
          (_.gks.mwp_ssr_enabled && _.enabled) ||
          _.gks.stop_render_at_splashscreen
        )
          _.is_in_crawler_mode || X();
        else if (!_.enabled) {
          var t;
          F((t = _.disabled_reason) != null ? t : "fail_ssr_disabled");
        }
      }
    }
    function Z() {
      (m == null &&
        ee("SSR wait for too long and cannot receive Comet Root Component"),
        p == null &&
          !o("CometClientRootRendererUtils").getIsClientSideRendered() &&
          ee("SSR wait for too long and never hydrated/client rendered"));
    }
    function ee(e) {
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
    function te(e) {
      (o("CometSSRContentRevealer").unhideElement(e.eid, _e(), N()),
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
          Z()));
    }
    function ne(e) {
      ((_ = e),
        B("ssr_init"),
        (D = document.getElementById(e.eid)),
        P(),
        ($ = window.setTimeout(function () {
          (($ = null), te(e));
        }, c)));
      var t = ["success_status", "eid"].filter(function (t) {
        return !e[t];
      });
      if (
        (t.length > 0 &&
          w("Error receiving SSRData: missing keys " + t.toString()),
        D)
      )
        J(D);
      else if (!_.enabled) {
        var n;
        F((n = _.disabled_reason) != null ? n : "fail_ssr_disabled");
      }
      ((window.__invalidateSSR = function (e) {
        (r("FBLogger")("comet_ssr").warn(e),
          G({
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
            B("ssr_reactdom_ready");
          }));
    }
    function re() {
      var e, t;
      return (e = (t = _) == null ? void 0 : t.is_in_crawler_mode) != null
        ? e
        : !1;
    }
    function oe(e) {
      window.__onSSRError && window.__onSSRError(e);
    }
    function ae(e) {
      window.__SSRFailJestOnError && window.__SSRFailJestOnError(e);
    }
    function ie() {
      ((window.__receivedSSRErrors = window.__receivedSSRErrors || []),
        (window.__onSSRError =
          window.__onSSRError ||
          function (e) {
            var t;
            (t = window.__receivedSSRErrors) == null || t.push(e);
          }));
    }
    var le = o("CometSSRLogger").getSSRLogger(),
      se = null,
      ue = Q();
    function ce(e) {
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
    var de = null,
      me = !1;
    function pe(e) {
      me || ((de = e), A() && (de(), (me = !0)));
    }
    function _e() {
      return r("justknobx")._("957") || re();
    }
    function fe(e, t, n, r, a) {
      for (
        v = !0,
          m = t,
          d = n,
          o("CometSSRContentRevealer").setExternalSplashScreenController(
            a.revealSSRContent,
          ),
          e &&
            ((I = e),
            (le.current = o("CometSSRLogger").initLogger(e)),
            o("CometSSRHydrationHelpers").initHydrationHelperTraceAPIObj(e),
            ge(D, e),
            le.current.logSSRFizzInit()),
          ue = H(a, r),
          A() && Ie(m, p),
          le.current.logSSRPayloadQueued(k.length === 0);
        k.length > 0;
      ) {
        var i = k.shift();
        i != null && z(i);
      }
    }
    function ge(e, t) {
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
    function he() {
      se = se === null || se === "unknown" ? "ssr_disabled" : se;
    }
    function ye(e) {
      r("gkx")("23415") &&
        r("jestOnlyViolation")(
          "Encountered error during server rendering: " +
            e +
            "! See slog for error details. (client rendering prevented since comet_ssr_fatal_on_error is enabled)",
          "comet_ssr",
        );
    }
    function Ce(e, t, n) {
      (T.push({ error: t, errorInfo: n, message: e }), Re());
    }
    function be(e) {
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
          Re());
      }
    }
    function ve(e) {
      A() || (e.length > 0 && L.push(e), Re());
    }
    function Se(e) {
      A() || (E.push(e), Re());
    }
    function Re() {
      (o("CometSSRDebugHelper").updateSSRDebugState({
        globalBoundaryErrorStatus: se,
        ignoredHydrationErrors: T,
        lastPayloadArrived: b,
        sampleProfiles: L,
        serverInfoList: E,
        ssrFinishedSuccessfully: b && !h,
        ssrRenderPassStatuses: babelHelpers.extends({}, R),
      }),
        o("CometSSRDebugHelper").triggerDebugStateUpdate());
    }
    function Le() {
      b || ((b = !0), Re());
    }
    function Ee() {
      ((h = !0), (b = !0), Re());
    }
    window.__SSRFailJestOnError = ye;
    function ke() {
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
    function Ie(e, t) {
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
    ((l.getSSRData = O),
      (l.logQPLPoint = B),
      (l.onViewportGuessValidation = W),
      (l.updateRenderPassStatus = V),
      (l.onPayloadReceived = G),
      (l.processRootElement = J),
      (l.ssrInit = ne),
      (l.onSSRError = oe),
      (l.onSSRFailJestOnError = ae),
      (l.injectOnSSRErrorHandlerDefaultOnWindow = ie),
      (l.onForceHydration = pe),
      (l.initFizz = fe),
      (l.logRecoverableHydrationError = Ce),
      (l.updateSSRRequestTime = be),
      (l.updateSampleProfile = ve),
      (l.updateServerInfo = Se),
      (l.updateSSRDebugState = Re),
      (l.markSSRComplete = Le),
      (l.markSSRError = Ee));
  },
  98,
);
