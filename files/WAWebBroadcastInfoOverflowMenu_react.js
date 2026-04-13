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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(54),
        n = e.chat,
        a = e.entryPoint,
        i = e.onAudienceUpdate,
        l = e.onClose,
        c = e.onCloseFullScreen,
        m = e.showOpenThread,
        p = m === void 0 ? !1 : m,
        _;
      t[0] !== n.id
        ? ((_ = o("WAWebWidToJid").widToBroadcastJid(n.id)),
          (t[0] = n.id),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g;
      t[2] !== f || t[3] !== n || t[4] !== a || t[5] !== c
        ? ((g = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.openBroadcastThreadClicked(
              a,
              f,
            ),
              o("WAWebCmd")
                .Cmd.openChatFromUnread({ chat: n })
                .then(function (e) {
                  e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
                }),
              c == null || c());
          }),
          (t[2] = f),
          (t[3] = n),
          (t[4] = a),
          (t[5] = c),
          (t[6] = g))
        : (g = t[6]);
      var h = g,
        y;
      t[7] !== f || t[8] !== n || t[9] !== a || t[10] !== i
        ? ((y = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.renameAudienceClicked(
              a,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
              f,
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
          }),
          (t[7] = f),
          (t[8] = n),
          (t[9] = a),
          (t[10] = i),
          (t[11] = y))
        : (y = t[11]);
      var C = y,
        b;
      t[12] !== f || t[13] !== n || t[14] !== a
        ? ((b = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.labelChatClicked(
              a,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
              f,
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
                        onClose: d,
                        onLabelUpdateComplete: function () {
                          o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.labelChatSaved(
                            a,
                            o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                              .BB_AUDIENCE_INFO_DRAWER,
                            f,
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
          }),
          (t[12] = f),
          (t[13] = n),
          (t[14] = a),
          (t[15] = b))
        : (b = t[15]);
      var v = b,
        S;
      t[16] !== f || t[17] !== n || t[18] !== a || t[19] !== l
        ? ((S = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(
              a,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
              f,
            ),
              o("WAWebCmd").Cmd.deleteOrExitChat(n),
              l());
          }),
          (t[16] = f),
          (t[17] = n),
          (t[18] = a),
          (t[19] = l),
          (t[20] = S))
        : (S = t[20]);
      var R = S,
        L;
      if (t[21] !== n.broadcastMetadata) {
        var E;
        ((L =
          (E = o("WAWebAudienceExpressionTypes").getPredicateExpressionFromChat(
            {
              broadcastMetadata:
                n.broadcastMetadata != null
                  ? {
                      audienceExpression:
                        n.broadcastMetadata.audienceExpression,
                    }
                  : null,
            },
          )) == null
            ? void 0
            : E.predicateType),
          (t[21] = n.broadcastMetadata),
          (t[22] = L));
      } else L = t[22];
      var k = L === o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL,
        I;
      if (
        t[23] !== n ||
        t[24] !== R ||
        t[25] !== v ||
        t[26] !== h ||
        t[27] !== C ||
        t[28] !== k ||
        t[29] !== p
      ) {
        if (((I = []), p)) {
          var T, D;
          t[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = u.jsx(r("WDSIconWdsIcChat.react"), {})),
              (D = s._(/*BTDS*/ "Open thread")),
              (t[31] = T),
              (t[32] = D))
            : ((T = t[31]), (D = t[32]));
          var x;
          (t[33] !== h
            ? ((x = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: h, icon: T, children: D },
                "open-thread",
              )),
              (t[33] = h),
              (t[34] = x))
            : (x = t[34]),
            I.push(x));
        }
        if (o("WAWebListsGatingUtils").isListsEnabled()) {
          var $;
          (t[35] !== n || t[36] !== v
            ? (($ = u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
                chat: n,
                displayContext: "chat-header",
                onSMBLabelMenuItemClick: v,
              })),
              (t[35] = n),
              (t[36] = v),
              (t[37] = $))
            : ($ = t[37]),
            I.push($));
        } else {
          var P, N;
          t[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = u.jsx(
                o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                {},
              )),
              (N = s._(/*BTDS*/ "Label chat")),
              (t[38] = P),
              (t[39] = N))
            : ((P = t[38]), (N = t[39]));
          var M;
          (t[40] !== v
            ? ((M = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { testid: void 0, action: v, icon: P, children: N },
                "label-chat",
              )),
              (t[40] = v),
              (t[41] = M))
            : (M = t[41]),
            I.push(M));
        }
        var w, A;
        t[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = u.jsx(r("WDSIconIcEdit.react"), {})),
            (A = s._(/*BTDS*/ "Rename audience")),
            (t[42] = w),
            (t[43] = A))
          : ((w = t[42]), (A = t[43]));
        var F;
        t[44] !== C || t[45] !== k
          ? ((F = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { testid: void 0, action: C, disabled: k, icon: w, children: A },
              "rename-broadcast",
            )),
            (t[44] = C),
            (t[45] = k),
            (t[46] = F))
          : (F = t[46]);
        var O;
        t[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = u.jsx(r("WDSIconIcDelete.react"), {})), (t[47] = O))
          : (O = t[47]);
        var B;
        t[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = o("WAWebBizBroadcastsHomeStrings").getDeleteAudienceLabel()),
            (t[48] = B))
          : (B = t[48]);
        var W;
        (t[49] !== R
          ? ((W = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: R,
                icon: O,
                theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                  .Negative,
                children: B,
              },
              "delete-broadcast",
            )),
            (t[49] = R),
            (t[50] = W))
          : (W = t[50]),
          I.push(F, W),
          (t[23] = n),
          (t[24] = R),
          (t[25] = v),
          (t[26] = h),
          (t[27] = C),
          (t[28] = k),
          (t[29] = p),
          (t[30] = I));
      } else I = t[30];
      var q;
      t[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = s._(/*BTDS*/ "Menu")), (t[51] = q))
        : (q = t[51]);
      var U;
      return (
        t[52] !== I
          ? ((U = u.jsx(r("WDSMenuBarItem.react"), {
              testid: void 0,
              icon: r("WDSIconIcMoreVert.react"),
              title: q,
              dropdownMenu: { menu: I },
            })),
            (t[52] = I),
            (t[53] = U))
          : (U = t[53]),
        U
      );
    }
    function d() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
