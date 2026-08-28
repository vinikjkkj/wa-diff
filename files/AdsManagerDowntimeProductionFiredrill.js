__d(
  "AdsManagerDowntimeProductionFiredrill",
  [
    "AdsManagerDowntimeProductionFiredrillConfig",
    "AdsManagerQPLUserFlowLogger",
    "FBLogger",
    "QPLEvent",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "WebDriverConfig",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 864;
    (s || (s = r("QuickPerformanceLogger"))).addListener({
      onAnnotation: function (n, a, i, l) {
        (e || (e = o("QPLEvent"))).getMarkerId(n) === 270218338 &&
          (i === "failure_type" && (l == null || typeof l == "string")
            ? o("AdsManagerQPLUserFlowLogger").forEachMarker(
                r("qpl")._(270218812, "2286"),
                function (e, t, n) {
                  r("QPLUserFlow").addAnnotations(
                    n,
                    { string: { failure_type: l } },
                    { instanceKey: t },
                  );
                },
              )
            : i === "inferred_product_types_set" &&
              (l == null || Array.isArray(l)) &&
              o("AdsManagerQPLUserFlowLogger").forEachMarker(
                r("qpl")._(270218812, "2286"),
                function (e, t, n) {
                  r("QPLUserFlow").addAnnotations(
                    n,
                    {
                      string_array: {
                        inferred_product_types_set:
                          l == null
                            ? void 0
                            : l.map(function (e) {
                                return String(e);
                              }),
                      },
                    },
                    { instanceKey: t },
                  );
                },
              ));
      },
    });
    function c() {
      var e = [];
      return (
        f() &&
          (p() &&
            (r("FBLogger")("ads").mustfix(
              "server-error introduced by the Uptime Fire Drill",
            ),
            e.push("downtime_production_firedrill__uptime_01")),
          _() &&
            (r("FBLogger")("ads").mustfix(
              "client-error introduced by the Uptime Fire Drill",
            ),
            e.push("downtime_production_firedrill__uptime_02")),
          m() && e.push("downtime_production_firedrill__uptime_03"),
          e.length > 0 &&
            e.push(
              "downtime_production_firedrill__654f8564-856b-4b39-a92e-a18908496e7a",
            )),
        e
      );
    }
    function d() {
      var e = r("justknobx")._("569");
      return e === u;
    }
    function m() {
      return r("gkx")("21972");
    }
    function p() {
      return (
        !o("AdsManagerDowntimeProductionFiredrillConfig")
          .isSimulatingServerIssue || r("gkx")("21973")
      );
    }
    function _() {
      var e = d(),
        t = r("gkx")("21974");
      return (
        e &&
          !t &&
          r("FBLogger")("ads_manager_firedrill", "client-error").warn(
            "client-error is introduced by the fire drill for JS diff",
          ),
        !e || t
      );
    }
    function f() {
      return r("WebDriverConfig").isJestE2ETestRun &&
        r("WebDriverConfig").testPath != null &&
        !r("WebDriverConfig").testPath.includes("adsPEDowntimeProduction")
        ? !1
        : o("AdsManagerDowntimeProductionFiredrillConfig").isActive;
    }
    function g(e) {
      return !f() || (p() && _()) ? e : 3;
    }
    function h(e, t, n) {
      var a = ["ADVANTAGE_PLUS_CREATIVE_SE"];
      if (!f() || (p() && _())) return e;
      var i = r("justknobx")._("2383");
      if (i === -1) return e;
      if (i >= 0 && i < a.length) {
        var l,
          u = (s || (s = r("QuickPerformanceLogger"))).getMarker(t, n);
        if (u == null) return e;
        var c =
          (l = u.annotations) == null || (l = l.string_array) == null
            ? void 0
            : l.inferred_product_types_set;
        if (c == null || !c.includes(a[i])) return e;
      }
      return (
        o("AdsManagerQPLUserFlowLogger").forEachMarker(
          r("qpl")._(270218812, "2286"),
          function (e, t, n) {
            r("QPLUserFlow").addPoint(n, "PUBLISH_REQUEST/FRAGMENT_COMPLETED", {
              data: { int: { error_code: 1359206 } },
              instanceKey: t,
            });
          },
        ),
        3
      );
    }
    var y = [
      {
        real: r("qpl")._(270207765, "2118"),
        synthetic: r("qpl")._(270207951, "450"),
        shouldLog: function () {
          return f() && p();
        },
      },
      {
        real: r("qpl")._(270207765, "2118"),
        synthetic: r("qpl")._(270210204, "451"),
        shouldLog: function () {
          return f() && _();
        },
      },
      {
        real: r("qpl")._(270207765, "2118"),
        synthetic: r("qpl")._(270214543, "452"),
        shouldLog: function () {
          return f() && m();
        },
      },
    ];
    function C(t, n, a, i) {
      for (var l of y)
        if (l.real === t)
          try {
            l.shouldLog() &&
              (s || (s = r("QuickPerformanceLogger"))).markEvent(
                l.synthetic,
                n,
                a,
                i,
              );
          } catch (t) {
            r("FBLogger")("ads").mustfix(
              "Mirror event %s raised exception %s",
              (e || (e = o("QPLEvent"))).getMarkerId(l.synthetic),
              r("getErrorSafe")(t).message,
            );
          }
    }
    var b = [
        {
          real: r("qpl")._(270230822, "8871"),
          synthetic: r("qpl")._(270212485, "506"),
          action: function (t) {
            return !f() || p()
              ? t
              : (r("FBLogger")("ads").mustfix(
                  "server-error introduced by the Ads Manager Fire Drill: AM_MANAGEMENT_PAGE_LOAD",
                ),
                3);
          },
        },
      ],
      v = [
        {
          real: r("qpl")._(270230822, "8871"),
          synthetic: r("qpl")._(270221100, "47"),
          action: g,
        },
        {
          real: r("qpl")._(270219248, "6605"),
          synthetic: r("qpl")._(270210485, "101"),
          action: g,
        },
        {
          real: r("qpl")._(270218338, "7144"),
          synthetic: r("qpl")._(270218812, "2286"),
          action: function (t, n) {
            return h(t, r("qpl")._(270218338, "7144"), n);
          },
        },
      ],
      S = r("justknobx")._("1193") ? b.concat(v) : b;
    ((l.getFakeSignals = c),
      (l.isSimulatingClientIssue = d),
      (l.isCollectingGatekeeperFakeSignal = m),
      (l.markMirroredEvent = C),
      (l.mirroredUserFlowScenarios = S));
  },
  98,
);
