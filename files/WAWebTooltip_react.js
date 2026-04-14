__d(
  "WAWebTooltip.react",
  ["WAWebPopover.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["arrowXStyle", "element", "onClick", "tooltipXStyle"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        tooltip: {
          display: "x1rg5ohu",
          maxWidth: "x1dc814f",
          fontSize: "x1nxh6w3",
          color: "xowaa7l",
          textAlign: "x2b8uid",
          textOverflow: "xlyipyv",
          textShadow: "x7opvkv",
          backgroundColor: "xpip370",
          borderStartStartRadius: "x12l2aii",
          borderStartEndRadius: "x1mbk4o",
          borderEndEndRadius: "x14vvt0a",
          borderEndStartRadius: "x1w3ol1v",
          $$css: !0,
        },
        arrow: { backgroundColor: "xpip370", $$css: !0 },
        paddingHoriz16: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        paddingVert8: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.children,
        n = e.onClick,
        o = e.ref,
        a = e.tooltipXStyle,
        i;
      return (
        n != null && (i = { onClick: n, role: "button", tabIndex: 0 }),
        c.jsx(
          "div",
          babelHelpers.extends(
            {
              ref: o,
              role: "tooltip",
              "data-testid": void 0,
              className: (s || (s = r("stylex")))([
                d.tooltip,
                d.paddingHoriz16,
                d.paddingVert8,
                a,
              ]),
            },
            i,
            { children: t },
          ),
        )
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.arrowXStyle,
        r = t.element,
        a = t.onClick,
        i = t.tooltipXStyle,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = babelHelpers.extends({}, l, {
          dismissable: !!a,
          element: c.jsx(m, { onClick: a, tooltipXStyle: i, children: r }),
          arrowXStyle: [d.arrow, n],
        }),
        u = o("WAWebPopover.react").usePopoverElement(s),
        p = u.hidePopover,
        _ = u.popover,
        f = u.popoverIsVisible,
        g = u.showPopover;
      return {
        tooltip: _,
        showTooltip: g,
        hideTooltip: p,
        tooltipIsVisible: f,
      };
    }
    function _(e) {
      var t = e.alignment,
        n = e.buffer,
        r = n === void 0 ? 8 : n,
        o = e.children,
        a = e.enableEnterTransition,
        i = a === void 0 ? !0 : a,
        l = e.enableExitTransition,
        s = l === void 0 ? !1 : l,
        u = e.name,
        c = e.openingDelay,
        d = e.position,
        m = e.showOnFocus,
        _ = m === void 0 ? !0 : m,
        f = e.targetRef,
        g = e.testid,
        h = p({
          target: f,
          position: d,
          alignment: t,
          element: o,
          buffer: r,
          name: u,
          enableEnterTransition: i,
          enableExitTransition: s,
          initHandling: _ ? ["hover", "focus"] : "hover",
          openingDelay: c,
          testid: g,
        }),
        y = h.tooltip;
      return y;
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = p(e),
        n = t.tooltip;
      return n;
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.PopoverAlignment = o("WAWebPopover.react").PopoverAlignment),
      (l.PopoverPosition = o("WAWebPopover.react").PopoverPosition),
      (l.useTooltip = p),
      (l.WAWebHoverTooltip = _),
      (l.WAWebControllableTooltip = f));
  },
  98,
);
