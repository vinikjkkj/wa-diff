__d(
  "WAWebMediaLinkPreviewDescription.react",
  [
    "WAWebEmojiText.react",
    "WAWebL10N",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
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
      var n = o("react-compiler-runtime").c(15),
        a = t.breakWord,
        i = t.children,
        l = t.isCompose,
        s = t.isComposeHQPreview,
        p = t.isFullPreview,
        _ = t.isHighQualityLayout,
        f = t.isStatus,
        g = t.testid,
        h = t.useTextLimit;
      if (i == null) return null;
      var y = r("WAWebL10N").isRTL() ? "rtl" : "ltr",
        C = typeof i == "string" ? y : void 0,
        b = h ? d : void 0,
        v = g != null ? g : "link-description",
        S;
      n[0] !== l || n[1] !== s || n[2] !== p || n[3] !== _ || n[4] !== f
        ? ((S = (e || (e = r("stylex"))).props([
            c.description,
            f && c.statusDescription,
            l && [c.composeDescription, o("WAWebUISpacing").uiMargin.bottom1],
            m({
              isCompose: l,
              isComposeHQPreview: s,
              isFullPreview: p,
              isHighQualityLayout: _,
            }),
          ])),
          (n[0] = l),
          (n[1] = s),
          (n[2] = p),
          (n[3] = _),
          (n[4] = f),
          (n[5] = S))
        : (S = n[5]);
      var R;
      n[6] !== a || n[7] !== i || n[8] !== C || n[9] !== b
        ? ((R =
            typeof i == "string"
              ? u.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends(
                    {
                      text: i,
                      textLimit: b,
                      titlify: !0,
                      direction: C,
                      multiline: !0,
                    },
                    a === !0 && { breakWord: !0 },
                  ),
                )
              : i),
          (n[6] = a),
          (n[7] = i),
          (n[8] = C),
          (n[9] = b),
          (n[10] = R))
        : (R = n[10]);
      var L;
      return (
        n[11] !== v || n[12] !== S || n[13] !== R
          ? ((L = u.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, S, {
                children: R,
              }),
            )),
            (n[11] = v),
            (n[12] = S),
            (n[13] = R),
            (n[14] = L))
          : (L = n[14]),
        L
      );
    }
    l.default = p;
  },
  98,
);
