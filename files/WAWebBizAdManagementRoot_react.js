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
    "useWAWebBizAdDeleteDraftModal",
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
      h = m.useState,
      y = 20,
      C = 10,
      b = {
        emptyStateWrapper: {
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          rowGap: "x1j3ira4",
          columnGap: "xrdqr27",
          $$css: !0,
        },
      };
    function v(e) {
      var t = e.manageAdsFlowID,
        n = g(!1);
      return (
        _(
          function () {
            if (!n.current) {
              var e;
              ((n.current = !0),
                (e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
                  e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                  e.LWI_SCREEN_ACTION.LWI_ACTION_VIEW,
                  e.LWI_ADS_IDENTITY_TYPE.PAGE,
                  t,
                ));
            }
          },
          [t],
        ),
        null
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.hasAds,
        n = e.manageAdsFlowID,
        r = e.pageId,
        a = g(!1);
      return (
        _(
          function () {
            if (t && !a.current) {
              var e;
              ((a.current = !0),
                (e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
                  e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                  e.LWI_SCREEN_ACTION.LWI_ACTION_TOTAL_METRICS_VIEW,
                  e.LWI_ADS_IDENTITY_TYPE.PAGE,
                  n,
                  null,
                  JSON.stringify({ pageId: r, null_state: !1 }),
                ));
            }
          },
          [n, t, r],
        ),
        null
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    var R = e !== void 0 ? e : (e = n("WAWebBizAdManagementRootQuery.graphql")),
      L = u !== void 0 ? u : (u = n("WAWebBizAdManagementRoot_query.graphql"));
    function E(e) {
      var t,
        n,
        a,
        i,
        l,
        u,
        c,
        m,
        y,
        R,
        E,
        k,
        I,
        T = e.onAdSelect,
        D = e.onExistingDraftIDChange,
        x = e.onLoginToFacebook,
        $ = e.onRecreateAd,
        P = e.onResumeDraft,
        N = e.pageId1,
        M = e.queryData,
        w = e.selectedKey,
        A = r("useWAWebNativeAdsFlowIDContext")(),
        F = r("useWAWebCometInteractionTracing")(
          r("WAWebInteractionTracePolicy").NAVIGATION_NATIVE_ADS_MANAGE,
          !0,
          60,
        ),
        O = F.completeInteraction,
        B = F.startInteraction,
        W = g(!1);
      _(
        function () {
          W.current ||
            ((W.current = !0),
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .GRAPHQL_QUERY_START,
            ),
            B());
        },
        [B],
      );
      var q = r("justknobx")._("5520"),
        U = M == null || (t = M.ctwa) == null ? void 0 : t.latest_wa_web_draft,
        V = h(!1),
        H = V[0],
        G = V[1],
        z = p(function () {
          return G(!0);
        }, []);
      _(
        function () {
          var e = q && !H ? (U == null ? void 0 : U.id) : null;
          D == null || D(e);
        },
        [q, H, U == null ? void 0 : U.id, D],
      );
      var j = r("useWAWebBizAdDeleteDraftModal")(U == null ? void 0 : U.id, z),
        K =
          U == null ||
          (n = U.spec) == null ||
          (n = n.adgroup_spec) == null ||
          (n = n[0]) == null ||
          (n = n.creative) == null
            ? void 0
            : n.object_story_spec,
        Q = r("useWAWebDraftThumbnailUrl")({
          linkPicture:
            K == null || (a = K.link_data) == null ? void 0 : a.picture,
          linkImageHash:
            K == null || (i = K.link_data) == null ? void 0 : i.image_hash,
          firstChildPicture:
            K == null ||
            (l = K.link_data) == null ||
            (l = l.child_attachments) == null ||
            (l = l[0]) == null
              ? void 0
              : l.picture,
          videoImageUrl:
            K == null || (u = K.video_data) == null ? void 0 : u.image_url,
          videoImageHash:
            K == null || (c = K.video_data) == null ? void 0 : c.image_hash,
          videoId:
            K == null || (m = K.video_data) == null ? void 0 : m.video_id,
          legacyAdAccountId:
            U == null || (y = U.spec) == null || (y = y.ad_account) == null
              ? void 0
              : y.legacy_account_id,
        }),
        X = Q.isLoadingThumbnail,
        Y = Q.thumbnailUrl,
        J = f(
          function () {
            return q && !H
              ? r("buildWAWebDraftTableItem")(
                  M,
                  Y,
                  X,
                  N,
                  function () {
                    var e = U == null ? void 0 : U.id;
                    e != null &&
                      (P == null || P(e, U == null ? void 0 : U.flow_id));
                  },
                  j,
                )
              : null;
          },
          [q, H, U, M, Y, X, P, j, N],
        ),
        Z = f(
          function () {
            return J != null ? [J] : [];
          },
          [J],
        ),
        ee = o("CometRelay").usePaginationFragment(L, M),
        te = ee.data,
        ne = ee.hasNext,
        re = ee.isLoadingNext,
        oe = ee.loadNext,
        ae = p(
          function () {
            ne && !re && oe(C);
          },
          [ne, re, oe],
        ),
        ie = f(
          function () {
            var e,
              t,
              n =
                (e = (t = te.ctwa.all_user_ads) == null ? void 0 : t.edges) !=
                null
                  ? e
                  : [];
            return n
              .filter(function (e) {
                var t;
                return ((t = e.node) == null ? void 0 : t.id) != null;
              })
              .filter(function (e) {
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
              })
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
                  D,
                  x,
                  P,
                  w,
                  A,
                  F,
                  O,
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
                      : _e == null || (D = _e.spec) == null
                        ? void 0
                        : D.audience,
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
                    onDeleteDraft: null,
                    thumbnailUrl: ye,
                    highResImageUrl: Se,
                    legacyAdAccountId: Re,
                    pageId: N,
                    link: ke,
                    childAttachments: Ie,
                    videoData: Te,
                    startTime: De,
                    durationInDays:
                      (x =
                        pe == null || (P = pe.spec) == null
                          ? void 0
                          : P.duration_in_days) != null
                        ? x
                        : _e == null || (w = _e.spec) == null
                          ? void 0
                          : w.duration_in_days,
                    boostingStatus:
                      (A =
                        pe == null || (F = pe.spec) == null
                          ? void 0
                          : F.boosting_status) != null
                        ? A
                        : _e == null || (O = _e.spec) == null
                          ? void 0
                          : O.boosting_status,
                    boostingStatusDisplayText:
                      (B =
                        pe == null
                          ? void 0
                          : pe.boosting_status_display_text) != null
                        ? B
                        : _e == null
                          ? void 0
                          : _e.boosting_status_display_text,
                    description: xe,
                    isVerified:
                      (W =
                        M == null || (q = M.page) == null
                          ? void 0
                          : q.is_verified) != null
                        ? W
                        : !1,
                    businessName:
                      M == null || (U = M.page) == null ? void 0 : U.name,
                    profilePictureUrl:
                      M == null ||
                      (V = M.page) == null ||
                      (V = V.profile_picture) == null
                        ? void 0
                        : V.uri,
                    reach:
                      (H =
                        fe == null ||
                        (G = fe[0]) == null ||
                        (G = G.node) == null
                          ? void 0
                          : G.reach) != null
                        ? H
                        : 0,
                    conversations:
                      (z =
                        fe == null ||
                        (j = fe[0]) == null ||
                        (j = j.node) == null
                          ? void 0
                          : j.results) != null
                        ? z
                        : 0,
                    adClicks:
                      (K =
                        fe == null ||
                        (Q = fe[0]) == null ||
                        (Q = Q.node) == null
                          ? void 0
                          : Q.clicks) != null
                        ? K
                        : 0,
                    spend:
                      (X =
                        fe == null ||
                        (Y = fe[0]) == null ||
                        (Y = Y.node) == null
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
                      return T(Ne);
                    },
                    onRecreateAd: function (t, n) {
                      return $ == null ? void 0 : $(ge, t, n);
                    },
                    onResumeDraft: r("WAWebNoop"),
                  };
                return Ne;
              });
          },
          [
            (R = te.ctwa.all_user_ads) == null ? void 0 : R.edges,
            N,
            M == null || (E = M.page) == null ? void 0 : E.is_verified,
            M == null || (k = M.page) == null ? void 0 : k.name,
            M == null || (I = M.page) == null || (I = I.profile_picture) == null
              ? void 0
              : I.uri,
            $,
            T,
          ],
        ),
        le = g(!1);
      _(
        function () {
          if (!le.current) {
            var e;
            ((le.current = !0),
              (e = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                e.AdsManagementQplPoint.GRAPHQL_QUERY_END,
              ),
              e.adsManagementQplAddPoint(e.AdsManagementQplPoint.TABLE_RENDER),
              e.adsManagementQplAnnotateAdCount(ie.length),
              e.endAdsManagementQplSuccess(),
              O());
          }
        },
        [ie, O],
      );
      var se = p(function (e) {
          return e.nodeId;
        }, []),
        ue = p(
          function (e) {
            if (e.isDraft) {
              e.onResumeDraft();
              return;
            }
            (o("WAWebBizAdManagementLogger").logManageAdsScreenAction(
              o("WAWebBizAdManagementLogger").LWI_SCREEN_REFERENCE
                .LWI_SCREEN_PERFORMANCE,
              o("WAWebBizAdManagementLogger").LWI_SCREEN_ACTION
                .LWI_ACTION_ADS_LISTING_CLICKED,
              o("WAWebBizAdManagementLogger").LWI_ADS_IDENTITY_TYPE.PAGE,
              A.manageAdsFlowID,
              e.boostId,
            ),
              T(e));
          },
          [A.manageAdsFlowID, T],
        );
      return ie.length === 0 && Z.length === 0
        ? d.jsx("div", {
            className: "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx",
            children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: b.emptyStateWrapper,
              children: [
                d.jsx(r("WAWebBizAdManagementNullView.react"), {
                  manageAdsFlowID: A.manageAdsFlowID,
                  pageId: N,
                }),
                x != null &&
                  d.jsx(r("WDSButton.react"), {
                    label: s._(/*BTDS*/ "Continue with Facebook"),
                    variant: "outline",
                    size: "medium",
                    onPress: x,
                  }),
              ],
            }),
          })
        : d.jsxs("div", {
            className: "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx",
            children: [
              d.jsx(v, { manageAdsFlowID: A.manageAdsFlowID }),
              d.jsx(S, {
                hasAds: ie.length > 0,
                manageAdsFlowID: A.manageAdsFlowID,
                pageId: N,
              }),
              d.jsx(r("WAWebSMBTable.react"), {
                columns: o("WAWebBizAdManagementSMBTableColumns")
                  .adManagementColumns,
                items: ie,
                getItemKey: se,
                onRowClick: ue,
                pinnedItems: Z,
                hasMore: ne,
                isLoadingMore: re,
                onLoadMore: ae,
                selectedKey: w,
              }),
            ],
          });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.onAdSelect,
        n = e.onExistingDraftIDChange,
        r = e.onLoginToFacebook,
        a = e.onRecreateAd,
        i = e.onResumeDraft,
        l = e.pageId1,
        s = e.pageId2,
        u = e.selectedKey,
        c = o("CometRelay").useLazyLoadQuery(
          R,
          { page_id_1: l, page_id_2: s, options: {}, first: y, after: null },
          { fetchPolicy: "network-only" },
        );
      return d.jsx(E, {
        queryData: c,
        onAdSelect: t,
        onExistingDraftIDChange: n,
        onLoginToFacebook: r,
        onRecreateAd: a,
        onResumeDraft: i,
        pageId1: l,
        selectedKey: u,
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.onAdSelect,
        n = e.onExistingDraftIDChange,
        r = e.onLoginToFacebook,
        a = e.onRecreateAd,
        i = e.onResumeDraft,
        l = e.pageId1,
        s = e.queryRef,
        u = e.selectedKey,
        c = o("CometRelay").usePreloadedQuery(R, s);
      return d.jsx(E, {
        queryData: c,
        onAdSelect: t,
        onExistingDraftIDChange: n,
        onLoginToFacebook: r,
        onRecreateAd: a,
        onResumeDraft: i,
        pageId1: l,
        selectedKey: u,
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.onAdSelect,
        n = e.onExistingDraftIDChange,
        o = e.onLoginToFacebook,
        a = e.onRecreateAd,
        i = e.onResumeDraft,
        l = e.pageId1,
        s = e.pageId2,
        u = e.queryRef,
        c = e.selectedKey;
      return r("justknobx")._("2130") && u != null
        ? d.jsx(I, {
            queryRef: u,
            onAdSelect: t,
            onExistingDraftIDChange: n,
            onLoginToFacebook: o,
            onRecreateAd: a,
            onResumeDraft: i,
            pageId1: l,
            selectedKey: c,
          })
        : d.jsx(k, {
            onAdSelect: t,
            onExistingDraftIDChange: n,
            onLoginToFacebook: o,
            onRecreateAd: a,
            onResumeDraft: i,
            pageId1: l,
            pageId2: s,
            selectedKey: c,
          });
    }
    ((T.displayName = T.name + " [from " + i.id + "]"), (l.default = T));
  },
  226,
);
