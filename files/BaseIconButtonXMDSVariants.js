__d(
  "BaseIconButtonXMDSVariants",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        pressable: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          display: "x3nfvp2",
          paddingTop: "x1y1aw1k",
          paddingInlineEnd: "xf159sx",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xmzvs34",
          transform: "x3oybdh x19kf12q",
          $$css: !0,
        },
        pressableDisabled: { opacity: "xti2d7y", $$css: !0 },
      },
      s = {
        contained: {
          backgroundColor: "x1jx94hy",
          boxShadow: "xi1c1fh",
          $$css: !0,
        },
        primary: { backgroundColor: "xtvsq51", $$css: !0 },
        primaryOnMedia: { backgroundColor: "xyyilqk", $$css: !0 },
        secondary: {
          backgroundColor: "x1qhmfi1",
          borderTopColor: "x1s9qjmn",
          borderInlineEndColor: "x71vvrb",
          borderBottomColor: "x7gj0x1",
          borderInlineStartColor: "x167l43f",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
      },
      u = {
        dense: {
          paddingTop: "x1iorvi4",
          paddingBottom: "xjkvuk6",
          paddingInlineStart: "x135b78x",
          paddingInlineEnd: "x11lfxj5",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        regular: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xmzvs34",
          paddingInlineEnd: "xf159sx",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      c = {
        xstyleConfig: {
          pressable: e.pressable,
          pressableDisabled: e.pressableDisabled,
        },
      },
      d = {
        xstyleConfig: babelHelpers.extends({}, c.xstyleConfig, {
          pressable: [e.pressable, s.contained],
        }),
      },
      m = {
        xstyleConfig: babelHelpers.extends({}, c.xstyleConfig, {
          pressable: [e.pressable, s.primary],
        }),
      },
      p = {
        xstyleConfig: babelHelpers.extends({}, c.xstyleConfig, {
          pressable: [e.pressable, s.primaryOnMedia],
        }),
      },
      _ = {
        xstyleConfig: babelHelpers.extends({}, c.xstyleConfig, {
          pressable: [e.pressable, s.secondary],
        }),
      },
      f = { xstyleConfig: { pressable: [u.dense] } },
      g = { xstyleConfig: { pressable: [u.regular] } };
    ((l.BaseIconButtonXMDSDefaultVariant = c),
      (l.BaseIconButtonXMDSContainedVariant = d),
      (l.BaseIconButtonXMDSPrimaryVariant = m),
      (l.BaseIconButtonXMDSPrimaryOnMediaVariant = p),
      (l.BaseIconButtonXMDSSecondaryVariant = _),
      (l.BaseIconButtonXMDSDenseVariant = f),
      (l.BaseIconButtonXMDSRegularVariant = g));
  },
  98,
);
