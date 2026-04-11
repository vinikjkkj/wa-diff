__d(
  "WDSToastElements.react",
  [
    "BaseToast.react",
    "Promise",
    "WDSButton.react",
    "WDSIconIcCheckCircle.react",
    "WDSIconIcError.react",
    "WDSSpinner.react",
    "WDSText.react",
    "emptyFunction",
    "getPlatformByGK",
    "react",
    "stylex",
    "uniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "removed", "resolvedValue"],
      s = ["onActionClick", "resolvedValue"],
      u = ["type"],
      c = ["type"],
      d = ["process"],
      m,
      p,
      _;
    function f(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var g = _ || (_ = o("react")),
      h = _,
      y = h.useEffect,
      C = h.useImperativeHandle,
      b = h.useRef,
      v = h.useState,
      S = 4e3,
      R = 7e3,
      L = 75,
      E = 3,
      k = { width: 20, height: 20 },
      I = "x9vcbzf-B",
      T = "xvowxyv-B",
      D = "x1n29qb0-B",
      x = "xva7eij-B",
      $ = {
        entry: {
          animationDuration: "xeooxyl",
          animationName: "x1ek3uh9",
          animationTimingFunction: "xpdgw1o",
          $$css: !0,
        },
        exit: {
          animationDuration: "xeooxyl",
          animationFillMode: "x10e4vud",
          animationName: "xilmffa",
          animationTimingFunction: "x2n60on",
          $$css: !0,
        },
      },
      P = {
        entry: {
          animationDuration: "xeooxyl",
          animationName: "x1ek3uh9",
          animationTimingFunction: "xpdgw1o",
          $$css: !0,
        },
        exit: {
          animationDuration: "xeooxyl",
          animationFillMode: "x10e4vud",
          animationName: "xilmffa",
          animationTimingFunction: "x2n60on",
          $$css: !0,
        },
      },
      N = {
        entry: {
          animationDuration: "xeooxyl",
          animationName: "xy43ex2",
          animationTimingFunction: "xpdgw1o",
          $$css: !0,
        },
        exit: {
          animationDuration: "x2mfxb",
          animationFillMode: "x10e4vud",
          animationName: "x1fvbyvl",
          animationTimingFunction: "x18yl69g",
          $$css: !0,
        },
      },
      M = {
        none: {
          paddingLeft: "x1tnhpae",
          paddingRight: "x8177ur",
          paddingInlineStart: null,
          paddingInlineEnd: null,
          $$css: !0,
        },
        left: {
          paddingLeft: "x1tj70yd",
          paddingRight: "x8177ur",
          paddingInlineStart: null,
          paddingInlineEnd: null,
          $$css: !0,
        },
        right: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingLeft: "x1tnhpae",
          paddingRight: "x5u1mw9",
          paddingInlineStart: null,
          paddingInlineEnd: null,
          $$css: !0,
        },
        both: {
          paddingLeft: "x1tj70yd",
          paddingRight: "x5u1mw9",
          paddingInlineStart: null,
          paddingInlineEnd: null,
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
      },
      w = {
        size: { maxWidth: "xxc7z9f", minHeight: "x1wxaq2x", $$css: !0 },
        container: {
          alignItems: "x6s0dn4",
          backgroundColor: "xpip370",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          boxShadow: "xi5p3m0",
          minWidth: "xeuugli",
          transition: "x1yhwi1h",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          pointerEvents: "x71s49j",
          $$css: !0,
        },
        iconSize: { height: "x1qx5ct2", $$css: !0 },
        toastAlignStart: { alignSelf: "xqcrz7y", $$css: !0 },
        toastAlignCenter: { alignSelf: "xamitd3", $$css: !0 },
        toastAlignEnd: { alignSelf: "xpvyfi4", $$css: !0 },
        spinner: { color: "xowaa7l", $$css: !0 },
        item: {
          paddingBottom: "x10b6aqq",
          paddingTop: "x1yrsyyn",
          paddingInlineStart: "x25sj25",
          paddingInlineEnd: "x1icxu4v",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      A =
        o("getPlatformByGK").WDS_PLATFORM === "android"
          ? $
          : o("getPlatformByGK").WDS_PLATFORM === "iOS"
            ? P
            : o("getPlatformByGK").WDS_PLATFORM === "windowsWeb" ||
                o("getPlatformByGK").WDS_PLATFORM === "macWeb"
              ? N
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      o("getPlatformByGK").WDS_PLATFORM,
                  );
                })();
    function F(t) {
      var a = t.item,
        i = t.onCleanup,
        l = t.onRemove,
        s = t.onUpdateType,
        u = t.paused,
        c = a.align,
        d = c === void 0 ? "start" : c,
        _ = a.id,
        f = a.message,
        h = a.removed,
        C = a.resolvedValue,
        v = a.testid,
        E = v === void 0 ? "toast-body" : v,
        k = a.type,
        I = String(
          typeof f == "function" ? f(k != null ? k : "default", C) : f,
        ),
        T = I.length >= L ? R : S,
        D = 650,
        x = T + D,
        $ = b(x),
        P = b(0),
        N = b(null);
      (y(
        function () {
          if (!h) {
            if (a.type === "loading") {
              var e = a.process;
              e instanceof (p || (p = n("Promise"))) &&
                e.then(
                  function (e) {
                    return s(_, "success", e);
                  },
                  function (e) {
                    return s(_, "error", e);
                  },
                );
              return;
            }
            if (!u)
              return (
                (P.current = Date.now()),
                (N.current = window.setTimeout(function () {
                  l(_);
                }, $.current)),
                function () {
                  if (N.current) {
                    (window.clearTimeout(N.current), (N.current = null));
                    var e = Date.now() - P.current;
                    $.current = Math.max(0, $.current - e);
                  }
                }
              );
          }
        },
        [h, _, l, s, a, u],
      ),
        y(
          function () {
            if (h) {
              var e =
                  o("getPlatformByGK").WDS_PLATFORM === "windowsWeb" ||
                  o("getPlatformByGK").WDS_PLATFORM === "macWeb"
                    ? 400
                    : 650,
                t = e + 100,
                n = window.setTimeout(function () {
                  i(_);
                }, t);
              return function () {
                return window.clearTimeout(n);
              };
            }
          },
          [h, _, i],
        ));
      var M = function (t) {
          t.target === t.currentTarget && h && i(_);
        },
        F = function () {
          return l(_);
        },
        B = a.id,
        W = a.removed,
        q = a.resolvedValue,
        U = babelHelpers.objectWithoutPropertiesLoose(a, e),
        V =
          d === "start"
            ? w.toastAlignStart
            : d === "center"
              ? w.toastAlignCenter
              : d === "end"
                ? w.toastAlignEnd
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        d,
                    );
                  })();
      return g.jsx(
        "li",
        babelHelpers.extends(
          {},
          (m || (m = r("stylex"))).props(h ? A.exit : [A.entry, w.size], V),
          {
            "data-id": _,
            "data-testid": void 0,
            "data-removed": h,
            onAnimationEnd: M,
            role: "status",
            "aria-atomic": "true",
            "aria-live": "polite",
            children: g.jsx(
              O,
              babelHelpers.extends({ onActionClick: F, resolvedValue: C }, U),
            ),
          },
        ),
      );
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O(e) {
      var t = e.onActionClick,
        n = e.resolvedValue,
        o = babelHelpers.objectWithoutPropertiesLoose(e, s),
        a = (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            "type" in e &&
            (e.type === "default" || e.type === void 0)
          ) {
            var t = e.type,
              r = babelHelpers.objectWithoutPropertiesLoose(e, u);
            return {
              action: r.action,
              message: r.message,
              type: "default",
              Icon: r.Icon,
            };
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            "type" in e
          ) {
            var o = e.type,
              a = e.type,
              i = babelHelpers.objectWithoutPropertiesLoose(e, c);
            return {
              action: typeof i.action == "function" ? i.action(o, n) : i.action,
              message:
                typeof i.message == "function" ? i.message(o, n) : i.message,
              type: o,
            };
          }
          if ((typeof e == "object" && e !== null) || typeof e == "function") {
            var l = babelHelpers.extends({}, (f(e), e));
            return {
              action: l.action,
              message: l.message,
              type: "default",
              Icon: l.Icon,
            };
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(o),
        i = a.action,
        l = a.message,
        d = a.type,
        m = b(null),
        p = function () {
          (i == null || i.onPress(), t == null || t());
        },
        _ =
          i != null
            ? {
                element: g.jsx(r("WDSButton.react"), {
                  ref: m,
                  "aria-label": i.ariaLabel,
                  "aria-live": "polite",
                  type: "media",
                  size: "small",
                  variant: "tonal",
                  label: i.label,
                  onPress: p,
                }),
              }
            : void 0,
        h = o.Icon,
        y =
          d === "default"
            ? h
              ? g.jsx(
                  h,
                  babelHelpers.extends({ colorName: "contentInverse" }, k, {
                    xstyle: w.iconSize,
                  }),
                )
              : null
            : d === "success"
              ? g.jsx(r("WDSSpinner.react"), {
                  size: 20,
                  xstyle: w.spinner,
                  morphToIcon: !0,
                  iconToMorphTo: r("WDSIconIcCheckCircle.react"),
                  iconProps: {
                    xstyle: w.iconSize,
                    colorName: "contentInverse",
                  },
                })
              : d === "error"
                ? g.jsx(r("WDSSpinner.react"), {
                    size: 20,
                    xstyle: w.spinner,
                    morphToIcon: !0,
                    iconToMorphTo: r("WDSIconIcError.react"),
                    iconProps: {
                      xstyle: w.iconSize,
                      colorName: "secondaryNegative",
                    },
                  })
                : d === "loading"
                  ? g.jsx(r("WDSSpinner.react"), {
                      size: 20,
                      xstyle: w.spinner,
                    })
                  : null,
        C = y != null,
        v = i != null,
        S;
      !C && !v
        ? (S = "none")
        : C && v
          ? (S = "both")
          : C
            ? (S = "left")
            : (S = "right");
      var R = [w.container, M[S]],
        L = b(null);
      return g.jsx(r("BaseToast.react"), {
        toastRef: L,
        onDismiss: r("emptyFunction"),
        message: function () {
          return g.jsx(r("WDSText.react"), {
            colorName: "contentInverse",
            type: "Body2Emphasized",
            preserveNewLines: !1,
            children: l,
          });
        },
        action: _,
        addOnStart: y,
        size: "fit-content",
        variant: { xstyleConfig: { container: R, item: w.item } },
        canBeAutofocused: !1,
      });
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B(e) {
      var t = e.ref,
        n = e.targetWindow,
        o = n === void 0 ? window : n,
        a = v([]),
        i = a[0],
        l = a[1],
        s = v(!1),
        u = s[0],
        c = s[1],
        m = v(!1),
        p = m[0],
        _ = m[1],
        f = u || p,
        h = function () {
          return c(!0);
        },
        y = function () {
          return c(!1);
        },
        b = function () {
          return _(!0);
        },
        S = function (t) {
          ((t.relatedTarget instanceof HTMLElement ||
            t.relatedTarget instanceof o.HTMLElement) &&
            !t.currentTarget.contains(t.relatedTarget) &&
            _(!1),
            t.relatedTarget == null && _(!1));
        },
        R = function (t) {
          l(function (e) {
            return e.map(function (e) {
              return e.id === t && !e.removed
                ? babelHelpers.extends({}, e, { removed: !0 })
                : e;
            });
          });
        },
        L = function (t) {
          l(function (e) {
            return e.filter(function (e) {
              return e.id !== t;
            });
          });
        },
        k = function (t, n, r) {
          l(function (e) {
            return e.map(function (e) {
              if (e.id === t) {
                if (e.type === "loading") {
                  var o = e.process,
                    a = babelHelpers.objectWithoutPropertiesLoose(e, d);
                  return babelHelpers.extends({}, a, {
                    type: n,
                    resolvedValue: r,
                  });
                }
                return babelHelpers.extends({}, e, {
                  type: n,
                  resolvedValue: r,
                });
              }
              return e;
            });
          });
        };
      return (
        C(
          t,
          function () {
            return {
              showToast: function (t) {
                l(function (e) {
                  var n = [].concat(e, [
                    babelHelpers.extends({}, t, {
                      removed: !1,
                      id: "" + r("uniqueID")("toast"),
                    }),
                  ]);
                  return n.map(function (e, t) {
                    return babelHelpers.extends({}, e, {
                      removed: n.length - E - t > 0,
                    });
                  });
                });
              },
            };
          },
          [],
        ),
        i.length === 0
          ? null
          : g.jsx("ul", {
              className: "x78zum5 xdt5ytf xl56j7k x1qvou4u",
              "aria-live": "polite",
              "aria-relevant": "additions removals",
              onMouseEnter: h,
              onMouseLeave: y,
              onFocus: b,
              onBlur: S,
              children: i.map(function (e) {
                return g.jsx(
                  F,
                  {
                    item: e,
                    onRemove: R,
                    onCleanup: L,
                    onUpdateType: k,
                    paused: f,
                  },
                  e.id,
                );
              }),
            })
      );
    }
    ((B.displayName = B.name + " [from " + i.id + "]"),
      (l.WDSToast = O),
      (l.WDSToastList = B));
  },
  98,
);
