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
    "useWAWebABPropConfigValue",
    "useWAWebListener",
    "useWAWebPrevious",
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
        i = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_toast",
        ),
        l = o("WDSToast.react").useWDSToast(),
        s = l.showToast,
        c = r("useLazyRef")(function () {
          return new (r("WAWebSetRefCache"))(a);
        }),
        m = f(!1),
        C = g({}),
        S = C[0],
        R = C[1],
        L = r("useWAWebPrevious")(S);
      function E(e, t) {
        var n = e.action,
          r = e.duration,
          a = e.id,
          l = e.msg,
          u = e.visible;
        if (i === !1 || u === !1 || (r != null && r !== 4e3)) return !1;
        var c =
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
          d = Array.isArray(n) ? n[0] : n;
        return (
          (d == null ? void 0 : d.onAction) != null
            ? s({
                testid: "toast-body",
                align: c,
                type: "default",
                message: l,
                dedupId: a,
                action: {
                  label: d.actionText,
                  onPress: function () {
                    d.onAction();
                  },
                },
              })
            : s({
                testid: "toast-body",
                align: c,
                type: "default",
                message: l,
                dedupId: a,
              }),
          !0
        );
      }
      function k(e, t) {
        var n = e.id,
          r = e.initialAction,
          a = e.onDismiss,
          l = e.pendingAction,
          u = e.settleDuration,
          c = e.toastPosition;
        if (i === !1 || (u != null && u !== 5e3)) return !1;
        var d = c != null ? c : t,
          m =
            d === o("WAWebToastManager").ToastPosition.LEFT ||
            d === "LEFT" ||
            d === void 0
              ? "start"
              : d === o("WAWebToastManager").ToastPosition.CENTER
                ? "center"
                : d === o("WAWebToastManager").ToastPosition.RIGHT ||
                    d === "RIGHT"
                  ? "end"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          d,
                      );
                    })();
        if (r) {
          var p = r.action,
            _ = r.handler,
            f = r.text,
            g = f,
            h = null,
            y = !1;
          (l
            .then(function (e) {
              e &&
                ((g = e.text),
                e.action != null &&
                  e.handler != null &&
                  (h = { label: e.action, handler: e.handler }));
            })
            .catch(function (e) {
              e != null &&
                typeof e == "object" &&
                e.name !== o("WAAbortError").ABORT_ERROR &&
                (e == null ? void 0 : e.text) != null &&
                ((g = String(e.text)),
                (e == null ? void 0 : e.action) != null &&
                  (e == null ? void 0 : e.handler) != null &&
                  (h = { label: e.action, handler: e.handler }));
            }),
            s({
              align: m,
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
                    }
                  : t === "loading" && p != null && _ != null
                    ? {
                        label: p,
                        onPress: function () {
                          y || ((y = !0), _());
                        },
                      }
                    : null;
              },
              process: l,
            }));
        } else {
          var C = !1;
          l.then(function (e) {
            e &&
              (e.action != null && e.handler != null
                ? s({
                    align: m,
                    type: "default",
                    message: e.text,
                    action: {
                      label: e.action,
                      onPress: function () {
                        C || ((C = !0), e.handler == null || e.handler());
                      },
                    },
                  })
                : s({ align: m, type: "default", message: e.text }));
          }).catch(function (e) {
            e != null &&
              typeof e == "object" &&
              e.name !== o("WAAbortError").ABORT_ERROR &&
              (e == null ? void 0 : e.text) != null &&
              ((e == null ? void 0 : e.action) != null &&
              (e == null ? void 0 : e.handler) != null
                ? s({
                    align: m,
                    type: "error",
                    message: e.text,
                    action: {
                      label: e.action,
                      onPress: function () {
                        C || ((C = !0), e.handler == null || e.handler());
                      },
                    },
                  })
                : s({ align: m, type: "error", message: e.text }));
          });
        }
        return !0;
      }
      var I = function (n, r) {
          var e,
            o = !1,
            a = n.props;
          if (("pendingAction" in a ? (o = k(a, r)) : (o = E(a, r)), !o)) {
            var i = (e = a.id) != null ? e : v(),
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
          S[t] &&
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
            m.current =
              Object.keys(L != null ? L : {}).length > Object.keys(S).length;
          },
          [S, L],
        ));
      var D = m.current,
        x = Object.values(S)
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
                          ref: c.current.getRefSetter(a),
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
