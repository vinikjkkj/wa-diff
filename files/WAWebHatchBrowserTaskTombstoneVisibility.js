__d(
  "WAWebHatchBrowserTaskTombstoneVisibility",
  [
    "JSResource",
    "Promise",
    "WALogger",
    "WAWebHatchBrowserTaskDisplay",
    "WAWebNoop",
    "WAWebUnifiedResponseUtils",
    "WAWebViewMode.flow",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = r("JSResource")("WAWebObserveHatchBrowserTask").__setRef(
        "WAWebHatchBrowserTaskTombstoneVisibility",
      ),
      m = new WeakMap(),
      p = new WeakMap(),
      _ = new WeakMap(),
      f = [],
      g = new WeakMap(),
      h = !1,
      y = 1;
    function C(e, t, n, r, o, a) {
      var i = g.get(e);
      if (!o || r == null) {
        b(e, t, n, r, i);
        return;
      }
      if (!(e.unifiedResponse !== n || !I(n, t.browserTaskId))) {
        if (i != null && i.generationKey === r) {
          v(e, t, r, a, i);
          return;
        }
        S(e, t, n, r, a, i);
      }
    }
    function b(e, t, n, r, o) {
      o == null ||
        o.unifiedResponse !== n ||
        (r != null && o.generationKey !== r) ||
        (k(e, o),
        R(function () {
          _.get(e) === o.epoch &&
            e.unifiedResponse === o.unifiedResponse &&
            T(e, t, o.generationKey, !1, !1, r != null);
        }));
    }
    function v(e, t, n, r, o) {
      var a = ++o.controllerEpoch;
      R(function () {
        g.get(e) === o &&
          o.controllerEpoch === a &&
          e.unifiedResponse === o.unifiedResponse &&
          T(e, t, n, !0, r);
      });
    }
    function S(e, t, n, o, a, i) {
      i != null && k(e, i);
      var l = {
          controllerEpoch: 1,
          epoch: y++,
          generationKey: o,
          stopWatchingMsg: r("WAWebNoop"),
          unifiedResponse: n,
        },
        s = function () {
          g.get(e) === l &&
            (k(e, l),
            R(function () {
              _.get(e) === l.epoch && T(e, t, o, !1, !1, !1);
            }));
        },
        u = function () {
          g.get(e) === l && k(e, l);
        };
      (e.on("change:botEditType", s),
        e.on("change:isForwarded", s),
        e.on("change:unifiedResponse", s),
        e.on("remove", u),
        (l.stopWatchingMsg = function () {
          (e.off("change:botEditType", s),
            e.off("change:isForwarded", s),
            e.off("change:unifiedResponse", s),
            e.off("remove", u));
        }),
        _.set(e, l.epoch),
        g.set(e, l),
        R(function () {
          g.get(e) === l &&
            l.controllerEpoch === 1 &&
            e.unifiedResponse === l.unifiedResponse &&
            T(e, t, o, !0, a);
        }));
    }
    function R(e) {
      (f.push(e),
        !h && ((h = !0), (c || (c = n("Promise"))).resolve().then(L)));
    }
    function L() {
      h = !1;
      for (var e = f.shift(); e != null; ) {
        try {
          e();
        } catch (e) {
          E(e);
        }
        e = f.shift();
      }
    }
    function E(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-browser-task/tombstone-visibility-dispatch-failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("hatch-browser-task-tombstone-visibility-dispatch-failed");
    }
    function k(e, t) {
      g.get(e) === t && (g.delete(e), t.stopWatchingMsg());
    }
    function I(e, t) {
      var n,
        r,
        a,
        i = o("WAWebUnifiedResponseUtils").highestVersionBrowserTasks(e);
      if (
        ((n = i.footer_sections) != null ? n : []).length > 0 ||
        ((r = i.embedded_screens) != null ? r : []).length > 0 ||
        ((a = i.nested_responses) != null ? a : []).length > 0 ||
        i.sections.some(function (e) {
          var t = e.view_model;
          return t == null || (t.primitive == null && t.primitives == null);
        })
      )
        return !1;
      var l = i.sections.flatMap(function (e) {
        return o("WAWebUnifiedResponseUtils").getPrimitives(e.view_model);
      });
      return (
        l.length === 1 &&
        (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.__typename === "GenAIBrowserTaskPrimitive" &&
            "browser_task_id" in e
          ) {
            var n = e.browser_task_id;
            return typeof n == "string" && n.trim() === t;
          }
          return !1;
        })(l[0])
      );
    }
    function T(e, t, n, r, o, a) {
      a === void 0 && (a = !0);
      var i = p.get(e);
      if (!r) {
        D(e, n, a, i);
        return;
      }
      if (w(e, n)) {
        x(e, n, i);
        return;
      }
      if (i != null && i.generationKey === n) {
        $(e, t, o, i);
        return;
      }
      P(e, t, n, o, i);
    }
    function D(e, t, n, r) {
      (n && A(e, t), r != null && r.generationKey === t && U(e, r));
    }
    function x(e, t, n) {
      n != null && n.generationKey !== t && U(e, n);
    }
    function $(e, t, n, o) {
      !n && o.recoveryObservationStatus !== "final"
        ? ((o.recoveryObservationStatus = "final"),
          o.stopObserving(),
          (o.stopObserving = r("WAWebNoop")))
        : n &&
          o.recoveryObservationStatus === "idle" &&
          M(e, o, t, babelHelpers.extends({}, t, { state: String(t.state) }));
    }
    function P(e, t, a, i, l) {
      var s = !1,
        u = e.viewMode;
      if (l != null) {
        var d = l.didHide
          ? o("WAWebViewMode.flow").ViewModeType.HIDDEN
          : l.previousViewMode;
        if (e.viewMode !== d) {
          q(e, l);
          return;
        }
        ((s = l.didHide), (u = l.previousViewMode), q(e, l));
      } else if (e.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN)
        return;
      var m = babelHelpers.extends({}, t, { state: String(t.state) }),
        _ = {
          didHide: s,
          generationKey: a,
          isChangingViewMode: !1,
          previousViewMode: u,
          recoveryObservationStatus: i ? "idle" : "final",
          stopObserving: r("WAWebNoop"),
          stopWatchingMsg: r("WAWebNoop"),
        };
      p.set(e, _);
      var f = function () {
          q(e, _);
        },
        g = function () {
          _.isChangingViewMode || q(e, _);
        };
      (e.on("change:viewMode", g),
        e.on("remove", f),
        (_.stopWatchingMsg = function () {
          (e.off("change:viewMode", g), e.off("remove", f));
        }),
        i
          ? (M(e, _, t, m),
            (c || (c = n("Promise")))
              .resolve()
              .then(function () {
                return R(function () {
                  return N(e, _);
                });
              })
              .catch(E))
          : N(e, _));
    }
    function N(e, t) {
      p.get(e) !== t ||
        t.didHide ||
        ((t.didHide = !0),
        W(e, t, o("WAWebViewMode.flow").ViewModeType.HIDDEN));
    }
    function M(e, t, n, a) {
      var i = { isActive: !0, stop: null };
      ((t.recoveryObservationStatus = "observing"),
        (t.stopObserving = function () {
          return B(i);
        }));
      var l = function (u) {
          if (!i.isActive || p.get(e) !== t) {
            B(i);
            return;
          }
          var l = u.observeHatchBrowserTask(n.browserTaskId, function (n) {
            if (!i.isActive || p.get(e) !== t) {
              B(i);
              return;
            }
            if (!O(n.version, a.version))
              try {
                var l = o(
                  "WAWebHatchBrowserTaskDisplay",
                ).browserTaskCardDisplay(a, n);
                l.isTombstone
                  ? l.canRecoverFromTombstone ||
                    ((t.recoveryObservationStatus = "final"),
                    B(i),
                    (t.stopObserving = r("WAWebNoop")))
                  : U(e, t);
              } catch (n) {
                (o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-browser-task/observer-update-failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("hatch-browser-task-observer-update-failed"),
                  U(e, t));
              }
          });
          !i.isActive || p.get(e) !== t ? l() : (i.stop = l);
        },
        c = function (a) {
          d.load()
            .then(l)
            .catch(function (n) {
              if (!(!i.isActive || p.get(e) !== t)) {
                if (a) {
                  c(!1);
                  return;
                }
                (F(e, t.generationKey),
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-browser-task/observer-load-failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(n))
                    .sendLogs("hatch-browser-task-observer-load-failed"),
                  U(e, t));
              }
            });
        };
      c(!0);
    }
    function w(e, t) {
      var n;
      return ((n = m.get(e)) == null ? void 0 : n.has(t)) === !0;
    }
    function A(e, t) {
      var n = m.get(e);
      (n == null || n.delete(t),
        (n == null ? void 0 : n.size) === 0 && m.delete(e));
    }
    function F(e, t) {
      var n = m.get(e);
      (n == null && ((n = new Set()), m.set(e, n)), n.add(t));
    }
    function O(e, t) {
      return e != null && t != null && e < t;
    }
    function B(e) {
      if (e.isActive) {
        e.isActive = !1;
        var t = e.stop;
        ((e.stop = null), t == null || t());
      }
    }
    function W(e, t, n) {
      t.isChangingViewMode = !0;
      try {
        e.set("viewMode", n);
      } finally {
        t.isChangingViewMode = !1;
      }
    }
    function q(e, t) {
      p.get(e) === t && (p.delete(e), t.stopObserving(), t.stopWatchingMsg());
    }
    function U(e, t) {
      p.get(e) === t &&
        (p.delete(e),
        t.stopObserving(),
        t.stopWatchingMsg(),
        t.didHide &&
          e.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN &&
          W(e, t, t.previousViewMode));
    }
    ((l.WAWebObserveHatchBrowserTaskResource = d),
      (l.updateBrowserTaskTombstoneVisibility = C),
      (l.updateHatchBrowserTaskTombstoneVisibility = T));
  },
  98,
);
