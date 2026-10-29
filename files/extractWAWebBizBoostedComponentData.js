__d(
  "extractWAWebBizBoostedComponentData",
  [
    "CometRelay",
    "WAWebNoop",
    "extractWAWebBizBoostedComponentData_node.graphql",
    "extractWAWebBizBoostedComponentData_page.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("extractWAWebBizBoostedComponentData_node.graphql")),
      c =
        s !== void 0
          ? s
          : (s = n("extractWAWebBizBoostedComponentData_page.graphql"));
    function d(e, t, n, a, i) {
      var l,
        s,
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
        me,
        pe,
        _e,
        fe,
        ge,
        he = o("CometRelay").readInlineData(u, e),
        ye = t != null ? o("CometRelay").readInlineData(c, t) : null,
        Ce = he.wrapper_renderer,
        be = Ce == null ? void 0 : Ce.boosted_component,
        ve = Ce == null ? void 0 : Ce.async_request,
        Se =
          (l = be == null ? void 0 : be.id) != null
            ? l
            : ve == null
              ? void 0
              : ve.id;
      if (Se == null) return null;
      var Re = (s = he.id) != null ? s : "",
        Le =
          (d =
            be == null ||
            (m = be.campaign_group) == null ||
            (m = m.ad_insights) == null
              ? void 0
              : m.edges) != null
            ? d
            : ve == null ||
                (p = ve.campaign_group) == null ||
                (p = p.ad_insights) == null
              ? void 0
              : p.edges,
        Ee =
          (_ =
            be == null || (f = be.boosting_info) == null
              ? void 0
              : f.thumbnail_image_url) != null
            ? _
            : ve == null || (g = ve.boosting_info) == null
              ? void 0
              : g.thumbnail_image_url,
        ke =
          (h =
            be == null || (y = be.spec) == null || (y = y.adgroup_spec) == null
              ? void 0
              : y[0]) != null
            ? h
            : ve == null ||
                (C = ve.spec) == null ||
                (C = C.adgroup_spec) == null
              ? void 0
              : C[0],
        Ie = ke == null ? void 0 : ke.creative,
        Te = ke == null ? void 0 : ke.adgroup_id,
        De =
          (b = Ie == null ? void 0 : Ie.image_url) != null
            ? b
            : Ie == null
              ? void 0
              : Ie.thumbnail_url,
        xe =
          (v =
            be == null || (S = be.spec) == null || (S = S.ad_account) == null
              ? void 0
              : S.legacy_account_id) != null
            ? v
            : ve == null || (R = ve.spec) == null || (R = R.ad_account) == null
              ? void 0
              : R.legacy_account_id,
        $e = Ie == null ? void 0 : Ie.object_story_spec,
        Pe = $e == null ? void 0 : $e.link_data,
        Ne = Pe == null ? void 0 : Pe.link,
        Me = Pe == null ? void 0 : Pe.child_attachments,
        we = $e == null ? void 0 : $e.video_data,
        Ae =
          (L = be == null || (E = be.spec) == null ? void 0 : E.start_time) !=
          null
            ? L
            : ve == null || (k = ve.spec) == null
              ? void 0
              : k.start_time,
        Fe =
          (I =
            (T = Ie == null ? void 0 : Ie.body) != null
              ? T
              : Pe == null
                ? void 0
                : Pe.message) != null
            ? I
            : $e == null || (D = $e.video_data) == null
              ? void 0
              : D.message,
        Oe =
          (x = be == null || ($ = be.spec) == null ? void 0 : $.audience) !=
          null
            ? x
            : ve == null || (P = ve.spec) == null
              ? void 0
              : P.audience,
        Be = Oe
          ? {
              targetSpecStringWithoutPlacements:
                Oe.target_spec_string_without_placements,
            }
          : null,
        We = {
          adClicks:
            (N =
              Le == null || (M = Le[0]) == null || (M = M.node) == null
                ? void 0
                : M.clicks) != null
              ? N
              : 0,
          adgroupId: Te,
          adsLwiGoal:
            (w =
              be == null || (A = be.spec) == null ? void 0 : A.ads_lwi_goal) !=
            null
              ? w
              : ve == null || (F = ve.spec) == null
                ? void 0
                : F.ads_lwi_goal,
          asyncRequestRef: ve,
          audience: Be,
          boostedComponentRef: be,
          boostId: Se,
          boostingStatus:
            (O =
              be == null || (B = be.spec) == null
                ? void 0
                : B.boosting_status) != null
              ? O
              : ve == null || (W = ve.spec) == null
                ? void 0
                : W.boosting_status,
          boostingStatusDisplayText:
            (q = be == null ? void 0 : be.boosting_status_display_text) != null
              ? q
              : ve == null
                ? void 0
                : ve.boosting_status_display_text,
          budgetType:
            (U =
              be == null || (V = be.spec) == null ? void 0 : V.budget_type) !=
            null
              ? U
              : ve == null || (H = ve.spec) == null
                ? void 0
                : H.budget_type,
          businessName: ye == null ? void 0 : ye.name,
          childAttachments: Me,
          conversations:
            (G =
              Le == null || (z = Le[0]) == null || (z = z.node) == null
                ? void 0
                : z.results) != null
              ? G
              : 0,
          currency:
            (j =
              (K =
                be == null ||
                (Q = be.boosting_info) == null ||
                (Q = Q.spent) == null
                  ? void 0
                  : Q.currency) != null
                ? K
                : ve == null ||
                    (X = ve.boosting_info) == null ||
                    (X = X.spent) == null
                  ? void 0
                  : X.currency) != null
              ? j
              : "USD",
          description: Fe,
          draftFlowId: null,
          draftId: null,
          durationInDays:
            (Y =
              be == null || (J = be.spec) == null
                ? void 0
                : J.duration_in_days) != null
              ? Y
              : ve == null || (Z = ve.spec) == null
                ? void 0
                : Z.duration_in_days,
          formattedBudget:
            (ee =
              be == null || (te = be.spec) == null || (te = te.budget) == null
                ? void 0
                : te.formatted_for_lwi) != null
              ? ee
              : ve == null || (ne = ve.spec) == null || (ne = ne.budget) == null
                ? void 0
                : ne.formatted_for_lwi,
          formattedSpent:
            (re =
              (oe =
                be == null ||
                (ae = be.boosting_info) == null ||
                (ae = ae.spent) == null
                  ? void 0
                  : ae.formatted_for_lwi) != null
                ? oe
                : ve == null ||
                    (ie = ve.boosting_info) == null ||
                    (ie = ie.spent) == null
                  ? void 0
                  : ie.formatted_for_lwi) != null
              ? re
              : "",
          highResImageUrl: De,
          isDraft: !1,
          isLoadingThumbnail: !1,
          isVerified:
            (le = ye == null ? void 0 : ye.is_verified) != null ? le : !1,
          legacyAdAccountId: xe,
          link: Ne,
          nodeId: Re,
          onDeleteDraft: null,
          onRecreateAd: function (t, n) {
            return i == null ? void 0 : i(Se, t, n);
          },
          onResumeDraft: r("WAWebNoop"),
          onViewResults: function () {
            return a(We);
          },
          pageId: n,
          profilePictureUrl:
            ye == null || (se = ye.profile_picture) == null ? void 0 : se.uri,
          reach:
            (ue =
              Le == null || (ce = Le[0]) == null || (ce = ce.node) == null
                ? void 0
                : ce.reach) != null
              ? ue
              : 0,
          regulatedCategories:
            (de =
              (me =
                be == null || (pe = be.spec) == null
                  ? void 0
                  : pe.regulated_categories) != null
                ? me
                : ve == null || (_e = ve.spec) == null
                  ? void 0
                  : _e.regulated_categories) != null
              ? de
              : [],
          spend:
            (fe =
              Le == null || (ge = Le[0]) == null || (ge = ge.node) == null
                ? void 0
                : ge.spend) != null
              ? fe
              : 0,
          startTime: Ae,
          thumbnailUrl: Ee,
          videoData: we,
        };
      return We;
    }
    l.default = d;
  },
  98,
);
