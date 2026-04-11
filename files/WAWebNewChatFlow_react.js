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
    "react-compiler-runtime",
    "useWAWebFlow",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(71),
        a = e.onEnd,
        i = e.ref,
        l = e.viewType;
      o("WAWebContactCollection").ContactCollection.ensureSorted();
      var d = c(),
        p;
      t[0] !== a
        ? ((p = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: a,
          }),
          (t[0] = a),
          (t[1] = p))
        : (p = t[1]);
      var _ = o("useWAWebFlow").useFlow(
          o("WAWebNewChatFlowTypes").NewChatFlowStep.NewChatDrawer,
          p,
        ),
        f = _[0],
        g = _[1],
        h;
      t[2] !== g
        ? ((h = function () {
            g.end();
          }),
          (t[2] = g),
          (t[3] = h))
        : (h = t[3]);
      var y = h;
      o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", y);
      var C;
      t[4] !== g
        ? ((C = function (t, n, r) {
            var e = r === void 0 ? !1 : r,
              a = {};
            (t.isEnterprise &&
              t.privacyMode != null &&
              (a.nextPrivacyMode = t.privacyMode),
              o("WAWebFindChatAction")
                .findOrCreateLatestChat(t.id, n != null ? n : "newChatFlow", a)
                .then(function (n) {
                  var r = n.chat;
                  if (
                    o(
                      "WAWebReachoutTimelockUtils",
                    ).isUserReachoutTimelocked() &&
                    !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                      chat: r,
                      contact: r.contact,
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
                    .Cmd.openChatFromUnread({ chat: r })
                    .then(function (n) {
                      if (!n) {
                        o("WAWebUsernameSearchLogger").UsernameSearchLogger.log(
                          {
                            contactSearchEntrypoint: o(
                              "WAWebWamEnumContactSearchEntrypoint",
                            ).CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
                            searchActionName: o("WAWebWamEnumSearchActionName")
                              .SEARCH_ACTION_NAME.INITIATION_FAILURE,
                          },
                        );
                        return;
                      }
                      o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                        contactSearchEntrypoint: o(
                          "WAWebWamEnumContactSearchEntrypoint",
                        ).CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
                        searchActionName: o("WAWebWamEnumSearchActionName")
                          .SEARCH_ACTION_NAME.INITIATION_SUCCESS,
                      });
                      var a = o("WAWebChatGetters").getIsGroup(r)
                        ? o("WAWebWamEnumWebContactListStartNewChatType")
                            .WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.GROUP
                        : o("WAWebWamEnumWebContactListStartNewChatType")
                            .WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACT;
                      (o(
                        "WAWebNewChatMetricUtils",
                      ).logContactListStartNewChatAction({
                        chatType: a,
                        isSearchResult:
                          o("WAWebChatGetters").getIsGroup(r) || e,
                      }),
                        o("WAWebContactGetters").getIsMe(t) &&
                          o(
                            "WAWebMessageYourselfMetricUtils",
                          ).UiMessageYourselfNewChatAction.logMessageYourselfOpenedEvent(
                            r,
                            e,
                          ),
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(r));
                    }),
                    g.end());
                }));
          }),
          (t[4] = g),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v;
      t[6] !== b
        ? ((v = function (t, n, r, o) {
            var e = r === void 0 ? !1 : r;
            b(n, o, e);
          }),
          (t[6] = b),
          (t[7] = v))
        : (v = t[7]);
      var S = v,
        R;
      t[8] !== g || t[9] !== b || t[10] !== l
        ? ((R = function (t) {
            var e = t.contactId,
              n = t.firstName,
              a = t.lastName,
              i = t.phoneNumber,
              s = t.username,
              u;
            !r("isStringNullOrEmpty")(n) && !r("isStringNullOrEmpty")(a)
              ? (u = n + " " + a)
              : r("isStringNullOrEmpty")(n)
                ? (u = a)
                : (u = n);
            var c = o("WAWebContactCollection").ContactCollection.gadd(
              { id: e, name: u, shortName: a, username: s, phoneNumber: i },
              { merge: !0 },
            );
            (b(c, "createContact"),
              l === r("WAWebDrawerViewType").FLYOUT
                ? o("WAWebModalManager").ModalManager.close()
                : g.end());
          }),
          (t[8] = g),
          (t[9] = b),
          (t[10] = l),
          (t[11] = R))
        : (R = t[11]);
      var L = R,
        E;
      t[12] !== g || t[13] !== l
        ? ((E = function (t) {
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
            l === r("WAWebDrawerViewType").FLYOUT
              ? (g.end(),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(o("WAWebModal.react").Modal, {
                    type: o("WAWebModal.react").ModalTheme.Tower,
                    children: u.jsx(
                      o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable,
                      {
                        onCreateGroup: m,
                        onEnd: o("WAWebModalManager").closeModalManager,
                        viewType: r("WAWebDrawerViewType").MODAL,
                      },
                    ),
                  }),
                ))
              : g.push(o("WAWebNewChatFlowTypes").NewChatFlowStep.NewGroupFlow);
          }),
          (t[12] = g),
          (t[13] = l),
          (t[14] = E))
        : (E = t[14]);
      var k = E,
        I;
      t[15] !== g || t[16] !== l
        ? ((I = function (t) {
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
            l === r("WAWebDrawerViewType").FLYOUT
              ? (g.end(),
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
              : g.push(
                  o("WAWebNewChatFlowTypes").NewChatFlowStep.NewBroadcastFlow,
                );
          }),
          (t[15] = g),
          (t[16] = l),
          (t[17] = I))
        : (I = t[17]);
      var T = I,
        D;
      t[18] !== g || t[19] !== l
        ? ((D = function (t) {
            (l === r("WAWebDrawerViewType").FLYOUT
              ? (g.end(),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(o("WAWebModal.react").Modal, {
                    type: o("WAWebModal.react").ModalTheme.Tower,
                    children: u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
                      onCreateCommunity:
                        o("WAWebModalManager").closeModalManager,
                      viewType: r("WAWebDrawerViewType").MODAL,
                      onCancel: o("WAWebModalManager").closeModalManager,
                    }),
                  }),
                ))
              : g.push(
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
          }),
          (t[18] = g),
          (t[19] = l),
          (t[20] = D))
        : (D = t[20]);
      var x = D,
        $;
      t[21] !== g || t[22] !== L || t[23] !== l
        ? (($ = function (t) {
            if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebNativeContactsNuxPopup.react"), {
                  source: o("WAWebContactLogging").ContactSourceType.NewChat,
                }),
              );
              return;
            }
            l === r("WAWebDrawerViewType").FLYOUT
              ? (g.end(),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(o("WAWebModal.react").Modal, {
                    type: o("WAWebModal.react").ModalTheme.Tower,
                    children: u.jsx(r("WAWebContactEditDrawer.react"), {
                      ref: d,
                      origin: o("WAWebContactLogging").ContactSourceType
                        .NewChat,
                      onSave: L,
                      viewType: r("WAWebDrawerViewType").MODAL,
                      onCancel: o("WAWebModalManager").closeModalManager,
                    }),
                  }),
                ))
              : g.push(
                  o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow,
                );
          }),
          (t[21] = g),
          (t[22] = L),
          (t[23] = l),
          (t[24] = $))
        : ($ = t[24]);
      var P = $,
        N;
      t[25] !== g || t[26] !== l
        ? ((N = function (t) {
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
            l === r("WAWebDrawerViewType").FLYOUT
              ? (g.end(),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(o("WAWebModal.react").Modal, {
                    type: o("WAWebModal.react").ModalTheme.Tower,
                    children: u.jsx(
                      o("WAWebDialerPadFlowLoadable")
                        .WAWebDialerPadFlowLoadable,
                      {
                        onEnd: o("WAWebModalManager").closeModalManager,
                        viewType: r("WAWebDrawerViewType").MODAL,
                      },
                    ),
                  }),
                ))
              : g.push(
                  o("WAWebNewChatFlowTypes").NewChatFlowStep.DialerPadFlow,
                );
          }),
          (t[25] = g),
          (t[26] = l),
          (t[27] = N))
        : (N = t[27]);
      var M = N,
        w;
      t[28] !== g
        ? ((w = function () {
            if (
              g.step ===
              o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow
            ) {
              var e;
              (e = d.current) == null || e.handleDismiss();
            }
            g.pop();
          }),
          (t[28] = g),
          (t[29] = w))
        : (w = t[29]);
      var A = w;
      if (g.step == null) return null;
      var F = null;
      e: switch (g.step) {
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewChatDrawer: {
          var O;
          t[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((O = s._(/*BTDS*/ "New chat")), (t[30] = O))
            : (O = t[30]);
          var B;
          t[31] !== g
            ? ((B = function () {
                return g.end();
              }),
              (t[31] = g),
              (t[32] = B))
            : (B = t[32]);
          var W = l != null ? l : r("WAWebDrawerViewType").DRAWER,
            q;
          (t[33] !== S ||
          t[34] !== M ||
          t[35] !== T ||
          t[36] !== x ||
          t[37] !== P ||
          t[38] !== k ||
          t[39] !== B ||
          t[40] !== W
            ? ((q = u.jsx(r("WAWebNewChatDrawer.react"), {
                title: O,
                onBack: B,
                onClick: S,
                onNewGroup: k,
                onNewBroadcast: T,
                onNewCommunity: x,
                onNewContact: P,
                onDialerPad: M,
                viewType: W,
              })),
              (t[33] = S),
              (t[34] = M),
              (t[35] = T),
              (t[36] = x),
              (t[37] = P),
              (t[38] = k),
              (t[39] = B),
              (t[40] = W),
              (t[41] = q))
            : (q = t[41]),
            (F = q));
          break e;
        }
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewGroupFlow: {
          var U;
          t[42] !== g
            ? ((U = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    (yield e, g.end());
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()),
              (t[42] = g),
              (t[43] = U))
            : (U = t[43]);
          var V = l != null ? l : r("WAWebDrawerViewType").DRAWER,
            H;
          (t[44] !== g.pop || t[45] !== U || t[46] !== V
            ? ((H = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                onCreateGroup: U,
                onEnd: g.pop,
                viewType: V,
              })),
              (t[44] = g.pop),
              (t[45] = U),
              (t[46] = V),
              (t[47] = H))
            : (H = t[47]),
            (F = H));
          break e;
        }
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewBroadcastFlow: {
          var G;
          t[48] !== g
            ? ((G = function () {
                return g.end();
              }),
              (t[48] = g),
              (t[49] = G))
            : (G = t[49]);
          var z = l != null ? l : r("WAWebDrawerViewType").DRAWER,
            j;
          (t[50] !== g.pop || t[51] !== G || t[52] !== z
            ? ((j = u.jsx(r("WAWebNewChatFlowBroadcastContainer.react"), {
                onCloseEntireFlow: G,
                onBack: g.pop,
                viewType: z,
              })),
              (t[50] = g.pop),
              (t[51] = G),
              (t[52] = z),
              (t[53] = j))
            : (j = t[53]),
            (F = j));
          break e;
        }
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewCommunityFlow: {
          var K = l === r("WAWebDrawerViewType").MODAL ? g.end : void 0,
            Q = l != null ? l : r("WAWebDrawerViewType").DRAWER,
            X;
          (t[54] !== g.pop || t[55] !== K || t[56] !== Q
            ? ((X = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
                onBack: g.pop,
                onCreateCommunity: K,
                viewType: Q,
              })),
              (t[54] = g.pop),
              (t[55] = K),
              (t[56] = Q),
              (t[57] = X))
            : (X = t[57]),
            (F = X));
          break e;
        }
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow: {
          var Y = l != null ? l : r("WAWebDrawerViewType").DRAWER,
            J;
          (t[58] !== g.pop || t[59] !== L || t[60] !== Y
            ? ((J = u.jsx(r("WAWebContactEditDrawer.react"), {
                ref: d,
                origin: o("WAWebContactLogging").ContactSourceType.NewChat,
                onSave: L,
                onBack: g.pop,
                viewType: Y,
              })),
              (t[58] = g.pop),
              (t[59] = L),
              (t[60] = Y),
              (t[61] = J))
            : (J = t[61]),
            (F = J));
          break e;
        }
        case o("WAWebNewChatFlowTypes").NewChatFlowStep.DialerPadFlow: {
          var Z = l != null ? l : r("WAWebDrawerViewType").DRAWER,
            ee;
          (t[62] !== g.pop || t[63] !== Z
            ? ((ee = u.jsx(
                o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable,
                { onEnd: g.pop, viewType: Z },
              )),
              (t[62] = g.pop),
              (t[63] = Z),
              (t[64] = ee))
            : (ee = t[64]),
            (F = ee));
        }
      }
      var te;
      return (
        t[65] !== f || t[66] !== F || t[67] !== g || t[68] !== A || t[69] !== i
          ? ((te = u.jsx(f, {
              ref: i,
              flow: g,
              requestDismiss: A,
              children: F,
            })),
            (t[65] = f),
            (t[66] = F),
            (t[67] = g),
            (t[68] = A),
            (t[69] = i),
            (t[70] = te))
          : (te = t[70]),
        te
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield e, o("WAWebModalManager").ModalManager.close());
        })),
        p.apply(this, arguments)
      );
    }
    l.default = d;
  },
  226,
);
