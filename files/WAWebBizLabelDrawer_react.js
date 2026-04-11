__d(
  "WAWebBizLabelDrawer.react",
  [
    "fbt",
    "WAWebAutomaticEventsUserJourneyWamEvent",
    "WAWebBizGatingUtils",
    "WAWebBizLabelDrawerHeaderDropdownMenu.react",
    "WAWebBizLabelEditModal.react",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebDOIntroPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebIcAddCircleIcon.react",
    "WAWebLabelCollection",
    "WAWebLabelsMultiSelectLabelList.react",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebListsGatingUtils",
    "WAWebModalManager",
    "WAWebMultiSelection",
    "WAWebNux",
    "WAWebPlusIcon.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumAutomaticEventsTargetComponentEnum",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamLabelEventReporter",
    "WAWebWamSmbListEventReporter",
    "WDSIconIcCheck.react",
    "WDSMenuBarItem.react",
    "react",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = { noWrap: { whiteSpace: "xuxw1ft", $$css: !0 } };
    function h() {
      var e = o("WAWebLabelCollection").LabelCollection.getActiveLists();
      return (
        o("WAWebListUtils").sortLabels(e),
        e.map(function (e) {
          return Number(e.id);
        })
      );
    }
    function y(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.isInitialStep,
        l = i === void 0 ? !1 : i,
        u = a.onClose,
        d = a.onCreateListClick,
        y = a.onLabelClick,
        C = a.startInReorderMode,
        b = C === void 0 ? !1 : C,
        v = _([]),
        S = _([]),
        R = f(b),
        L = R[0],
        E = R[1];
      m(
        function () {
          if (b) {
            var e = h();
            ((S.current = [].concat(e)), (v.current = [].concat(e)));
          }
        },
        [b],
      );
      var k = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL),
        I = k[1],
        T = p(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id;
          });
        }, []),
        D = o("WAWebListsGatingUtils").isListsEnabled();
      m(function () {
        (o("WAWebWamLabelEventReporter").logLabelOperationEvent(
          o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
          void 0,
          o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABELS_SCREEN,
        ),
          o("WAWebWamSmbListEventReporter").logSmbListEvent({
            labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS
              .VIEW,
            labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS
              .LABELS_SCREEN,
            updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint")
              .UPDATE_ENTRY_POINT.LIST_SETTINGS,
          }));
      }, []);
      var x = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
      m(
        function () {
          x &&
            new (o(
              "WAWebAutomaticEventsUserJourneyWamEvent",
            ).AutomaticEventsUserJourneyWamEvent)({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_LIST,
              smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
              automaticEventsTargetComponent: o(
                "WAWebWamEnumAutomaticEventsTargetComponentEnum",
              ).AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE,
            }).commit();
        },
        [x],
      );
      var $ = function (t) {
          return { shouldScrollIntoView: !0, shouldSelect: !1 };
        },
        P = function () {
          if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: o("WAWebModalManager").closeModalManager,
                okText: r("WAWebFbtCommon")("OK"),
                children:
                  o(
                    "WAWebListUtils",
                  ).getReachMaxLabelCountTextForBizLabelDrawer(D),
              }),
            );
            return;
          }
          D
            ? d()
            : o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBizLabelEditModal.react"), { label: null }),
              );
        },
        N =
          o("WAWebBizGatingUtils").labelsEditingEnabled() &&
          c.jsx(r("WDSMenuBarItem.react"), {
            tabOrder: o("WAWebTabOrder").TAB_ORDER.LABELS_TAB_HEADER,
            testid: void 0,
            icon: D
              ? o("WAWebIcAddCircleIcon.react").IcAddCircleIcon
              : o("WAWebPlusIcon.react").PlusIcon,
            title: D
              ? s._(/*BTDS*/ "Add new list")
              : s._(/*BTDS*/ "Add new label"),
            onClick: P,
          }),
        M = (function () {
          return o("WAWebListsGatingUtils").isListsM2Enabled()
            ? L
              ? c.jsx(r("WDSMenuBarItem.react"), {
                  testid: void 0,
                  icon: r("WDSIconIcCheck.react"),
                  title: s._(/*BTDS*/ "Done"),
                  onClick: function () {
                    (o("WAWebListsActions").persistLabelReorder(v.current),
                      E(!1));
                  },
                })
              : c.jsx(
                  o("WAWebBizLabelDrawerHeaderDropdownMenu.react")
                    .LabelDrawerHeaderDropdownMenu,
                  {
                    onReorder: function () {
                      var e = h();
                      ((S.current = [].concat(e)),
                        (v.current = [].concat(e)),
                        E(!0));
                    },
                  },
                )
            : null;
        })(),
        w = function () {
          var e = S.current,
            t = v.current;
          return e.length !== t.length
            ? !0
            : e.some(function (e, n) {
                return e !== t[n];
              });
        },
        A = function () {
          if (L && w()) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(/*BTDS*/ "Discard changes?"),
                okButtonType: "solid-warning",
                onOK: function () {
                  (E(!1), o("WAWebModalManager").ModalManager.close(), u());
                },
                onCancel: o("WAWebModalManager").closeModalManager,
                children: s._(/*BTDS*/ "Your list order changes will be lost."),
              }),
            );
            return;
          }
          if (L) {
            E(!1);
            return;
          }
          u();
        },
        F = {};
      l ? (F.onCancel = A) : (F.onBack = A);
      var O = o("WAWebListsGatingUtils").isListsEnabled()
        ? { surface: "list-management" }
        : { surface: "smb-labels-list" };
      return c.jsxs(
        r("WAWebDrawer.react"),
        babelHelpers.extends(
          { ref: n, theme: "settings" },
          O && { tsNavigationData: O },
          {
            children: [
              c.jsxs(
                o("WAWebDrawerHeader.react").DrawerHeader,
                babelHelpers.extends(
                  { title: D ? s._(/*BTDS*/ "Lists") : s._(/*BTDS*/ "Labels") },
                  F,
                  {
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                    children: [!L && N, M],
                  },
                ),
              ),
              c.jsxs(r("WAWebDrawerBody.react"), {
                children: [
                  c.jsx(r("WAWebLabelsMultiSelectLabelList.react"), {
                    autoLabeledLabelIds: [],
                    isReorderActive: L,
                    onLabelOrderChange: function (t) {
                      v.current = t;
                    },
                    shouldScrollIntoViewAndSelect: $,
                    selectedLabels: T,
                    renderContext: "label-list",
                    onLabelClick: y,
                    entryPoint: o("WAWebWamEnumUpdateEntryPoint")
                      .UPDATE_ENTRY_POINT.LIST_SETTINGS,
                  }),
                  x &&
                    c.jsx(o("WAWebFlex.react").FlexRow, {
                      xstyle: [
                        o("WAWebUISpacing").uiMargin.bottom28,
                        o("WAWebUISpacing").uiPadding.vert10,
                        o("WAWebUISpacing").uiPadding.horiz20,
                      ],
                      children: c.jsxs(o("WAWebText.react").WAWebTextMuted, {
                        xstyle: o("WAWebUISpacing").uiPadding.bottom16,
                        children: [
                          D
                            ? s._(
                                /*BTDS*/ "Use lists to organize your customers and chats. Tap and hold on any chat or contact to add to a list. Some chats are automatically added.",
                              )
                            : s._(
                                /*BTDS*/ "Use labels to organise your customers and chats. Tap and hold on any message or contact to label it. Some chats are automatically labeled.",
                              ),
                          " ",
                          c.jsx(r("WAWebClickableLink.react"), {
                            xstyle: g.noWrap,
                            onClick: function () {
                              (o("WAWebModalManager").ModalManager.open(
                                c.jsx(r("WAWebDOIntroPopup.react"), {
                                  onContinue: function () {
                                    (I(),
                                      o(
                                        "WAWebModalManager",
                                      ).ModalManager.close());
                                  },
                                  surfaceType: o("WAWebWamEnumSurfaceType")
                                    .SURFACE_TYPE.LABEL_LIST,
                                }),
                              ),
                                new (o(
                                  "WAWebAutomaticEventsUserJourneyWamEvent",
                                ).AutomaticEventsUserJourneyWamEvent)({
                                  surface: o("WAWebWamEnumSurfaceType")
                                    .SURFACE_TYPE.LABEL_LIST,
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
            ],
          },
        ),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
