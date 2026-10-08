__d(
  "WAWebToastManagerImpl",
  [
    "WAAbortError",
    "WAWebL10N",
    "WAWebSetRefCache",
    "WAWebToastManager",
    "WAWebVelocityTransitionGroup",
    "WDSToast.react",
    "cr:782",
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
        S = m[1],
        R = f(null);
      function L(e, t) {
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
          (c == null ? void 0 : c.onAction) != null
            ? l({
                testid: "toast-body",
                align: u,
                type: "default",
                message: i,
                dedupId: a,
                action: {
                  label: c.actionText,
                  onPress: function () {
                    c.onAction();
                  },
                  testid: c.testid,
                },
              })
            : l({
                testid: "toast-body",
                align: u,
                type: "default",
                message: i,
                dedupId: a,
              }),
          !0
        );
      }
      function E(e, t) {
        var n = e.id,
          r = e.initialAction,
          a = e.onDismiss,
          i = e.pendingAction,
          s = e.settleDuration,
          u = e.toastPosition;
        if (s != null && s !== 5e3) return !1;
        var c = u != null ? u : t,
          d =
            c === o("WAWebToastManager").ToastPosition.LEFT ||
            c === "LEFT" ||
            c === void 0
              ? "start"
              : c === o("WAWebToastManager").ToastPosition.CENTER
                ? "center"
                : c === o("WAWebToastManager").ToastPosition.RIGHT ||
                    c === "RIGHT"
                  ? "end"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          c,
                      );
                    })();
        if (r) {
          var m = r.action,
            p = r.handler,
            _ = r.testid,
            f = r.text,
            g = f,
            h = null,
            y = !1;
          (i
            .then(function (e) {
              e &&
                ((g = e.text),
                e.action != null &&
                  e.handler != null &&
                  (h = {
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
                ((g = String(e.text)),
                (e == null ? void 0 : e.action) != null &&
                  (e == null ? void 0 : e.handler) != null &&
                  (h = {
                    label: e.action,
                    handler: e.handler,
                    testid: e.testid,
                  }));
            }),
            l({
              align: d,
              type: "loading",
              message: function (t) {
                return t !== "loading" ? g : f;
              },
              action: function (t) {
                return t !== "loading" && h != null
                  ? {
                      label: h.label,
                      onPress: function () {
                        var e;
                        y || ((y = !0), (e = h) == null || e.handler());
                      },
                      testid: h.testid,
                    }
                  : t === "loading" && m != null && p != null
                    ? {
                        label: m,
                        onPress: function () {
                          y || ((y = !0), p());
                        },
                        testid: _,
                      }
                    : null;
              },
              process: i,
            }));
        } else {
          var C = !1;
          i.then(function (e) {
            e &&
              (e.action != null && e.handler != null
                ? l({
                    align: d,
                    type: "default",
                    message: e.text,
                    action: {
                      label: e.action,
                      onPress: function () {
                        C || ((C = !0), e.handler == null || e.handler());
                      },
                      testid: e.testid,
                    },
                  })
                : l({ align: d, type: "default", message: e.text }));
          }).catch(function (e) {
            e != null &&
              typeof e == "object" &&
              e.name !== o("WAAbortError").ABORT_ERROR &&
              (e == null ? void 0 : e.text) != null &&
              ((e == null ? void 0 : e.action) != null &&
              (e == null ? void 0 : e.handler) != null
                ? l({
                    align: d,
                    type: "error",
                    message: e.text,
                    action: {
                      label: e.action,
                      onPress: function () {
                        C || ((C = !0), e.handler == null || e.handler());
                      },
                      testid: e.testid,
                    },
                  })
                : l({ align: d, type: "error", message: e.text }));
          });
        }
        return !0;
      }
      var k = function (n, r) {
          var e,
            o = !1,
            a = n.props;
          if (("pendingAction" in a ? (o = E(a, r)) : (o = L(a, r)), !o)) {
            var i = (e = a.id) != null ? e : v(),
              l = t.current.get(i);
            l
              ? l.restartDelay == null || l.restartDelay()
              : S(function (e) {
                  var t;
                  return babelHelpers.extends(
                    {},
                    e,
                    ((t = {}), (t[i] = { toast: n, position: r, id: i }), t),
                  );
                });
          }
        },
        I = function (t) {
          C[t] &&
            S(function (e) {
              var n = e[t],
                r = babelHelpers.objectWithoutPropertiesLoose(e, [t].map(u));
              return r;
            });
        };
      (o("useWAWebListener").useListener(
        o("WAWebToastManager").ToastManager,
        "open_toast",
        k,
      ),
        o("useWAWebListener").useListener(
          o("WAWebToastManager").ToastManager,
          "close_toast",
          I,
        ),
        _(
          function () {
            var e = R.current;
            ((R.current = C),
              (c.current =
                Object.keys(e != null ? e : {}).length >
                Object.keys(C).length));
          },
          [C],
        ));
      var T = c.current,
        D = Object.values(C)
          .sort(b)
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
                  n === 0 && T && h.slide0,
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
          n("cr:782") != null && d.jsx(n("cr:782"), { openToast: k }),
          d.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "fade_sifo",
            children: D,
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t) {
      return e.id === t.id ? 0 : e.id < t.id ? 1 : -1;
    }
    function v(e) {
      return r("uniqueID")(e || "toast");
    }
    l.default = C;
  },
  98,
);
