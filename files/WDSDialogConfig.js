__d(
  "WDSDialogConfig",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        container: {
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "xuqqiot",
          borderStartEndRadius: "x1lkg3h2",
          borderEndEndRadius: "x17mbzc4",
          borderEndStartRadius: "xcouhex",
          boxShadow: "x1hdfv4t",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        header: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          overflowWrap: "xj0a0fe",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "xl7twdi",
          rowGap: "x129bwdz",
          $$css: !0,
        },
        headerAfterMedia: {
          paddingTop: "xexx8yu",
          rowGap: "x1qvou4u",
          $$css: !0,
        },
        topBar: {
          alignItems: "x1cy8zhl",
          columnGap: "x1s70e7g",
          display: "x78zum5",
          minHeight: "x1ba4aug",
          $$css: !0,
        },
        titleWrapper: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexBasis: "x1t1x2f9",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x1ba4aug",
          minWidth: "xeuugli",
          overflowWrap: "xj0a0fe",
          $$css: !0,
        },
        body: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "xl7twdi",
          $$css: !0,
        },
        footer: {
          display: "x78zum5",
          justifyContent: "x13a6bvl",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "xl7twdi",
          $$css: !0,
        },
        headerMedia: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
      },
      s = {
        body: { paddingTop: "x1p57kb1", $$css: !0 },
        header: { rowGap: "x1f0uite", $$css: !0 },
        titleWrapper: { minHeight: "x65nank", $$css: !0 },
        topBar: { minHeight: "x65nank", $$css: !0 },
      },
      u = {
        container: {
          paddingBottom: "xvpt6g3",
          paddingTop: "xl7twdi",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        header: {
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "xexx8yu",
          rowGap: "x1qvou4u",
          $$css: !0,
        },
        body: {
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        footer: {
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      c = {
        sm: { width: "xdtcc9p", $$css: !0 },
        md: { width: "x3qjwna", $$css: !0 },
        lg: { width: "xql66rd", $$css: !0 },
        xl: { width: "x1vwlgnz", $$css: !0 },
      };
    function d(t, n, r) {
      (n === void 0 && (n = "functional"), r === void 0 && (r = "functional"));
      var o = r === "expressive";
      return n === "expressive"
        ? {
            body: [e.body, o && s.body, u.body],
            container: [e.container, c[t], u.container],
            footer: [e.footer, u.footer],
            header: [e.header, u.header, o && s.header],
            headerAfterMedia: [e.headerAfterMedia, o && s.header],
            headerMedia: e.headerMedia,
            titleWrapper: [e.titleWrapper, o && s.titleWrapper],
            topBar: [e.topBar, o && s.topBar],
          }
        : {
            body: [e.body, o && s.body],
            container: [e.container, c[t]],
            footer: [e.footer],
            header: [e.header, o && s.header],
            headerAfterMedia: [e.headerAfterMedia, o && s.header],
            headerMedia: e.headerMedia,
            titleWrapper: [e.titleWrapper, o && s.titleWrapper],
            topBar: [e.topBar, o && s.topBar],
          };
    }
    l.getDialogStyles = d;
  },
  98,
);
