__d(
  "WAWebChatThemeGrid.react",
  [
    "fbt",
    "WAWebChatThemeCanvas.react",
    "WAWebKeyboardHotKeys.react",
    "WDSFlex.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = {
        themeGrid: {
          paddingTop: "x1h678fw",
          paddingBottom: "xv6tirj",
          paddingInlineEnd: "xcldk2z",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.currentThemeId,
        a = t.onPreview,
        i = t.onSelect,
        l = t.themeMode,
        u = t.themes,
        d = m([]),
        f = p(-1),
        g = f[0],
        h = f[1],
        y = function (t) {
          if ((a(t), t != null)) {
            var e = u.indexOf(t);
            e !== -1 && h(e);
          } else h(-1);
        },
        C = function (t) {
          var e;
          t < 0 ||
            t >= u.length ||
            (h(t), (e = d.current[t]) == null || e.focus());
        },
        b = {
          left: function () {
            g !== -1 && C(g - 1);
          },
          right: function () {
            g !== -1 && C(g + 1);
          },
          home: function () {
            g !== -1 && C(0);
          },
          end: function () {
            g !== -1 && C(u.length - 1);
          },
        };
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: b,
        role: "radiogroup",
        "aria-label": s._(/*BTDS*/ "Chat themes"),
        children: c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WDSFlex.stylex").wdsFlex.flexRow,
              o("WDSFlex.stylex").wdsFlex.flexWrap,
              o("WDSFlex.stylex").wdsFlex.alignStart,
              _.themeGrid,
            ),
            {
              children: u.map(function (e, t) {
                var o = g === t,
                  s = n === e,
                  u = n == null && t === 0,
                  m = g !== -1,
                  p = m ? o : s || u;
                return c.jsx(
                  r("WAWebChatThemeCanvas.react"),
                  {
                    themeId: e,
                    isSelected: s,
                    themeMode: l,
                    onSelect: i,
                    onPreview: a,
                    onFocusChange: y,
                    tabIndex: p ? 0 : -1,
                    ref: function (n) {
                      d.current[t] = n;
                    },
                  },
                  e,
                );
              }),
            },
          ),
        ),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
