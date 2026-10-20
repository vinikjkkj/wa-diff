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
      b = u.all([y, C]);
    function v(e) {
      b.then(e);
    }
    var S = !1,
      R,
      L = !1;
    function E(e) {
      var t = e.info,
        n = e.infoNormal,
        r = e.socketSequence,
        o = e.timestamp,
        a = o != null ? o : Math.floor(self.performance.now());
      (k(t, a), (m[t] = a), n && ((m.socketSequence = r), _()));
    }
    function k(e, t) {
      e: {
        if (e === o("WAWebStreamTypes").StreamInfo.OPENING) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_opening", t);
          break e;
        }
        if (e === o("WAWebStreamTypes").StreamInfo.PAIRING) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_pairing", t);
          break e;
        }
        if (e === o("WAWebStreamTypes").StreamInfo.NORMAL) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_normal", t);
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
    function I(e) {
      ($("webc_initial_panel_mount_t", e), (d = e));
    }
    function T(e) {
      c != null && c.set({ webcInitialPanel: e });
    }
    function D() {
      p();
    }
    (window.document &&
      ((R = !document.hidden),
      document.addEventListener("visibilitychange", P)),
      b.then(function () {
        (N(),
          r("WAWebWamResourceLoadReporter")(),
          S || ((S = !0), o("WAWebWam").Wam.resumeJobs()));
      }));
    function x(e) {
      return !self.performance ||
        !self.performance.timing ||
        !self.performance.timing.navigationStart
        ? null
        : e - self.performance.timing.navigationStart;
    }
    function $(e, t) {
      var n;
      o("WAWebPageLoadLogging").addPageLoadQplPoint(
        e,
        (n = x(t)) != null ? n : void 0,
      );
    }
    function P() {
      c && document.hidden && (R = !1);
    }
    function N() {
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
          self.setTimeout(N, 1e4));
        return;
      }
      function p(e) {
        var t = a[e];
        return t && x(t);
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
        webcLoadInForeground: R,
        webcPageLoadId: o("WAWebPageLoadLogging").getPageLoadId(),
      }),
        M(r),
        L ? r.commitAndWaitForFlush(!0) : r.commit(),
        window.document && document.removeEventListener("visibilitychange", P),
        (c = null));
    }
    function M(e) {
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
    var w = (function () {
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
                ((e = {}), (e[this.$1] = x(t != null ? t : Date.now())), e),
              ));
        }),
        (t.end = function (t) {
          var e;
          c != null &&
            c.set(((e = {}), (e[this.$2] = x(t != null ? t : Date.now())), e));
        }),
        (t.hasStarted = function () {
          return this.$4;
        }),
        e
      );
    })();
    function A(e, t) {
      var n;
      if (!G.hasStarted() && F(e)) {
        T(e);
        var r =
          (n = t == null ? void 0 : t.mountEpochMs) != null ? n : Date.now();
        if (
          (G.start(r),
          $("webc_initial_panel_mount_start_t", r),
          (t == null ? void 0 : t.renderEpochMs) != null)
        ) {
          var o = t.renderEpochMs;
          (G.end(o),
            $("webc_initial_panel_render_t", o),
            W("initialPanelRenderTRecorded"));
          return;
        }
        window.requestAnimationFrame(function () {
          var e = Date.now();
          (G.end(e),
            $("webc_initial_panel_render_t", e),
            W("initialPanelRenderTRecorded"));
        });
      }
    }
    function F(e) {
      return e !== o("WAWebAppScreenTypes").AppScreen.SYNCING;
    }
    var O = !1,
      B = !1;
    function W(e) {
      (e === "initialPanelMountTRecorded" && (O = !0),
        e === "initialPanelRenderTRecorded" && (B = !0),
        O && B && D());
    }
    var q = r("once")(function (e) {
      (I(e != null ? e : Date.now()), W("initialPanelMountTRecorded"));
    });
    function U(e, t) {
      L = !0;
      var n = typeof t == "number" ? t : void 0,
        r = t != null && typeof t != "number" ? t : void 0;
      e: {
        if (e === "qr_mount") {
          (A(o("WAWebAppScreenTypes").AppScreen.QR, r),
            q(r == null ? void 0 : r.mountEpochMs));
          break e;
        }
        if (e === "ws_opening") {
          E({
            info: o("WAWebStreamTypes").StreamInfo.OPENING,
            infoNormal: !1,
            socketSequence: 1,
            timestamp: n,
          });
          break e;
        }
        if (e === "ws_pairing") {
          E({
            info: o("WAWebStreamTypes").StreamInfo.PAIRING,
            infoNormal: !1,
            socketSequence: 1,
            timestamp: n,
          });
          break e;
        }
        if (e === "ws_normal") {
          E({
            info: o("WAWebStreamTypes").StreamInfo.NORMAL,
            infoNormal: !0,
            socketSequence: 1,
            timestamp: n,
          });
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    var V = new w({
        label: "PageLoad.webcExe",
        startProperty: "webcExeStart",
        endProperty: "webcExeDone",
      }),
      H = new w({
        label: "PageLoad.webcMainScript",
        startProperty: "webcMainScriptStart",
        endProperty: "webcMainScriptEnd",
      }),
      G = new w({
        label: "PageLoad.webcInitialPanelRender",
        startProperty: "webcInitialPanelMountStartT",
        endProperty: "webcInitialPanelRenderT",
      });
    ((l.getWamPageLoadTimingCompletion = h),
      (l.onWamPageLoadTimingComplete = v),
      (l.streamInfoChange = E),
      (l.logWamPageLoad = N),
      (l.maybeLogInitialScreenRenderStart = A),
      (l.logFirstRenderMountTimeOnce = q),
      (l.reportLoggedOutPageLoadStage = U),
      (l.exeTimer = V),
      (l.mainScriptTimer = H));
  },
  98,
);
