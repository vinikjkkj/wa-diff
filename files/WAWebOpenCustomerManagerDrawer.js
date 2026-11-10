__d(
  "WAWebOpenCustomerManagerDrawer",
  [
    "WAWebCustomerManagerDrawerLoadable",
    "WAWebCustomerManagerOpenQpl",
    "WAWebCustomerManagerRoot.react",
    "WAWebCustomerManagerVisit",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = null,
        a = function () {
          return n;
        };
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        s.jsx(r("WAWebCustomerManagerRoot.react"), {
          getDrawerId: a,
          children: e,
        }),
        babelHelpers.extends({}, t, {
          onDrawerIdAssigned: function (t) {
            n = t;
          },
        }),
      );
    }
    function c() {
      (o("WAWebCustomerManagerOpenQpl").startCustomerManagerOpen(),
        o("WAWebCustomerManagerVisit").beginCustomerManagerVisit(),
        u(
          s.jsx(
            o("WAWebCustomerManagerDrawerLoadable")
              .WAWebCustomerManagerDrawerLoadable,
            {},
          ),
          {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "slide-left",
          },
        ));
    }
    function d(e) {
      (o("WAWebCustomerManagerVisit").markCustomerManagerHandOff(),
        u(e, { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }));
    }
    ((l.openCustomerManagerDrawer = c), (l.replaceCustomerManagerRoot = d));
  },
  98,
);
