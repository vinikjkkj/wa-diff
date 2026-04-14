__d(
  "WAWebBusinessBroadcastHomeFlow.react",
  [
    "$InternalEnum",
    "WAWebAudienceResolver",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBizBroadcastsAudienceUtils",
    "WAWebBizBroadcastsEligibilityGate.react",
    "WAWebBizBroadcastsImportAudienceScreenLoadable",
    "WAWebBizBroadcastsUpsertAudienceScreen.react",
    "WAWebBroadcastInfoDrawer.react",
    "WAWebBroadcastMetadataCollection",
    "WAWebBroadcastRenameModalLoadable",
    "WAWebBusinessBroadcastDetailsDrawer.react",
    "WAWebBusinessBroadcastHomeScreen.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebDrawer.react",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WAWebModalManager",
    "WAWebSuggestedAudienceCards",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumSurfaceType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebFlow",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useState,
      f = n("$InternalEnum").Mirrored([
        "HOME_SCREEN",
        "NEW_BROADCAST",
        "CREATE_AUDIENCE",
        "EDIT_AUDIENCE",
        "IMPORT_AUDIENCE",
      ]),
      g = {
        fullscreenRoot: { height: "x5yr21d", $$css: !0 },
        mainContentWithHeader: {
          flexGrow: "xlxc79v",
          height: "x5yr21d",
          minWidth: "xeuugli",
          $$css: !0,
        },
        rightDrawerClosed: { width: "xnalus7", $$css: !0 },
        rightDrawerOpen: {
          borderInlineStartColor: "x1vb5itz",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartWidth: "xpilrb4",
          flexGrow: "x1ikap7u",
          maxWidth: "xfp77mx",
          minWidth: "x1fx6drf",
          $$css: !0,
        },
        rightDrawerWrapper: {
          backgroundColor: "x1280gxy",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function h(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.entryPoint,
        c = l.onClose;
      m(function () {
        o(
          "WAWebBizBroadcastNewBroadcastFlowLoadable",
        ).prefetchNewBroadcastFlow();
      }, []);
      var h = _(
          o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences(),
        ),
        y = h[0],
        C = h[1],
        b = _([]),
        v = b[0],
        S = b[1],
        R = _([]),
        L = R[0],
        E = R[1],
        k = o("useWAWebFlow").useFlow(f.HOME_SCREEN, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        I = k[0],
        T = k[1],
        D = _(null),
        x = D[0],
        $ = D[1],
        P = _(!1),
        N = P[0],
        M = P[1],
        w = _(null),
        A = w[0],
        F = w[1],
        O = _(null),
        B = O[0],
        W = O[1],
        q = _(null),
        U = q[0],
        V = q[1],
        H = p(
          function () {
            return A == null
              ? null
              : o("WAWebChatCollection").ChatCollection.get(
                  o("WAWebWidFactory").createWid(A.broadcastJid),
                );
          },
          [A],
        ),
        G = d(
          function (e) {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(
              s,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
            ),
              F(null),
              M(!1),
              $(e));
          },
          [s],
        ),
        z = d(function (e) {
          (F(null), M(!0), $(e));
        }, []),
        j = d(function (e) {
          ($(null), F(e));
        }, []),
        K = d(function () {
          $(null);
        }, []),
        Q = d(function () {
          F(null);
        }, []),
        X = r("useWAWebDebouncedCallback")(function () {
          C(
            o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences(),
          );
        }, 0),
        Y = d(
          function (e) {
            o("WAWebChatGetters").getIsBroadcast(e) && X();
          },
          [X],
        );
      ((a = o("useWAWebListener")).useListener(
        o("WAWebChatCollection").ChatCollection,
        "add",
        Y,
      ),
        a.useListener(o("WAWebChatCollection").ChatCollection, "change", Y),
        a.useListener(r("WAWebBroadcastMetadataCollection"), "add", X),
        a.useListener(r("WAWebBroadcastMetadataCollection"), "change", X));
      var J = d(function (e) {
          var t = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebWidFactory").createWid(e.broadcastJid),
          );
          t != null && o("WAWebCmd").Cmd.deleteOrExitChat(t);
        }, []),
        Z = d(
          function (e) {
            var t = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(e.broadcastJid),
            );
            t != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebBroadcastRenameModalLoadable")
                    .WAWebBroadcastRenameModalLoadable,
                  {
                    chat: t,
                    entryPoint: s,
                    onClose: o("WAWebModalManager").closeModalManager,
                    onAudienceUpdate: X,
                    surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                  },
                ),
              );
          },
          [s, X],
        ),
        ee = p(
          function () {
            return { onDelete: J, onRename: Z };
          },
          [J, Z],
        ),
        te = d(
          function (e) {
            C(
              o(
                "WAWebBizBroadcastsAudienceUtils",
              ).getBroadcastChatsAsAudiences(),
            );
            var t = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(e.broadcastJid),
            );
            t != null && (W(t), T.pop(), T.push(f.NEW_BROADCAST));
          },
          [T],
        ),
        ne = d(
          function (e) {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = e.id;
              try {
                var n = yield o(
                  "WAWebSuggestedAudienceCards",
                ).resolveCardExpression(e);
                t = n.predicateType;
                var r = yield o(
                  "WAWebAudienceResolver",
                ).resolveAudienceExpression(n);
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(
                  e.id,
                  n.predicateType,
                  r.length,
                  s,
                );
                var a = r.map(function (e) {
                  return e.split("@")[0];
                });
                (V({ initialRecipientIds: a, suggestedAudienceCardId: e.id }),
                  T.push(f.CREATE_AUDIENCE));
              } catch (n) {
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(
                  e.id,
                  t,
                  s,
                );
              }
            })();
          },
          [s, T],
        ),
        re = d(
          function (e) {
            (W(e), T.push(f.NEW_BROADCAST));
          },
          [T],
        ),
        oe = d(
          function () {
            T.push(f.EDIT_AUDIENCE);
          },
          [T],
        );
      a.useListener(
        o("WAWebChatCollection").ChatCollection,
        "remove",
        function () {
          (X(),
            A != null &&
              o("WAWebChatCollection").ChatCollection.get(
                o("WAWebWidFactory").createWid(A.broadcastJid),
              ) == null &&
              F(null));
        },
      );
      var ae = d(
          function (e) {
            x != null && $(babelHelpers.extends({}, x, { campaignName: e }));
          },
          [x],
        ),
        ie = d(
          function (e, t) {
            (S(e), E(t), T.push(f.IMPORT_AUDIENCE));
          },
          [T],
        );
      if (T.step == null) return null;
      var le =
        T.step === f.HOME_SCREEN
          ? u.jsx(r("WAWebDrawer.react"), {
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                xstyle: g.fullscreenRoot,
                children: [
                  u.jsx(o("WAWebFlexBox.react").FlexColumn, {
                    xstyle: g.mainContentWithHeader,
                    children: u.jsx(
                      o("WAWebErrorBoundary.react").ErrorBoundary,
                      {
                        name: "biz-broadcast-home-screen",
                        children: u.jsx(
                          r("WAWebBusinessBroadcastHomeScreen.react"),
                          {
                            audienceActions: ee,
                            audiencesList: y,
                            entryPoint: s,
                            onAudienceSelect: j,
                            onBroadcastSelect: G,
                            onClose: c,
                            onCreateAudience: function () {
                              (V(null), T.push(f.CREATE_AUDIENCE));
                            },
                            onCreateBroadcast: function () {
                              (W(null), T.push(f.NEW_BROADCAST));
                            },
                            onPreview: z,
                            onSuggestedCardPress: ne,
                            onUploadSuccess: ie,
                          },
                        ),
                      },
                    ),
                  }),
                  u.jsxs(r("WAWebVelocityTransitionGroup"), {
                    component: "div",
                    xstyle: [
                      g.rightDrawerWrapper,
                      x != null || H != null
                        ? g.rightDrawerOpen
                        : g.rightDrawerClosed,
                    ],
                    transitionName: "slide-left",
                    children: [
                      x != null
                        ? u.jsx(
                            o("WAWebErrorBoundary.react").ErrorBoundary,
                            {
                              name: "biz-broadcast-details-drawer",
                              children: u.jsx(
                                r("WAWebBusinessBroadcastDetailsDrawer.react"),
                                {
                                  entryPoint: s,
                                  initialShowPreview: N,
                                  item: x,
                                  onClose: K,
                                  onRenameSuccess: ae,
                                },
                              ),
                            },
                            x.campaignId,
                          )
                        : null,
                      H != null
                        ? u.jsx(
                            o("WAWebErrorBoundary.react").ErrorBoundary,
                            {
                              name: "biz-broadcast-audience-info-drawer",
                              children: u.jsx(
                                r("WAWebBroadcastInfoDrawer.react"),
                                {
                                  chat: H,
                                  entryPoint: s,
                                  onClose: Q,
                                  onCloseFullScreen: c,
                                  onAudienceUpdate: X,
                                  onEditAudience: oe,
                                  onNewBroadcast: function () {
                                    return re(H);
                                  },
                                  shouldUseDrawer: !1,
                                },
                              ),
                            },
                            H.id.toString(),
                          )
                        : null,
                    ],
                  }),
                ],
              }),
            })
          : T.step === f.NEW_BROADCAST
            ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "biz-broadcast-new-broadcast",
                children: u.jsx(
                  o("WAWebBizBroadcastNewBroadcastFlowLoadable")
                    .WAWebBizBroadcastNewBroadcastFlowLoadable,
                  {
                    chat: B,
                    entryPoint: s,
                    onBack: function () {
                      return T.pop();
                    },
                  },
                ),
              })
            : T.step === f.CREATE_AUDIENCE
              ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "biz-broadcast-create-audience",
                  children: u.jsx(
                    r("WAWebBizBroadcastsUpsertAudienceScreen.react"),
                    {
                      chat: null,
                      entryPoint: s,
                      onBack: function () {
                        return T.pop();
                      },
                      onNewAudienceSuccess: function (t) {
                        (T.pop(),
                          o(
                            "WAWebBizBroadcastsAudienceUtils",
                          ).showCreateAudienceSuccessToast(t, "create", X));
                      },
                      onSendBroadcast: te,
                      suggestedAudienceData: U,
                    },
                  ),
                })
              : T.step === f.EDIT_AUDIENCE
                ? H != null
                  ? u.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
                      chat: H,
                      entryPoint: s,
                      onBack: function () {
                        return T.pop();
                      },
                      onNewAudienceSuccess: function (t) {
                        T.pop();
                      },
                      onSendBroadcast: te,
                      onUpdateAudienceSuccess: function () {
                        T.pop();
                      },
                      suggestedAudienceData: null,
                    })
                  : null
                : T.step === f.IMPORT_AUDIENCE
                  ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                      name: "biz-broadcast-import-audience",
                      children: u.jsx(
                        o("WAWebBizBroadcastsImportAudienceScreenLoadable")
                          .WAWebBizBroadcastsImportAudienceScreenLoadable,
                        {
                          entryPoint: s,
                          onClose: function () {
                            return T.pop();
                          },
                          ref: i,
                          onCreateAudienceSuccess: function (t) {
                            (T.pop(),
                              o(
                                "WAWebBizBroadcastsAudienceUtils",
                              ).showCreateAudienceSuccessToast(t, "import", X));
                          },
                          validContactsData: v,
                          errorList: L,
                        },
                      ),
                    })
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          T.step,
                      );
                    })();
      return u.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
        entryPoint: s,
        onClose: c,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
        children: u.jsx(I, {
          flow: T,
          ref: i,
          displayName: "BusinessBroadcastHomeFlow",
          children: le,
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
