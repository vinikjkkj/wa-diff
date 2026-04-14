__d(
  "WAWebBroadcastInfoOverflowMenu.react",
  [
    "fbt",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBroadcastRenameModalLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebCmd",
    "WAWebCommonCTWADataSharing",
    "WAWebComposeBoxActions",
    "WAWebDropdownItem.react",
    "WAWebLabelOutlineIcon.react",
    "WAWebListsGatingUtils",
    "WAWebManageLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebStateUtils",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWidToJid",
    "WDSIconIcDelete.react",
    "WDSIconIcEdit.react",
    "WDSIconIcMoreVert.react",
    "WDSIconWdsIcChat.react",
    "WDSMenuBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.chat,
        a = e.entryPoint,
        i = e.onAudienceUpdate,
        l = e.onClose,
        c = e.onCloseFullScreen,
        d = e.showOpenThread,
        m = d === void 0 ? !1 : d,
        p = o("WAWebWidToJid").widToBroadcastJid(n.id),
        _ = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.openBroadcastThreadClicked(a, p),
            o("WAWebCmd")
              .Cmd.openChatFromUnread({ chat: n })
              .then(function (e) {
                e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
              }),
            c == null || c());
        },
        f = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.renameAudienceClicked(
            a,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
            p,
          ),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebBroadcastRenameModalLoadable")
                  .WAWebBroadcastRenameModalLoadable,
                {
                  chat: n,
                  entryPoint: a,
                  onClose: o("WAWebModalManager").closeModalManager,
                  onAudienceUpdate: i,
                  surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                    .BB_AUDIENCE_INFO_DRAWER,
                },
              ),
            ));
        },
        g = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.labelChatClicked(
            a,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
            p,
          ),
            r(
              "WAWebSmbDataSharingOptInModalDialog",
            ).maybeShowLabelDataSharingDialog(
              [n],
              r("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues
                .CHAT,
              function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable,
                    {
                      modelsToUpdate: [o("WAWebStateUtils").unproxy(n)],
                      onClose: function () {
                        return o("WAWebModalManager").ModalManager.close();
                      },
                      onLabelUpdateComplete: function () {
                        o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.labelChatSaved(
                          a,
                          o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                            .BB_AUDIENCE_INFO_DRAWER,
                          p,
                        );
                      },
                      entryPoint: o("WAWebWamEnumUpdateEntryPoint")
                        .UPDATE_ENTRY_POINT.BROADCAST_LIST_CHAT_INFO_OVERFLOW,
                    },
                  ),
                );
              },
              o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
            ));
        },
        h = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(
            a,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
            p,
          ),
            o("WAWebCmd").Cmd.deleteOrExitChat(n),
            l());
        },
        y =
          ((t = o(
            "WAWebAudienceExpressionTypes",
          ).getPredicateExpressionFromChat({
            broadcastMetadata:
              n.broadcastMetadata != null
                ? { audienceExpression: n.broadcastMetadata.audienceExpression }
                : null,
          })) == null
            ? void 0
            : t.predicateType) ===
          o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL,
        C = [];
      return (
        m &&
          C.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: _,
                icon: u.jsx(r("WDSIconWdsIcChat.react"), {}),
                children: s._(/*BTDS*/ "Open thread"),
              },
              "open-thread",
            ),
          ),
        o("WAWebListsGatingUtils").isListsEnabled()
          ? C.push(
              u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
                chat: n,
                displayContext: "chat-header",
                onSMBLabelMenuItemClick: g,
              }),
            )
          : C.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: g,
                  icon: u.jsx(
                    o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                    {},
                  ),
                  children: s._(/*BTDS*/ "Label chat"),
                },
                "label-chat",
              ),
            ),
        C.push(
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: f,
              disabled: y,
              icon: u.jsx(r("WDSIconIcEdit.react"), {}),
              children: s._(/*BTDS*/ "Rename audience"),
            },
            "rename-broadcast",
          ),
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: h,
              icon: u.jsx(r("WDSIconIcDelete.react"), {}),
              theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                .Negative,
              children: o(
                "WAWebBizBroadcastsHomeStrings",
              ).getDeleteAudienceLabel(),
            },
            "delete-broadcast",
          ),
        ),
        u.jsx(r("WDSMenuBarItem.react"), {
          testid: void 0,
          icon: r("WDSIconIcMoreVert.react"),
          title: s._(/*BTDS*/ "Menu"),
          dropdownMenu: { menu: C },
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
