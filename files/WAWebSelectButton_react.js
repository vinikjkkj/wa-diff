__d(
  "WAWebSelectButton.react",
  [
    "WAWebButton.react",
    "WAWebCaretDownIcon.react",
    "WAWebChevronIcon.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebStopEvent",
    "WDSIconIcExpandMore.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = {
        label: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        linkDevicesBorderTheme: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xy2seqb",
          borderInlineEndColor: "x12sz9sg",
          borderBottomColor: "xwm8nch",
          borderInlineStartColor: "xxkxxek",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          $$css: !0,
        },
        linkDevicesBorderThemeWdsLike: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        about20BorderTheme: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        paddingAbout20: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "x1uc92m",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        paddingWdsLike: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "x1uc92m",
          $$css: !0,
        },
        linkDevicesIconTheme: {
          color: "x50qr9i",
          transform: "x1iffjtl",
          $$css: !0,
        },
        paddingStart8: { paddingInlineStart: "x12w63v0", $$css: !0 },
        about20LabelColor: {
          color: "x14ug900",
          fontWeight: "xo1l8bm",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.ariaLabel,
        l = a.ariaRoleDescription,
        s = a.children,
        d = a.label,
        m = a.testid,
        p = a.theme,
        _ = a.width;
      return u.jsxs(o("WAWebButton.react").WAWebButtonSecondary, {
        onClick: o("WAWebStopEvent").stopPropagation,
        ref: n,
        width: _,
        ariaLabel: i,
        ariaRoleDescription: l,
        borderStyles:
          p === "about-20-screen"
            ? c.about20BorderTheme
            : p === "default"
              ? null
              : p === "link-devices-screen"
                ? c.linkDevicesBorderTheme
                : p === "link-devices-screen-wds"
                  ? c.linkDevicesBorderThemeWdsLike
                  : null,
        paddingStyles:
          p === "link-devices-screen-wds"
            ? c.paddingWdsLike
            : p === "about-20-screen"
              ? c.paddingAbout20
              : null,
        testid: void 0,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            align: "center",
            grow: 1,
            children: [
              u.jsx(r("WAWebFlexItem.react"), {
                justify: "start",
                align: "center",
                xstyle: [
                  c.label,
                  p === "about-20-screen" && c.about20LabelColor,
                ],
                children: d,
              }),
              p === "about-20-screen"
                ? u.jsx(r("WDSIconIcExpandMore.react"), {
                    colorName: "contentDefault",
                  })
                : p === "link-devices-screen-wds"
                  ? u.jsx(r("WDSIconIcExpandMore.react"), {
                      colorName: "contentActionDefault",
                    })
                  : p === "link-devices-screen"
                    ? u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                        xstyle: c.paddingStart8,
                        width: 20,
                        iconXstyle: c.linkDevicesIconTheme,
                      })
                    : u.jsx(o("WAWebCaretDownIcon.react").CaretDownIcon, {
                        xstyle: c.paddingStart8,
                      }),
            ],
          }),
          s,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.SelectButton = d));
  },
  98,
);
