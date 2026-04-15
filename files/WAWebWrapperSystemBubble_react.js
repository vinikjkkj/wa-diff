__d(
  "WAWebWrapperSystemBubble.react",
  [
    "cx",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebKeyboardListHotKeys.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        msg: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingInlineEnd: "x141l45o",
          paddingInlineStart: "x1h3r9g6",
          userSelect: "x1hx0egp",
          $$css: !0,
        },
        msgSystem: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        sticky: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        center: { height: "x5yr21d", alignItems: "x6s0dn4", $$css: !0 },
        msgBottomPadding: { paddingBottom: "xscbp6u", $$css: !0 },
        groupHistoryBackground: {
          position: "x1n2onr6",
          "::before_content": "x1cpjm7i",
          "::before_position": "x1hmns74",
          "::before_top": "x1y3wzot",
          "::before_bottom": "xhq5o37",
          "::before_insetInlineStart": "xfbisj7",
          "::before_left": null,
          "::before_right": null,
          "::before_transform": "xnyzbwf",
          "::before_width": "xkeh78v",
          "::before_zIndex": "xy5mcqj",
          $$css: !0,
        },
        groupHistoryBackgroundLight: {
          "::before_backgroundColor": "xd3jkiw",
          $$css: !0,
        },
        groupHistoryBackgroundDark: {
          "::before_backgroundColor": "x5cow8b",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(21),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = o("WAWebThemeContext").useIsDarkTheme(),
        s = null;
      a.theme === "center"
        ? (s = m.center)
        : a.theme === "sticky" && (s = m.sticky);
      var c = a.testid,
        p;
      if (
        n[3] !== l ||
        n[4] !== a.groupHistoryBackground ||
        n[5] !== a.isFocusable ||
        n[6] !== a.xstyle ||
        n[7] !== s
      ) {
        var _;
        ((p = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((_ = {}),
          (_[
            o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME
          ] = a.isFocusable),
          _),
          (u || (u = r("stylex")))(
            m.msg,
            m.msgSystem,
            m.msgBottomPadding,
            s,
            a.groupHistoryBackground === !0 && m.groupHistoryBackground,
            a.groupHistoryBackground === !0 &&
              (l
                ? m.groupHistoryBackgroundDark
                : m.groupHistoryBackgroundLight),
            a.xstyle,
          ),
        )),
          (n[3] = l),
          (n[4] = a.groupHistoryBackground),
          (n[5] = a.isFocusable),
          (n[6] = a.xstyle),
          (n[7] = s),
          (n[8] = p));
      } else p = n[8];
      var f;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_amk4",
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_highlight_me_mention",
            ) && "_avau",
          )),
          (n[9] = f))
        : (f = n[9]);
      var g;
      n[10] !== a.hidden || n[11] !== a.theme
        ? ((g = {
            0: {
              className:
                "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1k43qru xrxyp3c xv0oops x1isl5vh xn8zj9a x148chh3",
            },
            2: {
              className:
                "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w x1tiyuxx x1nbhmlj x1iw51ew xde1mab xhslqc4 x2b8uid x1k43qru xrxyp3c xv0oops x1isl5vh xn8zj9a x148chh3 xlshs6z",
            },
            1: {
              className:
                "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1k43qru xrxyp3c xv0oops x1isl5vh xn8zj9a x148chh3 x889kno x2vl965 x1a8lsjc xe2zdcy",
            },
            3: {
              className:
                "x1n2onr6 x9f619 x1rg5ohu x1okw0bk x193iq5w xhslqc4 x2b8uid x1k43qru xrxyp3c xv0oops x1isl5vh xn8zj9a x148chh3 xlshs6z x889kno x2vl965 x1a8lsjc xe2zdcy",
            },
          }[((a.hidden === !0) << 1) | ((a.theme === "center") << 0)]),
          (n[10] = a.hidden),
          (n[11] = a.theme),
          (n[12] = g))
        : (g = n[12]);
      var h;
      n[13] !== a.children || n[14] !== g
        ? ((h = d.jsx(
            "div",
            babelHelpers.extends({ className: f }, g, { children: a.children }),
          )),
          (n[13] = a.children),
          (n[14] = g),
          (n[15] = h))
        : (h = n[15]);
      var y;
      return (
        n[16] !== a.testid || n[17] !== i || n[18] !== p || n[19] !== h
          ? ((y = d.jsx("div", {
              "data-testid": void 0,
              className: p,
              tabIndex: -1,
              ref: i,
              children: h,
            })),
            (n[16] = a.testid),
            (n[17] = i),
            (n[18] = p),
            (n[19] = h),
            (n[20] = y))
          : (y = n[20]),
        y
      );
    }
    l.default = p;
  },
  98,
);
