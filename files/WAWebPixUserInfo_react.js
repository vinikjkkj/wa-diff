__d(
  "WAWebPixUserInfo.react",
  [
    "fbt",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebFlex.react",
    "WAWebPencilRefreshedIcon.react",
    "WAWebPixLogoIcon.react",
    "WAWebSvgButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        userProfile: {
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          display: "x78zum5",
          columnGap: "x1aj3ljl",
          $$css: !0,
        },
        userInfo: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        editButton: { alignSelf: "xamitd3", $$css: !0 },
      },
      d = {
        background: { fill: "x1mb9w2k", $$css: !0 },
        pixIconFill: { fill: "xfifr3o", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.onEdit,
        a = e.pixData,
        i;
      t[0] !== a.key || t[1] !== a.key_type
        ? ((i = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
            a.key,
            a.key_type,
          )),
          (t[0] = a.key),
          (t[1] = a.key_type),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        m = a.key_type,
        p;
      t[3] !== m
        ? ((p = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(m)),
          (t[3] = m),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              " ",
              u.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
                height: 50,
                width: 50,
                innerStyles: {
                  background: d.background,
                  primary: d.pixIconFill,
                },
              }),
            ],
          })),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "xkhhb68 x14ug900 x13m54ha" }), (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== a.display_name
        ? ((h = u.jsx(
            "div",
            babelHelpers.extends({}, g, { children: a.display_name }),
          )),
          (t[7] = a.display_name),
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== l || t[10] !== _
        ? ((y = u.jsxs(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: [_, " ", l],
          })),
          (t[9] = l),
          (t[10] = _),
          (t[11] = y))
        : (y = t[11]);
      var C;
      t[12] !== h || t[13] !== y
        ? ((C = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.userInfo,
            children: [h, y],
          })),
          (t[12] = h),
          (t[13] = y),
          (t[14] = C))
        : (C = t[14]);
      var b;
      t[15] !== n
        ? ((b =
            n != null &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: c.editButton,
              children: u.jsx(r("WAWebSvgButton.react"), {
                Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                onClick: n,
                "aria-label": s._(/*BTDS*/ "Edit Pix key"),
              }),
            })),
          (t[15] = n),
          (t[16] = b))
        : (b = t[16]);
      var v;
      return (
        t[17] !== C || t[18] !== b
          ? ((v = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: c.userProfile,
              children: [f, C, b],
            })),
            (t[17] = C),
            (t[18] = b),
            (t[19] = v))
          : (v = t[19]),
        v
      );
    }
    l.default = m;
  },
  226,
);
