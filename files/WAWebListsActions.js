__d(
  "WAWebListsActions",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      L,
      E = L || (L = o("react"));
    function k(e, t) {
      if (e.length !== 0) {
        var n =
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
            o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
          r = [String(t)];
        (o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(e, r, n),
          o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats(
            { isDataSharingEnabled: n, labelIds: r, models: e },
          ),
          o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(
            r,
            e,
            n,
          ));
      }
    }
    function I(t, n) {
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
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chats,
            n = e.color,
            r = e.entryPoint,
            a = e.name,
            i;
          try {
            i = yield o("WAWebBizLabelEditingAction").labelAddAction(a, n);
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
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                [l],
                t,
                {
                  listUpdateMode: o("WAWebLabelCollection").ListUpdateMode
                    .CREATE,
                },
              );
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
                labelOperation: o("WAWebWamEnumLabelOperations")
                  .LABEL_OPERATIONS.ADD,
                updateEntryPoint: r,
                listId: i,
                customListTitle: a,
              }),
              o("WAWebWamSmbListEventReporter").logSmbListEvent({
                labelOperation: o("WAWebWamEnumLabelOperations")
                  .LABEL_OPERATIONS.VIEW,
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
              I(t, {
                entryPoint: r,
                listId: i,
                customListTitle: a,
                listsApplied: String(i),
              }),
              k(t, i)),
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
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint,
            n = e.labelModel,
            r = e.newColor,
            a = e.newName,
            i = e.updatedAssociatedChats,
            l = n.name !== a,
            s = n.colorIndex !== r;
          try {
            (l || s) &&
              (yield o("WAWebBizLabelEditingAction").labelEditAction(
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
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                [C],
                d,
                { suppressSuccessToast: g || y },
              );
            }
            if (y) {
              var b = { id: String(n.id), type: "remove" };
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                [b],
                f,
                { suppressSuccessToast: g },
              );
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
                labelOperation: o("WAWebWamEnumLabelOperations")
                  .LABEL_OPERATIONS.RENAME,
                updateEntryPoint: t,
                listId: Number(n.id),
                customListTitle: a,
              })),
            s &&
              o("WAWebWamSmbListEventReporter").logSmbListEvent({
                labelOperation: o("WAWebWamEnumLabelOperations")
                  .LABEL_OPERATIONS.UPDATED_COLOR,
                updateEntryPoint: t,
                listId: Number(n.id),
              }),
            d.length !== 0 || f.length !== 0)
          ) {
            o("WAWebListsLogging").logListUpdate({
              listId: Number(n.id),
              listAction: o("WAWebWamEnumListAction").LIST_ACTION
                .UPDATE_MEMBERS,
              entryPoint: t,
              chatsBeforeUpdate: u,
              addedChats: d,
              removedChats: f,
            });
            var v = Number(n.id),
              S = String(v);
            (I(d, {
              entryPoint: t,
              listId: v,
              customListTitle: n.name,
              listsApplied: S,
            }),
              I(f, {
                entryPoint: t,
                listId: v,
                customListTitle: n.name,
                listsRemoved: S,
              }),
              k(d, v));
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
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          try {
            var a,
              i = o("WAWebLabelCollection").LabelCollection.get(e);
            if (i == null)
              return (
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[Lists] deleteListAction: label not found id=",
                      "",
                    ])),
                  e,
                ),
                (R || (R = n("Promise"))).resolve()
              );
            if (o("WAWebListUtils").hasFixedIdentity(i))
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
                    String(i.type),
                  )
                  .tags("lists")
                  .sendLogs("delete-app-owned-list-blocked"),
                (R || (R = n("Promise"))).resolve()
              );
            (yield o("WAWebBizLabelEditingAction").labelDeleteAction({
              color: i.colorIndex,
              labelId: i.id,
              name: i.name,
            }),
              o("WAWebListsLogging").logListUpdate({
                listId: Number(e),
                listAction: o("WAWebWamEnumListAction").LIST_ACTION.DELETE,
                entryPoint: r,
              }),
              o("WAWebWamSmbListEventReporter").logSmbListEvent({
                labelOperation: o("WAWebWamEnumLabelOperations")
                  .LABEL_OPERATIONS.DELETE,
                updateEntryPoint: r,
                listId: Number(e),
                customListTitle: i.name,
                predefinedId: (a = i.predefinedId) != null ? a : void 0,
              }),
              o("WAWebToastManager").ToastManager.open(
                E.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "List deleted"),
                }),
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
                E.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't delete list"),
                }),
              ));
          } finally {
            t();
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = o(
              "WAWebLabelCollection",
            ).LabelCollection.getNextOrderIndex();
            (yield o("WAWebBizLabelEditingAction").labelEditAction(
              e.id,
              e.name,
              e.predefinedId,
              e.colorIndex,
              !0,
              e.type,
            ),
              (e.orderIndex = t),
              o("WAWebToastManager").ToastManager.open(
                E.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "List enabled"),
                }),
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
                E.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't enable list"),
                }),
              ));
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (yield o("WAWebBizLabelEditingAction").labelEditAction(
              e.id,
              (t = e.name) != null ? t : "",
              e.predefinedId,
              e.colorIndex,
              !1,
              e.type,
            ),
              o("WAWebToastManager").ToastManager.open(
                E.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "List disabled"),
                }),
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
                E.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't disable list"),
                }),
              ));
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebListsGatingUtils").isLabelReorderEnabled() &&
            e.length !== 0
          ) {
            var t = e.map(function (e) {
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
                labelOperation: o("WAWebWamEnumLabelOperations")
                  .LABEL_OPERATIONS.REORDER,
                updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
                  .UPDATE_ENTRY_POINT.LIST_SETTINGS,
                currentListState: e.join("+"),
              }));
            try {
              var n = o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: o("WAWebSyncdConst").CollectionName.Regular,
                indexArgs: [],
                value: { labelReorderingAction: { sortedLabelIds: e } },
                version: r("WAWebLabelReorderingSync").getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: o("WATimeUtils").unixTimeMs(),
                action: r("WAWebLabelReorderingSync").getAction(),
              });
              yield o("WAWebSyncdCoreApi").lockForSync(
                ["label"],
                [n],
                function () {
                  return o("WAWebDBLabelsReorder").writeLabelsSortOrder(e);
                },
              );
            } catch (e) {
              (t.forEach(function (e) {
                var t = e.id,
                  n = e.orderIndex,
                  r = o("WAWebLabelCollection").LabelCollection.get(t);
                r && (r.orderIndex = n);
              }),
                o("WAWebLabelCollection").LabelCollection.trigger("reorder"),
                o("WAWebToastManager").ToastManager.open(
                  E.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not reorder lists"),
                  }),
                ),
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
        })),
        B.apply(this, arguments)
      );
    }
    ((l.logCtwaSignalsForChats = k),
      (l.logUpdateMembersPerChat = I),
      (l.createNewListAction = T),
      (l.editListAction = x),
      (l.deleteListAction = P),
      (l.activatePresetList = M),
      (l.deactivatePresetList = A),
      (l.persistLabelReorder = O));
  },
  226,
);
