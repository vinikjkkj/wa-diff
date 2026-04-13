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
    "react-compiler-runtime",
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
    var b = function (t) {
      return t.map(function (e, t) {
        return { itemKey: e.id, listItem: e, order: t };
      });
    };
    function v(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.autoLabeledLabelIds,
        a = e.detailElement,
        i = e.entryPoint,
        l = e.initialLabelState,
        s = e.isReorderActive,
        c = e.label,
        d = e.onLabelClick,
        m = e.onMultiSelect,
        p = e.ref,
        _ = e.renderContext,
        f = e.selectableState,
        g = e.selectedLabels,
        h = e.showContextActions;
      if (!c.name) return null;
      var y;
      t[0] !== c.id
        ? ((y = o("WAWebLabelCollection").LabelCollection.assertGet(c.id)),
          (t[0] = c.id),
          (t[1] = y))
        : (y = t[1]);
      var C = y,
        b;
      t[2] !== c.id || t[3] !== d
        ? ((b = d
            ? function () {
                d(c.id);
              }
            : void 0),
          (t[2] = c.id),
          (t[3] = d),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S;
      t[5] !== n || t[6] !== c.id
        ? ((S = n.includes(c.id)), (t[5] = n), (t[6] = c.id), (t[7] = S))
        : (S = t[7]);
      var R = S,
        L;
      t[8] !== C ||
      t[9] !== a ||
      t[10] !== i ||
      t[11] !== v ||
      t[12] !== l ||
      t[13] !== s ||
      t[14] !== c.id ||
      t[15] !== m ||
      t[16] !== _ ||
      t[17] !== f ||
      t[18] !== g ||
      t[19] !== R ||
      t[20] !== h
        ? ((L =
            _ === "label-selection"
              ? u.jsx(r("WAWebChatCheckboxWrapper.react"), {
                  theme: o("WAWebBizGatingUtils").labelsEditingEnabled()
                    ? "label-selection-redesigned"
                    : "label-selection",
                  model: C,
                  initialSelection: l[c.id] || 0,
                  multiSelection: g,
                  selectableState: f,
                  onSelect: m,
                  children: u.jsx(r("WAWebLabelsLabelListItem.react"), {
                    label: c.id,
                    onClick: v,
                    showContextActions: h,
                    entryPoint: i,
                    shouldDisplayAutoLabeledText: R,
                  }),
                })
              : u.jsx(r("WAWebLabelsLabelListItem.react"), {
                  label: c.id,
                  detailElement: a,
                  isReorderActive: s,
                  theme: _,
                  onClick: v,
                  showContextActions: h,
                  entryPoint: i,
                  shouldDisplayAutoLabeledText: R,
                })),
          (t[8] = C),
          (t[9] = a),
          (t[10] = i),
          (t[11] = v),
          (t[12] = l),
          (t[13] = s),
          (t[14] = c.id),
          (t[15] = m),
          (t[16] = _),
          (t[17] = f),
          (t[18] = g),
          (t[19] = R),
          (t[20] = h),
          (t[21] = L))
        : (L = t[21]);
      var E = L,
        k = "label_item_" + c.id,
        I = "label-list-item-" + c.name,
        T;
      return (
        t[22] !== E || t[23] !== p || t[24] !== k || t[25] !== I
          ? ((T = u.jsx(
              "div",
              { ref: p, "data-testid": void 0, children: E },
              k,
            )),
            (t[22] = E),
            (t[23] = p),
            (t[24] = k),
            (t[25] = I),
            (t[26] = T))
          : (T = t[26]),
        T
      );
    }
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
      var e = o("react-compiler-runtime").c(7),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o(
            "WAWebLabelCollection",
          ).LabelCollection.getInactivePresetLists()),
          (e[0] = t))
        : (t = e[0]);
      var n = _(t),
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
      e[3] !== a ? ((d = a.map(L)), (e[3] = a), (e[4] = d)) : (d = e[4]);
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
    function L(e) {
      return u.jsx(E, { label: e }, e.id);
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
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
    function k(e) {
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
    ((k.displayName = k.name + " [from " + i.id + "]"), (l.default = k));
  },
  226,
);
