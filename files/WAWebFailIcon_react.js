__d(
  "WAWebFailIcon.react",
  [
    "WAWebAppContext.react",
    "WAWebDisplayType",
    "WAWebErrorTooltip.react",
    "WAWebRound.react",
    "WDSIconIcError.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = {
        container: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "x5yr21d",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          insetInlineEnd: "x4e0jua",
          left: null,
          right: null,
          top: "x13vifvy",
          zIndex: "xfo81ep",
          "@media screen and (max-width: 900px)_insetInlineEnd": "xjn1kfi",
          "@media screen and (max-width: 900px)_left": null,
          "@media screen and (max-width: 900px)_right": null,
          "@media screen and (min-width: 901px) and (max-width: 1024px)_marginInlineEnd":
            "x16on6y5",
          $$css: !0,
        },
        containerWithRightDrawer: {
          "@media screen and (min-width: 1025px) and (max-width: 1300px)_insetInlineEnd":
            "x1a5125j",
          "@media screen and (min-width: 1025px) and (max-width: 1300px)_left":
            null,
          "@media screen and (min-width: 1025px) and (max-width: 1300px)_right":
            null,
          $$css: !0,
        },
        groupChatProfilePictureDisplayed: {
          "@media screen and (max-width: 900px)_insetInlineEnd": "x1p46kum",
          "@media screen and (max-width: 900px)_left": null,
          "@media screen and (max-width: 900px)_right": null,
          $$css: !0,
        },
        notFromMe: {
          insetInlineStart: "x65okc",
          left: null,
          right: null,
          $$css: !0,
        },
        compact: {
          insetInlineEnd: "xtez0ps",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(22),
        a = t.ariaLabel,
        i = t.displayType,
        l = t.fromMe,
        s = t.isGroupChatProfilePictureDisplayed,
        m = t.onClick,
        p = t.tooltip,
        _ = c(!1),
        f = _[0],
        g = _[1],
        h = o("WAWebAppContext.react").useAppContext(),
        y = h.rightDrawerOpen,
        C;
      n[0] !== a || n[1] !== m
        ? ((C = m
            ? u.jsx(
                o("WAWebRound.react").Round,
                {
                  onClick: m,
                  theme: o("WAWebRound.react").RoundTheme.Error,
                  label: a,
                  children: u.jsx(r("WDSIconIcError.react"), {
                    colorName: "persistentAlwaysWhite",
                    height: 16,
                    width: 16,
                  }),
                },
                "error-button",
              )
            : u.jsx(
                "div",
                {
                  className:
                    "x6s0dn4 xk0ssx3 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1zfx7y x1gj3efs x151wx5t xea0m3l x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 xxk0z11 xl56j7k xnei2rj x67bb7w xvy4d1p",
                  children: u.jsx(r("WDSIconIcError.react"), {
                    colorName: "persistentAlwaysWhite",
                    height: 16,
                    width: 16,
                  }),
                },
                "error-icon",
              )),
          (n[0] = a),
          (n[1] = m),
          (n[2] = C))
        : (C = n[2]);
      var b = C,
        v;
      if (n[3] !== i || n[4] !== b || n[5] !== l || n[6] !== f || n[7] !== p) {
        if (
          ((v = [b]), f && i !== o("WAWebDisplayType").DISPLAY_TYPE.COMMENT)
        ) {
          var S;
          n[9] !== l || n[10] !== p
            ? ((S = u.jsx(
                r("WAWebErrorTooltip.react"),
                { fromMe: l, children: p },
                "error-tooltip",
              )),
              (n[9] = l),
              (n[10] = p),
              (n[11] = S))
            : (S = n[11]);
          var R = S;
          v.unshift(R);
        }
        (l === !1 && (v = v.reverse()),
          (n[3] = i),
          (n[4] = b),
          (n[5] = l),
          (n[6] = f),
          (n[7] = p),
          (n[8] = v));
      } else v = n[8];
      var L;
      n[12] !== i || n[13] !== l || n[14] !== s || n[15] !== y
        ? ((L = (e || (e = r("stylex"))).props([
            i !== o("WAWebDisplayType").DISPLAY_TYPE.COMMENT && d.container,
            i === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO && d.compact,
            l === !1 && d.notFromMe,
            s === !0 && d.groupChatProfilePictureDisplayed,
            y && d.containerWithRightDrawer,
          ])),
          (n[12] = i),
          (n[13] = l),
          (n[14] = s),
          (n[15] = y),
          (n[16] = L))
        : (L = n[16]);
      var E, k;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            return g(!0);
          }),
          (k = function () {
            return g(!1);
          }),
          (n[17] = E),
          (n[18] = k))
        : ((E = n[17]), (k = n[18]));
      var I;
      return (
        n[19] !== v || n[20] !== L
          ? ((I = u.jsx(
              "div",
              babelHelpers.extends({}, L, {
                onMouseEnter: E,
                onMouseLeave: k,
                "data-testid": void 0,
                children: v,
              }),
            )),
            (n[19] = v),
            (n[20] = L),
            (n[21] = I))
          : (I = n[21]),
        I
      );
    }
    l.default = m;
  },
  98,
);
