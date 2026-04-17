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
    "WAWebPageLoadLogging",
    "WAWebPageLoadTierStats",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsStore",
    "WAWebWaUlCookieUtils",
    "WAWebWamPageLoadReporter",
    "WAWebWamUtils",
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
              },
              timestamp: 0,
            })),
            h == null &&
              (h = self.setTimeout(function () {
                _ ||
                  (o("WAWebCoreActionsODS").logPageLoadErrorTimeout(),
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
          i != null && I({ encrypted_rid: i });
        }
        var l = "";
        r("WAWebEnvironment").isWindows
          ? (l = "win_hybrid")
          : r("WAWebEnvironment").isWeb && (l = "web");
        var s = document.referrer;
        if (r("WAWebEnvironment").isWeb && s != null && s !== "")
          try {
            s = new URL(s).hostname;
          } catch (e) {
            s = "INVALID";
          }
        var u = o("WAWebWaUlCookieUtils").getWaUlCookieIfLoggedOut(),
          c = u != null ? r("WACyrb53Hash")(u) : null;
        (I({
          qr_screen: e,
          qr_screen_experience: t != null ? t : -1,
          is_foreground: !document.hidden,
          page_load_id: g,
          sub_platform: l,
          referrer: s,
          random_user_id: c != null ? c : -1,
          locale: n != null ? n : void 0,
          touch_presence: r("WAWebDeviceFeatures")().touchPresence,
        }),
          x(),
          $(),
          v(D(f)),
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
          M(),
          o("WAWebABProps").getABPropConfigValue(
            "webc_page_load_early_commit_enabled",
          ) && o("WAWebWamPageLoadReporter").logWamPageLoad(),
          self.setTimeout(
            o("WAWebWamUtils").forceFlushAllWamAndQplBuffers,
            1e4,
          ));
      }
    }
    var R = new Set();
    function L(e) {
      (C(), b(e + "_start"), R.add(e));
    }
    function E(t) {
      if (!R.has(t)) {
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
      (C(), b(t + "_end"), R.delete(t));
    }
    function k(e) {
      var t = Math.floor(self.performance.now());
      (N(e, { qpl: t }), C(), b(e, { timestamp: t }));
    }
    function I(e) {
      f = babelHelpers.extends({}, f, e);
    }
    function T() {
      f.socket_error_count++;
    }
    function D(e) {
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
    function x() {
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
    function $() {
      if (p != null) {
        var e = o("WAWebPageLoadTierStats").getTierStats(),
          t = e[0],
          n = e[1];
        I(babelHelpers.extends({}, n));
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
    var P = { wamComplete: !1, qplComplete: !1, timestamps: new Map() };
    function N(e, t) {
      var n = P.timestamps.get(e);
      (n == null && ((n = {}), P.timestamps.set(e, n)),
        n.qpl == null && t.qpl != null && (n.qpl = t.qpl),
        n.wam == null && t.wam != null && (n.wam = t.wam));
    }
    function M() {
      ((P.qplComplete = !0), B());
    }
    function w() {
      ((P.wamComplete = !0), B());
    }
    var A = 20,
      F = 9e4,
      O = null;
    function B() {
      if (!(P.wamComplete && P.qplComplete)) {
        O == null &&
          (O = self.setTimeout(function () {
            var e = P.wamComplete ? "qpl" : "wam",
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
                F,
              )
              .sendLogs(t, { sampling: 0.01 });
          }, F));
        return;
      }
      O != null && (self.clearTimeout(O), (O = null));
      var e = !1;
      for (var t of P.timestamps.entries()) {
        var n = t[0],
          r = t[1],
          a = r.qpl,
          i = r.wam;
        a != null &&
          i != null &&
          Math.abs(a - i) > A &&
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
    function W() {
      return null;
    }
    function q() {
      o("WAWebPageLoadLogging").setImpl({
        endPageLoadQpl: S,
        endPageLoadQplMeasure: E,
        startPageLoadQplMeasure: L,
        addPageLoadQplPoint: k,
        addPageLoadQplAnnotation: I,
        incrementPageLoadQplSocketError: T,
        addPageLoadValidationData: N,
        setWamCompleteForValidation: w,
        PAGE_LOAD_ID: g,
      });
    }
    l.setPageLoadLoggingImpl = q;
  },
  98,
);
