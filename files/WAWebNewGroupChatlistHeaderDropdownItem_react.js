__d(
  "WAWebNewGroupChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebNewGroupFlowLoadable",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcGroupAdd.react",
    "WDSMenuItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t = d,
        n;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var a = s._(/*BTDS*/ "New group");
        ((n = u.jsx(r("WDSMenuItem.react"), {
          Icon: r("WDSIconIcGroupAdd.react"),
          title: a,
          onPress: t,
          testid: void 0,
        })),
          (e[0] = n));
      } else n = e[0];
      return n;
    }
    function d(e) {
      if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebReachoutTimelockRestrictedModalLoadable")
              .ReachoutTimelockRestrictedModalLoadable,
            {},
          ),
        );
        return;
      }
      (e == null || e.stopPropagation(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "new_group", isSubFlow: !1 }
            : u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                onCreateGroup: m,
                isSubFlow: !1,
              }),
        ),
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
          o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.NEW_GROUP,
        ));
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield e, o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
        })),
        p.apply(this, arguments)
      );
    }
    l.default = c;
  },
  226,
);
