__d(
  "WAWebPageLoadLoggingImpl",
  [
    "Env",
    "WACyrb53Hash",
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebDeviceFeatures",
    "WAWebEncryptedRid",
    "WAWebEnvironment",
    "WAWebForceFlushWamBuffers",
    "WAWebLoggedOutSeparationGating",
    "WAWebODS",
    "WAWebPageLoadLogging",
    "WAWebPageLoadTierStats",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsStore",
    "WAWebWaUlCookieUtils",
    "WAWebWamPageLoadReporter",
    "WAWebWebcPageLoad2WamEvent",
    "gkx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = r("qpl")._(891431414, "3268"),
      _,
      f = !1,
      g = { socket_error_count: 0 },
      h = r("WAWebPonyfillsCryptoRandomUUID")(),
      y = null,
      C = 12e4;
    function b() {
      return f
        ? !1
        : (_ != null ||
            ((_ = o("WAWebQplFlowWrapper").QPL.markerStart(p, {
              annotations: {
                bool: {
                  mh_default_async_await_wa: r("gkx")("8891"),
                  wa_web_media_wasm_worker_split: r("gkx")("24042"),
                  wa_web_prefetch_startup_resources: r("gkx")("27710"),
                  wa_web_sw_prefetch_startup_resources: r("gkx")("27785"),
                  wa_web_rsrc_shared_dictionary_eligible:
                    (m || (m = r("Env"))).wa_web_rsrc_shared_dictionary != null,
                  wa_web_rsrc_shared_dictionary:
                    m.wa_web_rsrc_shared_dictionary === !0,
                },
                string: {
                  logged_out_separation: o(
                    "WAWebLoggedOutSeparationGating",
                  ).getLoggedOutSeparationExperiment(),
                },
              },
              timestamp: 0,
            })),
            y == null &&
              (y = self.setTimeout(function () {
                f ||
                  (o("WAWebCoreActionsODS").logPageLoadError(),
                  r("WAWebODS").incr("web.page_load.error.timeout"),
                  L(),
                  (f = !0),
                  o("WAWebCoreActionsODS").markPageLoadComplete());
              }, C))),
          !0);
    }
    function v(e, t) {
      var n;
      (n = _) == null || n.addPoint(e, t);
    }
    function S(e) {
      var t;
      (t = _) == null || t.annotate(e);
    }
    function R(e, t, n) {
      var a;
      if (b()) {
        if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
          var i = o("WAWebEncryptedRid").getEncryptedRid();
          i != null && x({ encrypted_rid: i });
        }
        var l = document.referrer;
        if (r("WAWebEnvironment").isWeb && l != null && l !== "")
          try {
            l = new URL(l).hostname;
          } catch (e) {
            l = "INVALID";
          }
        var s = o("WAWebWaUlCookieUtils").getWaUlCookieIfLoggedOut(),
          u = s != null ? r("WACyrb53Hash")(s) : null;
        (x({
          qr_screen: e,
          qr_screen_experience: t != null ? t : -1,
          is_foreground: !document.hidden,
          page_load_id: h,
          sub_platform: E(),
          referrer: l,
          random_user_id: u != null ? u : -1,
          locale: n != null ? n : void 0,
          touch_presence: o(
            "WAWebDeviceFeatures",
          ).getTouchPresenceForTouchOnlyCallers(),
        }),
          M(),
          w(),
          S(N(g)),
          (a = _) == null || a.end(2),
          (_ = null),
          new (o("WAWebWebcPageLoad2WamEvent").WebcPageLoad2WamEvent)({
            webcPageLoadId: h,
          }).commit(),
          (f = !0),
          y != null && (self.clearTimeout(y), (y = null)),
          r("WAWebODS").incr("web.page_load.success"),
          e
            ? r("WAWebODS").incr("web.page_load.success.qr")
            : r("WAWebODS").incr("web.page_load.success.main"),
          o("WAWebCoreActionsODS").markPageLoadComplete(),
          O(),
          o("WAWebABProps").getABPropConfigValue(
            "webc_page_load_early_commit_enabled",
          ) && o("WAWebWamPageLoadReporter").logWamPageLoad(),
          self.setTimeout(function () {
            return o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers(
              !1,
            );
          }, 1e4));
      }
    }
    function L() {
      var e;
      _ != null &&
        (x({
          is_foreground: !document.hidden,
          page_load_id: h,
          sub_platform: E(),
        }),
        M(),
        w(),
        S(N(g)),
        (e = _) == null || e.end(113),
        (_ = null));
    }
    function E() {
      return r("WAWebEnvironment").isWindows
        ? "win_hybrid"
        : r("WAWebEnvironment").isWeb
          ? "web"
          : "";
    }
    var k = new Set();
    function I(e) {
      (b(), v(e + "_start"), k.add(e));
    }
    function T(t) {
      if (!k.has(t)) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[page load] ",
              " not started",
            ])),
          t,
        );
        return;
      }
      (b(), v(t + "_end"), k.delete(t));
    }
    function D(e, t) {
      var n = t != null ? t : Math.floor(self.performance.now());
      (F(e, { qpl: n }), b(), v(e, { timestamp: n }));
    }
    function x(e) {
      g = babelHelpers.extends({}, g, e);
    }
    function $(e) {
      (x(e), b() && S(N(e)));
    }
    function P() {
      g.socket_error_count++;
    }
    function N(e) {
      var t = {};
      for (var n of Object.keys(e)) {
        var r = e[n];
        typeof r == "boolean"
          ? (t.bool == null && (t.bool = {}), (t.bool[n] = r))
          : typeof r == "number"
            ? (t.int == null && (t.int = {}), (t.int[n] = r))
            : typeof r == "string" &&
              (t.string == null && (t.string = {}), (t.string[n] = r));
      }
      return t;
    }
    function M() {
      var e;
      if (_ != null) {
        var t =
          (e = window) == null || (e = e.performance) == null
            ? void 0
            : e.getEntriesByType("navigation")[0];
        if (t == null) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[page load] no navigation timing entry",
              ])),
          );
          return;
        }
        (v("request_start", { timestamp: t.requestStart }),
          v("response_end", { timestamp: t.responseEnd }),
          v("dom_complete", { timestamp: t.domComplete }));
      }
    }
    function w() {
      if (_ != null) {
        var e = o("WAWebPageLoadTierStats").getTierStats(),
          t = e[0],
          n = e[1];
        x(babelHelpers.extends({}, n));
        for (var r of [
          "tierOne_start",
          "tierTwo_start",
          "tierThree_start",
          "tierOne_end",
          "tierTwo_end",
          "tierThree_end",
        ])
          if (t[r]) {
            var a = t[r];
            v(r, { timestamp: a });
          }
      }
    }
    var A = { wamComplete: !1, qplComplete: !1, timestamps: new Map() };
    function F(e, t) {
      var n = A.timestamps.get(e);
      (n == null && ((n = {}), A.timestamps.set(e, n)),
        n.qpl == null && t.qpl != null && (n.qpl = t.qpl),
        n.wam == null && t.wam != null && (n.wam = t.wam));
    }
    function O() {
      ((A.qplComplete = !0), V());
    }
    function B() {
      ((A.wamComplete = !0), V());
    }
    var W = 20,
      q = 9e4,
      U = null;
    function V() {
      if (!(A.wamComplete && A.qplComplete)) {
        U == null &&
          (U = self.setTimeout(function () {
            var e = A.wamComplete ? "qpl" : "wam",
              t = "page-load-validation-missing-" + e;
            if (e === "wam") {
              var n = o(
                  "WAWebWamPageLoadReporter",
                ).getWamPageLoadTimingCompletion(),
                r = n.uiTimingComplete,
                a = n.wsTimingComplete;
              !r && !a
                ? (t += "-incomplete-both-timings")
                : r
                  ? a
                    ? (t += "-completed-timings")
                    : (t += "-incomplete-ws-timing")
                  : (t += "-incomplete-ui-timing");
            }
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[page load] missing completion marker for ",
                    " after ",
                    "ms",
                  ])),
                e,
                q,
              )
              .sendLogs(t, { sampling: 0.01 });
          }, q));
        return;
      }
      U != null && (self.clearTimeout(U), (U = null));
      var e = !1;
      for (var t of A.timestamps.entries()) {
        var n = t[0],
          r = t[1],
          a = r.qpl,
          i = r.wam;
        a != null &&
          i != null &&
          Math.abs(a - i) > W &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[page load] ",
                " qpl: ",
                " wam: ",
                " diff: ",
                "",
              ])),
            n,
            a,
            i,
            Math.abs(a - i),
          ),
          (e = !0));
      }
      e &&
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[page load] validation failed",
              ])),
          )
          .sendLogs("page-load-validation", { sampling: 0.01 });
    }
    function H() {
      return null;
    }
    function G() {
      o("WAWebPageLoadLogging").setImpl({
        endPageLoadQpl: R,
        endPageLoadQplMeasure: T,
        startPageLoadQplMeasure: I,
        addPageLoadQplPoint: D,
        addPageLoadQplAnnotation: x,
        addPageLoadQplAnnotationNow: $,
        incrementPageLoadQplSocketError: P,
        addPageLoadValidationData: F,
        setWamCompleteForValidation: B,
        PAGE_LOAD_ID: h,
      });
    }
    l.setPageLoadLoggingImpl = G;
  },
  98,
);
