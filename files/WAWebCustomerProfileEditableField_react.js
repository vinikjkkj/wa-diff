__d(
  "WAWebCustomerProfileEditableField.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebUimUie.react",
    "WDSButton.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        row: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        editButtonContainer: {
          marginInlineStart: "xvc5jky",
          opacity: "xg01cxk",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        editButtonVisible: { opacity: "x1hc1fzr", $$css: !0 },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
        editFieldRow: { alignItems: "x6s0dn4", $$css: !0 },
        fieldContainer: {
          flexGrow: "x1iyjqo2",
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        editActions: {
          columnGap: "x1trrmfo",
          marginTop: "x1380le5",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(63),
        n = e.icon,
        a = e.label,
        i = e.onSave,
        l = e.placeholder,
        c = e.value,
        d = _(!1),
        g = d[0],
        h = d[1],
        y = _(!1),
        C = y[0],
        b = y[1],
        v = _(c),
        S = v[0],
        R = v[1],
        L = p(null),
        E,
        k;
      (t[0] !== g
        ? ((E = function () {
            if (g) {
              var e;
              (e = L.current) == null || e.focus();
            }
          }),
          (k = [g]),
          (t[0] = g),
          (t[1] = E),
          (t[2] = k))
        : ((E = t[1]), (k = t[2])),
        m(E, k));
      var I;
      t[3] !== c
        ? ((I = function () {
            (R(c), h(!0));
          }),
          (t[3] = c),
          (t[4] = I))
        : (I = t[4]);
      var T = I,
        D;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            b(!0);
          }),
          (t[5] = D))
        : (D = t[5]);
      var x = D,
        $;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            b(!1);
          }),
          (t[6] = $))
        : ($ = t[6]);
      var P = $,
        N;
      t[7] !== S || t[8] !== i || t[9] !== c
        ? ((N = function () {
            var e = S.trim();
            (e !== c && i(e), h(!1));
          }),
          (t[7] = S),
          (t[8] = i),
          (t[9] = c),
          (t[10] = N))
        : (N = t[10]);
      var M = N,
        w;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            h(!1);
          }),
          (t[11] = w))
        : (w = t[11]);
      var A = w,
        F;
      t[12] !== M
        ? ((F = function (t) {
            t.key === "Enter"
              ? (t.preventDefault(), M())
              : t.key === "Escape" && (t.stopPropagation(), A());
          }),
          (t[12] = M),
          (t[13] = F))
        : (F = t[13]);
      var O = F,
        B;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function () {
            A();
          }),
          (t[14] = B))
        : (B = t[14]);
      var W = B;
      if (g) {
        var q;
        t[15] !== n
          ? ((q = u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              xstyle: f.iconContainer,
              children: n,
            })),
            (t[15] = n),
            (t[16] = q))
          : (q = t[16]);
        var U, V;
        t[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = {
              className:
                "xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xdj266r x14z9mp xat24cr x1lziwak x16ovd2e x12xbjc7 x1iw51ew xde1mab xh8yej3",
            }),
            (V = { className: "xhslqc4 x1pg5gke x181vq82 x1uc92m" }),
            (t[17] = U),
            (t[18] = V))
          : ((U = t[17]), (V = t[18]));
        var H;
        t[19] !== a
          ? ((H = u.jsx(
              "legend",
              babelHelpers.extends({}, V, { children: a }),
            )),
            (t[19] = a),
            (t[20] = H))
          : (H = t[20]);
        var G;
        t[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = {
              className:
                "x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by x14ug900 xjb2p0i x1qlqyl8 x15bjb6t x1a2a7pz xexx8yu x18d9i69 x1c1uobl xyri2b xh8yej3",
            }),
            (t[21] = G))
          : (G = t[21]);
        var z = l != null ? String(l) : void 0,
          j;
        t[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = function (t) {
              return R(t.target.value);
            }),
            (t[22] = j))
          : (j = t[22]);
        var K;
        t[23] !== S || t[24] !== O || t[25] !== z
          ? ((K = u.jsx(
              "input",
              babelHelpers.extends({}, G, {
                ref: L,
                value: S,
                placeholder: z,
                onChange: j,
                onKeyDown: O,
              }),
            )),
            (t[23] = S),
            (t[24] = O),
            (t[25] = z),
            (t[26] = K))
          : (K = t[26]);
        var Q;
        t[27] !== H || t[28] !== K
          ? ((Q = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: f.fieldContainer,
              children: u.jsxs(
                "fieldset",
                babelHelpers.extends({}, U, { children: [H, K] }),
              ),
            })),
            (t[27] = H),
            (t[28] = K),
            (t[29] = Q))
          : (Q = t[29]);
        var X;
        t[30] !== q || t[31] !== Q
          ? ((X = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: f.editFieldRow,
              gap: 12,
              children: [q, Q],
            })),
            (t[30] = q),
            (t[31] = Q),
            (t[32] = X))
          : (X = t[32]);
        var Y;
        t[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = u.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcClose.react"),
              size: "small",
              variant: "tonal",
              onPress: A,
              "aria-label": s._(/*BTDS*/ "Cancel"),
            })),
            (t[33] = Y))
          : (Y = t[33]);
        var J;
        t[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = s._(/*BTDS*/ "Confirm")), (t[34] = J))
          : (J = t[34]);
        var Z;
        t[35] !== M
          ? ((Z = u.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "end",
              xstyle: f.editActions,
              children: [
                Y,
                u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcCheck.react"),
                  size: "small",
                  variant: "filled",
                  onPress: M,
                  "aria-label": J,
                }),
              ],
            })),
            (t[35] = M),
            (t[36] = Z))
          : (Z = t[36]);
        var ee;
        return (
          t[37] !== X || t[38] !== Z
            ? ((ee = u.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "EditableFieldEdit",
                escapable: !0,
                requestDismiss: W,
                children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "stretch",
                  xstyle: f.row,
                  children: [X, Z],
                }),
              })),
              (t[37] = X),
              (t[38] = Z),
              (t[39] = ee))
            : (ee = t[39]),
          ee
        );
      }
      var te;
      t[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = {
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n",
          }),
          (t[40] = te))
        : (te = t[40]);
      var ne;
      t[41] !== n
        ? ((ne = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: f.iconContainer,
            children: n,
          })),
          (t[41] = n),
          (t[42] = ne))
        : (ne = t[42]);
      var re;
      t[43] !== a || t[44] !== l || t[45] !== c
        ? ((re = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: f.fieldContainer,
            children:
              c !== ""
                ? u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(r("WDSText.react"), {
                        type: "Body3",
                        colorName: "contentDeemphasized",
                        children: a,
                      }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        maxLines: 1,
                        children: c,
                      }),
                    ],
                  })
                : u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    maxLines: 1,
                    children: l != null ? l : "",
                  }),
          })),
          (t[43] = a),
          (t[44] = l),
          (t[45] = c),
          (t[46] = re))
        : (re = t[46]);
      var oe = C && f.editButtonVisible,
        ae;
      t[47] !== oe
        ? ((ae = [f.editButtonContainer, oe]), (t[47] = oe), (t[48] = ae))
        : (ae = t[48]);
      var ie;
      t[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = {
            className:
              "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
          }),
          (t[49] = ie))
        : (ie = t[49]);
      var le;
      t[50] !== a
        ? ((le = s._(/*BTDS*/ "Edit {fieldLabel}", [
            s._param("fieldLabel", a),
          ])),
          (t[50] = a),
          (t[51] = le))
        : (le = t[51]);
      var se;
      t[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = u.jsx(r("WDSIconIcEdit.react"), { width: 20, height: 20 })),
          (t[52] = se))
        : (se = t[52]);
      var ue;
      t[53] !== T || t[54] !== le
        ? ((ue = u.jsx(
            "button",
            babelHelpers.extends({}, ie, {
              onClick: T,
              "aria-label": le,
              children: se,
            }),
          )),
          (t[53] = T),
          (t[54] = le),
          (t[55] = ue))
        : (ue = t[55]);
      var ce;
      t[56] !== ae || t[57] !== ue
        ? ((ce = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: ae,
            children: ue,
          })),
          (t[56] = ae),
          (t[57] = ue),
          (t[58] = ce))
        : (ce = t[58]);
      var de;
      return (
        t[59] !== ne || t[60] !== re || t[61] !== ce
          ? ((de = u.jsx(
              "div",
              babelHelpers.extends(
                { role: "group", onMouseEnter: x, onMouseLeave: P },
                te,
                {
                  children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    gap: 12,
                    xstyle: f.row,
                    children: [ne, re, ce],
                  }),
                },
              ),
            )),
            (t[59] = ne),
            (t[60] = re),
            (t[61] = ce),
            (t[62] = de))
          : (de = t[62]),
        de
      );
    }
    l.default = g;
  },
  226,
);
