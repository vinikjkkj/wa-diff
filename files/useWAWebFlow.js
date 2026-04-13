__d(
  "useWAWebFlow",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useReducer,
      f = c.useRef,
      g = {
        container: {
          height: "x5yr21d",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function h() {
      function t(t) {
        var n = o("react-compiler-runtime").c(19),
          a,
          i;
        n[0] !== t
          ? ((i = t.ref),
            (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (n[0] = t),
            (n[1] = a),
            (n[2] = i))
          : ((a = n[1]), (i = n[2]));
        var l = a,
          s = l.children,
          c = l.displayName,
          d = l.flow,
          m = c === void 0 ? "FlowDrawer" : c,
          p = d.activeKey,
          _ = d.pop,
          f = d.transition;
        if (s == null) return null;
        var h;
        n[3] !== a
          ? ((h = function () {
              a.requestFocus && a.requestFocus();
            }),
            (n[3] = a),
            (n[4] = h))
          : (h = n[4]);
        var y = h,
          C;
        n[5] !== _ || n[6] !== a
          ? ((C = function (t) {
              a.requestDismiss ? a.requestDismiss(t) : _();
            }),
            (n[5] = _),
            (n[6] = a),
            (n[7] = C))
          : (C = n[7]);
        var b = C,
          v = m + "-" + p,
          S = m + "-" + p,
          R;
        n[8] !== p || n[9] !== s || n[10] !== b || n[11] !== y || n[12] !== S
          ? ((R = u.jsx(
              o("WAWebUimUie.react").UIE,
              {
                displayName: S,
                escapable: !0,
                requestFocus: y,
                requestDismiss: b,
                children: s,
              },
              p,
            )),
            (n[8] = p),
            (n[9] = s),
            (n[10] = b),
            (n[11] = y),
            (n[12] = S),
            (n[13] = R))
          : (R = n[13]);
        var L;
        return (
          n[14] !== i || n[15] !== v || n[16] !== R || n[17] !== f
            ? ((L = u.jsx(r("WAWebVelocityTransitionGroup"), {
                ref: i,
                transitionName: f,
                xstyle: g.container,
                displayName: v,
                children: R,
              })),
              (n[14] = i),
              (n[15] = v),
              (n[16] = R),
              (n[17] = f),
              (n[18] = L))
            : (L = n[18]),
          L
        );
      }
      return t;
    }
    var y = n("$InternalEnum").Mirrored([
      "DrawerLeft",
      "DrawerRight",
      "Modal",
      "None",
    ]);
    function C(e) {
      var t = e.initialStep,
        n = e.initialTransition;
      return {
        stack: t != null ? [t] : [],
        previousStep: null,
        transition: n,
        activeKey: 1,
        ended: !1,
        isPushed: !0,
      };
    }
    function b(e, t) {
      var n, r, o;
      switch (t.type) {
        case "transition":
          return babelHelpers.extends({}, e, {
            transition:
              (n = (r = t.payload) == null ? void 0 : r.transition) != null
                ? n
                : e.transition,
          });
        case "push":
          return ((o = t.payload) == null ? void 0 : o.step) == null
            ? e
            : babelHelpers.extends({}, e, {
                previousStep: e.stack[e.stack.length - 1],
                stack: e.stack.concat(t.payload.step),
                activeKey: e.activeKey + 1,
                ended: !1,
                isPushed: !0,
              });
        case "pop": {
          var a,
            i,
            l =
              (a = (i = t.payload) == null ? void 0 : i.count) != null ? a : 1,
            s = e.stack.slice(0, -l);
          return s.length >= 1
            ? babelHelpers.extends({}, e, {
                previousStep: e.stack[e.stack.length - 1],
                stack: s,
                activeKey: e.activeKey - l,
                isPushed: !1,
              })
            : e.ended
              ? e
              : babelHelpers.extends({}, e, { ended: !0 });
        }
        default:
          return e;
      }
    }
    function v(e, t) {
      var n = r("useWAWebUIM")(),
        o = t || {},
        a = o.transitions,
        i = a === void 0 ? y.None : a,
        l = o.onEnd,
        s = S(i),
        u = s.popTransition,
        c = s.pushTransition,
        g = _(b, { initialStep: e, initialTransition: c }, C),
        v = g[0],
        R = g[1],
        L = f(null),
        E = d(function (e) {
          R({ type: "transition", payload: { transition: e } });
        }, []),
        k = d(
          function (e, t) {
            (t === void 0 && (t = c), E(t));
            var n = L.current;
            L.current = function () {
              (n == null || n(), R({ type: "push", payload: { step: e } }));
            };
          },
          [c, E],
        ),
        I = d(
          function (e, t) {
            (e === void 0 && (e = u),
              t === void 0 && (t = 1),
              E(e),
              (L.current = function () {
                return R({ type: "pop", payload: { count: t } });
              }));
          },
          [u, E],
        );
      m(
        function () {
          L.current != null && (L.current(), (L.current = null));
        },
        void 0,
      );
      var T = r("useWAWebStableCallback")(function (e) {
          l ? l(e) : r("WANullthrows")(n).requestDismiss(e);
        }),
        D = r("useWAWebStableCallback")(function () {
          return v.stack.length;
        });
      m(
        function () {
          v.ended && T();
        },
        [T, v.ended],
      );
      var x = p(function () {
          return h();
        }, []),
        $ = {
          push: k,
          pop: I,
          end: T,
          stackSize: D,
          step: v.stack[v.stack.length - 1],
          previousStep: v.previousStep,
          transition: v.transition,
          activeKey: v.activeKey,
          isPushed: v.isPushed,
        };
      return [x, $];
    }
    function S(e) {
      switch (e) {
        case y.DrawerLeft:
          return {
            pushTransition: "flow-transition-drawer-pop",
            popTransition: "flow-transition-drawer-push",
          };
        case y.DrawerRight:
          return {
            pushTransition: "flow-transition-drawer-push",
            popTransition: "flow-transition-drawer-pop",
          };
        case y.Modal:
          return {
            pushTransition: "flow-transition-modal-push",
            popTransition: "flow-transition-modal-pop",
          };
        case y.None:
          return { pushTransition: "none", popTransition: "none" };
      }
    }
    ((l.FlowTransitions = y), (l.useFlow = v));
  },
  98,
);
