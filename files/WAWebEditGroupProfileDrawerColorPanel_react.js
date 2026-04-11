__d(
  "WAWebEditGroupProfileDrawerColorPanel.react",
  [
    "WAWebClassnames",
    "WAWebEditGroupProfileDrawer.react",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebThemeContext",
    "WAWebUnstyledButton.react",
    "WAWebUtilsGetColor",
    "react",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useRef,
      m = {
        btn: {
          width: "x1td3qas",
          height: "x10w6t97",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          ":focus_borderStartStartRadius": "x13345yd",
          ":focus_borderStartEndRadius": "x1kqiigx",
          ":focus_borderEndEndRadius": "x1iy4mvq",
          ":focus_borderEndStartRadius": "x1nrmj05",
          $$css: !0,
        },
        btnSelected: { width: "x1ksvffz", height: "xqaafxp", $$css: !0 },
      };
    function p(e) {
      var t = e.className,
        n = e.colors,
        a = e.onSelect,
        i = e.selectedIndex,
        l = c(o("WAWebThemeContext").ThemeContext),
        u = l.theme,
        p = d(i),
        _ = d([]),
        f = {
          rows: n,
          getNum: function () {
            return r("sumBy")(f.rows, function (e) {
              return e.length;
            });
          },
        },
        g = {
          right: function () {
            var e,
              t = p.current === f.getNum() - 1 ? 0 : p.current + 1;
            (e = _.current[t]) == null || e.focus();
          },
          left: function () {
            var e,
              t = p.current === 0 ? f.getNum() - 1 : p.current - 1;
            (e = _.current[t]) == null || e.focus();
          },
        },
        h = 0;
      return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        role: "tablist",
        handlers: g,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(t),
        children: f.rows.map(function (e, t) {
          return s.jsx(
            o("WAWebFlex.react").FlexRow,
            {
              className: "xzbgwbi",
              justify: "center",
              children: e.map(function (e) {
                var t = h++,
                  n = i === t;
                return s.jsx(
                  o("WAWebFlex.react").FlexRow,
                  {
                    justify: "center",
                    align: "center",
                    children: s.jsx(o("WAWebFlex.react").FlexRow, {
                      justify: "center",
                      align: "center",
                      className:
                        "x9f619 x1n7h9c3 x1s1d1n7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1s7rqsx xavaexc",
                      style: {
                        border: n
                          ? "1.5px solid " +
                            r("WAWebUtilsGetColor")(
                              e,
                              u === "light" ? 600 : 300,
                            )
                          : "",
                      },
                      children: s.jsx(r("WAWebUnstyledButton.react"), {
                        role: "tab",
                        ref: function (n) {
                          return (_.current[t] = n);
                        },
                        tabIndex: n ? 0 : -1,
                        "aria-label": o(
                          "WAWebEditGroupProfileDrawer.react",
                        ).getFbtColorString(e),
                        "aria-selected": n,
                        onClick: function () {
                          return a(t);
                        },
                        onFocus: function () {
                          p.current = t;
                        },
                        children: s.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: [m.btn, n && m.btnSelected],
                          style: {
                            backgroundColor: r("WAWebUtilsGetColor")(e, 200),
                          },
                        }),
                      }),
                    }),
                  },
                  t,
                );
              }),
            },
            t,
          );
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
