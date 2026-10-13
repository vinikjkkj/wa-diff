__d(
  "WAWebObserveHatchBrowserTask",
  [
    "WALogger",
    "WAWebHatchBrowserTask",
    "WAWebHatchBrowserTaskCompletionSafety",
    "WAWebHatchBrowserTaskSnapshotStore",
    "WAWebHatchBrowserTaskState",
    "WAWebHatchLinkedStatusManager",
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
      d,
      m = new Set(),
      p = new Map(),
      _ = new Map(),
      f = new Set(),
      g = null,
      h = !1,
      y = null,
      C = 0;
    function b() {
      return (I(), C);
    }
    function v(e) {
      return f.has(k(e));
    }
    function S(e, t) {
      var n;
      I();
      var r = k(e),
        o = (n = _.get(r)) != null ? n : new Set();
      _.set(r, o);
      var a = function () {
        return t();
      };
      return (
        o.add(a),
        U(a),
        function () {
          (o.delete(a), o.size === 0 && _.get(r) === o && _.delete(r));
        }
      );
    }
    function R(e, t) {
      I();
      var n = { onUpdate: t, taskID: k(e) };
      m.add(n);
      var r = p.get(n.taskID);
      return (
        r != null && B(n, r),
        g == null && x(),
        function () {
          if (m.delete(n) && m.size === 0) {
            var e;
            ((e = g) == null || e.stop(),
              (g = null),
              p.clear(),
              o(
                "WAWebHatchBrowserTaskCompletionSafety",
              ).clearBrowserTaskVersionHighWater());
          }
        }
      );
    }
    function L(e) {
      var t = k(e);
      f.add(t);
      var n = p.get(t);
      if (n != null) {
        var r = F(n);
        (p.set(t, r), O(t, r));
      }
      q(t);
    }
    function E(e) {
      return p.get(k(e));
    }
    function k(e) {
      return o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e);
    }
    function I() {
      h ||
        ((h = !0),
        (y = T()),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = T();
          if (!(e == null || e === y)) {
            var t = y != null;
            ((y = e), t && D());
          }
        }));
    }
    function T() {
      var e,
        t =
          (e = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
            ? void 0
            : e.channelFbid;
      return (function (e) {
        return e === "linked"
          ? t == null
            ? null
            : "linked:" + t
          : e === "unlinked"
            ? "unlinked"
            : null;
      })(r("WAWebHatchLinkedStatusManager").getLinkedStatusState());
    }
    function D() {
      C++;
      var e = g;
      ((g = null),
        e == null || e.stop(),
        p.clear(),
        f.clear(),
        o("WAWebHatchBrowserTaskSnapshotStore").resetBrowserTaskSnapshots(),
        o(
          "WAWebHatchBrowserTaskCompletionSafety",
        ).resetBrowserTaskCompletionSafety(),
        W(),
        e != null && m.size > 0 && g == null && x());
    }
    function x() {
      var e = new (r("WAWebHatchVmSubscription"))({
        connect: o("WAWebHatchVmConnection").connectHatchVmApi,
        kind: "computer",
        onEvent: function (n) {
          return $(n, e);
        },
        onResubscribed: function () {
          P(e);
        },
        open: function (t, n) {
          return t.openEventSubscription(
            o("WAWebHatchVmTransport").JarvisPaths.COMPUTER_SUBSCRIBE,
            n,
          );
        },
      });
      ((g = e), e.start(), P(e));
    }
    function $(t, n) {
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
        M(r.tasks, n, "stream"));
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebRequestHatchBrowserTasks")
            .requestHatchBrowserTasks()
            .catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-computer/refresh-failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                null
              );
            });
          (t == null ? void 0 : t.kind) === "ok" &&
            g === e &&
            M(t.tasks, e, "refresh");
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      if (g === t) {
        w(e);
        for (var r of e) {
          if (g !== t) return;
          var o = k(r.browserTaskID),
            a = p.get(o);
          if (!A(r.version, a == null ? void 0 : a.version, n)) {
            var i = f.has(o) ? F(r) : r;
            (p.set(o, i), O(o, i));
          }
        }
      }
    }
    function w(e) {
      for (var t of e)
        o(
          "WAWebHatchBrowserTaskCompletionSafety",
        ).raiseBrowserTaskVersionHighWater(k(t.browserTaskID), t.version);
    }
    function A(e, t, n) {
      return t != null && (e == null ? n === "refresh" : e < t);
    }
    function F(e) {
      return babelHelpers.extends({}, e, {
        displayState: "stopped",
        displayStatus: null,
        previewAvailable: !1,
        screenshotURL: null,
        status: "stopped",
      });
    }
    function O(e, t) {
      for (var n of Array.from(m)) n.taskID === e && m.has(n) && B(n, t);
    }
    function B(e, t) {
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
    function W() {
      for (var e of Array.from(_.keys())) q(e);
    }
    function q(e) {
      var t = _.get(e);
      for (var n of Array.from(t != null ? t : []))
        t != null && t.has(n) && U(n);
    }
    function U(e) {
      try {
        e();
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-computer/stop-observer-failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    ((l.getHatchBrowserTaskAccountGeneration = b),
      (l.isHatchBrowserTaskLocallyStopped = v),
      (l.subscribeToHatchBrowserTaskLocalStop = S),
      (l.observeHatchBrowserTask = R),
      (l.markHatchBrowserTaskStopped = L),
      (l.getObservedHatchBrowserTask = E),
      (l.normalizedTaskID = k));
  },
  98,
);
