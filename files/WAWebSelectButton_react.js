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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(23),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.ariaLabel,
        d = l.ariaRoleDescription,
        m = l.children,
        p = l.label,
        _ = l.testid,
        f = l.theme,
        g = l.width,
        h =
          f === "about-20-screen"
            ? c.about20BorderTheme
            : f === "default"
              ? null
              : f === "link-devices-screen"
                ? c.linkDevicesBorderTheme
                : f === "link-devices-screen-wds"
                  ? c.linkDevicesBorderThemeWdsLike
                  : null,
        y =
          f === "link-devices-screen-wds"
            ? c.paddingWdsLike
            : f === "about-20-screen"
              ? c.paddingAbout20
              : null,
        C = f === "about-20-screen" && c.about20LabelColor,
        b;
      n[3] !== C ? ((b = [c.label, C]), (n[3] = C), (n[4] = b)) : (b = n[4]);
      var v;
      n[5] !== p || n[6] !== b
        ? ((v = u.jsx(r("WAWebFlexItem.react"), {
            justify: "start",
            align: "center",
            xstyle: b,
            children: p,
          })),
          (n[5] = p),
          (n[6] = b),
          (n[7] = v))
        : (v = n[7]);
      var S;
      n[8] !== f
        ? ((S =
            f === "about-20-screen"
              ? u.jsx(r("WDSIconIcExpandMore.react"), {
                  colorName: "contentDefault",
                })
              : f === "link-devices-screen-wds"
                ? u.jsx(r("WDSIconIcExpandMore.react"), {
                    colorName: "contentActionDefault",
                  })
                : f === "link-devices-screen"
                  ? u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                      xstyle: c.paddingStart8,
                      width: 20,
                      iconXstyle: c.linkDevicesIconTheme,
                    })
                  : u.jsx(o("WAWebCaretDownIcon.react").CaretDownIcon, {
                      xstyle: c.paddingStart8,
                    })),
          (n[8] = f),
          (n[9] = S))
        : (S = n[9]);
      var R;
      n[10] !== v || n[11] !== S
        ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            align: "center",
            grow: 1,
            children: [v, S],
          })),
          (n[10] = v),
          (n[11] = S),
          (n[12] = R))
        : (R = n[12]);
      var L;
      return (
        n[13] !== s ||
        n[14] !== d ||
        n[15] !== m ||
        n[16] !== i ||
        n[17] !== h ||
        n[18] !== y ||
        n[19] !== R ||
        n[20] !== _ ||
        n[21] !== g
          ? ((L = u.jsxs(o("WAWebButton.react").WAWebButtonSecondary, {
              onClick: o("WAWebStopEvent").stopPropagation,
              ref: i,
              width: g,
              ariaLabel: s,
              ariaRoleDescription: d,
              borderStyles: h,
              paddingStyles: y,
              testid: void 0,
              children: [R, m],
            })),
            (n[13] = s),
            (n[14] = d),
            (n[15] = m),
            (n[16] = i),
            (n[17] = h),
            (n[18] = y),
            (n[19] = R),
            (n[20] = _),
            (n[21] = g),
            (n[22] = L))
          : (L = n[22]),
        L
      );
    }
    l.SelectButton = d;
  },
  98,
);
