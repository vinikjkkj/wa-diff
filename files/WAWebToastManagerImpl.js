__d(
  "WAWebToastManagerImpl",
  [
    "WAAbortError",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebSetRefCache",
    "WAWebToastManager",
    "WAWebVelocityTransitionGroup",
    "WDSToast.react",
    "cr:782",
    "justknobx",
    "react",
    "stylex",
    "uniqueID",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = c(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function c(e, t) {
      if (typeof e != "object" || !e) return e;
      var n =
        e[typeof Symbol == "function" ? Symbol.toPrimitive : "@@toPrimitive"];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    var d = s || (s = o("react")),
      m = s,
      p = m.cloneElement,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState,
      h = {
        slide0: { transform: "xnn1q72", $$css: !0 },
        slide1: { transform: "xvav9fi", $$css: !0 },
        slide2: { transform: "x8r675y", $$css: !0 },
        slide3: { opacity: "xg01cxk", transform: "x1o6clbr", $$css: !0 },
        wrapper: {
          opacity: "x1hc1fzr",
          bottom: "x1ey2m1c",
          lineHeight: "xzl6hoh",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          minHeight: "xjwf9q1",
          position: "x10l6tqk",
          zIndex: "xc9l9hb",
          transition: "x19seqdo",
          $$css: !0,
        },
        center: {
          insetInlineStart: "xbudbmw",
          left: null,
          right: null,
          marginInlineStart: "x1lziwak",
          marginInlineEnd: "x14z9mp",
          maxWidth: "x65f84u",
          $$css: !0,
        },
        transformLeft: { transform: "xuuh30", $$css: !0 },
        transformRight: { transform: "xitnhlw", $$css: !0 },
        right: {
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          $$css: !0,
        },
      },
      y = 3;
    function C() {
      var t = r("useLazyRef")(function () {
          return new Map();
        }),
        a = function (n, r) {
          r ? t.current.set(n, r) : t.current.delete(n);
        },
        i = o("WDSToast.react").useWDSToast(),
        l = i.showToast,
        s = r("useLazyRef")(function () {
          return new (r("WAWebSetRefCache"))(a);
        }),
        c = f(!1),
        m = g({}),
        C = m[0],
        R = m[1],
        L = f(null);
      function E(e, t) {
        var n = e.action,
          r = e.duration,
          a = e.id,
          i = e.msg,
          s = e.visible;
        if (s === !1 || (r != null && r !== 4e3)) return !1;
        var u =
            t === o("WAWebToastManager").ToastPosition.LEFT || t === void 0
              ? "start"
              : t === o("WAWebToastManager").ToastPosition.CENTER
                ? "center"
                : t === o("WAWebToastManager").ToastPosition.RIGHT
                  ? "end"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })(),
          c = Array.isArray(n) ? n[0] : n;
        return (
          l({
            testid: "toast-body",
            align: u,
            type: "default",
            message: i,
            dedupId: a,
            action: c != null ? b(c) : void 0,
          }),
          !0
        );
      }
      function k(e, t) {
        var n = e.id,
          a = e.initialAction,
          i = e.onDismiss,
          s = e.pendingAction,
          u = e.settleDuration,
          c = e.toastPosition;
        if (u != null && u !== 5e3) return !1;
        var d = r("justknobx")._("6996") ? n : void 0,
          m = c != null ? c : t,
          p =
            m === o("WAWebToastManager").ToastPosition.LEFT ||
            m === "LEFT" ||
            m === void 0
              ? "start"
              : m === o("WAWebToastManager").ToastPosition.CENTER
                ? "center"
                : m === o("WAWebToastManager").ToastPosition.RIGHT ||
                    m === "RIGHT"
                  ? "end"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          m,
                      );
                    })();
        if (a) {
          var _ = a.action,
            f = a.handler,
            g = a.testid,
            h = a.text,
            y = h,
            C = null,
            b = !1;
          (s
            .then(function (e) {
              e &&
                ((y = e.text),
                e.action != null &&
                  e.handler != null &&
                  (C = {
                    label: e.action,
                    handler: e.handler,
                    testid: e.testid,
                  }));
            })
            .catch(function (e) {
              e != null &&
                typeof e == "object" &&
                e.name !== o("WAAbortError").ABORT_ERROR &&
                (e == null ? void 0 : e.text) != null &&
                ((y = String(e.text)),
                (e == null ? void 0 : e.action) != null &&
                  (e == null ? void 0 : e.handler) != null &&
                  (C = {
                    label: e.action,
                    handler: e.handler,
                    testid: e.testid,
                  }));
            }),
            l({
              align: p,
              dedupId: d,
              type: "loading",
              message: function (t) {
                return t !== "loading" ? y : h;
              },
              action: function (t) {
                return t !== "loading" && C != null
                  ? {
                      label: C.label,
                      onPress: function () {
                        var e;
                        b || ((b = !0), (e = C) == null || e.handler());
                      },
                      testid: C.testid,
                    }
                  : t === "loading" && _ != null && f != null
                    ? {
                        label: _,
                        onPress: function () {
                          b || ((b = !0), f());
                        },
                        testid: g,
                      }
                    : null;
              },
              process: s,
            }));
        } else {
          var v = !1;
          s.then(function (e) {
            e &&
              (e.action != null && e.handler != null
                ? l({
                    align: p,
                    dedupId: d,
                    type: "default",
                    message: e.text,
                    action: {
                      label: e.action,
                      onPress: function () {
                        v || ((v = !0), e.handler == null || e.handler());
                      },
                      testid: e.testid,
                    },
                  })
                : l({
                    align: p,
                    dedupId: d,
                    type: "default",
                    message: e.text,
                  }));
          }).catch(function (e) {
            e != null &&
              typeof e == "object" &&
              e.name !== o("WAAbortError").ABORT_ERROR &&
              (e == null ? void 0 : e.text) != null &&
              ((e == null ? void 0 : e.action) != null &&
              (e == null ? void 0 : e.handler) != null
                ? l({
                    align: p,
                    dedupId: d,
                    type: "error",
                    message: e.text,
                    action: {
                      label: e.action,
                      onPress: function () {
                        v || ((v = !0), e.handler == null || e.handler());
                      },
                      testid: e.testid,
                    },
                  })
                : l({ align: p, dedupId: d, type: "error", message: e.text }));
          });
        }
        return !0;
      }
      var I = function (n, r) {
          var e,
            o = !1,
            a = n.props;
          if (("pendingAction" in a ? (o = k(a, r)) : (o = E(a, r)), !o)) {
            var i = (e = a.id) != null ? e : S(),
              l = t.current.get(i);
            l
              ? l.restartDelay == null || l.restartDelay()
              : R(function (e) {
                  var t;
                  return babelHelpers.extends(
                    {},
                    e,
                    ((t = {}), (t[i] = { toast: n, position: r, id: i }), t),
                  );
                });
          }
        },
        T = function (t) {
          C[t] &&
            R(function (e) {
              var n = e[t],
                r = babelHelpers.objectWithoutPropertiesLoose(e, [t].map(u));
              return r;
            });
        };
      (o("useWAWebListener").useListener(
        o("WAWebToastManager").ToastManager,
        "open_toast",
        I,
      ),
        o("useWAWebListener").useListener(
          o("WAWebToastManager").ToastManager,
          "close_toast",
          T,
        ),
        _(
          function () {
            var e = L.current;
            ((L.current = C),
              (c.current =
                Object.keys(e != null ? e : {}).length >
                Object.keys(C).length));
          },
          [C],
        ));
      var D = c.current,
        x = Object.values(C)
          .sort(v)
          .map(function (t, n) {
            var a = t.id,
              i = t.position,
              l = t.toast;
            return d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  h.wrapper,
                  i === o("WAWebToastManager").ToastPosition.CENTER && h.center,
                  i === o("WAWebToastManager").ToastPosition.RIGHT && h.right,
                  n === 0 && D && h.slide0,
                  n === 1 && h.slide1,
                  n === 2 && h.slide2,
                  n >= y && h.slide3,
                ),
                {
                  children: d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      e.props(
                        i === o("WAWebToastManager").ToastPosition.CENTER &&
                          (r("WAWebL10N").isRTL()
                            ? h.transformRight
                            : h.transformLeft),
                      ),
                      {
                        children: p(l, {
                          ref: s.current.getRefSetter(a),
                          id: a,
                        }),
                      },
                    ),
                  ),
                },
              ),
              a,
            );
          });
      return d.jsxs(d.Fragment, {
        children: [
          n("cr:782") != null && d.jsx(n("cr:782"), { openToast: I }),
          d.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "fade_sifo",
            children: x,
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      if (e.onAction == null)
        return {
          label: e.actionText,
          onPress: r("WAWebNoop"),
          testid: e.testid,
        };
      var t = e.onAction;
      return {
        label: e.actionText,
        onPress: function () {
          t();
        },
        testid: e.testid,
      };
    }
    function v(e, t) {
      return e.id === t.id ? 0 : e.id < t.id ? 1 : -1;
    }
    function S(e) {
      return r("uniqueID")(e || "toast");
    }
    l.default = C;
  },
  98,
);
