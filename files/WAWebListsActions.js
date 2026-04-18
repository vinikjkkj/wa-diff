__d(
  "WAWebListsActions",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBIzLabelReorderAction",
    "WAWebBizLabelEditingAction",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwaConversationDepthUtils",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelReorderingSync",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebListsUtil",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumLastMessageDirection",
    "WAWebWamEnumListAction",
    "WAWebWamEnumUpdateEntryPoint",
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
      E,
      k,
      I,
      T,
      D = T || (T = o("react"));
    function x(t, n) {
      var a = n.customListTitle,
        i = n.entryPoint,
        l = n.listId,
        s = n.listsApplied,
        u = n.listsRemoved,
        c = function (n) {
          var t = o("WAWebChatGetters").getIsGroup(n);
          if (t)
            o("WAWebWamSmbListEventReporter").logSmbListEvent({
              labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                .UPDATE_MEMBERS,
              updateEntryPoint: i,
              listId: l,
              customListTitle: a,
              labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.GROUP,
              listsApplied: s,
              listsRemoved: u,
            });
          else {
            var c,
              d = r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(n),
              m = (c = n.msgs) == null ? void 0 : c.getModelsArray().at(-1),
              p;
            (m != null &&
              (p = m.id.fromMe
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
                    updateEntryPoint: i,
                    listId: l,
                    customListTitle: a,
                    labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS
                      .CONTACT,
                    listsApplied: s,
                    listsRemoved: u,
                    threadIdHmac: e != null ? e : void 0,
                    entryPointConversionSource: d != null ? "ctwa_ad" : void 0,
                    messageDepth: o(
                      "WAWebCtwaConversationDepthUtils",
                    ).getCtwaConversationDepth(n),
                    lastMessageDirection: p,
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
      for (var d of t) c(d);
    }
    function $(e, t, n, r) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (!o("WAWebListsGatingUtils").isListsEnabled()) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] createNewList: lists not enabled",
                  ])),
              );
              return;
            }
            var a;
            try {
              a = yield o("WAWebBizLabelEditingAction").labelAddAction(e, n);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[Lists] createNewList: failed to add new empty list",
                    ])),
                )
                .tags("lists")
                .sendLogs("create-new-list-failed");
              return;
            }
            if (t.length > 0) {
              var i = { id: String(a), type: "add" };
              try {
                o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                  [i],
                  t,
                  {
                    listUpdateMode: o("WAWebLabelCollection").ListUpdateMode
                      .CREATE,
                  },
                );
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lists] createNewList: failed to assign label to chats",
                      ])),
                  )
                  .tags("lists")
                  .sendLogs("create-new-list-failed");
                return;
              }
            }
            return (
              a != null &&
                (o("WAWebListsLogging").logListUpdate({
                  listId: a,
                  listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
                  entryPoint: r,
                  chatsBeforeUpdate: [],
                  addedChats: t,
                  removedChats: [],
                }),
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                  labelOperation: o("WAWebWamEnumLabelOperations")
                    .LABEL_OPERATIONS.ADD,
                  updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
                    .UPDATE_ENTRY_POINT.CREATE_CUSTOM_LIST,
                  listId: a,
                  customListTitle: e,
                }),
                x(t, {
                  entryPoint: r,
                  listId: a,
                  customListTitle: e,
                  listsApplied: String(a),
                })),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] created list id=",
                    " color=",
                    " chats=",
                    "",
                  ])),
                a,
                n,
                t.length,
              ),
              a
            );
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint,
            n = e.labelModel,
            r = e.newColor,
            a = e.newName,
            i = e.updatedAssociatedChats;
          if (!o("WAWebListsGatingUtils").isListsEnabled()) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lists] editListAction: lists not enabled",
                ])),
            );
            return;
          }
          var l = n.name !== a,
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            m = c.removedItems;
          try {
            if (d.length > 0) {
              var h = { id: String(n.id), type: "add" };
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                [h],
                d,
              );
            }
            if (m.length > 0) {
              var y = { id: String(n.id), type: "remove" };
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                [y],
                m,
              );
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
            d.length !== 0 || m.length !== 0)
          ) {
            o("WAWebListsLogging").logListUpdate({
              listId: Number(n.id),
              listAction: o("WAWebWamEnumListAction").LIST_ACTION
                .UPDATE_MEMBERS,
              entryPoint: t,
              chatsBeforeUpdate: u,
              addedChats: d,
              removedChats: m,
            });
            var C = Number(n.id),
              b = String(C);
            (x(d, {
              entryPoint: t,
              listId: C,
              customListTitle: n.name,
              listsApplied: b,
            }),
              x(m, {
                entryPoint: t,
                listId: C,
                customListTitle: n.name,
                listsRemoved: b,
              }));
          }
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] saved list id=",
                " color=",
                " chats=",
                "",
              ])),
            n.id,
            r,
            i.length,
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (!o("WAWebListsGatingUtils").isListsEnabled())
            return (
              o("WALogger").ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] deleteListAction: lists not enabled",
                  ])),
              ),
              (I || (I = n("Promise"))).resolve()
            );
          try {
            var a = o("WAWebLabelCollection").LabelCollection.get(e);
            if (a == null)
              return (
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[Lists] deleteListAction: label not found id=",
                      "",
                    ])),
                  e,
                ),
                (I || (I = n("Promise"))).resolve()
              );
            (yield o("WAWebBizLabelEditingAction").labelDeleteAction(
              a.id,
              a.name,
              a.colorIndex,
            ),
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
                customListTitle: a.name,
              }),
              o("WAWebToastManager").ToastManager.open(
                D.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "List deleted"),
                }),
              ),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    '[Lists] Successfully deleted list: id: "',
                    '"',
                  ])),
                e,
              ));
          } catch (t) {
            (o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    '[Lists] deleteListAction: Failed deleting list with id:"',
                    '"',
                  ])),
                e,
              )
              .tags("lists")
              .sendLogs("delete-list-failed"),
              o("WAWebToastManager").ToastManager.open(
                D.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to delete list"),
                }),
              ));
          } finally {
            t();
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebListsGatingUtils").isListsEnabled()) {
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lists] activatePresetList: lists not enabled",
                ])),
            );
            return;
          }
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
                D.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "List enabled"),
                }),
              ));
          } catch (e) {
            (o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] activatePresetList: failed to activate preset list",
                  ])),
              )
              .tags("lists")
              .sendLogs("activate-preset-list-failed"),
              o("WAWebToastManager").ToastManager.open(
                D.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to enable list"),
                }),
              ));
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebListsGatingUtils").isListsEnabled()) {
            o("WALogger").ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lists] deactivatePresetList: lists not enabled",
                ])),
            );
            return;
          }
          if (!o("WAWebListUtils").isDisableablePresetList(e.type)) {
            o("WALogger").ERROR(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
                D.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "List disabled"),
                }),
              ));
          } catch (e) {
            (o("WALogger")
              .ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] deactivatePresetList: deactivate failed",
                  ])),
              )
              .tags("lists")
              .sendLogs("deactivate-preset-list-failed"),
              o("WAWebToastManager").ToastManager.open(
                D.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to disable list"),
                }),
              ));
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebListsGatingUtils").isListsM2Enabled() && e.length !== 0) {
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
              var a = o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: o("WASyncdConst").CollectionName.Regular,
                indexArgs: [],
                value: { labelReorderingAction: { sortedLabelIds: e } },
                version: r("WAWebLabelReorderingSync").getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: o("WATimeUtils").unixTimeMs(),
                action: r("WAWebLabelReorderingSync").getAction(),
              });
              yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
                return (I || (I = n("Promise"))).resolve();
              });
            } catch (e) {
              (t.forEach(function (e) {
                var t = e.id,
                  n = e.orderIndex,
                  r = o("WAWebLabelCollection").LabelCollection.get(t);
                r && (r.orderIndex = n);
              }),
                o("WAWebLabelCollection").LabelCollection.trigger("reorder"),
                o("WAWebToastManager").ToastManager.open(
                  D.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not reorder lists"),
                  }),
                ),
                o("WALogger")
                  .ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lists] persistLabelReorder: failed to persist order",
                      ])),
                  )
                  .sendLogs("lists-reorder-persist-failed"));
            }
          }
        })),
        U.apply(this, arguments)
      );
    }
    ((l.logUpdateMembersPerChat = x),
      (l.createNewListAction = $),
      (l.editListAction = N),
      (l.deleteListAction = w),
      (l.activatePresetList = F),
      (l.deactivatePresetList = B),
      (l.persistLabelReorder = q));
  },
  226,
);
