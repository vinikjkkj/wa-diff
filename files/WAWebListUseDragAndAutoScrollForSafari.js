__d(
  "WAWebListUseDragAndAutoScrollForSafari",
  [
    "WAStartAnimationLoop",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(15),
        n;
      t[0] !== e ? ((n = f(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var a = n,
        i = r("useWAWebThrottledCallback")(a.handleDragOver, d),
        l;
      t[2] !== e || t[3] !== i
        ? ((l = function () {
            e.addEventListener("dragover", i);
          }),
          (t[2] = e),
          (t[3] = i),
          (t[4] = l))
        : (l = t[4]);
      var s = r("useWAWebStableCallback")(l),
        c;
      t[5] !== e || t[6] !== a || t[7] !== i
        ? ((c = function () {
            (e.removeEventListener("dragover", i), i.cancel(), a.forceStop());
          }),
          (t[5] = e),
          (t[6] = a),
          (t[7] = i),
          (t[8] = c))
        : (c = t[8]);
      var m = r("useWAWebStableCallback")(c),
        p,
        _;
      (t[9] !== m
        ? ((p = function () {
            return m;
          }),
          (_ = [m]),
          (t[9] = m),
          (t[10] = p),
          (t[11] = _))
        : ((p = t[10]), (_ = t[11])),
        u(p, _));
      var g;
      return (
        t[12] !== s || t[13] !== m
          ? ((g = { removeDragScroll: m, addDragScroll: s }),
            (t[12] = s),
            (t[13] = m),
            (t[14] = g))
          : (g = t[14]),
        g
      );
    }
    ((l.EMPTY_SCROLL_EVENTS = _), (l.useDragAndAutoScrollForSafari = g));
  },
  98,
);
