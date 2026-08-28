__d(
  "AdsAdgroupCreativeAssetGroupsSpecMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPlusCSCJUtils",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedMutationUtils",
    "AdsInstagramActorIDUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsSEConsentScopeRolloutUtils",
    "AdsUEditorAdgroupMultiPostSpecUtils",
    "AdsUEditorCTXDestinationUtils",
    "AdsUEditorCTXFlexibleFormatUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsWebsiteExtensionTypeUtils",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "ProductBrowsingAdsUtils",
    "SEFunnelLogger",
    "WebToXFeatureGating",
    "adsCallToActionGetDefaultCallToActionType",
    "gkx",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["image_crops"];
    function s(e, t) {
      var n,
        r,
        o =
          (n =
            (r = e.creative_asset_groups_spec) == null || (r = r.toJS()) == null
              ? void 0
              : r.groups) != null
            ? n
            : [];
      return o[t];
    }
    function u(e, t, n, o) {
      var a,
        i = s(e, t);
      if (i == null) return e;
      var l = babelHelpers.extends({}, i, ((a = {}), (a[o] = n), a)),
        u = r("immutable").Map(l);
      return r("AdsAdgroupRecordAccessors")
        .creative_asset_groups_spec.groups.at(t)
        .set(u, e);
    }
    function c(e, t, n, r) {
      var a,
        i = s(e, t);
      if (i == null) return e;
      var l = (a = i.posts) != null ? a : [],
        c = l.findIndex(function (e) {
          return (
            o(
              "AdsUEditorAdgroupMultiPostSpecUtils",
            ).getPostIdentityKeyFromCagPost(e) === n
          );
        });
      if (c === -1) return e;
      var d = l.map(function (e, t) {
        return t === c ? babelHelpers.extends({}, e, r) : e;
      });
      return u(e, t, d, "posts");
    }
    function d(e) {
      var t,
        n,
        a,
        i,
        l =
          (t =
            (n = e.creative_asset_groups_spec) == null ||
            (n = n.toJS()) == null ||
            (n = n.groups) == null ||
            (n = n[0]) == null
              ? void 0
              : n.posts) != null
            ? t
            : [];
      if (l.length > 0)
        return o(
          "AdsUEditorAdgroupMultiPostSpecUtils",
        ).getMultiPostTextByIdentity(l);
      var s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.source_instagram_media_id.get(e),
        u =
          s != null
            ? o("AdsUEditorAdgroupMultiPostSpecUtils").getPostIdentityKey(
                !0,
                String(s),
              )
            : o("AdsUEditorAdgroupMultiPostSpecUtils").getPostIdentityKey(
                !1,
                r("AdsAdgroupRecordAccessors").creative.object_story_id.get(e),
              );
      return u == null
        ? new Map()
        : new Map([
            [
              u,
              {
                body:
                  (a = r("AdsAdgroupRecordAccessors").creative.body.get(e)) !=
                  null
                    ? a
                    : "",
                title:
                  (i = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.existing_post_title.get(e)) != null
                    ? i
                    : "",
              },
            ],
          ]);
    }
    function m(e, t, n, a) {
      var i = d(e),
        l = [];
      a.forEach(function (e) {
        var t = o("AdsUEditorAdgroupMultiPostSpecUtils").getPostIdentityKey(
          e.isInstagramPost,
          e.postId,
        );
        t != null && l.push(t);
      });
      var s = o("AdsUEditorAdgroupMultiPostSpecUtils").resolveMultiPostText(
          i,
          l,
        ),
        u = s.cagByIdentity,
        c = s.creative;
      n.forEach(function (e) {
        var t = o(
            "AdsUEditorAdgroupMultiPostSpecUtils",
          ).getPostIdentityKeyFromCagPost(e),
          n = t != null ? u.get(t) : null;
        n != null &&
          (n.body !== "" && (e.body = n.body),
          n.title !== "" && (e.title = n.title));
      });
      var m = r("AdsAdgroupRecordAccessors").creative.body.set(c.body, t);
      return (
        (m = r("AdsAdgroupRecordAccessors").creative.existing_post_title.set(
          c.title,
          m,
        )),
        m
      );
    }
    function p(e, t, n) {
      var o,
        a = s(e, t);
      if (a == null) return e;
      var i = babelHelpers.extends({}, a, ((o = {}), (o[n] = void 0), o)),
        l = r("immutable").Map(i);
      return r("AdsAdgroupRecordAccessors")
        .creative_asset_groups_spec.groups.at(t)
        .set(l, e);
    }
    function _(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative_asset_groups_spec.groups.delete(e);
    }
    function f(e, t) {
      var n,
        a,
        i =
          (n =
            (a = e.creative_asset_groups_spec) == null || (a = a.toJS()) == null
              ? void 0
              : a.groups) != null
            ? n
            : [],
        l = r("immutable")
          .List(
            i.map(function (e) {
              return r("immutable").Map(e);
            }),
          )
          .push(r("immutable").Map({ images: [] }));
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(l),
        function (e) {
          return o(
            "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
          ).setOrigins(e, [t]);
        },
      )(e);
    }
    function g(e, t, n, a) {
      var i = [],
        l;
      return (
        n > 0
          ? (l = r("immutable").List([
              r("immutable").Map({ images: i }),
              r("immutable").Map(a),
            ]))
          : (l = r("immutable").List([r("immutable").Map({ images: i })])),
        o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(
            l,
          ),
          function (e) {
            return o(
              "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
            ).setOrigins(e, [t]);
          },
        )(e)
      );
    }
    function h(e, t, n, r, a, i) {
      var l = s(e, t);
      if (l == null) return e;
      var c = x(l.texts),
        d = c.descriptionList,
        m = c.headlineList,
        p = c.messageList,
        _ = !1;
      switch (a) {
        case "primary_text":
          r >= 0 && r <= p.length && ((p[r] = n), (_ = !0));
          break;
        case "headline":
          r >= 0 && r <= m.length && ((m[r] = n), (_ = !0));
          break;
        case "description":
          r >= 0 && r <= d.length && ((d[r] = n), (_ = !0));
          break;
      }
      var f = o(
          "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
        ).hasSpecificOrigin(e, "pca_unification_alpha_experiment_full_format"),
        g = l.group_type === "dynamic" && f;
      _ = g ? !1 : _;
      var h = p.concat(m).concat(d),
        y = u(e, t, h, "texts");
      return (t === 0 && _ && (y = P(y, i)), y);
    }
    function y(e, t, n) {
      var o = s(e, t);
      if (o == null) return e;
      var a = r("immutable").Map(o).set("group_type", n);
      return r("AdsAdgroupRecordAccessors")
        .creative_asset_groups_spec.groups.at(t)
        .set(a, e);
    }
    function C(e, t) {
      var n = s(e, t);
      if (n == null) return e;
      var o = r("immutable").Map(n).delete("images");
      return r("AdsAdgroupRecordAccessors")
        .creative_asset_groups_spec.groups.at(t)
        .set(o, e);
    }
    function b(e, t, n, r, o) {
      var a = s(e, t);
      if (a == null) return e;
      var i = x(a.texts),
        l = i.descriptionList,
        c = i.headlineList,
        d = i.messageList,
        m = !1;
      switch (r) {
        case "primary_text":
          $(n, d) && (d.splice(n, 1), (m = !0));
          break;
        case "headline":
          $(n, c) && (c.splice(n, 1), (m = !0));
          break;
        case "description":
          $(n, l) && (l.splice(n, 1), (m = !0));
          break;
      }
      var p = d.concat(c).concat(l),
        _ = u(e, t, p, "texts");
      return (t === 0 && m && (_ = P(_, o)), _);
    }
    function v(t, n, r, o, a) {
      var i,
        l = s(t, n);
      if (l == null) return t;
      var c = "images",
        d = (i = l[c]) != null ? i : [];
      if (r >= d.length) return t;
      var m = [].concat(d),
        p = m[r],
        _ = p.image_crops,
        f = babelHelpers.objectWithoutPropertiesLoose(p, e),
        g = {};
      (o != null && (g.image_crops = o),
        (m[r] = babelHelpers.extends({}, f, g)));
      var h = u(t, n, m, c);
      return (n === 0 && r === 0 && (h = w(h, a)), h);
    }
    function S(e, t, n, r, o, a, i) {
      var l,
        c = s(e, t);
      if (c == null) return e;
      var d = "videos",
        m = (l = c[d]) != null ? l : [];
      if (n >= m.length) return e;
      var p = [].concat(m);
      p[n] = babelHelpers.extends({}, p[n], {
        thumbnail_id: r,
        thumbnail_source: o,
        image_url: a,
      });
      var _ = u(e, t, p, d);
      return (t === 0 && n === 0 && (_ = w(_, i)), _);
    }
    function R(e, t, n, r, o) {
      var a,
        i = s(e, t);
      if (i == null) return e;
      var l = "videos",
        c = (a = i[l]) != null ? a : [];
      if (n >= c.length) return e;
      var d = [].concat(c);
      d[n] = r;
      var m = u(e, t, d, l);
      return (t === 0 && n === 0 && (m = w(m, o)), m);
    }
    function L(e, t, n, r, o) {
      var a,
        i = s(e, t);
      if (i == null) return e;
      var l = (a = i[r]) != null ? a : Array([]);
      l.length > 0 && l.splice(n, 1);
      var c = u(e, t, l, r);
      return (t === 0 && n === 0 && (c = w(c, o)), c);
    }
    function E(e, t, n, r, o) {
      var a,
        i,
        l,
        c = s(e, t);
      if (c == null) return e;
      var d = (a = c.call_to_action) != null ? a : {},
        m =
          (i = (l = c.call_to_action) == null ? void 0 : l.value) != null
            ? i
            : {};
      switch (r) {
        case "app_link":
          m.app_link = n;
          break;
        case "link_caption":
          m.link_caption = n;
          break;
        case "link":
          m.link = n;
          break;
        case "app_destination":
          m.app_destination = n;
          break;
        default:
      }
      d.value = m;
      var p = u(e, t, d, "call_to_action");
      return ((p = N(p, o)), p);
    }
    function k(e, t, n, r) {
      var o,
        a =
          (o = e.creative_asset_groups_spec) == null || (o = o.toJS()) == null
            ? void 0
            : o.groups;
      if (a == null) return e;
      for (var i = e, l = 0; l < a.length; l++) i = E(i, l, t, n, r);
      return i;
    }
    function I(e, t) {
      var n,
        r =
          (n = e.creative_asset_groups_spec) == null || (n = n.toJS()) == null
            ? void 0
            : n.groups;
      if (
        r == null ||
        !o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(e)
      )
        return e;
      for (var a = e, i = 0; i < r.length; i++) {
        var l,
          s = (l = r[i].call_to_action) != null ? l : {};
        ((s.type = t), (a = u(a, i, s, "call_to_action")));
      }
      return a;
    }
    function T(e, t) {
      var n,
        r =
          (n = e.creative_asset_groups_spec) == null || (n = n.toJS()) == null
            ? void 0
            : n.groups;
      if (r == null || t == null) return e;
      for (var o = e, a = 0; a < r.length; a++) {
        var i,
          l = (i = r[a].message_extensions) != null ? i : [],
          s = [].concat(l);
        ((s[0] = { type: t }), (o = u(o, a, s, "message_extensions")));
      }
      return o;
    }
    function D(e, t, n) {
      var o,
        a,
        i,
        l =
          (o =
            (a = e.creative_asset_groups_spec) == null || (a = a.toJS()) == null
              ? void 0
              : a.groups) != null
            ? o
            : [],
        s = l[t];
      if (r("isFalsey")(s)) return e;
      var c = n;
      if (r("isFalsey")(c) && t > 0) {
        var d,
          m,
          p,
          _ =
            (d =
              (m = e.creative_asset_groups_spec) == null ||
              (m = m.toJS()) == null
                ? void 0
                : m.groups) != null
              ? d
              : [],
          f = _[t - 1];
        c = f == null || (p = f.call_to_action) == null ? void 0 : p.type;
      }
      if (
        (r("isFalsey")(c) &&
          (c = r("AdsAdgroupRecordAccessors").creative.call_to_action.type.get(
            e,
          )),
        r("isFalsey")(c))
      ) {
        var g;
        c =
          (g = r("AdsAdgroupRecordAccessors").creative) == null ||
          (g = g.object_story_spec) == null
            ? void 0
            : g.link_data.call_to_action.type.get(e);
      }
      r("isFalsey")(c) &&
        (c = r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.call_to_action_types.index(0)
          .get(e));
      var h = (i = s.call_to_action) != null ? i : {};
      return ((h.type = c), u(e, t, h, "call_to_action"));
    }
    function x(e) {
      var t,
        n,
        r,
        o =
          (t =
            e == null
              ? void 0
              : e.filter(function (e) {
                  return e.text_type === "primary_text";
                })) != null
            ? t
            : [],
        a =
          (n =
            e == null
              ? void 0
              : e.filter(function (e) {
                  return e.text_type === "headline";
                })) != null
            ? n
            : [],
        i =
          (r =
            e == null
              ? void 0
              : e.filter(function (e) {
                  return e.text_type === "description";
                })) != null
            ? r
            : [];
      return { messageList: o, headlineList: a, descriptionList: i };
    }
    function $(e, t) {
      return e >= 0 && e < t.length;
    }
    function P(e, t) {
      var n = s(e, 0);
      if (
        n == null ||
        !o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(e)
      )
        return e;
      var a = x(n.texts),
        i = a.descriptionList,
        l = a.headlineList,
        u = a.messageList,
        c = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.delete,
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.delete,
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.descriptions
            .delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .name.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .message.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .description.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .title.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .message.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .link_description.delete,
        )(e);
      if (u.length <= 1 && l.length <= 1 && i.length <= 1) {
        var d,
          m =
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.optimization_type.get(c) ===
            r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION,
          p = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.message_extensions.get(c);
        ((c = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
          c,
        )),
          p != null &&
            (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.message_extensions.set(p, c)));
        var _ =
          ((d = c.creative) == null || (d = d.degrees_of_freedom_spec) == null
            ? void 0
            : d.degrees_of_freedom_type) === "USER_ENROLLED_AUTOFLOW";
        c = q(c, _);
        var f = O(e);
        if ((r("isTruthy")(m) && (c = U(c, e)), u.length > 0)) {
          var g,
            h = (g = u[0].text) != null ? g : "";
          c = f
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.message.set(h, c)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.message.set(h, c);
        }
        if (l.length > 0) {
          var y,
            C = (y = l[0].text) != null ? y : "";
          c = f
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.title.set(C, c)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.name.set(C, c);
        }
        if (i.length > 0) {
          var b,
            v = (b = i[0].text) != null ? b : "";
          c = f
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.link_description.set(v, c)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.description.set(v, c);
        }
      } else
        (u.forEach(function (e, n) {
          var a;
          c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            c,
            t,
            r("AdsUnifiedCreativeAPIFields").message,
            n,
            "text",
            (a = e.text) != null ? a : "",
            !0,
          );
        }),
          l.forEach(function (e, n) {
            var a;
            c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              c,
              t,
              r("AdsUnifiedCreativeAPIFields").headline,
              n,
              "text",
              (a = e.text) != null ? a : "",
              !0,
            );
          }),
          i.forEach(function (e, n) {
            var a;
            c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              c,
              t,
              r("AdsUnifiedCreativeAPIFields").linkDescription,
              n,
              "text",
              (a = e.text) != null ? a : "",
              !0,
            );
          }),
          (c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.optimization_type.set(
            r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM,
            c,
          )));
      return c;
    }
    function N(e, t, n, a, i, l) {
      var u,
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
        D = s(e, 0);
      if (D == null) return e;
      var x = r("AdsAdgroupRecordAccessors").creative.call_to_action_type.get(
          e,
        ),
        $ = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.call_to_action.type.get(e),
        P = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.call_to_action.type.get(e),
        N =
          (u =
            (c =
              (d =
                x != null
                  ? x
                  : (m = D.call_to_action) == null
                    ? void 0
                    : m.type) != null
                ? d
                : $) != null
              ? c
              : P) != null
            ? u
            : n,
        w =
          (p = D.call_to_action) == null || (p = p.value) == null
            ? void 0
            : p.app_link,
        A =
          (_ =
            (f = D.call_to_action) == null || (f = f.value) == null
              ? void 0
              : f.app_destination) != null
            ? _
            : l,
        F =
          (g = D.call_to_action) == null || (g = g.value) == null
            ? void 0
            : g.link_caption,
        B = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.call_to_action.value.link_caption.get(
          e,
        ),
        W = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.caption.get(e),
        q = o(
          "AdsUEditorCTXFlexibleFormatUtils",
        ).isClickToMessageAppDestination(A)
          ? o("AdsUEditorCTXFlexibleFormatUtils").getClicktoMessageDefaultLink(
              A,
            )
          : r("AdsAdgroupRecordAccessors").creative.link_url.get(e),
        U = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.link.get(e),
        V = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.call_to_action.value.link.get(
          e,
        ),
        H =
          (h = D.call_to_action) == null || (h = h.value) == null
            ? void 0
            : h.link,
        G =
          (y = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.phone_data_id.get(e)) != null
            ? y
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.phone_data_id.get(e),
        z = N === "CALL_NOW",
        j = O(e),
        K = j
          ? (C =
              (b = (v = H != null ? H : q) != null ? v : V) != null ? b : U) !=
            null
            ? C
            : a
          : (S =
                (R = (L = H != null ? H : q) != null ? L : U) != null
                  ? R
                  : V) != null
            ? S
            : a,
        Q = j
          ? (E = (k = F != null ? F : B) != null ? k : W) != null
            ? E
            : i
          : (I = (T = F != null ? F : W) != null ? T : B) != null
            ? I
            : i,
        X = j || !z,
        Y = e;
      if (j) {
        var J;
        Y = o("AdsMutators").chain(
          function (e) {
            return N != null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.call_to_action.type.set(
                  N,
                  e,
                )
              : e;
          },
          (J = r(
            "AdsAdgroupRecordAccessors",
          )).creative.object_story_spec.video_data.call_to_action.value.app_link.set(
            w,
          ),
          J.creative.object_story_spec.video_data.call_to_action.value.link.set(
            K,
          ),
          function (e) {
            return o(
              "AdsUEditorCTXFlexibleFormatUtils",
            ).isClickToMessageAppDestination(A)
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.call_to_action.value.app_destination.set(
                  A,
                  e,
                )
              : e;
          },
          J.creative.object_story_spec.video_data.call_to_action.value.link_caption.set(
            Q,
          ),
          J.creative.object_story_spec.video_data.phone_data_id.set(G),
        )(Y);
      } else
        Y = o("AdsMutators").chain(
          function (e) {
            return N != null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.call_to_action.type.set(
                  N,
                  e,
                )
              : e;
          },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_link.set(
            w,
          ),
          function (e) {
            var t = e;
            return (
              o(
                "AdsUEditorCTXFlexibleFormatUtils",
              ).isClickToMessageAppDestination(A) &&
                ((t = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.call_to_action.value.app_destination.set(
                  A,
                  t,
                )),
                (t = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.call_to_action.value.link.set(
                  H,
                  t,
                ))),
              t
            );
          },
          X
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.link.set(K)
            : function (e) {
                return e;
              },
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.caption.set(Q),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.phone_data_id.set(G),
        )(Y);
      return M(Y, {
        appDestination: A,
        appLink: w,
        ctaType: N,
        link: X ? K : null,
        linkCaption: Q,
      });
    }
    function M(e, t) {
      var n,
        a = t.appDestination,
        i = t.appLink,
        l = t.ctaType,
        s = t.link,
        u = t.linkCaption;
      if (
        ((n = e.creative) == null ? void 0 : n.call_to_action) == null ||
        !r("gkx")("19143")
      )
        return e;
      var c = r("AdsAdgroupRecordAccessors").creative.call_to_action;
      return o("AdsMutators").chain(
        function (e) {
          return l != null ? c.type.set(l, e) : e;
        },
        function (e) {
          return i != null ? c.value.app_link.set(i, e) : e;
        },
        function (e) {
          return s != null ? c.value.link.set(s, e) : e;
        },
        function (e) {
          return u != null ? c.value.link_caption.set(u, e) : e;
        },
        function (e) {
          return a != null &&
            o(
              "AdsUEditorCTXFlexibleFormatUtils",
            ).isClickToMessageAppDestination(a)
            ? c.value.app_destination.set(a, e)
            : e;
        },
      )(e);
    }
    function w(e, t) {
      var n,
        a,
        i,
        l,
        u,
        c,
        d = s(e, 0);
      if (d == null) return e;
      var m = o("AdsMutators").chain(
          (n = r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .link_data.image_hash) == null
            ? void 0
            : n.delete,
          (a = r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .link_data.picture) == null
            ? void 0
            : a.delete,
          (i = r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .link_data.image_crops) == null
            ? void 0
            : i.delete,
          (l = r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .video_data.video_id) == null
            ? void 0
            : l.delete,
          (u = r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .video_data.image_url) == null
            ? void 0
            : u.delete,
        )(e),
        p = O(e),
        _ =
          ((c = m.creative) == null || (c = c.degrees_of_freedom_spec) == null
            ? void 0
            : c.degrees_of_freedom_type) === "USER_ENROLLED_AUTOFLOW",
        f = r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(t, m),
        g = F(m),
        h = g.appDestination,
        y = g.ctaType,
        C = g.linkCaption,
        b = g.linkValue;
      if (p) {
        var v;
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.delete(m);
        var S = (v = d.videos) != null ? v : [];
        ((m = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_id.set(S[0].video_id),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.image_url.set(S[0].image_url),
          r("AdsAdgroupRecordAccessors").creative.object_type.set(
            r("ApiAdObjectTypes").VIDEO,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_thumbnail_id.set(
            S[0].thumbnail_id,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_thumbnail_source.set(
            S[0].thumbnail_source,
          ),
          r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(
            S[0].image_url,
          ),
        )(m)),
          (m = B(m, !1, _)));
      } else {
        var R;
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.delete(m);
        var L = (R = d.images) != null ? R : [];
        if (L.length > 0) {
          var E = r("isTruthy")(L[0].hash);
          ((m = E
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.image_hash.set(
                r("immutable").fromJS(L[0].hash),
              )(m)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.picture.set(
                r("immutable").fromJS(L[0].url),
              )(m)),
            L[0].image_crops != null &&
              (m = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.image_crops.set(
                r("immutable").fromJS(L[0].image_crops),
              )(m)));
        }
        ((m = r("AdsAdgroupRecordAccessors").creative.object_type.set(
          r("ApiAdObjectTypes").SHARE,
        )(m)),
          (m = B(m, !0, _)));
      }
      return (
        f != null &&
          (p
            ? (m = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.page_welcome_message.set(
                f,
              )(m))
            : (m = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.page_welcome_message.set(
                f,
              )(m))),
        (m = N(m, t, y, b, C, h)),
        (m = P(m, t)),
        m
      );
    }
    function A(e, t) {
      var n = e,
        r = ["carousel", "da_collection", "single_media"];
      return (
        r.forEach(function (e) {
          n = o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDataSourceOptInMutator(n, e, t);
        }),
        n
      );
    }
    function F(e) {
      var t = null,
        n = null,
        o = null,
        a = null;
      if (
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.call_to_action.type.get(e) !=
        null
      ) {
        var i;
        ((t = (i = r(
          "AdsAdgroupRecordAccessors",
        )).creative.object_story_spec.link_data.call_to_action.type.get(e)),
          (n = i.creative.object_story_spec.link_data.link.get(e)),
          (o = i.creative.object_story_spec.link_data.caption.get(e)),
          (a =
            i.creative.object_story_spec.link_data.call_to_action.value.app_destination.get(
              e,
            )));
      } else {
        var i;
        ((t = (i = r(
          "AdsAdgroupRecordAccessors",
        )).creative.object_story_spec.video_data.call_to_action.type.get(e)),
          (n =
            i.creative.object_story_spec.video_data.call_to_action.value.link.get(
              e,
            )),
          (o =
            i.creative.object_story_spec.video_data.call_to_action.value.link_caption.get(
              e,
            )),
          (a =
            i.creative.object_story_spec.video_data.call_to_action.value.app_destination.get(
              e,
            )));
      }
      return { ctaType: t, linkValue: n, linkCaption: o, appDestination: a };
    }
    function O(e) {
      var t,
        n,
        r = s(e, 0),
        o = (t = r == null ? void 0 : r.images) != null ? t : [],
        a = (n = r == null ? void 0 : r.videos) != null ? n : [];
      return o.length === 0 && a.length > 0;
    }
    function B(e, t, n) {
      var r = e;
      return (
        (r = q(r, n)),
        (r = t ? G(r, n) : z(r, n)),
        o("SEFunnelLogger").logConsentDivergenceCheck(
          r.id,
          r,
          "cag_dof_toggle",
        ),
        r
      );
    }
    function W(e) {
      return o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasSpecificOrigin(e, "creative_asset_groups")
        ? o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups
              .delete,
            o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators")
              .deleteAllOrigins,
          )(e)
        : e;
    }
    function q(e, t) {
      var n = t
          ? r("immutable").Map({ type: "random" })
          : r("immutable").Map({ type: "opted_out" }),
        o = r("immutable").fromJS([n]);
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.set(
        o,
        e,
      );
    }
    function U(e, t) {
      var n,
        a = (n = r(
          "AdsAdgroupRecordAccessors",
        )).creative.asset_feed_spec.call_to_actions.get(t);
      return o("AdsMutators").chain(
        n.creative.asset_feed_spec.call_to_actions.set(a),
        n.creative.asset_feed_spec.additional_data.is_click_to_message.set(!0),
        n.creative.asset_feed_spec.optimization_type.set(
          r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION,
        ),
      )(e);
    }
    function V(e, t, n) {
      return e &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(t)
        ? []
        : n(e ? "OPT_IN" : "OPT_OUT");
    }
    function H(e, t) {
      return (
        e && o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(t)
      );
    }
    function G(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c = "MANUAL",
        d =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.site_extensions,
        m = o("AdsMutators").chain.apply(
          o("AdsMutators"),
          [
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
              t ? "USER_ENROLLED_AUTOFLOW" : "DISABLED",
            ),
          ].concat(
            V(t, "standard_enhancements", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "image_enhancement", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_enhancement.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_enhancement.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "image_touchups", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "image_templates", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_templates.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_templates.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "advantage_plus_creative", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.advantage_plus_creative.enroll_status.set(
                  e,
                ),
              ];
            }),
            V(t, "image_uncrop", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "inline_comment", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.inline_comment.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.inline_comment.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "text_optimizations", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.text_optimizations.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.text_optimizations.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "product_extensions", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "site_extensions", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            o("AdsAPlusCSCJUtils").passNativeCommerceExperienceNonCTAGK() &&
              o("ProductBrowsingAdsUtils").getProductBrowsingDisabledReason(
                (a =
                  (i =
                    (l = e.creative) == null ||
                    (l = l.creative_sourcing_spec) == null
                      ? void 0
                      : l.associated_product_set_id) != null
                    ? i
                    : (s = e.creative) == null
                      ? void 0
                      : s.product_set_id) != null
                  ? a
                  : null,
              ) == null
              ? V(t, "product_browsing", function (e) {
                  return [
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.product_browsing.enroll_status.set(
                      e,
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.product_browsing.action_metadata.type.set(
                      c,
                    ),
                  ];
                })
              : [],
            o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout() &&
              !H(t, "site_extensions")
              ? [
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
                    t ? "OPT_IN" : "OPT_OUT",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
                    c,
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
                    "DATA_CONSENT_INELIGIBLE",
                  ),
                ]
              : [],
          ),
        )(e);
      return (
        r("gkx")("3442") &&
          d != null &&
          ((u = m.creative) == null ||
          (u = u.degrees_of_freedom_spec) == null ||
          (u = u.creative_features_spec) == null
            ? void 0
            : u.site_extensions) == null &&
          (m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.set(
            d,
            m,
          )),
        o("AdsAdgroupFormatTransformationMutators").syncFTSFromCFS(m)
      );
    }
    function z(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c = "MANUAL",
        d =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.site_extensions,
        m = o("AdsMutators").chain.apply(
          o("AdsMutators"),
          [
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
              t ? "USER_ENROLLED_AUTOFLOW" : "DISABLED",
            ),
          ].concat(
            V(t, "standard_enhancements", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "advantage_plus_creative", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.advantage_plus_creative.enroll_status.set(
                  e,
                ),
              ];
            }),
            V(t, "inline_comment", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.inline_comment.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.inline_comment.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "text_optimizations", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.text_optimizations.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.text_optimizations.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "video_auto_crop", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.video_auto_crop.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.video_auto_crop.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "product_extensions", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            V(t, "site_extensions", function (e) {
              return [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
                  e,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
                  c,
                ),
              ];
            }),
            o("AdsAPlusCSCJUtils").passNativeCommerceExperienceNonCTAGK() &&
              o("ProductBrowsingAdsUtils").getProductBrowsingDisabledReason(
                (a =
                  (i =
                    (l = e.creative) == null ||
                    (l = l.creative_sourcing_spec) == null
                      ? void 0
                      : l.associated_product_set_id) != null
                    ? i
                    : (s = e.creative) == null
                      ? void 0
                      : s.product_set_id) != null
                  ? a
                  : null,
              ) == null
              ? V(t, "product_browsing", function (e) {
                  return [
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.product_browsing.enroll_status.set(
                      e,
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.product_browsing.action_metadata.type.set(
                      c,
                    ),
                  ];
                })
              : [],
            o("AdsSEConsentScopeRolloutUtils").isInSEConsentScopeRollout() &&
              !H(t, "site_extensions")
              ? [
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
                    t ? "OPT_IN" : "OPT_OUT",
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
                    c,
                  ),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.site_links_data_consented.scope.set(
                    "DATA_CONSENT_INELIGIBLE",
                  ),
                ]
              : [],
          ),
        )(e);
      return (
        r("gkx")("4221") &&
          d != null &&
          ((u = m.creative) == null ||
          (u = u.degrees_of_freedom_spec) == null ||
          (u = u.creative_features_spec) == null
            ? void 0
            : u.site_extensions) == null &&
          (m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.set(
            d,
            m,
          )),
        o("AdsAdgroupFormatTransformationMutators").syncFTSFromCFS(m)
      );
    }
    function j(e, t, n, a, i, l, s) {
      s === void 0 && (s = !1);
      var u = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.instagram_actor_id.get(n),
        c = o("AdsInstagramActorIDUtils").getInstagramUserID(n),
        d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.page_id.get(n),
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.message_extensions.get(n),
        p = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.delete,
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
            u,
            c,
          ),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
            d,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.type.set(a),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.set(i),
          r("AdsAdgroupRecordAccessors").creative.object_type.set(
            r("ApiAdObjectTypes").SHARE,
          ),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
          r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .delete,
          r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
          r("AdsAdgroupRecordAccessors").creative.text_type.set("RAW_TEXT"),
          r("AdsAdgroupRecordAccessors").creative.recommender_settings.delete,
          r("AdsAdgroupRecordAccessors").creative.interactive_components_spec
            .delete,
          r("AdsAdgroupRecordAccessors").creative.portrait_customizations
            .delete,
          r("AdsAdgroupRecordAccessors").creative.thumbnail_height.delete,
          r("AdsAdgroupRecordAccessors").creative.thumbnail_url.delete,
          r("AdsAdgroupRecordAccessors").creative.thumbnail_width.delete,
          r("AdsAdgroupRecordAccessors").creative.media_type.delete,
          r("AdsAdgroupRecordAccessors").creative.template_url_spec.delete,
          r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(
            "not_carousel",
          ),
        )(n),
        _ = e.objective,
        f = o("AdsAPICampaignRecordUtils").getPromotedObjectType(_, t);
      if (s === !0 && f === r("AdsPromotedObjectTypes").PIXEL) {
        var g = o(
            "AdsWebsiteExtensionTypeUtils",
          ).getSelectedMessageExtensiontype(n),
          h = o("WebToXFeatureGating").shouldEnableWebToWhatsAppFlexibleFormat(
            !1,
          ),
          y = o("WebToXFeatureGating").enableWebToM(e, t, n, !0),
          C = o("WebToXFeatureGating").enableWebToIGD(e, t, n, !0);
        ((h && g === "whatsapp") ||
          (y && g === "messenger") ||
          (C && g === "instagram_message")) &&
          (p = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.message_extensions.set(m),
          )(p));
      }
      return r("isTruthy")(l) && r("gkx")("1226") ? w(n, l) : p;
    }
    function K(e, t, n, a, i) {
      var l,
        s,
        u,
        c,
        d,
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.instagram_actor_id.get(e),
        p = o("AdsInstagramActorIDUtils").getInstagramUserID(e),
        _ = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.page_id.get(e),
        f =
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.type.get(e)) !=
          null
            ? l
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.type.get(
                e,
              ),
        g =
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.link.get(
            e,
          )) != null
            ? s
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.value.link.get(
                e,
              ),
        h =
          (u = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_link.get(
            e,
          )) != null
            ? u
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.value.app_link.get(
                e,
              ),
        y =
          (c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_destination.get(
            e,
          )) != null
            ? c
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.value.app_destination.get(
                e,
              ),
        C =
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.page_welcome_message.get(e)) !=
          null
            ? d
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.page_welcome_message.get(
                e,
              ),
        b = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.delete,
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
            m,
            p,
          ),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
            _,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.type.set(f),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_destination.set(
            y,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_link.set(
            h,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.link.set(
            g,
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.type.set(t),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.set(a),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.page_welcome_message.set(C),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.name.set(n),
          r("AdsAdgroupRecordAccessors").creative.object_type.set(
            r("ApiAdObjectTypes").SHARE,
          ),
          r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .delete,
          r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
          r("AdsAdgroupRecordAccessors").creative.text_type.set("RAW_TEXT"),
          r("AdsAdgroupRecordAccessors").creative.recommender_settings.delete,
          r("AdsAdgroupRecordAccessors").creative.interactive_components_spec
            .delete,
          r("AdsAdgroupRecordAccessors").creative.portrait_customizations
            .delete,
          r("AdsAdgroupRecordAccessors").creative.thumbnail_height.delete,
          r("AdsAdgroupRecordAccessors").creative.thumbnail_url.delete,
          r("AdsAdgroupRecordAccessors").creative.thumbnail_width.delete,
          r("AdsAdgroupRecordAccessors").creative.media_type.delete,
          r("AdsAdgroupRecordAccessors").creative.template_url_spec.delete,
          r("AdsAdgroupRecordAccessors").metadata.carousel_style.set(
            "not_carousel",
          ),
        )(e);
      return r("isTruthy")(i) && r("gkx")("1226") ? w(e, i) : b;
    }
    function Q(e, t, n, a) {
      var i,
        l = (i = r(
          "AdsAdgroupRecordAccessors",
        )).creative.object_story_spec.instagram_actor_id.get(e),
        s = o("AdsInstagramActorIDUtils").getInstagramUserID(e),
        u = i.creative.object_story_spec.page_id.get(e),
        c = o("AdsMutators").chain(
          i.creative.object_story_spec.delete,
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
            l,
            s,
          ),
          i.creative.object_story_spec.page_id.set(u),
          i.creative.object_story_spec.link_data.call_to_action.type.set(t),
          i.creative.object_story_spec.link_data.link.set(n),
          i.creative.object_type.set(r("ApiAdObjectTypes").SHARE),
          i.creative.asset_feed_spec.delete,
          i.creative.degrees_of_freedom_spec.delete,
          i.creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
            "USER_ENROLLED_NON_DCO",
          ),
          i.creative.degrees_of_freedom_spec.text_transformation_types.set(
            r("immutable").List(["TEXT_LIQUIDITY"]),
          ),
          i.creative.product_set_id.delete,
          i.creative.text_type.set("RAW_TEXT"),
          i.creative.recommender_settings.delete,
          i.creative.interactive_components_spec.delete,
          i.creative.portrait_customizations.delete,
          i.creative.thumbnail_height.delete,
          i.creative.thumbnail_url.delete,
          i.creative.thumbnail_width.delete,
          i.creative.media_type.delete,
          i.creative.template_url_spec.delete,
          i.metadata.carousel_style.set("not_carousel"),
        )(e);
      return r("isTruthy")(a) && r("gkx")("1226") ? w(c, a) : c;
    }
    function X(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
        m =
          n === r("AdsPromotedObjectTypes").WHATSAPP ||
          n === r("AdsPromotedObjectTypes").MESSENGER ||
          n === r("AdsPromotedObjectTypes").INSTAGRAM,
        p =
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.call_to_action.type.get(e)) !=
          null
            ? a
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.call_to_action.type.get(e),
        _ =
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.link.get(
            e,
          )) != null
            ? i
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.value.link.get(
                e,
              ),
        f =
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_link.get(
            e,
          )) != null
            ? l
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.value.app_link.get(
                e,
              ),
        g = e;
      if (
        ((g = o("AdsMutators").chain(
          (s = r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .link_data.image_hash) == null
            ? void 0
            : s.delete,
          (u = r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .link_data.picture) == null
            ? void 0
            : u.delete,
          (c = r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .link_data.image_crops) == null
            ? void 0
            : c.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .delete,
          r("AdsAdgroupRecordAccessors").creative.object_type.set(
            r("ApiAdObjectTypes").SHARE,
          ),
          r("AdsAdgroupRecordAccessors").creative.thumbnail_url.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .call_to_action.type.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .call_to_action.value.app_link.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .link.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .caption.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .phone_data_id.delete,
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.delete,
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.delete,
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.descriptions
            .delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .name.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .message.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .description.delete,
        )(g)),
        m)
      ) {
        var h;
        return o("AdsMutators").chain(
          (h = r(
            "AdsAdgroupRecordAccessors",
          )).creative.object_story_spec.link_data.call_to_action.type.set(p),
          h.creative.object_story_spec.link_data.call_to_action.value.app_destination.set(
            o("AdsUEditorCTXDestinationUtils").adPromotedObjectTypeToString(n),
          ),
          h.creative.object_story_spec.link_data.call_to_action.value.app_link.set(
            f,
          ),
          h.creative.object_story_spec.link_data.call_to_action.value.link.set(
            _,
          ),
          h.creative.object_story_spec.link_data.link.set(
            o(
              "AdsUEditorCTXFlexibleFormatUtils",
            ).getDefaultLinkForPromotedObjectType(n),
          ),
        )(g);
      }
      var y =
        (d = r("adsCallToActionGetDefaultCallToActionType")(t, n)) != null
          ? d
          : r("gkx")("14839")
            ? "SEE_DETAILS"
            : "LEARN_MORE";
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.link_data.call_to_action.type.set(y)(g);
    }
    function Y(e, t) {
      var n,
        r = s(e, t);
      if (r == null) return e;
      var o = (n = r.call_to_action) != null ? n : {},
        a = { type: o.type };
      return u(e, t, a, "call_to_action");
    }
    function J(e) {
      var t,
        n =
          (t = e.creative_asset_groups_spec) == null || (t = t.toJS()) == null
            ? void 0
            : t.groups;
      if (n == null) return e;
      for (var r = e, o = 0; o < n.length; o++) r = Y(r, o);
      return r;
    }
    function Z(e) {
      if (e == null) return !1;
      var t = e.groups;
      if (t == null) return !1;
      var n = t instanceof r("immutable").List ? t.toArray() : t;
      return n.some(function (e) {
        var t =
          e instanceof r("immutable").Map
            ? e.get("group_uuid")
            : e == null
              ? void 0
              : e.group_uuid;
        return t != null && t !== "";
      });
    }
    ((l.getCagGroupAtIndex = s),
      (l.setSpecsInCagGroup = u),
      (l.setCagPostFieldsByIdentityKey = c),
      (l.readMultiPostTextByIdentity = d),
      (l.syncMultiPostPrimaryText = m),
      (l.deleteSpecsInCagGroup = p),
      (l.clearCagGroups = _),
      (l.setNewGroupSpec = f),
      (l.setNewGroupSpecAtStart = g),
      (l.setTextSpecWithTypeAtIndex = h),
      (l.setGroupTypeforCagGroup = y),
      (l.removeImagesFromCagGroup = C),
      (l.removeTextSpecWithTypeAtIndex = b),
      (l.setImageCropAtIndex = v),
      (l.setVideoThumbnailInfoAtIndex = S),
      (l.setVideoAtIndex = R),
      (l.removeSpecAtIndex = L),
      (l.setCagCallToActionValueByValueType = E),
      (l.setCagCallToActionValueByValueTypeForAllGroups = k),
      (l.setCagCallToActionType = I),
      (l.setCagMessageExtension = T),
      (l.setDefaultCagCallToActionTypeAtIndex = D),
      (l.updateMediaSpecToCreativeSpec = w),
      (l.updateFormatSpecBasedOnCreativeSpec = A),
      (l.setDOFToggleSpecForCag = B),
      (l.maybeRemoveCagSpec = W),
      (l.setDefaultCreativeSettingForASCAndBAU = j),
      (l.setDefaultCreativeSettingForCTX = K),
      (l.setDefaultCreativeSettingForAppPromotion = Q),
      (l.cleanupCreativeDoubleWrittenFields = X),
      (l.cleanUpCagCallToActionValue = Y),
      (l.cleanUpCagCallToActionValueForAllGroups = J),
      (l.doesCagHaveGroupUuid = Z));
  },
  98,
);
