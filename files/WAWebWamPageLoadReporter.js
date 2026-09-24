__d(
  "WAWebWamPageLoadReporter",
  [
    "Promise",
    "WALogger",
    "WAWebAppScreenTypes",
    "WAWebPageLoadLogging",
    "WAWebStreamTypes",
    "WAWebWam",
    "WAWebWamResourceLoadReporter",
    "WAWebWebcPageLoadWamEvent",
    "cr:11133",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (o("WAWebWebcPageLoadWamEvent").WebcPageLoadWamEvent)(),
      d,
      m = {},
      p,
      _,
      f = !1,
      g = !1;
    function h() {
      return { uiTimingComplete: f, wsTimingComplete: g };
    }
    var y = new (u || (u = n("Promise")))(function (e) {
        return (p = function () {
          ((f = !0), e());
        });
      }),
      C = new u(function (e) {
        return (_ = function () {
          ((g = !0), e());
        });
      }),
      b = !1,
      v,
      S = !1;
    function R(e, t, n, r) {
      L(e);
      var o = r != null ? r : Math.floor(self.performance.now());
      ((m[e] = o), n && ((m.socketSequence = t), _()));
    }
    function L(e) {
      e: {
        if (e === o("WAWebStreamTypes").StreamInfo.OPENING) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_opening");
          break e;
        }
        if (e === o("WAWebStreamTypes").StreamInfo.PAIRING) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_pairing");
          break e;
        }
        if (e === o("WAWebStreamTypes").StreamInfo.NORMAL) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_normal");
          break e;
        }
        if (
          e === o("WAWebStreamTypes").StreamInfo.OFFLINE ||
          e === o("WAWebStreamTypes").StreamInfo.SYNCING ||
          e === o("WAWebStreamTypes").StreamInfo.RESUMING ||
          e === o("WAWebStreamTypes").StreamInfo.CONNECTING
        )
          break e;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function E(e) {
      (o("WAWebPageLoadLogging").addPageLoadQplPoint(
        "webc_initial_panel_mount_t",
      ),
        (d = e));
    }
    function k(e) {
      c != null && c.set({ webcInitialPanel: e });
    }
    function I() {
      p();
    }
    (window.document &&
      ((v = !document.hidden),
      document.addEventListener("visibilitychange", D)),
      u.all([y, C]).then(function () {
        (x(),
          r("WAWebWamResourceLoadReporter")(),
          b || ((b = !0), o("WAWebWam").Wam.resumeJobs()));
      }));
    function T(e) {
      return !self.performance ||
        !self.performance.timing ||
        !self.performance.timing.navigationStart
        ? null
        : e - self.performance.timing.navigationStart;
    }
    function D() {
      c && document.hidden && (v = !1);
    }
    function x() {
      var t;
      if (
        !(
          (t = self.performance) != null &&
          t.timing &&
          self.performance.navigation
        )
      ) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "MetricReporter:logPageLoad metrics not provided by browser!",
            ])),
        );
        return;
      }
      if (!c) return;
      var r = c,
        a = self.performance.timing,
        i = self.performance.navigation,
        l = a.navigationStart,
        u = a.loadEventEnd - l;
      if (u <= 0) {
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "MetricReporter:logPageLoad delayed",
            ])),
        ),
          self.setTimeout(x, 1e4));
        return;
      }
      function p(e) {
        var t = a[e];
        return t && T(t);
      }
      (r.set({
        webcPageLoadT: u,
        webcUnloadEventStart: p("unloadEventStart"),
        webcUnloadEventEnd: p("unloadEventEnd"),
        webcRedirectStart: p("redirectStart"),
        webcRedirectEnd: p("redirectEnd"),
        webcFetchStart: p("fetchStart"),
        webcDomainLookupStart: p("domainLookupStart"),
        webcDomainLookupEnd: p("domainLookupEnd"),
        webcConnectStart: p("connectStart"),
        webcConnectEnd: p("connectEnd"),
        webcSecureConnectionStart: p("secureConnectionStart"),
        webcRequestStart: p("requestStart"),
        webcResponseStart: p("responseStart"),
        webcResponseEnd: p("responseEnd"),
        webcDomLoading: p("domLoading"),
        webcDomInteractive: p("domInteractive"),
        webcDomContentLoadedEventStart: p("domContentLoadedEventStart"),
        webcDomContentLoadedEventEnd: p("domContentLoadedEventEnd"),
        webcDomComplete: p("domComplete"),
        webcLoadEventStart: p("loadEventStart"),
        webcLoadEventEnd: p("loadEventEnd"),
        webcCached: a.fetchStart === a.domainLookupEnd,
        webcNavigation: i.type,
        webcRedirectCount: i.redirectCount,
        webcWsOpening: m.OPENING,
        webcWsPairing: m.PAIRING,
        webcWsSyncing: m.SYNCING,
        webcWsNormal: m.NORMAL,
        webcWsAttempts: m.socketSequence,
        webcQrCode: !m.SYNCING,
        webcInitialPanelMountT:
          (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 && d == null
            ? null
            : d - l,
        webcLoadInForeground: v,
        webcPageLoadId: o("WAWebPageLoadLogging").getPageLoadId(),
      }),
        $(r),
        S ? r.commitAndWaitForFlush(!0) : r.commit(),
        window.document && document.removeEventListener("visibilitychange", D),
        (c = null));
    }
    function $(e) {
      var t;
      ((t = o("WAWebPageLoadLogging")).addPageLoadValidationData(
        "webc_ws_opening",
        { wam: e.webcWsOpening },
      ),
        t.addPageLoadValidationData("webc_ws_pairing", {
          wam: e.webcWsPairing,
        }),
        t.addPageLoadValidationData("webc_ws_normal", { wam: e.webcWsNormal }),
        t.addPageLoadValidationData("webc_initial_panel_mount_t", {
          wam: e.webcInitialPanelMountT,
        }),
        t.addPageLoadValidationData("webc_initial_panel_mount_start_t", {
          wam: e.webcInitialPanelMountStartT,
        }),
        t.addPageLoadValidationData("webc_initial_panel_render_t", {
          wam: e.webcInitialPanelRenderT,
        }),
        t.setWamCompleteForValidation());
    }
    var P = (function () {
      function e(e) {
        ((this.$4 = !1),
          (this.$3 = e.label),
          (this.$1 = e.startProperty),
          (this.$2 = e.endProperty));
      }
      var t = e.prototype;
      return (
        (t.start = function (t) {
          var e;
          ((this.$4 = !0),
            c != null &&
              c.set(
                ((e = {}), (e[this.$1] = T(t != null ? t : Date.now())), e),
              ));
        }),
        (t.end = function (t) {
          var e;
          c != null &&
            c.set(((e = {}), (e[this.$2] = T(t != null ? t : Date.now())), e));
        }),
        (t.hasStarted = function () {
          return this.$4;
        }),
        e
      );
    })();
    function N(e, t) {
      if (!U.hasStarted() && M(e)) {
        if (
          (k(e),
          U.start(t == null ? void 0 : t.mountEpochMs),
          o("WAWebPageLoadLogging").addPageLoadQplPoint(
            "webc_initial_panel_mount_start_t",
          ),
          (t == null ? void 0 : t.renderEpochMs) != null)
        ) {
          (U.end(t.renderEpochMs),
            o("WAWebPageLoadLogging").addPageLoadQplPoint(
              "webc_initial_panel_render_t",
            ),
            F("initialPanelRenderTRecorded"));
          return;
        }
        window.requestAnimationFrame(function () {
          (U.end(),
            o("WAWebPageLoadLogging").addPageLoadQplPoint(
              "webc_initial_panel_render_t",
            ),
            F("initialPanelRenderTRecorded"));
        });
      }
    }
    function M(e) {
      return e !== o("WAWebAppScreenTypes").AppScreen.SYNCING;
    }
    var w = !1,
      A = !1;
    function F(e) {
      (e === "initialPanelMountTRecorded" && (w = !0),
        e === "initialPanelRenderTRecorded" && (A = !0),
        w && A && I());
    }
    var O = r("once")(function (e) {
      (E(e != null ? e : Date.now()), F("initialPanelMountTRecorded"));
    });
    function B(e, t) {
      S = !0;
      var n = typeof t == "number" ? t : void 0,
        r = t != null && typeof t != "number" ? t : void 0;
      e: {
        if (e === "qr_mount") {
          (N(o("WAWebAppScreenTypes").AppScreen.QR, r),
            O(r == null ? void 0 : r.mountEpochMs));
          break e;
        }
        if (e === "ws_opening") {
          R(o("WAWebStreamTypes").StreamInfo.OPENING, 1, !1, n);
          break e;
        }
        if (e === "ws_pairing") {
          R(o("WAWebStreamTypes").StreamInfo.PAIRING, 1, !1, n);
          break e;
        }
        if (e === "ws_normal") {
          R(o("WAWebStreamTypes").StreamInfo.NORMAL, 1, !0, n);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    var W = new P({
        label: "PageLoad.webcExe",
        startProperty: "webcExeStart",
        endProperty: "webcExeDone",
      }),
      q = new P({
        label: "PageLoad.webcMainScript",
        startProperty: "webcMainScriptStart",
        endProperty: "webcMainScriptEnd",
      }),
      U = new P({
        label: "PageLoad.webcInitialPanelRender",
        startProperty: "webcInitialPanelMountStartT",
        endProperty: "webcInitialPanelRenderT",
      });
    ((l.getWamPageLoadTimingCompletion = h),
      (l.streamInfoChange = R),
      (l.logWamPageLoad = x),
      (l.maybeLogInitialScreenRenderStart = N),
      (l.logFirstRenderMountTimeOnce = O),
      (l.reportLoggedOutPageLoadStage = B),
      (l.exeTimer = W),
      (l.mainScriptTimer = q));
  },
  98,
);
