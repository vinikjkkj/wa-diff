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
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = { container: { backgroundColor: "x1280gxy", $$css: !0 } };
    function p(t) {
      var n = t.onSelect,
        a = t.vcard,
        i = d(
          function () {
            var i,
              l = function (t) {
                n(t);
              },
              s = function (t, n) {
                (t.stopPropagation(), l(n));
              },
              u = ((i = a.TEL) != null ? i : []).filter(function (e) {
                return e.properties.waid;
              });
            return u.map(function (n) {
              var a = o("WAWebWidFactory").createUserWidOrThrow(
                  n.properties.waid[0],
                ),
                i = t.icon;
              return (
                i &&
                  (i = c.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: function (t) {
                      s(t, a);
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
                    { key: "vCard-" + n.value },
                  ),
                  c.jsx(r("WAWebDrawerItem.react"), {
                    title: o("WAWebWidFormat").widToFormattedUser(a),
                    onClick: function () {
                      return l(a);
                    },
                    isLastItem: !0,
                    icon: i,
                    children: o("WAWebVcardUtils").vcardGetType(n),
                  }),
                )
              );
            });
          },
          [a.TEL, n, t.icon],
        );
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Box,
        children: c.jsxs(r("WAWebDrawer.react"), {
          tsNavigationData: {
            surface: "unknown",
            viewName: "vcard-wid-choice",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              onCancel: t.onCancel,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              title: s._(/*BTDS*/ "Choose a phone number"),
            }),
            c.jsx(r("WAWebDrawerBody.react"), { children: i }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
