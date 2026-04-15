__d(
  "WAWebMsgPreview.react",
  [
    "WAWebConversationBackground.react",
    "WAWebWallpaper",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef,
      p = {
        container: {
          maxHeight: "x8xanyk",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        body: {
          position: "x1n2onr6",
          paddingTop: "x1h678fw",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdylf7x",
          backgroundColor: "x1q80dvb",
          transitionProperty: "x15406qy",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "xwji4o3",
          $$css: !0,
        },
        bodyBackgroundWallpaper: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
        bodyRefreshed: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        marginBottom20: { marginBottom: "xdqhqc9", $$css: !0 },
        paddingHoriz20: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(19),
        a = t.bodyXstyle,
        i = t.chatPreference,
        l = t.children,
        s = t.containerXstyle,
        c = t.ref,
        _ = m(null),
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["wallpaper", "showDoodle"]), (n[0] = f))
        : (f = n[0]);
      var g = o("useWAWebModelValues").useModelValues(i, f),
        h;
      (n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            return {
              getContainer: function () {
                return _.current;
              },
            };
          }),
          (n[1] = h))
        : (h = n[1]),
        d(c, h));
      var y = g.showDoodle,
        C = g.wallpaper,
        b,
        v,
        S;
      if (n[2] !== a || n[3] !== s || n[4] !== C) {
        var R;
        C !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER &&
          (R = p.bodyBackgroundWallpaper(C));
        var L = [p.container, s],
          E = [p.body, a];
        (L.push(p.paddingHoriz20, p.marginBottom20),
          E.push(p.bodyRefreshed),
          (v = (e || (e = r("stylex"))).props(L)),
          (S = _),
          (b = e.props(E, R)),
          (n[2] = a),
          (n[3] = s),
          (n[4] = C),
          (n[5] = b),
          (n[6] = v),
          (n[7] = S));
      } else ((b = n[5]), (v = n[6]), (S = n[7]));
      var k;
      n[8] !== y || n[9] !== C
        ? ((k = u.jsx(r("WAWebConversationBackground.react"), {
            wallpaper: C,
            showDoodle: y,
          })),
          (n[8] = y),
          (n[9] = C),
          (n[10] = k))
        : (k = n[10]);
      var I;
      n[11] !== l || n[12] !== b || n[13] !== k
        ? ((I = u.jsxs(
            "div",
            babelHelpers.extends({}, b, { children: [k, l] }),
          )),
          (n[11] = l),
          (n[12] = b),
          (n[13] = k),
          (n[14] = I))
        : (I = n[14]);
      var T;
      return (
        n[15] !== v || n[16] !== S || n[17] !== I
          ? ((T = u.jsx(
              "div",
              babelHelpers.extends({}, v, { ref: S, children: I }),
            )),
            (n[15] = v),
            (n[16] = S),
            (n[17] = I),
            (n[18] = T))
          : (T = n[18]),
        T
      );
    }
    l.default = _;
  },
  98,
);
