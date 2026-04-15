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
    function S(e) {
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
    function R(e) {
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
                    e.LWI_SCREEN_ACTION
                      .LWI_ACTION_MANAGE_AD_DRAFT_AD_IMPRESSION,
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
    var L = e !== void 0 ? e : (e = n("WAWebBizAdManagementRootQuery.graphql")),
      E = u !== void 0 ? u : (u = n("WAWebBizAdManagementRoot_query.graphql"));
    function k(e) {
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
        y,
        L,
        k,
        x,
        $,
        P,
        N,
        M = o("react-compiler-runtime").c(88),
        w = e.onAdSelect,
        A = e.onExistingDraftIDChange,
        F = e.onLoginToFacebook,
        O = e.onRecreateAd,
        B = e.onResumeDraft,
        W = e.pageId1,
        q = e.queryData,
        U = e.selectedKey,
        V = r("useWAWebNativeAdsFlowIDContext")(),
        H = r("useWAWebCometInteractionTracing")(
          r("WAWebInteractionTracePolicy").NAVIGATION_NATIVE_ADS_MANAGE,
          !0,
          60,
        ),
        G = H.completeInteraction,
        z = H.startInteraction,
        j = g(!1),
        K,
        Q;
      (M[0] !== z
        ? ((K = function () {
            j.current ||
              ((j.current = !0),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .GRAPHQL_QUERY_START,
              ),
              z());
          }),
          (Q = [z]),
          (M[0] = z),
          (M[1] = K),
          (M[2] = Q))
        : ((K = M[1]), (Q = M[2])),
        _(K, Q));
      var X;
      M[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = r("justknobx")._("5520")), (M[3] = X))
        : (X = M[3]);
      var Y = X,
        J = q == null || (t = q.ctwa) == null ? void 0 : t.latest_wa_web_draft,
        Z = h(!1),
        ee = Z[0],
        te = Z[1],
        ne;
      M[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = function () {
            return te(!0);
          }),
          (M[4] = ne))
        : (ne = M[4]);
      var re = ne,
        oe;
      M[5] !== (J == null ? void 0 : J.id) || M[6] !== ee || M[7] !== A
        ? ((oe = function () {
            var e = Y && !ee ? (J == null ? void 0 : J.id) : null;
            A == null || A(e);
          }),
          (M[5] = J == null ? void 0 : J.id),
          (M[6] = ee),
          (M[7] = A),
          (M[8] = oe))
        : (oe = M[8]);
      var ae = J == null ? void 0 : J.id,
        ie;
      (M[9] !== ee || M[10] !== A || M[11] !== ae
        ? ((ie = [Y, ee, ae, A]),
          (M[9] = ee),
          (M[10] = A),
          (M[11] = ae),
          (M[12] = ie))
        : (ie = M[12]),
        _(oe, ie));
      var le = r("useWAWebBizAdDeleteDraftModal")(
          J == null ? void 0 : J.id,
          re,
          V.manageAdsFlowID,
        ),
        se =
          J == null ||
          (n = J.spec) == null ||
          (n = n.adgroup_spec) == null ||
          (n = n[0]) == null ||
          (n = n.creative) == null
            ? void 0
            : n.object_story_spec,
        ue = se == null || (a = se.link_data) == null ? void 0 : a.picture,
        ce = se == null || (i = se.link_data) == null ? void 0 : i.image_hash,
        de =
          se == null ||
          (l = se.link_data) == null ||
          (l = l.child_attachments) == null ||
          (l = l[0]) == null
            ? void 0
            : l.picture,
        me = se == null || (u = se.video_data) == null ? void 0 : u.image_url,
        pe = se == null || (c = se.video_data) == null ? void 0 : c.image_hash,
        _e = se == null || (m = se.video_data) == null ? void 0 : m.video_id,
        fe =
          J == null || (p = J.spec) == null || (p = p.ad_account) == null
            ? void 0
            : p.legacy_account_id,
        ge;
      M[13] !== de ||
      M[14] !== me ||
      M[15] !== pe ||
      M[16] !== _e ||
      M[17] !== fe ||
      M[18] !== ue ||
      M[19] !== ce
        ? ((ge = {
            linkPicture: ue,
            linkImageHash: ce,
            firstChildPicture: de,
            videoImageUrl: me,
            videoImageHash: pe,
            videoId: _e,
            legacyAdAccountId: fe,
          }),
          (M[13] = de),
          (M[14] = me),
          (M[15] = pe),
          (M[16] = _e),
          (M[17] = fe),
          (M[18] = ue),
          (M[19] = ce),
          (M[20] = ge))
        : (ge = M[20]);
      var he = r("useWAWebDraftThumbnailUrl")(ge),
        ye = he.isLoadingThumbnail,
        Ce = he.thumbnailUrl,
        be;
      M[21] !== (J == null ? void 0 : J.flow_id) ||
      M[22] !== (J == null ? void 0 : J.id) ||
      M[23] !== Ce ||
      M[24] !== ee ||
      M[25] !== ye ||
      M[26] !== B ||
      M[27] !== le ||
      M[28] !== W ||
      M[29] !== q
        ? ((be =
            Y && !ee
              ? r("buildWAWebDraftTableItem")(
                  q,
                  Ce,
                  ye,
                  W,
                  function () {
                    var e = J == null ? void 0 : J.id;
                    e != null &&
                      (B == null || B(e, J == null ? void 0 : J.flow_id));
                  },
                  le,
                )
              : null),
          (M[21] = J == null ? void 0 : J.flow_id),
          (M[22] = J == null ? void 0 : J.id),
          (M[23] = Ce),
          (M[24] = ee),
          (M[25] = ye),
          (M[26] = B),
          (M[27] = le),
          (M[28] = W),
          (M[29] = q),
          (M[30] = be))
        : (be = M[30]);
      var ve = be,
        Se;
      M[31] !== ve
        ? ((Se = ve != null ? [ve] : []), (M[31] = ve), (M[32] = Se))
        : (Se = M[32]);
      var Re = Se,
        Le = o("CometRelay").usePaginationFragment(E, q),
        Ee = Le.data,
        ke = Le.hasNext,
        Ie = Le.isLoadingNext,
        Te = Le.loadNext,
        De;
      M[33] !== ke || M[34] !== Ie || M[35] !== Te
        ? ((De = function () {
            ke && !Ie && Te(C);
          }),
          (M[33] = ke),
          (M[34] = Ie),
          (M[35] = Te),
          (M[36] = De))
        : (De = M[36]);
      var xe = De,
        $e;
      if (
        M[37] !== ((f = Ee.ctwa.all_user_ads) == null ? void 0 : f.edges) ||
        M[38] !== w ||
        M[39] !== O ||
        M[40] !== W ||
        M[41] !==
          (q == null || (y = q.page) == null ? void 0 : y.is_verified) ||
        M[42] !== (q == null || (L = q.page) == null ? void 0 : L.name) ||
        M[43] !==
          (q == null || (k = q.page) == null || (k = k.profile_picture) == null
            ? void 0
            : k.uri)
      ) {
        var Pe, Ne, Me, we;
        (($e = function () {
          var e,
            t,
            n =
              (e = (t = Ee.ctwa.all_user_ads) == null ? void 0 : t.edges) !=
              null
                ? e
                : [];
          return n
            .filter(D)
            .filter(T)
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
                N,
                M,
                A,
                F,
                B,
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
                  onDeleteDraft: null,
                  thumbnailUrl: ye,
                  highResImageUrl: Se,
                  legacyAdAccountId: Re,
                  pageId: W,
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
                      pe == null || (N = pe.spec) == null
                        ? void 0
                        : N.boosting_status) != null
                      ? P
                      : _e == null || (M = _e.spec) == null
                        ? void 0
                        : M.boosting_status,
                  boostingStatusDisplayText:
                    (A =
                      pe == null ? void 0 : pe.boosting_status_display_text) !=
                    null
                      ? A
                      : _e == null
                        ? void 0
                        : _e.boosting_status_display_text,
                  description: xe,
                  isVerified:
                    (F =
                      q == null || (B = q.page) == null
                        ? void 0
                        : B.is_verified) != null
                      ? F
                      : !1,
                  businessName:
                    q == null || (U = q.page) == null ? void 0 : U.name,
                  profilePictureUrl:
                    q == null ||
                    (V = q.page) == null ||
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
                    return w(Ne);
                  },
                  onRecreateAd: function (t, n) {
                    return O == null ? void 0 : O(ge, t, n);
                  },
                  onResumeDraft: r("WAWebNoop"),
                };
              return Ne;
            });
        }),
          (M[37] = (Pe = Ee.ctwa.all_user_ads) == null ? void 0 : Pe.edges),
          (M[38] = w),
          (M[39] = O),
          (M[40] = W),
          (M[41] =
            q == null || (Ne = q.page) == null ? void 0 : Ne.is_verified),
          (M[42] = q == null || (Me = q.page) == null ? void 0 : Me.name),
          (M[43] =
            q == null ||
            (we = q.page) == null ||
            (we = we.profile_picture) == null
              ? void 0
              : we.uri),
          (M[44] = $e));
      } else $e = M[44];
      ((x = Ee.ctwa.all_user_ads) == null || x.edges,
        q == null || ($ = q.page) == null || $.is_verified,
        q == null || (P = q.page) == null || P.name,
        q == null ||
          (N = q.page) == null ||
          (N = N.profile_picture) == null ||
          N.uri);
      var Ae;
      M[45] !== $e ? ((Ae = $e()), (M[45] = $e), (M[46] = Ae)) : (Ae = M[46]);
      var Fe = Ae,
        Oe = g(!1),
        Be;
      M[47] !== G || M[48] !== Fe.length
        ? ((Be = function () {
            if (!Oe.current) {
              var e;
              ((Oe.current = !0),
                (e = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
                  e.AdsManagementQplPoint.GRAPHQL_QUERY_END,
                ),
                e.adsManagementQplAddPoint(
                  e.AdsManagementQplPoint.TABLE_RENDER,
                ),
                e.adsManagementQplAnnotateAdCount(Fe.length),
                e.endAdsManagementQplSuccess(),
                G());
            }
          }),
          (M[47] = G),
          (M[48] = Fe.length),
          (M[49] = Be))
        : (Be = M[49]);
      var We;
      (M[50] !== G || M[51] !== Fe
        ? ((We = [Fe, G]), (M[50] = G), (M[51] = Fe), (M[52] = We))
        : (We = M[52]),
        _(Be, We));
      var qe = I,
        Ue;
      M[53] !== V.manageAdsFlowID || M[54] !== w
        ? ((Ue = function (t) {
            if (t.isDraft) {
              var e;
              ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
                e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                e.LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_DRAFT_AD_CLICK,
                e.LWI_ADS_IDENTITY_TYPE.PAGE,
                V.manageAdsFlowID,
              ),
                t.onResumeDraft());
              return;
            }
            (o("WAWebBizAdManagementLogger").logManageAdsScreenAction(
              o("WAWebBizAdManagementLogger").LWI_SCREEN_REFERENCE
                .LWI_SCREEN_PERFORMANCE,
              o("WAWebBizAdManagementLogger").LWI_SCREEN_ACTION
                .LWI_ACTION_ADS_LISTING_CLICKED,
              o("WAWebBizAdManagementLogger").LWI_ADS_IDENTITY_TYPE.PAGE,
              V.manageAdsFlowID,
              t.boostId,
            ),
              w(t));
          }),
          (M[53] = V.manageAdsFlowID),
          (M[54] = w),
          (M[55] = Ue))
        : (Ue = M[55]);
      var Ve = Ue;
      if (Fe.length === 0 && Re.length === 0) {
        var He;
        M[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((He = "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx"), (M[56] = He))
          : (He = M[56]);
        var Ge;
        M[57] !== V.manageAdsFlowID || M[58] !== W
          ? ((Ge = d.jsx(r("WAWebBizAdManagementNullView.react"), {
              manageAdsFlowID: V.manageAdsFlowID,
              pageId: W,
            })),
            (M[57] = V.manageAdsFlowID),
            (M[58] = W),
            (M[59] = Ge))
          : (Ge = M[59]);
        var ze;
        M[60] !== F
          ? ((ze =
              F != null &&
              d.jsx(r("WDSButton.react"), {
                label: s._(/*BTDS*/ "Continue with Facebook"),
                variant: "outline",
                size: "medium",
                onPress: F,
              })),
            (M[60] = F),
            (M[61] = ze))
          : (ze = M[61]);
        var je;
        return (
          M[62] !== Ge || M[63] !== ze
            ? ((je = d.jsx("div", {
                className: He,
                children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: b.emptyStateWrapper,
                  children: [Ge, ze],
                }),
              })),
              (M[62] = Ge),
              (M[63] = ze),
              (M[64] = je))
            : (je = M[64]),
          je
        );
      }
      var Ke;
      M[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ke = "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx"), (M[65] = Ke))
        : (Ke = M[65]);
      var Qe;
      M[66] !== V.manageAdsFlowID
        ? ((Qe = d.jsx(v, { manageAdsFlowID: V.manageAdsFlowID })),
          (M[66] = V.manageAdsFlowID),
          (M[67] = Qe))
        : (Qe = M[67]);
      var Xe;
      M[68] !== ve || M[69] !== V.manageAdsFlowID
        ? ((Xe =
            ve != null && d.jsx(R, { manageAdsFlowID: V.manageAdsFlowID })),
          (M[68] = ve),
          (M[69] = V.manageAdsFlowID),
          (M[70] = Xe))
        : (Xe = M[70]);
      var Ye = Fe.length > 0,
        Je;
      M[71] !== V.manageAdsFlowID || M[72] !== W || M[73] !== Ye
        ? ((Je = d.jsx(S, {
            hasAds: Ye,
            manageAdsFlowID: V.manageAdsFlowID,
            pageId: W,
          })),
          (M[71] = V.manageAdsFlowID),
          (M[72] = W),
          (M[73] = Ye),
          (M[74] = Je))
        : (Je = M[74]);
      var Ze;
      M[75] !== xe ||
      M[76] !== Ve ||
      M[77] !== ke ||
      M[78] !== Ie ||
      M[79] !== Fe ||
      M[80] !== Re ||
      M[81] !== U
        ? ((Ze = d.jsx(r("WAWebSMBTable.react"), {
            columns: o("WAWebBizAdManagementSMBTableColumns")
              .adManagementColumns,
            items: Fe,
            getItemKey: qe,
            onRowClick: Ve,
            pinnedItems: Re,
            hasMore: ke,
            isLoadingMore: Ie,
            onLoadMore: xe,
            selectedKey: U,
          })),
          (M[75] = xe),
          (M[76] = Ve),
          (M[77] = ke),
          (M[78] = Ie),
          (M[79] = Fe),
          (M[80] = Re),
          (M[81] = U),
          (M[82] = Ze))
        : (Ze = M[82]);
      var et;
      return (
        M[83] !== Qe || M[84] !== Xe || M[85] !== Je || M[86] !== Ze
          ? ((et = d.jsxs("div", {
              className: Ke,
              children: [Qe, Xe, Je, Ze],
            })),
            (M[83] = Qe),
            (M[84] = Xe),
            (M[85] = Je),
            (M[86] = Ze),
            (M[87] = et))
          : (et = M[87]),
        et
      );
    }
    function I(e) {
      return e.nodeId;
    }
    function T(e) {
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
    function D(e) {
      var t;
      return ((t = e.node) == null ? void 0 : t.id) != null;
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onAdSelect,
        r = e.onExistingDraftIDChange,
        a = e.onLoginToFacebook,
        i = e.onRecreateAd,
        l = e.onResumeDraft,
        s = e.pageId1,
        u = e.pageId2,
        c = e.selectedKey,
        m = o("CometRelay").useLazyLoadQuery(
          L,
          { page_id_1: s, page_id_2: u, options: {}, first: y, after: null },
          { fetchPolicy: "network-only" },
        ),
        p;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== s ||
        t[6] !== m ||
        t[7] !== c
          ? ((p = d.jsx(k, {
              queryData: m,
              onAdSelect: n,
              onExistingDraftIDChange: r,
              onLoginToFacebook: a,
              onRecreateAd: i,
              onResumeDraft: l,
              pageId1: s,
              selectedKey: c,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = s),
            (t[6] = m),
            (t[7] = c),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onAdSelect,
        r = e.onExistingDraftIDChange,
        a = e.onLoginToFacebook,
        i = e.onRecreateAd,
        l = e.onResumeDraft,
        s = e.pageId1,
        u = e.queryRef,
        c = e.selectedKey,
        m = o("CometRelay").usePreloadedQuery(L, u),
        p;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== s ||
        t[6] !== m ||
        t[7] !== c
          ? ((p = d.jsx(k, {
              queryData: m,
              onAdSelect: n,
              onExistingDraftIDChange: r,
              onLoginToFacebook: a,
              onRecreateAd: i,
              onResumeDraft: l,
              pageId1: s,
              selectedKey: c,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = s),
            (t[6] = m),
            (t[7] = c),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.onAdSelect,
        a = e.onExistingDraftIDChange,
        i = e.onLoginToFacebook,
        l = e.onRecreateAd,
        s = e.onResumeDraft,
        u = e.pageId1,
        c = e.pageId2,
        m = e.queryRef,
        p = e.selectedKey;
      if (r("justknobx")._("2130") && m != null) {
        var _;
        return (
          t[0] !== n ||
          t[1] !== a ||
          t[2] !== i ||
          t[3] !== l ||
          t[4] !== s ||
          t[5] !== u ||
          t[6] !== m ||
          t[7] !== p
            ? ((_ = d.jsx($, {
                queryRef: m,
                onAdSelect: n,
                onExistingDraftIDChange: a,
                onLoginToFacebook: i,
                onRecreateAd: l,
                onResumeDraft: s,
                pageId1: u,
                selectedKey: p,
              })),
              (t[0] = n),
              (t[1] = a),
              (t[2] = i),
              (t[3] = l),
              (t[4] = s),
              (t[5] = u),
              (t[6] = m),
              (t[7] = p),
              (t[8] = _))
            : (_ = t[8]),
          _
        );
      }
      var f;
      return (
        t[9] !== n ||
        t[10] !== a ||
        t[11] !== i ||
        t[12] !== l ||
        t[13] !== s ||
        t[14] !== u ||
        t[15] !== c ||
        t[16] !== p
          ? ((f = d.jsx(x, {
              onAdSelect: n,
              onExistingDraftIDChange: a,
              onLoginToFacebook: i,
              onRecreateAd: l,
              onResumeDraft: s,
              pageId1: u,
              pageId2: c,
              selectedKey: p,
            })),
            (t[9] = n),
            (t[10] = a),
            (t[11] = i),
            (t[12] = l),
            (t[13] = s),
            (t[14] = u),
            (t[15] = c),
            (t[16] = p),
            (t[17] = f))
          : (f = t[17]),
        f
      );
    }
    l.default = P;
  },
  226,
);
