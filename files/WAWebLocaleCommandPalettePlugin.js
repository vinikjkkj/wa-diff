__d(
  "WAWebLocaleCommandPalettePlugin",
  [
    "WAWebCommandPaletteController",
    "WAWebDebug",
    "WAWebDevOnlyBadge.react",
    "WAWebFlexBox.react",
    "WAWebInlineSearch",
    "WAWebL10NCoerceToFBLocale",
    "WAWebL10NConstants",
    "WAWebL10NLocaleDetails",
    "WAWebLexicalMenuPaginationFooter",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebPill.react",
    "WAWebSimpleSearch",
    "WAWebSpinner.react",
    "WAWebText.react",
    "react",
    "useWAWebLexicalSearchModelQuery",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = [
        o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE,
        "fb_RL",
        "fb_AR",
        "fb_ZH",
      ];
    function d(e) {
      return o("WAWebL10NLocaleDetails").L10N_LOCALE_DETAILS[e];
    }
    function m(e, t, n) {
      var r = d(t),
        a = babelHelpers.extends(
          {
            id: e,
            fbLocale: t,
            name: e,
            isDev: n,
            isDefault:
              t === o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE,
          },
          r,
        );
      return (
        (r == null ? void 0 : r.language) != null &&
          (a.name =
            "" +
            r.language +
            ((r == null ? void 0 : r.country) != null
              ? " (" + r.country + ")"
              : "")),
        (a.description =
          e.toLowerCase() !== t.toLowerCase() ? e + " / " + t : e),
        a
      );
    }
    function p() {
      return [].concat(
        Array.from(
          o("WAWebL10NCoerceToFBLocale").LANGUAGE_TO_FB_LOCALE.entries(),
        ).map(function (e) {
          var t = e[0],
            n = e[1];
          return m(t, n, !1);
        }),
        Array.from(
          o(
            "WAWebL10NCoerceToFBLocale",
          ).EXCEPTION_LANG_REGION_TO_FB_LOCALE.entries(),
        ).map(function (e) {
          var t = e[0],
            n = e[1];
          return m(t, n, !1);
        }),
        Array.from(o("WAWebL10NCoerceToFBLocale").DEBUG_LOCALES.entries()).map(
          function (e) {
            var t = e[0],
              n = e[1];
            return m(t, n, !0);
          },
        ),
      );
    }
    function _(e) {
      var t = e.locale;
      return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
        justify: "center",
        align: "center",
        padding: [24, 32],
        children: [
          s.jsx(o("WAWebSpinner.react").Spinner, {}),
          s.jsxs(o("WAWebText.react").WAWebTextSectionTitle, {
            paddingTop: 16,
            children: [r("WAWebDebug").l10n.getLocale(), " ", "->", " ", t],
          }),
          s.jsx(o("WAWebText.react").WAWebTextMuted, {
            paddingTop: 16,
            children:
              "If your browser does not automatically refresh, hit backspace and try a different locale",
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.locale,
        n = o("WAWebCommandPaletteController").useCommandPalette(),
        a = function (t) {
          (r("WAWebDebug").debugSetLocale(
            t.id,
            o("WAWebL10NConstants").L10N_PRIORITY.SAVED,
            !0,
          ),
            n.pushPlugin({
              id: "LocaleLoadingScreen",
              Component: function () {
                return s.jsx(_, { locale: t.id });
              },
            }));
        };
      return s.jsx(
        o("WAWebMenuItems.react").ActionMenuItem,
        {
          optionId: t.id,
          onSelect: function () {
            return a(t);
          },
          primary: t.name,
          secondary: t.description,
          primaryRight: s.jsxs(o("WAWebFlexBox.react").FlexRow, {
            gap: 4,
            children: [
              t.isDefault === !0 &&
                s.jsx(o("WAWebPill.react").Pill, {
                  color: "green",
                  children: "Default",
                }),
              t.isRTL === !0 &&
                s.jsx(o("WAWebPill.react").Pill, {
                  color: "yellow",
                  children: "RTL",
                }),
              t.isDev === !0 &&
                s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {}),
            ],
          }),
        },
        t.id,
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.locales,
        n = e.priority,
        a = r("WAWebDebug").l10n.getLocale(),
        i = t.find(function (e) {
          return e.fbLocale === a;
        });
      return s.jsxs(s.Fragment, {
        children: [
          i != null &&
            s.jsxs(o("WAWebFlexBox.react").FlexRow, {
              gap: 4,
              paddingStart: 16,
              align: "center",
              children: [
                s.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                  children: "Current locale:",
                }),
                s.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: i.fbLocale,
                }),
              ],
            }),
          s.jsx(o("WAWebMenuItems.react").MenuHeading, {
            children: "Common locales",
          }),
          t
            .filter(function (e) {
              return n.includes(e.fbLocale);
            })
            .map(function (e) {
              return s.jsx(f, { locale: e }, e.id);
            }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      var e = u(function () {
          return p();
        }, []),
        t = o("useWAWebLexicalSearchModelQuery").useLexicalSearchModelQuery(
          function () {
            return o("WAWebInlineSearch").inlineSearchModel({
              type: "locale",
              items: e,
              filter: function (t, n) {
                return o("WAWebSimpleSearch").simpleSearch(t, [
                  n.id,
                  n.name,
                  n.country,
                  n.language,
                  n.description,
                  n.isDev ? "dev" : null,
                  n.isRTL === !0 ? "rtl" : null,
                ]);
              },
              options: { maxPageLength: 8 },
            });
          },
        ),
        n = t.next,
        a = t.previous,
        i = t.results;
      return s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
        forceSelection: !0,
        children:
          i != null && i.query.searchText
            ? i != null &&
              i.results.length > 0 &&
              s.jsxs(s.Fragment, {
                children: [
                  i.results.map(function (e) {
                    var t = e.data;
                    return s.jsx(f, { locale: t }, e.id);
                  }),
                  i.pagination != null &&
                    s.jsx(r("WAWebLexicalMenuPaginationFooter"), {
                      page: i.pagination.page,
                      totalPages: i.pagination.totalPages,
                      onDown: i.pagination.next ? n : null,
                      onUp: i.pagination.previous ? a : null,
                    }),
                ],
              })
            : s.jsx(g, { locales: e, priority: c }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = {
      plugin: {
        id: "LocaleCommandPaletteAction",
        placeholder: "Search locales",
        shortName: "loc",
        Component: h,
      },
      trigger: "/loc",
      doc: {
        isDevOnly: !0,
        name: "Locale toggle",
        description: "Change the locale of the app",
      },
    };
    l.LocaleCommandPalettePlugin = y;
  },
  98,
);
