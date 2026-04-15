__d(
  "WAWebNewsletterStatusSelectorDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebNewsletterStatusPostingUtils",
    "WAWebPrivacyVisibilityOption.react",
    "WAWebWidFactory",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.onClose,
        a = e.onNewsletterSelected,
        i = e.selectedNewsletterWid,
        l,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h;
      if (t[0] !== n || t[1] !== a || t[2] !== i) {
        var y = o(
            "WAWebNewsletterStatusPostingUtils",
          ).getStatusPostableNewsletters(),
          C;
        t[12] !== n || t[13] !== a
          ? ((C = function (t) {
              (a(t), n());
            }),
            (t[12] = n),
            (t[13] = a),
            (t[14] = C))
          : (C = t[14]);
        var b = C;
        ((d = r("WAWebDrawer.react")),
          (g = "newsletter-status-selector-drawer"));
        var v;
        (t[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = s._(/*BTDS*/ "Post to channel")), (t[15] = v))
          : (v = t[15]),
          t[16] !== n
            ? ((h = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                testid: void 0,
                title: v,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                focusBackOrCancel: !0,
                onCancel: n,
              })),
              (t[16] = n),
              (t[17] = h))
            : (h = t[17]),
          (c = r("WAWebDrawerBody.react")),
          (l = r("WAWebDrawerSection.react")),
          (_ = "padding-no-vertical"),
          (f = !1),
          (m = "radiogroup"));
        var S;
        (t[18] !== b || t[19] !== i
          ? ((S = function (t) {
              var e,
                n,
                a = o("WAWebWidFactory").asNewsletterWidOrThrow(t.id),
                l =
                  (e = (n = t.newsletterMetadata) == null ? void 0 : n.name) !=
                  null
                    ? e
                    : t.formattedTitle;
              return u.jsx(
                r("WAWebPrivacyVisibilityOption.react"),
                {
                  text: l,
                  selected: a.equals(i),
                  testid: void 0,
                  onClick: function () {
                    return b(a);
                  },
                },
                a.toString(),
              );
            }),
            (t[18] = b),
            (t[19] = i),
            (t[20] = S))
          : (S = t[20]),
          (p = y.map(S)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = c),
          (t[5] = d),
          (t[6] = m),
          (t[7] = p),
          (t[8] = _),
          (t[9] = f),
          (t[10] = g),
          (t[11] = h));
      } else
        ((l = t[3]),
          (c = t[4]),
          (d = t[5]),
          (m = t[6]),
          (p = t[7]),
          (_ = t[8]),
          (f = t[9]),
          (g = t[10]),
          (h = t[11]));
      var R;
      t[21] !== m || t[22] !== p
        ? ((R = u.jsx("div", { role: m, children: p })),
          (t[21] = m),
          (t[22] = p),
          (t[23] = R))
        : (R = t[23]);
      var L;
      t[24] !== l || t[25] !== _ || t[26] !== f || t[27] !== R
        ? ((L = u.jsx(l, { theme: _, animation: f, children: R })),
          (t[24] = l),
          (t[25] = _),
          (t[26] = f),
          (t[27] = R),
          (t[28] = L))
        : (L = t[28]);
      var E;
      t[29] !== c || t[30] !== L
        ? ((E = u.jsx(c, { children: L })),
          (t[29] = c),
          (t[30] = L),
          (t[31] = E))
        : (E = t[31]);
      var k;
      return (
        t[32] !== d || t[33] !== g || t[34] !== h || t[35] !== E
          ? ((k = u.jsxs(d, { testid: void 0, children: [h, E] })),
            (t[32] = d),
            (t[33] = g),
            (t[34] = h),
            (t[35] = E),
            (t[36] = k))
          : (k = t[36]),
        k
      );
    }
    l.default = c;
  },
  226,
);
