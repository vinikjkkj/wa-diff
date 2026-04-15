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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(16),
        a = t.codeType,
        i = t.enabled,
        l = t.onClick,
        s = i === void 0 ? !0 : i,
        u;
      n[0] !== a
        ? ((u =
            a ===
            o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType
              .PHONE_NUMBER_LINK_CODE
              ? p()
              : m()),
          (n[0] = a),
          (n[1] = u))
        : (u = n[1]);
      var _ = u,
        f;
      n[2] !== _
        ? ((f = c.jsx(o("WAWebFlex.react").FlexColumn, { children: _ })),
          (n[2] = _),
          (n[3] = f))
        : (f = n[3]);
      var g;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(o("WAWebFlex.react").FlexColumn, {
            children: c.jsx(r("WAWebWaBrandArrowRightIconWrapper.react"), {}),
          })),
          (n[4] = g))
        : (g = n[4]);
      var h;
      n[5] !== f
        ? ((h = c.jsxs(o("WAWebFlex.react").FlexRow, {
            paddingTop: 4,
            columnGap: 4,
            align: "start",
            paddingEnd: r("WAWebEnvironment").isWindows ? 40 : void 0,
            paddingBottom: r("WAWebEnvironment").isWindows ? 20 : void 0,
            paddingStart: 40,
            justify: "center",
            xstyle: r("WAWebEnvironment").isWindows && d.linkContainer,
            children: [f, g],
          })),
          (n[5] = f),
          (n[6] = h))
        : (h = n[6]);
      var y = h;
      if (!s) {
        var C;
        n[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = {
              0: {
                className:
                  "xujl8zx xopvzan xewurvo x3pynha x1hql6x6 xk50ysn x42e3j xbyyjgo xvv1gim",
              },
              1: {
                className:
                  "xopvzan xewurvo x3pynha xk50ysn x42e3j xkrqix3 xo1mcw5 xbyyjgo xvv1gim",
              },
            }[!!r("WAWebEnvironment").isWindows << 0]),
            (n[7] = C))
          : (C = n[7]);
        var b;
        return (
          n[8] !== C || n[9] !== y
            ? ((b = c.jsx(
                "span",
                babelHelpers.extends({}, C, { children: y }),
              )),
              (n[8] = C),
              (n[9] = y),
              (n[10] = b))
            : (b = n[10]),
          b
        );
      }
      var v;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (e || (e = r("stylex")))([
            d.alternateLinkingMethod,
            r("WAWebEnvironment").isWindows && d.alternateLinkingMethodWindows,
          ])),
          (n[11] = v))
        : (v = n[11]);
      var S;
      return (
        n[12] !== l || n[13] !== v || n[14] !== y
          ? ((S = c.jsx(o("WAWebClickable.react").Clickable, {
              as: "div",
              dataTestId: "link-device-qrcode-alt-linking-hint",
              className: v,
              onClick: l,
              children: y,
            })),
            (n[12] = l),
            (n[13] = v),
            (n[14] = y),
            (n[15] = S))
          : (S = n[15]),
        S
      );
    }
    l.default = _;
  },
  226,
);
