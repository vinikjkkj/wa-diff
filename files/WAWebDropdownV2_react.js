__d(
  "WAWebDropdownV2.react",
  [
    "WAWebFlex.react",
    "WAWebMenu.react",
    "WAWebPopover.react",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "children",
        "initHandling",
        "material",
        "maxHeight",
        "minWidth",
        "xstyle",
      ],
      s = [
        "children",
        "initHandling",
        "initialActiveOptionId",
        "material",
        "menuRef",
        "onSelect",
        "useLegacyDesign",
        "xstyle",
      ],
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          borderStartStartRadius: "x1fqc64z",
          borderStartEndRadius: "xs83zq4",
          borderEndEndRadius: "xt6ovg4",
          borderEndStartRadius: "x1ru8ea5",
          backgroundColor: "x16w0wmm",
          boxShadow: "x1sr759z",
          color: "x14ug900",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        scrollable: { overflowY: "x1odjw0f", $$css: !0 },
        material: {
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          $$css: !0,
        },
        arrow: { backgroundColor: "x16w0wmm", $$css: !0 },
      },
      m = ["multi-select", "submenu", "switch"];
    function p(t) {
      var n = t.children,
        r = t.initHandling,
        a = t.material,
        i = t.maxHeight,
        l = t.minWidth,
        s = t.xstyle,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        m = o("WAWebPopover.react").usePopoverElement(
          babelHelpers.extends({}, u, {
            initHandling: r != null ? r : "click",
            dismissable: !0,
            arrowXStyle: d.arrow,
            element: c.jsx(o("WAWebFlex.react").FlexItem, {
              style: { maxHeight: i, minWidth: l },
              xstyle: [d.container, d.material, d.scrollable, s],
              children: n,
            }),
          }),
        );
      return m;
    }
    function _(e) {
      var t = e.children,
        n = e.initHandling,
        r = e.initialActiveOptionId,
        a = e.material,
        i = e.menuRef,
        l = e.onSelect,
        u = e.useLegacyDesign,
        d = e.xstyle,
        _ = babelHelpers.objectWithoutPropertiesLoose(e, s),
        f = p(
          babelHelpers.extends({}, _, {
            initHandling: n != null ? n : "click",
            dismissable: !0,
            material: a,
            children: c.jsx(o("WAWebMenu.react").WAWebMenu, {
              initialActiveOptionId: r,
              material: a,
              onSelect: g,
              ref: i,
              useLegacyDesign: u,
              children: t,
            }),
            xstyle: d,
          }),
        );
      function g(e, t) {
        var n = t.type;
        (l == null || l(e), m.includes(n) === !1 && f.hidePopover());
      }
      return f;
    }
    function f(e) {
      var t = p(e),
        n = t.popover;
      return n;
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = _(e),
        n = t.popover;
      return n;
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      r("vulture")("U1frJLJJ67h208atpcYCc7OChAA=");
      var t = _(babelHelpers.extends({}, e, { initHandling: "contextmenu" })),
        n = t.popover;
      return n;
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.PopoverAlignment = o("WAWebPopover.react").PopoverAlignment),
      (l.PopoverPosition = o("WAWebPopover.react").PopoverPosition),
      (l.useDropdownV2 = p),
      (l.DropdownV2 = f),
      (l.DropdownV2Menu = g),
      (l.ContextDropdownV2Menu = h));
  },
  98,
);
