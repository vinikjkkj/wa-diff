__d(
  "WAWebWamMemoryStat",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebLidAwareContactsDB",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWebcMemoryStatWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = self.performance.now(),
      p = !1,
      _ = 100,
      f = 0;
    function g() {
      var e;
      return ((e = self.performance) == null ? void 0 : e.memory) != null;
    }
    function h() {
      var e,
        t = (e = self.performance) == null ? void 0 : e.memory;
      if (t)
        return (
          (R = Math.max(R, t.usedJSHeapSize)),
          (L += t.usedJSHeapSize),
          E++,
          {
            uptime: Math.round((self.performance.now() - m) / 1e3),
            jsHeapSizeLimit: Math.round(t.jsHeapSizeLimit / 1e3 / 1e3),
            totalJsHeapSize: Math.round(t.totalJSHeapSize / 1e3 / 1e3),
            usedJsHeapSize: Math.round(t.usedJSHeapSize / 1e3 / 1e3),
          }
        );
    }
    function y() {
      var e = h();
      return e
        ? (d || (d = n("Promise"))).resolve([
            {
              label: "Main Window",
              memory: e.usedJsHeapSize,
              uptime: e.uptime,
            },
          ])
        : (d || (d = n("Promise"))).resolve();
    }
    var C = 5e3,
      b = 60,
      v = 2 * 1024,
      S = o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
      R = 0,
      L = 0,
      E = 0,
      k;
    function I(t) {
      try {
        var n;
        if (
          o("WAWebRuntimeEnvironmentUtils").isWorker() ||
          ((n = self.performance) == null ? void 0 : n.memory) == null
        )
          return;
        if (t !== S) {
          if (S !== o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE) {
            var r;
            ((r = k) == null || r.cancel(),
              (k = null),
              N(),
              (m = self.performance.now()));
          }
          ((S = t), P());
        }
        k == null && $();
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
    var T = null;
    function D(e) {
      (T != null && !T.equals(e) && x(), (T = e));
    }
    function x() {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var e = h();
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
                    peakUsedJsHeapSize: Math.round(R / 1e3 / 1e3),
                    usedJsHeapSize: Math.round(L / E / 1e3 / 1e3),
                    isForeground:
                      ((n = self.document) == null
                        ? void 0
                        : n.visibilityState) === "visible",
                  },
                  t,
                  w,
                ),
              );
            (o("WAWebAppTracker").attachWAMAppContext(r), r.commit());
          });
      }
    }
    function $() {
      ((k = new (o("WAShiftTimer").ShiftTimer)(function () {
        var e = h();
        (e != null &&
          Math.abs(e.usedJsHeapSize - f) > _ &&
          ((f = e.usedJsHeapSize),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MemoryStat] js heap size: ",
                "Gb",
              ])),
            (e.usedJsHeapSize / 1024).toFixed(2),
          )),
          S === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE &&
            E !== 0 &&
            E % b === 0 &&
            (N(), P()),
          $());
      })),
        k.onOrAfter(C));
    }
    function P() {
      ((R = 0), (L = 0), (E = 0));
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield (d || (d = n("Promise"))).all([O(), A()]),
            a = t[0],
            i = t[1],
            l = r("WANullthrows")(h()),
            s = Math.round(L / E / 1e3 / 1e3),
            m = new (o("WAWebWebcMemoryStatWamEvent").WebcMemoryStatWamEvent)(
              babelHelpers.extends(
                {},
                l,
                {
                  scenario: S,
                  peakUsedJsHeapSize: Math.round(R / 1e3 / 1e3),
                  usedJsHeapSize: s,
                  isForeground:
                    ((e = self.document) == null
                      ? void 0
                      : e.visibilityState) === "visible",
                },
                a,
                i,
              ),
            );
          (o("WAWebAppTracker").attachWAMAppContext(m), m.commit());
          var _ = (s / 1024).toFixed(2),
            f = (l.usedJsHeapSize / 1024).toFixed(2),
            g = "average: " + _ + "Gb, current: " + f + "Gb";
          if (!p && s > v) {
            p = !0;
            var y = v / 1024;
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MemoryStat] memory usage exceeded ",
                    "Gb: ",
                    "",
                  ])),
                y,
                g,
              )
              .sendLogs("memory-usage-exceeded-" + y + "gb", {
                sampling: 0.01,
              });
          } else {
            var C;
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[MemoryStat] memory usage: ",
                  " (cores: ",
                  ")",
                ])),
              g,
              (C = self.navigator) == null ? void 0 : C.hardwareConcurrency,
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    var w = null;
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (d || (d = n("Promise"))).all([
              o("WAWebSchemaChat").getChatTable().count(),
              r("WAWebLidAwareContactsDB").count(),
              o("WAWebSchemaMessage").getMessageTable().count(),
            ]),
            t = e[0],
            a = e[1],
            i = e[2];
          return (
            (w = {
              chatDbSize: W(t),
              contactDbSize: W(a),
              messageDbSize: W(i),
            }),
            w
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "getCollectionSizes",
            );
          return {
            chatCollectionSize: W(e.chat),
            contactCollectionSize: W(e.contact),
            messageCollectionSize: W(e.message),
          };
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return e > 1e3 ? Math.round(e / 100) * 100 : Math.round(e / 10) * 10;
    }
    ((l.isPerformanceMemoryApiSupported = g),
      (l.getMemoryInfo = h),
      (l.getMemoryTableRows = y),
      (l.setCurrentMemoryScenario = I),
      (l.uploadMemoryIfChatWasOpened = D),
      (l.uploadMemoryInfoOnChatClose = x),
      (l.roundIntForMetrics = W));
  },
  98,
);
