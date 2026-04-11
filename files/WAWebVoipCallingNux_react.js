__d(
  "WAWebVoipCallingNux.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebClickable.react",
    "WAWebDropdownV2.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebNux",
    "WAWebPopoverContext.react",
    "WAWebTooltip.react",
    "WAWebUimUie.react",
    "WDSIconIcClose.react",
    "WDSText.react",
    "react",
    "useWAWebNux",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        row: { minHeight: "xu0aao5", $$css: !0 },
        tooltip: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        arrow: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1sbwfh8",
          $$css: !0,
        },
        button: {
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        content: { rowGap: "x1b73lln", columnGap: "x46w9ns", $$css: !0 },
        closeButton: { marginInlineStart: "x150mmf0", $$css: !0 },
      };
    function m(e) {
      var t = e.nuxKey,
        n = e.targetRef,
        a = r("useWAWebNux")(t),
        i = a[0],
        l = a[1],
        m = a[2],
        p = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef();
      c(
        function () {
          if (i && n.current != null) {
            var e;
            (e = p.current) == null || e.showPopover();
          }
        },
        [i, p, n],
      );
      var _ = r("useWAWebStableCallback")(function () {
        var e;
        (m(), (e = p.current) == null || e.hidePopover());
      });
      if (!i) return null;
      var f =
          t === o("WAWebNux").NUX.WEB_CALLING_1_1_NUX
            ? s._(/*BTDS*/ "One-on-one web calls")
            : s._(/*BTDS*/ "Calling on web"),
        g = s._(/*BTDS*/ "Talk live over audio or video");
      return u.jsx(o("WAWebUimUie.react").UIE, {
        popable: !0,
        escapable: !0,
        dismissOnWindowResize: !0,
        displayName: "VoipCallingNux",
        requestDismiss: _,
        children: u.jsx(r("WAWebBox.react"), {
          testid: void 0,
          children: u.jsx(
            o("WAWebPopoverContext.react").WAWebPopoverController,
            {
              targetRef: n,
              controllerRef: p,
              popover: u.jsx(o("WAWebTooltip.react").WAWebControllableTooltip, {
                target: "context",
                alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
                position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                enableEnterTransition: !0,
                enableExitTransition: !0,
                tooltipXStyle: d.tooltip,
                arrowXStyle: d.arrow,
                includeArrow: !0,
                element: u.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: d.row,
                  align: "center",
                  justify: "all",
                  children: [
                    u.jsxs(o("WAWebFlex.react").FlexColumn, {
                      xstyle: d.content,
                      children: [
                        u.jsx(r("WDSText.react"), {
                          type: "Body2Emphasized",
                          colorName: "contentInverse",
                          children: f,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "contentInverse",
                          children: g,
                        }),
                      ],
                    }),
                    u.jsx(o("WAWebClickable.react").Clickable, {
                      as: "button",
                      onClick: _,
                      xstyle: [d.button, d.closeButton],
                      ariaLabel: r("WAWebFbtCommon")("Close"),
                      children: u.jsx(r("WDSIconIcClose.react"), {
                        colorName: "contentInverse",
                        width: 20,
                        height: 20,
                      }),
                    }),
                  ],
                }),
              }),
            },
          ),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
