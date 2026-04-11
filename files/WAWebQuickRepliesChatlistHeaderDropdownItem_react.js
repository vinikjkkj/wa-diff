__d(
  "WAWebQuickRepliesChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebQuickRepliesFlowLoadable",
    "WDSIconIcBolt.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(1);
      if (!o("WAWebBizGatingUtils").quickRepliesManagementEnabled())
        return null;
      var t = d,
        n;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var a = s._(/*BTDS*/ "Quick replies");
        ((n = u.jsx(r("WDSMenuItem.react"), {
          testid: void 0,
          Icon: r("WDSIconIcBolt.react"),
          onPress: t,
          title: a,
        })),
          (e[0] = n));
      } else n = e[0];
      return n;
    }
    function d(e) {
      (e == null || e.stopPropagation(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          u.jsx(o("WAWebQuickRepliesFlowLoadable").QuickRepliesFlowLoadable, {
            isInitialStep: !0,
          }),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ));
    }
    l.default = c;
  },
  226,
);
