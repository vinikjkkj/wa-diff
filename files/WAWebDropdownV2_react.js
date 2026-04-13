__d(
  "WAWebDropdownV2.react",
  [
    "WAWebFlex.react",
    "WAWebMenu.react",
    "WAWebPopover.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(20),
        r,
        a,
        i,
        l,
        s,
        u;
      if (n[0] !== t) {
        var m = t.children,
          p = t.initHandling,
          _ = t.material,
          f = t.maxHeight,
          g = t.minWidth,
          h = t.xstyle,
          y = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((r = m),
          (a = p),
          (i = f),
          (l = g),
          (u = h),
          (s = y),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u));
      } else
        ((r = n[1]),
          (a = n[2]),
          (i = n[3]),
          (l = n[4]),
          (s = n[5]),
          (u = n[6]));
      var C = a != null ? a : "click",
        b;
      n[7] !== i || n[8] !== l
        ? ((b = { maxHeight: i, minWidth: l }),
          (n[7] = i),
          (n[8] = l),
          (n[9] = b))
        : (b = n[9]);
      var v;
      n[10] !== u
        ? ((v = [d.container, d.material, d.scrollable, u]),
          (n[10] = u),
          (n[11] = v))
        : (v = n[11]);
      var S;
      n[12] !== r || n[13] !== b || n[14] !== v
        ? ((S = c.jsx(o("WAWebFlex.react").FlexItem, {
            style: b,
            xstyle: v,
            children: r,
          })),
          (n[12] = r),
          (n[13] = b),
          (n[14] = v),
          (n[15] = S))
        : (S = n[15]);
      var R;
      n[16] !== s || n[17] !== C || n[18] !== S
        ? ((R = babelHelpers.extends({}, s, {
            initHandling: C,
            dismissable: !0,
            arrowXStyle: d.arrow,
            element: S,
          })),
          (n[16] = s),
          (n[17] = C),
          (n[18] = S),
          (n[19] = R))
        : (R = n[19]);
      var L = o("WAWebPopover.react").usePopoverElement(R);
      return L;
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(10),
        n,
        r,
        a,
        i,
        l,
        u,
        d,
        _,
        f;
      t[0] !== e
        ? ((n = e.children),
          (r = e.initHandling),
          (a = e.initialActiveOptionId),
          (i = e.material),
          (l = e.menuRef),
          (u = e.onSelect),
          (_ = e.useLegacyDesign),
          (f = e.xstyle),
          (d = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a),
          (t[4] = i),
          (t[5] = l),
          (t[6] = u),
          (t[7] = d),
          (t[8] = _),
          (t[9] = f))
        : ((n = t[1]),
          (r = t[2]),
          (a = t[3]),
          (i = t[4]),
          (l = t[5]),
          (u = t[6]),
          (d = t[7]),
          (_ = t[8]),
          (f = t[9]));
      var g = p(
        babelHelpers.extends({}, d, {
          initHandling: r != null ? r : "click",
          dismissable: !0,
          material: i,
          children: c.jsx(o("WAWebMenu.react").WAWebMenu, {
            initialActiveOptionId: a,
            material: i,
            onSelect: h,
            ref: l,
            useLegacyDesign: _,
            children: n,
          }),
          xstyle: f,
        }),
      );
      function h(e, t) {
        var n = t.type;
        (u == null || u(e), m.includes(n) === !1 && g.hidePopover());
      }
      return g;
    }
    function f(e) {
      var t = p(e),
        n = t.popover;
      return n;
    }
    function g(e) {
      var t = _(e),
        n = t.popover;
      return n;
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(2);
      r("vulture")("U1frJLJJ67h208atpcYCc7OChAA=");
      var n;
      t[0] !== e
        ? ((n = babelHelpers.extends({}, e, { initHandling: "contextmenu" })),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a = _(n),
        i = a.popover;
      return i;
    }
    ((l.PopoverAlignment = o("WAWebPopover.react").PopoverAlignment),
      (l.PopoverPosition = o("WAWebPopover.react").PopoverPosition),
      (l.useDropdownV2 = p),
      (l.DropdownV2 = f),
      (l.DropdownV2Menu = g),
      (l.ContextDropdownV2Menu = h));
  },
  98,
);
