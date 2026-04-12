__d(
  "WAWebBizAdCreationInterestRow.react",
  [
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WDSBaseCheckbox.react",
    "WDSIconIcChevronRight.react",
    "WDSText.react",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        root: {
          display: "x78zum5",
          width: "xh8yej3",
          alignItems: "x6s0dn4",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n,
        a,
        i,
        l = e.interestNode,
        d = e.isSelected,
        m = d === void 0 ? !1 : d,
        p = e.onCategoryClick,
        _ = e.onInterestToggle,
        f = u(
          function () {
            p == null || p(l);
          },
          [p, l],
        ),
        g = u(
          function () {
            _ == null || _(l);
          },
          [_, l],
        ),
        h = (t = l.node) == null ? void 0 : t.id;
      if (!r("isStringNullOrEmpty")(h)) {
        var y, C, b;
        return s.jsx(r("WAWebUnstyledButton.react"), {
          xstyle: c.root,
          onClick: g,
          "aria-label":
            "Toggle " +
            ((y = (C = l.node) == null ? void 0 : C.name) != null
              ? y
              : "interest"),
          children: s.jsxs(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            gap: 12,
            align: "center",
            justify: "all",
            children: [
              s.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: (b = l.node) == null ? void 0 : b.name,
              }),
              s.jsx(r("WDSBaseCheckbox.react"), { value: m, shape: "circle" }),
            ],
          }),
        });
      }
      return s.jsx(r("WAWebUnstyledButton.react"), {
        xstyle: c.root,
        onClick: f,
        "aria-label":
          "View " +
          ((n = (a = l.node) == null ? void 0 : a.name) != null
            ? n
            : "category") +
          " category",
        children: s.jsxs(o("WAWebFlex.react").FlexRow, {
          grow: 1,
          gap: 8,
          align: "center",
          justify: "all",
          children: [
            s.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: (i = l.node) == null ? void 0 : i.name,
            }),
            s.jsx(r("WDSIconIcChevronRight.react"), { height: 20, width: 20 }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
