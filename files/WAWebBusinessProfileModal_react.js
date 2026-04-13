__d(
  "WAWebBusinessProfileModal.react",
  [
    "WAWebModal.react",
    "WAWebRichTextInput.react",
    "WAWebSavePopup.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcSearch.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        iconSearch: {
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          display: "x78zum5",
          height: "x1vqgdyp",
          justifyContent: "xl56j7k",
          width: "x1useyqa",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.afterSave,
        a = e.children,
        i = e.description,
        l = e.doSave,
        c = e.isValid,
        d = e.onCancel,
        m = e.onSearchChange,
        p = e.searchLabel,
        _ = e.title,
        f;
      t[0] !== m
        ? ((f = function (t) {
            var e,
              n = (e = t.text) != null ? e : "";
            m == null || m(n);
          }),
          (t[0] = m),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h = c != null ? c : !0,
        y;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { type: o("WAWebModal.react").ModalTheme.BusinessProfile }),
          (t[2] = y))
        : (y = t[2]);
      var C, b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { surface: "smb-business-profile-edit-categories" }),
          (b = { className: "xvpt6g3 xb0esv5 xyo0t3i" }),
          (t[3] = C),
          (t[4] = b))
        : ((C = t[3]), (b = t[4]));
      var v;
      t[5] !== i
        ? ((v = s.jsx(
            "div",
            babelHelpers.extends({}, b, {
              children: s.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: i,
              }),
            }),
          )),
          (t[5] = i),
          (t[6] = v))
        : (v = t[6]);
      var S;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = {
            className:
              "x6s0dn4 x4wrhlh xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1ua1l7f xyxtwap x7vsco6 x12w63v0 x1nzty39",
          }),
          (t[7] = S))
        : (S = t[7]);
      var R, L;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s.jsx(r("WAWebUnstyledButton.react"), {
            xstyle: u.iconSearch,
            children: s.jsx(r("WDSIconIcSearch.react"), {}),
          })),
          (L = { className: "x1iyjqo2 x16ovd2e x12xbjc7" }),
          (t[8] = R),
          (t[9] = L))
        : ((R = t[8]), (L = t[9]));
      var E;
      t[10] !== g || t[11] !== p
        ? ((E = s.jsxs(
            "div",
            babelHelpers.extends({}, S, {
              children: [
                R,
                s.jsx(
                  "div",
                  babelHelpers.extends({}, L, {
                    children: s.jsx(r("WAWebRichTextInput.react"), {
                      editorName: "business-category-search",
                      lineWrap: !1,
                      placeholder: p,
                      onChange: g,
                    }),
                  }),
                ),
              ],
            }),
          )),
          (t[10] = g),
          (t[11] = p),
          (t[12] = E))
        : (E = t[12]);
      var k;
      return (
        t[13] !== n ||
        t[14] !== a ||
        t[15] !== l ||
        t[16] !== d ||
        t[17] !== E ||
        t[18] !== h ||
        t[19] !== v ||
        t[20] !== _
          ? ((k = s.jsxs(r("WAWebSavePopup.react"), {
              title: _,
              doSave: l,
              isValid: h,
              modalConfig: y,
              onCancel: d,
              afterSave: n,
              tsNavigationData: C,
              children: [v, E, a],
            })),
            (t[13] = n),
            (t[14] = a),
            (t[15] = l),
            (t[16] = d),
            (t[17] = E),
            (t[18] = h),
            (t[19] = v),
            (t[20] = _),
            (t[21] = k))
          : (k = t[21]),
        k
      );
    }
    l.default = c;
  },
  98,
);
