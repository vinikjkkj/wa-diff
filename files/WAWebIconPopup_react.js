__d(
  "WAWebIconPopup.react",
  [
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebFilledIcon.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSFlex.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = { fullWidth: { width: "xh8yej3", $$css: !0 } };
    function d(t) {
      var a = t.buttonGroupJustify,
        i = a === void 0 ? "end" : a,
        l = t.description,
        s = t.extraContent,
        d = t.filledIconBgColor,
        m = t.filledIconColor,
        p = t.icon,
        _ = t.iconSize,
        f = _ === void 0 ? "small" : _,
        g = t.onOverlayClick,
        h = t.onPrimaryActionClick,
        y = t.onSecondaryActionClick,
        C = t.primaryActionText,
        b = C === void 0 ? r("WAWebFbtCommon")("OK") : C,
        v = t.secondaryActionText,
        S = t.stretchButtons,
        R = S === void 0 ? !1 : S,
        L = t.testid,
        E = t.title,
        k = t.useFilledIcon,
        I = k === void 0 ? !0 : k,
        T = function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield h == null ? void 0 : h()) !== !1 &&
              o("WAWebModalManager").ModalManager.close();
          })();
        },
        D = function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield y == null ? void 0 : y()) !== !1 &&
              o("WAWebModalManager").ModalManager.close();
          })();
        },
        x = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield g == null ? void 0 : g()) !== !1 &&
              o("WAWebModalManager").ModalManager.close();
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        $ = R === !0 ? "flexible" : "fit",
        P = I ? null : p;
      return u.jsx(o("WAWebModal.react").Modal, {
        testid: void 0,
        type: o("WAWebModal.react").ModalTheme.Small,
        onOverlayClick: x,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              children:
                P == null
                  ? u.jsx(r("WAWebFilledIcon.react"), {
                      Icon: p,
                      size: f,
                      iconColor: m,
                      backgroundColor: d,
                    })
                  : u.jsx(P, {}),
            }),
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              testid: void 0,
              children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
                paddingTop: 20,
                weight: "semibold",
                children: E,
              }),
            }),
            l != null &&
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                testid: void 0,
                paddingTop: 16,
                children: l,
              }),
            s,
            y != null && v != null
              ? u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      c.fullWidth,
                      o("WDSFlex.stylex").wdsFlex.flex,
                      o("WDSFlex.stylex").wdsFlex.justifyEnd,
                    ),
                    {
                      children: u.jsx(r("WDSButtonGroup.react"), {
                        orientation: "horizontal",
                        tertiaryButtonProps: {
                          variant: "borderless",
                          type: "default",
                          onPress: D,
                          testid: "popup-controls-secondary",
                          size: "medium",
                          widthMode: $,
                          label: v,
                        },
                        primaryButtonProps: {
                          variant: "filled",
                          type: "default",
                          onPress: T,
                          testid: "popup-controls-primary",
                          size: "medium",
                          widthMode: $,
                          label: b,
                        },
                      }),
                    },
                  ),
                )
              : u.jsxs(o("WAWebButton.react").ButtonGroup, {
                  paddingTop: 20,
                  alignSelf: "stretch",
                  justify: i,
                  direction: "horizontal",
                  children: [
                    y != null &&
                      v != null &&
                      u.jsx(r("WDSButton.react"), {
                        testid: void 0,
                        onPress: D,
                        variant: "borderless",
                        type: "default",
                        size: "medium",
                        widthMode: $,
                        label: v,
                      }),
                    u.jsx(r("WDSButton.react"), {
                      testid: void 0,
                      onPress: T,
                      variant: "filled",
                      type: "default",
                      size: "medium",
                      widthMode: $,
                      label: b,
                    }),
                  ],
                }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
