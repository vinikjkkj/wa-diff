__d(
  "WAWebEmptyStateActionTile.react",
  [
    "WAWebFilePicker.react",
    "WAWebMetaAIIcon.react",
    "WAWebTabOrder",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        actionTileContainer: {
          textAlign: "x2b8uid",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        button: {
          height: "xjp8j0k",
          width: "x13oubkp",
          backgroundColor: "x4wrhlh xzn9hfk",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.Icon,
        a = t.clickHandler,
        i = t.filePicker,
        l = t.testid,
        s = t.title,
        m = c(),
        p;
      n === "meta-ai"
        ? (p = u.jsx(r("WAWebMetaAIIcon.react"), { height: 24, width: 24 }))
        : (p = u.jsx(n, {
            height: 24,
            width: 24,
            colorName: "contentDeemphasized",
          }));
      function _() {
        if (i != null) {
          var e;
          (e = m.current) == null || e.open();
        } else a && a();
      }
      return u.jsxs(
        "button",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            d.actionTileContainer,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            { "x-default-marker": "x-default-marker", $$css: !0 },
          ),
          {
            "data-tab": o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
            tabIndex: 0,
            onClick: _,
            "data-testid": void 0,
            children: [
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(d.button, o("WDSFlex.stylex").wdsFlex.flexCenter),
                  { children: p },
                ),
              ),
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s,
              }),
              i
                ? u.jsx(
                    r("WAWebFilePicker.react"),
                    babelHelpers.extends({ ref: m }, i),
                  )
                : null,
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
