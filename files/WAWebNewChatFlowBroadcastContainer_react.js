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
        m = c(function (e, t, n) {
          (n === void 0 && (n = !0),
            o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(),
            n && p(e));
          var r = o("WAWebWidFactory").createWid(e.broadcastJid),
            a = o("WAWebChatCollection").ChatCollection.get(r);
          o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(
            e,
            t,
            function () {
              (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(),
                a != null && o("WAWebCmd").Cmd.closeChat(a));
            },
          );
        }, []),
        _ = c(
          function (e) {
            m(e, "create", !1);
          },
          [m],
        ),
        f = c(function (e) {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), p(e));
        }, []),
        g = c(
          function (e) {
            m(e, "import");
          },
          [m],
        ),
        h = c(
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
                  onNewAudienceSuccess: _,
                  onSendBroadcast: f,
                  suggestedAudienceData: null,
                }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          },
          [_, f],
        ),
        y = c(
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
                    onCreateAudienceSuccess: g,
                    validContactsData: e,
                  },
                ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          },
          [g],
        ),
        C = c(
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
                    onUploadSuccess: y,
                  },
                ),
              ));
          },
          [y],
        ),
        b = c(
          function () {
            t == null || t();
          },
          [t],
        ),
        v = d(function () {
          return o(
            "WAWebBizBroadcastsAudienceUtils",
          ).getBroadcastChatsAsAudiences();
        }, []),
        S =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "suggested_audiences_wa_web",
          ) === !0,
        R = c(
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
                      onNewAudienceSuccess: _,
                      onSendBroadcast: f,
                      suggestedAudienceData: i,
                    }),
                    {
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    },
                  ));
              })()
              .catch(r("WAWebNoop"));
          },
          [_, f],
        );
      return s.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
        onClose: b,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
        children: s.jsx(r("WAWebNewChatFlowBroadcastAudienceDrawer.react"), {
          ref: i,
          audiences: v,
          onBack: b,
          onCancel: l === r("WAWebDrawerViewType").MODAL ? b : void 0,
          onCreateAudience: h,
          onImportAudience: C,
          onSelectAudience: u,
          onSuggestedCardPress: R,
          suggestedAudiencesEnabled: S,
          viewType: l,
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
