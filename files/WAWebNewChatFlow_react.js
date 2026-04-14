__d(
  "WAWebNewChatFlow.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebCommunityCreationFlowMetricUtils",
    "WAWebComposeBoxActions",
    "WAWebContactCollection",
    "WAWebContactEditDrawer.react",
    "WAWebContactGetters",
    "WAWebContactLogging",
    "WAWebContactUtils",
    "WAWebDialerPadFlowLoadable",
    "WAWebDrawerViewType",
    "WAWebFindChatAction",
    "WAWebMessageYourselfMetricUtils",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNativeContactsNuxPopup.react",
    "WAWebNewChatDrawer.react",
    "WAWebNewChatFlowBroadcastContainer.react",
    "WAWebNewChatFlowTypes",
    "WAWebNewChatMetricUtils",
    "WAWebNewCommunityInfoDrawer.react",
    "WAWebNewGroupFlowLoadable",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebUsernameSearchLogger",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumCommunityCreationEntrypointType",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumSearchActionName",
    "WAWebWamEnumWebContactListStartNewChatType",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "useWAWebFlow",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = e.onEnd,
        a = e.ref,
        i = e.viewType;
      o("WAWebContactCollection").ContactCollection.ensureSorted();
      var l = c(),
        d = o("useWAWebFlow").useFlow(
          o("WAWebNewChatFlowTypes").NewChatFlowStep.NewChatDrawer,
          {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: t,
          },
        ),
        m = d[0],
        p = d[1],
        _ = function () {
          p.end();
        };
      o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", _);
      var f = function (t, n, r) {
          r === void 0 && (r = !1);
          var e = {};
          (t.isEnterprise &&
            t.privacyMode != null &&
            (e.nextPrivacyMode = t.privacyMode),
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(t.id, n != null ? n : "newChatFlow", e)
              .then(function (e) {
                var n = e.chat;
                if (
                  o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() &&
                  !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                    chat: n,
                    contact: n.contact,
                  })
                ) {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(
                      o("WAWebReachoutTimelockRestrictedModalLoadable")
                        .ReachoutTimelockRestrictedModalLoadable,
                      {},
                    ),
                  );
                  return;
                }
                (o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: n })
                  .then(function (e) {
                    if (!e) {
                      o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                        contactSearchEntrypoint: o(
                          "WAWebWamEnumContactSearchEntrypoint",
                        ).CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
                        searchActionName: o("WAWebWamEnumSearchActionName")
                          .SEARCH_ACTION_NAME.INITIATION_FAILURE,
                      });
                      return;
                    }
                    o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                      contactSearchEntrypoint: o(
                        "WAWebWamEnumContactSearchEntrypoint",
                      ).CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
                      searchActionName: o("WAWebWamEnumSearchActionName")
                        .SEARCH_ACTION_NAME.INITIATION_SUCCESS,
                    });
                    var a = o("WAWebChatGetters").getIsGroup(n)
                      ? o("WAWebWamEnumWebContactListStartNewChatType")
                          .WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.GROUP
                      : o("WAWebWamEnumWebContactListStartNewChatType")
                          .WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACT;
                    (o(
                      "WAWebNewChatMetricUtils",
                    ).logContactListStartNewChatAction({
                      chatType: a,
                      isSearchResult: o("WAWebChatGetters").getIsGroup(n) || r,
                    }),
                      o("WAWebContactGetters").getIsMe(t) &&
                        o(
                          "WAWebMessageYourselfMetricUtils",
                        ).UiMessageYourselfNewChatAction.logMessageYourselfOpenedEvent(
                          n,
                          r,
                        ),
                      o("WAWebComposeBoxActions").ComposeBoxActions.focus(n));
                  }),
                  p.end());
              }));
        },
        g = function (t, n, r, o) {
          (r === void 0 && (r = !1), f(n, o, r));
        },
        h = function (t) {
          var e = t.contactId,
            n = t.firstName,
            a = t.lastName,
            l = t.phoneNumber,
            s = t.username,
            u;
          !r("isStringNullOrEmpty")(n) && !r("isStringNullOrEmpty")(a)
            ? (u = n + " " + a)
            : r("isStringNullOrEmpty")(n)
              ? (u = a)
              : (u = n);
          var c = o("WAWebContactCollection").ContactCollection.gadd(
            { id: e, name: u, shortName: a, username: s, phoneNumber: l },
            { merge: !0 },
          );
          (f(c, "createContact"),
            i === r("WAWebDrawerViewType").FLYOUT
              ? o("WAWebModalManager").ModalManager.close()
              : p.end());
        },
        y = function (t) {
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          i === r("WAWebDrawerViewType").FLYOUT
            ? (p.end(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebModal.react").Modal, {
                  type: o("WAWebModal.react").ModalTheme.Tower,
                  children: u.jsx(
                    o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable,
                    {
                      onCreateGroup: (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            (yield e,
                              o("WAWebModalManager").ModalManager.close());
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                      onEnd: o("WAWebModalManager").closeModalManager,
                      viewType: r("WAWebDrawerViewType").MODAL,
                    },
                  ),
                }),
              ))
            : p.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewGroupFlow);
        },
        C = function (t) {
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          i === r("WAWebDrawerViewType").FLYOUT
            ? (p.end(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebModal.react").Modal, {
                  type: o("WAWebModal.react").ModalTheme.Tower,
                  children: u.jsx(
                    r("WAWebNewChatFlowBroadcastContainer.react"),
                    {
                      onCloseEntireFlow:
                        o("WAWebModalManager").closeModalManager,
                      onBack: o("WAWebModalManager").closeModalManager,
                      viewType: r("WAWebDrawerViewType").MODAL,
                    },
                  ),
                }),
              ))
            : p.push(
                o("WAWebNewChatFlowTypes").NewChatFlowStep.NewBroadcastFlow,
              );
        },
        b = function (t) {
          (i === r("WAWebDrawerViewType").FLYOUT
            ? (p.end(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebModal.react").Modal, {
                  type: o("WAWebModal.react").ModalTheme.Tower,
                  children: u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
                    onCreateCommunity: o("WAWebModalManager").closeModalManager,
                    viewType: r("WAWebDrawerViewType").MODAL,
                    onCancel: o("WAWebModalManager").closeModalManager,
                  }),
                }),
              ))
            : p.push(
                o("WAWebNewChatFlowTypes").NewChatFlowStep.NewCommunityFlow,
              ),
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.startSession(
              o("WAWebWamEnumCommunityCreationEntrypointType")
                .COMMUNITY_CREATION_ENTRYPOINT_TYPE.CHATS_TAB,
            ),
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.enter(
              o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.CHATS_TAB,
            ));
        },
        v = function (t) {
          if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebNativeContactsNuxPopup.react"), {
                source: o("WAWebContactLogging").ContactSourceType.NewChat,
              }),
            );
            return;
          }
          i === r("WAWebDrawerViewType").FLYOUT
            ? (p.end(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebModal.react").Modal, {
                  type: o("WAWebModal.react").ModalTheme.Tower,
                  children: u.jsx(r("WAWebContactEditDrawer.react"), {
                    ref: l,
                    origin: o("WAWebContactLogging").ContactSourceType.NewChat,
                    onSave: h,
                    viewType: r("WAWebDrawerViewType").MODAL,
                    onCancel: o("WAWebModalManager").closeModalManager,
                  }),
                }),
              ))
            : p.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow);
        },
        S = function (t) {
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          i === r("WAWebDrawerViewType").FLYOUT
            ? (p.end(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebModal.react").Modal, {
                  type: o("WAWebModal.react").ModalTheme.Tower,
                  children: u.jsx(
                    o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable,
                    {
                      onEnd: o("WAWebModalManager").closeModalManager,
                      viewType: r("WAWebDrawerViewType").MODAL,
                    },
                  ),
                }),
              ))
            : p.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.DialerPadFlow);
        },
        R = function () {
          if (
            p.step === o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow
          ) {
            var e;
            (e = l.current) == null || e.handleDismiss();
          }
          p.pop();
        };
      if (p.step == null) return null;
      var L = null;
      switch (p.step) {
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewChatDrawer:
          L = u.jsx(r("WAWebNewChatDrawer.react"), {
            title: s._(/*BTDS*/ "New chat"),
            onBack: function () {
              return p.end();
            },
            onClick: g,
            onNewGroup: y,
            onNewBroadcast: C,
            onNewCommunity: b,
            onNewContact: v,
            onDialerPad: S,
            viewType: i != null ? i : r("WAWebDrawerViewType").DRAWER,
          });
          break;
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewGroupFlow:
          L = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
            onCreateGroup: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (yield e, p.end());
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onEnd: p.pop,
            viewType: i != null ? i : r("WAWebDrawerViewType").DRAWER,
          });
          break;
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewBroadcastFlow:
          L = u.jsx(r("WAWebNewChatFlowBroadcastContainer.react"), {
            onCloseEntireFlow: function () {
              return p.end();
            },
            onBack: p.pop,
            viewType: i != null ? i : r("WAWebDrawerViewType").DRAWER,
          });
          break;
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewCommunityFlow:
          L = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
            onBack: p.pop,
            onCreateCommunity:
              i === r("WAWebDrawerViewType").MODAL ? p.end : void 0,
            viewType: i != null ? i : r("WAWebDrawerViewType").DRAWER,
          });
          break;
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow:
          L = u.jsx(r("WAWebContactEditDrawer.react"), {
            ref: l,
            origin: o("WAWebContactLogging").ContactSourceType.NewChat,
            onSave: h,
            onBack: p.pop,
            viewType: i != null ? i : r("WAWebDrawerViewType").DRAWER,
          });
          break;
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.DialerPadFlow:
          L = u.jsx(
            o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable,
            {
              onEnd: p.pop,
              viewType: i != null ? i : r("WAWebDrawerViewType").DRAWER,
            },
          );
          break;
      }
      return u.jsx(m, { ref: a, flow: p, requestDismiss: R, children: L });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
