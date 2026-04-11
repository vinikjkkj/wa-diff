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
      m = {
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
    function p(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.animationPromise,
        a = e.checked,
        i = e.count,
        l = e.hideResults,
        u = e.id,
        d = e.isAdminOrOwner,
        p = e.isCorrectOption,
        f = e.msgId,
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
        t[3] !== n || t[4] !== p || t[5] !== C || t[6] !== f || t[7] !== g
          ? ((R = function () {
              (p
                ? _(n)
                : o("WAWebCmd").Cmd.trigger(
                    "animate_message_bubble",
                    f,
                    m.shake,
                  ),
                g(C));
            }),
            (t[3] = n),
            (t[4] = p),
            (t[5] = C),
            (t[6] = f),
            (t[7] = g),
            (t[8] = R))
          : (R = t[8]);
        var L;
        return (
          t[9] !== a || t[10] !== u || t[11] !== S || t[12] !== R || t[13] !== y
            ? ((L = c.jsx(o("WAWebCheckBox.react").CheckBox, {
                ariaLabel: S,
                checked: a,
                id: u,
                onChange: R,
                testid: void 0,
                theme: o("WAWebCheckBox.react").CheckboxTheme.POLLS_RECEIVER,
              })),
              (t[9] = a),
              (t[10] = u),
              (t[11] = S),
              (t[12] = R),
              (t[13] = y),
              (t[14] = L))
            : (L = t[14]),
          L
        );
      }
      var E;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { width: 24, height: 24 }), (t[15] = E))
        : (E = t[15]);
      var k = E;
      if (p) {
        var I;
        return (
          t[16] !== a || t[17] !== d
            ? ((I =
                d || a
                  ? c.jsx(
                      r("WDSIconIcCheckCircleFilled.react"),
                      babelHelpers.extends({}, k, { colorName: "accent" }),
                    )
                  : c.jsx(
                      r("WDSIconIcCheckCircle.react"),
                      babelHelpers.extends({}, k, { colorName: "accent" }),
                    )),
              (t[16] = a),
              (t[17] = d),
              (t[18] = I))
            : (I = t[18]),
          I
        );
      }
      var T;
      return (
        t[19] !== a || t[20] !== d
          ? ((T =
              a && !d
                ? c.jsx(
                    r("WDSIconIcCancelFilled.react"),
                    babelHelpers.extends({}, k, {
                      colorName: "secondaryNegative",
                    }),
                  )
                : c.jsx(
                    r("WDSIconIcCancel.react"),
                    babelHelpers.extends({}, k, {
                      colorName: "contentDeemphasized",
                    }),
                  )),
            (t[19] = a),
            (t[20] = d),
            (t[21] = T))
          : (T = t[21]),
        T
      );
    }
    function _(t) {
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
                  wrapperXstyle: m.lottieOverlay,
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
    l.default = p;
  },
  226,
);
