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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(18),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var u = d(null),
        m = r("useMergeRefs")(l, u),
        _ = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        f = r("useWAWebNux")(_),
        g = f[0],
        h = f[1],
        y = p,
        C;
      a[3] !== g || a[4] !== h
        ? ((C = function () {
            if (g) {
              var e = o("WAWebMobilePlatforms").isSMB()
                ? o("WAWebSMBListsIntroPopupLoadable")
                    .SMBListsIntroPopupLoadable
                : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
              o("WAWebModalManager").ModalManager.open(
                c.jsx(e, {
                  onContinue: function () {
                    (h(), y());
                  },
                }),
              );
            } else y();
          }),
          (a[3] = g),
          (a[4] = h),
          (a[5] = C))
        : (C = a[5]);
      var b = C,
        v;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "New list")), (a[6] = v))
        : (v = a[6]);
      var S = v,
        R = (n = i.onFocus) != null ? n : void 0,
        L = i["aria-selected"],
        E = i["aria-controls"],
        k;
      a[7] !== b ||
      a[8] !== m ||
      a[9] !== i.id ||
      a[10] !== i.role ||
      a[11] !== R ||
      a[12] !== L ||
      a[13] !== E
        ? ((k = c.jsx(r("WDSChip.react"), {
            ref: m,
            id: i.id,
            label: S,
            onPress: b,
            onFocus: R,
            role: i.role,
            "aria-selected": L,
            "aria-controls": E,
            "aria-label": S,
            Icon: r("WDSIconIcAdd.react"),
            iconOnly: !0,
            testid: void 0,
          })),
          (a[7] = b),
          (a[8] = m),
          (a[9] = i.id),
          (a[10] = i.role),
          (a[11] = R),
          (a[12] = L),
          (a[13] = E),
          (a[14] = k))
        : (k = a[14]);
      var I;
      return (
        a[15] !== i.tabIndex || a[16] !== k
          ? ((I = c.jsx("div", {
              tabIndex: i.tabIndex,
              "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              children: k,
            })),
            (a[15] = i.tabIndex),
            (a[16] = k),
            (a[17] = I))
          : (I = a[17]),
        I
      );
    }
    function p() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
          onBack: o("WAWebDrawerManager").closeDrawerLeft,
          onClose: o("WAWebDrawerManager").closeDrawerLeft,
          entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
            .ADD_LIST_FILTER,
        }),
        { focusOnUnMount: !0 },
      );
    }
    l.default = m;
  },
  226,
);
