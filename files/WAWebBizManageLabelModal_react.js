__d(
  "WAWebBizManageLabelModal.react",
  [
    "fbt",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebBizLabelEditingAction",
    "WAWebBizLabelUtils",
    "WAWebButton.react",
    "WAWebCTWAConstants",
    "WAWebCTWADataSharingModel",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwaConversationDepthUtils",
    "WAWebCustomLabels3pdSignalUtils",
    "WAWebDataSharingOptOutOrUpsell.react",
    "WAWebDataSharingUpsellModel",
    "WAWebDrawerHeader.react",
    "WAWebFbtCommon",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelsMultiSelectLabelList.react",
    "WAWebListItemParentType",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebModal.react",
    "WAWebMultiSelection",
    "WAWebNoop",
    "WAWebSchemaLabel",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXLabelAction",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumLastMessageDirection",
    "WAWebWamEnumListAction",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamLabelEventReporter",
    "WAWebWamSmbListEventReporter",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "useWAWebForceUpdate",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useState,
      g = { NONE_SELECTED: 0, ALL_SELECTED: 1, PARTIALLY_SELECTED: 2 },
      h = function () {
        return (
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
          o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
        );
      };
    function y(e) {
      if (e != null)
        return e ===
          o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CONTACT_INFO
          ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints
              .CONTACT_INFO
          : e ===
              o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.GROUP_INFO
            ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints
                .GROUP_INFO
            : e ===
                o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                  .CHAT_MORE_OPTIONS
              ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints
                  .CHAT_OVERFLOW
              : e ===
                  o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                    .CHAT_LONG_PRESS_OPTIONS
                ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints
                    .CHAT_LIST_CONTEXT_MENU
                : e ===
                    o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                      .LIST_SETTINGS
                  ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints
                      .LIST_SETTINGS
                  : e ===
                      o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                        .LIST_NUX
                    ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints
                        .LIST_NUX
                    : e ===
                        o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                          .BROADCAST_LIST_CHAT_INFO_OVERFLOW
                      ? o("WAWebWamLabelEventReporter")
                          .LabelOperationEntryPoints
                          .BROADCAST_LIST_CHAT_INFO_OVERFLOW
                      : void 0;
    }
    function C(t) {
      "use no forget";
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u),
        l = f(h),
        c = l[0],
        m = l[1];
      p(function () {
        return function () {
          r("WAWebDataSharingUpsellModel").enableUpsell();
        };
      }, []);
      var C = i.entryPoint,
        b = i.modelsToUpdate,
        v = i.onLabelUpdateComplete,
        S = o("WAWebListsGatingUtils").isListsEnabled(),
        R = _(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id;
          });
        }, []),
        L = f([]),
        E = L[0],
        k = L[1],
        I = f(function () {
          return new Map();
        }),
        T = I[0],
        D = I[1],
        x = _(
          function () {
            return new Set(T.keys());
          },
          [T],
        ),
        $ = function (t) {
          var e = t.predefinedId;
          (D(function (n) {
            var r = new Map(n);
            return (r.has(e) ? r.delete(e) : r.set(e, t), r);
          }),
            k(function (t) {
              return t.includes("suggestion_" + e)
                ? t.filter(function (t) {
                    return t !== "suggestion_" + e;
                  })
                : [].concat(t, ["suggestion_" + e]);
            }),
            o("WAWebWamSmbListEventReporter").logSmbListEvent({
              labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                .SUGGESTION_CLICKED,
              updateEntryPoint: C != null ? C : void 0,
              predefinedId: t.predefinedId,
            }));
        },
        P = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        N = _(function () {
          var e = function () {
              var e,
                t = {},
                n = S
                  ? (e = o("WAWebLabelCollection").LabelCollection.findFirst(
                      function (e) {
                        return (
                          e.type === o("WAWebSchemaLabel").ListType.FAVORITES
                        );
                      },
                    )) == null
                    ? void 0
                    : e.id
                  : null;
              return (
                b.forEach(function (e) {
                  var r = o("WAWebStateUtils").unproxy(e);
                  (r.labels &&
                    r.labels.forEach(function (e) {
                      t[e] = t[e] ? ++t[e] : 1;
                    }),
                    r.isFavorite === !0 &&
                      n != null &&
                      (t[n] = t[n] ? ++t[n] : 1));
                }),
                t
              );
            },
            t = e(),
            n = {};
          return (
            Object.entries(t).forEach(function (e) {
              var t = e[0],
                r = e[1];
              if (r === b.length) n[t] = g.ALL_SELECTED;
              else if (r > 0) {
                n[t] = g.PARTIALLY_SELECTED;
                return;
              } else n[t] = g.NONE_SELECTED;
            }),
            n
          );
        }, []),
        M = function (t) {
          t != null &&
            (N[t] === g.PARTIALLY_SELECTED
              ? k(function (e) {
                  return [].concat(e, ["{labelId}_changed"]);
                })
              : E.includes(t)
                ? k(function (e) {
                    return e.filter(function (e) {
                      return e !== t;
                    });
                  })
                : (N[t] == null &&
                    o("WAWebBizGatingUtils").labelsEditingEnabled() &&
                    (N[t] = g.ALL_SELECTED),
                  k(function (e) {
                    return e.includes(t) ? e : [].concat(e, [t]);
                  })),
            P());
        },
        w = function () {
          o("WAWebListsUtil").logLabelOperationEventsForModels(b);
          var t = R.list,
            a = R.selected,
            i = [],
            l = [],
            s = [],
            u = new Map();
          if (
            (t.forEach(function (e, t) {
              if (
                (a[t] ? i.push(e.id) : l.push(e.id),
                s.push(
                  babelHelpers.extends(
                    { id: e.id, type: a[t] ? "add" : "remove" },
                    e.type != null && { listType: e.type },
                  ),
                ),
                C != null && S)
              ) {
                var n = o("WAWebLabelCollection").LabelCollection.get(e.id);
                n != null &&
                  u.set(e.id, o("WAWebListsUtil").getAllChatsInList(n));
              }
            }),
            o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(s, b),
            C != null && S)
          ) {
            var d = r("compactMap")(b, function (e) {
              return o("WAWebChatCollection").ChatCollection.get(e.id);
            });
            (s.forEach(function (e) {
              var t = u.get(e.id);
              if (t != null) {
                var n, r;
                (e.type === "add" ? (n = d) : e.type === "remove" && (r = d),
                  o("WAWebListsLogging").logListUpdate({
                    listId: Number(e.id),
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION
                      .UPDATE_MEMBERS,
                    entryPoint: C,
                    chatsBeforeUpdate: t,
                    addedChats: n,
                    removedChats: r,
                  }));
              }
            }),
              d.forEach(function (e) {
                var t = o("WAWebChatGetters").getIsGroup(e),
                  n = i.length > 0 ? i.join("+") : void 0,
                  a = l.length > 0 ? l.join("+") : void 0;
                if (t)
                  o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations")
                      .LABEL_OPERATIONS.UPDATE_MEMBERS,
                    updateEntryPoint: C,
                    labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS
                      .GROUP,
                    bulkLabeling: b.length > 1,
                    listsApplied: n,
                    listsRemoved: a,
                  });
                else {
                  var s,
                    u = r(
                      "WAWebCommonCTWADataSharing",
                    ).getCTWAEligibilityFromChat(e),
                    c =
                      (s = e.msgs) == null ? void 0 : s.getModelsArray().at(-1),
                    d;
                  (c != null &&
                    (d = c.id.fromMe
                      ? o("WAWebWamEnumLastMessageDirection")
                          .LAST_MESSAGE_DIRECTION.SELF_INITIATED
                      : o("WAWebWamEnumLastMessageDirection")
                          .LAST_MESSAGE_DIRECTION.OPPOSITE_PARTY_INITIATED),
                    o("WAWebChatThreadLogging")
                      .getChatThreadIDHMAC(e.id.toString())
                      .then(function (t) {
                        o("WAWebWamSmbListEventReporter").logSmbListEvent({
                          labelOperation: o("WAWebWamEnumLabelOperations")
                            .LABEL_OPERATIONS.UPDATE_MEMBERS,
                          updateEntryPoint: C,
                          labelTarget: o("WAWebWamEnumLabelTargets")
                            .LABEL_TARGETS.CONTACT,
                          bulkLabeling: b.length > 1,
                          listsApplied: n,
                          listsRemoved: a,
                          threadIdHmac: t != null ? t : void 0,
                          entryPointConversionSource:
                            u != null ? "ctwa_ad" : void 0,
                          messageDepth: o(
                            "WAWebCtwaConversationDepthUtils",
                          ).getCtwaConversationDepth(e),
                          lastMessageDirection: d,
                        });
                      })
                      .catch(r("WAWebNoop")));
                }
              }));
          }
          i.length > 0 &&
            (o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(b, i, c),
            o(
              "WAWebSmb3pdConversionSignalAction",
            ).log3pdConversionSignalForChats(b, i, c),
            o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(
              i,
              b,
              c,
            ));
          var m = y(C);
          if (
            (b.forEach(function (e) {
              var t = o("WAWebChatCollection").ChatCollection.get(e.id),
                n = (t == null ? void 0 : t.labels) || [],
                a = n.length + i.length - l.length,
                s =
                  t != null
                    ? r(
                        "WAWebCommonCTWADataSharing",
                      ).getCTWAEligibilityFromChat(t)
                    : null,
                u = s != null ? "ctwa_ad" : void 0;
              o("WAWebChatThreadLogging")
                .getChatThreadIDHMAC(e.id.toString())
                .then(function (e) {
                  (i.length > 0 &&
                    i.forEach(function (t) {
                      var n = o("WAWebLabelCollection").LabelCollection.get(t);
                      if (n) {
                        var r = o(
                            "WAWebLabelConstants",
                          ).mapLabelNameToPredefinedId(n.name),
                          a = r != null ? r : n.predefinedId;
                        o("WAWebWamLabelEventReporter").logLabelOperationEvent(
                          o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD,
                          void 0,
                          o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT,
                          e != null ? e : void 0,
                          a != null ? a : void 0,
                          a != null ? void 0 : n.name,
                          u,
                          m,
                        );
                      }
                    }),
                    l.length > 0 &&
                      l.forEach(function (t) {
                        var n = o("WAWebLabelCollection").LabelCollection.get(
                          t,
                        );
                        if (n) {
                          var r = o(
                              "WAWebLabelConstants",
                            ).mapLabelNameToPredefinedId(n.name),
                            a = r != null ? r : n.predefinedId;
                          o(
                            "WAWebWamLabelEventReporter",
                          ).logLabelOperationEvent(
                            o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                              .DELETE,
                            void 0,
                            o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT,
                            e != null ? e : void 0,
                            a != null ? a : void 0,
                            a != null ? void 0 : n.name,
                            u,
                            m,
                          );
                        }
                      }),
                    t != null &&
                      o("WAWebWamLabelEventReporter").logLabelOperationEvent(
                        o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                          .UPDATE_LABEL_COUNT,
                        a,
                        o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT,
                        e != null ? e : void 0,
                        void 0,
                        void 0,
                        u,
                        m,
                      ));
                });
            }),
            T.size > 0 && S && o("WAWebMobilePlatforms").isSMB())
          ) {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                for (var t of T.values()) {
                  var n = yield o("WAWebBizLabelEditingAction").labelAddAction(
                    t.name,
                    t.colorIndex,
                  );
                  n != null &&
                    o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(
                      [{ id: String(n), type: "add" }],
                      b,
                    );
                }
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to create suggested list: ",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("suggested-list-creation-failed-labels-modal");
              } finally {
                v();
              }
            })();
            return;
          }
          v();
        },
        A = S
          ? d.jsx(r("WDSButton.react"), {
              type: "default",
              size: "medium",
              variant: "filled",
              onPress: w,
              testid: void 0,
              disabled: E.length === 0,
              label: s._(/*BTDS*/ "Done"),
            })
          : d.jsx(
              o("WAWebButton.react").Button,
              {
                testid: void 0,
                type: "primary",
                disabled: E.length === 0,
                onClick: w,
                children: s._(/*BTDS*/ "Save"),
              },
              1,
            ),
        F = S
          ? d.jsx(r("WDSButton.react"), {
              variant: "borderless",
              onPress: i.onCancel,
              testid: void 0,
              size: "medium",
              type: "default",
              label: r("WAWebFbtCommon")("Cancel"),
            })
          : d.jsx(
              o("WAWebButton.react").Button,
              {
                testid: void 0,
                type: "secondary",
                onClick: i.onCancel,
                children: r("WAWebFbtCommon")("Cancel"),
              },
              0,
            ),
        O = S
          ? d.jsx(r("WDSButtonGroup.react"), {
              width: "hug",
              orientation: "horizontal",
              primaryButtonProps: {
                variant: "filled",
                type: "default",
                onPress: w,
                testid: "popup-controls-ok",
                disabled: E.length === 0,
                label: s._(/*BTDS*/ "Done"),
              },
              tertiaryButtonProps: {
                variant: "borderless",
                type: "default",
                onPress: i.onCancel,
                testid: "popup-controls-cancel",
                label: r("WAWebFbtCommon")("Cancel"),
              },
            })
          : d.jsxs(o("WAWebButton.react").ButtonGroup, {
              direction: "horizontal",
              children: [F, A],
            }),
        B = S
          ? s._(/*BTDS*/ "Choose list")
          : d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Label items"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              onCancel: i.onCancel,
            }),
        W = _(
          function () {
            var e = [];
            return (
              b.forEach(function (t) {
                t instanceof o("WAWebChatModel").Chat && e.push(t);
              }),
              e
            );
          },
          [b],
        ),
        q = r(
          "WAWebCommonCTWADataSharing",
        ).shouldDisplayDataSharingLabelOptOutOrUpsell(b)
          ? d.jsx(
              o("WAWebDataSharingOptOutOrUpsell.react")
                .DataSharingOptOutOrUpsell,
              {
                chats: W,
                checkboxValue: c,
                onCheckboxToggle: function () {
                  return m(!c);
                },
                theme: "labels-opt-out",
              },
            )
          : null,
        U = _(
          function () {
            if (
              o(
                "WAWebUserPrefsGeneral",
              ).getDetectedOutcomeOnboardingStatus() === !0 &&
              b.length === 1
            ) {
              var e = b[0];
              return o("WAWebLabelCollection")
                .LabelCollection.filter(function (e) {
                  return (
                    e.predefinedId ===
                      o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID ||
                    e.predefinedId ===
                      o("WAWebCTWAConstants").LEAD_PREDEFINED_ID
                  );
                })
                .reduce(function (t, n) {
                  return (
                    n.labelItemCollection.map(function (n) {
                      if (
                        n.parentType ===
                          o("WAWebListItemParentType").LabelItemParentType
                            .Chat &&
                        n.parentId === e.id.toString() &&
                        n.detectedOutcomeOriginalLabelPredefinedId != null
                      ) {
                        var r = o(
                          "WAWebBizLabelUtils",
                        ).mapDOLabelPredefinedIdToManualLabelId(
                          n.detectedOutcomeOriginalLabelPredefinedId,
                        );
                        r != null && t.push(r);
                      }
                    }),
                    t
                  );
                }, []);
            }
            return [];
          },
          [b],
        ),
        V = S
          ? o("WAWebModal.react").ModalTheme.ListsAssignModal
          : o("WAWebModal.react").ModalTheme.LabelList;
      return d.jsxs(o("WAWebModal.react").Modal, {
        ref: a,
        type: V,
        actions: O,
        title: B,
        tsNavigationData: { surface: "smb-labels-list" },
        children: [
          d.jsx(r("WAWebLabelsMultiSelectLabelList.react"), {
            autoLabeledLabelIds: U,
            onNewLabelAdded: i.onNewLabelAdded,
            onToggleSuggestion: $,
            shouldScrollIntoViewAndSelect: i.shouldScrollIntoViewAndSelect,
            initialLabelState: N,
            selectedLabels: R,
            selectedSuggestionIds: x,
            renderContext: "label-selection",
            onMultiSelect: M,
            entryPoint: C,
          }),
          q,
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
