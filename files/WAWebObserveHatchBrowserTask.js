__d(
  "WAWebObserveHatchBrowserTask",
  [
    "WALogger",
    "WAWebHatchBrowserTask",
    "WAWebHatchVmConnection",
    "WAWebHatchVmSubscription",
    "WAWebHatchVmTransport",
    "WAWebRequestHatchBrowserTasks",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = new Set(),
      m = new Map(),
      p = new Set(),
      _ = null;
    function f(e, t) {
      var n = { onUpdate: t, taskID: y(e) };
      d.add(n);
      var r = m.get(n.taskID);
      return (
        r != null && I(n, r),
        _ == null && C(),
        function () {
          if (d.delete(n) && d.size === 0) {
            var e;
            ((e = _) == null || e.stop(), (_ = null), m.clear());
          }
        }
      );
    }
    function g(e) {
      var t = y(e);
      p.add(t);
      var n = m.get(t);
      if (n != null) {
        var r = E(n);
        (m.set(t, r), k(t, r));
      }
    }
    function h(e) {
      return m.get(y(e));
    }
    function y(e) {
      return e.slice(e.lastIndexOf(":") + 1);
    }
    function C() {
      var e = new (r("WAWebHatchVmSubscription"))({
        connect: o("WAWebHatchVmConnection").connectHatchVmApi,
        kind: "computer",
        onEvent: function (n) {
          return b(n, e);
        },
        onResubscribed: function () {
          v(e);
        },
        open: function (t, n) {
          return t.openEventSubscription(
            o("WAWebHatchVmTransport").JarvisPaths.COMPUTER_SUBSCRIBE,
            n,
          );
        },
      });
      ((_ = e), e.start(), v(e));
    }
    function b(t, n) {
      var r = o("WAWebHatchBrowserTask").decodeHatchComputerEvent(
        t.name,
        t.payload,
      );
      if (r == null) {
        t.name === o("WAWebHatchBrowserTask").COMPUTER_UPDATED &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-computer/subscription-undecodable",
              ])),
          );
        return;
      }
      (r.malformedCount > 0 &&
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-computer/subscription-dropped malformed=",
              "",
            ])),
          r.malformedCount,
        ),
        R(r.tasks, n));
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebRequestHatchBrowserTasks")
            .requestHatchBrowserTasks()
            .catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-computer/refresh-failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                null
              );
            });
          (t == null ? void 0 : t.kind) === "ok" && _ === e && R(t.tasks, e);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      for (var n of e) {
        if (_ !== t) return;
        var r = y(n.browserTaskID),
          o = m.get(r);
        if (!L(n.version, o == null ? void 0 : o.version)) {
          var a = p.has(r) ? E(n) : n;
          (m.set(r, a), k(r, a));
        }
      }
    }
    function L(e, t) {
      return e != null && t != null && e < t;
    }
    function E(e) {
      return babelHelpers.extends({}, e, {
        displayState: "stopped",
        displayStatus: null,
        previewAvailable: !1,
        screenshotURL: null,
        status: "stopped",
      });
    }
    function k(e, t) {
      for (var n of Array.from(d)) n.taskID === e && d.has(n) && I(n, t);
    }
    function I(e, t) {
      try {
        e.onUpdate(t);
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-computer/observer-failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    ((l.observeHatchBrowserTask = f),
      (l.markHatchBrowserTaskStopped = g),
      (l.getObservedHatchBrowserTask = h),
      (l.normalizedTaskID = y));
  },
  98,
);
