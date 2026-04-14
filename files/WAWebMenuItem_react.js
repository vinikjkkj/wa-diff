__d(
  "WAWebMenuItem.react",
  [
    "WAWebMenuController.react",
    "WAWebNoop",
    "WAWebUnstyledButton.react",
    "err",
    "react",
    "useMergeRefs",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef;
    function p(e) {
      var t = o("WAWebMenuController.react").useMenu();
      if (t == null)
        throw r("err")("[Menu] MenuItem must be a child of a MenuItemList");
      return {
        menu: t,
        colorScheme: t.colorScheme,
        size: t.size,
        isActive: (t == null ? void 0 : t.activeItemId) === e,
        isFiltered: t.filteredItems != null && t.filteredItems.has(e) === !1,
        material: t.material,
        allowTabNavigation: t.allowTabNavigation,
        border: t.border,
        useLegacyDesign: t.useLegacyDesign,
      };
    }
    function _(e, t) {
      return (o("WAWebMenuController.react").useRegisterItem(e, t), p(e));
    }
    var f = {
      container: {
        textAlign: "x1yc453h",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        display: "x78zum5",
        flexGrow: "x1iyjqo2",
        flexShrink: "x2lah0s",
        flexBasis: "xdl72j9",
        alignSelf: "xkh2ocl",
        width: "xh8yej3",
        $$css: !0,
      },
      disabled: { cursor: "x1h6gzvc", $$css: !0 },
    };
    function g(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.ariaLabel,
        i = o.children,
        l = o.disabled,
        s = o.onActive,
        c = o.onInactive,
        p = o.onSelect,
        g = o.optionId,
        h = o.primary,
        y = o.searchCriteria,
        C = o.testid,
        b = o.type,
        v = b === void 0 ? "action" : b,
        S = m(null),
        R = r("useMergeRefs")(S, n),
        L = _(g, {
          id: g,
          type: v,
          label: h,
          searchCriteria: y,
          onSelect: l !== !0 ? p : r("WAWebNoop"),
          ref: S,
        }),
        E = L.allowTabNavigation,
        k = L.isActive,
        I = L.isFiltered,
        T = L.menu,
        D = r("useWAWebPrevious")(k);
      if (
        (d(
          function () {
            k === !0 && D !== !0
              ? s == null || s()
              : k === !1 && D === !0 && (c == null || c());
          },
          [k, D, s, c],
        ),
        I === !0)
      )
        return null;
      var x = function (t) {
          (t.stopPropagation(), T.selectItem(g));
        },
        $ = function () {
          T.activateItem(g);
        },
        P = function () {
          T.activateItem(null);
        };
      return u.jsx(r("WAWebUnstyledButton.react"), {
        ref: R,
        role: "listitem",
        xstyle: [f.container, l === !0 && f.disabled],
        onClick: l !== !0 ? x : null,
        tabIndex: E ? 0 : -1,
        dataTab: E ? 0 : -1,
        testid: void 0,
        onFocus: E ? $ : null,
        onBlur: E ? P : null,
        "aria-label": a,
        children: i,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.useMenuItem = p),
      (l.WAWebMenuItem = g));
  },
  98,
);
