__d(
  "WDSSearchBarConfig",
  [
    "$InternalEnum",
    "WDSFlex.stylex",
    "WDSFontTokenStyles",
    "wdsHeight",
    "wdsWidth",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        container: {
          boxSizing: "x9f619",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
        input: {
          color: "x14ug900",
          backgroundColor: "xjbqb8w",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          boxSizing: "x9f619",
          height: "x1qx5ct2",
          textOverflow: "xlyipyv",
          width: "xh8yej3",
          ":focus_outline": "x1uvtmcs",
          "::placeholder_color": "x1hcheoe",
          $$css: !0,
        },
        addOnEnd: {
          boxSizing: "x9f619",
          color: "xuwfzo9",
          alignItems: "x6s0dn4",
          justifyItems: "x1o2pa38",
          $$css: !0,
        },
      },
      s = {
        container: {
          borderStartStartRadius: "x1w9h8z1",
          borderStartEndRadius: "xn2mukg",
          borderEndEndRadius: "x1yo0frk",
          borderEndStartRadius: "x2b5yea",
          height: "x1vqgdyp",
          ":hover:not(:focus-within)_outlineColor": "xq91m4v",
          ":hover:not(:focus-within)_outlineStyle": "x1fxkg6m",
          ":hover:not(:focus-within)_outlineWidth": "x1x15s1u",
          ":has(input:focus)_outlineStyle": "x17mvztg",
          ":has(input:focus)_outlineWidth": "x1bsbh89",
          ":has(input:focus)_outlineColor": "xxyb0qf",
          ":has(input:focus)_backgroundColor": "x8qhm2e",
          $$css: !0,
        },
        addOnStart: {
          width: "xw4jnvo",
          height: "x1qx5ct2",
          marginLeft: "x1yzq74r",
          marginRight: "xv4jd37",
          marginInlineStart: null,
          marginInlineEnd: null,
          color: "xhslqc4",
          $$css: !0,
        },
        addOnEnd: {
          marginTop: "xav9cv8",
          marginInlineEnd: "x7g7pl8",
          marginBottom: "x4tpdpg",
          marginInlineStart: "x1wbi8v6",
          $$css: !0,
        },
        input: {
          paddingInlineEnd: "x1nzty39",
          "::selection_backgroundColor": "xkrh14z",
          $$css: !0,
        },
      },
      u = {
        addOnStart: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        addOnEnd: {
          marginTop: "xav9cv8",
          marginInlineEnd: "xqf2s3x",
          marginBottom: "x4tpdpg",
          marginInlineStart: "x1wbi8v6",
          $$css: !0,
        },
        input: { paddingInlineEnd: "x1uc92m", $$css: !0 },
      },
      c = {
        container: {
          borderStartStartRadius: "x1w9h8z1",
          borderStartEndRadius: "xn2mukg",
          borderEndEndRadius: "x1yo0frk",
          borderEndStartRadius: "x2b5yea",
          height: "xsdox4t",
          $$css: !0,
        },
        input: { caretColor: "xjdcl3y", $$css: !0 },
        addOnStart: {
          color: "x14ug900",
          marginInlineStart: "xlese2p",
          marginInlineEnd: "xviac27",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      },
      d = {
        container: {
          borderStartStartRadius: "x5fugla",
          borderStartEndRadius: "x1gmynzv",
          borderEndEndRadius: "xu23tdw",
          borderEndStartRadius: "xix3l5v",
          height: "xc9qbxq",
          $$css: !0,
        },
        input: { $$css: !0 },
        addOnStart: {
          color: "xhslqc4",
          marginInlineStart: "x1wbi8v6",
          marginInlineEnd: "x7g7pl8",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      },
      m = n("$InternalEnum").Mirrored(["POINTER", "TOUCH"]);
    function p(e) {
      return e === m.POINTER ? 20 : 24;
    }
    function _(e, t) {
      return e === m.POINTER ? f : g(t);
    }
    var f = {
      xstyleConfig: {
        root: [
          o("wdsHeight").wdsHeight.fullHeight,
          o("wdsWidth").wdsWidth.fullWidth,
        ],
        container: [
          o("wdsHeight").wdsHeight.fullHeight,
          o("wdsWidth").wdsWidth.fullWidth,
          o("WDSFlex.stylex").wdsFlex.flex,
          o("WDSFlex.stylex").wdsFlex.alignCenter,
          e.container,
          s.container,
        ],
        addOnStart: [s.addOnStart],
        addOnEnd: [e.addOnEnd, s.addOnEnd],
        input: [
          e.input,
          s.input,
          o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
        ],
      },
    };
    function g(t) {
      var n = t === "iOS" ? d : c;
      return {
        xstyleConfig: {
          root: [
            o("wdsHeight").wdsHeight.fullHeight,
            o("wdsWidth").wdsWidth.fullWidth,
          ],
          container: [
            o("wdsHeight").wdsHeight.fullHeight,
            o("wdsWidth").wdsWidth.fullWidth,
            o("WDSFlex.stylex").wdsFlex.flex,
            o("WDSFlex.stylex").wdsFlex.alignCenter,
            e.container,
            n.container,
          ],
          addOnStart: [u.addOnStart, n.addOnStart],
          addOnEnd: [e.addOnEnd, u.addOnEnd],
          input: [
            e.input,
            u.input,
            n.input,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
          ],
        },
      };
    }
    ((l.SearchBarDensity = m),
      (l.getSearchIconSize = p),
      (l.getSearchBarVariant = _));
  },
  98,
);
