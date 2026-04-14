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
      var t = e.countries,
        n = e.initialActiveOptionId,
        r = e.onChange,
        a = e.testid,
        i = e.theme,
        l = e.width,
        u = i === "link-devices-screen" || i === "link-devices-screen-wds",
        m = d(
          function () {
            return p({ countries: t });
          },
          [t],
        ),
        _ = function (t) {
          var e = m.find(function (e) {
            return e.itemKey === t;
          });
          return e != null
            ? c.jsxs(o("WAWebText.react").WAWebTextMuted, {
                align: "center",
                color: u ? "forcedPrimary" : null,
                flex: !0,
                gap: 8,
                children: [e.menuItem.detailLeft, " ", e.menuItem.primary],
              })
            : null;
        };
      return c.jsx(o("WAWebPerformantSelect.react").Select, {
        customLabel: _,
        defaultLabel: s._(/*BTDS*/ "Select country"),
        includeSearchInput: !0,
        initialSelection: n,
        items: m,
        menuMaxHeight: 270,
        menuMinWidth: 300,
        onChange: r,
        testid: void 0,
        theme: i,
        width: l,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.getCountryFlagEmoji = m),
      (l.getCountryDropdownItems = p),
      (l.CountrySelect = _));
  },
  226,
);
