__d(
  "WAWebListsActions",
  [
    "fbt",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebBIzLabelReorderAction",
    "WAWebBizLabelEditingAction",
    "WAWebCTWADataSharingModel",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwaConversationDepthUtils",
    "WAWebCustomLabels3pdSignalUtils",
    "WAWebDBLabelsReorder",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelReorderingSync",
    "WAWebLeadStage",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebListsUtil",
    "WAWebProtobufsServerSync.pb",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXLabelAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumLastMessageDirection",
    "WAWebWamEnumListAction",
    "WAWebWamEnumSmbListFeatureNameType",
    "WAWebWamEnumSmbListSurfaceType",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamLabelEventReporter",
    "WAWebWamSmbListEventReporter",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = R || (R = o("react"));
    function E(e, t, n) {
      if (
        e.length !== 0 &&
        !(
          !o("WAWebLeadStage").shouldSendLeadSignal(n) &&
          o("WAWebListUtils").isLeadList(
            o("WAWebLabelCollection").LabelCollection.get(String(t)),
          )
        )
      ) {
        var r =
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
            o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
          a = [String(t)];
        (o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(e, a, r),
          o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats(
            { isDataSharingEnabled: r, labelIds: a, models: e },
          ),
          o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(
            a,
            e,
            r,
          ));
      }
    }
    function k(t, n) {
      var r = n.customListTitle,
        a = n.entryPoint,
        i = n.listId,
        l = n.listsApplied,
        s = n.listsRemoved,
        u = function (n) {
          var t = o("WAWebChatGetters").getIsGroup(n);
          if (t)
            o("WAWebWamSmbListEventReporter").logSmbListEvent({
              labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                .UPDATE_MEMBERS,
              updateEntryPoint: a,
              listId: i,
              customListTitle: r,
              labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.GROUP,
              listsApplied: l,
              listsRemoved: s,
            });
          else {
            var u,
              c = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(n),
              d = (u = n.msgs) == null ? void 0 : u.getModelsArray().at(-1),
              m;
            (d != null &&
              (m = d.id.fromMe
                ? o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION
                    .SELF_INITIATED
                : o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION
                    .OPPOSITE_PARTY_INITIATED),
              o("WAWebChatThreadLogging")
                .getChatThreadIDHMAC(n.id.toString())
                .then(function (e) {
                  o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations")
                      .LABEL_OPERATIONS.UPDATE_MEMBERS,
                    updateEntryPoint: a,
                    listId: i,
                    customListTitle: r,
                    labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS
                      .CONTACT,
                    listsApplied: l,
                    listsRemoved: s,
                    threadIdHmac: e != null ? e : void 0,
                    entryPointConversionSource: c != null ? "ctwa_ad" : void 0,
                    messageDepth: o(
                      "WAWebCtwaConversationDepthUtils",
                    ).getCtwaConversationDepth(n),
                    lastMessageDirection: m,
                  });
                })
                .catch(function () {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lists] failed to get threadIdHmac for SmbListEvent logging",
                      ])),
                  );
                }));
          }
        };
      for (var c of t) u(c);
    }
    async function I(e) {
      var t = e.chats,
        n = e.color,
        r = e.entryPoint,
        a = e.name,
        i;
      try {
        i = await o("WAWebBizLabelEditingAction").labelAddAction(a, n);
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] createNewList: failed to add new empty list",
              ])),
          )
          .tags("lists")
          .sendLogs("create-new-list-failed");
        return;
      }
      if (t.length > 0) {
        var l = { id: String(i), type: "add" };
        try {
          o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([l], t, {
            listUpdateMode: o("WAWebLabelCollection").ListUpdateMode.CREATE,
          });
        } catch (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lists] createNewList: failed to assign label to chats",
                ])),
            )
            .tags("lists")
            .sendLogs("create-new-list-failed");
          return;
        }
      }
      return (
        i != null &&
          (o("WAWebListsLogging").logListUpdate({
            listId: i,
            listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
            entryPoint: r,
            chatsBeforeUpdate: [],
            addedChats: t,
            removedChats: [],
          }),
          o("WAWebWamSmbListEventReporter").logSmbListEvent({
            labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
              .ADD,
            updateEntryPoint: r,
            listId: i,
            customListTitle: a,
          }),
          o("WAWebWamSmbListEventReporter").logSmbListEvent({
            labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
              .VIEW,
            updateEntryPoint: r,
            listId: i,
            smbListSurface: o("WAWebWamEnumSmbListSurfaceType")
              .SMB_LIST_SURFACE_TYPE.NEW_LIST,
            smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType")
              .SMB_LIST_FEATURE_NAME_TYPE.LISTS_CREATION,
            extraAttributes: JSON.stringify({ new_list_is_visible: !0 }),
          }),
          o("WAWebWamLabelEventReporter").logLabelOperationEvent(
            o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD,
            void 0,
            o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL,
          ),
          k(t, {
            entryPoint: r,
            listId: i,
            customListTitle: a,
            listsApplied: String(i),
          }),
          E(t, i)),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[Lists] created list id=",
              " color=",
              " chats=",
              "",
            ])),
          i,
          n,
          t.length,
        ),
        i
      );
    }
    async function T(e) {
      var t = e.entryPoint,
        n = e.labelModel,
        r = e.newColor,
        a = e.newName,
        i = e.updatedAssociatedChats,
        l = n.name !== a,
        s = n.colorIndex !== r;
      try {
        (l || s) &&
          (await o("WAWebBizLabelEditingAction").labelEditAction(
            n.id,
            a,
            o("WAWebLabelConstants").mapLabelNameToPredefinedId(a),
            r,
            n.isActive,
            n.type,
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] editListAction: failed to edit list properties",
              ])),
          )
          .tags("lists")
          .sendLogs("edit-list-failed");
        return;
      }
      var u = o("WAWebListsUtil").getAllChatsInList(n),
        c = o("WAWebListsUtil").getTwoArraysDifference(u, i),
        d = c.addedItems,
        f = c.removedItems,
        g = l || s,
        h = d.length > 0,
        y = f.length > 0;
      try {
        if (h) {
          var C = { id: String(n.id), type: "add" };
          o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([C], d, {
            suppressSuccessToast: g || y,
          });
        }
        if (y) {
          var b = { id: String(n.id), type: "remove" };
          o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([b], f, {
            suppressSuccessToast: g,
          });
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] editListAction: failed to edit list chats",
              ])),
          )
          .tags("lists")
          .sendLogs("edit-list-failed");
        return;
      }
      if (
        (l &&
          (o("WAWebListsLogging").logListUpdate({
            listId: Number(n.id),
            listAction: o("WAWebWamEnumListAction").LIST_ACTION.RENAME,
            entryPoint: t,
          }),
          o("WAWebWamSmbListEventReporter").logSmbListEvent({
            labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
              .RENAME,
            updateEntryPoint: t,
            listId: Number(n.id),
            customListTitle: a,
          })),
        s &&
          o("WAWebWamSmbListEventReporter").logSmbListEvent({
            labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
              .UPDATED_COLOR,
            updateEntryPoint: t,
            listId: Number(n.id),
          }),
        d.length !== 0 || f.length !== 0)
      ) {
        o("WAWebListsLogging").logListUpdate({
          listId: Number(n.id),
          listAction: o("WAWebWamEnumListAction").LIST_ACTION.UPDATE_MEMBERS,
          entryPoint: t,
          chatsBeforeUpdate: u,
          addedChats: d,
          removedChats: f,
        });
        var v = Number(n.id),
          S = String(v);
        (k(d, {
          entryPoint: t,
          listId: v,
          customListTitle: n.name,
          listsApplied: S,
        }),
          k(f, {
            entryPoint: t,
            listId: v,
            customListTitle: n.name,
            listsRemoved: S,
          }),
          E(d, v));
      }
      ((l || s) &&
        o("WAWebWamLabelEventReporter").logLabelOperationEvent(
          o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.EDIT,
          void 0,
          o("WAWebWamEnumLabelTargets").LABEL_TARGETS.EDIT_LABEL_DIALOG,
        ),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[Lists] saved list id=",
              " color=",
              " chats=",
              "",
            ])),
          n.id,
          r,
          i.length,
        ));
    }
    async function D(e, t, n) {
      try {
        var r,
          a = o("WAWebLabelCollection").LabelCollection.get(e);
        if (a == null)
          return (
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lists] deleteListAction: label not found id=",
                  "",
                ])),
              e,
            ),
            Promise.resolve()
          );
        if (o("WAWebListUtils").hasFixedIdentity(a))
          return (
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] deleteListAction: refusing to delete app-owned list id=",
                    " type=",
                    "",
                  ])),
                e,
                String(a.type),
              )
              .tags("lists")
              .sendLogs("delete-app-owned-list-blocked"),
            Promise.resolve()
          );
        (await o("WAWebBizLabelEditingAction").labelDeleteAction({
          color: a.colorIndex,
          labelId: a.id,
          name: a.name,
        }),
          o("WAWebListsLogging").logListUpdate({
            listId: Number(e),
            listAction: o("WAWebWamEnumListAction").LIST_ACTION.DELETE,
            entryPoint: n,
          }),
          o("WAWebWamSmbListEventReporter").logSmbListEvent({
            labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
              .DELETE,
            updateEntryPoint: n,
            listId: Number(e),
            customListTitle: a.name,
            predefinedId: (r = a.predefinedId) != null ? r : void 0,
          }),
          o("WAWebToastManager").ToastManager.open(
            L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                '[Lists] Successfully deleted list: id: "',
                '"',
              ])),
            e,
          ));
      } catch (t) {
        (o("WALogger")
          .ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                '[Lists] deleteListAction: Failed deleting list with id:"',
                '"',
              ])),
            e,
          )
          .tags("lists")
          .sendLogs("delete-list-failed"),
          o("WAWebToastManager").ToastManager.open(
            L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ));
      } finally {
        t();
      }
    }
    async function x(e) {
      await r("nullthrows")(
        await o("WAWebListUtils").loadMetaAiList(),
      ).updateMetaAiListActive(e);
    }
    async function $(e) {
      try {
        if (o("WAWebListUtils").isDeviceLocalList(e)) {
          (await x(!0),
            o("WAWebToastManager").ToastManager.open(
              L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
            ));
          return;
        }
        var t = o("WAWebLabelCollection").LabelCollection.getNextOrderIndex();
        (await o("WAWebBizLabelEditingAction").labelEditAction(
          e.id,
          e.name,
          e.predefinedId,
          e.colorIndex,
          !0,
          e.type,
        ),
          (e.orderIndex = t),
          o("WAWebToastManager").ToastManager.open(
            L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ));
      } catch (e) {
        (o("WALogger")
          .ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] activatePresetList: failed to activate preset list",
              ])),
          )
          .tags("lists")
          .sendLogs("activate-preset-list-failed"),
          o("WAWebToastManager").ToastManager.open(
            L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ));
      }
    }
    async function P(e) {
      if (!o("WAWebListUtils").isDisableablePresetList(e.type)) {
        o("WALogger").ERROR(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[Lists] deactivatePresetList: not a disableable preset list",
            ])),
        );
        return;
      }
      try {
        var t;
        if (o("WAWebListUtils").isDeviceLocalList(e)) {
          (await x(!1),
            o("WAWebToastManager").ToastManager.open(
              L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
            ));
          return;
        }
        (await o("WAWebBizLabelEditingAction").labelEditAction(
          e.id,
          (t = e.name) != null ? t : "",
          e.predefinedId,
          e.colorIndex,
          !1,
          e.type,
        ),
          o("WAWebToastManager").ToastManager.open(
            L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ));
      } catch (e) {
        (o("WALogger")
          .ERROR(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] deactivatePresetList: deactivate failed",
              ])),
          )
          .tags("lists")
          .sendLogs("deactivate-preset-list-failed"),
          o("WAWebToastManager").ToastManager.open(
            L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ));
      }
    }
    function N(e) {
      (e.forEach(function (e) {
        var t = e.id,
          n = e.orderIndex,
          r = o("WAWebLabelCollection").LabelCollection.get(t);
        r && (r.orderIndex = n);
      }),
        o("WAWebLabelCollection").LabelCollection.trigger("reorder"));
    }
    async function M(e) {
      if (o("WAWebListsGatingUtils").isLabelReorderEnabled()) {
        var t = e.filter(function (e) {
          return String(e) !== o("WAWebListUtils").META_AI_LIST_ID;
        });
        if (t.length !== 0) {
          var n = []
            .concat(t, [Number(o("WAWebListUtils").META_AI_LIST_ID)])
            .map(function (e) {
              var t,
                n = o("WAWebLabelCollection").LabelCollection.get(String(e));
              return {
                id: String(e),
                orderIndex:
                  (t = n == null ? void 0 : n.orderIndex) != null ? t : 0,
              };
            });
          (o("WAWebBIzLabelReorderAction").reorderLabelsAction(e),
            o("WAWebWamSmbListEventReporter").logSmbListEvent({
              labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                .REORDER,
              updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
                .UPDATE_ENTRY_POINT.LIST_SETTINGS,
              currentListState: t.join("+"),
            }));
          try {
            var a = o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: o("WAWebSyncdConst").CollectionName.Regular,
                indexArgs: [],
                value: { labelReorderingAction: { sortedLabelIds: t } },
                version: r("WAWebLabelReorderingSync").getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: o("WATimeUtils").unixTimeMs(),
                action: r("WAWebLabelReorderingSync").getAction(),
              }),
              i = await o(
                "WAWebDBLabelsReorder",
              ).loadMetaAiListOrderForReorder();
            await o("WAWebSyncdCoreApi").lockForSync(
              ["label"],
              [a],
              function () {
                return o("WAWebDBLabelsReorder").writeLabelsSortOrder(t, i);
              },
            );
            var l = e.indexOf(Number(o("WAWebListUtils").META_AI_LIST_ID));
            if (l !== -1) {
              var s = await (i == null
                ? void 0
                : i.placeMetaAiListAfter(e.slice(0, l).reverse().map(String)));
              (s == null ? void 0 : s.orderIndex) == null &&
                N(
                  n.filter(function (e) {
                    var t = e.id;
                    return t === o("WAWebListUtils").META_AI_LIST_ID;
                  }),
                );
              var u =
                s == null
                  ? o("WAWebListUtils").isMetaAiListEnabled()
                  : !s.moved;
              u && w();
            }
          } catch (e) {
            (N(n),
              w(),
              o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[Lists] persistLabelReorder: failed to persist order",
                    ])),
                )
                .sendLogs("lists-reorder-persist-failed"));
          }
        }
      }
    }
    function w() {
      o("WAWebToastManager").ToastManager.open(
        L.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    ((l.logCtwaSignalsForChats = E),
      (l.logUpdateMembersPerChat = k),
      (l.createNewListAction = I),
      (l.editListAction = T),
      (l.deleteListAction = D),
      (l.activatePresetList = $),
      (l.deactivatePresetList = P),
      (l.persistLabelReorder = M));
  },
  226,
);
