__d(
  "WAWebChatStatus",
  [
    "fbt",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebFrontendTextStatusGetters",
    "WAWebIdleComponent.react",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGetters",
    "WAWebWid",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebTextStatusValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = u.jsx("span", {
        className: "x1lliihq x6ikm8r x10wlt62 xhslqc4 xlyipyv xuxw1ft",
        children: s._(/*BTDS*/ "Loading About\u2026"),
      }),
      f = u.jsx("span", {
        className: "x1lliihq x6ikm8r x10wlt62 xhslqc4 xlyipyv xuxw1ft",
        children: s._(/*BTDS*/ "Ask me anything"),
      });
    function g(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.status,
        a = e.waitIdle,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebFrontendTextStatusGetters").getStale,
            o("WAWebTextStatusGetters").getStatus,
          ]),
          (l = { isStrong: !1 }),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var s = o("useWAWebTextStatusValues").useTextStatusValues(n.id, i, l),
        c = s[0],
        d = s[1],
        m;
      t[2] !== d
        ? ((m = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            selectable: !0,
            titlify: !0,
            text: d,
            breakWord: !0,
            ellipsify: !0,
          })),
          (t[2] = d),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        g;
      t[4] !== d || t[5] !== n.id || t[6] !== p
        ? ((g = function () {
            return n.id.isRegularUser()
              ? (o("WAWebTextStatusCollection").TextStatusCollection.find(n.id),
                d === void 0
                  ? _
                  : r("isStringNotNullAndNotWhitespaceOnly")(d)
                    ? p
                    : u.jsx(u.Fragment, {}))
              : o("WAWebBotUtils").isMetaAiBot(n.id)
                ? f
                : _;
          }),
          (t[4] = d),
          (t[5] = n.id),
          (t[6] = p),
          (t[7] = g))
        : (g = t[7]);
      var h = g,
        y = c ? _ : p,
        C;
      return (
        t[8] !== h || t[9] !== y || t[10] !== n.id || t[11] !== a
          ? ((C = u.jsx(r("WAWebIdleComponent.react"), {
              id: n.id,
              onComplex: h,
              waitIdle: a,
              children: y,
            })),
            (t[8] = h),
            (t[9] = y),
            (t[10] = n.id),
            (t[11] = a),
            (t[12] = C))
          : (C = t[12]),
        C
      );
    }
    function h(e) {
      var t = o("WAWebTextStatusCollection").TextStatusCollection.get(e);
      if (!t) return !0;
      if (!e.isRegularUser()) return (o("WAWebBotUtils").isMetaAiBot(e), !0);
      var n = t.status;
      return n !== void 0 ? r("isStringNotNullAndNotWhitespaceOnly")(n) : !0;
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.id,
        a;
      t[0] !== n
        ? ((a = function () {
            return o("WAWebTextStatusCollection").TextStatusCollection.get(n);
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = p(a),
        l = i[0],
        s = i[1],
        c = m(null),
        f,
        h;
      if (
        (t[2] !== n
          ? ((f = function () {
              var e = c.current;
              if (((c.current = n), !r("WAWebWid").equals(n, e))) {
                var t = o("WAWebContactCollection").ContactCollection.gadd(n);
                s(t.getStatus());
              }
            }),
            (h = [n]),
            (t[2] = n),
            (t[3] = f),
            (t[4] = h))
          : ((f = t[3]), (h = t[4])),
        d(f, h),
        !l)
      )
        return _;
      var y;
      return (
        t[5] !== e.waitIdle || t[6] !== l
          ? ((y = u.jsx(g, { status: l, waitIdle: e.waitIdle })),
            (t[5] = e.waitIdle),
            (t[6] = l),
            (t[7] = y))
          : (y = t[7]),
        y
      );
    }
    ((l.willStatusDisplayContent = h), (l.StatusWrapper = y));
  },
  226,
);
