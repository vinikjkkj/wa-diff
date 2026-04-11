__d(
  "WAWebChatContextMenuItemEditLabel.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebCommonCTWADataSharing",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLabelOutlineIcon.react",
    "WAWebListSubmenuContentLoadable",
    "WAWebListsGatingUtils",
    "WAWebManageLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebNoop",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebStateUtils",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function (t) {
        var e = [o("WAWebStateUtils").unproxy(t)];
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
            modelsToUpdate: e,
            onClose: o("WAWebModalManager").closeModalManager,
            entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
              .CHAT_LONG_PRESS_OPTIONS,
          }),
        );
      },
      d = function (t) {
        r(
          "WAWebSmbDataSharingOptInModalDialog",
        ).maybeShowLabelDataSharingDialog(
          [t],
          r("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT,
          function () {
            return c(t);
          },
          o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
            .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
        );
      };
    function m(e) {
      var t = e.chat,
        n = e.multiSelection,
        r = e.onStartMultiSelect,
        a = e.searchQuery,
        i = e.selectableState;
      if (a && !a.isEmptyQuery()) {
        d(t);
        return;
      }
      if (t.archive) {
        d(t);
        return;
      }
      i &&
        n &&
        r &&
        (i.setSelectable(!0),
        n.setVal(o("WAWebStateUtils").unproxy(t)),
        r(
          o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.Label,
        ));
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.chat,
        a = e.multiSelection,
        i = e.onClickCallback,
        l = e.onStartMultiSelect,
        c = e.searchQuery,
        d = e.selectableState,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [o("WAWebChatGetters").getLabels]), (t[0] = p))
        : (p = t[0]);
      var _ = o("useWAWebChatValues").useChatValues(n.id, p),
        f = _[0],
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()
            ? s._(/*BTDS*/ "Label chat")
            : s._(/*BTDS*/ "Edit label")),
          (t[1] = g))
        : (g = t[1]);
      var h = g,
        y;
      t[2] !== n ||
      t[3] !== a ||
      t[4] !== i ||
      t[5] !== l ||
      t[6] !== c ||
      t[7] !== d
        ? ((y = function () {
            (i == null || i(),
              m({
                chat: n,
                multiSelection: a,
                onStartMultiSelect: l,
                searchQuery: c,
                selectableState: d,
              }));
          }),
          (t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = l),
          (t[6] = c),
          (t[7] = d),
          (t[8] = y))
        : (y = t[8]);
      var C = y,
        b;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b =
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_change_list_wds_submenu",
            ) === !0 && o("WAWebListsGatingUtils").isListsEnabled()),
          (t[9] = b))
        : (b = t[9]);
      var v = b,
        S;
      t[10] !== n || t[11] !== f
        ? ((S = v
            ? u.jsx(
                o("WAWebListSubmenuContentLoadable").ListSubmenuContentLoadable,
                {
                  chat: n,
                  chatLabels: f,
                  entryPoint: o("WAWebWamEnumUpdateEntryPoint")
                    .UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS,
                },
              )
            : void 0),
          (t[10] = n),
          (t[11] = f),
          (t[12] = S))
        : (S = t[12]);
      var R = S,
        L = v ? r("WAWebNoop") : C,
        E;
      return (
        t[13] !== R || t[14] !== L
          ? ((E = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                title: h,
                onPress: L,
                hasSubmenu: v,
                submenuContent: R,
                testid: void 0,
              },
              "EditLabel",
            )),
            (t[13] = R),
            (t[14] = L),
            (t[15] = E))
          : (E = t[15]),
        E
      );
    }
    ((l.checkDataSharingOrHandleLabelAction = d),
      (l.handleLabelMenuItemClick = m),
      (l.WAWebChatContextMenuItemEditLabel = p));
  },
  226,
);
