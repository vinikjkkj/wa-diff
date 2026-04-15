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
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = u.jsx("span", {
        className: "x1lliihq x6ikm8r x10wlt62 xhslqc4 xlyipyv xuxw1ft",
        children: s._(/*BTDS*/ "Loading About\u2026"),
      }),
      _ = u.jsx("span", {
        className: "x1lliihq x6ikm8r x10wlt62 xhslqc4 xlyipyv xuxw1ft",
        children: s._(/*BTDS*/ "Ask me anything"),
      });
    function f(e) {
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
                  ? p
                  : s.isValidTextStatus()
                    ? d
                    : u.jsx(u.Fragment, {}))
              : o("WAWebBotUtils").isMetaAiBot(s.id)
                ? _
                : p;
          }),
          (t[4] = s),
          (t[5] = d),
          (t[6] = m))
        : (m = t[6]);
      var f = m,
        g;
      t[7] !== s || t[8] !== d
        ? ((g = o("WAWebStateUtils").unproxy(s).stale ? p : d),
          (t[7] = s),
          (t[8] = d),
          (t[9] = g))
        : (g = t[9]);
      var h = g,
        y;
      return (
        t[10] !== f || t[11] !== h || t[12] !== s.id || t[13] !== a
          ? ((y = u.jsx(r("WAWebIdleComponent.react"), {
              id: s.id,
              onComplex: f,
              waitIdle: a,
              children: h,
            })),
            (t[10] = f),
            (t[11] = h),
            (t[12] = s.id),
            (t[13] = a),
            (t[14] = y))
          : (y = t[14]),
        y
      );
    }
    function g(e) {
      var t = o("WAWebTextStatusCollection").TextStatusCollection.get(e);
      if (!t) return !0;
      if (!e.isRegularUser()) return (o("WAWebBotUtils").isMetaAiBot(e), !0);
      var n = t.status;
      return n !== void 0 ? r("isStringNotNullAndNotWhitespaceOnly")(n) : !0;
    }
    function h(e) {
      var t = e.id,
        n = m(function () {
          return o("WAWebTextStatusCollection").TextStatusCollection.get(t);
        }),
        a = n[0],
        i = n[1],
        l = r("useWAWebPrevious")(t);
      return (
        d(function () {
          if (!a) {
            var e = o("WAWebContactCollection").ContactCollection.gadd(t);
            i(e.getStatus());
          }
        }, []),
        d(
          function () {
            if (!r("WAWebWid").equals(t, l)) {
              var e = o("WAWebContactCollection").ContactCollection.gadd(t);
              i(e.getStatus());
            }
          },
          [t, l],
        ),
        a ? u.jsx(f, { status: a, waitIdle: e.waitIdle }) : p
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.willStatusDisplayContent = g),
      (l.StatusWrapper = h));
  },
  226,
);
