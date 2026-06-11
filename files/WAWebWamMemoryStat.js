__d(
  "WAWebWamMemoryStat",
  [
    "Promise",
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
          (E = Math.max(E, t.usedJSHeapSize)),
          (k += t.usedJSHeapSize),
          I++,
          C(t)
        );
    }
    function y() {
      var e,
        t = (e = self.performance) == null ? void 0 : e.memory;
      if (t) return C(t);
    }
    function C(e) {
      return {
        uptime: Math.round((self.performance.now() - m) / 1e3),
        jsHeapSizeLimit: Math.round(e.jsHeapSizeLimit / 1e3 / 1e3),
        totalJsHeapSize: Math.round(e.totalJSHeapSize / 1e3 / 1e3),
        usedJsHeapSize: Math.round(e.usedJSHeapSize / 1e3 / 1e3),
      };
    }
    function b() {
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
    var v = 5e3,
      S = 60,
      R = 2 * 1024,
      L = o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
      E = 0,
      k = 0,
      I = 0,
      T;
    function D(t) {
      try {
        var n;
        if (
          o("WAWebRuntimeEnvironmentUtils").isWorker() ||
          ((n = self.performance) == null ? void 0 : n.memory) == null
        )
          return;
        if (t !== L) {
          if (L !== o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE) {
            var r;
            ((r = T) == null || r.cancel(),
              (T = null),
              A(),
              (m = self.performance.now()));
          }
          ((L = t), M());
        }
        T == null && N();
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
    var x = null;
    function $(e) {
      (x != null && !x.equals(e) && P(), (x = e));
    }
    function P() {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var e = h();
        e != null &&
          q().then(function (t) {
            var n,
              r = new (o("WAWebWebcMemoryStatWamEvent").WebcMemoryStatWamEvent)(
                babelHelpers.extends(
                  {},
                  e,
                  {
                    scenario: o("WAWebWamEnumWebcScenarioType")
                      .WEBC_SCENARIO_TYPE.CHAT_NAVIGATION,
                    peakUsedJsHeapSize: Math.round(E / 1e3 / 1e3),
                    usedJsHeapSize: Math.round(k / I / 1e3 / 1e3),
                    isForeground:
                      ((n = self.document) == null
                        ? void 0
                        : n.visibilityState) === "visible",
                  },
                  t,
                  O,
                ),
              );
            (o("WAWebAppTracker").attachWAMAppContext(r), r.commit());
          });
      }
    }
    function N() {
      ((T = new (o("WAShiftTimer").ShiftTimer)(function () {
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
          L === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE &&
            I !== 0 &&
            I % S === 0 &&
            (A(), M()),
          N());
      })),
        T.onOrAfter(v));
    }
    function M() {
      ((E = 0), (k = 0), (I = 0));
    }
    function w(e, t) {
      if (r("WAWebEnvironment").isWeb) {
        var n = new (o("WAWebMemoryStatWamEvent").MemoryStatWamEvent)({
          workingSetSize: e.usedJsHeapSize * 1e3,
          workingSetPeakSize: Math.round(E / 1e3),
          uptime: e.uptime,
          numMessages: t.messageCollectionSize,
          processType: "main",
        });
        (o("WAWebAppTracker").attachWAMAppContext(n), n.commit());
      }
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield (d || (d = n("Promise"))).all([q(), B()]),
            a = t[0],
            i = t[1],
            l = r("WANullthrows")(h()),
            s = Math.round(k / I / 1e3 / 1e3),
            m = new (o("WAWebWebcMemoryStatWamEvent").WebcMemoryStatWamEvent)(
              babelHelpers.extends(
                {},
                l,
                {
                  scenario: L,
                  peakUsedJsHeapSize: Math.round(E / 1e3 / 1e3),
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
          (o("WAWebAppTracker").attachWAMAppContext(m), m.commit(), w(l, a));
          var _ = (s / 1024).toFixed(2),
            f = (l.usedJsHeapSize / 1024).toFixed(2),
            g = "average: " + _ + "Gb, current: " + f + "Gb";
          if (!p && s > R) {
            p = !0;
            var y = R / 1024;
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
        F.apply(this, arguments)
      );
    }
    var O = null;
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (d || (d = n("Promise"))).all([
              o("WAWebSchemaChat").getChatTable().count(),
              r("WAWebLidAwareContactsDB").count(),
              o("WAWebSchemaMessage").getMessageTable().count(),
            ]),
            t = e[0],
            a = e[1],
            i = e[2];
          return (
            (O = {
              chatDbSize: V(t),
              contactDbSize: V(a),
              messageDbSize: V(i),
            }),
            O
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "getCollectionSizes",
            );
          return {
            chatCollectionSize: V(e.chat),
            contactCollectionSize: V(e.contact),
            messageCollectionSize: V(e.message),
          };
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return e > 1e3 ? Math.round(e / 100) * 100 : Math.round(e / 10) * 10;
    }
    ((l.isPerformanceMemoryApiSupported = g),
      (l.getMemoryInfo = h),
      (l.readMemoryInfo = y),
      (l.getMemoryTableRows = b),
      (l.setCurrentMemoryScenario = D),
      (l.uploadMemoryIfChatWasOpened = $),
      (l.uploadMemoryInfoOnChatClose = P),
      (l.roundIntForMetrics = V));
  },
  98,
);
