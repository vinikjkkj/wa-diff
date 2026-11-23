__d(
  "WAWebOrderDetailTextComposer",
  [
    "WAWebOrderConstants",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebVelocityTransitionGroup",
    "WDSIconIcSendFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        btnSend: {
          bottom: "x1oddz9l",
          color: "xhslqc4",
          opacity: "xg01cxk",
          position: "x10l6tqk",
          right: "xk6ci0l",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        textFieldContainer: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          position: "x1n2onr6",
          width: "xh8yej3",
          zIndex: "x11uqc5h",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.buttonTitle,
        a = t.disabled,
        i = t.onChange,
        l = t.onSubmit,
        s = t.placeholder,
        d = t.testid,
        m = t.textFieldTestId,
        p = t.value;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "media-caption",
            xstyle: [
              c.textFieldContainer,
              o("WDSMargins.stylex").wdsMargins.marginBottom40,
            ],
            children: u.jsx("div", {
              children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
                maxLength: o("WAWebOrderConstants").MAX_CART_MESSAGE_LENGTH,
                placeholder: s,
                value: p,
                testid: m,
                multiline: !0,
                showRemaining: !0,
                spellCheck: !0,
                emojiBtnPosition: "side",
                textFormatEnabled: !0,
                onEnter: function () {
                  a !== !0 && l();
                },
                onChange: function (t) {
                  return i(t.text);
                },
              }),
            }),
          }),
          u.jsx(r("WAWebVelocityTransitionGroup"), {
            appear: !0,
            transitionName: "btn",
            children: u.jsx(
              "button",
              babelHelpers.extends(
                { disabled: a, "data-testid": d },
                (e || (e = r("stylex"))).props([
                  c.btnSend,
                  o("WDSMargins.stylex").wdsMargins.margin0,
                  o("WDSPaddings.stylex").wdsPaddings.padding0,
                ]),
                {
                  tabIndex: -1,
                  onClick: l,
                  title: n,
                  children: u.jsx(o("WAWebRound.react").Round, {
                    disabled: a,
                    children: u.jsx(r("WDSIconIcSendFilled.react"), {
                      testid: "wds-ic-send-filled",
                      width: 18,
                      height: 18,
                      directional: !0,
                    }),
                  }),
                },
              ),
            ),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
