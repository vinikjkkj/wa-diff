__d(
  "WAWebOrderDetailTextComposer",
  [
    "WAWebConstantsDeprecated",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebUISpacing",
    "WAWebVelocityTransitionGroup",
    "WAWebWdsIcSendFilledIcon.react",
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
        a = t.chat,
        i = t.disabled,
        l = t.onChange,
        s = t.onSubmit,
        d = t.placeholder,
        m = t.testid,
        p = t.textFieldTestId,
        _ = t.value;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "media-caption",
            xstyle: [
              c.textFieldContainer,
              o("WAWebUISpacing").uiMargin.bottom40,
            ],
            children: u.jsx("div", {
              children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
                maxLength: r("WAWebConstantsDeprecated")
                  .MAX_CART_MESSAGE_LENGTH,
                placeholder: d,
                value: _,
                testid: void 0,
                multiline: !0,
                showRemaining: !0,
                spellCheck: !0,
                emojiBtnPosition: "side",
                textFormatEnabled: !0,
                onEnter: function () {
                  i !== !0 && s();
                },
                onChange: function (t) {
                  return l(t.text);
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
                { disabled: i, "data-testid": void 0 },
                (e || (e = r("stylex"))).props([
                  c.btnSend,
                  o("WAWebUISpacing").uiMargin.all0,
                  o("WAWebUISpacing").uiPadding.all0,
                ]),
                {
                  tabIndex: -1,
                  onClick: s,
                  title: n,
                  children: u.jsx(o("WAWebRound.react").Round, {
                    disabled: i,
                    children: u.jsx(
                      o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
                      { width: 18, directional: !0 },
                    ),
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
