__d(
  "WAWebProductCatalogProductListDrawerHeader.react",
  [
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebName.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        description: {
          display: "x104kibb",
          maxHeight: "x1jquxbb",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          lineHeight: "x1fc57z9",
          color: "x17t9dm2",
          overflowWrap: "x1mzt3pk",
          WebkitLineClamp: "x1gzmk7r",
          WebkitBoxOrient: "x1ua5tub",
          $$css: !0,
        },
        photoIcon: { width: "x1exxlbk", height: "xpyat2d", $$css: !0 },
        text: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          zIndex: "x11uqc5h",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        spinner: {
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          $$css: !0,
        },
        img: { height: "xt7dq6l", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(4),
        a = t.businessProfile,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["description"]), (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebModelValues").useOptionalModelValues(a, i);
      if (!l || r("isStringNullOrEmpty")(l == null ? void 0 : l.description))
        return null;
      var s;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e || (e = r("stylex"))).props(
            c.description,
            o("WAWebUISpacing").uiMargin.top12,
          )),
          (n[1] = s))
        : (s = n[1]);
      var d;
      return (
        n[2] !== l.description
          ? ((d = u.jsx(
              "div",
              babelHelpers.extends({}, s, {
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: l.description,
                  direction: "auto",
                  selectable: !0,
                  titlify: !0,
                }),
              }),
            )),
            (n[2] = l.description),
            (n[3] = d))
          : (d = n[3]),
        d
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.contact,
        r = e.profilePicThumb,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["imgFull"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useOptionalModelValues(r, a),
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebContactGetters").getId,
            o("WAWebContactGetters").getIsMe,
          ]),
          (t[1] = l))
        : (l = t[1]);
      var s = o("useWAWebContactValues").useContactValues(n.id, l),
        d = s[0];
      if (!i) return null;
      var m;
      t[2] !== d
        ? ((m = u.jsx(o("WAWebDetailImage.react").DefaultIcon, {
            id: d,
            xstyle: c.photoIcon,
          })),
          (t[2] = d),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            className:
              "x1n2onr6 x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x1j6awrg x1m1drc7 x1iygr5g x1ojvc37 x4eaejv x1wsn0xg x100rkj9 x1sak2ym",
          }),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      return (
        t[5] !== p || t[6] !== i
          ? ((f = u.jsx(
              "div",
              babelHelpers.extends({}, _, {
                children: u.jsx(o("WAWebDetailImage.react").DetailImageCommon, {
                  profilePicThumb: i,
                  loader: !0,
                  defaultIcon: p,
                  profilePicThumbImg: i.imgFull,
                  spinnerXstyle: c.spinner,
                  spinnerSize: 100,
                  imgXstyle: c.img,
                  theme: "business",
                  shape: o("WAWebDetailImage.react").DetailImageShape.Square,
                }),
              }),
            )),
            (t[5] = p),
            (t[6] = i),
            (t[7] = f))
          : (f = t[7]),
        f
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.businessProfile,
        i = t.contact,
        l = t.profilePicThumb,
        s;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { className: "x1n2onr6 x1m3v4wt x6ikm8r x10wlt62 x15e7hw7" }),
          (n[0] = s))
        : (s = n[0]);
      var p;
      n[1] !== i || n[2] !== l
        ? ((p = u.jsx(m, { profilePicThumb: l, contact: i })),
          (n[1] = i),
          (n[2] = l),
          (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex"))).props(
            c.text,
            o("WAWebUISpacing").uiPadding.horiz30,
          )),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] !== i
        ? ((f = u.jsx(o("WAWebText.react").WAWebTextLarge, {
            color: "white",
            weight: "bold",
            children: u.jsx(o("WAWebName.react").Name, {
              contact: i,
              selectable: !0,
              useVerifiedName: !0,
            }),
          })),
          (n[5] = i),
          (n[6] = f))
        : (f = n[6]);
      var g;
      n[7] !== a
        ? ((g = u.jsx(d, { businessProfile: a })), (n[7] = a), (n[8] = g))
        : (g = n[8]);
      var h;
      n[9] !== f || n[10] !== g
        ? ((h = u.jsxs(
            "div",
            babelHelpers.extends({}, _, { children: [f, g] }),
          )),
          (n[9] = f),
          (n[10] = g),
          (n[11] = h))
        : (h = n[11]);
      var y;
      return (
        n[12] !== p || n[13] !== h
          ? ((y = u.jsxs(
              "div",
              babelHelpers.extends({}, s, {
                "data-testid": void 0,
                children: [p, h],
              }),
            )),
            (n[12] = p),
            (n[13] = h),
            (n[14] = y))
          : (y = n[14]),
        y
      );
    }
    l.default = p;
  },
  98,
);
