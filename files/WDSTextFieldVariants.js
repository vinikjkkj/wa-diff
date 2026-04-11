__d(
  "WDSTextFieldVariants",
  [
    "Locale",
    "WDSFlex.stylex",
    "WDSFontTokenStyles",
    "WDSNativeSpacingToken.stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("Locale").isRTL(),
      s = "--wds-textfield-label-move-distance",
      u = "--wds-textfield-label-width",
      c = {
        addOnBottom: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        container: {
          height: "xnnlda6",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          paddingInlineStart: "xdx6fka",
          backgroundColor: "x1c7u0tx",
          $$css: !0,
        },
        containerEndPadding: { paddingInlineEnd: "xvtqlqk", $$css: !0 },
        input: { height: "xxk0z11", $$css: !0 },
        labelFilledFocused: { transform: "x1pga95j", $$css: !0 },
      },
      d = {
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          minHeight: "x1gg8mnh",
          paddingInlineStart: "x4dgp3c",
          paddingInlineEnd: "xw7txdq",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          backgroundColor: "x1c7u0tx",
          boxSizing: "x9f619",
          rowGap: "x1qvou4u",
          $$css: !0,
        },
        content: {
          display: "x78zum5",
          columnGap: "x1s70e7g",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        input: { height: "x17rw0jw", $$css: !0 },
        label: {
          minWidth: "x1rv09fx",
          maxWidth: "x1cjz9sy",
          cursor: "xmper1u",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          pointerEvents: "x47corl",
          userSelect: "x87ps6o",
          textOverflow: "xlyipyv",
          lineHeight: "x19v9tvf",
          display: "x104kibb",
          "-webkit-line-clamp": "x1h7i4cw",
          "-webkit-box-orient": "x1ua5tub",
          $$css: !0,
        },
      },
      m = {
        addOnBottom: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        container: {
          height: "x1vqgdyp",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingInlineStart: "x1iw51ew",
          backgroundColor: "x1n29qfj",
          $$css: !0,
        },
        containerEndPadding: { paddingInlineEnd: "xde1mab", $$css: !0 },
        input: { height: "x1qx5ct2", $$css: !0 },
        labelFilledFocused: { transform: "x14ecyok", $$css: !0 },
        errorContainer: { backgroundColor: "x3039w2", $$css: !0 },
        containerDisabled: { backgroundColor: "xqbpc7x", $$css: !0 },
      },
      p = {
        addOnBottom: {
          display: "x78zum5",
          justifyContent: "x1qughib",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        container: {
          marginInlineStart: "xwklpps",
          marginInlineEnd: "xnnr8r",
          marginLeft: null,
          marginRight: null,
          marginTop: "x1k70j0n",
          marginBottom: "xjpr12u",
          outlineColor: "xod3euw",
          outlineStyle: "xaatb59",
          outlineWidth: "x1qgsegg",
          boxSizing: "x9f619",
          ":focus-within_outlineColor": "x850hsn",
          ":focus-within_outlineWidth": "x668970",
          $$css: !0,
        },
        rootDisabled: { opacity: "x1lxidc1", cursor: "x1h6gzvc", $$css: !0 },
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
          maxWidth: "x193iq5w",
          textOverflow: "xlyipyv",
          width: "xh8yej3",
          caretColor: "xjdcl3y",
          ":disabled_opacity": "x1fzehxr",
          ":focus_outline": "x1uvtmcs",
          ":read-only_cursor": "x1qlqtfh",
          "::selection_backgroundColor": "xkrh14z",
          $$css: !0,
        },
        inputDisabled: { cursor: "xmper1u", opacity: "x1hc1fzr", $$css: !0 },
        label: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          transformOrigin: "x1al4vs7",
          cursor: "xmper1u",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          textOverflow: "xlyipyv",
          transitionDuration: "x13dflua",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "x1fwqrf6",
          whiteSpace: "xuxw1ft",
          userSelect: "x87ps6o",
          $$css: !0,
        },
        labelFilledFocused: {
          height: "xlup9mm",
          opacity: "x1hc1fzr",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          paddingRight: "x13zs225",
          paddingLeft: "x1ihvjk1",
          paddingInlineStart: null,
          paddingInlineEnd: null,
          backgroundColor: "x1280gxy",
          zIndex: "x1vjfegm",
          transitionTimingFunction: "x1fwqrf6",
          $$css: !0,
        },
        labelRTL: { transformOrigin: "x1h1bmdg", $$css: !0 },
        addOnEnd: {
          opacity: "x1hc1fzr",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
      },
      _ = { errorLabel: { color: "x30a034", $$css: !0 } },
      f = {
        primaryLabel: { color: "x14ug900", $$css: !0 },
        errorLabel: { color: "x14ug900", $$css: !0 },
      },
      g = {
        primaryLabel: { color: "xhslqc4", $$css: !0 },
        errorLabel: { color: "xqnyt8g", $$css: !0 },
        primaryContainer: {
          outlineColor: "xod3euw",
          ":focus-within_outlineColor": "x850hsn",
          $$css: !0,
        },
        errorContainer: {
          outlineColor: "x10322wi",
          ":focus-within_outlineColor": "x1l28hwo",
          $$css: !0,
        },
      };
    function h(e, t) {
      if (e) {
        var n;
        return (
          t === "android"
            ? (n = _.errorLabel)
            : t === "iOS"
              ? (n = f.errorLabel)
              : (n = g.errorLabel),
          { xstyleConfig: { label: n, container: g.errorContainer } }
        );
      }
      return {
        xstyleConfig: {
          label: t === "iOS" ? f.primaryLabel : g.primaryLabel,
          container: g.primaryContainer,
        },
      };
    }
    function y(t, n) {
      return {
        xstyleConfig: {
          root: [t && p.rootDisabled],
          addOnBottom: [p.addOnBottom, c.addOnBottom],
          addOnEnd: p.addOnEnd,
          container: [p.container, c.container, !n && c.containerEndPadding],
          input: [
            p.input,
            c.input,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
          ],
          inputDisabled: p.inputDisabled,
          label: [
            p.label,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
            c.input,
            e && p.labelRTL,
          ],
          labelFilled: [
            p.labelFilledFocused,
            c.labelFilledFocused,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body3,
          ],
          labelFocused: [
            p.labelFilledFocused,
            c.labelFilledFocused,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body3,
          ],
        },
      };
    }
    function C(t) {
      return {
        xstyleConfig: {
          root: [d.root, t && p.rootDisabled],
          addOnBottom: p.addOnBottom,
          addOnEnd: p.addOnEnd,
          content: d.content,
          container: o("WDSFlex.stylex").wdsFlex.columnGapSingle,
          input: [
            p.input,
            d.input,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
          ],
          inputDisabled: p.inputDisabled,
          label: [
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized,
            d.label,
            e && p.labelRTL,
          ],
        },
      };
    }
    function b(t, n, r) {
      var a = [p.container, m.container];
      return (
        t ? a.push(m.errorContainer) : n && a.push(m.containerDisabled),
        r === !1 && a.push(m.containerEndPadding),
        {
          xstyleConfig: {
            root: [n && p.rootDisabled],
            addOnBottom: [p.addOnBottom, m.addOnBottom],
            addOnEnd: p.addOnEnd,
            container: a,
            input: [
              p.input,
              m.input,
              o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
            ],
            inputDisabled: p.inputDisabled,
            label: [
              p.label,
              o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
              e && p.labelRTL,
            ],
            labelFilled: [
              p.labelFilledFocused,
              m.labelFilledFocused,
              o("WDSFontTokenStyles").WDSFontTokenStyles.Body3,
            ],
            labelFocused: [
              p.labelFilledFocused,
              m.labelFilledFocused,
              o("WDSFontTokenStyles").WDSFontTokenStyles.Body3,
            ],
          },
        }
      );
    }
    function v(e, t, n, r) {
      return r === "android" ? y(t, n) : r === "iOS" ? C(t) : b(e, t, n);
    }
    ((l.labelMoveDistanceVarname = s),
      (l.textFieldLabelWidth = u),
      (l.iOSTextInputContainerPaddingInline = o(
        "WDSNativeSpacingToken.stylex",
      ).WDSNativeSpacingToken.double),
      (l.WDSTextFieldColorVariant = h),
      (l.WDSTextFieldLabelVariant = v));
  },
  98,
);
