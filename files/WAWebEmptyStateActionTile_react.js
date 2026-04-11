__d(
  "WAWebEmptyStateActionTile.react",
  [
    "WAWebFilePicker.react",
    "WAWebMetaAIIcon.react",
    "WAWebTabOrder",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        actionTileContainer: {
          textAlign: "x2b8uid",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        button: {
          height: "xjp8j0k",
          width: "x13oubkp",
          backgroundColor: "x4wrhlh xzn9hfk",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(20),
        a = t.Icon,
        i = t.clickHandler,
        l = t.filePicker,
        s = t.testid,
        m = t.title,
        p = c(),
        _;
      if (a === "meta-ai") {
        var f;
        (n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsx(r("WAWebMetaAIIcon.react"), { height: 24, width: 24 })),
            (n[0] = f))
          : (f = n[0]),
          (_ = f));
      } else {
        var g;
        (n[1] !== a
          ? ((g = u.jsx(a, {
              height: 24,
              width: 24,
              colorName: "contentDeemphasized",
            })),
            (n[1] = a),
            (n[2] = g))
          : (g = n[2]),
          (_ = g));
      }
      var h;
      n[3] !== i || n[4] !== l
        ? ((h = function () {
            if (l != null) {
              var e;
              (e = p.current) == null || e.open();
            } else i && i();
          }),
          (n[3] = i),
          (n[4] = l),
          (n[5] = h))
        : (h = n[5]);
      var y = h,
        C;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (e || (e = r("stylex"))).props(
            d.actionTileContainer,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            { "x-default-marker": "x-default-marker", $$css: !0 },
          )),
          (n[6] = C))
        : (C = n[6]);
      var b;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (e || (e = r("stylex"))).props(
            d.button,
            o("WDSFlex.stylex").wdsFlex.flexCenter,
          )),
          (n[7] = b))
        : (b = n[7]);
      var v;
      n[8] !== _
        ? ((v = u.jsx("div", babelHelpers.extends({}, b, { children: _ }))),
          (n[8] = _),
          (n[9] = v))
        : (v = n[9]);
      var S;
      n[10] !== m
        ? ((S = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: m,
          })),
          (n[10] = m),
          (n[11] = S))
        : (S = n[11]);
      var R;
      n[12] !== l
        ? ((R = l
            ? u.jsx(
                r("WAWebFilePicker.react"),
                babelHelpers.extends({ ref: p }, l),
              )
            : null),
          (n[12] = l),
          (n[13] = R))
        : (R = n[13]);
      var L;
      return (
        n[14] !== y || n[15] !== v || n[16] !== S || n[17] !== R || n[18] !== s
          ? ((L = u.jsxs(
              "button",
              babelHelpers.extends({}, C, {
                "data-tab": o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
                tabIndex: 0,
                onClick: y,
                "data-testid": void 0,
                children: [v, S, R],
              }),
            )),
            (n[14] = y),
            (n[15] = v),
            (n[16] = S),
            (n[17] = R),
            (n[18] = s),
            (n[19] = L))
          : (L = n[19]),
        L
      );
    }
    l.default = m;
  },
  98,
);
