__d(
  "WDSTextualLink.react",
  ["BaseLinkV2.react", "WDSFontTokenStyles", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "children",
        "data-tab",
        "download",
        "href",
        "onBlur",
        "onClick",
        "onFocus",
        "testid",
        "textConfig",
      ],
      s,
      u,
      c = s || (s = r("react")),
      d = {
        link: {
          outline: "x1a2a7pz",
          cursor: "x1ypdohk",
          color: "x1ph7ams x17f7hit",
          fontWeight: "xuv8nkb",
          textDecoration: "x1hl2dhg xt0b8zv x1eo1aoc xbvygy2 x1wp9yj1 xv854yx",
          backgroundColor: "x1k74hu9 xp30eni",
          textUnderlineOffset: "xrys4gj xhmieyt",
          $$css: !0,
        },
        buttonLink: {
          fontFamily: "xjb2p0i",
          fontSize: "x1qlqyl8",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          background: "x11g6tue",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.children,
        a = t["data-tab"],
        i = t.download,
        l = t.href,
        s = t.onBlur,
        m = t.onClick,
        p = t.onFocus,
        _ = t.testid,
        f = t.textConfig,
        g = babelHelpers.objectWithoutPropertiesLoose(t, e),
        h = l != null && l !== "" && l !== "#",
        y =
          f === "Body1" || f === "Body1Emphasized"
            ? o("WDSFontTokenStyles").WDSFontTokenStyles.Body1
            : f === "Body2" || f === "Body2Emphasized"
              ? o("WDSFontTokenStyles").WDSFontTokenStyles.Body2
              : f === "Body3"
                ? o("WDSFontTokenStyles").WDSFontTokenStyles.Body3
                : f === "Body3Emphasized"
                  ? o("WDSFontTokenStyles").WDSFontTokenStyles.Body2
                  : f === "Headline1"
                    ? o("WDSFontTokenStyles").WDSFontTokenStyles.Headline1
                    : f === "Headline2"
                      ? o("WDSFontTokenStyles").WDSFontTokenStyles.Headline2
                      : f === "LargeTitle1"
                        ? o("WDSFontTokenStyles").WDSFontTokenStyles.LargeTitle1
                        : f === "LargeTitle2"
                          ? o("WDSFontTokenStyles").WDSFontTokenStyles
                              .LargeTitle2
                          : void 0;
      if (h) {
        var C = m;
        return c.jsx(
          r("BaseLinkV2.react"),
          babelHelpers.extends(
            {
              href: l,
              onClick: C,
              variant: { xstyleConfig: { link: [d.link, y] } },
              target: "_blank",
              rel: "noopener noreferrer",
              onFocusOut: s,
              onFocusIn: p,
              onFocus: p,
              dataTab: a,
              testid: void 0,
              download: i,
            },
            g,
            { children: n },
          ),
        );
      }
      return c.jsx(
        "button",
        babelHelpers.extends(
          {
            "data-tab": a,
            "data-testid": void 0,
            type: "button",
            onClick: m,
            onBlur: s,
            onFocus: p,
          },
          (u || (u = r("stylex"))).props(d.buttonLink, d.link, y),
          g,
          { children: n },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
