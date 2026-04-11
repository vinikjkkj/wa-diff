__d(
  "WAWebLinkDevicePhoneNumberEntryInput.react",
  [
    "fbt",
    "WAWebHybridRegGating",
    "WAWebPhoneNumberInput.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(31),
        a = t.a11yErrorMessage,
        i = t.countryCodeIso,
        l = t.icon,
        u = t.onBlur,
        d = t.onChange,
        g = t.onEnter,
        h = t.onFocus,
        y = t.phoneNumberWithoutCountryPrefix,
        C = t.ref,
        b = t.theme,
        v = t.xstyle,
        S = a.errorMessageDOMId,
        R = a.errorShown,
        L;
      n[0] !== b
        ? ((L =
            b != null
              ? b === "wds"
              : o("WAWebHybridRegGating").isHybridRegEnabled()),
          (n[0] = b),
          (n[1] = L))
        : (L = n[1]);
      var E = L,
        k = _(!1),
        I = k[0],
        T = k[1],
        D = p(null),
        x;
      (n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            return {
              focus: function () {
                var e;
                (e = D.current) == null || e.focus();
              },
            };
          }),
          (n[2] = x))
        : (x = n[2]),
        m(C, x));
      var $, P;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { className: "x1n2onr6 xy9n6vp x1ed109x" }),
          (P = function () {
            var e;
            (e = D.current) == null || e.focus();
          }),
          (n[3] = $),
          (n[4] = P))
        : (($ = n[3]), (P = n[4]));
      var N;
      n[5] !== I || n[6] !== E || n[7] !== v
        ? ((N = (e || (e = r("stylex"))).props(
            E ? f.inputWrapperWds : f.inputWrapper,
            I && !E && f.inputWrapperFocused,
            v,
          )),
          (n[5] = I),
          (n[6] = E),
          (n[7] = v),
          (n[8] = N))
        : (N = n[8]);
      var M = E ? "wds" : "default",
        w;
      n[9] !== u
        ? ((w = function () {
            (T(!1), u == null || u());
          }),
          (n[9] = u),
          (n[10] = w))
        : (w = n[10]);
      var A;
      n[11] !== h
        ? ((A = function () {
            (T(!0), h == null || h());
          }),
          (n[11] = h),
          (n[12] = A))
        : (A = n[12]);
      var F;
      n[13] !== E
        ? ((F = E
            ? s._(/*BTDS*/ "Phone number")
            : s._(/*BTDS*/ "Type your phone number to log in to WhatsApp")),
          (n[13] = E),
          (n[14] = F))
        : (F = n[14]);
      var O;
      n[15] !== a.errorMessage ||
      n[16] !== i ||
      n[17] !== S ||
      n[18] !== R ||
      n[19] !== l ||
      n[20] !== d ||
      n[21] !== g ||
      n[22] !== y ||
      n[23] !== M ||
      n[24] !== w ||
      n[25] !== A ||
      n[26] !== F
        ? ((O = c.jsx(r("WAWebPhoneNumberInput.react"), {
            theme: M,
            countryCodeIso: i,
            errorMessageDOMId: S,
            errorShown: R,
            errorMessage: a.errorMessage,
            icon: l,
            onBlur: w,
            onFocus: A,
            onChange: d,
            onEnter: g,
            phoneNumberWithoutCountryPrefix: y,
            ref: D,
            ariaLabel: F,
          })),
          (n[15] = a.errorMessage),
          (n[16] = i),
          (n[17] = S),
          (n[18] = R),
          (n[19] = l),
          (n[20] = d),
          (n[21] = g),
          (n[22] = y),
          (n[23] = M),
          (n[24] = w),
          (n[25] = A),
          (n[26] = F),
          (n[27] = O))
        : (O = n[27]);
      var B;
      return (
        n[28] !== O || n[29] !== N
          ? ((B = c.jsx(
              "div",
              babelHelpers.extends({}, $, {
                onClick: P,
                dir: "ltr",
                children: c.jsx(
                  "div",
                  babelHelpers.extends({}, N, { children: O }),
                ),
              }),
            )),
            (n[28] = O),
            (n[29] = N),
            (n[30] = B))
          : (B = n[30]),
        B
      );
    }
    l.default = g;
  },
  226,
);
