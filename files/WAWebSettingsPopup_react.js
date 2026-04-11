__d(
  "WAWebSettingsPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebRadio.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = { explanation: { marginBottom: "x1c436fg", $$css: !0 } };
    function m(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.explanation,
        r = e.onSelect,
        a = e.options,
        i = c(e.initialValue),
        l = i[0],
        m = i[1],
        _ = p,
        f;
      t[0] !== r || t[1] !== l
        ? ((f = function () {
            l != null && r(l);
          }),
          (t[0] = r),
          (t[1] = l),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            m(t);
          }),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C;
      if (t[4] !== a || t[5] !== l) {
        var b;
        (t[7] !== l
          ? ((b = function (t) {
              var e = t.label,
                n = t.secondaryLabel,
                r = t.testid,
                a = t.value;
              return u.jsx(
                "li",
                {
                  "data-testid": void 0,
                  children: u.jsx(o("WAWebRadio.react").RadioWithLabel, {
                    tabIndex: 0,
                    name: "settings",
                    value: a,
                    label: e,
                    checked: a === l,
                    onChange: function () {
                      return y(a);
                    },
                    secondaryLabel: n,
                    testid: void 0,
                  }),
                },
                "setting-" + a,
              );
            }),
            (t[7] = l),
            (t[8] = b))
          : (b = t[8]),
          (C = a.map(b)),
          (t[4] = a),
          (t[5] = l),
          (t[6] = C));
      } else C = t[6];
      var v = C,
        S;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { surface: "unknown", viewName: "settings" }), (t[9] = S))
        : (S = t[9]);
      var R = e.title,
        L;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Confirm")), (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== n
        ? ((E =
            n != null
              ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  xstyle: d.explanation,
                  children: n,
                })
              : null),
          (t[11] = n),
          (t[12] = E))
        : (E = t[12]);
      var k;
      t[13] !== v
        ? ((k = u.jsx("form", { children: u.jsx("ol", { children: v }) })),
          (t[13] = v),
          (t[14] = k))
        : (k = t[14]);
      var I;
      return (
        t[15] !== g || t[16] !== e.title || t[17] !== E || t[18] !== k
          ? ((I = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: S,
              title: R,
              okText: L,
              onOK: g,
              onCancel: _,
              testid: void 0,
              children: [E, k],
            })),
            (t[15] = g),
            (t[16] = e.title),
            (t[17] = E),
            (t[18] = k),
            (t[19] = I))
          : (I = t[19]),
        I
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = m;
  },
  226,
);
