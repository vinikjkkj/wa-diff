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
        ce = o("CometRelay").readInlineData(u, e),
        de = t != null ? o("CometRelay").readInlineData(c, t) : null,
        me = ce.wrapper_renderer,
        pe = me == null ? void 0 : me.boosted_component,
        _e = me == null ? void 0 : me.async_request,
        fe =
          (l = pe == null ? void 0 : pe.id) != null
            ? l
            : _e == null
              ? void 0
              : _e.id;
      if (fe == null) return null;
      var ge = (s = ce.id) != null ? s : "",
        he =
          (d =
            pe == null ||
            (m = pe.campaign_group) == null ||
            (m = m.ad_insights) == null
              ? void 0
              : m.edges) != null
            ? d
            : _e == null ||
                (p = _e.campaign_group) == null ||
                (p = p.ad_insights) == null
              ? void 0
              : p.edges,
        ye =
          (_ =
            pe == null || (f = pe.boosting_info) == null
              ? void 0
              : f.thumbnail_image_url) != null
            ? _
            : _e == null || (g = _e.boosting_info) == null
              ? void 0
              : g.thumbnail_image_url,
        Ce =
          (h =
            pe == null || (y = pe.spec) == null || (y = y.adgroup_spec) == null
              ? void 0
              : y[0]) != null
            ? h
            : _e == null ||
                (C = _e.spec) == null ||
                (C = C.adgroup_spec) == null
              ? void 0
              : C[0],
        be = Ce == null ? void 0 : Ce.creative,
        ve = Ce == null ? void 0 : Ce.adgroup_id,
        Se =
          (b = be == null ? void 0 : be.image_url) != null
            ? b
            : be == null
              ? void 0
              : be.thumbnail_url,
        Re =
          (v =
            pe == null || (S = pe.spec) == null || (S = S.ad_account) == null
              ? void 0
              : S.legacy_account_id) != null
            ? v
            : _e == null || (R = _e.spec) == null || (R = R.ad_account) == null
              ? void 0
              : R.legacy_account_id,
        Le = be == null ? void 0 : be.object_story_spec,
        Ee = Le == null ? void 0 : Le.link_data,
        ke = Ee == null ? void 0 : Ee.link,
        Ie = Ee == null ? void 0 : Ee.child_attachments,
        Te = Le == null ? void 0 : Le.video_data,
        De =
          (L = pe == null || (E = pe.spec) == null ? void 0 : E.start_time) !=
          null
            ? L
            : _e == null || (k = _e.spec) == null
              ? void 0
              : k.start_time,
        xe =
          (I =
            (T = be == null ? void 0 : be.body) != null
              ? T
              : Ee == null
                ? void 0
                : Ee.message) != null
            ? I
            : Le == null || (D = Le.video_data) == null
              ? void 0
              : D.message,
        $e =
          (x = pe == null || ($ = pe.spec) == null ? void 0 : $.audience) !=
          null
            ? x
            : _e == null || (P = _e.spec) == null
              ? void 0
              : P.audience,
        Pe = $e
          ? {
              targetSpecStringWithoutPlacements:
                $e.target_spec_string_without_placements,
            }
          : null,
        Ne = {
          adClicks:
            (N =
              he == null || (M = he[0]) == null || (M = M.node) == null
                ? void 0
                : M.clicks) != null
              ? N
              : 0,
          adgroupId: ve,
          asyncRequestRef: _e,
          audience: Pe,
          boostedComponentRef: pe,
          boostId: fe,
          boostingStatus:
            (w =
              pe == null || (A = pe.spec) == null
                ? void 0
                : A.boosting_status) != null
              ? w
              : _e == null || (F = _e.spec) == null
                ? void 0
                : F.boosting_status,
          boostingStatusDisplayText:
            (O = pe == null ? void 0 : pe.boosting_status_display_text) != null
              ? O
              : _e == null
                ? void 0
                : _e.boosting_status_display_text,
          budgetType:
            (B =
              pe == null || (W = pe.spec) == null ? void 0 : W.budget_type) !=
            null
              ? B
              : _e == null || (q = _e.spec) == null
                ? void 0
                : q.budget_type,
          businessName: de == null ? void 0 : de.name,
          childAttachments: Ie,
          conversations:
            (U =
              he == null || (V = he[0]) == null || (V = V.node) == null
                ? void 0
                : V.results) != null
              ? U
              : 0,
          currency:
            (H =
              (G =
                pe == null ||
                (z = pe.boosting_info) == null ||
                (z = z.spent) == null
                  ? void 0
                  : z.currency) != null
                ? G
                : _e == null ||
                    (j = _e.boosting_info) == null ||
                    (j = j.spent) == null
                  ? void 0
                  : j.currency) != null
              ? H
              : "USD",
          description: xe,
          draftFlowId: null,
          draftId: null,
          durationInDays:
            (K =
              pe == null || (Q = pe.spec) == null
                ? void 0
                : Q.duration_in_days) != null
              ? K
              : _e == null || (X = _e.spec) == null
                ? void 0
                : X.duration_in_days,
          formattedBudget:
            (Y =
              pe == null || (J = pe.spec) == null || (J = J.budget) == null
                ? void 0
                : J.formatted_for_lwi) != null
              ? Y
              : _e == null || (Z = _e.spec) == null || (Z = Z.budget) == null
                ? void 0
                : Z.formatted_for_lwi,
          formattedSpent:
            (ee =
              (te =
                pe == null ||
                (ne = pe.boosting_info) == null ||
                (ne = ne.spent) == null
                  ? void 0
                  : ne.formatted_for_lwi) != null
                ? te
                : _e == null ||
                    (re = _e.boosting_info) == null ||
                    (re = re.spent) == null
                  ? void 0
                  : re.formatted_for_lwi) != null
              ? ee
              : "",
          highResImageUrl: Se,
          isDraft: !1,
          isLoadingThumbnail: !1,
          isVerified:
            (oe = de == null ? void 0 : de.is_verified) != null ? oe : !1,
          legacyAdAccountId: Re,
          link: ke,
          nodeId: ge,
          onDeleteDraft: null,
          onRecreateAd: function (t, n) {
            return i == null ? void 0 : i(fe, t, n);
          },
          onResumeDraft: r("WAWebNoop"),
          onViewResults: function () {
            return a(Ne);
          },
          pageId: n,
          profilePictureUrl:
            de == null || (ae = de.profile_picture) == null ? void 0 : ae.uri,
          reach:
            (ie =
              he == null || (le = he[0]) == null || (le = le.node) == null
                ? void 0
                : le.reach) != null
              ? ie
              : 0,
          spend:
            (se =
              he == null || (ue = he[0]) == null || (ue = ue.node) == null
                ? void 0
                : ue.spend) != null
              ? se
              : 0,
          startTime: De,
          thumbnailUrl: ye,
          videoData: Te,
        };
      return Ne;
    }
    l.default = d;
  },
  98,
);
