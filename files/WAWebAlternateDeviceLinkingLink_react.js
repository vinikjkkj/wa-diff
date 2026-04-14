__d(
  "WAWebAlternateDeviceLinkingLink.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebWaBrandArrowRightIconWrapper.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        alternateLinkingMethod: {
          textDecorationLine: "xujl8zx",
          textDecorationColor: "xopvzan",
          textDecorationThickness: "xewurvo",
          textUnderlineOffset: "x3pynha",
          color: "x1hql6x6",
          fontWeight: "xk50ysn",
          ":hover_color": "x1xnyc8c",
          ":focus-visible_color": "x42e3j",
          $$css: !0,
        },
        alternateLinkingMethodWindows: {
          textDecorationLine: "xkrqix3",
          color: "xo1mcw5",
          $$css: !0,
        },
        linkContainer: { width: "x9r4l05", $$css: !0 },
      };
    function m() {
      return s._(/*BTDS*/ "Log in with phone number");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Log in with QR code");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.codeType,
        a = t.enabled,
        i = a === void 0 ? !0 : a,
        l = t.onClick,
        s =
          n ===
          o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType
            .PHONE_NUMBER_LINK_CODE
            ? p()
            : m(),
        u = c.jsxs(o("WAWebFlex.react").FlexRow, {
          paddingTop: 4,
          columnGap: 4,
          align: "start",
          paddingEnd: r("WAWebEnvironment").isWindows ? 40 : void 0,
          paddingBottom: r("WAWebEnvironment").isWindows ? 20 : void 0,
          paddingStart: 40,
          justify: "center",
          xstyle: r("WAWebEnvironment").isWindows && d.linkContainer,
          children: [
            c.jsx(o("WAWebFlex.react").FlexColumn, { children: s }),
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              children: c.jsx(r("WAWebWaBrandArrowRightIconWrapper.react"), {}),
            }),
          ],
        });
      return i
        ? c.jsx(o("WAWebClickable.react").Clickable, {
            as: "div",
            dataTestId: "link-device-qrcode-alt-linking-hint",
            className: (e || (e = r("stylex")))([
              d.alternateLinkingMethod,
              r("WAWebEnvironment").isWindows &&
                d.alternateLinkingMethodWindows,
            ]),
            onClick: l,
            children: u,
          })
        : c.jsx(
            "span",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "xujl8zx xopvzan xewurvo x3pynha x1hql6x6 xk50ysn x42e3j xbyyjgo xvv1gim",
                },
                1: {
                  className:
                    "xopvzan xewurvo x3pynha xk50ysn x42e3j xkrqix3 xo1mcw5 xbyyjgo xvv1gim",
                },
              }[!!r("WAWebEnvironment").isWindows << 0],
              { children: u },
            ),
          );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
