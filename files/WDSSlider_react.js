__d(
  "WDSSlider.react",
  [
    "BaseRangeSlider.react",
    "BaseSliderInput.react",
    "BaseSliderInputWDSVariants",
    "WDSText.react",
    "react",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "ariaValueText",
        "disabled",
        "displayValueText",
        "max",
        "min",
        "onChange",
        "onChangeSettled",
        "startEndLabels",
        "step",
        "testid",
        "values",
      ],
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        container: {
          alignItems: "x6s0dn4",
          justifyContent: "x1qughib",
          display: "x78zum5",
          width: "xh8yej3",
          rowGap: "x129bwdz",
          columnGap: "x1trrmfo",
          $$css: !0,
        },
        slider: { flexGrow: "x1iyjqo2", $$css: !0 },
        valueLabel: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          paddingLeft: null,
          paddingRight: null,
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      };
    function m(e) {
      return e.toString();
    }
    function p(t) {
      var n = t.ariaValueText,
        a = n === void 0 ? m : n,
        i = t.disabled,
        l = i === void 0 ? !1 : i,
        s = t.displayValueText,
        p = s === void 0 ? m : s,
        _ = t.max,
        f = _ === void 0 ? 100 : _,
        g = t.min,
        h = g === void 0 ? 0 : g,
        y = t.onChange,
        C = t.onChangeSettled,
        b = t.startEndLabels,
        v = b === void 0 ? "none" : b,
        S = t.step,
        R = S === void 0 ? 1 : S,
        L = t.testid,
        E = t.values,
        k = babelHelpers.objectWithoutPropertiesLoose(t, e),
        I = function (t) {
          return u.jsx("span", {
            "aria-hidden": !0,
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: l ? "contentDisabled" : "contentDefault",
              xstyle: d.valueLabel,
              children: p(t),
            }),
          });
        },
        T = function () {
          return v === "minMax"
            ? [h, f]
            : v === "currentValues"
              ? E.length === 2
                ? [E[0], E[1]]
                : null
              : v === "none"
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        v,
                    );
                  })();
        },
        D = T(),
        x = c(null);
      return u.jsxs(o("react-strict-dom").html.div, {
        "data-testid": void 0,
        ref: x,
        style: d.container,
        children: [
          D ? I(D[0]) : null,
          u.jsx(o("react-strict-dom").html.div, {
            style: d.slider,
            children:
              E.length === 1
                ? u.jsx(
                    r("BaseSliderInput.react"),
                    babelHelpers.extends({}, k, {
                      "aria-valuemin": h,
                      "aria-valuemax": f,
                      "aria-valuenow": E[0],
                      "aria-valuetext": a(E[0]),
                      disabled: l,
                      max: f,
                      min: h,
                      onChange: function (t) {
                        var e = Number(t.target.value);
                        y == null || y([e]);
                      },
                      onValue: function (t) {
                        C == null || C([t]);
                      },
                      step: R,
                      value: E[0],
                      variant: o("BaseSliderInputWDSVariants")
                        .BaseSliderInputWDSVariant,
                    }),
                  )
                : u.jsx(r("BaseRangeSlider.react"), {
                    "aria-label": [
                      k == null ? void 0 : k["aria-label"],
                      k == null ? void 0 : k["aria-label"],
                    ],
                    "aria-labelledby": [
                      k == null ? void 0 : k["aria-labelledby"],
                      k == null ? void 0 : k["aria-labelledby"],
                    ],
                    disabled: l,
                    max: f,
                    min: h,
                    onChange: function (t) {
                      var e,
                        n =
                          ((e = x.current) == null
                            ? void 0
                            : e.querySelectorAll("input")[0]) === t.target;
                      n
                        ? y == null || y([Number(t.target.value), E[1]])
                        : y == null || y([E[0], Number(t.target.value)]);
                    },
                    onValue: function (t) {
                      C == null || C(t);
                    },
                    step: R,
                    value: [E[0], E[1]],
                    variant: o("BaseSliderInputWDSVariants")
                      .BaseSliderInputWDSVariant,
                  }),
          }),
          D ? I(D[1]) : null,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
