__d(
  "WAWebBizAGMCallCta.react",
  [
    "WAWebDesktopUpsellCallingUnavailablePopover.react",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellUtils",
    "WAWebDropdownV2.react",
    "WAWebMessageBubbleActions.react",
    "WAWebPopover.react",
    "WDSIconIcCall.react",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef;
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.ctaText,
        l = a.disabled,
        s = m(null),
        c = function () {
          var e;
          (e = s.current) == null || e.click();
        };
      d(n, function () {
        return { handleKeyActivation: c };
      });
      var p = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        _ = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        f = u.jsx("div", {
          ref: s,
          children: u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
              {
                label: i,
                onClick: function () {
                  a.onClick();
                },
                disabled: l,
                Icon: r("WDSIconIcCall.react"),
              },
            ],
          }),
        });
      return _ === !0
        ? u.jsxs(u.Fragment, {
            children: [
              f,
              u.jsx(o("WAWebDropdownV2.react").DropdownV2, {
                target: s,
                alignment: o("WAWebPopover.react").PopoverAlignment.Center,
                position: o("WAWebPopover.react").PopoverPosition.Bottom,
                buffer: 12,
                material: !0,
                onOpen: a.onClick,
                children: u.jsx(
                  r("WAWebDesktopUpsellCallingUnavailablePopover.react"),
                  { userDesktopOs: r("nullthrows")(p) },
                ),
              }),
            ],
          })
        : f;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
