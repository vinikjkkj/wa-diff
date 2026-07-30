__d(
  "WAWebWamPageLoadReporter",
  [
    "Promise",
    "WALogger",
    "WAWebAppScreen",
    "WAWebPageLoadLogging",
    "WAWebStreamModel",
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
      v;
    function S(e, t, n) {
      R(e);
      var r = Math.floor(self.performance.now());
      ((m[e] = r), n && ((m.socketSequence = t), _()));
    }
    function R(e) {
      e: {
        if (e === o("WAWebStreamModel").StreamInfo.OPENING) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_opening");
          break e;
        }
        if (e === o("WAWebStreamModel").StreamInfo.PAIRING) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_pairing");
          break e;
        }
        if (e === o("WAWebStreamModel").StreamInfo.NORMAL) {
          o("WAWebPageLoadLogging").addPageLoadQplPoint("webc_ws_normal");
          break e;
        }
        if (
          e === o("WAWebStreamModel").StreamInfo.OFFLINE ||
          e === o("WAWebStreamModel").StreamInfo.SYNCING ||
          e === o("WAWebStreamModel").StreamInfo.RESUMING ||
          e === o("WAWebStreamModel").StreamInfo.CONNECTING
        )
          break e;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function L(e) {
      (o("WAWebPageLoadLogging").addPageLoadQplPoint(
        "webc_initial_panel_mount_t",
      ),
        (d = e));
    }
    function E(e) {
      c != null && c.set({ webcInitialPanel: e });
    }
    function k() {
      p();
    }
    (window.document &&
      ((v = !document.hidden),
      document.addEventListener("visibilitychange", T)),
      u.all([y, C]).then(function () {
        (D(),
          r("WAWebWamResourceLoadReporter")(),
          b || ((b = !0), o("WAWebWam").Wam.resumeJobs()));
      }));
    function I(e) {
      return !self.performance ||
        !self.performance.timing ||
        !self.performance.timing.navigationStart
        ? null
        : e - self.performance.timing.navigationStart;
    }
    function T() {
      c && document.hidden && (v = !1);
    }
    function D() {
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
          self.setTimeout(D, 1e4));
        return;
      }
      function p(e) {
        var t = a[e];
        return t && I(t);
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
        x(r),
        r.commit(),
        window.document && document.removeEventListener("visibilitychange", T),
        (c = null));
    }
    function x(e) {
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
    var $ = (function () {
      function e(e) {
        ((this.$4 = !1),
          (this.$3 = e.label),
          (this.$1 = e.startProperty),
          (this.$2 = e.endProperty));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          var e;
          ((this.$4 = !0),
            c != null && c.set(((e = {}), (e[this.$1] = I(Date.now())), e)));
        }),
        (t.end = function () {
          var e;
          c != null && c.set(((e = {}), (e[this.$2] = I(Date.now())), e));
        }),
        (t.hasStarted = function () {
          return this.$4;
        }),
        e
      );
    })();
    function P(e) {
      W.hasStarted() ||
        (N(e) &&
          (E(e),
          W.start(),
          o("WAWebPageLoadLogging").addPageLoadQplPoint(
            "webc_initial_panel_mount_start_t",
          ),
          window.requestAnimationFrame(function () {
            (W.end(),
              o("WAWebPageLoadLogging").addPageLoadQplPoint(
                "webc_initial_panel_render_t",
              ),
              A("initialPanelRenderTRecorded"));
          })));
    }
    function N(e) {
      return e !== o("WAWebAppScreen").AppScreen.SYNCING;
    }
    var M = !1,
      w = !1;
    function A(e) {
      (e === "initialPanelMountTRecorded" && (M = !0),
        e === "initialPanelRenderTRecorded" && (w = !0),
        M && w && k());
    }
    var F = r("once")(function () {
        (L(Date.now()), A("initialPanelMountTRecorded"));
      }),
      O = new $({
        label: "PageLoad.webcExe",
        startProperty: "webcExeStart",
        endProperty: "webcExeDone",
      }),
      B = new $({
        label: "PageLoad.webcMainScript",
        startProperty: "webcMainScriptStart",
        endProperty: "webcMainScriptEnd",
      }),
      W = new $({
        label: "PageLoad.webcInitialPanelRender",
        startProperty: "webcInitialPanelMountStartT",
        endProperty: "webcInitialPanelRenderT",
      });
    ((l.getWamPageLoadTimingCompletion = h),
      (l.streamInfoChange = S),
      (l.logWamPageLoad = D),
      (l.maybeLogInitialScreenRenderStart = P),
      (l.logFirstRenderMountTimeOnce = F),
      (l.exeTimer = O),
      (l.mainScriptTimer = B));
  },
  98,
);
