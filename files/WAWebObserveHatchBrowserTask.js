__d(
  "WAWebObserveHatchBrowserTask",
  [
    "WALogger",
    "WAWebHatchBrowserTask",
    "WAWebHatchBrowserTaskCompletionSafety",
    "WAWebHatchBrowserTaskMessageData",
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
      _ = new WeakMap(),
      f = new WeakSet(),
      g = new Map(),
      h = new Set(),
      y = null,
      C = !1,
      b = null,
      v = 0,
      S = 0;
    function R() {
      return (x(), v);
    }
    function L(e) {
      return h.has(D(e));
    }
    function E(e, t) {
      var n;
      x();
      var r = D(e),
        o = (n = g.get(r)) != null ? n : new Set();
      g.set(r, o);
      var a = function () {
        return t();
      };
      return (
        o.add(a),
        X(a),
        function () {
          (o.delete(a), o.size === 0 && g.get(r) === o && g.delete(r));
        }
      );
    }
    function k(e, t, n) {
      x();
      var r = { onUpdate: t, onAcceptedTask: n, taskID: D(e) };
      return (
        m.add(r),
        V(r),
        y == null && N(),
        function () {
          if (m.delete(r) && m.size === 0) {
            var e;
            ((e = y) == null || e.stop(),
              (y = null),
              p.clear(),
              o(
                "WAWebHatchBrowserTaskCompletionSafety",
              ).clearBrowserTaskVersionHighWater());
          }
        }
      );
    }
    function I(e) {
      var t = D(e);
      h.add(t);
      var n = p.get(t);
      if (n != null) {
        var r = W(n);
        (U(t, r, _.get(n)), G(t, r));
      }
      Q(t);
    }
    function T(e) {
      return p.get(D(e));
    }
    function D(e) {
      return o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(e);
    }
    function x() {
      C ||
        ((C = !0),
        (b = $()),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = $();
          if (!(e == null || e === b)) {
            var t = b != null;
            ((b = e), t && P());
          }
        }));
    }
    function $() {
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
    function P() {
      v++;
      var e = y;
      ((y = null),
        e == null || e.stop(),
        p.clear(),
        h.clear(),
        o("WAWebHatchBrowserTaskSnapshotStore").resetBrowserTaskSnapshots(),
        o(
          "WAWebHatchBrowserTaskCompletionSafety",
        ).resetBrowserTaskCompletionSafety(),
        K(),
        e != null && m.size > 0 && y == null && N());
    }
    function N() {
      S++;
      var e = new (r("WAWebHatchVmSubscription"))({
        connect: o("WAWebHatchVmConnection").connectHatchVmApi,
        kind: "computer",
        onEvent: function (n) {
          return M(n, e);
        },
        onResubscribed: function () {
          w(e);
        },
        open: function (t, n) {
          return t.openEventSubscription(
            o("WAWebHatchVmTransport").JarvisPaths.COMPUTER_SUBSCRIBE,
            n,
          );
        },
      });
      ((y = e), e.start(), w(e));
    }
    function M(t, n) {
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
        F(r.tasks, n, "stream"));
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            y === e &&
            F(t.tasks, e, "refresh");
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      if (y === t) {
        var r = H(t);
        O(e);
        for (var o of e) if (!q(o, t, r, n)) return;
      }
    }
    function O(e) {
      for (var t of e)
        o(
          "WAWebHatchBrowserTaskCompletionSafety",
        ).raiseBrowserTaskVersionHighWater(D(t.browserTaskID), t.version);
    }
    function B(e, t, n) {
      return t != null && (e == null ? n === "refresh" : e < t);
    }
    function W(e) {
      return babelHelpers.extends({}, e, {
        displayState: "stopped",
        displayStatus: null,
        previewAvailable: !1,
        screenshotURL: null,
        status: "stopped",
      });
    }
    function q(e, t, n, r) {
      var o;
      if (y !== t || !n()) return !1;
      var a = D(e.browserTaskID);
      if (B(e.version, (o = p.get(a)) == null ? void 0 : o.version, r))
        return !0;
      var i = h.has(a) ? W(e) : e;
      U(a, i, e);
      var l = H(t, i);
      return (G(a, e, l), y !== t || !l() ? n() : (G(a, i), !0));
    }
    function U(e, t, n) {
      var r = p.get(e),
        o = r == null ? null : _.get(r);
      (o != null && o !== n && f.add(o), n != null && _.set(t, n), p.set(e, t));
    }
    function V(e) {
      var t = y,
        n = p.get(e.taskID);
      if (n != null) {
        var r = _.get(n),
          a = H(t, n);
        (r != null &&
          o("WAWebHatchBrowserTaskMessageData").browserTaskMessageTerminalState(
            r,
          ) != null &&
          z(e, r, a),
          a() && z(e, n));
      }
    }
    function H(e, t) {
      var n = v,
        r = S,
        o = t == null ? null : _.get(t);
      return function () {
        var t = o == null ? null : p.get(D(o.browserTaskID));
        return (
          n === v &&
          r === S &&
          (y == null || y === e) &&
          (o == null ||
            (!f.has(o) && (y == null || (t != null && _.get(t) === o))))
        );
      };
    }
    function G(e, t, n) {
      for (var r of Array.from(m)) r.taskID === e && z(r, t, n);
    }
    function z(e, t, n) {
      try {
        j(e, t, n);
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
    function j(e, t, n) {
      m.has(e) &&
        (n == null
          ? p.get(e.taskID) === t && e.onUpdate(t)
          : n() && (e.onAcceptedTask == null || e.onAcceptedTask(t, n)));
    }
    function K() {
      for (var e of Array.from(g.keys())) Q(e);
    }
    function Q(e) {
      var t = g.get(e);
      for (var n of Array.from(t != null ? t : []))
        t != null && t.has(n) && X(n);
    }
    function X(e) {
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
    ((l.getHatchBrowserTaskAccountGeneration = R),
      (l.isHatchBrowserTaskLocallyStopped = L),
      (l.subscribeToHatchBrowserTaskLocalStop = E),
      (l.observeHatchBrowserTask = k),
      (l.markHatchBrowserTaskStopped = I),
      (l.getObservedHatchBrowserTask = T),
      (l.normalizedTaskID = D));
  },
  98,
);
