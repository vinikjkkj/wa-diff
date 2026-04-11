__d(
  "WAWebLanguageDrawer.react",
  [
    "WALogger",
    "WAWebConfirmLanguageModal.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebL10N",
    "WAWebL10nGetRenderedLocale",
    "WAWebLocaleToLanguages",
    "WAWebModalManager",
    "WAWebRadio.react",
    "WAWebSettingsFBT",
    "WAWebSpinner.react",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsync",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d(t) {
      var a = t.onClose,
        i = t.ref,
        l = c(o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale()),
        s = l[0],
        d = l[1],
        m = c([]),
        p = m[0],
        _ = m[1];
      function f() {
        return g.apply(this, arguments);
      }
      function g() {
        return (
          (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = r("WAWebL10N").getLocale(),
              t = yield o("WAWebLocaleToLanguages").getLanguageNames(e);
            return t;
          })),
          g.apply(this, arguments)
        );
      }
      function h() {
        return y.apply(this, arguments);
      }
      function y() {
        return (
          (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebLocaleToLanguages").getLanguageNames();
            return e;
          })),
          y.apply(this, arguments)
        );
      }
      var C = r("useWAWebAsync")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield h(),
            n = yield f(),
            a = r("WAWebL10N").getLocale(),
            i = [];
          (n.forEach(function (e, n) {
            n === a && d(n);
            var r = t.get(n);
            r != null && i.push({ language: r, language_native: e, locale: n });
          }),
            i.sort(function (e, t) {
              return e.locale < t.locale ? -1 : e.locale > t.locale ? 1 : 0;
            }),
            i.length === 0 &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[l10n] WAWebLanguageDrawer: no langs from getLanguageNames",
                  ])),
              ),
            _(i));
        }),
        [],
      );
      function b(e, t) {
        (d(e),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebConfirmLanguageModal.react"), {
              newLocale: e,
              newLanguage: t,
            }),
          ));
      }
      var v = null;
      return (
        C.loading || C.error
          ? (v = u.jsx(o("WAWebSpinner.react").Spinner, {}))
          : (v = u.jsx(o("WAWebRadio.react").RadioGroup, {
              name: "language",
              theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
              checkedValue: s,
              options: p.map(function (e) {
                return {
                  value: e.locale,
                  label: e.language,
                  secondaryLabel: e.language_native,
                  onChange: function () {
                    return b(e.locale, e.language);
                  },
                };
              }),
            })),
        u.jsxs(r("WAWebDrawer.react"), {
          ref: i,
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "language-settings",
          },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: o("WAWebSettingsFBT").languageTitle(),
              onBack: a,
              focusBackOrCancel: !0,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsxs(r("WAWebDrawerSection.react"), {
                theme: "padding-no-vertical",
                animation: !1,
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                    margin: [32, 0, 16, 0],
                    children: o("WAWebSettingsFBT").languageHeaderTitle(),
                  }),
                  v,
                ],
              }),
            }),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
