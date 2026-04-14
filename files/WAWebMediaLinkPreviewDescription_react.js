__d(
  "WAWebMediaLinkPreviewDescription.react",
  ["WAWebEmojiText.react", "WAWebL10N", "WAWebUISpacing", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        description: {
          color: "xaweak3",
          flexGrow: "x1c4vz4f",
          flexShrink: "x7f0hsc",
          flexBasis: "xdl72j9",
          fontSize: "x1pg5gke",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        statusDescription: {
          color: "xa2ctma",
          fontSize: "x1f6kntn",
          $$css: !0,
        },
        oneLineClamp: {
          maxHeight: "xu2okd2",
          WebkitBoxOrient: "x1ua5tub",
          display: "x104kibb",
          WebkitLineClamp: "xh0615m",
          $$css: !0,
        },
        twoLinesClamp: {
          maxHeight: "xa14qb",
          WebkitBoxOrient: "x1ua5tub",
          display: "x104kibb",
          $$css: !0,
        },
        composeDescription: {
          maxWidth: "x17fpy1y",
          lineHeight: "x1n6pog2",
          fontSize: "x1f6kntn",
          $$css: !0,
        },
        tenLinesClamp: {
          WebkitBoxOrient: "x1ua5tub",
          WebkitLineClamp: "x1but23e",
          display: "x104kibb",
          $$css: !0,
        },
        fullPreviewNotHighQualityLayoutDescription: {
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
      },
      d = 280;
    function m(e) {
      var t = e.isCompose,
        n = e.isComposeHQPreview,
        r = e.isFullPreview,
        o = e.isHighQualityLayout;
      return t
        ? n
          ? c.twoLinesClamp
          : c.oneLineClamp
        : r
          ? o
            ? c.tenLinesClamp
            : c.fullPreviewNotHighQualityLayoutDescription
          : c.twoLinesClamp;
    }
    function p(t) {
      var n = t.breakWord,
        a = t.children,
        i = t.isCompose,
        l = t.isComposeHQPreview,
        s = t.isFullPreview,
        p = t.isHighQualityLayout,
        _ = t.isStatus,
        f = t.testid,
        g = t.useTextLimit;
      if (a == null) return null;
      var h = r("WAWebL10N").isRTL() ? "rtl" : "ltr",
        y = typeof a == "string" ? h : void 0,
        C = g ? d : void 0;
      return u.jsx(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props([
            c.description,
            _ && c.statusDescription,
            i && [c.composeDescription, o("WAWebUISpacing").uiMargin.bottom1],
            m({
              isCompose: i,
              isComposeHQPreview: l,
              isFullPreview: s,
              isHighQualityLayout: p,
            }),
          ]),
          {
            children:
              typeof a == "string"
                ? u.jsx(
                    o("WAWebEmojiText.react").EmojiText,
                    babelHelpers.extends(
                      {
                        text: a,
                        textLimit: C,
                        titlify: !0,
                        direction: y,
                        multiline: !0,
                      },
                      n === !0 && { breakWord: !0 },
                    ),
                  )
                : a,
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
