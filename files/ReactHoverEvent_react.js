__d(
  "ReactHoverEvent.react",
  [
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t, n) {
      return {
        clientX: t.clientX,
        clientY: t.clientY,
        pageX: t.pageX,
        pageY: t.pageY,
        screenX: t.screenX,
        screenY: t.screenY,
        target: n,
        timeStamp: t.timeStamp,
        type: e,
        x: t.clientX,
        y: t.clientY,
      };
    }
    var m = { passive: !0 };
    function p(e, t) {
      for (var n = t; n != null; ) {
        if (n === e) return !0;
        if (n._hoverEventTarget != null) return !1;
        n = n.parentNode;
      }
      return !1;
    }
    function _(e, t) {
      var n,
        a = o("react-compiler-runtime").c(17),
        i = t.disabled,
        l = t.onHoverChange,
        s = t.onHoverEnd,
        _ = t.onHoverMove,
        f = t.onHoverStart,
        g = (n = r("ReactUseEvent.react"))("touchstart", m),
        h = n("mouseover", m),
        y = n("mouseout", m),
        C = n("mousemove", m),
        b = n("pointerover", m),
        v = n("pointerout", m),
        S = n("pointermove", m),
        R = n("pointercancel", m),
        L;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { isHovered: !1, isTouched: !1 }), (a[0] = L))
        : (L = a[0]);
      var E = c(L),
        k,
        I;
      (a[1] !== i ||
      a[2] !== C ||
      a[3] !== y ||
      a[4] !== h ||
      a[5] !== l ||
      a[6] !== s ||
      a[7] !== _ ||
      a[8] !== f ||
      a[9] !== R ||
      a[10] !== S ||
      a[11] !== v ||
      a[12] !== b ||
      a[13] !== e ||
      a[14] !== g
        ? ((k = function () {
            var t = e.current,
              n = E.current;
            if (t !== null && n !== null) {
              t._hoverEventTarget = !0;
              var r = document,
                a = function (a) {
                  if (i === !0) {
                    m(a);
                    return;
                  }
                  o("ReactEventHookPropagation").hasEventHookPropagationStopped(
                    a,
                    "useHover",
                  ) ||
                    (o("ReactEventHookPropagation").stopEventHookPropagation(
                      a,
                      "useHover",
                    ),
                    !n.isHovered &&
                      !p(t, a.relatedTarget) &&
                      ((n.isHovered = !0),
                      f && f(d("hoverstart", a, t)),
                      l && l(!0),
                      o("ReactEventHelpers").hasPointerEvents
                        ? (S.setListener(r, c),
                          R.setListener(r, m),
                          v.setListener(r, u))
                        : y.setListener(r, u)));
                },
                u = function (r) {
                  n.isHovered &&
                    !p(t, r.relatedTarget) &&
                    ((n.isHovered = !1),
                    s && s(d("hoverend", r, t)),
                    l && l(!1),
                    m(r));
                },
                c = function (r) {
                  if (((n.isTouched = !1), i === !0)) {
                    m(r);
                    return;
                  }
                  n.isHovered && _ && _(d("hovermove", r, t));
                },
                m = function (t) {
                  ((n.isTouched = !1),
                    o("ReactEventHelpers").hasPointerEvents
                      ? (S.setListener(r, null),
                        R.setListener(r, null),
                        v.setListener(r, null))
                      : y.setListener(r, null),
                    u(t));
                };
              (o("ReactEventHelpers").hasPointerEvents
                ? b.setListener(t, function (e) {
                    e.pointerType !== "touch" && a(e);
                  })
                : (h.setListener(t, function (e) {
                    n.isTouched || a(e);
                  }),
                  g.setListener(t, function () {
                    n.isTouched = !0;
                  }),
                  C.setListener(r, c)),
                n.isHovered &&
                  (o("ReactEventHelpers").hasPointerEvents
                    ? (S.setListener(r, c),
                      R.setListener(r, m),
                      v.setListener(r, u))
                    : y.setListener(r, u)));
            }
          }),
          (I = [i, l, s, _, f, R, S, v, b, C, y, h, e, g]),
          (a[1] = i),
          (a[2] = C),
          (a[3] = y),
          (a[4] = h),
          (a[5] = l),
          (a[6] = s),
          (a[7] = _),
          (a[8] = f),
          (a[9] = R),
          (a[10] = S),
          (a[11] = v),
          (a[12] = b),
          (a[13] = e),
          (a[14] = g),
          (a[15] = k),
          (a[16] = I))
        : ((k = a[15]), (I = a[16])),
        u(k, I));
    }
    l.useHover = _;
  },
  98,
);
