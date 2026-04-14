__d(
  "WAWebCustomerManagerSearchInput.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebSearchRefreshedThinIcon.react",
    "WDSIconIcClose.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = {
        clearButton: {
          flexShrink: "x2lah0s",
          color: "xhslqc4",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          marginInlineStart: "xdwrcjd",
          $$css: !0,
        },
      };
    function f(e) {
      var t = e.onChange,
        n = e.testid,
        a = e.value,
        i = m(null),
        l = p(!1),
        c = l[0],
        f = l[1],
        g = d(
          function (e) {
            t(e.target.value);
          },
          [t],
        ),
        h = d(
          function () {
            var e;
            (t(""), (e = i.current) == null || e.focus());
          },
          [t],
        ),
        y = d(function () {
          return f(!0);
        }, []),
        C = d(function () {
          return f(!1);
        }, []);
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x4wrhlh x10w6t97 x1g0dm76 x11lfxj5 xfb3i0g x1jkqq1h x19qpdui",
            },
            1: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x10w6t97 x1g0dm76 x11lfxj5 xfb3i0g x1jkqq1h x1280gxy xu8d7ss",
            },
          }[!!c << 0],
          {
            "data-testid": void 0,
            children: [
              u.jsx("div", {
                className: "x2lah0s xhslqc4 x78zum5 x6s0dn4 x1xegmmw",
                children: u.jsx(
                  o("WAWebSearchRefreshedThinIcon.react")
                    .SearchRefreshedThinIcon,
                  {},
                ),
              }),
              u.jsx("input", {
                className:
                  "x1iyjqo2 x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xjbqb8w x14ug900 x1f6kntn x1fc57z9 xexx8yu xyri2b x18d9i69 x1c1uobl xeuugli x1hcheoe",
                ref: i,
                type: "text",
                value: a,
                onChange: g,
                onFocus: y,
                onBlur: C,
                placeholder: s._(/*BTDS*/ "Search customers"),
                "data-testid": void 0,
              }),
              a.length > 0 &&
                u.jsx(o("WAWebClickable.react").Clickable, {
                  ariaLabel: s._(/*BTDS*/ "Clear search"),
                  dataTestId: "customer-manager-search-clear",
                  onClick: h,
                  xstyle: _.clearButton,
                  children: u.jsx(r("WDSIconIcClose.react"), {}),
                }),
            ],
          },
        ),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
