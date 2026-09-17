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
    "WAWebVelocityAnimate",
    "compactMap",
    "err",
    "isEmptyIterable",
    "omit",
    "react",
    "react-transition-group",
    "useWAWebOnUnmount",
    "useWAWebUnmountSignal",
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
      C = g.useRef,
      b = { APPEAR: "appear", ENTER: "enter", LEAVE: "leave" };
    function v(t) {
      var a = t.children,
        i = t.delay,
        l = i === void 0 ? 0 : i,
        u = t.displayName,
        c = t.nodeRef,
        _ = t.onAnimationComplete,
        g = t.onEnter,
        v = t.onExit,
        L = t.transitionName,
        E = babelHelpers.objectWithoutPropertiesLoose(t, d),
        k = r("useWAWebUnmountSignal")(),
        I = C(),
        T = C(),
        D = C(),
        x = C(0),
        $ = function (n) {
          if ((n === void 0 && (n = !0), c != null && c.current != null))
            return c.current;
          var t = I.current;
          if (t != null) {
            if (t instanceof HTMLElement) return t;
            var r = t.getElement == null ? void 0 : t.getElement();
            if (r) return r;
          }
          if (!n) return null;
          var a = T.current;
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
        };
      r("useWAWebOnUnmount")(function () {
        var e = $(!1);
        r("WAWebVelocityAnimate")(e, "finish");
      });
      var P = C(!1),
        N = C(),
        M = function () {
          ((N.current = o("WAWebIdleTaskRunner").UIBusyTasks.setBusy(
            N.current,
          )),
            P.current ||
              ((P.current = !0),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!0)));
        },
        w = function () {
          (N.current != null &&
            (o("WAWebIdleTaskRunner").UIBusyTasks.clearBusy(N.current),
            delete N.current),
            P.current &&
              ((P.current = !1),
              o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(!1)));
        },
        A = function (t, n) {
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
        F = function (t) {
          var e = t;
          (e === b.APPEAR && (e = b.ENTER),
            e === "enter" || e === "leave" || s(0, 66980));
          var o = S(L),
            a = o[e];
          if (!o || !a) return (p || (p = n("Promise"))).resolve();
          var i = r("omit")(o, ["enter", "leave"]),
            u = $(),
            c = A(u, a);
          return (
            e === b.LEAVE &&
              (u == null || u.setAttribute("pointerEvents", "none"),
              u == null || u.addEventListener("keypress", R, !0),
              u == null || u.addEventListener("keydown", R, !0)),
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
                  e === b.ENTER &&
                  c.forEach(function (e) {
                    var t = e.nodes,
                      n = Array.isArray(t) ? t : [t];
                    n.forEach(function (e) {
                      return e == null ? void 0 : e.removeAttribute("style");
                    });
                  }),
                  e === b.LEAVE &&
                    (u == null || u.removeEventListener("keypress", R, !0),
                    u == null || u.removeEventListener("keydown", R, !0)),
                  _ == null || _());
              })
          );
        },
        O = function (n) {
          var e = t.appear,
            r = e === void 0 ? !1 : e,
            o = t.enter,
            a = o === void 0 ? !0 : o,
            i = t.exit,
            l = i === void 0 ? !0 : i,
            s =
              n === b.ENTER
                ? a
                : n === b.LEAVE
                  ? l
                  : n === b.APPEAR
                    ? r
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            n,
                        );
                      })();
          if (s) {
            (M(), (x.current += 1));
            var u = x.current;
            F(n)
              .finally(function () {
                w();
              })
              .then(function () {
                k.aborted ||
                  u !== x.current ||
                  D.current == null ||
                  D.current();
              });
          } else D.current == null || D.current();
        },
        B = function (t, n) {
          (g == null || g(), (T.current = t), O(n ? b.APPEAR : b.ENTER));
        },
        W = function (t) {
          (v == null || v(), (T.current = t), O(b.LEAVE));
        },
        q = function (t) {
          var e,
            n =
              (e =
                t == null || t.getComponent == null
                  ? void 0
                  : t.getComponent()) != null
                ? e
                : t;
          I.current = n;
          var r = a == null ? void 0 : a.ref;
          r && (typeof r == "function" ? r(n) : (r.current = n));
        },
        U = a;
      if (c == null) {
        var V = h.only(U);
        U = y(V, { ref: q });
      }
      return o(
        "WAWebThirdPartyMigrationGatingUtils",
      ).isVelocityAnimateMigrationEnabled()
        ? f.jsx(
            r("WAWebTransitionPrimitive.react"),
            babelHelpers.extends(
              {
                resolveNode: function () {
                  return $();
                },
              },
              E,
              {
                addEndListener: function (t, n) {
                  D.current = n;
                },
                onEnter: B,
                onExit: W,
                children: U,
              },
            ),
          )
        : f.jsx(
            o("react-transition-group").Transition,
            babelHelpers.extends({ nodeRef: c }, E, {
              addEndListener: function (t, n) {
                D.current = n;
              },
              onEnter: B,
              onExit: W,
              children: U,
            }),
          );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
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
    function R(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    l.default = v;
  },
  98,
);
