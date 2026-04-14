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
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
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
    v.displayName = v.name + " [from " + i.id + "]";
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
        h,
        S,
        L,
        E,
        k,
        I = e.onAdSelect,
        T = e.onLoginToFacebook,
        D = e.onRecreateAd,
        x = e.onResumeDraft,
        $ = e.pageId1,
        P = e.queryData,
        N = e.selectedKey,
        M = r("useWAWebNativeAdsFlowIDContext")(),
        w = r("useWAWebCometInteractionTracing")(
          r("WAWebInteractionTracePolicy").NAVIGATION_NATIVE_ADS_MANAGE,
          !0,
          60,
        ),
        A = w.completeInteraction,
        F = w.startInteraction,
        O = g(!1);
      _(
        function () {
          O.current ||
            ((O.current = !0),
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .GRAPHQL_QUERY_START,
            ),
            F());
        },
        [F],
      );
      var B = r("justknobx")._("5520"),
        W = P == null || (t = P.ctwa) == null ? void 0 : t.latest_wa_web_draft,
        q =
          W == null ||
          (n = W.spec) == null ||
          (n = n.adgroup_spec) == null ||
          (n = n[0]) == null ||
          (n = n.creative) == null
            ? void 0
            : n.object_story_spec,
        U = r("useWAWebDraftThumbnailUrl")({
          linkPicture:
            q == null || (a = q.link_data) == null ? void 0 : a.picture,
          linkImageHash:
            q == null || (i = q.link_data) == null ? void 0 : i.image_hash,
          firstChildPicture:
            q == null ||
            (l = q.link_data) == null ||
            (l = l.child_attachments) == null ||
            (l = l[0]) == null
              ? void 0
              : l.picture,
          videoImageUrl:
            q == null || (u = q.video_data) == null ? void 0 : u.image_url,
          videoImageHash:
            q == null || (c = q.video_data) == null ? void 0 : c.image_hash,
          videoId:
            q == null || (m = q.video_data) == null ? void 0 : m.video_id,
          legacyAdAccountId:
            W == null || (h = W.spec) == null || (h = h.ad_account) == null
              ? void 0
              : h.legacy_account_id,
        }),
        V = U.isLoadingThumbnail,
        H = U.thumbnailUrl,
        G = f(
          function () {
            return B
              ? r("buildWAWebDraftTableItem")(P, H, V, $, function () {
                  var e = W == null ? void 0 : W.id;
                  e != null &&
                    (x == null || x(e, W == null ? void 0 : W.flow_id));
                })
              : null;
          },
          [B, W, P, H, V, x, $],
        ),
        z = f(
          function () {
            return G != null ? [G] : [];
          },
          [G],
        ),
        j = o("CometRelay").usePaginationFragment(R, P),
        K = j.data,
        Q = j.hasNext,
        X = j.isLoadingNext,
        Y = j.loadNext,
        J = p(
          function () {
            Q && !X && Y(y);
          },
          [Q, X, Y],
        ),
        Z = f(
          function () {
            var e,
              t,
              n =
                (e = (t = K.ctwa.all_user_ads) == null ? void 0 : t.edges) !=
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
                  T,
                  x,
                  N,
                  M,
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
                      pe == null || (T = pe.spec) == null
                        ? void 0
                        : T.audience) != null
                      ? k
                      : _e == null || (x = _e.spec) == null
                        ? void 0
                        : x.audience,
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
                    pageId: $,
                    link: ke,
                    childAttachments: Ie,
                    videoData: Te,
                    startTime: De,
                    durationInDays:
                      (N =
                        pe == null || (M = pe.spec) == null
                          ? void 0
                          : M.duration_in_days) != null
                        ? N
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
                        P == null || (q = P.page) == null
                          ? void 0
                          : q.is_verified) != null
                        ? W
                        : !1,
                    businessName:
                      P == null || (U = P.page) == null ? void 0 : U.name,
                    profilePictureUrl:
                      P == null ||
                      (V = P.page) == null ||
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
                      return I(Ne);
                    },
                    onRecreateAd: function (t, n) {
                      return D == null ? void 0 : D(ge, t, n);
                    },
                    onResumeDraft: r("WAWebNoop"),
                  };
                return Ne;
              });
          },
          [
            (S = K.ctwa.all_user_ads) == null ? void 0 : S.edges,
            $,
            P == null || (L = P.page) == null ? void 0 : L.is_verified,
            P == null || (E = P.page) == null ? void 0 : E.name,
            P == null || (k = P.page) == null || (k = k.profile_picture) == null
              ? void 0
              : k.uri,
            D,
            I,
          ],
        ),
        ee = g(!1);
      _(
        function () {
          if (!ee.current) {
            var e;
            ((ee.current = !0),
              (e = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                e.AdsManagementQplPoint.GRAPHQL_QUERY_END,
              ),
              e.adsManagementQplAddPoint(e.AdsManagementQplPoint.TABLE_RENDER),
              e.adsManagementQplAnnotateAdCount(Z.length),
              e.endAdsManagementQplSuccess(),
              A());
          }
        },
        [Z, A],
      );
      var te = p(function (e) {
          return e.nodeId;
        }, []),
        ne = p(
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
              M.manageAdsFlowID,
              e.boostId,
            ),
              I(e));
          },
          [M.manageAdsFlowID, I],
        );
      return Z.length === 0 && z.length === 0
        ? d.jsx("div", {
            className: "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx",
            children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: C.emptyStateWrapper,
              children: [
                d.jsx(r("WAWebBizAdManagementNullView.react"), {
                  manageAdsFlowID: M.manageAdsFlowID,
                  pageId: $,
                }),
                T != null &&
                  d.jsx(r("WDSButton.react"), {
                    label: s._(/*BTDS*/ "Continue with Facebook"),
                    variant: "outline",
                    size: "medium",
                    onPress: T,
                  }),
              ],
            }),
          })
        : d.jsxs("div", {
            className: "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx",
            children: [
              d.jsx(b, { manageAdsFlowID: M.manageAdsFlowID }),
              d.jsx(v, {
                hasAds: Z.length > 0,
                manageAdsFlowID: M.manageAdsFlowID,
                pageId: $,
              }),
              d.jsx(r("WAWebSMBTable.react"), {
                columns: o("WAWebBizAdManagementSMBTableColumns")
                  .adManagementColumns,
                items: Z,
                getItemKey: te,
                onRowClick: ne,
                pinnedItems: z,
                hasMore: Q,
                isLoadingMore: X,
                onLoadMore: J,
                selectedKey: N,
              }),
            ],
          });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.onAdSelect,
        n = e.onLoginToFacebook,
        r = e.onRecreateAd,
        a = e.onResumeDraft,
        i = e.pageId1,
        l = e.pageId2,
        s = e.selectedKey,
        u = o("CometRelay").useLazyLoadQuery(
          S,
          { page_id_1: i, page_id_2: l, options: {}, first: h, after: null },
          { fetchPolicy: "network-only" },
        );
      return d.jsx(L, {
        queryData: u,
        onAdSelect: t,
        onLoginToFacebook: n,
        onRecreateAd: r,
        onResumeDraft: a,
        pageId1: i,
        selectedKey: s,
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.onAdSelect,
        n = e.onLoginToFacebook,
        r = e.onRecreateAd,
        a = e.onResumeDraft,
        i = e.pageId1,
        l = e.queryRef,
        s = e.selectedKey,
        u = o("CometRelay").usePreloadedQuery(S, l);
      return d.jsx(L, {
        queryData: u,
        onAdSelect: t,
        onLoginToFacebook: n,
        onRecreateAd: r,
        onResumeDraft: a,
        pageId1: i,
        selectedKey: s,
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.onAdSelect,
        n = e.onLoginToFacebook,
        o = e.onRecreateAd,
        a = e.onResumeDraft,
        i = e.pageId1,
        l = e.pageId2,
        s = e.queryRef,
        u = e.selectedKey;
      return r("justknobx")._("2130") && s != null
        ? d.jsx(k, {
            queryRef: s,
            onAdSelect: t,
            onLoginToFacebook: n,
            onRecreateAd: o,
            onResumeDraft: a,
            pageId1: i,
            selectedKey: u,
          })
        : d.jsx(E, {
            onAdSelect: t,
            onLoginToFacebook: n,
            onRecreateAd: o,
            onResumeDraft: a,
            pageId1: i,
            pageId2: l,
            selectedKey: u,
          });
    }
    ((I.displayName = I.name + " [from " + i.id + "]"), (l.default = I));
  },
  226,
);
