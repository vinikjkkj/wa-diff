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
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardListHotKeys.react",
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
    "WAWebTabOrder",
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
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = new (r("WAWebFlatListController"))(),
      h = 72,
      y = 56,
      C = 0;
    function b() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [
            o("WAWebUISpacing").uiMargin.all6,
            o("WAWebUISpacing").uiMargin.end16,
          ]),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: t,
              justify: "center",
              align: "center",
              children: u.jsx(
                o("WAWebDraggableItemIcon.react").DraggableItemIcon,
                { width: 18, height: 18 },
              ),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    var v = function (t) {
      return t.map(function (e, t) {
        return { itemKey: e.id, listItem: e, order: t };
      });
    };
    function S(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.autoLabeledLabelIds,
        a = e.detailElement,
        i = e.entryPoint,
        l = e.initialLabelState,
        s = e.isFirstItem,
        c = e.isReorderActive,
        d = e.label,
        m = e.onLabelClick,
        p = e.onMultiSelect,
        _ = e.ref,
        f = e.renderContext,
        g = e.selectableState,
        h = e.selectedLabels,
        y = e.showContextActions;
      if (!d.name) return null;
      var C;
      t[0] !== d.id
        ? ((C = o("WAWebLabelCollection").LabelCollection.assertGet(d.id)),
          (t[0] = d.id),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v;
      t[2] !== d.id || t[3] !== m
        ? ((v = m
            ? function () {
                m(d.id);
              }
            : void 0),
          (t[2] = d.id),
          (t[3] = m),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R;
      t[5] !== n || t[6] !== d.id
        ? ((R = n.includes(d.id)), (t[5] = n), (t[6] = d.id), (t[7] = R))
        : (R = t[7]);
      var L = R,
        E;
      t[8] !== b ||
      t[9] !== a ||
      t[10] !== i ||
      t[11] !== S ||
      t[12] !== l ||
      t[13] !== s ||
      t[14] !== c ||
      t[15] !== d.id ||
      t[16] !== p ||
      t[17] !== f ||
      t[18] !== g ||
      t[19] !== h ||
      t[20] !== L ||
      t[21] !== y
        ? ((E =
            f === "label-selection"
              ? u.jsx(r("WAWebChatCheckboxWrapper.react"), {
                  theme: o("WAWebBizGatingUtils").labelsEditingEnabled()
                    ? "label-selection-redesigned"
                    : "label-selection",
                  model: b,
                  initialSelection: l[d.id] || 0,
                  multiSelection: h,
                  selectableState: g,
                  onSelect: p,
                  children: u.jsx(r("WAWebLabelsLabelListItem.react"), {
                    label: d.id,
                    onClick: S,
                    showContextActions: y,
                    entryPoint: i,
                    shouldDisplayAutoLabeledText: L,
                  }),
                })
              : u.jsx(r("WAWebLabelsLabelListItem.react"), {
                  label: d.id,
                  detailElement: a,
                  isFirstItem: s,
                  isReorderActive: c,
                  theme: f,
                  onClick: S,
                  showContextActions: y,
                  entryPoint: i,
                  shouldDisplayAutoLabeledText: L,
                })),
          (t[8] = b),
          (t[9] = a),
          (t[10] = i),
          (t[11] = S),
          (t[12] = l),
          (t[13] = s),
          (t[14] = c),
          (t[15] = d.id),
          (t[16] = p),
          (t[17] = f),
          (t[18] = g),
          (t[19] = h),
          (t[20] = L),
          (t[21] = y),
          (t[22] = E))
        : (E = t[22]);
      var k = E,
        I = "label_item_" + d.id,
        T = "label-list-item-" + d.name,
        D;
      return (
        t[23] !== k || t[24] !== _ || t[25] !== I || t[26] !== T
          ? ((D = u.jsx(
              "div",
              { ref: _, "data-testid": void 0, children: k },
              I,
            )),
            (t[23] = k),
            (t[24] = _),
            (t[25] = I),
            (t[26] = T),
            (t[27] = D))
          : (D = t[27]),
        D
      );
    }
    function R(e) {
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
    function L() {
      var e = o("react-compiler-runtime").c(7),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o(
            "WAWebLabelCollection",
          ).LabelCollection.getInactivePresetLists()),
          (e[0] = t))
        : (t = e[0]);
      var n = f(t),
        a = n[0],
        i = n[1],
        l;
      if (
        (e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = function () {
              i(
                o(
                  "WAWebLabelCollection",
                ).LabelCollection.getInactivePresetLists(),
              );
            }),
            (e[1] = l))
          : (l = e[1]),
        o("useWAWebListener").useListener(
          o("WAWebLabelCollection").LabelCollection,
          "change:isActive",
          l,
        ),
        a.length === 0)
      )
        return null;
      var c;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(r("WAWebDrawerSection.react"), {
            title: s._(/*BTDS*/ "Available lists"),
            theme: "list-section",
            animation: !1,
          })),
          (e[2] = c))
        : (c = e[2]);
      var d;
      e[3] !== a ? ((d = a.map(E)), (e[3] = a), (e[4] = d)) : (d = e[4]);
      var m;
      return (
        e[5] !== d
          ? ((m = u.jsxs(u.Fragment, { children: [c, d] })),
            (e[5] = d),
            (e[6] = m))
          : (m = e[6]),
        m
      );
    }
    function E(e) {
      return u.jsx(k, { label: e }, e.id);
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.label,
        a;
      t[0] !== n
        ? ((a = function () {
            o("WAWebListsActions").activatePresetList(n);
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x78zum5 x6s0dn4 xnnlda6 x13jy36j x64bnmy" }),
          (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x1iyjqo2 xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
          }),
          (t[3] = c))
        : (c = t[3]);
      var d;
      t[4] !== n.name || t[5] !== n.type
        ? ((d = o("WAWebListUtils").getListDisplayName(n.name, n.type)),
          (t[4] = n.name),
          (t[5] = n.type),
          (t[6] = d))
        : (d = t[6]);
      var m;
      t[7] !== d
        ? ((m = u.jsx("span", babelHelpers.extends({}, c, { children: d }))),
          (t[7] = d),
          (t[8] = m))
        : (m = t[8]);
      var p;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Enable list")), (t[9] = p))
        : (p = t[9]);
      var _;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Enable list")), (t[10] = _))
        : (_ = t[10]);
      var f;
      t[11] !== i
        ? ((f = u.jsx(r("WDSTooltip.react"), {
            label: p,
            children: u.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcAdd.react"),
              variant: "borderless",
              size: "small",
              type: "default",
              onPress: i,
              "aria-label": _,
              testid: void 0,
            }),
          })),
          (t[11] = i),
          (t[12] = f))
        : (f = t[12]);
      var g;
      return (
        t[13] !== m || t[14] !== f
          ? ((g = u.jsxs(
              "div",
              babelHelpers.extends({}, l, {
                "data-testid": void 0,
                children: [m, f],
              }),
            )),
            (t[13] = m),
            (t[14] = f),
            (t[15] = g))
          : (g = t[15]),
        g
      );
    }
    function I(e) {
      var t = e.shouldScrollIntoViewAndSelect,
        a = e.selectedLabels,
        i = e.selectedSuggestionIds,
        l = e.onMultiSelect,
        c = e.onToggleSuggestion,
        E = e.renderContext,
        k = e.onLabelClick,
        I = e.onNewLabelAdded,
        T = e.initialLabelState,
        D = T === void 0 ? {} : T,
        x = e.isReorderActive,
        $ = x === void 0 ? !1 : x,
        P = e.entryPoint,
        N = e.autoLabeledLabelIds,
        M = f(!1),
        w = M[0],
        A = M[1],
        F = f(function () {
          return R(E);
        }),
        O = F[0],
        B = F[1],
        W = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL),
        q = W[1],
        U = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
      m(
        function () {
          U &&
            P !==
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
        [U, P],
      );
      var V = p(
          function () {
            return v(O);
          },
          [O],
        ),
        H = _(null),
        G = _(null),
        z = d(function (e) {
          if (e.target === e.currentTarget) {
            var t = e.currentTarget;
            if (t instanceof HTMLElement) {
              var n = t.getElementsByClassName(
                o("WAWebKeyboardListHotKeys.react")
                  .LIST_FOCUSABLE_ITEM_CLASS_NAME,
              );
              n.length > 0 && n[0] instanceof HTMLElement && n[0].focus();
            }
          }
        }, []),
        j = r("useWAWebUnmountSignal")(),
        K = function (t, n, r) {
          (a == null || a.setVal(t, n, r), l == null || l(t.id));
        },
        Q = function () {
          var e = R(E);
          B(e);
        };
      o("useWAWebListener").useListener(
        o("WAWebLabelCollection").LabelCollection,
        "reorder",
        Q,
      );
      var X = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, n, r) {
            if (!(i != null && i.size > 0) && (Q(), r.add === !0 && t)) {
              var a = t(e.name),
                l = a.shouldScrollIntoView,
                s = a.shouldSelect;
              if (l)
                try {
                  var u;
                  (yield o("WAPromiseDelays").delayMs(C, j),
                    (u = H.current) == null ||
                      u.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                      }));
                } catch (e) {}
              s && K(e, !0, !1);
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
        X,
      ),
        o("useWAWebListener").useListener(
          o("WAWebLabelCollection").LabelCollection,
          "change:isActive",
          function () {
            B(R(E));
          },
        ));
      var Y = function (n, r) {
          return B(function (t) {
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
        J = r("WAWebNoop"),
        Z = function (n, i) {
          var t = i === 0;
          return o("WAWebListsGatingUtils").isListsM2Enabled() && $
            ? u.jsx(o("WAWebListDragAndDropItem.react").DragAndDropItem, {
                index: i,
                onMove: Y,
                onFinalDrop: J,
                children: u.jsx(
                  S,
                  {
                    autoLabeledLabelIds: N,
                    isFirstItem: t,
                    isReorderActive: $,
                    showContextActions: !$,
                    detailElement: u.jsx(b, {}),
                    selectedLabels: a,
                    renderContext: E,
                    onLabelClick: k,
                    initialLabelState: D,
                    onMultiSelect: K,
                    label: n,
                    selectableState:
                      e.selectableState || new (r("WAWebSelectableState"))(!0),
                    ref: function (t) {
                      i === O.length - 1 && (H.current = t);
                    },
                    entryPoint: P,
                  },
                  n.id,
                ),
              })
            : u.jsx(
                S,
                {
                  autoLabeledLabelIds: N,
                  isFirstItem: t,
                  showContextActions: !0,
                  selectedLabels: a,
                  renderContext: E,
                  onLabelClick: k,
                  initialLabelState: D,
                  onMultiSelect: K,
                  label: n,
                  selectableState:
                    e.selectableState || new (r("WAWebSelectableState"))(!0),
                  ref: function (t) {
                    i === O.length - 1 && (H.current = t);
                  },
                  entryPoint: P,
                },
                n.id,
              );
        },
        ee =
          o("WAWebListsGatingUtils").isListsEnabled() && E === "label-selection"
            ? y
            : h;
      return u.jsxs(r("WAWebFlatListContainer.react"), {
        flatListControllers: [g],
        children: [
          E === "label-selection" &&
            o("WAWebBizGatingUtils").labelsEditingEnabled() &&
            u.jsx(r("WAWebLabelsLabelListNewLabel.react"), {
              onEditingChange: A,
              onNewLabelAdded: I,
              entryPoint: P,
            }),
          E === "label-list" &&
            !o("WAWebMobilePlatforms").isSMB() &&
            !$ &&
            u.jsx(r("WAWebDrawerSection.react"), {
              title: s._(/*BTDS*/ "Your lists"),
              theme: "list-section",
              animation: !1,
            }),
          u.jsxs(o("WAWebListDragAndDropItem.react").DragAndDropWrapper, {
            containerRef: null,
            children: [
              !w &&
                (E === "label-list"
                  ? u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                      "data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                      onFocus: z,
                      children: u.jsx("div", {
                        ref: G,
                        tabIndex: -1,
                        children: u.jsx(
                          o("WAWebKeyboardListHotKeys.react").ListHotKeys,
                          {
                            tabIndex: -1,
                            className: "x1a2a7pz",
                            role: "list",
                            "aria-label": s._(/*BTDS*/ "Your lists"),
                            handlers: {
                              home: function (t) {
                                t.preventDefault();
                                var e = t.currentTarget;
                                if (e instanceof HTMLElement) {
                                  var n = e.getElementsByClassName(
                                    o("WAWebKeyboardListHotKeys.react")
                                      .LIST_FOCUSABLE_ITEM_CLASS_NAME,
                                  );
                                  n.length > 0 &&
                                    n[0] instanceof HTMLElement &&
                                    n[0].focus();
                                }
                              },
                            },
                            children: u.jsx(o("WAWebFlatList.react").FlatList, {
                              flatListController: g,
                              direction: "vertical",
                              forceConsistentRenderCount: !1,
                              data: V,
                              renderItem: function (t) {
                                var e = t.listItem,
                                  n = t.order;
                                return Z(e, n);
                              },
                              defaultItemHeight: ee,
                            }),
                          },
                        ),
                      }),
                    })
                  : u.jsx(o("WAWebFlatList.react").FlatList, {
                      flatListController: g,
                      direction: "vertical",
                      forceConsistentRenderCount: !1,
                      data: V,
                      renderItem: function (t) {
                        var e = t.listItem,
                          n = t.order;
                        return Z(e, n);
                      },
                      defaultItemHeight: ee,
                    })),
              E === "label-selection" &&
                o("WAWebListsGatingUtils").isListsEnabled() &&
                o("WAWebMobilePlatforms").isSMB() &&
                !w &&
                c != null &&
                u.jsx(r("WAWebSuggestedLists.react"), {
                  onSelect: c,
                  selectedSuggestionIds: i,
                  suggestedListTheme: "list-assign-modal",
                }),
              U &&
                P !==
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
                                (q(),
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
          E === "label-list" &&
            !o("WAWebMobilePlatforms").isSMB() &&
            !$ &&
            u.jsx(L, {}),
        ],
      });
    }
    ((I.displayName = I.name + " [from " + i.id + "]"), (l.default = I));
  },
  226,
);
