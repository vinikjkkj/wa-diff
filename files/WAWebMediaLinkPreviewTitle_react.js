__d(
  "WAWebMediaLinkPreviewTitle.react",
  ["WAWebEmojiText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 40;
    function c(e) {
      var t = e.isBotPluginLink,
        n = e.isCompose,
        r = e.isStatus,
        a = e.title,
        i = e.titleDir,
        l = e.titleDirMismatch;
      return s.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
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
          }[(!!r << 2) | (!!n << 1) | (!!t << 0)],
          {
            title: a,
            children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: a,
              textLimit: t ? u : 1 / 0,
              ellipsify: !0,
              breakWord: !0,
              direction: i,
              dirMismatch: l,
              testid: void 0,
              multiline: !0,
            }),
          },
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
