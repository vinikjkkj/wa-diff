__d(
  "WAWebChatStatus",
  [
    "fbt",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebIdleComponent.react",
    "WAWebStateUtils",
    "WAWebTextStatusCollection",
    "WAWebWid",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
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
      var t = o("react-compiler-runtime").c(15),
        n = e.status,
        a = e.waitIdle,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["id", "stale", "status"]),
          (l = { isStrong: !1 }),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var s = o("useWAWebModelValues").useModelValues(n, i, l),
        c;
      t[2] !== s.status
        ? ((c = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            selectable: !0,
            titlify: !0,
            text: s.status,
            breakWord: !0,
            ellipsify: !0,
          })),
          (t[2] = s.status),
          (t[3] = c))
        : (c = t[3]);
      var d = c,
        m;
      t[4] !== s || t[5] !== d
        ? ((m = function () {
            return s.id.isRegularUser()
              ? (o("WAWebTextStatusCollection").TextStatusCollection.find(s.id),
                s.status === void 0
                  ? _
                  : s.isValidTextStatus()
                    ? d
                    : u.jsx(u.Fragment, {}))
              : o("WAWebBotUtils").isMetaAiBot(s.id)
                ? f
                : _;
          }),
          (t[4] = s),
          (t[5] = d),
          (t[6] = m))
        : (m = t[6]);
      var p = m,
        g;
      t[7] !== s || t[8] !== d
        ? ((g = o("WAWebStateUtils").unproxy(s).stale ? _ : d),
          (t[7] = s),
          (t[8] = d),
          (t[9] = g))
        : (g = t[9]);
      var h = g,
        y;
      return (
        t[10] !== p || t[11] !== h || t[12] !== s.id || t[13] !== a
          ? ((y = u.jsx(r("WAWebIdleComponent.react"), {
              id: s.id,
              onComplex: p,
              waitIdle: a,
              children: h,
            })),
            (t[10] = p),
            (t[11] = h),
            (t[12] = s.id),
            (t[13] = a),
            (t[14] = y))
          : (y = t[14]),
        y
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
      var t = e.id,
        n = p(function () {
          return o("WAWebTextStatusCollection").TextStatusCollection.get(t);
        }),
        a = n[0],
        i = n[1],
        l = m(null);
      return (
        d(function () {
          if (!a) {
            var e = o("WAWebContactCollection").ContactCollection.gadd(t);
            i(e.getStatus());
          }
        }, []),
        d(
          function () {
            var e = l.current;
            if (((l.current = t), !r("WAWebWid").equals(t, e))) {
              var n = o("WAWebContactCollection").ContactCollection.gadd(t);
              i(n.getStatus());
            }
          },
          [t],
        ),
        a ? u.jsx(g, { status: a, waitIdle: e.waitIdle }) : _
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.willStatusDisplayContent = h),
      (l.StatusWrapper = y));
  },
  226,
);
