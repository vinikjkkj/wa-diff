__d(
  "useIntersectionObserver",
  [
    "DOMRectReadOnly",
    "ExecutionEnvironment",
    "JSScheduler",
    "observeIntersection",
    "react",
    "react-compiler-runtime",
    "useDynamicCallbackDANGEROUS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = s || (s = o("react")),
      d = s,
      m = d.useCallback,
      p = d.useLayoutEffect,
      _ = d.useRef,
      f = { bottom: 0, left: 0, right: 0, top: 0 },
      g = r("DOMRectReadOnly").fromRect(),
      h = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
      };
    function y(e) {
      var t;
      if (e == null) t = f;
      else {
        if (typeof e == "string") return e;
        typeof e == "number"
          ? (t = { bottom: e, left: e, right: e, top: e })
          : (t = babelHelpers.extends({}, f, e));
      }
      var n = t,
        r = n.bottom,
        o = n.left,
        a = n.right,
        i = n.top;
      return i + "px " + a + "px " + r + "px " + o + "px";
    }
    function C(e, t, n, o) {
      var a = t.root,
        i = t.rootMargin,
        l = t.scrollMargin,
        s = t.threshold,
        u = a === null ? null : a(),
        c =
          e == null ||
          e.element !== n ||
          e.onIntersect !== o ||
          e.observedRoot !== u ||
          e.rootMargin !== i ||
          e.scrollMargin !== l ||
          e.threshold !== s;
      if (c) {
        e && e.subscription.remove();
        var d = r("observeIntersection")(n, o, {
          root: u,
          rootMargin: y(i),
          scrollMargin: y(l),
          threshold: s,
        });
        return babelHelpers.extends({}, t, {
          element: n,
          observedRoot: u,
          onIntersect: o,
          subscription: d,
        });
      }
      return e;
    }
    function b(e, t) {
      var n = o("react-compiler-runtime").c(16),
        a = t.disabled,
        i = t.root,
        l = t.rootMargin,
        s = t.scrollMargin,
        c = t.threshold,
        d = a === void 0 ? !1 : a,
        m = _(null),
        f = _(null),
        y = _(null),
        b = _(null),
        v = _(!1),
        S = r("useDynamicCallbackDANGEROUS")(e),
        R;
      n[0] !== S || n[1] !== i || n[2] !== l || n[3] !== s || n[4] !== c
        ? ((R = function (t) {
            if (m.current !== t) {
              if (m.current != null && t == null) {
                b.current != null &&
                  (u || (u = o("JSScheduler"))).cancelCallback(b.current);
                var e = m.current;
                b.current = (
                  u || (u = o("JSScheduler"))
                ).scheduleImmediatePriCallback(function () {
                  (m.current === null &&
                    v.current === !1 &&
                    S({
                      boundingClientRect: h,
                      intersectionRatio: 0,
                      intersectionRect: h,
                      isIntersecting: !1,
                      isVisible: !1,
                      rootBounds: g,
                      target: e,
                      time: Date.now(),
                    }),
                    (b.current = null));
                });
              }
              ((m.current = t),
                f.current != null &&
                  (f.current.subscription.remove(), (f.current = null)),
                y.current != null &&
                  (u || (u = o("JSScheduler"))).cancelCallback(y.current),
                (y.current = (
                  u || (u = o("JSScheduler"))
                ).scheduleImmediatePriCallback(function () {
                  (m.current != null &&
                    (f.current = C(
                      f.current,
                      { root: i, rootMargin: l, scrollMargin: s, threshold: c },
                      m.current,
                      S,
                    )),
                    (y.current = null));
                })));
            }
          }),
          (n[0] = S),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s),
          (n[4] = c),
          (n[5] = R))
        : (R = n[5]);
      var L = R,
        E,
        k;
      (n[6] !== d ||
      n[7] !== S ||
      n[8] !== i ||
      n[9] !== l ||
      n[10] !== s ||
      n[11] !== c
        ? ((E = function () {
            if (!d)
              return (
                y.current != null &&
                  (u || (u = o("JSScheduler"))).cancelCallback(y.current),
                (y.current = (
                  u || (u = o("JSScheduler"))
                ).scheduleImmediatePriCallback(function () {
                  (m.current != null &&
                    (f.current = C(
                      f.current,
                      { root: i, rootMargin: l, scrollMargin: s, threshold: c },
                      m.current,
                      S,
                    )),
                    (y.current = null));
                })),
                function () {
                  (f.current != null &&
                    (f.current.subscription.remove(), (f.current = null)),
                    y.current != null &&
                      ((u || (u = o("JSScheduler"))).cancelCallback(y.current),
                      (y.current = null)));
                }
              );
          }),
          (k = [S, i, d, l, s, c]),
          (n[6] = d),
          (n[7] = S),
          (n[8] = i),
          (n[9] = l),
          (n[10] = s),
          (n[11] = c),
          (n[12] = E),
          (n[13] = k))
        : ((E = n[12]), (k = n[13])),
        p(E, k));
      var I, T;
      return (
        n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = function () {
              return (
                (v.current = !1),
                function () {
                  v.current = !0;
                }
              );
            }),
            (T = []),
            (n[14] = I),
            (n[15] = T))
          : ((I = n[14]), (T = n[15])),
        p(I, T),
        L
      );
    }
    function v(e, t, n) {
      return S;
    }
    function S(e) {}
    var R = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? b : v;
    l.default = R;
  },
  98,
);
