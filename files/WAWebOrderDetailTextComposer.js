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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(25),
        a = t.buttonTitle,
        i = t.disabled,
        l = t.onChange,
        s = t.onSubmit,
        d = t.placeholder,
        m = t.testid,
        p = t.textFieldTestId,
        _ = t.value,
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [c.textFieldContainer, o("WAWebUISpacing").uiMargin.bottom40]),
          (n[0] = f))
        : (f = n[0]);
      var g;
      n[1] !== i || n[2] !== s
        ? ((g = function () {
            i !== !0 && s();
          }),
          (n[1] = i),
          (n[2] = s),
          (n[3] = g))
        : (g = n[3]);
      var h;
      n[4] !== l
        ? ((h = function (t) {
            return l(t.text);
          }),
          (n[4] = l),
          (n[5] = h))
        : (h = n[5]);
      var y;
      n[6] !== d || n[7] !== g || n[8] !== h || n[9] !== p || n[10] !== _
        ? ((y = u.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "media-caption",
            xstyle: f,
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
                onEnter: g,
                onChange: h,
              }),
            }),
          })),
          (n[6] = d),
          (n[7] = g),
          (n[8] = h),
          (n[9] = p),
          (n[10] = _),
          (n[11] = y))
        : (y = n[11]);
      var C;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (e || (e = r("stylex"))).props([
            c.btnSend,
            o("WAWebUISpacing").uiMargin.all0,
            o("WAWebUISpacing").uiPadding.all0,
          ])),
          (n[12] = C))
        : (C = n[12]);
      var b;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
            width: 18,
            directional: !0,
          })),
          (n[13] = b))
        : (b = n[13]);
      var v;
      n[14] !== i
        ? ((v = u.jsx(o("WAWebRound.react").Round, {
            disabled: i,
            children: b,
          })),
          (n[14] = i),
          (n[15] = v))
        : (v = n[15]);
      var S;
      n[16] !== a || n[17] !== i || n[18] !== s || n[19] !== v || n[20] !== m
        ? ((S = u.jsx(r("WAWebVelocityTransitionGroup"), {
            appear: !0,
            transitionName: "btn",
            children: u.jsx(
              "button",
              babelHelpers.extends({ disabled: i, "data-testid": void 0 }, C, {
                tabIndex: -1,
                onClick: s,
                title: a,
                children: v,
              }),
            ),
          })),
          (n[16] = a),
          (n[17] = i),
          (n[18] = s),
          (n[19] = v),
          (n[20] = m),
          (n[21] = S))
        : (S = n[21]);
      var R;
      return (
        n[22] !== y || n[23] !== S
          ? ((R = u.jsxs(u.Fragment, { children: [y, S] })),
            (n[22] = y),
            (n[23] = S),
            (n[24] = R))
          : (R = n[24]),
        R
      );
    }
    l.default = d;
  },
  98,
);
