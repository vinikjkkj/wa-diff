__d(
  "WAWebServiceAreaRadiusDropdown.react",
  [
    "WAWebBusinessProfileTextField.react",
    "WAWebFlex.react",
    "WAWebServiceAreaRadiusConstants",
    "WDSIconIcArrowDropDown.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebOnOutsideClick",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = u.useState,
      p =
        "calc(" +
        o("WDSVars.stylex").WDSVars.spacingTriple +
        " + " +
        o("WDSVars.stylex").WDSVars.spacingSingle +
        " * 2 + 12px + " +
        o("WDSVars.stylex").WDSVars.spacingSingle +
        ")",
      _ = {
        menuContainer: {
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          boxShadow: "x1sr759z",
          color: "x14ug900",
          insetInlineStart: "xxb5yu8",
          left: null,
          right: null,
          marginTop: "x1wgys3m",
          maxHeight: "xuyqlj2",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          position: "x10l6tqk",
          top: "xdsb8wn",
          width: "x116kdbm",
          zIndex: "xfo81ep",
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.fieldName,
        a = e.icon,
        i = e.label,
        l = e.onChange,
        u = e.value,
        c = e.xstyle,
        p = n === void 0 ? "serviceAreaRadius" : n,
        f = d(null),
        h = m(!1),
        y = h[0],
        C = h[1],
        b = Number(u) || 0,
        v;
      t[0] !== b
        ? ((v = o("WAWebServiceAreaRadiusConstants").radiusMetersToOptionValue(
            b,
          )),
          (t[0] = b),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R = o("WAWebServiceAreaRadiusConstants").getServiceAreaRadiusOptions(),
        L;
      t[2] !== S
        ? ((L = function (t) {
            return t.value === S;
          }),
          (t[2] = S),
          (t[3] = L))
        : (L = t[3]);
      var E = R.find(L),
        k = E != null ? E.label() : R[0].label(),
        I;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            C(!1);
          }),
          (t[4] = I))
        : (I = t[4]);
      var T = I;
      o("useWAWebOnOutsideClick").useOnOutsideClick(f, T);
      var D;
      t[5] !== p || t[6] !== l
        ? ((D = function (t) {
            (l != null && l(p, String(t)), C(!1));
          }),
          (t[5] = p),
          (t[6] = l),
          (t[7] = D))
        : (D = t[7]);
      var x = D,
        $;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            C(g);
          }),
          (t[8] = $))
        : ($ = t[8]);
      var P = $,
        N;
      t[9] !== P
        ? ((N = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), P());
          }),
          (t[9] = P),
          (t[10] = N))
        : (N = t[10]);
      var M = N,
        w;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "x1ypdohk x1n2onr6 xh8yej3" }), (t[11] = w))
        : (w = t[11]);
      var A = "button",
        F = 0,
        O = String(k),
        B;
      t[12] !== p || t[13] !== a || t[14] !== i || t[15] !== O || t[16] !== c
        ? ((B = s.jsx(r("WAWebBusinessProfileTextField.react"), {
            EndIcon: r("WDSIconIcArrowDropDown.react"),
            editable: !0,
            fieldName: p,
            icon: a,
            label: i,
            readOnly: !0,
            value: O,
            xstyle: c,
          })),
          (t[12] = p),
          (t[13] = a),
          (t[14] = i),
          (t[15] = O),
          (t[16] = c),
          (t[17] = B))
        : (B = t[17]);
      var W =
          y &&
          s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: _.menuContainer,
            children: s.jsx(r("WDSMenu.react"), {
              useMaxWidth: !1,
              children: R.map(function (e) {
                return s.jsx(
                  r("WDSMenuItem.react"),
                  {
                    isToggleable: !0,
                    onPress: function () {
                      return x(e.value);
                    },
                    title: e.label(),
                    toggled: e.value === S,
                  },
                  e.value,
                );
              }),
            }),
          }),
        q;
      return (
        t[18] !== P || t[19] !== M || t[20] !== B || t[21] !== W || t[22] !== w
          ? ((q = s.jsxs(
              "div",
              babelHelpers.extends({}, w, {
                onClick: P,
                onKeyDown: M,
                ref: f,
                role: A,
                tabIndex: F,
                children: [B, W],
              }),
            )),
            (t[18] = P),
            (t[19] = M),
            (t[20] = B),
            (t[21] = W),
            (t[22] = w),
            (t[23] = q))
          : (q = t[23]),
        q
      );
    }
    function g(e) {
      return !e;
    }
    l.default = f;
  },
  98,
);
