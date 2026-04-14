__d(
  "WAWebLinkDevicePhoneNumberEntryInput.react",
  [
    "fbt",
    "WAWebHybridRegGating",
    "WAWebPhoneNumberInput.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useRef,
      _ = d.useState,
      f = {
        inputWrapperWds: { height: "x1vqgdyp", $$css: !0 },
        inputWrapper: {
          position: "x1n2onr6",
          paddingTop: "xqv4dci",
          paddingBottom: "x1aazizy",
          paddingLeft: "xd3ty66",
          paddingRight: "xcicffo",
          minWidth: "x1vktgvc",
          height: "x1qx5ct2",
          backgroundColor: "xk7ee7b",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          $$css: !0,
        },
        inputWrapperFocused: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          $$css: !0,
        },
      };
    function g(t) {
      var n = t.a11yErrorMessage,
        a = t.countryCodeIso,
        i = t.icon,
        l = t.onBlur,
        u = t.onChange,
        d = t.onEnter,
        g = t.onFocus,
        h = t.phoneNumberWithoutCountryPrefix,
        y = t.ref,
        C = t.theme,
        b = t.xstyle,
        v = n.errorMessageDOMId,
        S = n.errorShown,
        R =
          C != null
            ? C === "wds"
            : o("WAWebHybridRegGating").isHybridRegEnabled(),
        L = _(!1),
        E = L[0],
        k = L[1],
        I = p(null);
      return (
        m(y, function () {
          return {
            focus: function () {
              var e;
              (e = I.current) == null || e.focus();
            },
          };
        }),
        c.jsx("div", {
          className: "x1n2onr6 xy9n6vp x1ed109x",
          onClick: function () {
            var e;
            (e = I.current) == null || e.focus();
          },
          dir: "ltr",
          children: c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                R ? f.inputWrapperWds : f.inputWrapper,
                E && !R && f.inputWrapperFocused,
                b,
              ),
              {
                children: c.jsx(r("WAWebPhoneNumberInput.react"), {
                  theme: R ? "wds" : "default",
                  countryCodeIso: a,
                  errorMessageDOMId: v,
                  errorShown: S,
                  errorMessage: n.errorMessage,
                  icon: i,
                  onBlur: function () {
                    (k(!1), l == null || l());
                  },
                  onFocus: function () {
                    (k(!0), g == null || g());
                  },
                  onChange: u,
                  onEnter: d,
                  phoneNumberWithoutCountryPrefix: h,
                  ref: I,
                  ariaLabel: R
                    ? s._(/*BTDS*/ "Phone number")
                    : s._(
                        /*BTDS*/ "Type your phone number to log in to WhatsApp",
                      ),
                }),
              },
            ),
          ),
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
