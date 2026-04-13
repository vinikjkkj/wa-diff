__d(
  "WAWebCreateOrEditListDrawer.react",
  [
    "fbt",
    "WAWebAddToListModal.react",
    "WAWebAutomaticEventsUserJourneyWamEvent",
    "WAWebButton.react",
    "WAWebCTWAConstants",
    "WAWebCellFrame.react",
    "WAWebCellV2.react",
    "WAWebChatGetters",
    "WAWebChatSearchFilters",
    "WAWebChatstateInfo.react",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebDOIntroPopup.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebErrorBoundary.react",
    "WAWebFbtCommon",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebGroupChatImage.react",
    "WAWebLabelCollection",
    "WAWebLabelEditInput.react",
    "WAWebListIcon.react",
    "WAWebListNameValidation",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNonEmptyString",
    "WAWebNoop",
    "WAWebNux",
    "WAWebOrderConfirmDiscardModal",
    "WAWebStackedCirclesImage.react",
    "WAWebSuggestedLists.react",
    "WAWebText.react",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumAutomaticEventsTargetComponentEnum",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumListAction",
    "WAWebWamEnumListUpdateUserJourneyAction",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamSmbListEventReporter",
    "WDSButton.react",
    "WDSFontTokenStyles",
    "WDSIconIcAdd.react",
    "WDSIconIcDelete.react",
    "WDSIconIcMoreVert.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "WDSMenuItem.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useRef,
      g = m.useState,
      h = {
        sectionHeader: {
          height: "xng8ra",
          paddingBottom: "x18d9i69",
          $$css: !0,
        },
        sectionHeaderTopPadding: { paddingTop: "x1sk1jro", $$css: !0 },
        chatsListPadding: { paddingInlineStart: "x1djpfga", $$css: !0 },
        buttonPadding: { paddingInlineStart: "xzm8p2n", $$css: !0 },
        inputRowPadding: { paddingInlineStart: "x12w63v0", $$css: !0 },
        noShrink: { flexShrink: "x2lah0s", $$css: !0 },
        ctaPadding: {
          paddingBottom: "xvpt6g3",
          paddingTop: "x14a8spa",
          $$css: !0,
        },
        educationalTextPadding: { paddingTop: "x1p57kb1", $$css: !0 },
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        mutedTextColor: { color: "xhslqc4", $$css: !0 },
      };
    function y(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.entryPoint,
        u = i.listId,
        c = i.onBack,
        m = i.onClose,
        y = g(!1),
        b = y[0],
        v = y[1],
        S = o("WAWebMobilePlatforms").isSMB(),
        R = u != null,
        L = _(
          function () {
            if (u == null) return [null, [], null, null];
            var e = o("WAWebLabelCollection").LabelCollection.get(u);
            if (e == null) return [null, [], null, null];
            var t = o("WAWebListsUtil").getAllChatsInList(e),
              n = r("isStringNullOrEmpty")(e.name) ? null : e.name,
              a = e.color != null ? Number(e.color) : null;
            return [e, t, n, a];
          },
          [u],
        ),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D =
          S &&
          o("WAWebListsGatingUtils").isListsEnabled() &&
          (E == null ? void 0 : E.isImmutable) === !0,
        x = o("WAWebListUtils").isBuiltInList(E == null ? void 0 : E.type),
        $ = g(I),
        P = $[0],
        N = $[1],
        M = g(T),
        w = M[0],
        A = M[1],
        F = g(k),
        O = F[0],
        B = F[1],
        W = g(0),
        q = W[0],
        U = W[1],
        V = g(!1),
        H = V[0],
        G = V[1],
        z = g(""),
        j = z[0],
        K = z[1],
        Q = _(function () {
          return new (r("WAWebFlatListController"))();
        }, []);
      (p(
        function () {
          R ||
            o("WAWebListsLogging").logListUpdateUserJorney({
              listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
              userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction")
                .LIST_UPDATE_USER_JOURNEY_ACTION.START,
              entryPoint: l,
            });
        },
        [R, l],
      ),
        p(
          function () {
            R && u != null
              ? o("WAWebWamSmbListEventReporter").logSmbListEvent({
                  labelOperation: o("WAWebWamEnumLabelOperations")
                    .LABEL_OPERATIONS.VIEW,
                  labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS
                    .EDIT_LABEL_DIALOG,
                  updateEntryPoint: l,
                  listId: Number(u),
                })
              : R ||
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                  labelOperation: o("WAWebWamEnumLabelOperations")
                    .LABEL_OPERATIONS.VIEW,
                  labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS
                    .ADD_LABEL_DIALOG,
                  updateEntryPoint: l,
                });
          },
          [R, u, l],
        ));
      var X = function (t, n) {
          (N((t || "").trim()),
            A(n),
            S &&
              (K(t),
              (t != null ? t : "").trim() !== (P != null ? P : "") && G(!1)));
        },
        Y = function (t) {
          (N(t.name),
            A(t.colorIndex),
            G(!0),
            U(function (e) {
              return e + 1;
            }),
            o("WAWebWamSmbListEventReporter").logSmbListEvent({
              labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
                .SUGGESTION_CLICKED,
              updateEntryPoint: l,
              predefinedId: t.predefinedId,
            }));
        },
        J = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (P != null) {
              v(!0);
              try {
                var e;
                if (u != null && E != null)
                  yield o("WAWebListsActions").editListAction({
                    newName: P,
                    newColor: w,
                    labelModel: E,
                    updatedAssociatedChats: O,
                    entryPoint: l,
                  });
                else {
                  var t = yield o("WAWebListsActions").createNewListAction(
                    P,
                    O,
                    w,
                    l,
                  );
                  ((e = t != null ? String(t) : void 0),
                    t != null &&
                      (o("WAWebListsLogging").logListUpdateUserJorney({
                        listId: "" + t,
                        listAction: o("WAWebWamEnumListAction").LIST_ACTION
                          .CREATE,
                        userJorneyAction: o(
                          "WAWebWamEnumListUpdateUserJourneyAction",
                        ).LIST_UPDATE_USER_JOURNEY_ACTION.CREATE_LIST,
                        entryPoint: l,
                      }),
                      O.length > 0 &&
                        o("WAWebCmd").Cmd.trigger(
                          "set_active_filter",
                          o("WAWebChatSearchFilters").SearchFilters.LABELS,
                          String(t),
                        )));
                }
                m(e);
              } finally {
                v(!1);
              }
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Z = function () {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebAddToListModal.react"), {
              preselectedChats: O,
              isEditMode: R,
              onClose: function (t) {
                (B(t), o("WAWebModalManager").ModalManager.close());
              },
            }),
          );
        },
        ee = function () {
          if (R) {
            if (P !== ae || (S && w !== ie)) return !0;
            var e = o("WAWebListsUtil").getTwoArraysDifference(k, O),
              t = e.addedItems,
              n = e.removedItems;
            return t.length > 0 || n.length > 0;
          }
          return !r("isStringNullOrEmpty")(P) || O.length > 0;
        },
        te = function () {
          ee()
            ? o("WAWebModalManager").ModalManager.open(
                d.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: c }),
              )
            : c();
        },
        ne = function (t) {
          B(function (e) {
            return e.filter(function (e) {
              return e !== t;
            });
          });
        },
        re = function (t) {
          return d.jsx(C, { chat: t.data, onRemove: ne, showRemove: !x });
        },
        oe = O.map(function (e) {
          return { itemKey: "chat-" + e.id.toString(), data: e };
        }),
        ae = E == null ? void 0 : E.name,
        ie = E == null ? void 0 : E.colorIndex,
        le = _(
          function () {
            return function () {
              if (b) return !0;
              if (R) {
                if (
                  r("isStringNullOrEmpty")(P) ||
                  (P !== ae &&
                    o("WAWebListNameValidation").isListNameDuplicate(P))
                )
                  return !0;
                if (P !== ae || (S && w !== ie) || k.length !== O.length)
                  return !1;
                var e = o("WAWebListsUtil").getTwoArraysDifference(k, O),
                  t = e.addedItems,
                  n = e.removedItems;
                return t.length === 0 && n.length === 0;
              }
              var a = S && w == null,
                i = S ? 0 : 1;
              return (
                r("isStringNullOrEmpty")(P) ||
                o("WAWebListNameValidation").isListNameDuplicate(P) ||
                O.length < i ||
                a
              );
            };
          },
          [b, R, P, w, S, ie, ae, O, k],
        ),
        se = u != null && E == null,
        ue = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL),
        ce = ue[1],
        de = E == null ? void 0 : E.predefinedId,
        me = O.length > 0,
        pe = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus(),
        _e = f(!1);
      p(
        function () {
          !_e.current &&
            S &&
            pe &&
            (de === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID ||
              de === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) &&
            me &&
            ((_e.current = !0),
            new (o(
              "WAWebAutomaticEventsUserJourneyWamEvent",
            ).AutomaticEventsUserJourneyWamEvent)({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
              smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
              automaticEventsTargetComponent: o(
                "WAWebWamEnumAutomaticEventsTargetComponentEnum",
              ).AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE,
            }).commit());
        },
        [S, de, me, pe],
      );
      var fe =
          S &&
          pe &&
          (de === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID ||
            de === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) &&
          d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: [h.educationalTextPadding, h.paddingHoriz24],
            children: d.jsxs(o("WAWebText.react").WAWebTextMuted, {
              children: [
                s._(/*BTDS*/ "Some chats are automatically added."),
                " ",
                d.jsx(r("WAWebClickableLink.react"), {
                  onClick: function () {
                    (o("WAWebModalManager").ModalManager.open(
                      d.jsx(r("WAWebDOIntroPopup.react"), {
                        onContinue: function () {
                          (ce(), o("WAWebModalManager").ModalManager.close());
                        },
                        surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                          .LABEL_DETAILS,
                      }),
                    ),
                      new (o(
                        "WAWebAutomaticEventsUserJourneyWamEvent",
                      ).AutomaticEventsUserJourneyWamEvent)({
                        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                          .LABEL_DETAILS,
                        smbUserActionType: o(
                          "WAWebWamEnumSmbUserActionTypeEnum",
                        ).SMB_USER_ACTION_TYPE_ENUM.CLICK,
                        automaticEventsTargetComponent: o(
                          "WAWebWamEnumAutomaticEventsTargetComponentEnum",
                        ).AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE,
                      }).commit());
                  },
                  children: r("WAWebFbtCommon")("Learn more"),
                }),
              ],
            }),
          }),
        ge = R ? s._(/*BTDS*/ "Save list") : s._(/*BTDS*/ "Create list"),
        he = R ? s._(/*BTDS*/ "Edit list") : s._(/*BTDS*/ "Create new list"),
        ye = h.chatsListPadding,
        Ce =
          R &&
          u != null &&
          !D &&
          !x &&
          d.jsx(r("WDSMenuBarItem.react"), {
            testid: void 0,
            icon: r("WDSIconIcMoreVert.react"),
            title: s._(/*BTDS*/ "Menu"),
            wdsMenuToRender: d.jsx(r("WDSMenu.react"), {
              children: d.jsx(r("WDSMenuItem.react"), {
                Icon: r("WDSIconIcDelete.react"),
                title: s._(/*BTDS*/ "Delete list"),
                onPress: function () {
                  return o("WAWebListsUtil").openListDeleteConfirmPopup(
                    o("WAWebNonEmptyString").asNonEmptyString(u),
                    l,
                  );
                },
                destructive: !0,
                testid: void 0,
              }),
            }),
            menuAlign: "end",
          }),
        be;
      return (
        D
          ? (be = d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: [h.inputRowPadding, h.paddingHoriz24, h.noShrink],
              children: [
                d.jsx(r("WAWebListIcon.react"), {
                  color:
                    (E == null ? void 0 : E.colorIndex) != null
                      ? o("WAWebListUtils").colorIndexToHex(E.colorIndex)
                      : null,
                  size: 16,
                }),
                d.jsx("span", {
                  className: "x1lkfr7t xo1l8bm x12w63v0",
                  children: E == null ? void 0 : E.name,
                }),
              ],
            }))
          : (be = d.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: [h.inputRowPadding, h.noShrink],
              children: d.jsx("div", {
                className: "xh8yej3",
                children: d.jsx(
                  r("WAWebLabelEditInput.react"),
                  {
                    editable: !x,
                    label: E,
                    initialName: P != null ? P : void 0,
                    initialColorIndex: w != null ? w : void 0,
                    onSave: x ? r("WAWebNoop") : X,
                    onCancel: r("WAWebNoop"),
                    listsFlow: !0,
                    rowTheme: S
                      ? "create-new-list-smb"
                      : "create-new-list-consumer",
                    entryPoint: null,
                  },
                  q,
                ),
              }),
            })),
        d.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          theme: "settings",
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "create-edit-list",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              onBack: te,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              title: he,
              children: Ce,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              flatListControllers: [Q],
              children: [
                se ? null : be,
                fe,
                !R &&
                  S &&
                  !H &&
                  d.jsx(r("WAWebSuggestedLists.react"), {
                    filterText: j,
                    onSelect: Y,
                    suggestedListTheme: "list-creation-drawer",
                  }),
                d.jsx(r("WAWebDrawerSection.react"), {
                  title: s._(/*BTDS*/ "Included"),
                  theme: "list-section",
                  animation: !1,
                  xstyle: [!fe && h.sectionHeaderTopPadding, h.noShrink],
                  titleXStyle: h.sectionHeader,
                }),
                !x &&
                  d.jsx(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: h.noShrink,
                    children: d.jsx("div", {
                      "data-testid": void 0,
                      role: "button",
                      tabIndex: 0,
                      className: "xh8yej3 xuzvuw4",
                      onKeyDown: Z,
                      onClick: Z,
                      children: d.jsx(r("WAWebCellFrame.react"), {
                        theme: "label-selection-new-label",
                        image: d.jsx("div", {
                          className:
                            "x78zum5 x6s0dn4 xl56j7k x100vrsf x16wdlz0 xt8t1vi x1xc408v x129tdwq x15urzxu xfn3atn x1pse0pq x1ypdohk x1m2oepg",
                          children: d.jsx(r("WDSIconIcAdd.react"), {
                            viewBox: { x: 3, y: 3, width: 18, height: 18 },
                          }),
                        }),
                        primary: R
                          ? s._(/*BTDS*/ "Edit people or groups")
                          : s._(/*BTDS*/ "Add people or groups"),
                      }),
                    }),
                  }),
                d.jsx("div", {
                  className: "x1djpfga xvtqlqk",
                  children: d.jsx(o("WAWebFlatList.react").FlatList, {
                    "aria-label": s._(/*BTDS*/ "Chat list"),
                    testid: void 0,
                    data: oe,
                    renderItem: re,
                    flatListController: Q,
                    direction: "vertical",
                    role: "grid",
                    "aria-rowcount": O.length,
                  }),
                }),
                !x &&
                  d.jsx(o("WAWebFlex.react").FlexRow, {
                    xstyle: [h.ctaPadding, h.buttonPadding, h.noShrink],
                    children: d.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                      testid: void 0,
                      onClick: J,
                      spinner: b,
                      disabled: le(),
                      children: ge,
                    }),
                  }),
              ],
            }),
          ],
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.chat,
        a = e.onRemove,
        i = e.showRemove,
        l;
      t[0] !== n || t[1] !== a
        ? ((l = function () {
            a(n);
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        m;
      t[3] !== n.id
        ? ((m = d.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: n.id,
            size: 40,
            waitIdle: !0,
          })),
          (t[3] = n.id),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      t[5] !== n || t[6] !== p
        ? ((_ = o("WAWebChatGetters").getIsGroup(n)
            ? d.jsx(r("WAWebGroupChatImage.react"), {
                chat: n,
                regularChatImage: p,
                showCommunityInfo: !1,
                size: 40,
                theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme
                  .CHAT_LIST,
              })
            : p),
          (t[5] = n),
          (t[6] = p),
          (t[7] = _))
        : (_ = t[7]);
      var f = _,
        g;
      t[8] !== n
        ? ((g = o("WAWebChatGetters").getIsGroup(n)
            ? d.jsx(o("WAWebName.react").Name, {
                chat: n,
                ellipsify: !0,
                titlify: !0,
              })
            : d.jsx(o("WAWebName.react").Name, {
                contact: n.contact,
                ellipsify: !0,
                showBusinessCheckmark: o(
                  "WAWebContactGetters",
                ).getShowBusinessCheckmarkAsPrimary(n.contact),
                titlify: !0,
                you: !0,
              })),
          (t[8] = n),
          (t[9] = g))
        : (g = t[9]);
      var y = g,
        C;
      t[10] !== f
        ? ((C = d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "chat-cell-image",
            children: f,
          })),
          (t[10] = f),
          (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] !== y
        ? ((b = d.jsx(o("WAWebText.react").WAWebTextTitle, { children: y })),
          (t[12] = y),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (u || (u = r("stylex"))).props(
            h.mutedTextColor,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
          )),
          (t[14] = v))
        : (v = t[14]);
      var S;
      t[15] !== n
        ? ((S = d.jsx(
            "span",
            babelHelpers.extends({}, v, {
              children: d.jsx(r("WAWebChatstateInfo.react"), { chat: n }),
            }),
          )),
          (t[15] = n),
          (t[16] = S))
        : (S = t[16]);
      var R;
      t[17] !== c || t[18] !== i
        ? ((R = i
            ? d.jsx(r("WDSButton.react"), {
                Icon: r("WDSIconIcDelete.react"),
                variant: "borderless",
                size: "small",
                type: "destructive",
                onPress: c,
                "aria-label": s._(/*BTDS*/ "Remove from list"),
                testid: void 0,
              })
            : null),
          (t[17] = c),
          (t[18] = i),
          (t[19] = R))
        : (R = t[19]);
      var L;
      return (
        t[20] !== C || t[21] !== b || t[22] !== S || t[23] !== R
          ? ((L = d.jsx(r("WAWebCellV2.react"), {
              size: "medium",
              interactive: !1,
              detailLeft: C,
              primary: b,
              secondary: S,
              detailRight: R,
            })),
            (t[20] = C),
            (t[21] = b),
            (t[22] = S),
            (t[23] = R),
            (t[24] = L))
          : (L = t[24]),
        L
      );
    }
    l.default = y;
  },
  226,
);
