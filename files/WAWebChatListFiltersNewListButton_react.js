__d(
  "WAWebChatListFiltersNewListButton.react",
  [
    "fbt",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebListsIntroPopupLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSMBListsIntroPopupLoadable",
    "WAWebTabOrder",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSChip.react",
    "WDSIconIcAdd.react",
    "react",
    "useMergeRefs",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useRef;
    function m(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = d(null),
        u = r("useMergeRefs")(a, l),
        m = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        p = r("useWAWebNux")(m),
        _ = p[0],
        f = p[1],
        g = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
              onBack: o("WAWebDrawerManager").closeDrawerLeft,
              onClose: o("WAWebDrawerManager").closeDrawerLeft,
              entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .ADD_LIST_FILTER,
            }),
            { focusOnUnMount: !0 },
          );
        },
        h = function () {
          if (_) {
            var e = o("WAWebMobilePlatforms").isSMB()
              ? o("WAWebSMBListsIntroPopupLoadable").SMBListsIntroPopupLoadable
              : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
            o("WAWebModalManager").ModalManager.open(
              c.jsx(e, {
                onContinue: function () {
                  (f(), g());
                },
              }),
            );
          } else g();
        },
        y = s._(/*BTDS*/ "New list");
      return c.jsx("div", {
        tabIndex: i.tabIndex,
        "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
        children: c.jsx(r("WDSChip.react"), {
          ref: u,
          id: i.id,
          label: y,
          onPress: h,
          onFocus: (n = i.onFocus) != null ? n : void 0,
          role: i.role,
          "aria-selected": i["aria-selected"],
          "aria-controls": i["aria-controls"],
          "aria-label": y,
          Icon: r("WDSIconIcAdd.react"),
          iconOnly: !0,
          testid: void 0,
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
