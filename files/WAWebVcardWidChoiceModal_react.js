__d(
  "WAWebVcardWidChoiceModal.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerItem.react",
    "WAWebModal.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebVcardUtils",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = { container: { backgroundColor: "x1280gxy", $$css: !0 } };
    function p(t) {
      var n = o("react-compiler-runtime").c(24),
        a = t.onSelect,
        i = t.vcard,
        l;
      n[0] !== a
        ? ((l = function (t) {
            a(t);
          }),
          (n[0] = a),
          (n[1] = l))
        : (l = n[1]);
      var u = l,
        d;
      n[2] !== u
        ? ((d = function (t, n) {
            (t.stopPropagation(), u(n));
          }),
          (n[2] = u),
          (n[3] = d))
        : (d = n[3]);
      var p = d,
        f;
      if (n[4] !== i.TEL) {
        var g;
        ((f = (g = i.TEL) != null ? g : []), (n[4] = i.TEL), (n[5] = f));
      } else f = n[5];
      var h;
      if (n[6] !== p || n[7] !== u || n[8] !== t.icon || n[9] !== f) {
        var y = f.filter(_),
          C;
        (n[11] !== p || n[12] !== u || n[13] !== t.icon
          ? ((C = function (a) {
              var n = o("WAWebWidFactory").createUserWidOrThrow(
                  a.properties.waid[0],
                ),
                i = t.icon;
              return (
                i &&
                  (i = c.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: function (t) {
                      p(t, n);
                    },
                    children: i,
                  })),
                c.createElement(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      m.container,
                      o("WAWebUISpacing").uiMargin.bottom10,
                      o("WAWebUISpacing").uiPadding.vert0,
                      o("WAWebUISpacing").uiPadding.horiz14,
                    ),
                    { key: "vCard-" + a.value },
                  ),
                  c.jsx(r("WAWebDrawerItem.react"), {
                    title: o("WAWebWidFormat").widToFormattedUser(n),
                    onClick: function () {
                      return u(n);
                    },
                    isLastItem: !0,
                    icon: i,
                    children: o("WAWebVcardUtils").vcardGetType(a),
                  }),
                )
              );
            }),
            (n[11] = p),
            (n[12] = u),
            (n[13] = t.icon),
            (n[14] = C))
          : (C = n[14]),
          (h = y.map(C)),
          (n[6] = p),
          (n[7] = u),
          (n[8] = t.icon),
          (n[9] = f),
          (n[10] = h));
      } else h = n[10];
      var b = h,
        v;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { surface: "unknown", viewName: "vcard-wid-choice" }),
          (n[15] = v))
        : (v = n[15]);
      var S = t.onCancel,
        R;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Choose a phone number")), (n[16] = R))
        : (R = n[16]);
      var L;
      n[17] !== t.onCancel
        ? ((L = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onCancel: S,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            title: R,
          })),
          (n[17] = t.onCancel),
          (n[18] = L))
        : (L = n[18]);
      var E;
      n[19] !== b
        ? ((E = c.jsx(r("WAWebDrawerBody.react"), { children: b })),
          (n[19] = b),
          (n[20] = E))
        : (E = n[20]);
      var k;
      return (
        n[21] !== L || n[22] !== E
          ? ((k = c.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Box,
              children: c.jsxs(r("WAWebDrawer.react"), {
                tsNavigationData: v,
                children: [L, E],
              }),
            })),
            (n[21] = L),
            (n[22] = E),
            (n[23] = k))
          : (k = n[23]),
        k
      );
    }
    function _(e) {
      return e.properties.waid;
    }
    l.default = p;
  },
  226,
);
