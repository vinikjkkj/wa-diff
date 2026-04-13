__d(
  "WAWebPrivacyScreenModeToggle.react",
  [
    "WAWebDrawerItem.react",
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeGating",
    "WAWebPrivacyModeSettingsFBT",
    "WAWebTabOrder",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.onOpenCustomize,
        a = o("WAWebPrivacyModeContext").usePrivacyMode(),
        i = a.isPrivacyModeEnabled,
        l = a.setPrivacyModeEnabled,
        u;
      t[0] !== n
        ? ((u = function (t) {
            (t.stopPropagation(), n == null || n());
          }),
          (t[0] = n),
          (t[1] = u))
        : (u = t[1]);
      var c = u,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebPrivacyModeSettingsFBT").privacyScreenModeTitle()),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x1849jeq x78zum5 xl56j7k" }), (t[3] = m))
        : (m = t[3]);
      var p, _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = o("WAWebPrivacyModeSettingsFBT")
            .privacyScreenModeTitle()
            .toString()),
          (_ = o("WAWebPrivacyModeSettingsFBT")
            .privacyScreenModeDescription()
            .toString()),
          (t[4] = p),
          (t[5] = _))
        : ((p = t[4]), (_ = t[5]));
      var f;
      t[6] !== i
        ? ((f = s.jsx(
            "div",
            babelHelpers.extends({}, m, {
              children: s.jsx(r("WDSSwitch.react"), {
                value: i,
                "aria-label": p + ". " + _,
              }),
            }),
          )),
          (t[6] = i),
          (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== i || t[9] !== l
        ? ((g = function () {
            l(!i);
          }),
          (t[8] = i),
          (t[9] = l),
          (t[10] = g))
        : (g = t[10]);
      var h;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s.jsx("div", {
            className: "xcldk2z",
            children: o(
              "WAWebPrivacyModeSettingsFBT",
            ).privacyScreenModeDescription(),
          })),
          (t[11] = h))
        : (h = t[11]);
      var y;
      t[12] !== c || t[13] !== i || t[14] !== n
        ? ((y =
            i &&
            n != null &&
            s.jsx("div", {
              className: "x1v5yvga x1ypdohk x1f6kntn x1380le5",
              onClick: c,
              onKeyDown: function (t) {
                (t.key === "Enter" || t.key === " ") &&
                  (t.preventDefault(), c(t));
              },
              role: "button",
              tabIndex: 0,
              children: o("WAWebPrivacyModeSettingsFBT").privacyModeCustomize(),
            })),
          (t[12] = c),
          (t[13] = i),
          (t[14] = n),
          (t[15] = y))
        : (y = t[15]);
      var C;
      return (
        t[16] !== f || t[17] !== g || t[18] !== y
          ? ((C = s.jsxs(r("WAWebDrawerItem.react"), {
              title: d,
              tabIndex: -1,
              dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
              icon: f,
              theme: "privacy",
              isLastItem: !1,
              disableKeydownHandling: !0,
              onClick: g,
              testid: void 0,
              children: [h, y],
            })),
            (t[16] = f),
            (t[17] = g),
            (t[18] = y),
            (t[19] = C))
          : (C = t[19]),
        C
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.onOpenCustomize;
      if (!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) return null;
      var r;
      return (
        t[0] !== n
          ? ((r = s.jsx(u, { onOpenCustomize: n })), (t[0] = n), (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    l.WAWebPrivacyScreenModeToggle = c;
  },
  98,
);
