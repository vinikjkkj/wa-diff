__d(
  "WAWebMessageUnread.react",
  [
    "fbt",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        msgUnreadRefresh: {
          width: "xh8yej3",
          marginInlineStart: "x1b1opl3",
          textAlign: "x2b8uid",
          backgroundColor: "x1bu39yj",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          maxWidth: "xquzyny",
          $$css: !0,
        },
        msgUnreadDark: {
          borderTopWidth: null,
          borderBottomWidth: null,
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.count,
        i = t.textContainerRef,
        l = o("WAWebThemeContext").useIsDarkTheme(),
        u;
      n[0] !== a
        ? ((u = s._(
            /*BTDS*/ '_j{"*":"{count} unread messages","_1":"1 unread message"}',
            [s._plural(a, "count")],
          )),
          (n[0] = a),
          (n[1] = u))
        : (u = n[1]);
      var m = u,
        p = l && d.msgUnreadDark,
        _,
        f;
      if (n[2] !== p || n[3] !== m) {
        var g = [
            p,
            d.msgUnreadRefresh,
            o("WAWebUISpacing").uiMargin.horizAuto,
            o("WAWebUISpacing").uiMargin.bottom12,
          ],
          h;
        (n[6] !== m
          ? ((h = c.jsx(r("WDSText.react"), {
              type: "Body3Emphasized",
              colorName: "contentDefault",
              children: m,
            })),
            (n[6] = m),
            (n[7] = h))
          : (h = n[7]),
          (f = h),
          (_ = (e || (e = r("stylex"))).props(g)),
          (n[2] = p),
          (n[3] = m),
          (n[4] = _),
          (n[5] = f));
      } else ((_ = n[4]), (f = n[5]));
      var y;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            className:
              "x9f619 x1rg5ohu xq8v1hd xojvqvm x6ikm8r x10wlt62 xlyipyv xuxw1ft x1k43qru x1g83kfv x3qq2k7 x2x8art x1qor8vf x1iw51ew xde1mab xhsao0n",
          }),
          (n[8] = y))
        : (y = n[8]);
      var C;
      n[9] !== f
        ? ((C = c.jsx(
            "span",
            babelHelpers.extends({}, y, { "aria-live": "polite", children: f }),
          )),
          (n[9] = f),
          (n[10] = C))
        : (C = n[10]);
      var b;
      return (
        n[11] !== _ || n[12] !== C || n[13] !== i
          ? ((b = c.jsx(
              "div",
              babelHelpers.extends({}, _, { ref: i, children: C }),
            )),
            (n[11] = _),
            (n[12] = C),
            (n[13] = i),
            (n[14] = b))
          : (b = n[14]),
        b
      );
    }
    l.default = m;
  },
  226,
);
