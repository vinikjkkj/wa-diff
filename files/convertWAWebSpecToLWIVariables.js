__d(
  "convertWAWebSpecToLWIVariables",
  ["WAWebBizAdCreationConsts", "WAWebBizAdCreationEUCountryUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["picture"],
      s = ["picture"],
      u = ["image_url"];
    function c(e, t, n, r) {
      var o = d(e),
        a = { creation_spec: o, flow_id: t, page_id: n, product: r },
        i = { input: a };
      return i;
    }
    function d(e) {
      var t = m(e.adgroupSpecs, e.selectedAdgroupID),
        n = {
          legacy_ad_account_id: e.adAccountData.legacyAccountID,
          ads_lwi_goal: o("WAWebBizAdCreationConsts").WA_WEB_ADS_LWI_GOAL,
          adgroup_specs: t,
          saved_audience_id:
            e.audienceData.audienceOption === "SAVED_AUDIENCE"
              ? e.audienceData.audienceID
              : null,
          audience_option: e.audienceData.audienceOption,
          targeting_spec_string: JSON.stringify(e.audienceData.targetSpec),
          budget: e.budgetData.budget,
          budget_type: "DAILY_BUDGET",
          duration_in_days: e.durationData.durationInDays,
          currency: e.adAccountData.currency,
          objective: o("WAWebBizAdCreationEUCountryUtils").getAdObjective(
            e.audienceData.targetSpec,
          ),
          placement_spec: {
            publisher_platforms: e.placementData.selectedPublisherPlatforms,
          },
          dsa_beneficiary: e.dsaData.dsaBeneficiary,
          dsa_payor: e.dsaData.dsaPayor,
        };
      return n;
    }
    function m(e, t) {
      var n = e[t];
      if (n == null) return [];
      var r =
          n.assetFeedSpecPlus != null
            ? p(n.assetFeedSpecPlus, n.creative)
            : n.creative,
        o = r == null ? void 0 : r.degrees_of_freedom_spec,
        a = {
          creative_features_spec: o == null ? void 0 : o.creative_features_spec,
          degrees_of_freedom_type: "USER_ENROLLED_LWI_ACO",
          image_transformation_types:
            o == null ? void 0 : o.image_transformation_types,
          stories_transformation_types:
            o == null ? void 0 : o.stories_transformation_types,
          text_transformation_types:
            o == null ? void 0 : o.text_transformation_types,
        },
        i = g(r),
        l =
          i != null
            ? babelHelpers.extends({}, i, { degrees_of_freedom_spec: a })
            : null,
        s = { creative: l, id: n.id };
      return [s];
    }
    function p(e, t) {
      var n;
      if ((t == null ? void 0 : t.object_story_spec) == null) return t;
      var r = (n = e.ad_formats) == null ? void 0 : n[0],
        o = r === "SINGLE_IMAGE",
        a = r === "SINGLE_VIDEO",
        i = r === "CAROUSEL";
      if (!o && !a && !i) return t;
      var l =
          o || i
            ? babelHelpers.extends({}, t.object_story_spec.link_data, _(e))
            : null,
        s = a ? f(e) : void 0;
      return babelHelpers.extends({}, t, {
        object_story_spec: babelHelpers.extends({}, t.object_story_spec, {
          link_data: l != null ? l : void 0,
          video_data: s,
        }),
      });
    }
    function _(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d = e.bodies,
        m = e.call_to_actions,
        p = e.carousel_cards,
        _ = e.descriptions,
        f = e.images,
        g = e.link_urls,
        h = e.titles,
        y =
          m != null && m.length > 0
            ? { type: m[0].type, value: m[0].value }
            : void 0;
      if (
        ((t = e.ad_formats) == null ? void 0 : t[0]) === "CAROUSEL" &&
        p != null &&
        p.length > 0
      ) {
        var C, b;
        if (p.length === 1) {
          var v,
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
            N = p[0],
            M = ((v = N.videos) == null ? void 0 : v[0]) != null,
            w = M
              ? (S = N.videos) == null || (S = S[0]) == null
                ? void 0
                : S.thumbnail_hash
              : (R = N.images) == null || (R = R[0]) == null
                ? void 0
                : R.hash,
            A = M
              ? (L = N.videos) == null || (L = L[0]) == null
                ? void 0
                : L.thumbnail_url
              : (E = N.images) == null || (E = E[0]) == null
                ? void 0
                : E.url;
          return {
            call_to_action: y,
            child_attachments: void 0,
            description:
              (k = N.descriptions) == null || (k = k[0]) == null
                ? void 0
                : k.text,
            image_hash: w,
            link:
              (I =
                (T =
                  g == null || (D = g[0]) == null ? void 0 : D.website_url) !=
                null
                  ? T
                  : y == null || (x = y.value) == null
                    ? void 0
                    : x.link) != null
                ? I
                : "",
            message: d == null || ($ = d[0]) == null ? void 0 : $.text,
            name:
              (P = N.titles) == null || (P = P[0]) == null ? void 0 : P.text,
            picture: w == null ? A : void 0,
          };
        }
        return {
          call_to_action: y,
          child_attachments: p.map(function (e) {
            var t, n, r, o, a, i, l, s;
            return {
              call_to_action: y,
              description:
                (t = e.descriptions) == null || (t = t[0]) == null
                  ? void 0
                  : t.text,
              image_hash:
                ((n = e.videos) == null ? void 0 : n[0]) != null
                  ? (r = e.videos) == null || (r = r[0]) == null
                    ? void 0
                    : r.thumbnail_hash
                  : (o = e.images) == null || (o = o[0]) == null
                    ? void 0
                    : o.hash,
              link:
                (a =
                  g == null || (i = g[0]) == null ? void 0 : i.website_url) !=
                null
                  ? a
                  : "",
              name:
                (l = e.titles) == null || (l = l[0]) == null ? void 0 : l.text,
              picture: (function (t, n) {
                if (((t = e.videos) == null ? void 0 : t[0]) != null) {
                  var r;
                  if (
                    ((r = e.videos[0]) == null ? void 0 : r.thumbnail_hash) ==
                    null
                  ) {
                    var o;
                    return (o = e.videos[0]) == null ? void 0 : o.thumbnail_url;
                  }
                  return null;
                }
                if (
                  ((n = e.images) == null || (n = n[0]) == null
                    ? void 0
                    : n.hash) == null
                ) {
                  var a;
                  return (a = e.images) == null || (a = a[0]) == null
                    ? void 0
                    : a.url;
                }
                return null;
              })(),
              video_id:
                (s = e.videos) == null || (s = s[0]) == null
                  ? void 0
                  : s.video_id,
            };
          }),
          link: g == null || (C = g[0]) == null ? void 0 : C.website_url,
          message: d == null || (b = d[0]) == null ? void 0 : b.text,
        };
      }
      var F = f == null || (n = f[0]) == null ? void 0 : n.hash,
        O = f == null || (r = f[0]) == null ? void 0 : r.url;
      return {
        call_to_action: y,
        child_attachments: void 0,
        description: _ == null || (o = _[0]) == null ? void 0 : o.text,
        image_hash: F,
        link:
          (a =
            (i = g == null || (l = g[0]) == null ? void 0 : l.website_url) !=
            null
              ? i
              : y == null || (s = y.value) == null
                ? void 0
                : s.link) != null
            ? a
            : "",
        message: d == null || (u = d[0]) == null ? void 0 : u.text,
        name: h == null || (c = h[0]) == null ? void 0 : c.text,
        picture: F == null ? O : void 0,
      };
    }
    function f(e) {
      var t,
        n,
        r,
        o,
        a,
        i = e.bodies,
        l = e.call_to_actions,
        s = e.titles,
        u = e.videos,
        c = u == null || (t = u[0]) == null ? void 0 : t.thumbnail_hash;
      return {
        call_to_action:
          l != null && l.length > 0
            ? { type: l[0].type, value: l[0].value }
            : void 0,
        image_hash: c,
        image_url:
          c == null
            ? u == null || (n = u[0]) == null
              ? void 0
              : n.thumbnail_url
            : null,
        message: i == null || (r = i[0]) == null ? void 0 : r.text,
        title: s == null || (o = s[0]) == null ? void 0 : o.text,
        video_id: u == null || (a = u[0]) == null ? void 0 : a.video_id,
        video_thumbnail_source: "GENERATED_DEFAULT",
      };
    }
    function g(t) {
      if (t == null) return null;
      var n = t.object_story_spec;
      if (n == null) return t;
      var r = n.link_data,
        o = n.video_data,
        a = r,
        i = o,
        l = !1;
      if (r != null) {
        var c, d, m;
        if (r.image_hash != null && r.picture != null) {
          var p = r.picture,
            _ = babelHelpers.objectWithoutPropertiesLoose(r, e);
          ((a = _), (l = !0));
        }
        var f = (c = r.call_to_action) == null ? void 0 : c.type,
          g =
            (d = r.call_to_action) == null || (d = d.value) == null
              ? void 0
              : d.link;
        if (
          (f === "WHATSAPP_MESSAGE" &&
            g != null &&
            ((m = a) == null ? void 0 : m.link) !== g &&
            ((a = babelHelpers.extends({}, a, { link: g })), (l = !0)),
          r.child_attachments != null && r.child_attachments.length > 0)
        ) {
          var h = r.child_attachments.map(function (e) {
            if (
              (e == null ? void 0 : e.image_hash) != null &&
              (e == null ? void 0 : e.picture) != null
            ) {
              var t = e.picture,
                n = babelHelpers.objectWithoutPropertiesLoose(e, s);
              return ((l = !0), n);
            }
            return e;
          });
          l && (a = babelHelpers.extends({}, a, { child_attachments: h }));
        }
      }
      if (
        (o == null ? void 0 : o.image_hash) != null &&
        (o == null ? void 0 : o.image_url) != null
      ) {
        var y = o.image_url,
          C = babelHelpers.objectWithoutPropertiesLoose(o, u);
        ((i = C), (l = !0));
      }
      return l
        ? babelHelpers.extends({}, t, {
            object_story_spec: babelHelpers.extends({}, n, {
              link_data: a,
              video_data: i,
            }),
          })
        : t;
    }
    l.default = c;
  },
  98,
);
