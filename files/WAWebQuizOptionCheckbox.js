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
      var t = e.animationPromise,
        n = e.checked,
        a = e.count,
        i = e.hideResults,
        l = e.id,
        u = e.isAdminOrOwner,
        d = e.isCorrectOption,
        p = e.msgId,
        f = e.onOptionToggle,
        g = e.option,
        h = e.testid,
        y = g.localId,
        C = g.name,
        b = s._(
          /*BTDS*/ '_j{"*":"{option} {responses} responses","_1":"{option} 1 response"}',
          [s._plural(a, "responses"), s._param("option", C)],
        );
      if (i)
        return c.jsx(o("WAWebCheckBox.react").CheckBox, {
          ariaLabel: b,
          checked: n,
          id: l,
          onChange: function () {
            (d
              ? _(t)
              : o("WAWebCmd").Cmd.trigger("animate_message_bubble", p, m.shake),
              f(y));
          },
          testid: void 0,
          theme: o("WAWebCheckBox.react").CheckboxTheme.POLLS_RECEIVER,
        });
      var v = { width: 24, height: 24 };
      return d
        ? u || n
          ? c.jsx(
              r("WDSIconIcCheckCircleFilled.react"),
              babelHelpers.extends({}, v, { colorName: "accent" }),
            )
          : c.jsx(
              r("WDSIconIcCheckCircle.react"),
              babelHelpers.extends({}, v, { colorName: "accent" }),
            )
        : n && !u
          ? c.jsx(
              r("WDSIconIcCancelFilled.react"),
              babelHelpers.extends({}, v, { colorName: "secondaryNegative" }),
            )
          : c.jsx(
              r("WDSIconIcCancel.react"),
              babelHelpers.extends({}, v, { colorName: "contentDeemphasized" }),
            );
    }
    p.displayName = p.name + " [from " + i.id + "]";
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
