__d(
  "WAWebVelocityTransition",
  [
    "invariant",
    "Promise",
    "WALogger",
    "WAWebIdleTaskRunner",
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
        E = t.transitionName,
        k = babelHelpers.objectWithoutPropertiesLoose(t, d),
        I = b(!0),
        T = b(),
        D = b(),
        x = b(),
        $ = b(0),
        P = function (n) {
          if ((n === void 0 && (n = !0), c != null && c.current != null))
            return c.current;
          var t = T.current;
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
          var a = D.current;
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
        N = r("useWAWebStableCallback")(function () {
          var e;
          return (e = P(!1)) != null ? e : D.current;
        }),
        M = b(0);
      C(
        function () {
          M.current += 1;
          var e = M.current;
          return (
            (I.current = !0),
            function () {
              I.current = !1;
              var t = N();
              queueMicrotask(function () {
                M.current === e &&
                  !I.current &&
                  (($.current += 1),
                  (x.current = null),
                  r("WAWebVelocityAnimate")(t, "finish"));
              });
            }
          );
        },
        [N],
      );
      var w = b(!1),
        A = b(),
        F = function () {
          ((A.current = o("WAWebIdleTaskRunner").UIBusyTasks.setBusy(
            A.current,
          )),
            w.current ||
              ((w.current = !0),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0)));
        },
        O = function () {
          (A.current != null &&
            (o("WAWebIdleTaskRunner").UIBusyTasks.clearBusy(A.current),
            delete A.current),
            w.current &&
              ((w.current = !1),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1)));
        },
        B = function (t, n) {
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
        W = function (t) {
          var e = t;
          (e === v.APPEAR && (e = v.ENTER),
            e === "enter" || e === "leave" || s(0, 66980));
          var o = R(E),
            a = o[e];
          if (!o || !a) return (p || (p = n("Promise"))).resolve();
          var i = r("omit")(o, ["enter", "leave"]),
            u = P(),
            c = B(u, a);
          return (
            e === v.LEAVE &&
              (u == null || u.setAttribute("pointerEvents", "none"),
              u == null || u.addEventListener("keypress", L, !0),
              u == null || u.addEventListener("keydown", L, !0)),
            (p || (p = n("Promise")))
              .all(
                c.map(function (e) {
                  var t,
                    n,
                    o,
                    a = e.delay,
                    s = e.drag,
                    u = e.duration,
                    c = e.easing,
                    d = e.nodes,
                    m = e.props,
                    p = e.stagger,
                    _ = (t = i.delay) != null ? t : 0;
                  return (
                    l ? (_ = l) : a != null && a !== 0 && (_ = a),
                    r("WAWebVelocityAnimate")(d, m, {
                      easing:
                        (n = c != null ? c : i.easing) != null
                          ? n
                          : "easeInSine",
                      duration: u || ((o = i.duration) != null ? o : 0),
                      delay: _,
                      queue: i.queue || !1,
                      stagger: p != null ? p : !1,
                      drag: s || !1,
                    })
                  );
                }),
              )
              .finally(function () {
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
                    (u == null || u.removeEventListener("keypress", L, !0),
                    u == null || u.removeEventListener("keydown", L, !0)),
                  _ == null || _());
              })
          );
        },
        q = function (n) {
          var e = t.appear,
            r = e === void 0 ? !1 : e,
            o = t.enter,
            a = o === void 0 ? !0 : o,
            i = t.exit,
            l = i === void 0 ? !0 : i,
            s =
              n === v.ENTER
                ? a
                : n === v.LEAVE
                  ? l
                  : n === v.APPEAR
                    ? r
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            n,
                        );
                      })();
          if (s) {
            (F(), ($.current += 1));
            var u = $.current;
            W(n)
              .finally(function () {
                O();
              })
              .then(function () {
                !I.current ||
                  u !== $.current ||
                  x.current == null ||
                  x.current();
              });
          } else x.current == null || x.current();
        },
        U = function (t, n) {
          (g == null || g(), (D.current = t), q(n ? v.APPEAR : v.ENTER));
        },
        V = function (t) {
          (S == null || S(), (D.current = t), q(v.LEAVE));
        },
        H = function (t) {
          var e,
            n =
              (e =
                t == null || t.getComponent == null
                  ? void 0
                  : t.getComponent()) != null
                ? e
                : t;
          T.current = n;
          var r = a == null ? void 0 : a.ref;
          r && (typeof r == "function" ? r(n) : (r.current = n));
        },
        G = a;
      if (c == null) {
        var z = h.only(G);
        G = y(z, { ref: H });
      }
      return o(
        "WAWebThirdPartyMigrationGatingUtils",
      ).isVelocityAnimateMigrationEnabled()
        ? f.jsx(
            r("WAWebTransitionPrimitive.react"),
            babelHelpers.extends(
              {
                resolveNode: function () {
                  return P();
                },
              },
              k,
              {
                addEndListener: function (t, n) {
                  x.current = n;
                },
                onEnter: U,
                onExit: V,
                children: G,
              },
            ),
          )
        : f.jsx(
            o("react-transition-group").Transition,
            babelHelpers.extends({ nodeRef: c }, k, {
              addEndListener: function (t, n) {
                x.current = n;
              },
              onEnter: U,
              onExit: V,
              children: G,
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
    l.default = S;
  },
  98,
);
