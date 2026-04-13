__d(
  "WAWebCountrySelect.react",
  [
    "fbt",
    "invariant",
    "WAIsoToCc",
    "WAWebCountriesNativeCountryNames",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebPerformantSelect.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = e.useMemo;
    function m(e) {
      return e
        .toUpperCase()
        .split("")
        .map(function (e) {
          return String.fromCodePoint(127462 + e.charCodeAt(0) - 65);
        })
        .join("");
    }
    function p(e) {
      var t = e.countries;
      return t.map(function (e) {
        var t = e[0],
          n = e[1],
          a;
        r("WAWebCountriesNativeCountryNames")[t] != null &&
          n !== r("WAWebCountriesNativeCountryNames")[t] &&
          (a = r("WAWebCountriesNativeCountryNames")[t]);
        var i = m(t),
          l = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(i),
          d = r("WAIsoToCc")[t];
        d != null || u(0, 75729, t);
        var p = {
          optionId: t,
          primary: n,
          secondary: a,
          ariaLabel: s._(
            /*BTDS*/ "Selected country: {country}. Click to select a different country.",
            [s._param("country", n)],
          ),
          detailLeft:
            l != null
              ? c.jsx(r("WAWebEmoji.react"), {
                  DEPRECATED_className: "x1603h9y",
                  emoji: l,
                  selectable: !1,
                })
              : c.jsx("span", {}),
          detailRight: c.jsxs(o("WAWebText.react").WAWebTextMuted, {
            dir: "ltr",
            children: ["+", d],
          }),
          searchCriteria: [n, a, t, d.toString(), i].join(" "),
        };
        return {
          itemKey: p.optionId,
          menuItem: p,
          height: p.secondary != null ? 56 : 40,
        };
      });
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.countries,
        r = e.initialActiveOptionId,
        a = e.onChange,
        i = e.testid,
        l = e.theme,
        u = e.width,
        d = l === "link-devices-screen" || l === "link-devices-screen-wds",
        m;
      t[0] !== n
        ? ((m = p({ countries: n })), (t[0] = n), (t[1] = m))
        : (m = t[1]);
      var _ = m,
        f;
      t[2] !== _ || t[3] !== d
        ? ((f = function (t) {
            var e = _.find(function (e) {
              return e.itemKey === t;
            });
            return e != null
              ? c.jsxs(o("WAWebText.react").WAWebTextMuted, {
                  align: "center",
                  color: d ? "forcedPrimary" : null,
                  flex: !0,
                  gap: 8,
                  children: [e.menuItem.detailLeft, " ", e.menuItem.primary],
                })
              : null;
          }),
          (t[2] = _),
          (t[3] = d),
          (t[4] = f))
        : (f = t[4]);
      var g = f,
        h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Select country")), (t[5] = h))
        : (h = t[5]);
      var y = i != null ? i : "country-selector",
        C;
      return (
        t[6] !== _ ||
        t[7] !== g ||
        t[8] !== r ||
        t[9] !== a ||
        t[10] !== y ||
        t[11] !== l ||
        t[12] !== u
          ? ((C = c.jsx(o("WAWebPerformantSelect.react").Select, {
              customLabel: g,
              defaultLabel: h,
              includeSearchInput: !0,
              initialSelection: r,
              items: _,
              menuMaxHeight: 270,
              menuMinWidth: 300,
              onChange: a,
              testid: void 0,
              theme: l,
              width: u,
            })),
            (t[6] = _),
            (t[7] = g),
            (t[8] = r),
            (t[9] = a),
            (t[10] = y),
            (t[11] = l),
            (t[12] = u),
            (t[13] = C))
          : (C = t[13]),
        C
      );
    }
    ((l.getCountryFlagEmoji = m),
      (l.getCountryDropdownItems = p),
      (l.CountrySelect = _));
  },
  226,
);
