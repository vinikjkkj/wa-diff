__d(
  "WAWebQuizOptionCheckbox",
  [
    "fbt",
    "WALogger",
    "WAWebCheckBox.react",
    "WAWebCmd",
    "WAWebLottieAnimationLoadable",
    "WDSIconIcCancel.react",
    "WDSIconIcCancelFilled.react",
    "WDSIconIcCheckCircle.react",
    "WDSIconIcCheckCircleFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = "x1vsok4u-B",
      m = { xoeyzqq: "x1emn1tm xoeyzqq", $$css: !0 },
      p = {
        shake: {
          animationName: "x52n5gc",
          animationDuration: "xe1tv58",
          animationTimingFunction: "xu9fayn",
          animationIterationCount: "x1v7wizp",
          $$css: !0,
        },
        lottieOverlay: {
          width: "xb5ztz5",
          height: "x1a3bvp5",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          zIndex: "x1n327nk",
          top: "xdsb8wn",
          insetInlineStart: "xbudbmw",
          left: null,
          right: null,
          transform: "xo88s9q",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.animationPromise,
        a = e.checked,
        i = e.count,
        l = e.hideResults,
        u = e.id,
        d = e.isAdminOrOwner,
        m = e.isCorrectOption,
        _ = e.msgId,
        g = e.onOptionToggle,
        h = e.option,
        y = e.testid,
        C = h.localId,
        b = h.name,
        v;
      t[0] !== i || t[1] !== b
        ? ((v = s._(
            /*BTDS*/ '_j{"*":"{option} {responses} responses","_1":"{option} 1 response"}',
            [s._plural(i, "responses"), s._param("option", b)],
          )),
          (t[0] = i),
          (t[1] = b),
          (t[2] = v))
        : (v = t[2]);
      var S = v;
      if (l) {
        var R;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = { className: "x1emn1tm xoeyzqq" }), (t[3] = R))
          : (R = t[3]);
        var L;
        t[4] !== n || t[5] !== m || t[6] !== C || t[7] !== _ || t[8] !== g
          ? ((L = function () {
              (m
                ? f(n)
                : o("WAWebCmd").Cmd.trigger(
                    "animate_message_bubble",
                    _,
                    p.shake,
                  ),
                g(C));
            }),
            (t[4] = n),
            (t[5] = m),
            (t[6] = C),
            (t[7] = _),
            (t[8] = g),
            (t[9] = L))
          : (L = t[9]);
        var E;
        return (
          t[10] !== a ||
          t[11] !== u ||
          t[12] !== S ||
          t[13] !== L ||
          t[14] !== y
            ? ((E = c.jsx(
                "div",
                babelHelpers.extends({}, R, {
                  children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                    ariaLabel: S,
                    checked: a,
                    id: u,
                    onChange: L,
                    testid: y,
                    theme: o("WAWebCheckBox.react").CheckboxTheme
                      .POLLS_RECEIVER,
                  }),
                }),
              )),
              (t[10] = a),
              (t[11] = u),
              (t[12] = S),
              (t[13] = L),
              (t[14] = y),
              (t[15] = E))
            : (E = t[15]),
          E
        );
      }
      var k;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { width: 24, height: 24 }), (t[16] = k))
        : (k = t[16]);
      var I = k;
      if (m) {
        var T;
        return (
          t[17] !== a || t[18] !== d
            ? ((T =
                d || a
                  ? c.jsx(
                      r("WDSIconIcCheckCircleFilled.react"),
                      babelHelpers.extends({}, I, { colorName: "accent" }),
                    )
                  : c.jsx(
                      r("WDSIconIcCheckCircle.react"),
                      babelHelpers.extends({}, I, { colorName: "accent" }),
                    )),
              (t[17] = a),
              (t[18] = d),
              (t[19] = T))
            : (T = t[19]),
          T
        );
      }
      var D;
      return (
        t[20] !== a || t[21] !== d
          ? ((D =
              a && !d
                ? c.jsx(
                    r("WDSIconIcCancelFilled.react"),
                    babelHelpers.extends({}, I, {
                      colorName: "secondaryNegative",
                    }),
                  )
                : c.jsx(
                    r("WDSIconIcCancel.react"),
                    babelHelpers.extends({}, I, {
                      colorName: "contentDeemphasized",
                    }),
                  )),
            (t[20] = a),
            (t[21] = d),
            (t[22] = D))
          : (D = t[22]),
        D
      );
    }
    function f(t) {
      t == null ||
        t
          .then(function (e) {
            var t = Date.now();
            o("WAWebCmd").Cmd.trigger(
              "show_overlay_animation",
              c.jsx(
                o("WAWebLottieAnimationLoadable").LottieAnimation,
                {
                  autoplay: !0,
                  loop: !1,
                  data: e,
                  wrapperXstyle: p.lottieOverlay,
                },
                t,
              ),
            );
          })
          .catch(function () {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load Lottie animation ",
                  ])),
              )
              .tags("quiz", "lottie");
          });
    }
    l.default = _;
  },
  226,
);
