__d(
  "WAWebDateInput.react",
  [
    "WAWeb-moment",
    "WAWebCalendarMonthIcon.react",
    "WAWebUA",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "fbs",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useRef,
      p = c.useState,
      _ = {
        container: {
          flexGrow: "x1iyjqo2",
          flexBasis: "x1r8uery",
          display: "x78zum5",
          $$css: !0,
        },
        eventBorder: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x13um86b",
          $$css: !0,
        },
        aboutBorder: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingInlineStart: "x12w63v0",
          height: "x1vqgdyp",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        eventActiveBorder: { borderBottomColor: "x1rrvw3c", $$css: !0 },
        aboutActiveBorder: {
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          $$css: !0,
        },
        iconColor: { color: "xhslqc4", $$css: !0 },
        labeledContainer: {
          position: "x1n2onr6",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.getDateBoundaries,
        a = t.label,
        i = t.name,
        l = t.onChange,
        s = t.theme,
        c = t.value,
        f = m(),
        g = p(!1),
        h = g[0],
        y = g[1],
        C = d(
          function () {
            return n();
          },
          [n],
        ),
        b = C[0],
        v = C[1],
        S = function (t) {
          var e = t.target.value;
          l(e);
        },
        R = function () {
          var e;
          return (e = f.current) == null ? void 0 : e.showPicker();
        },
        L = function () {
          return y(!1);
        },
        E = function () {
          return y(!0);
        },
        k = s === "about",
        I = a != null && k,
        T = [
          _.container,
          k ? _.aboutBorder : _.eventBorder,
          !k && o("WAWebUISpacing").uiMargin.bottom10,
          !k && o("WAWebUISpacing").uiPadding.vert5,
          h && (k ? _.aboutActiveBorder : _.eventActiveBorder),
          I && _.labeledContainer,
        ],
        D = !("showPicker" in HTMLInputElement.prototype),
        x = (D || o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari) && h,
        $ = r("WAWeb-moment")(c).format("LL");
      return u.jsxs(
        "section",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(T), {
          children: [
            I &&
              u.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  children: a,
                }),
              }),
            u.jsxs("span", {
              className: "x1iyjqo2 x78zum5",
              role: "textbox",
              tabIndex: h ? -1 : 0,
              onFocus: E,
              children: [
                h
                  ? u.jsx("input", {
                      ref: f,
                      className:
                        "xgcd1z6 x1heor9g x1iyjqo2 xrv4cvt x5yr21d x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz x16tdsg8 xolhmmf xk5dnk7 x1ti3vn2 x1jsrl1z",
                      type: "date",
                      name: i,
                      value: c,
                      onChange: S,
                      min: b,
                      max: v,
                      autoFocus: !0,
                      onBlur: L,
                    })
                  : u.jsx("span", {
                      className: "x1iyjqo2 xrv4cvt x5yr21d",
                      children: $,
                    }),
                !x &&
                  u.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: R,
                    xstyle: o("WAWebUISpacing").uiMargin.end5,
                    "aria-label": r("fbs")._(
                      /*BTDS*/ "Select date from calendar",
                    ),
                    onBlur: L,
                    children: u.jsx(
                      o("WAWebCalendarMonthIcon.react").CalendarMonthIcon,
                      { height: 16, width: 16, xstyle: _.iconColor },
                    ),
                  }),
              ],
            }),
          ],
        }),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.DateInput = f));
  },
  226,
);
