__d(
  "WAWebNewChatFlowBroadcastContainer.react",
  [
    "WAWebAudienceResolver",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBizBroadcastsAudienceUtils",
    "WAWebBizBroadcastsEligibilityGate.react",
    "WAWebBizBroadcastsImportAudienceScreenLoadable",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBizBroadcastsUpsertAudienceScreen.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebDrawerViewType",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebNewChatFlowBroadcastAudienceDrawer.react",
    "WAWebNoop",
    "WAWebSuggestedAudienceCards",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m(e) {
      var t = o("WAWebWidFactory").createWid(e.broadcastJid),
        n = o("WAWebChatCollection").ChatCollection.get(t);
      n != null &&
        o("WAWebCmd")
          .Cmd.openChatFromUnread({ chat: n })
          .then(function (e) {
            e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
          });
    }
    function p(e) {
      var t = o("WAWebWidFactory").createWid(e.broadcastJid),
        n = o("WAWebChatCollection").ChatCollection.get(t);
      n != null &&
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          s.jsx(
            o("WAWebBizBroadcastNewBroadcastFlowLoadable")
              .WAWebBizBroadcastNewBroadcastFlowLoadable,
            {
              chat: n,
              entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
              onBack: function () {
                (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(),
                  m(e));
              },
            },
          ),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        );
    }
    function _(e) {
      var t = e.onBack,
        a = e.onCloseEntireFlow,
        i = e.ref,
        l = e.viewType,
        u = c(
          function (e) {
            (a == null || a(), p(e));
          },
          [a],
        ),
        _ = c(function (e, t) {
          o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
          var n = o("WAWebWidFactory").createWid(e.broadcastJid),
            r = o("WAWebChatCollection").ChatCollection.get(n);
          (m(e),
            o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(
              e,
              t,
              function () {
                (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(),
                  r != null && o("WAWebCmd").Cmd.closeChat(r));
              },
            ));
        }, []),
        f = c(
          function (e) {
            _(e, "create");
          },
          [_],
        ),
        g = c(function (e) {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), p(e));
        }, []),
        h = c(
          function (e) {
            _(e, "import");
          },
          [_],
        ),
        y = c(
          function () {
            (o("WAWebDrawerManager").closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
                  chat: null,
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                  onBack: function () {
                    return o(
                      "WAWebDrawerManager",
                    ).DrawerManager.closeDrawerFullscreen();
                  },
                  onNewAudienceSuccess: f,
                  onSendBroadcast: g,
                  suggestedAudienceData: null,
                }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          },
          [f, g],
        ),
        C = c(
          function (e, t) {
            (o("WAWebDrawerManager").closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                s.jsx(
                  o("WAWebBizBroadcastsImportAudienceScreenLoadable")
                    .WAWebBizBroadcastsImportAudienceScreenLoadable,
                  {
                    entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                      .CHAT_HOME,
                    errorList: t,
                    onClose: function () {
                      return o(
                        "WAWebDrawerManager",
                      ).DrawerManager.closeDrawerFullscreen();
                    },
                    onCreateAudienceSuccess: h,
                    onSendBroadcast: g,
                    validContactsData: e,
                  },
                ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          },
          [h, g],
        ),
        b = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importAudienceClicked(
              o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
            ),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebBizBroadcastsUploadModalLoadable.react")
                    .WAWebBizBroadcastsUploadModalLoadable,
                  {
                    entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                      .CHAT_HOME,
                    onCancel: function (t, n) {
                      (n === void 0 && (n = !1),
                        o("WAWebModalManager").ModalManager.close(),
                        n !== !0 &&
                          o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
                            o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                          ));
                    },
                    onUploadSuccess: C,
                  },
                ),
              ));
          },
          [C],
        ),
        v = c(
          function () {
            t == null || t();
          },
          [t],
        ),
        S = d(function () {
          return o(
            "WAWebBizBroadcastsAudienceUtils",
          ).getBroadcastChatsAsAudiences();
        }, []),
        R =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "suggested_audiences_wa_web",
          ) === !0,
        L = c(
          function (e) {
            n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                var t = yield o(
                    "WAWebSuggestedAudienceCards",
                  ).resolveCardExpression(e),
                  n = yield o(
                    "WAWebAudienceResolver",
                  ).resolveAudienceExpression(t);
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(
                  e.id,
                  t.predicateType,
                  n.length,
                  o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                );
                var a = n.map(function (e) {
                    return e.split("@")[0];
                  }),
                  i = { initialRecipientIds: a, suggestedAudienceCardId: e.id };
                (o("WAWebDrawerManager").closeDrawerLeft(),
                  o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                    s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
                      chat: null,
                      entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                        .CHAT_HOME,
                      onBack: function () {
                        return o(
                          "WAWebDrawerManager",
                        ).DrawerManager.closeDrawerFullscreen();
                      },
                      onNewAudienceSuccess: f,
                      onSendBroadcast: g,
                      suggestedAudienceData: i,
                    }),
                    {
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    },
                  ));
              })()
              .catch(r("WAWebNoop"));
          },
          [f, g],
        );
      return s.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
        onClose: v,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
        children: s.jsx(r("WAWebNewChatFlowBroadcastAudienceDrawer.react"), {
          ref: i,
          audiences: S,
          onBack: v,
          onCancel: l === r("WAWebDrawerViewType").MODAL ? v : void 0,
          onCreateAudience: y,
          onImportAudience: b,
          onSelectAudience: u,
          onSuggestedCardPress: L,
          suggestedAudiencesEnabled: R,
          viewType: l,
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
