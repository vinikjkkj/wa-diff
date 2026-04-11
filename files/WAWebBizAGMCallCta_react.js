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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(11),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.ctaText,
        c = l.disabled,
        p = m(null),
        _;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function () {
            var e;
            (e = p.current) == null || e.click();
          }),
          (n[3] = _))
        : (_ = n[3]);
      var f = _,
        g;
      (n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            return { handleKeyActivation: f };
          }),
          (n[4] = g))
        : (g = n[4]),
        d(i, g));
      var h = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        y = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        C;
      n[5] !== a
        ? ((C = function () {
            a.onClick();
          }),
          (n[5] = a),
          (n[6] = C))
        : (C = n[6]);
      var b;
      n[7] !== s || n[8] !== c || n[9] !== C
        ? ((b = u.jsx("div", {
            ref: p,
            children: u.jsx(
              o("WAWebMessageBubbleActions.react").BubbleActions,
              {
                items: [
                  {
                    label: s,
                    onClick: C,
                    disabled: c,
                    Icon: r("WDSIconIcCall.react"),
                  },
                ],
              },
            ),
          })),
          (n[7] = s),
          (n[8] = c),
          (n[9] = C),
          (n[10] = b))
        : (b = n[10]);
      var v = b;
      return y === !0
        ? u.jsxs(u.Fragment, {
            children: [
              v,
              u.jsx(o("WAWebDropdownV2.react").DropdownV2, {
                target: p,
                alignment: o("WAWebPopover.react").PopoverAlignment.Center,
                position: o("WAWebPopover.react").PopoverPosition.Bottom,
                buffer: 12,
                material: !0,
                onOpen: a.onClick,
                children: u.jsx(
                  r("WAWebDesktopUpsellCallingUnavailablePopover.react"),
                  { userDesktopOs: r("nullthrows")(h) },
                ),
              }),
            ],
          })
        : v;
    }
    l.default = p;
  },
  98,
);
