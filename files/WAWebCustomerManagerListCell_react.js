__d(
  "WAWebCustomerManagerListCell.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDropdownV2.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebListsGatingUtils",
    "WDSIconIcLabelFilled.react",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = {
        dotBase: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        cellDot: {
          width: "xsmyaan",
          height: "x1kpxq89",
          marginInlineEnd: "xqf2s3x",
          $$css: !0,
        },
        tooltipDot: {
          width: "xsmyaan",
          height: "x1kpxq89",
          marginInlineEnd: "xqf2s3x",
          $$css: !0,
        },
        moreCount: {
          flexShrink: "x2lah0s",
          marginInlineStart: "x1wbi8v6",
          $$css: !0,
        },
        labelIcon: {
          flexShrink: "x2lah0s",
          marginInlineEnd: "xqf2s3x",
          display: "x78zum5",
          $$css: !0,
        },
        tooltipLabelIcon: {
          flexShrink: "x2lah0s",
          marginInlineEnd: "xqf2s3x",
          display: "x78zum5",
          $$css: !0,
        },
      },
      f = {
        bgColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
        fgColor: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
      };
    function g(t) {
      var n,
        a,
        i,
        l = t.chatJid,
        u = p(null),
        d = o("WAWebListsGatingUtils").isListsEnabled(),
        g = o("WAWebContactCollection").ContactCollection.get(l),
        h =
          (n =
            (a = o("useWAWebContactValues").useOptionalContactValues(
              g == null ? void 0 : g.id,
              [o("WAWebContactGetters").getLabels],
            )) == null
              ? void 0
              : a[0]) != null
            ? n
            : null,
        y = m(
          function () {
            return (h != null ? h : [])
              .map(function (e) {
                return o("WAWebLabelCollection").LabelCollection.get(e);
              })
              .filter(Boolean);
          },
          [h],
        );
      if (y.length === 0)
        return c.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          maxLines: 1,
          children: "\u2014",
        });
      var C = y[0],
        b =
          (i = o("WAWebLabelGetters").getHexColor(C)) != null
            ? i
            : "transparent";
      if (y.length === 1)
        return c.jsxs("div", {
          className: "x78zum5 x6s0dn4 xeuugli x193iq5w x6ikm8r x10wlt62",
          children: [
            d
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      _.dotBase,
                      _.cellDot,
                      f.bgColor(b),
                    ),
                  ),
                )
              : c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(_.labelIcon, f.fgColor(b)),
                    {
                      children: c.jsx(r("WDSIconIcLabelFilled.react"), {
                        width: 20,
                        height: 20,
                      }),
                    },
                  ),
                ),
            c.jsx("span", {
              className: "xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft xs83m0k",
              children: c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                maxLines: 1,
                children: C.name,
              }),
            }),
          ],
        });
      var v = y.slice(1),
        S = v.length;
      return c.jsxs("div", {
        className: "x6ikm8r x10wlt62 xh8yej3",
        children: [
          c.jsxs("div", {
            ref: u,
            className: "x78zum5 x6s0dn4 xeuugli x193iq5w x6ikm8r x10wlt62",
            children: [
              d
                ? c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        _.dotBase,
                        _.cellDot,
                        f.bgColor(b),
                      ),
                    ),
                  )
                : c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(_.labelIcon, f.fgColor(b)),
                      {
                        children: c.jsx(r("WDSIconIcLabelFilled.react"), {
                          width: 20,
                          height: 20,
                        }),
                      },
                    ),
                  ),
              c.jsx("span", {
                className: "xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft xs83m0k",
                children: c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children: C.name,
                }),
              }),
              c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                xstyle: _.moreCount,
                children: s._(/*BTDS*/ "+{count}", [s._param("count", S)]),
              }),
            ],
          }),
          c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            target: u,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
            initHandling: "hover",
            dismissable: !1,
            children: c.jsx("div", {
              className:
                "x78zum5 xdt5ytf x129bwdz x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1yc453h",
              children: v.map(function (t) {
                var n,
                  a =
                    (n = o("WAWebLabelGetters").getHexColor(t)) != null
                      ? n
                      : "transparent";
                return c.jsxs(
                  "div",
                  {
                    className: "x78zum5 x6s0dn4",
                    children: [
                      d
                        ? c.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                _.dotBase,
                                _.tooltipDot,
                                f.bgColor(a),
                              ),
                            ),
                          )
                        : c.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                _.tooltipLabelIcon,
                                f.fgColor(a),
                              ),
                              {
                                children: c.jsx(
                                  r("WDSIconIcLabelFilled.react"),
                                  { width: 16, height: 16 },
                                ),
                              },
                            ),
                          ),
                      c.jsx(r("WDSText.react"), {
                        type: "Body3",
                        colorName: "contentDefault",
                        children: t.name,
                      }),
                    ],
                  },
                  t.id,
                );
              }),
            }),
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
