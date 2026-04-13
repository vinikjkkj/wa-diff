__d(
  "WAWebVoipCallLinksPopupTypeDropDown.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebSelectMenuItem.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSButton.react",
    "WDSIconIcCall.react",
    "WDSIconIcVideocam.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        buttonCustomizations: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
      },
      m = n("$InternalEnum").Mirrored(["VIDEO", "VOICE"]);
    function p(t) {
      var n = t.callLinkType,
        a = t.onCallLinkTypeSelectionChanged,
        i = c.jsx(r("WDSIconIcVideocam.react"), {}),
        l = c.jsx(r("WDSIconIcCall.react"), {}),
        u = c.createRef(),
        p = c.createRef();
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        gap: 16,
        children: [
          c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: o("WAWebUISpacing").uiPadding.end15,
            children: c.jsx(r("WDSButton.react"), {
              variant: "outline",
              size: "medium",
              type: "default",
              ref: u,
              xstyle: [
                d.buttonCustomizations,
                o("WAWebUISpacing").uiPadding.end0,
                o("WAWebUISpacing").uiPadding.start8,
              ],
              Icon:
                n === m.VIDEO
                  ? r("WDSIconIcVideocam.react")
                  : r("WDSIconIcCall.react"),
              label: s._(/*BTDS*/ '_j{"VIDEO":"Video","VOICE":"Voice"}', [
                s._enum(n, { VIDEO: "Video", VOICE: "Voice" }),
              ]),
              showEndDropdownIcon: !0,
              onPress: function () {
                var e;
                (e = p.current) == null || e.showPopover();
              },
            }),
          }),
          c.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
            controllerRef: p,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            minWidth: 140,
            target: u,
            children: c.jsxs(
              o("WAWebSelectMenuItem.react").SelectMenuItemGroup,
              {
                multiselect: !1,
                initialSelection: n,
                onSelect: function (n) {
                  var t = m.cast(n);
                  if (t == null) {
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "call links popup dropdown: unexpected invalid call type: ",
                          "",
                        ])),
                      n,
                    );
                    return;
                  }
                  a(t);
                },
                children: [
                  c.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
                    optionId: m.VIDEO,
                    primary: c.jsx(_, { icon: i, text: s._(/*BTDS*/ "Video") }),
                  }),
                  c.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
                    optionId: m.VOICE,
                    primary: c.jsx(_, { icon: l, text: s._(/*BTDS*/ "Voice") }),
                  }),
                ],
              },
            ),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.icon,
        r = e.text,
        a;
      t[0] !== n
        ? ((a = c.jsx(o("WAWebFlex.react").FlexItem, { children: n })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebUISpacing").uiPadding.vert12,
            o("WAWebUISpacing").uiMargin.start8,
          ]),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== r
        ? ((l = c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: i,
            align: "start",
            children: c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
              color: "primary",
              children: r,
            }),
          })),
          (t[3] = r),
          (t[4] = l))
        : (l = t[4]);
      var s;
      return (
        t[5] !== a || t[6] !== l
          ? ((s = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              children: [a, l],
            })),
            (t[5] = a),
            (t[6] = l),
            (t[7] = s))
          : (s = t[7]),
        s
      );
    }
    ((l.CallLinkType = m), (l.WAWebVoipCallLinksPopupTypeDropDown = p));
  },
  226,
);
