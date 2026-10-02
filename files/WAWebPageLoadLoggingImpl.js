__d(
  "WAWebPageLoadLoggingImpl",
  [
    "WACyrb53Hash",
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebDeviceFeatures",
    "WAWebEncryptedRid",
    "WAWebEnvironment",
    "WAWebForceFlushWamBuffers",
    "WAWebLoggedOutSeparationGating",
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
      m = r("qpl")._(891431414, "3268"),
      p,
      _ = !1,
      f = { socket_error_count: 0 },
      g = r("WAWebPonyfillsCryptoRandomUUID")(),
      h = null,
      y = 12e4;
    function C() {
      return _
        ? !1
        : (p != null ||
            ((p = o("WAWebQplFlowWrapper").QPL.markerStart(m, {
              annotations: {
                bool: { wa_web_media_wasm_worker_split: r("gkx")("24042") },
                string: {
                  logged_out_separation: o(
                    "WAWebLoggedOutSeparationGating",
                  ).getLoggedOutSeparationExperiment(),
                },
              },
              timestamp: 0,
            })),
            h == null &&
              (h = self.setTimeout(function () {
                _ ||
                  (o("WAWebCoreActionsODS").logPageLoadErrorTimeout(),
                  R(),
                  (_ = !0),
                  o("WAWebCoreActionsODS").markPageLoadComplete());
              }, y))),
          !0);
    }
    function b(e, t) {
      var n;
      (n = p) == null || n.addPoint(e, t);
    }
    function v(e) {
      var t;
      (t = p) == null || t.annotate(e);
    }
    function S(e, t, n) {
      var a;
      if (C()) {
        if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
          var i = o("WAWebEncryptedRid").getEncryptedRid();
          i != null && D({ encrypted_rid: i });
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
        (D({
          qr_screen: e,
          qr_screen_experience: t != null ? t : -1,
          is_foreground: !document.hidden,
          page_load_id: g,
          sub_platform: L(),
          referrer: l,
          random_user_id: u != null ? u : -1,
          locale: n != null ? n : void 0,
          touch_presence: o(
            "WAWebDeviceFeatures",
          ).getTouchPresenceForTouchOnlyCallers(),
        }),
          P(),
          N(),
          v($(f)),
          (a = p) == null || a.end(2),
          (p = null),
          new (o("WAWebWebcPageLoad2WamEvent").WebcPageLoad2WamEvent)({
            webcPageLoadId: g,
          }).commit(),
          (_ = !0),
          h != null && (self.clearTimeout(h), (h = null)),
          o("WAWebCoreActionsODS").logPageLoadSuccess(),
          e
            ? o("WAWebCoreActionsODS").logPageLoadSuccessQr()
            : o("WAWebCoreActionsODS").logPageLoadSuccessMain(),
          o("WAWebCoreActionsODS").markPageLoadComplete(),
          A(),
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
    function R() {
      var e;
      p != null &&
        (D({
          is_foreground: !document.hidden,
          page_load_id: g,
          sub_platform: L(),
        }),
        P(),
        N(),
        v($(f)),
        (e = p) == null || e.end(113),
        (p = null));
    }
    function L() {
      return r("WAWebEnvironment").isWindows
        ? "win_hybrid"
        : r("WAWebEnvironment").isWeb
          ? "web"
          : "";
    }
    var E = new Set();
    function k(e) {
      (C(), b(e + "_start"), E.add(e));
    }
    function I(t) {
      if (!E.has(t)) {
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
      (C(), b(t + "_end"), E.delete(t));
    }
    function T(e) {
      var t = Math.floor(self.performance.now());
      (w(e, { qpl: t }), C(), b(e, { timestamp: t }));
    }
    function D(e) {
      f = babelHelpers.extends({}, f, e);
    }
    function x() {
      f.socket_error_count++;
    }
    function $(e) {
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
    function P() {
      var e;
      if (p != null) {
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
        (b("request_start", { timestamp: t.requestStart }),
          b("response_end", { timestamp: t.responseEnd }),
          b("dom_complete", { timestamp: t.domComplete }));
      }
    }
    function N() {
      if (p != null) {
        var e = o("WAWebPageLoadTierStats").getTierStats(),
          t = e[0],
          n = e[1];
        D(babelHelpers.extends({}, n));
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
            b(r, { timestamp: a });
          }
      }
    }
    var M = { wamComplete: !1, qplComplete: !1, timestamps: new Map() };
    function w(e, t) {
      var n = M.timestamps.get(e);
      (n == null && ((n = {}), M.timestamps.set(e, n)),
        n.qpl == null && t.qpl != null && (n.qpl = t.qpl),
        n.wam == null && t.wam != null && (n.wam = t.wam));
    }
    function A() {
      ((M.qplComplete = !0), q());
    }
    function F() {
      ((M.wamComplete = !0), q());
    }
    var O = 20,
      B = 9e4,
      W = null;
    function q() {
      if (!(M.wamComplete && M.qplComplete)) {
        W == null &&
          (W = self.setTimeout(function () {
            var e = M.wamComplete ? "qpl" : "wam",
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
                B,
              )
              .sendLogs(t, { sampling: 0.01 });
          }, B));
        return;
      }
      W != null && (self.clearTimeout(W), (W = null));
      var e = !1;
      for (var t of M.timestamps.entries()) {
        var n = t[0],
          r = t[1],
          a = r.qpl,
          i = r.wam;
        a != null &&
          i != null &&
          Math.abs(a - i) > O &&
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
    function U() {
      return null;
    }
    function V() {
      o("WAWebPageLoadLogging").setImpl({
        endPageLoadQpl: S,
        endPageLoadQplMeasure: I,
        startPageLoadQplMeasure: k,
        addPageLoadQplPoint: T,
        addPageLoadQplAnnotation: D,
        incrementPageLoadQplSocketError: x,
        addPageLoadValidationData: w,
        setWamCompleteForValidation: F,
        PAGE_LOAD_ID: g,
      });
    }
    l.setPageLoadLoggingImpl = V;
  },
  98,
);
