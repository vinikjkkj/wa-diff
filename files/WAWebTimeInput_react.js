__d(
  "WAWebTimeInput.react",
  [
    "WAWebStatusClockIcon.react",
    "WAWebUA",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "fbs",
    "react",
    "stylex",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
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
    function m(t) {
      var n = t.label,
        a = t.name,
        i = t.onChange,
        l = t.theme,
        s = t.value,
        m = c(),
        p = r("useWAWebToggle")(!1),
        _ = p[0],
        f = p[1];
      function g(e) {
        var t = e.target.value;
        i(t);
      }
      function h() {
        var e;
        (e = m.current) == null || e.showPicker();
      }
      var y = l === "about",
        C = n != null && y,
        b = [
          d.container,
          y ? d.aboutBorder : d.eventBorder,
          !y && o("WAWebUISpacing").uiMargin.bottom10,
          !y && o("WAWebUISpacing").uiPadding.vert5,
          _ && (y ? d.aboutActiveBorder : d.eventActiveBorder),
          C && d.labeledContainer,
        ],
        v = o("WAWebUA").UA.isChrome;
      return u.jsxs(
        "section",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(b), {
          children: [
            C &&
              u.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  children: n,
                }),
              }),
            u.jsx("span", {
              className: "x1iyjqo2",
              children: u.jsx("input", {
                ref: m,
                className:
                  "xh8yej3 x5yr21d xrv4cvt xgcd1z6 x1heor9g x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz x16tdsg8 xolhmmf x18tydcn x1a7k29d x15fb772 xx784q3",
                type: "time",
                name: a,
                value: s,
                onChange: g,
                onFocus: f,
                onBlur: f,
              }),
            }),
            u.jsx(r("WAWebUnstyledButton.react"), {
              onClick: h,
              disabled: !v,
              xstyle: o("WAWebUISpacing").uiMargin.end9,
              onFocus: f,
              onBlur: f,
              "aria-label": r("fbs")._(/*BTDS*/ "Select time"),
              children: u.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
                height: 16,
                width: 16,
                xstyle: d.iconColor,
              }),
            }),
          ],
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.TimeInput = m));
  },
  226,
);
