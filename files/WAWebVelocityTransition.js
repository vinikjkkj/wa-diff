__d(
  "WAWebVelocityTransition",
  [
    "invariant",
    "Promise",
    "WALogger",
    "WAWebIdleTaskRunner",
    "WAWebNoop",
    "WAWebTransitionPrimitive.react",
    "WAWebTransitions",
    "WAWebUiIdleEventBus",
    "WAWebUimUtils",
    "WAWebVelocityAnimate",
    "compactMap",
    "err",
    "isEmptyIterable",
    "omit",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = [
        "children",
        "delay",
        "displayName",
        "nodeRef",
        "onAnimationComplete",
        "onEnter",
        "onExit",
        "transitionName",
      ],
      m = ["selector"],
      p,
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.Children,
      y = g.cloneElement,
      C = g.useLayoutEffect,
      b = g.useRef,
      v = { APPEAR: "appear", ENTER: "enter", LEAVE: "leave" };
    function S(t) {
      var a = t.children,
        i = t.delay,
        l = i === void 0 ? 0 : i,
        u = t.displayName,
        c = t.nodeRef,
        _ = t.onAnimationComplete,
        g = t.onEnter,
        S = t.onExit,
        k = t.transitionName,
        I = babelHelpers.objectWithoutPropertiesLoose(t, d),
        x = b(!0),
        $ = b(),
        P = b(),
        N = b(0),
        M = b(!1),
        w = function (n) {
          if ((n === void 0 && (n = !0), c != null && c.current != null))
            return c.current;
          var t = $.current;
          if (t != null) {
            if (
              t instanceof HTMLElement ||
              o("WAWebUimUtils").isCrossWindowHTMLElement(t)
            )
              return t;
            var r = t.getElement == null ? void 0 : t.getElement();
            if (r) return r;
          }
          return (
            n &&
              !M.current &&
              ((M.current = !0),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[VelocityTransitionGroupChild] missing forwarded ref: ",
                      "",
                    ])),
                  E(k, a, u),
                )
                .sendLogs("velocity-transition-group-missing-ref")),
            null
          );
        },
        A = r("useWAWebStableCallback")(function () {
          return w(!1);
        }),
        F = b(0);
      C(
        function () {
          F.current += 1;
          var e = F.current;
          return (
            (x.current = !0),
            function () {
              x.current = !1;
              var t = A();
              queueMicrotask(function () {
                F.current === e &&
                  !x.current &&
                  ((N.current += 1),
                  (P.current = null),
                  r("WAWebVelocityAnimate")(t, "finish"));
              });
            }
          );
        },
        [A],
      );
      var O = b(!1),
        B = b(),
        W = function () {
          ((B.current = o("WAWebIdleTaskRunner").UIBusyTasks.setBusy(
            B.current,
          )),
            O.current ||
              ((O.current = !0),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0)));
        },
        q = function () {
          (B.current != null &&
            (o("WAWebIdleTaskRunner").UIBusyTasks.clearBusy(B.current),
            delete B.current),
            O.current &&
              ((O.current = !1),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1)));
        },
        U = function (t, n) {
          var e = n;
          if (!e) return [];
          Array.isArray(e) || (e = [e]);
          var o = {};
          return r("compactMap")(e, function (e) {
            var n = e.selector,
              a = babelHelpers.objectWithoutPropertiesLoose(e, m),
              i;
            return (
              n != null
                ? n in o
                  ? (i = o[n])
                  : (i = o[n] = t ? Array.from(t.querySelectorAll(n)) : void 0)
                : (i = t),
              i != null && (!Array.isArray(i) || !r("isEmptyIterable")(i))
                ? babelHelpers.extends({ nodes: i }, a)
                : void 0
            );
          });
        },
        V = function (t) {
          var e = t;
          (e === v.APPEAR && (e = v.ENTER),
            e === "enter" || e === "leave" || s(0, 66980));
          var o = R(k),
            a = o[e];
          if (!o || !a) return (p || (p = n("Promise"))).resolve();
          var i = r("omit")(o, ["enter", "leave"]),
            u = w(),
            c = U(u, a);
          e === v.LEAVE &&
            (u == null || u.setAttribute("pointerEvents", "none"),
            u == null || u.addEventListener("keypress", T, !0),
            u == null || u.addEventListener("keydown", T, !0));
          var d = 0,
            m = (p || (p = n("Promise"))).all(
              c.map(function (e) {
                var t,
                  n,
                  o,
                  a = e.delay,
                  s = e.drag,
                  u = e.duration,
                  c = e.easing,
                  m = e.nodes,
                  p = e.props,
                  _ = e.stagger,
                  f = (t = i.delay) != null ? t : 0;
                l ? (f = l) : a != null && a !== 0 && (f = a);
                var g =
                    typeof u == "number" && u
                      ? u
                      : (n = i.duration) != null
                        ? n
                        : 0,
                  h = Array.isArray(m) ? m.length : 1;
                return (
                  (d = Math.max(
                    d,
                    f +
                      (s === !0 ? Math.max(g, 200) : g) +
                      (_ != null ? _ : 0) * Math.max(h - 1, 0),
                  )),
                  r("WAWebVelocityAnimate")(m, p, {
                    easing:
                      (o = c != null ? c : i.easing) != null ? o : "easeInSine",
                    duration: g,
                    delay: f,
                    queue: i.queue || !1,
                    stagger: _ != null ? _ : !1,
                    drag: s || !1,
                  })
                );
              }),
            );
          return D(m, d, function () {
            for (var e of c) {
              var t = e.nodes;
              r("WAWebVelocityAnimate")(t, "finish");
            }
          }).finally(function () {
            (i.cleanOnComplete === !0 &&
              e === v.ENTER &&
              c.forEach(function (e) {
                var t = e.nodes,
                  n = Array.isArray(t) ? t : [t];
                n.forEach(function (e) {
                  return e == null ? void 0 : e.removeAttribute("style");
                });
              }),
              e === v.LEAVE &&
                (u == null || u.removeEventListener("keypress", T, !0),
                u == null || u.removeEventListener("keydown", T, !0)),
              _ == null || _());
          });
        },
        H = function (n) {
          var e = t.appear,
            o = e === void 0 ? !1 : e,
            a = t.enter,
            i = a === void 0 ? !0 : a,
            l = t.exit,
            s = l === void 0 ? !0 : l,
            u =
              n === v.ENTER
                ? i
                : n === v.LEAVE
                  ? s
                  : n === v.APPEAR
                    ? o
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            n,
                        );
                      })();
          if (u) {
            (W(), (N.current += 1));
            var c = N.current;
            V(n)
              .catch(function (e) {
                r("WAWebNoop")(e);
              })
              .finally(function () {
                q();
              })
              .then(function () {
                !x.current ||
                  c !== N.current ||
                  P.current == null ||
                  P.current();
              });
          } else P.current == null || P.current();
        },
        G = function (t, n) {
          (g == null || g(), H(n ? v.APPEAR : v.ENTER));
        },
        z = function (t) {
          (S == null || S(), H(v.LEAVE));
        },
        j = function (t) {
          var e,
            n =
              (e =
                t == null || t.getComponent == null
                  ? void 0
                  : t.getComponent()) != null
                ? e
                : t;
          $.current = n;
          var r = a == null ? void 0 : a.ref;
          r && (typeof r == "function" ? r(n) : (r.current = n));
        },
        K = a;
      if (c == null) {
        var Q = h.only(K);
        K = y(Q, { ref: j });
      }
      return f.jsx(
        r("WAWebTransitionPrimitive.react"),
        babelHelpers.extends(
          {
            resolveNode: function () {
              return w(L(k));
            },
          },
          I,
          {
            addEndListener: function (t, n) {
              P.current = n;
            },
            onEnter: G,
            onExit: z,
            children: K,
          },
        ),
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      if (e && !o("WAWebTransitions").Transitions[e])
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  " ",
                  " wasn't found in VelocityTransitionGroupChild transitions.",
                ])),
              e,
            )
            .sendLogs("transition-name"),
          r("err")("Invalid transitionName")
        );
      return o("WAWebTransitions").Transitions[e];
    }
    function L(e) {
      var t = o("WAWebTransitions").Transitions[e];
      return (
        (t == null ? void 0 : t.enter) != null ||
        (t == null ? void 0 : t.leave) != null
      );
    }
    function E(e, t, n) {
      var r = e + ":" + k(t);
      return n == null ? r : r + ":" + n;
    }
    function k(e) {
      var t,
        n = e == null ? null : Reflect.get(e, "type");
      return typeof n == "string" ? n : (t = I(n)) != null ? t : "anonymous";
    }
    function I(e) {
      if (typeof e == "function") {
        var t,
          n =
            (t = Object.getOwnPropertyDescriptor(e, "displayName")) == null
              ? void 0
              : t.value;
        return typeof n == "string" ? n : e.name === "" ? null : e.name;
      }
      if (typeof e == "object" && e != null) {
        var r,
          o = Reflect.get(e, "displayName");
        return typeof o == "string"
          ? o
          : I(
              (r = Reflect.get(e, "render")) != null
                ? r
                : Reflect.get(e, "type"),
            );
      }
      return null;
    }
    function T(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    function D(e, t, o) {
      var a = r("WAWebNoop"),
        i = new (p || (p = n("Promise")))(function (e) {
          a = e;
        }),
        l = self.setTimeout(
          function () {
            (o(), a());
          },
          Math.max(x, 2 * t + $),
        );
      return p.race([e, i]).finally(function () {
        self.clearTimeout(l);
      });
    }
    var x = 1e3,
      $ = 500;
    l.default = S;
  },
  98,
);
