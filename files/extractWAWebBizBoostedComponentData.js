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
        _e = o("CometRelay").readInlineData(u, e),
        fe = t != null ? o("CometRelay").readInlineData(c, t) : null,
        ge = _e.wrapper_renderer,
        he = ge == null ? void 0 : ge.boosted_component,
        ye = ge == null ? void 0 : ge.async_request,
        Ce =
          (l = he == null ? void 0 : he.id) != null
            ? l
            : ye == null
              ? void 0
              : ye.id;
      if (Ce == null) return null;
      var be = (s = _e.id) != null ? s : "",
        ve =
          (d =
            he == null ||
            (m = he.campaign_group) == null ||
            (m = m.ad_insights) == null
              ? void 0
              : m.edges) != null
            ? d
            : ye == null ||
                (p = ye.campaign_group) == null ||
                (p = p.ad_insights) == null
              ? void 0
              : p.edges,
        Se =
          (_ =
            he == null || (f = he.boosting_info) == null
              ? void 0
              : f.thumbnail_image_url) != null
            ? _
            : ye == null || (g = ye.boosting_info) == null
              ? void 0
              : g.thumbnail_image_url,
        Re =
          (h =
            he == null || (y = he.spec) == null || (y = y.adgroup_spec) == null
              ? void 0
              : y[0]) != null
            ? h
            : ye == null ||
                (C = ye.spec) == null ||
                (C = C.adgroup_spec) == null
              ? void 0
              : C[0],
        Le = Re == null ? void 0 : Re.creative,
        Ee = Re == null ? void 0 : Re.adgroup_id,
        ke =
          (b = Le == null ? void 0 : Le.image_url) != null
            ? b
            : Le == null
              ? void 0
              : Le.thumbnail_url,
        Ie =
          (v =
            he == null || (S = he.spec) == null || (S = S.ad_account) == null
              ? void 0
              : S.legacy_account_id) != null
            ? v
            : ye == null || (R = ye.spec) == null || (R = R.ad_account) == null
              ? void 0
              : R.legacy_account_id,
        Te = Le == null ? void 0 : Le.object_story_spec,
        De = Te == null ? void 0 : Te.link_data,
        xe = De == null ? void 0 : De.link,
        $e = De == null ? void 0 : De.child_attachments,
        Pe = Te == null ? void 0 : Te.video_data,
        Ne =
          (L = he == null || (E = he.spec) == null ? void 0 : E.start_time) !=
          null
            ? L
            : ye == null || (k = ye.spec) == null
              ? void 0
              : k.start_time,
        Me =
          (I =
            (T = Le == null ? void 0 : Le.body) != null
              ? T
              : De == null
                ? void 0
                : De.message) != null
            ? I
            : Te == null || (D = Te.video_data) == null
              ? void 0
              : D.message,
        we =
          (x = he == null || ($ = he.spec) == null ? void 0 : $.audience) !=
          null
            ? x
            : ye == null || (P = ye.spec) == null
              ? void 0
              : P.audience,
        Ae = we
          ? {
              targetSpecStringWithoutPlacements:
                we.target_spec_string_without_placements,
            }
          : null,
        Fe = {
          adClicks:
            (N =
              ve == null || (M = ve[0]) == null || (M = M.node) == null
                ? void 0
                : M.clicks) != null
              ? N
              : 0,
          adgroupId: Ee,
          asyncRequestRef: ye,
          audience: Ae,
          boostedComponentRef: he,
          boostId: Ce,
          boostingStatus:
            (w =
              he == null || (A = he.spec) == null
                ? void 0
                : A.boosting_status) != null
              ? w
              : ye == null || (F = ye.spec) == null
                ? void 0
                : F.boosting_status,
          boostingStatusDisplayText:
            (O = he == null ? void 0 : he.boosting_status_display_text) != null
              ? O
              : ye == null
                ? void 0
                : ye.boosting_status_display_text,
          budgetType:
            (B =
              he == null || (W = he.spec) == null ? void 0 : W.budget_type) !=
            null
              ? B
              : ye == null || (q = ye.spec) == null
                ? void 0
                : q.budget_type,
          businessName: fe == null ? void 0 : fe.name,
          childAttachments: $e,
          conversations:
            (U =
              ve == null || (V = ve[0]) == null || (V = V.node) == null
                ? void 0
                : V.results) != null
              ? U
              : 0,
          currency:
            (H =
              (G =
                he == null ||
                (z = he.boosting_info) == null ||
                (z = z.spent) == null
                  ? void 0
                  : z.currency) != null
                ? G
                : ye == null ||
                    (j = ye.boosting_info) == null ||
                    (j = j.spent) == null
                  ? void 0
                  : j.currency) != null
              ? H
              : "USD",
          description: Me,
          draftFlowId: null,
          draftId: null,
          durationInDays:
            (K =
              he == null || (Q = he.spec) == null
                ? void 0
                : Q.duration_in_days) != null
              ? K
              : ye == null || (X = ye.spec) == null
                ? void 0
                : X.duration_in_days,
          formattedBudget:
            (Y =
              he == null || (J = he.spec) == null || (J = J.budget) == null
                ? void 0
                : J.formatted_for_lwi) != null
              ? Y
              : ye == null || (Z = ye.spec) == null || (Z = Z.budget) == null
                ? void 0
                : Z.formatted_for_lwi,
          formattedSpent:
            (ee =
              (te =
                he == null ||
                (ne = he.boosting_info) == null ||
                (ne = ne.spent) == null
                  ? void 0
                  : ne.formatted_for_lwi) != null
                ? te
                : ye == null ||
                    (re = ye.boosting_info) == null ||
                    (re = re.spent) == null
                  ? void 0
                  : re.formatted_for_lwi) != null
              ? ee
              : "",
          highResImageUrl: ke,
          isDraft: !1,
          isLoadingThumbnail: !1,
          isVerified:
            (oe = fe == null ? void 0 : fe.is_verified) != null ? oe : !1,
          legacyAdAccountId: Ie,
          link: xe,
          nodeId: be,
          onDeleteDraft: null,
          onRecreateAd: function (t, n) {
            return i == null ? void 0 : i(Ce, t, n);
          },
          onResumeDraft: r("WAWebNoop"),
          onViewResults: function () {
            return a(Fe);
          },
          pageId: n,
          profilePictureUrl:
            fe == null || (ae = fe.profile_picture) == null ? void 0 : ae.uri,
          reach:
            (ie =
              ve == null || (le = ve[0]) == null || (le = le.node) == null
                ? void 0
                : le.reach) != null
              ? ie
              : 0,
          regulatedCategories:
            (se =
              (ue =
                he == null || (ce = he.spec) == null
                  ? void 0
                  : ce.regulated_categories) != null
                ? ue
                : ye == null || (de = ye.spec) == null
                  ? void 0
                  : de.regulated_categories) != null
              ? se
              : [],
          spend:
            (me =
              ve == null || (pe = ve[0]) == null || (pe = pe.node) == null
                ? void 0
                : pe.spend) != null
              ? me
              : 0,
          startTime: Ne,
          thumbnailUrl: Se,
          videoData: Pe,
        };
      return Fe;
    }
    l.default = d;
  },
  98,
);
