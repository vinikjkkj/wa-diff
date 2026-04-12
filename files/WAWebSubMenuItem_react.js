__d(
  "WAWebSubMenuItem.react",
  [
    "WAWebCellMenuItem.react",
    "WAWebChevronIcon.react",
    "WAWebDropdownV2.react",
    "WAWebMenuController.react",
    "WAWebPopoverContext.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["children"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef;
    function p(t) {
      var n = t.children,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o("WAWebMenuController.react").useMenu(),
        i = a.activeItemId,
        l = m(null),
        s = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        c = i === t.optionId;
      d(
        function () {
          s.current != null &&
            (c ? s.current.showPopover() : s.current.hidePopover());
        },
        [c, s],
      );
      var p = function () {
        s.current != null &&
          (s.current.popoverIsVisible
            ? s.current.hidePopover()
            : s.current.showPopover());
      };
      return u.jsx(
        o("WAWebCellMenuItem.react").CellV2MenuItem,
        babelHelpers.extends({ ref: l }, r, {
          type: "submenu",
          onSelect: p,
          detailRight: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            width: 20,
          }),
          children: u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
            controllerRef: s,
            buffer: -8,
            target: l,
            position: o("WAWebDropdownV2.react").PopoverPosition.End,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
            initHandling: "hover-popover",
            children: n,
          }),
        }),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.SubMenuItem = p));
  },
  98,
);
