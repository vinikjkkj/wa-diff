__d(
  "WAWebMutedChatsBar.react",
  [
    "WAWebKeyboardHotKeys.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(36),
        n = e.mutedChats,
        a = e.mutedChatsCollapsed,
        i = e.onClick,
        l = r("useWAWebPrevious")(n),
        u;
      t[0] !== n
        ? ((u = function () {
            return _(n);
          }),
          (t[0] = n),
          (t[1] = u))
        : (u = t[1]);
      var c = m(u),
        p = c[0],
        f = c[1],
        g;
      t[2] !== n
        ? ((g = function () {
            f(_(n));
          }),
          (t[2] = n),
          (t[3] = g))
        : (g = t[3]);
      var h = g,
        y;
      if (t[4] !== h || t[5] !== n) {
        var C;
        (t[7] !== h
          ? ((C = function (t) {
              return {
                source: t,
                eventOrEvents: "change:unreadCount",
                callback: h,
              };
            }),
            (t[7] = h),
            (t[8] = C))
          : (C = t[8]),
          (y = n.map(C)),
          (t[4] = h),
          (t[5] = n),
          (t[6] = y));
      } else y = t[6];
      o("useWAWebListener").useListeners(y);
      var b;
      t[9] !== h ||
      t[10] !== n.length ||
      t[11] !== (l == null ? void 0 : l.length)
        ? ((b = function () {
            (l == null ? void 0 : l.length) !== n.length && h();
          }),
          (t[9] = h),
          (t[10] = n.length),
          (t[11] = l == null ? void 0 : l.length),
          (t[12] = b))
        : (b = t[12]);
      var v;
      (t[13] !== h || t[14] !== n || t[15] !== l
        ? ((v = [h, n, l]), (t[13] = h), (t[14] = n), (t[15] = l), (t[16] = v))
        : (v = t[16]),
        d(b, v));
      var S;
      t[17] !== i
        ? ((S = function (t) {
            (t.preventDefault(), t.stopPropagation(), i());
          }),
          (t[17] = i),
          (t[18] = S))
        : (S = t[18]);
      var R = S,
        L = n.length,
        E;
      t[19] !== R
        ? ((E = { enter: R }), (t[19] = R), (t[20] = E))
        : (E = t[20]);
      var k = E,
        I;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "x78zum5 xdt5ytf x6s0dn4 xl56j7k x1gnnpzl x1q3ajuy x1gx403c x1277o0a",
          }),
          (t[21] = I))
        : (I = t[21]);
      var T;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = {
            className: "x78zum5 x1q0g3np x1qughib x1nxh6w3 xhslqc4 x12ln5q2",
          }),
          (t[22] = T))
        : (T = t[22]);
      var D = a ? "Show " + L + " Muted Chats" : "Hide " + L + " Muted Chats",
        x;
      t[23] !== D
        ? ((x = s.jsx("span", { children: D })), (t[23] = D), (t[24] = x))
        : (x = t[24]);
      var $;
      t[25] !== p
        ? (($ =
            p > 0
              ? s.jsx("span", {
                  className:
                    "x10l6tqk x1atx4j1 x1kjyjoh x1tsellj x1xaadd7 x682dto x19cawur xpqt37d x7e1eld x1pg5gke xk50ysn xtqhoxe xhslqc4 x2b8uid x1h3rtpe x1m50h0k x1i47u5t x1g9atge xlh56gj",
                  children: Math.min(p, 99),
                })
              : null),
          (t[25] = p),
          (t[26] = $))
        : ($ = t[26]);
      var P;
      t[27] !== x || t[28] !== $
        ? ((P = s.jsxs(
            "div",
            babelHelpers.extends({}, T, { children: [x, $] }),
          )),
          (t[27] = x),
          (t[28] = $),
          (t[29] = P))
        : (P = t[29]);
      var N;
      t[30] !== i || t[31] !== P
        ? ((N = s.jsx(
            "div",
            babelHelpers.extends({}, I, { onClick: i, children: P }),
          )),
          (t[30] = i),
          (t[31] = P),
          (t[32] = N))
        : (N = t[32]);
      var M;
      return (
        t[33] !== k || t[34] !== N
          ? ((M = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: k,
              children: N,
            })),
            (t[33] = k),
            (t[34] = N),
            (t[35] = M))
          : (M = t[35]),
        M
      );
    }
    function _(e) {
      return e.reduce(function (e, t) {
        return e + t.unreadCount;
      }, 0);
    }
    l.default = p;
  },
  98,
);
