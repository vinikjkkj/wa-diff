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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(8),
        n = e.locale,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [24, 32]),
          (i = s.jsx(o("WAWebSpinner.react").Spinner, {})),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1]));
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = r("WAWebDebug").l10n.getLocale()), (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] !== n
        ? ((u = s.jsxs(o("WAWebText.react").WAWebTextSectionTitle, {
            paddingTop: 16,
            children: [l, " ", "->", " ", n],
          })),
          (t[3] = n),
          (t[4] = u))
        : (u = t[4]);
      var c;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx(o("WAWebText.react").WAWebTextMuted, {
            paddingTop: 16,
            children:
              "If your browser does not automatically refresh, hit backspace and try a different locale",
          })),
          (t[5] = c))
        : (c = t[5]);
      var d;
      return (
        t[6] !== u
          ? ((d = s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
              justify: "center",
              align: "center",
              padding: a,
              children: [i, u, c],
            })),
            (t[6] = u),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.locale,
        a = o("WAWebCommandPaletteController").useCommandPalette(),
        i;
      t[0] !== a
        ? ((i = function (t) {
            (r("WAWebDebug").debugSetLocale(
              t.id,
              o("WAWebL10NConstants").L10N_PRIORITY.SAVED,
              !0,
            ),
              a.pushPlugin({
                id: "LocaleLoadingScreen",
                Component: function () {
                  return s.jsx(_, { locale: t.id });
                },
              }));
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u = n.id,
        c;
      t[2] !== l || t[3] !== n
        ? ((c = function () {
            return l(n);
          }),
          (t[2] = l),
          (t[3] = n),
          (t[4] = c))
        : (c = t[4]);
      var d;
      t[5] !== n.isDefault
        ? ((d =
            n.isDefault === !0 &&
            s.jsx(o("WAWebPill.react").Pill, {
              color: "green",
              children: "Default",
            })),
          (t[5] = n.isDefault),
          (t[6] = d))
        : (d = t[6]);
      var m;
      t[7] !== n.isRTL
        ? ((m =
            n.isRTL === !0 &&
            s.jsx(o("WAWebPill.react").Pill, {
              color: "yellow",
              children: "RTL",
            })),
          (t[7] = n.isRTL),
          (t[8] = m))
        : (m = t[8]);
      var p;
      t[9] !== n.isDev
        ? ((p =
            n.isDev === !0 &&
            s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {})),
          (t[9] = n.isDev),
          (t[10] = p))
        : (p = t[10]);
      var f;
      t[11] !== d || t[12] !== m || t[13] !== p
        ? ((f = s.jsxs(o("WAWebFlexBox.react").FlexRow, {
            gap: 4,
            children: [d, m, p],
          })),
          (t[11] = d),
          (t[12] = m),
          (t[13] = p),
          (t[14] = f))
        : (f = t[14]);
      var g;
      return (
        t[15] !== n.description ||
        t[16] !== n.id ||
        t[17] !== n.name ||
        t[18] !== u ||
        t[19] !== c ||
        t[20] !== f
          ? ((g = s.jsx(
              o("WAWebMenuItems.react").ActionMenuItem,
              {
                optionId: u,
                onSelect: c,
                primary: n.name,
                secondary: n.description,
                primaryRight: f,
              },
              n.id,
            )),
            (t[15] = n.description),
            (t[16] = n.id),
            (t[17] = n.name),
            (t[18] = u),
            (t[19] = c),
            (t[20] = f),
            (t[21] = g))
          : (g = t[21]),
        g
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.locales,
        a = e.priority,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = r("WAWebDebug").l10n.getLocale()), (t[0] = i))
        : (i = t[0]);
      var l = i,
        u;
      if (t[1] !== n) {
        var c;
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = function (t) {
              return t.fbLocale === l;
            }),
            (t[3] = c))
          : (c = t[3]),
          (u = n.find(c)),
          (t[1] = n),
          (t[2] = u));
      } else u = t[2];
      var d = u,
        m;
      t[4] !== d
        ? ((m =
            d != null &&
            s.jsxs(o("WAWebFlexBox.react").FlexRow, {
              gap: 4,
              paddingStart: 16,
              align: "center",
              children: [
                s.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                  children: "Current locale:",
                }),
                s.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: d.fbLocale,
                }),
              ],
            })),
          (t[4] = d),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s.jsx(o("WAWebMenuItems.react").MenuHeading, {
            children: "Common locales",
          })),
          (t[6] = p))
        : (p = t[6]);
      var _;
      if (t[7] !== n || t[8] !== a) {
        var f;
        (t[10] !== a
          ? ((f = function (t) {
              return a.includes(t.fbLocale);
            }),
            (t[10] = a),
            (t[11] = f))
          : (f = t[11]),
          (_ = n.filter(f).map(h)),
          (t[7] = n),
          (t[8] = a),
          (t[9] = _));
      } else _ = t[9];
      var g;
      return (
        t[12] !== m || t[13] !== _
          ? ((g = s.jsxs(s.Fragment, { children: [m, p, _] })),
            (t[12] = m),
            (t[13] = _),
            (t[14] = g))
          : (g = t[14]),
        g
      );
    }
    function h(e) {
      return s.jsx(f, { locale: e }, e.id);
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      var e = o("react-compiler-runtime").c(8),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = p()), (e[0] = t))
        : (t = e[0]);
      var n = t,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            return o("WAWebInlineSearch").inlineSearchModel({
              type: "locale",
              items: n,
              filter: b,
              options: { maxPageLength: 8 },
            });
          }),
          (e[1] = a))
        : (a = e[1]);
      var i = o("useWAWebLexicalSearchModelQuery").useLexicalSearchModelQuery(
          a,
        ),
        l = i.next,
        u = i.previous,
        d = i.results,
        m;
      e[2] !== l || e[3] !== u || e[4] !== d
        ? ((m =
            d != null && d.query.searchText
              ? d != null &&
                d.results.length > 0 &&
                s.jsxs(s.Fragment, {
                  children: [
                    d.results.map(C),
                    d.pagination != null &&
                      s.jsx(r("WAWebLexicalMenuPaginationFooter"), {
                        page: d.pagination.page,
                        totalPages: d.pagination.totalPages,
                        onDown: d.pagination.next ? l : null,
                        onUp: d.pagination.previous ? u : null,
                      }),
                  ],
                })
              : s.jsx(g, { locales: n, priority: c })),
          (e[2] = l),
          (e[3] = u),
          (e[4] = d),
          (e[5] = m))
        : (m = e[5]);
      var _;
      return (
        e[6] !== m
          ? ((_ = s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              forceSelection: !0,
              children: m,
            })),
            (e[6] = m),
            (e[7] = _))
          : (_ = e[7]),
        _
      );
    }
    function C(e) {
      var t = e.data;
      return s.jsx(f, { locale: t }, e.id);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t) {
      return o("WAWebSimpleSearch").simpleSearch(e, [
        t.id,
        t.name,
        t.country,
        t.language,
        t.description,
        t.isDev ? "dev" : null,
        t.isRTL === !0 ? "rtl" : null,
      ]);
    }
    var v = {
      plugin: {
        id: "LocaleCommandPaletteAction",
        placeholder: "Search locales",
        shortName: "loc",
        Component: y,
      },
      trigger: "/loc",
      doc: {
        isDevOnly: !0,
        name: "Locale toggle",
        description: "Change the locale of the app",
      },
    };
    l.LocaleCommandPalettePlugin = v;
  },
  98,
);
