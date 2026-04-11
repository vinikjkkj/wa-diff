__d(
  "WAWebSubMenuItem.react",
  [
    "WAWebCellMenuItem.react",
    "WAWebChevronIcon.react",
    "WAWebDropdownV2.react",
    "WAWebMenuController.react",
    "WAWebPopoverContext.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["children"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef;
    function p(t) {
      var n = o("react-compiler-runtime").c(17),
        r,
        a;
      n[0] !== t
        ? ((r = t.children),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = o("WAWebMenuController.react").useMenu(),
        l = i.activeItemId,
        s = m(null),
        c = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        p = l === t.optionId,
        _,
        f;
      (n[3] !== p || n[4] !== c
        ? ((_ = function () {
            c.current != null &&
              (p ? c.current.showPopover() : c.current.hidePopover());
          }),
          (f = [p, c]),
          (n[3] = p),
          (n[4] = c),
          (n[5] = _),
          (n[6] = f))
        : ((_ = n[5]), (f = n[6])),
        d(_, f));
      var g;
      n[7] !== c
        ? ((g = function () {
            c.current != null &&
              (c.current.popoverIsVisible
                ? c.current.hidePopover()
                : c.current.showPopover());
          }),
          (n[7] = c),
          (n[8] = g))
        : (g = n[8]);
      var h = g,
        y;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebChevronIcon.react").ChevronIcon, { width: 20 })),
          (n[9] = y))
        : (y = n[9]);
      var C;
      n[10] !== r || n[11] !== c
        ? ((C = u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
            controllerRef: c,
            buffer: -8,
            target: s,
            position: o("WAWebDropdownV2.react").PopoverPosition.End,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
            initHandling: "hover-popover",
            children: r,
          })),
          (n[10] = r),
          (n[11] = c),
          (n[12] = C))
        : (C = n[12]);
      var b;
      return (
        n[13] !== h || n[14] !== a || n[15] !== C
          ? ((b = u.jsx(
              o("WAWebCellMenuItem.react").CellV2MenuItem,
              babelHelpers.extends({ ref: s }, a, {
                type: "submenu",
                onSelect: h,
                detailRight: y,
                children: C,
              }),
            )),
            (n[13] = h),
            (n[14] = a),
            (n[15] = C),
            (n[16] = b))
          : (b = n[16]),
        b
      );
    }
    l.SubMenuItem = p;
  },
  98,
);
