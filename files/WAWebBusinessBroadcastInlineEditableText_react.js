__d(
  "WAWebBusinessBroadcastInlineEditableText.react",
  ["WAWebUnstyledButton.react", "WDSText.react", "react", "stylex"],
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
      var n = t.disabled,
        o = t.displayText,
        a = t.inputTestId,
        i = t.inputXstyle,
        l = t.maxLength,
        s = t.measureXstyle,
        c = t.onSave,
        v = t.ref,
        S = t.value,
        R = f(!1),
        L = R[0],
        E = R[1],
        k = f(S),
        I = k[0],
        T = k[1],
        D = f(!1),
        x = D[0],
        $ = D[1],
        P = f(g),
        N = P[0],
        M = P[1],
        w = _(null),
        A = _(null),
        F = f(S),
        O = F[0],
        B = F[1];
      S !== O && (B(S), T(S), E(!1));
      var W = d(function () {
        if (w.current != null) {
          var e = w.current.offsetWidth + y;
          M(Math.max(g, Math.min(e, h)));
        }
      }, []);
      m(
        function () {
          if (L) {
            var e, t;
            (W(),
              (e = A.current) == null || e.focus(),
              (t = A.current) == null || t.select());
          }
        },
        [L, W],
      );
      var q = d(
          function (e) {
            (T(e.target.value), window.requestAnimationFrame(W));
          },
          [W],
        ),
        U = d(
          function () {
            (T(S), E(!0));
          },
          [S],
        );
      p(
        v,
        function () {
          return { startEdit: U };
        },
        [U],
      );
      var V = d(
          function () {
            var e = I.trim();
            if (e === "" || e === S) {
              E(!1);
              return;
            }
            $(!0);
            var t = c(e);
            t != null
              ? t.finally(function () {
                  ($(!1), E(!1));
                })
              : ($(!1), E(!1));
          },
          [I, S, c],
        ),
        H = d(
          function (e) {
            e.key === "Enter"
              ? (e.preventDefault(), V())
              : e.key === "Escape" && (e.preventDefault(), E(!1));
          },
          [V],
        );
      return L
        ? u.jsxs(u.Fragment, {
            children: [
              u.jsx("span", {
                ref: w,
                className: (e || (e = r("stylex")))(b.measureSpan, s),
                "aria-hidden": "true",
                children: I,
              }),
              u.jsx("input", {
                ref: A,
                type: "text",
                className: e(b.editInput, i),
                style: { width: N },
                value: I,
                onChange: q,
                onBlur: V,
                onKeyDown: H,
                maxLength: l != null ? l : C,
                disabled: x,
                "data-testid": void 0,
              }),
            ],
          })
        : u.jsx(r("WAWebUnstyledButton.react"), {
            disabled: n,
            onClick: U,
            xstyle: b.clickableText,
            children: u.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              maxLines: 1,
              children: o != null ? o : S,
            }),
          });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
