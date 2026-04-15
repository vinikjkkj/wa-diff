__d(
  "WAWebNewChatFlowBroadcastContainer.react",
  [
    "WAWebAudienceResolver",
    "WAWebBizBroadcastCreationQPLLogger",
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
    "react-compiler-runtime",
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
        (o("WAWebBizBroadcastCreationQPLLogger").qplCreateStart({
          string: { entry_point: "chat_home", platform: "web" },
          bool: { has_pre_selected_audience: !0 },
        }),
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
        ));
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(21),
        a = e.onBack,
        i = e.onCloseEntireFlow,
        l = e.ref,
        u = e.viewType,
        c;
      t[0] !== i
        ? ((c = function (t) {
            (i == null || i(), p(t));
          }),
          (t[0] = i),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        m = v,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function (t) {
            m(t, "create");
          }),
          (t[2] = _))
        : (_ = t[2]);
      var S = _,
        R = b,
        L;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            m(t, "import");
          }),
          (t[3] = L))
        : (L = t[3]);
      var E = L,
        k;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            (o("WAWebDrawerManager").closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
                  chat: null,
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                  onBack: C,
                  onNewAudienceSuccess: S,
                  onSendBroadcast: R,
                  suggestedAudienceData: null,
                }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          }),
          (t[4] = k))
        : (k = t[4]);
      var I = k,
        T;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t, n) {
            (o("WAWebDrawerManager").closeDrawerLeft(),
              o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                s.jsx(
                  o("WAWebBizBroadcastsImportAudienceScreenLoadable")
                    .WAWebBizBroadcastsImportAudienceScreenLoadable,
                  {
                    entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                      .CHAT_HOME,
                    errorList: n,
                    onClose: y,
                    onCreateAudienceSuccess: E,
                    onSendBroadcast: R,
                    validContactsData: t,
                  },
                ),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              ));
          }),
          (t[5] = T))
        : (T = t[5]);
      var D = T,
        x;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
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
                    onCancel: h,
                    onUploadSuccess: D,
                  },
                ),
              ));
          }),
          (t[6] = x))
        : (x = t[6]);
      var $ = x,
        P;
      t[7] !== a
        ? ((P = function () {
            a == null || a();
          }),
          (t[7] = a),
          (t[8] = P))
        : (P = t[8]);
      var N = P,
        M;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = o(
            "WAWebBizBroadcastsAudienceUtils",
          ).getBroadcastChatsAsAudiences()),
          (t[9] = M))
        : (M = t[9]);
      var w = M,
        A =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "suggested_audiences_wa_web",
          ) === !0,
        F;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function (t) {
            n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                var e = yield o(
                    "WAWebSuggestedAudienceCards",
                  ).resolveCardExpression(t),
                  n = yield o(
                    "WAWebAudienceResolver",
                  ).resolveAudienceExpression(e);
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(
                  t.id,
                  e.predicateType,
                  n.length,
                  o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                );
                var a = n.map(g),
                  i = { initialRecipientIds: a, suggestedAudienceCardId: t.id };
                (o("WAWebDrawerManager").closeDrawerLeft(),
                  o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                    s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
                      chat: null,
                      entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                        .CHAT_HOME,
                      onBack: f,
                      onNewAudienceSuccess: S,
                      onSendBroadcast: R,
                      suggestedAudienceData: i,
                    }),
                    {
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    },
                  ));
              })()
              .catch(r("WAWebNoop"));
          }),
          (t[10] = F))
        : (F = t[10]);
      var O = F,
        B = u === r("WAWebDrawerViewType").MODAL ? N : void 0,
        W;
      t[11] !== N ||
      t[12] !== d ||
      t[13] !== l ||
      t[14] !== A ||
      t[15] !== B ||
      t[16] !== u
        ? ((W = s.jsx(r("WAWebNewChatFlowBroadcastAudienceDrawer.react"), {
            ref: l,
            audiences: w,
            onBack: N,
            onCancel: B,
            onCreateAudience: I,
            onImportAudience: $,
            onSelectAudience: d,
            onSuggestedCardPress: O,
            suggestedAudiencesEnabled: A,
            viewType: u,
          })),
          (t[11] = N),
          (t[12] = d),
          (t[13] = l),
          (t[14] = A),
          (t[15] = B),
          (t[16] = u),
          (t[17] = W))
        : (W = t[17]);
      var q;
      return (
        t[18] !== N || t[19] !== W
          ? ((q = s.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
              entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
              onClose: N,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
              children: W,
            })),
            (t[18] = N),
            (t[19] = W),
            (t[20] = q))
          : (q = t[20]),
        q
      );
    }
    function f() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    function g(e) {
      return e.split("@")[0];
    }
    function h(e, t) {
      var n = t === void 0 ? !1 : t;
      (o("WAWebModalManager").ModalManager.close(),
        n !== !0 &&
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
          ));
    }
    function y() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    function C() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    function b(e) {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), p(e));
    }
    function v(e, t) {
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
    }
    l.default = _;
  },
  98,
);
