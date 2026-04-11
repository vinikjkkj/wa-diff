__d(
  "WAWebBusinessBroadcastInlineEditableText.react",
  [
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useImperativeHandle,
      _ = c.useRef,
      f = c.useState,
      g = 100,
      h = 392,
      y = 32,
      C = 100,
      b = {
        clickableText: {
          backgroundColor: "xjbqb8w x1ubxc9n",
          borderTopColor: "x1v8p93f x1j88qlk",
          borderInlineEndColor: "x1o3jo1z xmly02p",
          borderBottomColor: "x16stqrj x36lclb",
          borderInlineStartColor: "xv5lvn5 xzyl2ln",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "xamhcws",
          borderInlineEndWidth: "x1alpsbp",
          borderBottomWidth: "xlxy82",
          borderInlineStartWidth: "xyumdvf",
          boxSizing: "x9f619",
          cursor: "x1ypdohk",
          display: "x1rg5ohu",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          textAlign: "x2b8uid",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        editInput: {
          background: "x1qzfwts",
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "xamhcws",
          borderInlineEndWidth: "x1alpsbp",
          borderBottomWidth: "xlxy82",
          borderInlineStartWidth: "xyumdvf",
          boxSizing: "x9f619",
          caretColor: "xvvix3y",
          color: "x14ug900",
          lineHeight: "xladpa3",
          maxWidth: "xx0sbmz",
          minWidth: "xktpd3l",
          outline: "x1a2a7pz",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        measureSpan: {
          insetInlineStart: "x1u580b9",
          position: "x10l6tqk",
          top: "x1agkon0",
          visibility: "xlshs6z",
          whiteSpace: "x1sdyfia",
          $$css: !0,
        },
      };
    function v(t) {
      var n = o("react-compiler-runtime").c(43),
        a = t.disabled,
        i = t.displayText,
        l = t.inputTestId,
        s = t.inputXstyle,
        c = t.maxLength,
        d = t.measureXstyle,
        v = t.onSave,
        S = t.ref,
        R = t.value,
        L = f(!1),
        E = L[0],
        k = L[1],
        I = f(R),
        T = I[0],
        D = I[1],
        x = f(!1),
        $ = x[0],
        P = x[1],
        N = f(g),
        M = N[0],
        w = N[1],
        A = _(null),
        F = _(null),
        O = f(R),
        B = O[0],
        W = O[1];
      R !== B && (W(R), D(R), k(!1));
      var q;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function () {
            if (A.current != null) {
              var e = A.current.offsetWidth + y;
              w(Math.max(g, Math.min(e, h)));
            }
          }),
          (n[0] = q))
        : (q = n[0]);
      var U = q,
        V,
        H;
      (n[1] !== E
        ? ((V = function () {
            if (E) {
              var e, t;
              (U(),
                (e = F.current) == null || e.focus(),
                (t = F.current) == null || t.select());
            }
          }),
          (H = [E, U]),
          (n[1] = E),
          (n[2] = V),
          (n[3] = H))
        : ((V = n[2]), (H = n[3])),
        m(V, H));
      var G;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function (t) {
            (D(t.target.value), window.requestAnimationFrame(U));
          }),
          (n[4] = G))
        : (G = n[4]);
      var z = G,
        j;
      n[5] !== R
        ? ((j = function () {
            (D(R), k(!0));
          }),
          (n[5] = R),
          (n[6] = j))
        : (j = n[6]);
      var K = j,
        Q,
        X;
      (n[7] !== K
        ? ((Q = function () {
            return { startEdit: K };
          }),
          (X = [K]),
          (n[7] = K),
          (n[8] = Q),
          (n[9] = X))
        : ((Q = n[8]), (X = n[9])),
        p(S, Q, X));
      var Y;
      n[10] !== T || n[11] !== v || n[12] !== R
        ? ((Y = function () {
            var e = T.trim();
            if (e === "" || e === R) {
              k(!1);
              return;
            }
            P(!0);
            var t = v(e);
            t != null
              ? t.finally(function () {
                  (P(!1), k(!1));
                })
              : (P(!1), k(!1));
          }),
          (n[10] = T),
          (n[11] = v),
          (n[12] = R),
          (n[13] = Y))
        : (Y = n[13]);
      var J = Y,
        Z;
      n[14] !== J
        ? ((Z = function (t) {
            t.key === "Enter"
              ? (t.preventDefault(), J())
              : t.key === "Escape" && (t.preventDefault(), k(!1));
          }),
          (n[14] = J),
          (n[15] = Z))
        : (Z = n[15]);
      var ee = Z;
      if (E) {
        var te;
        n[16] !== d
          ? ((te = (e || (e = r("stylex")))(b.measureSpan, d)),
            (n[16] = d),
            (n[17] = te))
          : (te = n[17]);
        var ne;
        n[18] !== T || n[19] !== te
          ? ((ne = u.jsx("span", {
              ref: A,
              className: te,
              "aria-hidden": "true",
              children: T,
            })),
            (n[18] = T),
            (n[19] = te),
            (n[20] = ne))
          : (ne = n[20]);
        var re;
        n[21] !== s
          ? ((re = (e || (e = r("stylex")))(b.editInput, s)),
            (n[21] = s),
            (n[22] = re))
          : (re = n[22]);
        var oe;
        n[23] !== M
          ? ((oe = { width: M }), (n[23] = M), (n[24] = oe))
          : (oe = n[24]);
        var ae = c != null ? c : C,
          ie;
        n[25] !== T ||
        n[26] !== ee ||
        n[27] !== J ||
        n[28] !== l ||
        n[29] !== $ ||
        n[30] !== re ||
        n[31] !== oe ||
        n[32] !== ae
          ? ((ie = u.jsx("input", {
              ref: F,
              type: "text",
              className: re,
              style: oe,
              value: T,
              onChange: z,
              onBlur: J,
              onKeyDown: ee,
              maxLength: ae,
              disabled: $,
              "data-testid": void 0,
            })),
            (n[25] = T),
            (n[26] = ee),
            (n[27] = J),
            (n[28] = l),
            (n[29] = $),
            (n[30] = re),
            (n[31] = oe),
            (n[32] = ae),
            (n[33] = ie))
          : (ie = n[33]);
        var le;
        return (
          n[34] !== ne || n[35] !== ie
            ? ((le = u.jsxs(u.Fragment, { children: [ne, ie] })),
              (n[34] = ne),
              (n[35] = ie),
              (n[36] = le))
            : (le = n[36]),
          le
        );
      }
      var se = i != null ? i : R,
        ue;
      n[37] !== se
        ? ((ue = u.jsx(r("WDSText.react"), {
            type: "Headline2",
            colorName: "contentDefault",
            maxLines: 1,
            children: se,
          })),
          (n[37] = se),
          (n[38] = ue))
        : (ue = n[38]);
      var ce;
      return (
        n[39] !== a || n[40] !== K || n[41] !== ue
          ? ((ce = u.jsx(r("WAWebUnstyledButton.react"), {
              disabled: a,
              onClick: K,
              xstyle: b.clickableText,
              children: ue,
            })),
            (n[39] = a),
            (n[40] = K),
            (n[41] = ue),
            (n[42] = ce))
          : (ce = n[42]),
        ce
      );
    }
    l.default = v;
  },
  98,
);
