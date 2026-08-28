__d(
  "GeoInlineEntityRenderer",
  [
    "ComposedInlineStyle",
    "GeoBaseText.react",
    "GeoDivider.react",
    "GeoTextUtils",
    "geoMargin",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        olList: { listStyleType: "x3yw8vx", $$css: !0 },
        ulList: { listStyleType: "xtaz4m5", $$css: !0 },
      },
      d = function (n, a) {
        switch (a.inline_style) {
          case "BOLD":
          case r("ComposedInlineStyle").BOLD:
            return u.jsx("b", { children: n });
          case "ITALIC":
          case r("ComposedInlineStyle").ITALIC:
            return u.jsx("i", { children: n });
          case "UNDERLINE":
          case r("ComposedInlineStyle").UNDERLINE:
            return u.jsx("u", { children: n });
          case "STRIKETHROUGH":
          case r("ComposedInlineStyle").STRIKETHROUGH:
            return u.jsx("strike", { children: n });
          case "SUBSCRIPT":
          case r("ComposedInlineStyle").SUBSCRIPT:
            return u.jsx("sub", { children: n });
          case "SUPERSCRIPT":
          case r("ComposedInlineStyle").SUPERSCRIPT:
            return u.jsx("sup", { children: n });
          case "QUOTE":
          case r("ComposedInlineStyle").QUOTE:
            return u.jsx("blockquote", { children: n });
          case "UNORDEREDLIST":
          case r("ComposedInlineStyle").UNORDEREDLIST:
            return u.jsx(
              "ul",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  c.ulList,
                  r("geoMargin").start16,
                ),
                { children: n },
              ),
            );
          case "ORDEREDLIST":
          case r("ComposedInlineStyle").ORDEREDLIST:
            return u.jsx(
              "ol",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  c.olList,
                  r("geoMargin").start16,
                ),
                { children: n },
              ),
            );
          case "LISTITEM":
          case r("ComposedInlineStyle").LISTITEM:
            return u.jsx("li", { children: n });
          case "HEADLINE1":
          case r("ComposedInlineStyle").HEADLINE1:
            return u.jsx(r("GeoBaseText.react"), {
              color: "heading",
              size: o("GeoTextUtils").mapHeadingLevelToSize(1),
              children: n,
            });
          case "HEADLINE2":
          case r("ComposedInlineStyle").HEADLINE2:
            return u.jsx(r("GeoBaseText.react"), {
              color: "heading",
              size: o("GeoTextUtils").mapHeadingLevelToSize(2),
              children: n,
            });
          case "HEADLINE3":
          case r("ComposedInlineStyle").HEADLINE3:
            return u.jsx(r("GeoBaseText.react"), {
              color: "heading",
              size: o("GeoTextUtils").mapHeadingLevelToSize(3),
              children: n,
            });
          case "HORIZONTALRULER":
          case r("ComposedInlineStyle").HORIZONTALRULER:
            return u.jsx(r("GeoDivider.react"), {});
          default:
            return n;
        }
      };
    l.default = d;
  },
  98,
);
