__d(
  "WAWebMediaLinkPreviewTitle.react",
  ["WAWebEmojiText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 40;
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.isBotPluginLink,
        r = e.isCompose,
        a = e.isStatus,
        i = e.title,
        l = e.titleDir,
        c = e.titleDirMismatch,
        d;
      t[0] !== n || t[1] !== r || t[2] !== a
        ? ((d = {
            0: {
              className:
                "x1ua5tub x1h7i4cw xaweak3 x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f",
            },
            4: {
              className:
                "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f xj9wvw2 x1jchvi3",
            },
            2: {
              className:
                "x1ua5tub x1h7i4cw xaweak3 x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f x6prxxf xl6ok4j xjpr12u",
            },
            6: {
              className:
                "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f xj9wvw2 x6prxxf xl6ok4j xjpr12u",
            },
            1: {
              className:
                "x1ua5tub x1h7i4cw xaweak3 x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f x19phtnz",
            },
            5: {
              className:
                "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f xj9wvw2 x1jchvi3 x19phtnz",
            },
            3: {
              className:
                "x1ua5tub x1h7i4cw xaweak3 x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f x6prxxf xl6ok4j xjpr12u x19phtnz",
            },
            7: {
              className:
                "x1ua5tub x1h7i4cw x104kibb x1c4vz4f xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv x1yc453h x1s688f xj9wvw2 x6prxxf xl6ok4j xjpr12u x19phtnz",
            },
          }[(!!a << 2) | (!!r << 1) | (!!n << 0)]),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = d))
        : (d = t[3]);
      var m = n ? u : 1 / 0,
        p;
      t[4] !== m || t[5] !== i || t[6] !== l || t[7] !== c
        ? ((p = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: i,
            textLimit: m,
            ellipsify: !0,
            breakWord: !0,
            direction: l,
            dirMismatch: c,
            testid: void 0,
            multiline: !0,
          })),
          (t[4] = m),
          (t[5] = i),
          (t[6] = l),
          (t[7] = c),
          (t[8] = p))
        : (p = t[8]);
      var _;
      return (
        t[9] !== d || t[10] !== p || t[11] !== i
          ? ((_ = s.jsx(
              "div",
              babelHelpers.extends({}, d, { title: i, children: p }),
            )),
            (t[9] = d),
            (t[10] = p),
            (t[11] = i),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    l.default = c;
  },
  98,
);
