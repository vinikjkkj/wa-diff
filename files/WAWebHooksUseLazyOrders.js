__d(
  "WAWebHooksUseLazyOrders",
  [
    "WAWebFrontendConstants",
    "react",
    "react-compiler-runtime",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useState,
      p = 2,
      _ = 2,
      f = 100;
    function g(e, t, n) {
      var a = o("react-compiler-runtime").c(25),
        i;
      a[0] !== e
        ? ((i = e === void 0 ? [] : e), (a[0] = e), (a[1] = i))
        : (i = a[1]);
      var l = i,
        s = m(0),
        u = s[0],
        d = s[1],
        _;
      a[2] !== l || a[3] !== u
        ? ((_ = l.slice(0, u)), (a[2] = l), (a[3] = u), (a[4] = _))
        : (_ = a[4]);
      var g = _,
        C;
      a[5] !== l.length
        ? ((C = function (t) {
            d(function (e) {
              var n = t(e) || e;
              return n > -1 && n < l.length ? n : l.length;
            });
          }),
          (a[5] = l.length),
          (a[6] = C))
        : (C = a[6]);
      var b = C,
        v = y,
        S;
      a[7] !== n
        ? ((S = function () {
            var e;
            (e = n.current) == null || e.scroll({ behavior: "smooth", top: 0 });
          }),
          (a[7] = n),
          (a[8] = S))
        : (S = a[8]);
      var R = S,
        L;
      a[9] !== b
        ? ((L = function (t) {
            v(t) && b(h);
          }),
          (a[9] = b),
          (a[10] = L))
        : (L = a[10]);
      var E = r("useWAWebThrottledCallback")(L, f),
        k;
      a[11] !== E
        ? ((k = function (t) {
            t.currentTarget instanceof HTMLElement && E(t.currentTarget);
          }),
          (a[11] = E),
          (a[12] = k))
        : (k = a[12]);
      var I = k,
        T;
      a[13] !== t || a[14] !== u || a[15] !== b
        ? ((T = function (n) {
            if (n) {
              var e = Math.round(n.clientHeight / t) + p;
              t > 0 &&
                u < e &&
                b(function () {
                  return e;
                });
            }
          }),
          (a[13] = t),
          (a[14] = u),
          (a[15] = b),
          (a[16] = T))
        : (T = a[16]);
      var D = T,
        x,
        $;
      (a[17] !== I || a[18] !== D || a[19] !== n
        ? ((x = function () {
            var e = n.current;
            return (
              e && (e.addEventListener("scroll", I), D(e)),
              function () {
                e == null || e.removeEventListener("scroll", I);
              }
            );
          }),
          ($ = [n, D, I]),
          (a[17] = I),
          (a[18] = D),
          (a[19] = n),
          (a[20] = x),
          (a[21] = $))
        : ((x = a[20]), ($ = a[21])),
        c(x, $));
      var P;
      return (
        a[22] !== g || a[23] !== R
          ? ((P = { ordersLazylist: g, scrollToTop: R }),
            (a[22] = g),
            (a[23] = R),
            (a[24] = P))
          : (P = a[24]),
        P
      );
    }
    function h(e) {
      return e + _;
    }
    function y(e) {
      return (
        e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >=
        e.scrollHeight - e.clientHeight
      );
    }
    l.useLazyOrders = g;
  },
  98,
);
