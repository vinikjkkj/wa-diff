__d(
  "WAWebListUseDragAndAutoScrollForSafari",
  [
    "WAStartAnimationLoop",
    "react",
    "useWAWebStableCallback",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = 150,
      m = 50,
      p = 6,
      _ = { addDragScroll: null, removeDragScroll: null };
    function f(e) {
      var t = e.getBoundingClientRect(),
        n = t.bottom,
        r = t.top,
        a = 0,
        i = !1,
        l,
        s = function () {
          ((a -= p), (e.scrollTop = a), (!i || a <= 0) && (l == null || l()));
        },
        u = function () {
          ((a += p),
            (e.scrollTop = a),
            (!i || a > e.scrollHeight) && (l == null || l()));
        },
        c = function (c) {
          var t = a >= 0 && c.clientY > r && c.clientY < r + m,
            d = a <= e.scrollHeight && c.clientY > n - m && c.clientY <= n;
          !i && (t || d)
            ? ((i = !0),
              (a = e.scrollTop),
              (l = o("WAStartAnimationLoop").startAnimationLoop(t ? s : u)))
            : !t && !d && (i = !1);
        },
        d = function () {
          ((i = !1), l == null || l());
        };
      return { handleDragOver: c, forceStop: d };
    }
    function g(e) {
      var t = c(
          function () {
            return f(e);
          },
          [e],
        ),
        n = r("useWAWebThrottledCallback")(t.handleDragOver, d),
        o = r("useWAWebStableCallback")(function () {
          e.addEventListener("dragover", n);
        }),
        a = r("useWAWebStableCallback")(function () {
          (e.removeEventListener("dragover", n), n.cancel(), t.forceStop());
        });
      return (
        u(
          function () {
            return a;
          },
          [a],
        ),
        { removeDragScroll: a, addDragScroll: o }
      );
    }
    ((l.EMPTY_SCROLL_EVENTS = _), (l.useDragAndAutoScrollForSafari = g));
  },
  98,
);
