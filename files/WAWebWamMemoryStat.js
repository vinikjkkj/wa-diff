__d(
  "WAWebWamMemoryStat",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebEnvironment",
    "WAWebLidAwareContactsDB",
    "WAWebMemoryPressureCacheClear",
    "WAWebMemoryStatWamEvent",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWebcMemoryStatWamEvent",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = self.performance.now(),
      m = !1,
      p = 100,
      _ = 0;
    function f() {
      var e;
      return ((e = self.performance) == null ? void 0 : e.memory) != null;
    }
    function g() {
      var e,
        t = (e = self.performance) == null ? void 0 : e.memory;
      if (t)
        return (
          (L = Math.max(L, t.usedJSHeapSize)),
          (E += t.usedJSHeapSize),
          k++,
          y(t)
        );
    }
    function h() {
      var e,
        t = (e = self.performance) == null ? void 0 : e.memory;
      if (t) return y(t);
    }
    function y(e) {
      return {
        uptime: Math.round((self.performance.now() - d) / 1e3),
        jsHeapSizeLimit: Math.round(e.jsHeapSizeLimit / 1e3 / 1e3),
        totalJsHeapSize: Math.round(e.totalJSHeapSize / 1e3 / 1e3),
        usedJsHeapSize: Math.round(e.usedJSHeapSize / 1e3 / 1e3),
      };
    }
    function C() {
      var e = g();
      return e
        ? Promise.resolve([
            {
              label: "Main Window",
              memory: e.usedJsHeapSize,
              uptime: e.uptime,
            },
          ])
        : Promise.resolve(void 0);
    }
    var b = 5e3,
      v = 60,
      S = 2 * 1024,
      R = o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
      L = 0,
      E = 0,
      k = 0,
      I;
    function T(t) {
      try {
        var n;
        if (
          o("WAWebRuntimeEnvironmentUtils").isWorker() ||
          ((n = self.performance) == null ? void 0 : n.memory) == null
        )
          return;
        if (t !== R) {
          if (R !== o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE) {
            var r;
            ((r = I) == null || r.cancel(),
              (I = null),
              w(),
              (d = self.performance.now()));
          }
          ((R = t), N());
        }
        I == null && P();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[MemoryStat] failed to set new scenario: ",
                "",
              ])),
            t,
          )
          .sendLogs("set-memory-stat-scenario-failed", { sampling: 0.01 });
      }
    }
    var D = null;
    function x(e) {
      (D != null && !D.equals(e) && $(), (D = e));
    }
    function $() {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var e = g();
        e != null &&
          O().then(function (t) {
            var n,
              r = new (o("WAWebWebcMemoryStatWamEvent").WebcMemoryStatWamEvent)(
                babelHelpers.extends(
                  {},
                  e,
                  {
                    scenario: o("WAWebWamEnumWebcScenarioType")
                      .WEBC_SCENARIO_TYPE.CHAT_NAVIGATION,
                    peakUsedJsHeapSize: Math.round(L / 1e3 / 1e3),
                    usedJsHeapSize: Math.round(E / k / 1e3 / 1e3),
                    isForeground:
                      ((n = self.document) == null
                        ? void 0
                        : n.visibilityState) === "visible",
                  },
                  t,
                  A,
                ),
              );
            (o("WAWebAppTracker").attachWAMAppContext(r), r.commit());
          });
      }
    }
    function P() {
      ((I = new (o("WAShiftTimer").ShiftTimer)(function () {
        var e = g();
        (e != null &&
          (Math.abs(e.usedJsHeapSize - _) > p &&
            ((_ = e.usedJsHeapSize),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MemoryStat] js heap size: ",
                  "Gb",
                ])),
              (e.usedJsHeapSize / 1024).toFixed(2),
            )),
          o("WAWebMemoryPressureCacheClear").maybeClearCachesForMemoryPressure({
            jsHeapSizeLimitMb: e.jsHeapSizeLimit,
            usedJsHeapSizeMb: e.usedJsHeapSize,
          })),
          R === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE &&
            k !== 0 &&
            k % v === 0 &&
            (w(), N()),
          P());
      })),
        I.onOrAfter(b));
    }
    function N() {
      ((L = 0), (E = 0), (k = 0));
    }
    function M(e, t) {
      if (r("WAWebEnvironment").isWeb) {
        var n = new (o("WAWebMemoryStatWamEvent").MemoryStatWamEvent)({
          workingSetSize: e.usedJsHeapSize * 1e3,
          workingSetPeakSize: Math.round(L / 1e3),
          uptime: e.uptime,
          numMessages: t.messageCollectionSize,
          processType: "main",
        });
        (o("WAWebAppTracker").attachWAMAppContext(n), n.commit());
      }
    }
    async function w() {
      var e,
        t = await Promise.all([O(), F()]),
        n = t[0],
        a = t[1],
        i = r("nullthrows")(g()),
        l = Math.round(E / k / 1e3 / 1e3),
        s = new (o("WAWebWebcMemoryStatWamEvent").WebcMemoryStatWamEvent)(
          babelHelpers.extends(
            {},
            i,
            {
              scenario: R,
              peakUsedJsHeapSize: Math.round(L / 1e3 / 1e3),
              usedJsHeapSize: l,
              isForeground:
                ((e = self.document) == null ? void 0 : e.visibilityState) ===
                "visible",
            },
            n,
            a,
          ),
        );
      (o("WAWebAppTracker").attachWAMAppContext(s), s.commit(), M(i, n));
      var d = (l / 1024).toFixed(2),
        p = (i.usedJsHeapSize / 1024).toFixed(2),
        _ = "average: " + d + "Gb, current: " + p + "Gb";
      if (!m && l > S) {
        m = !0;
        var f = S / 1024;
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[MemoryStat] memory usage exceeded ",
                "Gb: ",
                "",
              ])),
            f,
            _,
          )
          .sendLogs("memory-usage-exceeded-" + f + "gb", { sampling: 0.01 });
      } else {
        var h;
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[MemoryStat] memory usage: ",
              " (cores: ",
              ")",
            ])),
          _,
          (h = self.navigator) == null ? void 0 : h.hardwareConcurrency,
        );
      }
    }
    var A = null;
    async function F() {
      var e = await Promise.all([
          o("WAWebSchemaChat").getChatTable().count(),
          r("WAWebLidAwareContactsDB").count(),
          o("WAWebSchemaMessage").getMessageTable().count(),
        ]),
        t = e[0],
        n = e[1],
        a = e[2];
      return (
        (A = { chatDbSize: B(t), contactDbSize: B(n), messageDbSize: B(a) }),
        A
      );
    }
    async function O() {
      var e =
        await o("WAWebBackendApi").frontendSendAndReceive("getCollectionSizes");
      return {
        chatCollectionSize: B(e.chat),
        contactCollectionSize: B(e.contact),
        messageCollectionSize: B(e.message),
      };
    }
    function B(e) {
      return e > 1e3 ? Math.round(e / 100) * 100 : Math.round(e / 10) * 10;
    }
    ((l.isPerformanceMemoryApiSupported = f),
      (l.readMemoryInfo = h),
      (l.getMemoryTableRows = C),
      (l.setCurrentMemoryScenario = T),
      (l.uploadMemoryIfChatWasOpened = x),
      (l.uploadMemoryInfoOnChatClose = $),
      (l.roundIntForMetrics = B));
  },
  98,
);
