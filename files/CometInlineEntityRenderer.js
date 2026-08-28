__d(
  "CometInlineEntityRenderer",
  ["ComposedInlineStyle", "FDSText.react", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        blockquote: {
          marginBottom: "x13xjzxd",
          marginTop: "x14beivq",
          marginInlineEnd: "x11gldyt",
          marginInlineStart: "x11hdunq",
          $$css: !0,
        },
        bold: { fontWeight: "x1s688f", $$css: !0 },
        code: {
          backgroundColor: "xmjcpbm",
          fontSize: "x1hjwid2",
          paddingTop: "x4p5aij",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "x1znate",
          paddingInlineEnd: "x1do52mm",
          paddingLeft: null,
          paddingRight: null,
          textTransform: "x6mezaz",
          $$css: !0,
        },
        inheritItalic: { fontStyle: "x1t35e8", $$css: !0 },
        italic: { fontStyle: "x1k4tb9n", $$css: !0 },
        li: {
          listStyleType: "x1sle589",
          listStylePosition: "xzntmpj",
          listStyleImage: "x4sji16",
          $$css: !0,
        },
        lightStrike: { opacity: "x1ks1olk", $$css: !0 },
        ol: {
          listStyleType: "x3yw8vx",
          listStylePosition: null,
          listStyleImage: null,
          marginInlineStart: "xyqm7xq",
          $$css: !0,
        },
        ul: {
          listStyleType: "xtaz4m5",
          listStylePosition: null,
          listStyleImage: null,
          marginInlineStart: "xyqm7xq",
          $$css: !0,
        },
      },
      c = function (t, n) {
        switch (n.inline_style) {
          case "BOLD":
          case r("ComposedInlineStyle").BOLD:
            return s.jsx(o("react-strict-dom").html.strong, {
              style: u.bold,
              children: t,
            });
          case "ITALIC":
          case r("ComposedInlineStyle").ITALIC:
            return s.jsx(o("react-strict-dom").html.em, {
              style: u.italic,
              children: t,
            });
          case "UNDERLINE":
          case r("ComposedInlineStyle").UNDERLINE:
            return s.jsx(o("react-strict-dom").html.u, {
              children: s.jsx(o("react-strict-dom").html.em, {
                style: u.inheritItalic,
                children: t,
              }),
            });
          case "CODE":
          case r("ComposedInlineStyle").CODE:
            return s.jsx(o("react-strict-dom").html.code, {
              style: u.code,
              children: t,
            });
          case "LIGHTSTRIKETHROUGH":
          case r("ComposedInlineStyle").LIGHTSTRIKETHROUGH:
            return s.jsx(o("react-strict-dom").html.s, {
              style: u.lightStrike,
              children: t,
            });
          case "STRIKETHROUGH":
          case r("ComposedInlineStyle").STRIKETHROUGH:
            return s.jsx(o("react-strict-dom").html.s, { children: t });
          case "SUBSCRIPT":
          case r("ComposedInlineStyle").SUBSCRIPT:
            return s.jsx(o("react-strict-dom").html.sub, { children: t });
          case "SUPERSCRIPT":
          case r("ComposedInlineStyle").SUPERSCRIPT:
            return s.jsx(o("react-strict-dom").html.sup, { children: t });
          case "QUOTE":
          case r("ComposedInlineStyle").QUOTE:
            return s.jsx(o("react-strict-dom").html.blockquote, {
              style: u.blockquote,
              children: t,
            });
          case "UNORDEREDLIST":
          case r("ComposedInlineStyle").UNORDEREDLIST:
            return s.jsx(o("react-strict-dom").html.ul, {
              style: u.ul,
              children: t,
            });
          case "ORDEREDLIST":
          case r("ComposedInlineStyle").ORDEREDLIST:
            return s.jsx(o("react-strict-dom").html.ol, {
              style: u.ol,
              children: t,
            });
          case "LISTITEM":
          case r("ComposedInlineStyle").LISTITEM:
            return s.jsx(o("react-strict-dom").html.li, {
              style: u.li,
              children: t,
            });
          case "HEADLINE1":
          case r("ComposedInlineStyle").HEADLINE1:
            return s.jsx(r("FDSText.react"), {
              isSemanticHeading: !0,
              type: "headlineEmphasized1",
              children: t,
            });
          case "HEADLINE2":
          case r("ComposedInlineStyle").HEADLINE2:
            return s.jsx(r("FDSText.react"), {
              isSemanticHeading: !0,
              type: "headlineEmphasized2",
              children: t,
            });
          case "HEADLINE3":
          case r("ComposedInlineStyle").HEADLINE3:
            return s.jsx(r("FDSText.react"), {
              isSemanticHeading: !0,
              type: "headlineEmphasized3",
              children: t,
            });
          case "HORIZONTALRULER":
          case r("ComposedInlineStyle").HORIZONTALRULER:
            return s.jsx(o("react-strict-dom").html.hr, {});
          case "LINEBREAK":
          case r("ComposedInlineStyle").LINEBREAK:
            return s.jsx(o("react-strict-dom").html.br, {});
          case "SPOILER":
          case r("ComposedInlineStyle").SPOILER:
            return t;
          default:
            return t;
        }
      };
    l.default = c;
  },
  98,
);
