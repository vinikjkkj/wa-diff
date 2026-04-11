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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(71),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var s = i,
        c = s.entryPoint,
        d = s.onClose,
        p;
      (a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = []), (a[3] = p))
        : (p = a[3]),
        m(b, p));
      var h;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o(
            "WAWebBizBroadcastsAudienceUtils",
          ).getBroadcastChatsAsAudiences()),
          (a[4] = h))
        : (h = a[4]);
      var v = _(h),
        S = v[0],
        R = v[1],
        L;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = []), (a[5] = L))
        : (L = a[5]);
      var E = _(L),
        k = E[0],
        I = E[1],
        T;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = []), (a[6] = T))
        : (T = a[6]);
      var D = _(T),
        x = D[0],
        $ = D[1],
        P;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (a[7] = P))
        : (P = a[7]);
      var N = o("useWAWebFlow").useFlow(f.HOME_SCREEN, P),
        M = N[0],
        w = N[1],
        A = _(null),
        F = A[0],
        O = A[1],
        B = _(!1),
        W = B[0],
        q = B[1],
        U = _(null),
        V = U[0],
        H = U[1],
        G = _(null),
        z = G[0],
        j = G[1],
        K = _(null),
        Q = K[0],
        X = K[1],
        Y;
      e: {
        if (V == null) {
          Y = null;
          break e;
        }
        var J;
        (a[8] !== V.broadcastJid
          ? ((J = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(V.broadcastJid),
            )),
            (a[8] = V.broadcastJid),
            (a[9] = J))
          : (J = a[9]),
          (Y = J));
      }
      var Z = Y,
        ee;
      a[10] !== c
        ? ((ee = function (t) {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(
              c,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
            ),
              H(null),
              q(!1),
              O(t));
          }),
          (a[10] = c),
          (a[11] = ee))
        : (ee = a[11]);
      var te = ee,
        ne;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = function (t) {
            (H(null), q(!0), O(t));
          }),
          (a[12] = ne))
        : (ne = a[12]);
      var re = ne,
        oe;
      a[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = function (t) {
            (O(null), H(t));
          }),
          (a[13] = oe))
        : (oe = a[13]);
      var ae = oe,
        ie;
      a[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = function () {
            O(null);
          }),
          (a[14] = ie))
        : (ie = a[14]);
      var le = ie,
        se;
      a[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = function () {
            H(null);
          }),
          (a[15] = se))
        : (se = a[15]);
      var ue = se,
        ce;
      a[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = function () {
            R(
              o(
                "WAWebBizBroadcastsAudienceUtils",
              ).getBroadcastChatsAsAudiences(),
            );
          }),
          (a[16] = ce))
        : (ce = a[16]);
      var de = r("useWAWebDebouncedCallback")(ce, 0),
        me;
      a[17] !== de
        ? ((me = function (t) {
            o("WAWebChatGetters").getIsBroadcast(t) && de();
          }),
          (a[17] = de),
          (a[18] = me))
        : (me = a[18]);
      var pe = me;
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "add",
        pe,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change",
          pe,
        ),
        o("useWAWebListener").useListener(
          r("WAWebBroadcastMetadataCollection"),
          "add",
          de,
        ),
        o("useWAWebListener").useListener(
          r("WAWebBroadcastMetadataCollection"),
          "change",
          de,
        ));
      var _e = C,
        fe;
      a[19] !== c || a[20] !== de
        ? ((fe = function (t) {
            var e = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(t.broadcastJid),
            );
            e != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebBroadcastRenameModalLoadable")
                    .WAWebBroadcastRenameModalLoadable,
                  {
                    chat: e,
                    entryPoint: c,
                    onClose: o("WAWebModalManager").closeModalManager,
                    onAudienceUpdate: de,
                    surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                  },
                ),
              );
          }),
          (a[19] = c),
          (a[20] = de),
          (a[21] = fe))
        : (fe = a[21]);
      var ge = fe,
        he;
      a[22] !== ge
        ? ((he = { onDelete: _e, onRename: ge }), (a[22] = ge), (a[23] = he))
        : (he = a[23]);
      var ye = he,
        Ce;
      a[24] !== w
        ? ((Ce = function (t) {
            R(
              o(
                "WAWebBizBroadcastsAudienceUtils",
              ).getBroadcastChatsAsAudiences(),
            );
            var e = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(t.broadcastJid),
            );
            e != null && (j(e), w.pop(), w.push(f.NEW_BROADCAST));
          }),
          (a[24] = w),
          (a[25] = Ce))
        : (Ce = a[25]);
      var be = Ce,
        ve;
      a[26] !== c || a[27] !== w
        ? ((ve = function (t) {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = t.id;
              try {
                var n = yield o(
                  "WAWebSuggestedAudienceCards",
                ).resolveCardExpression(t);
                e = n.predicateType;
                var r = yield o(
                  "WAWebAudienceResolver",
                ).resolveAudienceExpression(n);
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(
                  t.id,
                  n.predicateType,
                  r.length,
                  c,
                );
                var a = r.map(y);
                (X({ initialRecipientIds: a, suggestedAudienceCardId: t.id }),
                  w.push(f.CREATE_AUDIENCE));
              } catch (n) {
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(
                  t.id,
                  e,
                  c,
                );
              }
            })();
          }),
          (a[26] = c),
          (a[27] = w),
          (a[28] = ve))
        : (ve = a[28]);
      var Se = ve,
        Re;
      a[29] !== w
        ? ((Re = function (t) {
            (j(t), w.push(f.NEW_BROADCAST));
          }),
          (a[29] = w),
          (a[30] = Re))
        : (Re = a[30]);
      var Le = Re,
        Ee;
      a[31] !== w
        ? ((Ee = function () {
            w.push(f.EDIT_AUDIENCE);
          }),
          (a[31] = w),
          (a[32] = Ee))
        : (Ee = a[32]);
      var ke = Ee,
        Ie;
      (a[33] !== de || a[34] !== V
        ? ((Ie = function () {
            (de(),
              V != null &&
                o("WAWebChatCollection").ChatCollection.get(
                  o("WAWebWidFactory").createWid(V.broadcastJid),
                ) == null &&
                H(null));
          }),
          (a[33] = de),
          (a[34] = V),
          (a[35] = Ie))
        : (Ie = a[35]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "remove",
          Ie,
        ));
      var Te;
      a[36] !== F
        ? ((Te = function (t) {
            F != null && O(babelHelpers.extends({}, F, { campaignName: t }));
          }),
          (a[36] = F),
          (a[37] = Te))
        : (Te = a[37]);
      var De = Te,
        xe;
      a[38] !== w
        ? ((xe = function (t, n) {
            (I(t), $(n), w.push(f.IMPORT_AUDIENCE));
          }),
          (a[38] = w),
          (a[39] = xe))
        : (xe = a[39]);
      var $e = xe;
      if (w.step == null) return null;
      var Pe;
      a[40] !== ye ||
      a[41] !== S ||
      a[42] !== c ||
      a[43] !== x ||
      a[44] !== w ||
      a[45] !== te ||
      a[46] !== ke ||
      a[47] !== Le ||
      a[48] !== De ||
      a[49] !== be ||
      a[50] !== Se ||
      a[51] !== z ||
      a[52] !== d ||
      a[53] !== $e ||
      a[54] !== l ||
      a[55] !== de ||
      a[56] !== Z ||
      a[57] !== F ||
      a[58] !== W ||
      a[59] !== Q ||
      a[60] !== k
        ? ((Pe =
            w.step === f.HOME_SCREEN
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
                                audienceActions: ye,
                                audiencesList: S,
                                entryPoint: c,
                                onAudienceSelect: ae,
                                onBroadcastSelect: te,
                                onClose: d,
                                onCreateAudience: function () {
                                  (X(null), w.push(f.CREATE_AUDIENCE));
                                },
                                onCreateBroadcast: function () {
                                  (j(null), w.push(f.NEW_BROADCAST));
                                },
                                onPreview: re,
                                onSuggestedCardPress: Se,
                                onUploadSuccess: $e,
                              },
                            ),
                          },
                        ),
                      }),
                      u.jsxs(r("WAWebVelocityTransitionGroup"), {
                        component: "div",
                        xstyle: [
                          g.rightDrawerWrapper,
                          F != null || Z != null
                            ? g.rightDrawerOpen
                            : g.rightDrawerClosed,
                        ],
                        transitionName: "slide-left",
                        children: [
                          F != null
                            ? u.jsx(
                                o("WAWebErrorBoundary.react").ErrorBoundary,
                                {
                                  name: "biz-broadcast-details-drawer",
                                  children: u.jsx(
                                    r(
                                      "WAWebBusinessBroadcastDetailsDrawer.react",
                                    ),
                                    {
                                      entryPoint: c,
                                      initialShowPreview: W,
                                      item: F,
                                      onClose: le,
                                      onRenameSuccess: De,
                                    },
                                  ),
                                },
                                F.campaignId,
                              )
                            : null,
                          Z != null
                            ? u.jsx(
                                o("WAWebErrorBoundary.react").ErrorBoundary,
                                {
                                  name: "biz-broadcast-audience-info-drawer",
                                  children: u.jsx(
                                    r("WAWebBroadcastInfoDrawer.react"),
                                    {
                                      chat: Z,
                                      entryPoint: c,
                                      onClose: ue,
                                      onCloseFullScreen: d,
                                      onAudienceUpdate: de,
                                      onEditAudience: ke,
                                      onNewBroadcast: function () {
                                        return Le(Z);
                                      },
                                      shouldUseDrawer: !1,
                                    },
                                  ),
                                },
                                Z.id.toString(),
                              )
                            : null,
                        ],
                      }),
                    ],
                  }),
                })
              : w.step === f.NEW_BROADCAST
                ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                    name: "biz-broadcast-new-broadcast",
                    children: u.jsx(
                      o("WAWebBizBroadcastNewBroadcastFlowLoadable")
                        .WAWebBizBroadcastNewBroadcastFlowLoadable,
                      {
                        chat: z,
                        entryPoint: c,
                        onBack: function () {
                          return w.pop();
                        },
                      },
                    ),
                  })
                : w.step === f.CREATE_AUDIENCE
                  ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                      name: "biz-broadcast-create-audience",
                      children: u.jsx(
                        r("WAWebBizBroadcastsUpsertAudienceScreen.react"),
                        {
                          chat: null,
                          entryPoint: c,
                          onBack: function () {
                            return w.pop();
                          },
                          onNewAudienceSuccess: function (t) {
                            (w.pop(),
                              o(
                                "WAWebBizBroadcastsAudienceUtils",
                              ).showCreateAudienceSuccessToast(
                                t,
                                "create",
                                de,
                              ));
                          },
                          onSendBroadcast: be,
                          suggestedAudienceData: Q,
                        },
                      ),
                    })
                  : w.step === f.EDIT_AUDIENCE
                    ? Z != null
                      ? u.jsx(
                          r("WAWebBizBroadcastsUpsertAudienceScreen.react"),
                          {
                            chat: Z,
                            entryPoint: c,
                            onBack: function () {
                              return w.pop();
                            },
                            onNewAudienceSuccess: function (t) {
                              w.pop();
                            },
                            onSendBroadcast: be,
                            onUpdateAudienceSuccess: function () {
                              w.pop();
                            },
                            suggestedAudienceData: null,
                          },
                        )
                      : null
                    : w.step === f.IMPORT_AUDIENCE
                      ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                          name: "biz-broadcast-import-audience",
                          children: u.jsx(
                            o("WAWebBizBroadcastsImportAudienceScreenLoadable")
                              .WAWebBizBroadcastsImportAudienceScreenLoadable,
                            {
                              entryPoint: c,
                              onClose: function () {
                                return w.pop();
                              },
                              ref: l,
                              onCreateAudienceSuccess: function (t) {
                                (w.pop(),
                                  o(
                                    "WAWebBizBroadcastsAudienceUtils",
                                  ).showCreateAudienceSuccessToast(
                                    t,
                                    "import",
                                    de,
                                  ));
                              },
                              validContactsData: k,
                              errorList: x,
                            },
                          ),
                        })
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              w.step,
                          );
                        })()),
          (a[40] = ye),
          (a[41] = S),
          (a[42] = c),
          (a[43] = x),
          (a[44] = w),
          (a[45] = te),
          (a[46] = ke),
          (a[47] = Le),
          (a[48] = De),
          (a[49] = be),
          (a[50] = Se),
          (a[51] = z),
          (a[52] = d),
          (a[53] = $e),
          (a[54] = l),
          (a[55] = de),
          (a[56] = Z),
          (a[57] = F),
          (a[58] = W),
          (a[59] = Q),
          (a[60] = k),
          (a[61] = Pe))
        : (Pe = a[61]);
      var Ne = Pe,
        Me;
      a[62] !== M || a[63] !== Ne || a[64] !== w || a[65] !== l
        ? ((Me = u.jsx(M, {
            flow: w,
            ref: l,
            displayName: "BusinessBroadcastHomeFlow",
            children: Ne,
          })),
          (a[62] = M),
          (a[63] = Ne),
          (a[64] = w),
          (a[65] = l),
          (a[66] = Me))
        : (Me = a[66]);
      var we;
      return (
        a[67] !== c || a[68] !== d || a[69] !== Me
          ? ((we = u.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
              entryPoint: c,
              onClose: d,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
              children: Me,
            })),
            (a[67] = c),
            (a[68] = d),
            (a[69] = Me),
            (a[70] = we))
          : (we = a[70]),
        we
      );
    }
    function y(e) {
      return e.split("@")[0];
    }
    function C(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebWidFactory").createWid(e.broadcastJid),
      );
      t != null && o("WAWebCmd").Cmd.deleteOrExitChat(t);
    }
    function b() {
      o("WAWebBizBroadcastNewBroadcastFlowLoadable").prefetchNewBroadcastFlow();
    }
    l.default = h;
  },
  98,
);
