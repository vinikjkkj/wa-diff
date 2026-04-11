__d(
  "useLWICometInitialAdgroups",
  [
    "AdsLWIPreqUtils",
    "CometRelay",
    "FBLogger",
    "LWICometAdgroupID",
    "LWICometAdgroupUtils",
    "LWICometAssetFeedSpecUtils",
    "LWICometCTAUtils",
    "LWICometIGV1DeprecationUtils",
    "LWICometPlacementAssetUtils",
    "jsonParseSafe",
    "justknobx",
    "objectKeys",
    "react",
    "react-compiler-runtime",
    "useLWICometInitialAdgroups_spec.graphql",
    "useLWICometInitialCreativeAssetGroupsSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useMemo;
    function c(t) {
      var a = o("react-compiler-runtime").c(15),
        i = t.adAccountID,
        l = t.initialAdgroupID,
        s = t.isNullable,
        u = t.pageID,
        c = t.pageURL,
        m = t.spec,
        p = t.targetID,
        _ = t.useAFS,
        f = o("AdsLWIPreqUtils").useShouldEnableEditErrorFix(i, !1),
        g = o("CometRelay").useFragment(
          e !== void 0 ? e : (e = n("useLWICometInitialAdgroups_spec.graphql")),
          m,
        );
      if (g == null && s !== !0)
        throw r("FBLogger")("pages_lwi").mustfixThrow(
          "the spec should not be empty",
        );
      var h = g == null ? void 0 : g.adgroup_spec,
        y = r("useLWICometInitialCreativeAssetGroupsSpec")(g);
      g == null || g.cta;
      var C;
      e: {
        if (h == null) {
          var b;
          (a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = [Object.freeze({}), null]), (a[0] = b))
            : (b = a[0]),
            (C = b));
          break e;
        }
        var v, S;
        a[1] !== (g == null ? void 0 : g.cta) ||
        a[2] !== y ||
        a[3] !== l ||
        a[4] !== h ||
        a[5] !== u ||
        a[6] !== c ||
        a[7] !== f ||
        a[8] !== p ||
        a[9] !== _
          ? ((v = {}),
            (S = null),
            h != null &&
              h.forEach(function (e, t) {
                var n,
                  a,
                  i,
                  l,
                  s,
                  m,
                  h,
                  C,
                  b,
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
                  re;
                if (e == null) {
                  r("FBLogger")("pages_lwi").mustfix(
                    "Received null adgroup in initialSpecs",
                  );
                  return;
                }
                var oe = e.creative;
                if (oe == null) {
                  r("FBLogger")("pages_lwi").mustfix(
                    "Received null creative in initialSpecs",
                  );
                  return;
                }
                var ae = o("LWICometAdgroupID").makeAdgroupID(
                  e == null ? void 0 : e.adgroup_id,
                );
                S == null && (S = ae);
                var ie = e.creative_spec_json,
                  le = ie != null ? r("jsonParseSafe")(ie, null) : null,
                  se =
                    (n =
                      (a =
                        (i =
                          (l = oe.object_story_spec) == null ||
                          (l = l.link_data) == null ||
                          (l = l.call_to_action) == null
                            ? void 0
                            : l.call_to_action_label) != null
                          ? i
                          : (s = oe.object_story_spec) == null ||
                              (s = s.video_data) == null ||
                              (s = s.call_to_action) == null
                            ? void 0
                            : s.call_to_action_label) != null
                        ? a
                        : (m = oe.object_story_spec) == null ||
                            (m = m.template_data) == null ||
                            (m = m.call_to_action) == null
                          ? void 0
                          : m.call_to_action_label) != null
                      ? n
                      : "",
                  ue;
                if (oe.instagram_story_id != null && oe.call_to_action != null)
                  ue = o("LWICometCTAUtils").getTypedCreativeCTA(
                    oe.call_to_action,
                  );
                else if (
                  oe.object_story_id != null ||
                  oe.instagram_story_id != null
                )
                  ue = o("LWICometCTAUtils").getTypedTopLevelCTA(
                    g == null ? void 0 : g.cta,
                  );
                else {
                  var ce, de, me, pe, _e, fe, ge;
                  ue = o("LWICometCTAUtils").getTypedObjectStorySpecCTA(
                    (ce =
                      (de =
                        (me =
                          (pe = oe.object_story_spec) == null ||
                          (pe = pe.link_data) == null
                            ? void 0
                            : pe.call_to_action) != null
                          ? me
                          : (_e = oe.object_story_spec) == null ||
                              (_e = _e.video_data) == null
                            ? void 0
                            : _e.call_to_action) != null
                        ? de
                        : (fe = oe.object_story_spec) == null ||
                            (fe = fe.template_data) == null
                          ? void 0
                          : fe.call_to_action) != null
                      ? ce
                      : (ge = oe.object_story_spec) == null ||
                          (ge = ge.photo_data) == null
                        ? void 0
                        : ge.call_to_action,
                  );
                }
                var he =
                    le == null || (h = le.asset_feed_spec) == null
                      ? void 0
                      : h.asset_customization_rules,
                  ye = o(
                    "LWICometIGV1DeprecationUtils",
                  ).isIGUserIdDoubleWriteEnabled(),
                  Ce =
                    le != null && he != null
                      ? o(
                          "LWICometAdgroupUtils",
                        ).getTypedObjectStorySpecFromClientObjectStorySpec(
                          o(
                            "LWICometPlacementAssetUtils",
                          ).getObjectStorySpecFromClientCreative(le),
                          ye,
                          f,
                        )
                      : o("LWICometAdgroupUtils").getTypedObjectStorySpec(
                          oe.object_story_spec,
                          ue,
                          (e == null ? void 0 : e.adgroup_id) != null &&
                            (e == null ? void 0 : e.adgroup_id) !== "",
                          c,
                          ye,
                        );
                f &&
                  ((C = Ce) == null ? void 0 : C.video_data) != null &&
                  Ce.video_data.image_hash == null &&
                  ((b = oe.object_story_spec) == null ||
                  (b = b.video_data) == null
                    ? void 0
                    : b.image_hash) != null &&
                  (Ce = babelHelpers.extends({}, Ce, {
                    video_data: babelHelpers.extends({}, Ce.video_data, {
                      image_hash: oe.object_story_spec.video_data.image_hash,
                      image_url: void 0,
                    }),
                  }));
                var be = o("LWICometCTAUtils").getTypedObjectStorySpecCTA(
                    (R = oe.catalog_story_spec) == null ||
                      (R = R.template_data) == null
                      ? void 0
                      : R.call_to_action,
                  ),
                  ve = o("LWICometAdgroupUtils").getTypedObjectStorySpec(
                    oe.catalog_story_spec,
                    be,
                    (e == null ? void 0 : e.adgroup_id) != null &&
                      (e == null ? void 0 : e.adgroup_id) !== "",
                    c,
                    ye,
                  ),
                  Se = oe.asset_feed_spec_string,
                  Re =
                    Se != null && _ && he == null
                      ? JSON.parse(Se != null ? Se : "{}")
                      : null;
                if (
                  (Re != null &&
                    Re.message_extensions != null &&
                    Re.message_extensions.type != null &&
                    (Re.message_extensions = [
                      { type: Re.message_extensions.type },
                    ]),
                  !Array.isArray((L = Re) == null ? void 0 : L.bodies) &&
                    ((E = Re) == null ? void 0 : E.bodies) != null)
                ) {
                  var Le,
                    Ee = Array.from(
                      Object.values((Le = Re) == null ? void 0 : Le.bodies),
                    );
                  Re = babelHelpers.extends({}, Re, { bodies: Ee });
                }
                if (
                  (Re != null &&
                    typeof Re == "object" &&
                    "audios" in Re &&
                    delete Re.audios,
                  (v[ae] = {
                    adgroup_status: (k = e.adgroup_status) != null ? k : void 0,
                    clientCreativeSpec: le != null ? le : void 0,
                    conversion_domain:
                      (I = e.conversion_domain) != null ? I : void 0,
                    creative: babelHelpers.extends(
                      {
                        asset_feed_spec:
                          Re != null && r("objectKeys")(Re).length !== 0
                            ? Re
                            : void 0,
                        authorization_category:
                          (T = oe.authorization_category) != null ? T : void 0,
                        body: (D = oe.body) != null ? D : void 0,
                        branded_content: {
                          ad_format:
                            (x =
                              ($ = oe.branded_content) == null
                                ? void 0
                                : $.ad_format) != null
                              ? x
                              : void 0,
                          ui_version:
                            (P =
                              (N = oe.branded_content) == null
                                ? void 0
                                : N.ui_version) != null
                              ? P
                              : void 0,
                        },
                        branded_content_boosting_type:
                          (M = oe.branded_content_boosting_type) != null
                            ? M
                            : void 0,
                        call_to_action:
                          oe.object_story_id != null ||
                          oe.instagram_story_id != null
                            ? ue
                            : void 0,
                        catalog_story_spec: ve,
                        creative_sourcing_spec: {
                          associated_product_set_id:
                            (w = oe.creative_sourcing_spec) == null
                              ? void 0
                              : w.associated_product_set_id,
                        },
                        degrees_of_freedom_spec: {
                          creative_features_spec: {
                            product_extensions: {
                              action_metadata: {
                                type:
                                  (A =
                                    (F = oe.degrees_of_freedom_spec) == null ||
                                    (F = F.creative_features_spec) == null ||
                                    (F = F.product_extensions) == null ||
                                    (F = F.action_metadata) == null
                                      ? void 0
                                      : F.type) != null
                                    ? A
                                    : "UNKOWN",
                              },
                              enroll_status:
                                (O =
                                  (B = oe.degrees_of_freedom_spec) == null ||
                                  (B = B.creative_features_spec) == null ||
                                  (B = B.product_extensions) == null
                                    ? void 0
                                    : B.enroll_status) != null
                                  ? O
                                  : "OPT_OUT",
                            },
                          },
                          degrees_of_freedom_type:
                            (W = oe.degrees_of_freedom_type) != null
                              ? W
                              : void 0,
                        },
                        facebook_branded_content: {
                          sponsor_page_id:
                            (q =
                              (U = oe.facebook_branded_content) == null
                                ? void 0
                                : U.sponsor_page_id) != null
                              ? q
                              : void 0,
                        },
                        image_hash: (V = oe.image_hash) != null ? V : void 0,
                        image_url: (H = oe.image_url) != null ? H : void 0,
                        instagram_actor_id:
                          (G = oe.instagram_actor_id) != null ? G : void 0,
                      },
                      ye && {
                        instagram_user_id:
                          (z = oe.instagram_user_id) != null ? z : void 0,
                      },
                      {
                        instagram_branded_content: {
                          sponsor_id:
                            (j =
                              (K = oe.instagram_branded_content) == null
                                ? void 0
                                : K.sponsor_id) != null
                              ? j
                              : void 0,
                        },
                        instagram_story_id:
                          (Q = oe.instagram_story_id) != null ? Q : void 0,
                        object_id:
                          Ce != null
                            ? void 0
                            : (X = oe.object_id) != null
                              ? X
                              : void 0,
                        object_story_id:
                          Ce != null
                            ? void 0
                            : r("justknobx")._("5470") && p != null && u != null
                              ? u + "_" + p
                              : (Y = oe.object_story_id) != null
                                ? Y
                                : void 0,
                        object_story_spec: Ce,
                        object_type: (J = oe.object_type) != null ? J : void 0,
                        product_data:
                          (Z =
                            le == null || (ee = le.product_data) == null
                              ? void 0
                              : ee.map(d)) != null
                            ? Z
                            : void 0,
                        product_set_id:
                          (te = oe.product_set_id) != null ? te : void 0,
                        use_page_actor_override: oe.use_page_actor_override,
                      },
                    ),
                    id: (ne = e.adgroup_id) != null ? ne : void 0,
                  }),
                  (v[ae].assetFeedSpecPlus =
                    _ &&
                    (re = o(
                      "LWICometAssetFeedSpecUtils",
                    ).getAssetFeedSpecFromObjectStorySpec(Ce, se)) != null
                      ? re
                      : void 0),
                  y != null)
                ) {
                  var ke = y[t];
                  ke != null && (v[ae].creativeAssetGroupsSpec = ke);
                }
              }),
            l != null && (S = o("LWICometAdgroupID").makeAdgroupID(l)),
            (a[1] = g == null ? void 0 : g.cta),
            (a[2] = y),
            (a[3] = l),
            (a[4] = h),
            (a[5] = u),
            (a[6] = c),
            (a[7] = f),
            (a[8] = p),
            (a[9] = _),
            (a[10] = v),
            (a[11] = S))
          : ((v = a[10]), (S = a[11]));
        var R;
        (a[12] !== v || a[13] !== S
          ? ((R = [v, S]), (a[12] = v), (a[13] = S), (a[14] = R))
          : (R = a[14]),
          (C = R));
      }
      return C;
    }
    function d(e) {
      return {
        product_id: e == null ? void 0 : e.product_id,
        product_source: e.product_source != null ? e.product_source : void 0,
      };
    }
    l.default = c;
  },
  98,
);
