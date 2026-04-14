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
      var t = e.status,
        n = e.waitIdle,
        a = o("useWAWebModelValues").useModelValues(
          t,
          ["id", "stale", "status"],
          { isStrong: !1 },
        ),
        i = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          direction: "auto",
          selectable: !0,
          titlify: !0,
          text: a.status,
          breakWord: !0,
        }),
        l = function () {
          return a.id.isRegularUser()
            ? (o("WAWebTextStatusCollection").TextStatusCollection.find(a.id),
              a.status === void 0
                ? p
                : a.isValidTextStatus()
                  ? i
                  : u.jsx(u.Fragment, {}))
            : o("WAWebBotUtils").isMetaAiBot(a.id)
              ? _
              : p;
        },
        s = o("WAWebStateUtils").unproxy(a).stale ? p : i;
      return u.jsx(r("WAWebIdleComponent.react"), {
        id: a.id,
        onComplex: l,
        waitIdle: n,
        children: s,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
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
