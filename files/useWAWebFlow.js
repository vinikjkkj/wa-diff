__d(
  "useWAWebFlow",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "react",
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
        var n = t.ref,
          a = babelHelpers.objectWithoutPropertiesLoose(t, e),
          i = a.children,
          l = a.displayName,
          s = l === void 0 ? "FlowDrawer" : l,
          c = a.flow,
          d = c.activeKey,
          m = c.pop,
          p = c.transition;
        if (i == null) return null;
        var _ = function () {
            a.requestFocus && a.requestFocus();
          },
          f = function (t) {
            a.requestDismiss ? a.requestDismiss(t) : m();
          };
        return u.jsx(r("WAWebVelocityTransitionGroup"), {
          ref: n,
          transitionName: p,
          xstyle: g.container,
          displayName: s + "-" + d,
          children: u.jsx(
            o("WAWebUimUie.react").UIE,
            {
              displayName: s + "-" + d,
              escapable: !0,
              requestFocus: _,
              requestDismiss: f,
              children: i,
            },
            d,
          ),
        });
      }
      return ((t.displayName = t.name + " [from " + i.id + "]"), t);
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
