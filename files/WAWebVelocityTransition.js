__d(
  "WAWebVelocityTransition",
  [
    "invariant",
    "Promise",
    "WALogger",
    "WAWebIdleTaskRunner",
    "WAWebNoop",
    "WAWebThirdPartyMigrationGatingUtils",
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
    "react-transition-group",
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
        T = b(!0),
        D = b(),
        x = b(),
        $ = b(),
        P = b(0),
        N = function (n) {
          if ((n === void 0 && (n = !0), c != null && c.current != null))
            return c.current;
          var t = D.current;
          if (t != null) {
            if (
              t instanceof HTMLElement ||
              o("WAWebUimUtils").isCrossWindowHTMLElement(t)
            )
              return t;
            var r = t.getElement == null ? void 0 : t.getElement();
            if (r) return r;
          }
          if (!n) return null;
          var a = x.current;
          return (
            a != null &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[VelocityTransitionGroupChild] findDOMNode fallback: ",
                      "",
                    ])),
                  u,
                )
                .sendLogs("velocity-transition-group-find-dom-node"),
            a
          );
        },
        M = r("useWAWebStableCallback")(function () {
          var e;
          return (e = N(!1)) != null ? e : x.current;
        }),
        w = b(0);
      C(
        function () {
          w.current += 1;
          var e = w.current;
          return (
            (T.current = !0),
            function () {
              T.current = !1;
              var t = M();
              queueMicrotask(function () {
                w.current === e &&
                  !T.current &&
                  ((P.current += 1),
                  ($.current = null),
                  r("WAWebVelocityAnimate")(t, "finish"));
              });
            }
          );
        },
        [M],
      );
      var A = b(!1),
        F = b(),
        O = function () {
          ((F.current = o("WAWebIdleTaskRunner").UIBusyTasks.setBusy(
            F.current,
          )),
            A.current ||
              ((A.current = !0),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0)));
        },
        B = function () {
          (F.current != null &&
            (o("WAWebIdleTaskRunner").UIBusyTasks.clearBusy(F.current),
            delete F.current),
            A.current &&
              ((A.current = !1),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1)));
        },
        W = function (t, n) {
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
        q = function (t) {
          var e = t;
          (e === v.APPEAR && (e = v.ENTER),
            e === "enter" || e === "leave" || s(0, 66980));
          var a = R(k),
            i = a[e];
          if (!a || !i) return (p || (p = n("Promise"))).resolve();
          var u = r("omit")(a, ["enter", "leave"]),
            c = N(),
            d = W(c, i);
          e === v.LEAVE &&
            (c == null || c.setAttribute("pointerEvents", "none"),
            c == null || c.addEventListener("keypress", L, !0),
            c == null || c.addEventListener("keydown", L, !0));
          var m = 0,
            f = (p || (p = n("Promise"))).all(
              d.map(function (e) {
                var t,
                  n,
                  o,
                  a = e.delay,
                  i = e.drag,
                  s = e.duration,
                  c = e.easing,
                  d = e.nodes,
                  p = e.props,
                  _ = e.stagger,
                  f = (t = u.delay) != null ? t : 0;
                l ? (f = l) : a != null && a !== 0 && (f = a);
                var g =
                    typeof s == "number" && s
                      ? s
                      : (n = u.duration) != null
                        ? n
                        : 0,
                  h = Array.isArray(d) ? d.length : 1;
                return (
                  (m = Math.max(
                    m,
                    f +
                      (i === !0 ? Math.max(g, 200) : g) +
                      (_ != null ? _ : 0) * Math.max(h - 1, 0),
                  )),
                  r("WAWebVelocityAnimate")(d, p, {
                    easing:
                      (o = c != null ? c : u.easing) != null ? o : "easeInSine",
                    duration: g,
                    delay: f,
                    queue: u.queue || !1,
                    stagger: _ != null ? _ : !1,
                    drag: i || !1,
                  })
                );
              }),
            );
          return (
            o(
              "WAWebThirdPartyMigrationGatingUtils",
            ).isVelocityAnimateMigrationEnabled()
              ? E(f, m, function () {
                  for (var e of d) {
                    var t = e.nodes;
                    r("WAWebVelocityAnimate")(t, "finish");
                  }
                })
              : f
          ).finally(function () {
            (u.cleanOnComplete === !0 &&
              e === v.ENTER &&
              d.forEach(function (e) {
                var t = e.nodes,
                  n = Array.isArray(t) ? t : [t];
                n.forEach(function (e) {
                  return e == null ? void 0 : e.removeAttribute("style");
                });
              }),
              e === v.LEAVE &&
                (c == null || c.removeEventListener("keypress", L, !0),
                c == null || c.removeEventListener("keydown", L, !0)),
              _ == null || _());
          });
        },
        U = function (n) {
          var e = t.appear,
            a = e === void 0 ? !1 : e,
            i = t.enter,
            l = i === void 0 ? !0 : i,
            s = t.exit,
            u = s === void 0 ? !0 : s,
            c =
              n === v.ENTER
                ? l
                : n === v.LEAVE
                  ? u
                  : n === v.APPEAR
                    ? a
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            n,
                        );
                      })();
          if (c) {
            (O(), (P.current += 1));
            var d = P.current,
              m = o(
                "WAWebThirdPartyMigrationGatingUtils",
              ).isVelocityAnimateMigrationEnabled()
                ? q(n).catch(function (e) {
                    r("WAWebNoop")(e);
                  })
                : q(n);
            m.finally(function () {
              B();
            }).then(function () {
              !T.current || d !== P.current || $.current == null || $.current();
            });
          } else $.current == null || $.current();
        },
        V = function (t, n) {
          (g == null || g(), (x.current = t), U(n ? v.APPEAR : v.ENTER));
        },
        H = function (t) {
          (S == null || S(), (x.current = t), U(v.LEAVE));
        },
        G = function (t) {
          var e,
            n =
              (e =
                t == null || t.getComponent == null
                  ? void 0
                  : t.getComponent()) != null
                ? e
                : t;
          D.current = n;
          var r = a == null ? void 0 : a.ref;
          r && (typeof r == "function" ? r(n) : (r.current = n));
        },
        z = a;
      if (c == null) {
        var j = h.only(z);
        z = y(j, { ref: G });
      }
      return o(
        "WAWebThirdPartyMigrationGatingUtils",
      ).isVelocityAnimateMigrationEnabled()
        ? f.jsx(
            r("WAWebTransitionPrimitive.react"),
            babelHelpers.extends(
              {
                resolveNode: function () {
                  return N();
                },
              },
              I,
              {
                addEndListener: function (t, n) {
                  $.current = n;
                },
                onEnter: V,
                onExit: H,
                children: z,
              },
            ),
          )
        : f.jsx(
            o("react-transition-group").Transition,
            babelHelpers.extends({ nodeRef: c }, I, {
              addEndListener: function (t, n) {
                $.current = n;
              },
              onEnter: V,
              onExit: H,
              children: z,
            }),
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
      (e.preventDefault(), e.stopPropagation());
    }
    function E(e, t, o) {
      var a = r("WAWebNoop"),
        i = new (p || (p = n("Promise")))(function (e) {
          a = e;
        }),
        l = self.setTimeout(
          function () {
            (o(), a());
          },
          Math.max(k, 2 * t + I),
        );
      return p.race([e, i]).finally(function () {
        self.clearTimeout(l);
      });
    }
    var k = 1e3,
      I = 500;
    l.default = S;
  },
  98,
);
