__d(
  "WAWebBizAdManagementRoot.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdManagementLogger",
    "WAWebBizAdManagementNullView.react",
    "WAWebBizAdManagementRootQuery.graphql",
    "WAWebBizAdManagementRoot_query.graphql",
    "WAWebBizAdManagementSMBTableColumns",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebNoop",
    "WAWebSMBTable.react",
    "WDSButton.react",
    "buildWAWebDraftTableItem",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useWAWebCometInteractionTracing",
    "useWAWebDraftThumbnailUrl",
    "useWAWebNativeAdsFlowIDContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useMemo,
      g = m.useRef,
      h = 20,
      y = 10,
      C = {
        emptyStateWrapper: {
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          rowGap: "x1j3ira4",
          columnGap: "xrdqr27",
          $$css: !0,
        },
      };
    function b(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.manageAdsFlowID,
        r = g(!1),
        a,
        i;
      return (
        t[0] !== n
          ? ((a = function () {
              if (!r.current) {
                var e;
                ((r.current = !0),
                  (e = o(
                    "WAWebBizAdManagementLogger",
                  )).logManageAdsScreenAction(
                    e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                    e.LWI_SCREEN_ACTION.LWI_ACTION_VIEW,
                    e.LWI_ADS_IDENTITY_TYPE.PAGE,
                    n,
                  ));
              }
            }),
            (i = [n]),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : ((a = t[1]), (i = t[2])),
        _(a, i),
        null
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.hasAds,
        r = e.manageAdsFlowID,
        a = e.pageId,
        i = g(!1),
        l,
        s;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a
          ? ((l = function () {
              if (n && !i.current) {
                var e;
                ((i.current = !0),
                  (e = o(
                    "WAWebBizAdManagementLogger",
                  )).logManageAdsScreenAction(
                    e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                    e.LWI_SCREEN_ACTION.LWI_ACTION_TOTAL_METRICS_VIEW,
                    e.LWI_ADS_IDENTITY_TYPE.PAGE,
                    r,
                    null,
                    JSON.stringify({ pageId: a, null_state: !1 }),
                  ));
              }
            }),
            (s = [r, n, a]),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = l),
            (t[4] = s))
          : ((l = t[3]), (s = t[4])),
        _(l, s),
        null
      );
    }
    var S = e !== void 0 ? e : (e = n("WAWebBizAdManagementRootQuery.graphql")),
      R = u !== void 0 ? u : (u = n("WAWebBizAdManagementRoot_query.graphql"));
    function L(e) {
      var t,
        n,
        a,
        i,
        l,
        u,
        c,
        m,
        p,
        f,
        h,
        S,
        L,
        T,
        D,
        x,
        $,
        P = o("react-compiler-runtime").c(73),
        N = e.onAdSelect,
        M = e.onLoginToFacebook,
        w = e.onRecreateAd,
        A = e.onResumeDraft,
        F = e.pageId1,
        O = e.queryData,
        B = e.selectedKey,
        W = r("useWAWebNativeAdsFlowIDContext")(),
        q = r("useWAWebCometInteractionTracing")(
          r("WAWebInteractionTracePolicy").NAVIGATION_NATIVE_ADS_MANAGE,
          !0,
          60,
        ),
        U = q.completeInteraction,
        V = q.startInteraction,
        H = g(!1),
        G,
        z;
      (P[0] !== V
        ? ((G = function () {
            H.current ||
              ((H.current = !0),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .GRAPHQL_QUERY_START,
              ),
              V());
          }),
          (z = [V]),
          (P[0] = V),
          (P[1] = G),
          (P[2] = z))
        : ((G = P[1]), (z = P[2])),
        _(G, z));
      var j;
      P[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = r("justknobx")._("5520")), (P[3] = j))
        : (j = P[3]);
      var K = j,
        Q = O == null || (t = O.ctwa) == null ? void 0 : t.latest_wa_web_draft,
        X =
          Q == null ||
          (n = Q.spec) == null ||
          (n = n.adgroup_spec) == null ||
          (n = n[0]) == null ||
          (n = n.creative) == null
            ? void 0
            : n.object_story_spec,
        Y = X == null || (a = X.link_data) == null ? void 0 : a.picture,
        J = X == null || (i = X.link_data) == null ? void 0 : i.image_hash,
        Z =
          X == null ||
          (l = X.link_data) == null ||
          (l = l.child_attachments) == null ||
          (l = l[0]) == null
            ? void 0
            : l.picture,
        ee = X == null || (u = X.video_data) == null ? void 0 : u.image_url,
        te = X == null || (c = X.video_data) == null ? void 0 : c.image_hash,
        ne = X == null || (m = X.video_data) == null ? void 0 : m.video_id,
        re =
          Q == null || (p = Q.spec) == null || (p = p.ad_account) == null
            ? void 0
            : p.legacy_account_id,
        oe;
      P[4] !== re ||
      P[5] !== Y ||
      P[6] !== J ||
      P[7] !== Z ||
      P[8] !== ee ||
      P[9] !== te ||
      P[10] !== ne
        ? ((oe = {
            linkPicture: Y,
            linkImageHash: J,
            firstChildPicture: Z,
            videoImageUrl: ee,
            videoImageHash: te,
            videoId: ne,
            legacyAdAccountId: re,
          }),
          (P[4] = re),
          (P[5] = Y),
          (P[6] = J),
          (P[7] = Z),
          (P[8] = ee),
          (P[9] = te),
          (P[10] = ne),
          (P[11] = oe))
        : (oe = P[11]);
      var ae = r("useWAWebDraftThumbnailUrl")(oe),
        ie = ae.isLoadingThumbnail,
        le = ae.thumbnailUrl,
        se;
      P[12] !== (Q == null ? void 0 : Q.flow_id) ||
      P[13] !== (Q == null ? void 0 : Q.id) ||
      P[14] !== le ||
      P[15] !== ie ||
      P[16] !== A ||
      P[17] !== F ||
      P[18] !== O
        ? ((se = K
            ? r("buildWAWebDraftTableItem")(O, le, ie, F, function () {
                var e = Q == null ? void 0 : Q.id;
                e != null &&
                  (A == null || A(e, Q == null ? void 0 : Q.flow_id));
              })
            : null),
          (P[12] = Q == null ? void 0 : Q.flow_id),
          (P[13] = Q == null ? void 0 : Q.id),
          (P[14] = le),
          (P[15] = ie),
          (P[16] = A),
          (P[17] = F),
          (P[18] = O),
          (P[19] = se))
        : (se = P[19]);
      var ue = se,
        ce;
      P[20] !== ue
        ? ((ce = ue != null ? [ue] : []), (P[20] = ue), (P[21] = ce))
        : (ce = P[21]);
      var de = ce,
        me = o("CometRelay").usePaginationFragment(R, O),
        pe = me.data,
        _e = me.hasNext,
        fe = me.isLoadingNext,
        ge = me.loadNext,
        he;
      P[22] !== _e || P[23] !== fe || P[24] !== ge
        ? ((he = function () {
            _e && !fe && ge(y);
          }),
          (P[22] = _e),
          (P[23] = fe),
          (P[24] = ge),
          (P[25] = he))
        : (he = P[25]);
      var ye = he,
        Ce;
      if (
        P[26] !== ((f = pe.ctwa.all_user_ads) == null ? void 0 : f.edges) ||
        P[27] !== N ||
        P[28] !== w ||
        P[29] !== F ||
        P[30] !==
          (O == null || (h = O.page) == null ? void 0 : h.is_verified) ||
        P[31] !== (O == null || (S = O.page) == null ? void 0 : S.name) ||
        P[32] !==
          (O == null || (L = O.page) == null || (L = L.profile_picture) == null
            ? void 0
            : L.uri)
      ) {
        var be, ve, Se, Re;
        ((Ce = function () {
          var e,
            t,
            n =
              (e = (t = pe.ctwa.all_user_ads) == null ? void 0 : t.edges) !=
              null
                ? e
                : [];
          return n
            .filter(I)
            .filter(k)
            .map(function (e) {
              var t,
                n,
                o,
                a,
                i,
                l,
                s,
                u,
                c,
                d,
                m,
                p,
                _,
                f,
                g,
                h,
                y,
                C,
                b,
                v,
                S,
                R,
                L,
                E,
                k,
                I,
                T,
                D,
                x,
                $,
                P,
                M,
                A,
                B,
                W,
                q,
                U,
                V,
                H,
                G,
                z,
                j,
                K,
                Q,
                X,
                Y,
                J,
                Z,
                ee,
                te,
                ne,
                re,
                oe,
                ae,
                ie,
                le,
                se,
                ue,
                ce,
                de,
                me = (t = e.node) == null ? void 0 : t.wrapper_renderer,
                pe = me == null ? void 0 : me.boosted_component,
                _e = me == null ? void 0 : me.async_request,
                fe =
                  (n =
                    pe == null ||
                    (o = pe.campaign_group) == null ||
                    (o = o.ad_insights) == null
                      ? void 0
                      : o.edges) != null
                    ? n
                    : _e == null ||
                        (a = _e.campaign_group) == null ||
                        (a = a.ad_insights) == null
                      ? void 0
                      : a.edges,
                ge =
                  (i =
                    (l = pe == null ? void 0 : pe.id) != null
                      ? l
                      : _e == null
                        ? void 0
                        : _e.id) != null
                    ? i
                    : "",
                he =
                  (s = (u = e.node) == null ? void 0 : u.id) != null ? s : "",
                ye =
                  (c =
                    pe == null || (d = pe.boosting_info) == null
                      ? void 0
                      : d.thumbnail_image_url) != null
                    ? c
                    : _e == null || (m = _e.boosting_info) == null
                      ? void 0
                      : m.thumbnail_image_url,
                Ce =
                  (p =
                    pe == null ||
                    (_ = pe.spec) == null ||
                    (_ = _.adgroup_spec) == null
                      ? void 0
                      : _[0]) != null
                    ? p
                    : _e == null ||
                        (f = _e.spec) == null ||
                        (f = f.adgroup_spec) == null
                      ? void 0
                      : f[0],
                be = Ce == null ? void 0 : Ce.creative,
                ve = Ce == null ? void 0 : Ce.adgroup_id,
                Se =
                  (g = be == null ? void 0 : be.image_url) != null
                    ? g
                    : be == null
                      ? void 0
                      : be.thumbnail_url,
                Re =
                  (h =
                    pe == null ||
                    (y = pe.spec) == null ||
                    (y = y.ad_account) == null
                      ? void 0
                      : y.legacy_account_id) != null
                    ? h
                    : _e == null ||
                        (C = _e.spec) == null ||
                        (C = C.ad_account) == null
                      ? void 0
                      : C.legacy_account_id,
                Le = be == null ? void 0 : be.object_story_spec,
                Ee = Le == null ? void 0 : Le.link_data,
                ke = Ee == null ? void 0 : Ee.link,
                Ie = Ee == null ? void 0 : Ee.child_attachments,
                Te = Le == null ? void 0 : Le.video_data,
                De =
                  (b =
                    pe == null || (v = pe.spec) == null
                      ? void 0
                      : v.start_time) != null
                    ? b
                    : _e == null || (S = _e.spec) == null
                      ? void 0
                      : S.start_time,
                xe =
                  (R =
                    (L = be == null ? void 0 : be.body) != null
                      ? L
                      : Ee == null
                        ? void 0
                        : Ee.message) != null
                    ? R
                    : Le == null || (E = Le.video_data) == null
                      ? void 0
                      : E.message,
                $e =
                  (k =
                    pe == null || (I = pe.spec) == null
                      ? void 0
                      : I.audience) != null
                    ? k
                    : _e == null || (T = _e.spec) == null
                      ? void 0
                      : T.audience,
                Pe = $e
                  ? {
                      targetSpecStringWithoutPlacements:
                        $e.target_spec_string_without_placements,
                    }
                  : null,
                Ne = {
                  adgroupId: ve,
                  boostId: ge,
                  boostedComponentRef: pe,
                  asyncRequestRef: _e,
                  draftId: null,
                  draftFlowId: null,
                  isDraft: !1,
                  isLoadingThumbnail: !1,
                  nodeId: he,
                  thumbnailUrl: ye,
                  highResImageUrl: Se,
                  legacyAdAccountId: Re,
                  pageId: F,
                  link: ke,
                  childAttachments: Ie,
                  videoData: Te,
                  startTime: De,
                  durationInDays:
                    (D =
                      pe == null || (x = pe.spec) == null
                        ? void 0
                        : x.duration_in_days) != null
                      ? D
                      : _e == null || ($ = _e.spec) == null
                        ? void 0
                        : $.duration_in_days,
                  boostingStatus:
                    (P =
                      pe == null || (M = pe.spec) == null
                        ? void 0
                        : M.boosting_status) != null
                      ? P
                      : _e == null || (A = _e.spec) == null
                        ? void 0
                        : A.boosting_status,
                  boostingStatusDisplayText:
                    (B =
                      pe == null ? void 0 : pe.boosting_status_display_text) !=
                    null
                      ? B
                      : _e == null
                        ? void 0
                        : _e.boosting_status_display_text,
                  description: xe,
                  isVerified:
                    (W =
                      O == null || (q = O.page) == null
                        ? void 0
                        : q.is_verified) != null
                      ? W
                      : !1,
                  businessName:
                    O == null || (U = O.page) == null ? void 0 : U.name,
                  profilePictureUrl:
                    O == null ||
                    (V = O.page) == null ||
                    (V = V.profile_picture) == null
                      ? void 0
                      : V.uri,
                  reach:
                    (H =
                      fe == null || (G = fe[0]) == null || (G = G.node) == null
                        ? void 0
                        : G.reach) != null
                      ? H
                      : 0,
                  conversations:
                    (z =
                      fe == null || (j = fe[0]) == null || (j = j.node) == null
                        ? void 0
                        : j.results) != null
                      ? z
                      : 0,
                  adClicks:
                    (K =
                      fe == null || (Q = fe[0]) == null || (Q = Q.node) == null
                        ? void 0
                        : Q.clicks) != null
                      ? K
                      : 0,
                  spend:
                    (X =
                      fe == null || (Y = fe[0]) == null || (Y = Y.node) == null
                        ? void 0
                        : Y.spend) != null
                      ? X
                      : 0,
                  currency:
                    (J =
                      (Z =
                        pe == null ||
                        (ee = pe.boosting_info) == null ||
                        (ee = ee.spent) == null
                          ? void 0
                          : ee.currency) != null
                        ? Z
                        : _e == null ||
                            (te = _e.boosting_info) == null ||
                            (te = te.spent) == null
                          ? void 0
                          : te.currency) != null
                      ? J
                      : "USD",
                  formattedSpent:
                    (ne =
                      (re =
                        pe == null ||
                        (oe = pe.boosting_info) == null ||
                        (oe = oe.spent) == null
                          ? void 0
                          : oe.formatted_for_lwi) != null
                        ? re
                        : _e == null ||
                            (ae = _e.boosting_info) == null ||
                            (ae = ae.spent) == null
                          ? void 0
                          : ae.formatted_for_lwi) != null
                      ? ne
                      : "",
                  budgetType:
                    (ie =
                      pe == null || (le = pe.spec) == null
                        ? void 0
                        : le.budget_type) != null
                      ? ie
                      : _e == null || (se = _e.spec) == null
                        ? void 0
                        : se.budget_type,
                  formattedBudget:
                    (ue =
                      pe == null ||
                      (ce = pe.spec) == null ||
                      (ce = ce.budget) == null
                        ? void 0
                        : ce.formatted_for_lwi) != null
                      ? ue
                      : _e == null ||
                          (de = _e.spec) == null ||
                          (de = de.budget) == null
                        ? void 0
                        : de.formatted_for_lwi,
                  audience: Pe,
                  onViewResults: function () {
                    return N(Ne);
                  },
                  onRecreateAd: function (t, n) {
                    return w == null ? void 0 : w(ge, t, n);
                  },
                  onResumeDraft: r("WAWebNoop"),
                };
              return Ne;
            });
        }),
          (P[26] = (be = pe.ctwa.all_user_ads) == null ? void 0 : be.edges),
          (P[27] = N),
          (P[28] = w),
          (P[29] = F),
          (P[30] =
            O == null || (ve = O.page) == null ? void 0 : ve.is_verified),
          (P[31] = O == null || (Se = O.page) == null ? void 0 : Se.name),
          (P[32] =
            O == null ||
            (Re = O.page) == null ||
            (Re = Re.profile_picture) == null
              ? void 0
              : Re.uri),
          (P[33] = Ce));
      } else Ce = P[33];
      ((T = pe.ctwa.all_user_ads) == null || T.edges,
        O == null || (D = O.page) == null || D.is_verified,
        O == null || (x = O.page) == null || x.name,
        O == null ||
          ($ = O.page) == null ||
          ($ = $.profile_picture) == null ||
          $.uri);
      var Le;
      P[34] !== Ce ? ((Le = Ce()), (P[34] = Ce), (P[35] = Le)) : (Le = P[35]);
      var Ee = Le,
        ke = g(!1),
        Ie;
      P[36] !== U || P[37] !== Ee.length
        ? ((Ie = function () {
            if (!ke.current) {
              var e;
              ((ke.current = !0),
                (e = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                  e.AdsManagementQplPoint.GRAPHQL_QUERY_END,
                ),
                e.adsManagementQplAddPoint(
                  e.AdsManagementQplPoint.TABLE_RENDER,
                ),
                e.adsManagementQplAnnotateAdCount(Ee.length),
                e.endAdsManagementQplSuccess(),
                U());
            }
          }),
          (P[36] = U),
          (P[37] = Ee.length),
          (P[38] = Ie))
        : (Ie = P[38]);
      var Te;
      (P[39] !== U || P[40] !== Ee
        ? ((Te = [Ee, U]), (P[39] = U), (P[40] = Ee), (P[41] = Te))
        : (Te = P[41]),
        _(Ie, Te));
      var De = E,
        xe;
      P[42] !== W.manageAdsFlowID || P[43] !== N
        ? ((xe = function (t) {
            if (t.isDraft) {
              t.onResumeDraft();
              return;
            }
            (o("WAWebBizAdManagementLogger").logManageAdsScreenAction(
              o("WAWebBizAdManagementLogger").LWI_SCREEN_REFERENCE
                .LWI_SCREEN_PERFORMANCE,
              o("WAWebBizAdManagementLogger").LWI_SCREEN_ACTION
                .LWI_ACTION_ADS_LISTING_CLICKED,
              o("WAWebBizAdManagementLogger").LWI_ADS_IDENTITY_TYPE.PAGE,
              W.manageAdsFlowID,
              t.boostId,
            ),
              N(t));
          }),
          (P[42] = W.manageAdsFlowID),
          (P[43] = N),
          (P[44] = xe))
        : (xe = P[44]);
      var $e = xe;
      if (Ee.length === 0 && de.length === 0) {
        var Pe;
        P[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((Pe = "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx"), (P[45] = Pe))
          : (Pe = P[45]);
        var Ne;
        P[46] !== W.manageAdsFlowID || P[47] !== F
          ? ((Ne = d.jsx(r("WAWebBizAdManagementNullView.react"), {
              manageAdsFlowID: W.manageAdsFlowID,
              pageId: F,
            })),
            (P[46] = W.manageAdsFlowID),
            (P[47] = F),
            (P[48] = Ne))
          : (Ne = P[48]);
        var Me;
        P[49] !== M
          ? ((Me =
              M != null &&
              d.jsx(r("WDSButton.react"), {
                label: s._(/*BTDS*/ "Continue with Facebook"),
                variant: "outline",
                size: "medium",
                onPress: M,
              })),
            (P[49] = M),
            (P[50] = Me))
          : (Me = P[50]);
        var we;
        return (
          P[51] !== Ne || P[52] !== Me
            ? ((we = d.jsx("div", {
                className: Pe,
                children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: C.emptyStateWrapper,
                  children: [Ne, Me],
                }),
              })),
              (P[51] = Ne),
              (P[52] = Me),
              (P[53] = we))
            : (we = P[53]),
          we
        );
      }
      var Ae;
      P[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ae = "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx"), (P[54] = Ae))
        : (Ae = P[54]);
      var Fe;
      P[55] !== W.manageAdsFlowID
        ? ((Fe = d.jsx(b, { manageAdsFlowID: W.manageAdsFlowID })),
          (P[55] = W.manageAdsFlowID),
          (P[56] = Fe))
        : (Fe = P[56]);
      var Oe = Ee.length > 0,
        Be;
      P[57] !== W.manageAdsFlowID || P[58] !== F || P[59] !== Oe
        ? ((Be = d.jsx(v, {
            hasAds: Oe,
            manageAdsFlowID: W.manageAdsFlowID,
            pageId: F,
          })),
          (P[57] = W.manageAdsFlowID),
          (P[58] = F),
          (P[59] = Oe),
          (P[60] = Be))
        : (Be = P[60]);
      var We;
      P[61] !== ye ||
      P[62] !== $e ||
      P[63] !== _e ||
      P[64] !== fe ||
      P[65] !== Ee ||
      P[66] !== de ||
      P[67] !== B
        ? ((We = d.jsx(r("WAWebSMBTable.react"), {
            columns: o("WAWebBizAdManagementSMBTableColumns")
              .adManagementColumns,
            items: Ee,
            getItemKey: De,
            onRowClick: $e,
            pinnedItems: de,
            hasMore: _e,
            isLoadingMore: fe,
            onLoadMore: ye,
            selectedKey: B,
          })),
          (P[61] = ye),
          (P[62] = $e),
          (P[63] = _e),
          (P[64] = fe),
          (P[65] = Ee),
          (P[66] = de),
          (P[67] = B),
          (P[68] = We))
        : (We = P[68]);
      var qe;
      return (
        P[69] !== Fe || P[70] !== Be || P[71] !== We
          ? ((qe = d.jsxs("div", { className: Ae, children: [Fe, Be, We] })),
            (P[69] = Fe),
            (P[70] = Be),
            (P[71] = We),
            (P[72] = qe))
          : (qe = P[72]),
        qe
      );
    }
    function E(e) {
      return e.nodeId;
    }
    function k(e) {
      var t,
        n,
        r = (t = e.node) == null ? void 0 : t.wrapper_renderer,
        o = r == null ? void 0 : r.boosted_component,
        a = r == null ? void 0 : r.async_request,
        i =
          (n = o == null ? void 0 : o.id) != null
            ? n
            : a == null
              ? void 0
              : a.id;
      return i != null;
    }
    function I(e) {
      var t;
      return ((t = e.node) == null ? void 0 : t.id) != null;
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onAdSelect,
        r = e.onLoginToFacebook,
        a = e.onRecreateAd,
        i = e.onResumeDraft,
        l = e.pageId1,
        s = e.pageId2,
        u = e.selectedKey,
        c = o("CometRelay").useLazyLoadQuery(
          S,
          { page_id_1: l, page_id_2: s, options: {}, first: h, after: null },
          { fetchPolicy: "network-only" },
        ),
        m;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== c ||
        t[6] !== u
          ? ((m = d.jsx(L, {
              queryData: c,
              onAdSelect: n,
              onLoginToFacebook: r,
              onRecreateAd: a,
              onResumeDraft: i,
              pageId1: l,
              selectedKey: u,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = c),
            (t[6] = u),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onAdSelect,
        r = e.onLoginToFacebook,
        a = e.onRecreateAd,
        i = e.onResumeDraft,
        l = e.pageId1,
        s = e.queryRef,
        u = e.selectedKey,
        c = o("CometRelay").usePreloadedQuery(S, s),
        m;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== c ||
        t[6] !== u
          ? ((m = d.jsx(L, {
              queryData: c,
              onAdSelect: n,
              onLoginToFacebook: r,
              onRecreateAd: a,
              onResumeDraft: i,
              pageId1: l,
              selectedKey: u,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = c),
            (t[6] = u),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.onAdSelect,
        a = e.onLoginToFacebook,
        i = e.onRecreateAd,
        l = e.onResumeDraft,
        s = e.pageId1,
        u = e.pageId2,
        c = e.queryRef,
        m = e.selectedKey;
      if (r("justknobx")._("2130") && c != null) {
        var p;
        return (
          t[0] !== n ||
          t[1] !== a ||
          t[2] !== i ||
          t[3] !== l ||
          t[4] !== s ||
          t[5] !== c ||
          t[6] !== m
            ? ((p = d.jsx(D, {
                queryRef: c,
                onAdSelect: n,
                onLoginToFacebook: a,
                onRecreateAd: i,
                onResumeDraft: l,
                pageId1: s,
                selectedKey: m,
              })),
              (t[0] = n),
              (t[1] = a),
              (t[2] = i),
              (t[3] = l),
              (t[4] = s),
              (t[5] = c),
              (t[6] = m),
              (t[7] = p))
            : (p = t[7]),
          p
        );
      }
      var _;
      return (
        t[8] !== n ||
        t[9] !== a ||
        t[10] !== i ||
        t[11] !== l ||
        t[12] !== s ||
        t[13] !== u ||
        t[14] !== m
          ? ((_ = d.jsx(T, {
              onAdSelect: n,
              onLoginToFacebook: a,
              onRecreateAd: i,
              onResumeDraft: l,
              pageId1: s,
              pageId2: u,
              selectedKey: m,
            })),
            (t[8] = n),
            (t[9] = a),
            (t[10] = i),
            (t[11] = l),
            (t[12] = s),
            (t[13] = u),
            (t[14] = m),
            (t[15] = _))
          : (_ = t[15]),
        _
      );
    }
    l.default = x;
  },
  226,
);
