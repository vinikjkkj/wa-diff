__d(
  "WAWebLabelsMultiSelectLabelList.react",
  [
    "fbt",
    "WAArrayMove",
    "WAPromiseDelays",
    "WAWebAutomaticEventsUserJourneyWamEvent",
    "WAWebBizGatingUtils",
    "WAWebChatCheckboxWrapper.react",
    "WAWebClickableLink.react",
    "WAWebDOIntroPopup.react",
    "WAWebDraggableItemIcon.react",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebLabelCollection",
    "WAWebLabelsLabelListItem.react",
    "WAWebLabelsLabelListNewLabel.react",
    "WAWebListDragAndDropItem.react",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebSelectableState",
    "WAWebSuggestedLists.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumAutomaticEventsTargetComponentEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = new (r("WAWebFlatListController"))(),
      g = 72,
      h = 56,
      y = 0;
    function C() {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: [
          o("WAWebUISpacing").uiMargin.all6,
          o("WAWebUISpacing").uiMargin.end16,
        ],
        justify: "center",
        align: "center",
        children: u.jsx(o("WAWebDraggableItemIcon.react").DraggableItemIcon, {
          width: 18,
          height: 18,
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = function (t) {
      return t.map(function (e, t) {
        return { itemKey: e.id, listItem: e, order: t };
      });
    };
    function v(e) {
      var t = e.autoLabeledLabelIds,
        n = e.detailElement,
        a = e.entryPoint,
        i = e.initialLabelState,
        l = e.isReorderActive,
        s = e.label,
        c = e.onLabelClick,
        d = e.onMultiSelect,
        m = e.ref,
        p = e.renderContext,
        _ = e.selectableState,
        f = e.selectedLabels,
        g = e.showContextActions;
      if (!s.name) return null;
      var h = o("WAWebLabelCollection").LabelCollection.assertGet(s.id),
        y = c
          ? function () {
              c(s.id);
            }
          : void 0,
        C = t.includes(s.id),
        b =
          p === "label-selection"
            ? u.jsx(r("WAWebChatCheckboxWrapper.react"), {
                theme: o("WAWebBizGatingUtils").labelsEditingEnabled()
                  ? "label-selection-redesigned"
                  : "label-selection",
                model: h,
                initialSelection: i[s.id] || 0,
                multiSelection: f,
                selectableState: _,
                onSelect: d,
                children: u.jsx(r("WAWebLabelsLabelListItem.react"), {
                  label: s.id,
                  onClick: y,
                  showContextActions: g,
                  entryPoint: a,
                  shouldDisplayAutoLabeledText: C,
                }),
              })
            : u.jsx(r("WAWebLabelsLabelListItem.react"), {
                label: s.id,
                detailElement: n,
                isReorderActive: l,
                theme: p,
                onClick: y,
                showContextActions: g,
                entryPoint: a,
                shouldDisplayAutoLabeledText: C,
              });
      return u.jsx(
        "div",
        { ref: m, "data-testid": void 0, children: b },
        "label_item_" + s.id,
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = o("WAWebLabelCollection").LabelCollection.filter(function (t) {
        return t.name
          ? o("WAWebListsGatingUtils").isListsEnabled()
            ? !(
                t.isActive === !1 ||
                (o("WAWebMobilePlatforms").isSMB() &&
                  e === "label-list" &&
                  o("WAWebListUtils").isBuiltInList(t.type))
              )
            : !o("WAWebListUtils").isBuiltInList(t.type)
          : !1;
      });
      return (o("WAWebListUtils").sortLabels(t), t);
    }
    function R() {
      var e = _(
          o("WAWebLabelCollection").LabelCollection.getInactivePresetLists(),
        ),
        t = e[0],
        n = e[1];
      return (
        o("useWAWebListener").useListener(
          o("WAWebLabelCollection").LabelCollection,
          "change:isActive",
          function () {
            n(
              o(
                "WAWebLabelCollection",
              ).LabelCollection.getInactivePresetLists(),
            );
          },
        ),
        t.length === 0
          ? null
          : u.jsxs(u.Fragment, {
              children: [
                u.jsx(r("WAWebDrawerSection.react"), {
                  title: s._(/*BTDS*/ "Available lists"),
                  theme: "list-section",
                  animation: !1,
                }),
                t.map(function (e) {
                  return u.jsx(L, { label: e }, e.id);
                }),
              ],
            })
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.label,
        n = function () {
          o("WAWebListsActions").activatePresetList(t);
        };
      return u.jsxs("div", {
        className: "x78zum5 x6s0dn4 xnnlda6 x13jy36j x64bnmy",
        "data-testid": void 0,
        children: [
          u.jsx("span", {
            className:
              "x1iyjqo2 xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
            children: o("WAWebListUtils").getListDisplayName(t.name, t.type),
          }),
          u.jsx(r("WDSTooltip.react"), {
            label: s._(/*BTDS*/ "Enable list"),
            children: u.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcAdd.react"),
              variant: "borderless",
              size: "small",
              type: "default",
              onPress: n,
              "aria-label": s._(/*BTDS*/ "Enable list"),
              testid: void 0,
            }),
          }),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.shouldScrollIntoViewAndSelect,
        a = e.selectedLabels,
        i = e.selectedSuggestionIds,
        l = e.onMultiSelect,
        c = e.onToggleSuggestion,
        L = e.renderContext,
        E = e.onLabelClick,
        k = e.onNewLabelAdded,
        I = e.initialLabelState,
        T = I === void 0 ? {} : I,
        D = e.isReorderActive,
        x = D === void 0 ? !1 : D,
        $ = e.entryPoint,
        P = e.autoLabeledLabelIds,
        N = _(!1),
        M = N[0],
        w = N[1],
        A = _(function () {
          return S(L);
        }),
        F = A[0],
        O = A[1],
        B = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL),
        W = B[1],
        q = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
      d(
        function () {
          q &&
            $ !==
              o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .LIST_SETTINGS &&
            new (o(
              "WAWebAutomaticEventsUserJourneyWamEvent",
            ).AutomaticEventsUserJourneyWamEvent)({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .LABEL_APPLICATION,
              smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
              automaticEventsTargetComponent: o(
                "WAWebWamEnumAutomaticEventsTargetComponentEnum",
              ).AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE,
            }).commit();
        },
        [q, $],
      );
      var U = m(
          function () {
            return b(F);
          },
          [F],
        ),
        V = p(null),
        H = r("useWAWebUnmountSignal")(),
        G = function (t, n, r) {
          (a == null || a.setVal(t, n, r), l == null || l(t.id));
        },
        z = function () {
          var e = S(L);
          O(e);
        };
      o("useWAWebListener").useListener(
        o("WAWebLabelCollection").LabelCollection,
        "reorder",
        z,
      );
      var j = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, n, r) {
            if (!(i != null && i.size > 0) && (z(), r.add === !0 && t)) {
              var a = t(e.name),
                l = a.shouldScrollIntoView,
                s = a.shouldSelect;
              if (l)
                try {
                  var u;
                  (yield o("WAPromiseDelays").delayMs(y, H),
                    (u = V.current) == null ||
                      u.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                      }));
                } catch (e) {}
              s && G(e, !0, !1);
            }
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })();
      (o("useWAWebListener").useListener(
        o("WAWebLabelCollection").LabelCollection,
        "add remove",
        j,
      ),
        o("useWAWebListener").useListener(
          o("WAWebLabelCollection").LabelCollection,
          "change:isActive",
          function () {
            O(S(L));
          },
        ));
      var K = function (n, r) {
          return O(function (t) {
            var a = o("WAArrayMove").arrayMove(t, n, r);
            return (
              e.onLabelOrderChange == null ||
                e.onLabelOrderChange(
                  a.map(function (e) {
                    return Number(e.id);
                  }),
                ),
              a
            );
          });
        },
        Q = r("WAWebNoop"),
        X = function (n, i) {
          return o("WAWebListsGatingUtils").isListsM2Enabled() && x
            ? u.jsx(o("WAWebListDragAndDropItem.react").DragAndDropItem, {
                index: i,
                onMove: K,
                onFinalDrop: Q,
                children: u.jsx(
                  v,
                  {
                    autoLabeledLabelIds: P,
                    isReorderActive: x,
                    showContextActions: !x,
                    detailElement: u.jsx(C, {}),
                    selectedLabels: a,
                    renderContext: L,
                    onLabelClick: E,
                    initialLabelState: T,
                    onMultiSelect: G,
                    label: n,
                    selectableState:
                      e.selectableState || new (r("WAWebSelectableState"))(!0),
                    ref: function (t) {
                      i === F.length - 1 && (V.current = t);
                    },
                    entryPoint: $,
                  },
                  n.id,
                ),
              })
            : u.jsx(
                v,
                {
                  autoLabeledLabelIds: P,
                  showContextActions: !0,
                  selectedLabels: a,
                  renderContext: L,
                  onLabelClick: E,
                  initialLabelState: T,
                  onMultiSelect: G,
                  label: n,
                  selectableState:
                    e.selectableState || new (r("WAWebSelectableState"))(!0),
                  ref: function (t) {
                    i === F.length - 1 && (V.current = t);
                  },
                  entryPoint: $,
                },
                n.id,
              );
        },
        Y =
          o("WAWebListsGatingUtils").isListsEnabled() && L === "label-selection"
            ? h
            : g;
      return u.jsxs(r("WAWebFlatListContainer.react"), {
        flatListControllers: [f],
        children: [
          L === "label-selection" &&
            o("WAWebBizGatingUtils").labelsEditingEnabled() &&
            u.jsx(r("WAWebLabelsLabelListNewLabel.react"), {
              onEditingChange: w,
              onNewLabelAdded: k,
              entryPoint: $,
            }),
          L === "label-list" &&
            !o("WAWebMobilePlatforms").isSMB() &&
            !x &&
            u.jsx(r("WAWebDrawerSection.react"), {
              title: s._(/*BTDS*/ "Your lists"),
              theme: "list-section",
              animation: !1,
            }),
          u.jsxs(o("WAWebListDragAndDropItem.react").DragAndDropWrapper, {
            containerRef: null,
            children: [
              !M &&
                u.jsx(o("WAWebFlatList.react").FlatList, {
                  flatListController: f,
                  direction: "vertical",
                  forceConsistentRenderCount: !1,
                  data: U,
                  renderItem: function (t) {
                    var e = t.listItem,
                      n = t.order;
                    return X(e, n);
                  },
                  defaultItemHeight: Y,
                }),
              L === "label-selection" &&
                o("WAWebListsGatingUtils").isListsEnabled() &&
                o("WAWebMobilePlatforms").isSMB() &&
                !M &&
                c != null &&
                u.jsx(r("WAWebSuggestedLists.react"), {
                  onSelect: c,
                  selectedSuggestionIds: i,
                  suggestedListTheme: "list-assign-modal",
                }),
              q &&
                $ !==
                  o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                    .LIST_SETTINGS &&
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  xstyle: [
                    o("WAWebUISpacing").uiPadding.vert16,
                    o("WAWebUISpacing").uiPadding.horiz24,
                  ],
                  children: u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                    children: [
                      o("WAWebListsGatingUtils").isListsEnabled()
                        ? s._(
                            /*BTDS*/ "Some chats are automatically added. To remove from a list, unselect it.",
                          )
                        : s._(
                            /*BTDS*/ "Leads and new orders may be auto-labeled. You can remove it by unselecting.",
                          ),
                      " ",
                      u.jsx(r("WAWebClickableLink.react"), {
                        onClick: function () {
                          (o("WAWebModalManager").ModalManager.open(
                            u.jsx(r("WAWebDOIntroPopup.react"), {
                              onContinue: function () {
                                (W(),
                                  o("WAWebModalManager").ModalManager.close());
                              },
                              surfaceType: o("WAWebWamEnumSurfaceType")
                                .SURFACE_TYPE.LABEL_APPLICATION,
                            }),
                          ),
                            new (o(
                              "WAWebAutomaticEventsUserJourneyWamEvent",
                            ).AutomaticEventsUserJourneyWamEvent)({
                              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                                .LABEL_APPLICATION,
                              smbUserActionType: o(
                                "WAWebWamEnumSmbUserActionTypeEnum",
                              ).SMB_USER_ACTION_TYPE_ENUM.CLICK,
                              automaticEventsTargetComponent: o(
                                "WAWebWamEnumAutomaticEventsTargetComponentEnum",
                              ).AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM
                                .LEARN_MORE,
                            }).commit());
                        },
                        children: r("WAWebFbtCommon")("Learn more"),
                      }),
                    ],
                  }),
                }),
            ],
          }),
          L === "label-list" &&
            !o("WAWebMobilePlatforms").isSMB() &&
            !x &&
            u.jsx(R, {}),
        ],
      });
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  226,
);
