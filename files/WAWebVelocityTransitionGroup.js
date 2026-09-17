__d(
  "WAWebVelocityTransitionGroup",
  [
    "WAWebClassnames",
    "WAWebThirdPartyMigrationGatingUtils",
    "WAWebVelocityTransition",
    "react",
    "react-compiler-runtime",
    "react-transition-group",
    "stylex",
    "useWAWebTransitionPresence",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.Children;
    function m(t) {
      var n = o("react-compiler-runtime").c(20),
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
        u = l.appear,
        m = l.component,
        f = l.delay,
        g = l.displayName,
        h = l.enter,
        y = l.exit,
        C = l.onAnimationComplete,
        b = l.testid,
        v = l.transitionName,
        S = l.xstyle,
        R = m === void 0 ? "span" : m,
        L = v === void 0 ? "default" : v,
        E;
      n[3] !== S
        ? ((E = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (s || (s = r("stylex")))(S),
          )),
          (n[3] = S),
          (n[4] = E))
        : (E = n[4]);
      var k;
      if (
        n[5] !== u ||
        n[6] !== f ||
        n[7] !== g ||
        n[8] !== h ||
        n[9] !== y ||
        n[10] !== C ||
        n[11] !== a.children ||
        n[12] !== L
      ) {
        var I;
        ((k = o(
          "WAWebThirdPartyMigrationGatingUtils",
        ).isVelocityAnimateMigrationEnabled()
          ? c.jsx(p, {
              appear: u,
              enter: h,
              exit: y,
              transitionName: L,
              delay: f,
              onAnimationComplete: C,
              displayName: g,
              children: a.children,
            })
          : c.jsx(o("react-transition-group").TransitionGroup, {
              component: null,
              appear: u,
              enter: h,
              exit: y,
              children:
                (I = d.toArray(a.children)) == null
                  ? void 0
                  : I.map(function (e, t) {
                      return c.jsx(
                        r("WAWebVelocityTransition"),
                        {
                          transitionName: L,
                          delay: f,
                          onAnimationComplete: C,
                          displayName: g,
                          children: e,
                        },
                        _(e, t),
                      );
                    }),
            })),
          (n[5] = u),
          (n[6] = f),
          (n[7] = g),
          (n[8] = h),
          (n[9] = y),
          (n[10] = C),
          (n[11] = a.children),
          (n[12] = L),
          (n[13] = k));
      } else k = n[13];
      var T;
      return (
        n[14] !== R || n[15] !== i || n[16] !== E || n[17] !== k || n[18] !== b
          ? ((T = c.jsx(R, {
              ref: i,
              className: E,
              "data-testid": b,
              children: k,
            })),
            (n[14] = R),
            (n[15] = i),
            (n[16] = E),
            (n[17] = k),
            (n[18] = b),
            (n[19] = T))
          : (T = n[19]),
        T
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.appear,
        a = e.delay,
        i = e.displayName,
        l = e.enter,
        s = e.exit,
        u = e.onAnimationComplete,
        m = e.transitionName,
        p;
      if (
        t[0] !== a ||
        t[1] !== i ||
        t[2] !== s ||
        t[3] !== u ||
        t[4] !== e.children ||
        t[5] !== m
      ) {
        var f;
        ((p = []),
          (f = d.toArray(e.children)) == null ||
            f.forEach(function (e, t) {
              e != null &&
                p.push({
                  key: _(e, t),
                  element: {
                    child: e,
                    delay: a,
                    displayName: i,
                    exit: s,
                    onAnimationComplete: u,
                    transitionName: m,
                  },
                });
            }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = s),
          (t[3] = u),
          (t[4] = e.children),
          (t[5] = m),
          (t[6] = p));
      } else p = t[6];
      var g = r("useWAWebTransitionPresence")(p),
        h = g.initialKeys,
        y = g.items,
        C = g.notifyExited,
        b;
      if (
        t[7] !== n ||
        t[8] !== l ||
        t[9] !== h ||
        t[10] !== y ||
        t[11] !== C
      ) {
        var v;
        (t[13] !== n || t[14] !== l || t[15] !== h || t[16] !== C
          ? ((v = function (t) {
              var e = t.element;
              return c.jsx(
                r("WAWebVelocityTransition"),
                {
                  in: t.isPresent,
                  appear: h.has(t.key) ? n === !0 : l !== !1,
                  enter: l,
                  exit: e.exit,
                  transitionName: e.transitionName,
                  delay: e.delay,
                  onAnimationComplete: e.onAnimationComplete,
                  displayName: e.displayName,
                  onExited: function () {
                    return C(t.key);
                  },
                  children: e.child,
                },
                t.key,
              );
            }),
            (t[13] = n),
            (t[14] = l),
            (t[15] = h),
            (t[16] = C),
            (t[17] = v))
          : (v = t[17]),
          (b = y.map(v)),
          (t[7] = n),
          (t[8] = l),
          (t[9] = h),
          (t[10] = y),
          (t[11] = C),
          (t[12] = b));
      } else b = t[12];
      var S;
      return (
        t[18] !== b
          ? ((S = c.jsx(c.Fragment, { children: b })), (t[18] = b), (t[19] = S))
          : (S = t[19]),
        S
      );
    }
    function _(e, t) {
      var n = Reflect.get(e, "key");
      return n == null ? "unkeyed-" + t : String(n);
    }
    l.default = m;
  },
  98,
);
