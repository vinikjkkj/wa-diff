__d(
  "WAWebWamMemoryStat",
  [
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebEnvironment",
    "WAWebLidAwareContactsDB",
    "WAWebMemoryStatWamEvent",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWebcMemoryStatWamEvent",
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
          (S = Math.max(S, t.usedJSHeapSize)),
          (R += t.usedJSHeapSize),
          L++,
          {
            uptime: Math.round((self.performance.now() - d) / 1e3),
            jsHeapSizeLimit: Math.round(t.jsHeapSizeLimit / 1e3 / 1e3),
            totalJsHeapSize: Math.round(t.totalJSHeapSize / 1e3 / 1e3),
            usedJsHeapSize: Math.round(t.usedJSHeapSize / 1e3 / 1e3),
          }
        );
    }
    function h() {
      var e = g();
      return e
        ? Promise.resolve([
            {
              label: "Main Window",
              memory: e.usedJsHeapSize,
              uptime: e.uptime,
            },
          ])
        : Promise.resolve();
    }
    var y = 5e3,
      C = 60,
      b = 2 * 1024,
      v = o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
      S = 0,
      R = 0,
      L = 0,
      E;
    function k(t) {
      try {
        var n;
        if (
          o("WAWebRuntimeEnvironmentUtils").isWorker() ||
          ((n = self.performance) == null ? void 0 : n.memory) == null
        )
          return;
        if (t !== v) {
          if (v !== o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE) {
            var r;
            ((r = E) == null || r.cancel(),
              (E = null),
              N(),
              (d = self.performance.now()));
          }
          ((v = t), $());
        }
        E == null && x();
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
    var I = null;
    function T(e) {
      (I != null && !I.equals(e) && D(), (I = e));
    }
    function D() {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var e = g();
        e != null &&
          A().then(function (t) {
            var n,
              r = new (o("WAWebWebcMemoryStatWamEvent").WebcMemoryStatWamEvent)(
                babelHelpers.extends(
                  {},
                  e,
                  {
                    scenario: o("WAWebWamEnumWebcScenarioType")
                      .WEBC_SCENARIO_TYPE.CHAT_NAVIGATION,
                    peakUsedJsHeapSize: Math.round(S / 1e3 / 1e3),
                    usedJsHeapSize: Math.round(R / L / 1e3 / 1e3),
                    isForeground:
                      ((n = self.document) == null
                        ? void 0
                        : n.visibilityState) === "visible",
                  },
                  t,
                  M,
                ),
              );
            (o("WAWebAppTracker").attachWAMAppContext(r), r.commit());
          });
      }
    }
    function x() {
      ((E = new (o("WAShiftTimer").ShiftTimer)(function () {
        var e = g();
        (e != null &&
          Math.abs(e.usedJsHeapSize - _) > p &&
          ((_ = e.usedJsHeapSize),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MemoryStat] js heap size: ",
                "Gb",
              ])),
            (e.usedJsHeapSize / 1024).toFixed(2),
          )),
          v === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE &&
            L !== 0 &&
            L % C === 0 &&
            (N(), $()),
          x());
      })),
        E.onOrAfter(y));
    }
    function $() {
      ((S = 0), (R = 0), (L = 0));
    }
    function P(e, t) {
      if (r("WAWebEnvironment").isWeb) {
        var n = new (o("WAWebMemoryStatWamEvent").MemoryStatWamEvent)({
          workingSetSize: e.usedJsHeapSize * 1e3,
          workingSetPeakSize: Math.round(S / 1e3),
          uptime: e.uptime,
          numMessages: t.messageCollectionSize,
          processType: "main",
        });
        (o("WAWebAppTracker").attachWAMAppContext(n), n.commit());
      }
    }
    async function N() {
      var e,
        t = await Promise.all([A(), w()]),
        n = t[0],
        a = t[1],
        i = r("WANullthrows")(g()),
        l = Math.round(R / L / 1e3 / 1e3),
        s = new (o("WAWebWebcMemoryStatWamEvent").WebcMemoryStatWamEvent)(
          babelHelpers.extends(
            {},
            i,
            {
              scenario: v,
              peakUsedJsHeapSize: Math.round(S / 1e3 / 1e3),
              usedJsHeapSize: l,
              isForeground:
                ((e = self.document) == null ? void 0 : e.visibilityState) ===
                "visible",
            },
            n,
            a,
          ),
        );
      (o("WAWebAppTracker").attachWAMAppContext(s), s.commit(), P(i, n));
      var d = (l / 1024).toFixed(2),
        p = (i.usedJsHeapSize / 1024).toFixed(2),
        _ = "average: " + d + "Gb, current: " + p + "Gb";
      if (!m && l > b) {
        m = !0;
        var f = b / 1024;
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
    var M = null;
    async function w() {
      var e = await Promise.all([
          o("WAWebSchemaChat").getChatTable().count(),
          r("WAWebLidAwareContactsDB").count(),
          o("WAWebSchemaMessage").getMessageTable().count(),
        ]),
        t = e[0],
        n = e[1],
        a = e[2];
      return (
        (M = { chatDbSize: F(t), contactDbSize: F(n), messageDbSize: F(a) }),
        M
      );
    }
    async function A() {
      var e =
        await o("WAWebBackendApi").frontendSendAndReceive("getCollectionSizes");
      return {
        chatCollectionSize: F(e.chat),
        contactCollectionSize: F(e.contact),
        messageCollectionSize: F(e.message),
      };
    }
    function F(e) {
      return e > 1e3 ? Math.round(e / 100) * 100 : Math.round(e / 10) * 10;
    }
    ((l.isPerformanceMemoryApiSupported = f),
      (l.getMemoryInfo = g),
      (l.getMemoryTableRows = h),
      (l.setCurrentMemoryScenario = k),
      (l.uploadMemoryIfChatWasOpened = T),
      (l.uploadMemoryInfoOnChatClose = D),
      (l.roundIntForMetrics = F));
  },
  98,
);
