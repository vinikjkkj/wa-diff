__d(
  "WAWebBusinessBroadcastHomeFlow.react",
  [
    "$InternalEnum",
    "WAWebAudienceResolver",
    "WAWebBizBroadcastCreationQPLLogger",
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
        m(v, p));
      var h;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o(
            "WAWebBizBroadcastsAudienceUtils",
          ).getBroadcastChatsAsAudiences()),
          (a[4] = h))
        : (h = a[4]);
      var S = _(h),
        R = S[0],
        L = S[1],
        E;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = []), (a[5] = E))
        : (E = a[5]);
      var k = _(E),
        I = k[0],
        T = k[1],
        D;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = []), (a[6] = D))
        : (D = a[6]);
      var x = _(D),
        $ = x[0],
        P = x[1],
        N;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (a[7] = N))
        : (N = a[7]);
      var M = o("useWAWebFlow").useFlow(f.HOME_SCREEN, N),
        w = M[0],
        A = M[1],
        F = _(null),
        O = F[0],
        B = F[1],
        W = _(!1),
        q = W[0],
        U = W[1],
        V = _(null),
        H = V[0],
        G = V[1],
        z = _(null),
        j = z[0],
        K = z[1],
        Q = _(null),
        X = Q[0],
        Y = Q[1],
        J;
      e: {
        if (H == null) {
          J = null;
          break e;
        }
        var Z;
        (a[8] !== H.broadcastJid
          ? ((Z = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(H.broadcastJid),
            )),
            (a[8] = H.broadcastJid),
            (a[9] = Z))
          : (Z = a[9]),
          (J = Z));
      }
      var ee = J,
        te;
      a[10] !== c
        ? ((te = function (t) {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(
              c,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
            ),
              G(null),
              U(!1),
              B(t));
          }),
          (a[10] = c),
          (a[11] = te))
        : (te = a[11]);
      var ne = te,
        re;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = function (t) {
            (G(null), U(!0), B(t));
          }),
          (a[12] = re))
        : (re = a[12]);
      var oe = re,
        ae;
      a[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = function (t) {
            (B(null), G(t));
          }),
          (a[13] = ae))
        : (ae = a[13]);
      var ie = ae,
        le;
      a[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = function () {
            B(null);
          }),
          (a[14] = le))
        : (le = a[14]);
      var se = le,
        ue;
      a[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = function () {
            G(null);
          }),
          (a[15] = ue))
        : (ue = a[15]);
      var ce = ue,
        de;
      a[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = function () {
            L(
              o(
                "WAWebBizBroadcastsAudienceUtils",
              ).getBroadcastChatsAsAudiences(),
            );
          }),
          (a[16] = de))
        : (de = a[16]);
      var me = r("useWAWebDebouncedCallback")(de, 0),
        pe;
      a[17] !== me
        ? ((pe = function (t) {
            o("WAWebChatGetters").getIsBroadcast(t) && me();
          }),
          (a[17] = me),
          (a[18] = pe))
        : (pe = a[18]);
      var _e = pe;
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "add",
        _e,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change",
          _e,
        ),
        o("useWAWebListener").useListener(
          r("WAWebBroadcastMetadataCollection"),
          "add",
          me,
        ),
        o("useWAWebListener").useListener(
          r("WAWebBroadcastMetadataCollection"),
          "change",
          me,
        ));
      var fe = b,
        ge;
      a[19] !== c || a[20] !== me
        ? ((ge = function (t) {
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
                    onAudienceUpdate: me,
                    surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                  },
                ),
              );
          }),
          (a[19] = c),
          (a[20] = me),
          (a[21] = ge))
        : (ge = a[21]);
      var he = ge,
        ye;
      a[22] !== he
        ? ((ye = { onDelete: fe, onRename: he }), (a[22] = he), (a[23] = ye))
        : (ye = a[23]);
      var Ce = ye,
        be;
      a[24] !== A
        ? ((be = function (t) {
            L(
              o(
                "WAWebBizBroadcastsAudienceUtils",
              ).getBroadcastChatsAsAudiences(),
            );
            var e = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(t.broadcastJid),
            );
            e != null &&
              (o("WAWebBizBroadcastCreationQPLLogger").qplCreateStart({
                bool: { has_pre_selected_audience: !0 },
                string: { entry_point: "audience_creation", platform: "web" },
              }),
              K(e),
              A.pop(),
              A.push(f.NEW_BROADCAST));
          }),
          (a[24] = A),
          (a[25] = be))
        : (be = a[25]);
      var ve = be,
        Se;
      a[26] !== c || a[27] !== A
        ? ((Se = function (t) {
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
                var a = r.map(C);
                (Y({ initialRecipientIds: a, suggestedAudienceCardId: t.id }),
                  A.push(f.CREATE_AUDIENCE));
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
          (a[27] = A),
          (a[28] = Se))
        : (Se = a[28]);
      var Re = Se,
        Le;
      a[29] !== A
        ? ((Le = function (t) {
            (o("WAWebBizBroadcastCreationQPLLogger").qplCreateStart({
              bool: { has_pre_selected_audience: !0 },
              string: { entry_point: "audience_info", platform: "web" },
            }),
              K(t),
              A.push(f.NEW_BROADCAST));
          }),
          (a[29] = A),
          (a[30] = Le))
        : (Le = a[30]);
      var Ee = Le,
        ke;
      a[31] !== A
        ? ((ke = function () {
            A.push(f.EDIT_AUDIENCE);
          }),
          (a[31] = A),
          (a[32] = ke))
        : (ke = a[32]);
      var Ie = ke,
        Te;
      (a[33] !== me || a[34] !== H
        ? ((Te = function () {
            (me(),
              H != null &&
                o("WAWebChatCollection").ChatCollection.get(
                  o("WAWebWidFactory").createWid(H.broadcastJid),
                ) == null &&
                G(null));
          }),
          (a[33] = me),
          (a[34] = H),
          (a[35] = Te))
        : (Te = a[35]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "remove",
          Te,
        ));
      var De;
      a[36] !== O
        ? ((De = function (t) {
            O != null && B(babelHelpers.extends({}, O, { campaignName: t }));
          }),
          (a[36] = O),
          (a[37] = De))
        : (De = a[37]);
      var xe = De,
        $e;
      a[38] !== A
        ? (($e = function (t, n) {
            (T(t), P(n), A.push(f.IMPORT_AUDIENCE));
          }),
          (a[38] = A),
          (a[39] = $e))
        : ($e = a[39]);
      var Pe = $e;
      if (A.step == null) return null;
      var Ne;
      a[40] !== Ce ||
      a[41] !== R ||
      a[42] !== c ||
      a[43] !== $ ||
      a[44] !== A ||
      a[45] !== ne ||
      a[46] !== Ie ||
      a[47] !== Ee ||
      a[48] !== xe ||
      a[49] !== ve ||
      a[50] !== Re ||
      a[51] !== j ||
      a[52] !== d ||
      a[53] !== Pe ||
      a[54] !== l ||
      a[55] !== me ||
      a[56] !== ee ||
      a[57] !== O ||
      a[58] !== q ||
      a[59] !== X ||
      a[60] !== I
        ? ((Ne =
            A.step === f.HOME_SCREEN
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
                                audienceActions: Ce,
                                audiencesList: R,
                                entryPoint: c,
                                onAudienceSelect: ie,
                                onBroadcastSelect: ne,
                                onClose: d,
                                onCreateAudience: function () {
                                  (Y(null), A.push(f.CREATE_AUDIENCE));
                                },
                                onCreateBroadcast: function () {
                                  (o(
                                    "WAWebBizBroadcastCreationQPLLogger",
                                  ).qplCreateStart({
                                    bool: { has_pre_selected_audience: !1 },
                                    string: {
                                      entry_point: "home_screen",
                                      platform: "web",
                                    },
                                  }),
                                    K(null),
                                    A.push(f.NEW_BROADCAST));
                                },
                                onPreview: oe,
                                onSuggestedCardPress: Re,
                                onUploadSuccess: Pe,
                              },
                            ),
                          },
                        ),
                      }),
                      u.jsxs(r("WAWebVelocityTransitionGroup"), {
                        component: "div",
                        xstyle: [
                          g.rightDrawerWrapper,
                          O != null || ee != null
                            ? g.rightDrawerOpen
                            : g.rightDrawerClosed,
                        ],
                        transitionName: "slide-left",
                        children: [
                          O != null
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
                                      initialShowPreview: q,
                                      item: O,
                                      onClose: se,
                                      onRenameSuccess: xe,
                                    },
                                  ),
                                },
                                O.campaignId,
                              )
                            : null,
                          ee != null
                            ? u.jsx(
                                o("WAWebErrorBoundary.react").ErrorBoundary,
                                {
                                  name: "biz-broadcast-audience-info-drawer",
                                  children: u.jsx(
                                    r("WAWebBroadcastInfoDrawer.react"),
                                    {
                                      chat: ee,
                                      entryPoint: c,
                                      onClose: ce,
                                      onCloseFullScreen: d,
                                      onAudienceUpdate: me,
                                      onEditAudience: Ie,
                                      onNewBroadcast: function () {
                                        return Ee(ee);
                                      },
                                      shouldUseDrawer: !1,
                                    },
                                  ),
                                },
                                ee.id.toString(),
                              )
                            : null,
                        ],
                      }),
                    ],
                  }),
                })
              : A.step === f.NEW_BROADCAST
                ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                    name: "biz-broadcast-new-broadcast",
                    onError: y,
                    children: u.jsx(
                      o("WAWebBizBroadcastNewBroadcastFlowLoadable")
                        .WAWebBizBroadcastNewBroadcastFlowLoadable,
                      {
                        chat: j,
                        entryPoint: c,
                        onBack: function () {
                          return A.pop();
                        },
                      },
                    ),
                  })
                : A.step === f.CREATE_AUDIENCE
                  ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                      name: "biz-broadcast-create-audience",
                      children: u.jsx(
                        r("WAWebBizBroadcastsUpsertAudienceScreen.react"),
                        {
                          chat: null,
                          entryPoint: c,
                          onBack: function () {
                            return A.pop();
                          },
                          onNewAudienceSuccess: function (t) {
                            (A.pop(),
                              o(
                                "WAWebBizBroadcastsAudienceUtils",
                              ).showCreateAudienceSuccessToast(
                                t,
                                "create",
                                me,
                              ));
                          },
                          onSendBroadcast: ve,
                          suggestedAudienceData: X,
                        },
                      ),
                    })
                  : A.step === f.EDIT_AUDIENCE
                    ? ee != null
                      ? u.jsx(
                          r("WAWebBizBroadcastsUpsertAudienceScreen.react"),
                          {
                            chat: ee,
                            entryPoint: c,
                            onBack: function () {
                              return A.pop();
                            },
                            onNewAudienceSuccess: function (t) {
                              A.pop();
                            },
                            onSendBroadcast: ve,
                            onUpdateAudienceSuccess: function () {
                              A.pop();
                            },
                            suggestedAudienceData: null,
                          },
                        )
                      : null
                    : A.step === f.IMPORT_AUDIENCE
                      ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                          name: "biz-broadcast-import-audience",
                          children: u.jsx(
                            o("WAWebBizBroadcastsImportAudienceScreenLoadable")
                              .WAWebBizBroadcastsImportAudienceScreenLoadable,
                            {
                              onSendBroadcast: ve,
                              entryPoint: c,
                              onClose: function () {
                                return A.pop();
                              },
                              ref: l,
                              onCreateAudienceSuccess: function (t) {
                                (A.pop(),
                                  o(
                                    "WAWebBizBroadcastsAudienceUtils",
                                  ).showCreateAudienceSuccessToast(
                                    t,
                                    "import",
                                    me,
                                  ));
                              },
                              validContactsData: I,
                              errorList: $,
                            },
                          ),
                        })
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              A.step,
                          );
                        })()),
          (a[40] = Ce),
          (a[41] = R),
          (a[42] = c),
          (a[43] = $),
          (a[44] = A),
          (a[45] = ne),
          (a[46] = Ie),
          (a[47] = Ee),
          (a[48] = xe),
          (a[49] = ve),
          (a[50] = Re),
          (a[51] = j),
          (a[52] = d),
          (a[53] = Pe),
          (a[54] = l),
          (a[55] = me),
          (a[56] = ee),
          (a[57] = O),
          (a[58] = q),
          (a[59] = X),
          (a[60] = I),
          (a[61] = Ne))
        : (Ne = a[61]);
      var Me = Ne,
        we;
      a[62] !== w || a[63] !== Me || a[64] !== A || a[65] !== l
        ? ((we = u.jsx(w, {
            flow: A,
            ref: l,
            displayName: "BusinessBroadcastHomeFlow",
            children: Me,
          })),
          (a[62] = w),
          (a[63] = Me),
          (a[64] = A),
          (a[65] = l),
          (a[66] = we))
        : (we = a[66]);
      var Ae;
      return (
        a[67] !== c || a[68] !== d || a[69] !== we
          ? ((Ae = u.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
              entryPoint: c,
              onClose: d,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
              children: we,
            })),
            (a[67] = c),
            (a[68] = d),
            (a[69] = we),
            (a[70] = Ae))
          : (Ae = a[70]),
        Ae
      );
    }
    function y() {
      return o("WAWebBizBroadcastCreationQPLLogger").qplCreateEnd(3);
    }
    function C(e) {
      return e.split("@")[0];
    }
    function b(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebWidFactory").createWid(e.broadcastJid),
      );
      t != null && o("WAWebCmd").Cmd.deleteOrExitChat(t);
    }
    function v() {
      o("WAWebBizBroadcastNewBroadcastFlowLoadable").prefetchNewBroadcastFlow();
    }
    l.default = h;
  },
  98,
);
