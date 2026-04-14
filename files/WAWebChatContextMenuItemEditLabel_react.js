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
      var t = e.chat,
        n = e.multiSelection,
        a = e.onClickCallback,
        i = e.onStartMultiSelect,
        l = e.searchQuery,
        c = e.selectableState,
        d = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getLabels,
        ]),
        p = d[0],
        _ = o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()
          ? s._(/*BTDS*/ "Label chat")
          : s._(/*BTDS*/ "Edit label"),
        f = function () {
          (a == null || a(),
            m({
              chat: t,
              multiSelection: n,
              onStartMultiSelect: i,
              searchQuery: l,
              selectableState: c,
            }));
        },
        g =
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_change_list_wds_submenu",
          ) === !0 && o("WAWebListsGatingUtils").isListsEnabled(),
        h = g
          ? u.jsx(
              o("WAWebListSubmenuContentLoadable").ListSubmenuContentLoadable,
              {
                chat: t,
                chatLabels: p,
                entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .CHAT_LONG_PRESS_OPTIONS,
              },
            )
          : void 0;
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
          title: _,
          onPress: g ? r("WAWebNoop") : f,
          hasSubmenu: g,
          submenuContent: h,
          testid: void 0,
        },
        "EditLabel",
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.checkDataSharingOrHandleLabelAction = d),
      (l.handleLabelMenuItemClick = m),
      (l.WAWebChatContextMenuItemEditLabel = p));
  },
  226,
);
