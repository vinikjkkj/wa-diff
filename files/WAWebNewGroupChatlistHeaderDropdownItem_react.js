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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = function (t) {
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
          (t == null || t.stopPropagation(),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "new_group", isSubFlow: !1 }
                : u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                    onCreateGroup: (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          (yield e,
                            o(
                              "WAWebDrawerManager",
                            ).DrawerManager.closeDrawerLeft());
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                    isSubFlow: !1,
                  }),
            ),
            o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
              o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.NEW_GROUP,
            ));
        },
        t = s._(/*BTDS*/ "New group"),
        a = "mi-new-group menu-item";
      return u.jsx(r("WDSMenuItem.react"), {
        Icon: r("WDSIconIcGroupAdd.react"),
        title: t,
        onPress: e,
        testid: void 0,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
