__d(
  "MAIBACompassMediaRecommendations",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["description", "generation_status", "id", "label"],
      u = 160,
      c = 100,
      d = 3;
    function m(e) {
      return e.videoID != null && e.videoID !== ""
        ? "video:" + e.videoID
        : e.imageHash != null && e.imageHash !== ""
          ? e.imageHash
          : e.compassCreativeID != null && e.compassCreativeID !== ""
            ? "compass:" + e.compassCreativeID
            : null;
    }
    function p(e) {
      var t = new Map();
      return (
        e.addedMedia.forEach(function (e) {
          var n,
            r,
            o,
            a = {
              compassCreativeID: (n = e.compassCreativeID) != null ? n : null,
              imageHash: (r = e.imageHash) != null ? r : null,
              imageURL: e.imageURL,
              videoID: (o = e.videoID) != null ? o : null,
            },
            i = m(a);
          i != null && (t.set("library:" + i, a), t.set("retained:" + i, a));
        }),
        t
      );
    }
    function _(e, t, n) {
      if (!n)
        return [].concat(
          e.selectedTileIDs.flatMap(function (e) {
            var n,
              r,
              o,
              a = t.get(e);
            return a == null
              ? []
              : [
                  {
                    compassCreativeID: null,
                    imageHash: (n = a.image_hash) != null ? n : null,
                    imageURL: (r = a.image_url) != null ? r : null,
                    videoID: (o = a.video_id) != null ? o : null,
                  },
                ];
          }),
          e.addedMedia.map(function (e) {
            var t, n;
            return {
              compassCreativeID: null,
              imageHash: (t = e.imageHash) != null ? t : null,
              imageURL: e.imageURL,
              videoID: (n = e.videoID) != null ? n : null,
            };
          }),
        );
      var r = [],
        o = new Set(),
        a = function (t) {
          var e = m(t);
          if (e != null) {
            if (o.has(e)) return;
            o.add(e);
          }
          r.push(t);
        },
        i = p(e);
      return (
        e.selectedTileIDs.forEach(function (n) {
          var r = t.get(n);
          if (r != null && r.target_ad_id === e.adID) {
            var o, l, s, u;
            a({
              compassCreativeID: (o = r.compass_creative_id) != null ? o : null,
              imageHash: (l = r.image_hash) != null ? l : null,
              imageURL: (s = r.image_url) != null ? s : null,
              videoID: (u = r.video_id) != null ? u : null,
            });
            return;
          }
          var c = i.get(n);
          c != null && a(c);
        }),
        e.addedMedia.forEach(function (e) {
          var t, n, r;
          return a({
            compassCreativeID: (t = e.compassCreativeID) != null ? t : null,
            imageHash: (n = e.imageHash) != null ? n : null,
            imageURL: e.imageURL,
            videoID: (r = e.videoID) != null ? r : null,
          });
        }),
        r
      );
    }
    function f(e, t, n) {
      return (
        (e != null && e !== "") ||
        (t != null && t !== "") ||
        (n != null && n !== "")
      );
    }
    function g(e, t) {
      var n = p(e);
      return (
        e.addedMedia.every(function (e) {
          return f(e.imageHash, e.videoID, e.compassCreativeID);
        }) &&
        e.selectedTileIDs.every(function (r) {
          var o = t.get(r);
          return (
            (o != null &&
              o.target_ad_id === e.adID &&
              f(o.image_hash, o.video_id, o.compass_creative_id)) ||
            n.has(r)
          );
        })
      );
    }
    function h(e, t) {
      var n,
        r,
        o = { EMPTY: 1, FAILED: 2, PENDING: 3, READY: 0, UNAVAILABLE: 4 };
      return ((n = o[t != null ? t : ""]) != null ? n : -1) >
        ((r = o[e != null ? e : ""]) != null ? r : -1)
        ? t
        : e != null
          ? e
          : t;
    }
    function y(e, t, n) {
      n === void 0 && (n = !1);
      var r = [],
        o = new Map();
      return (
        e.forEach(function (e) {
          var a,
            i,
            l,
            s,
            d,
            m = e.target_ad_id,
            p = e.video_id,
            _ = p != null && p !== "",
            f =
              t &&
              !_ &&
              (e.image_hash == null || e.image_hash === "") &&
              e.compass_creative_id !== ""
                ? e.compass_creative_id
                : null,
            g = _ || (f != null && e.compass_creative_media_type === "VIDEO"),
            y =
              p != null && p !== ""
                ? "video:" + p
                : f != null
                  ? "compass:" + f
                  : e.image_hash;
          if (!(m == null || m === "")) {
            var C = o.get(m);
            if (C == null) {
              var b, v;
              if (!n && r.length >= c) return;
              var S = e.target_ad_minimum_new_media_selection_count;
              ((C = r.length),
                o.set(m, C),
                r.push({
                  adCallToAction: e.target_ad_call_to_action,
                  adDestination: e.target_ad_destination,
                  adFormat: e.target_ad_format,
                  adHeadline: e.target_ad_headline,
                  adID: m,
                  adName: (b = e.target_ad_name) != null ? b : m,
                  adPrimaryText: e.target_ad_primary_text,
                  compassInsightUnitID: e.compass_insight_unit_id,
                  generationIDs: [],
                  generationStatus: e.generation_status,
                  generationStyles:
                    (v = e.compass_generation_styles) != null ? v : [],
                  imageGenerationEligible:
                    e.target_ad_image_generation_eligible === !0,
                  isVideoOnly: e.target_ad_video_only === !0,
                  minimumNewMediaSelectionCount:
                    S == null || (Number.isSafeInteger(S) && S > 0) ? S : null,
                  targetAdSetID: e.target_adset_id,
                  tiles: [],
                }));
            }
            var R = r[C],
              L = e.generation_id,
              E = (a = R.generationIDs) != null ? a : [];
            if (
              ((r[C] = babelHelpers.extends({}, R, {
                compassInsightUnitID:
                  (i = R.compassInsightUnitID) != null
                    ? i
                    : e.compass_insight_unit_id,
                generationIDs:
                  L != null && L !== "" && !E.includes(L)
                    ? [].concat(E, [L])
                    : E,
                generationStatus: h(R.generationStatus, e.generation_status),
                generationStyles: Array.from(
                  new Set(
                    [].concat(
                      (l = R.generationStyles) != null ? l : [],
                      (s = e.compass_generation_styles) != null ? s : [],
                    ),
                  ),
                ),
                targetAdSetID:
                  (d = R.targetAdSetID) != null ? d : e.target_adset_id,
              })),
              !(y == null || y === ""))
            ) {
              var k = r[C];
              (!t && k.tiles.length >= u) ||
                k.tiles.some(function (e) {
                  return e.reuseKey === y;
                }) ||
                (r[C] = babelHelpers.extends({}, k, {
                  tiles: [].concat(k.tiles, [
                    babelHelpers.extends(
                      {
                        coverImageURL: e.image_url,
                        coverVideoURL: f != null && g ? e.video_url : null,
                      },
                      f != null ? { compassCreativeID: f } : {},
                      {
                        description: e.description,
                        generationID: e.generation_id,
                        generationStyle: e.generation_style,
                        isAIGenerated: e.badge === "AI",
                        isPreselected: e.selected_by_default === !0,
                        isVideo: g,
                        previewVideoURL: g ? e.video_url : null,
                        reuseKey: y,
                        sourceDescription: e.source_description,
                        sourceImageHash: e.source_image_hash,
                        sourceImageURL: e.source_image_url,
                        tileID: e.id,
                        title: e.label,
                        videoID: _ ? p : null,
                      },
                    ),
                  ]),
                }));
            }
          }
        }),
        r.map(function (e) {
          var t = new Map(),
            n = e.tiles.filter(function (e) {
              return e.isAIGenerated !== !0;
            });
          return (
            e.tiles.forEach(function (e) {
              var n, r;
              if (e.isAIGenerated === !0) {
                var o = (n = e.generationStyle) != null ? n : "",
                  a = (r = t.get(o)) != null ? r : [];
                t.set(o, [].concat(a, [e]));
              }
            }),
            babelHelpers.extends({}, e, {
              tiles: [].concat(n, Array.from(t.values()).flat()),
            })
          );
        })
      );
    }
    function C(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function b(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function v(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    function S(e) {
      var t = b(e == null || e === "" ? null : v(e));
      if (t == null) return null;
      var n =
        typeof t.generated_creatives == "string"
          ? v(t.generated_creatives)
          : t.generated_creatives;
      return {
        creatives: (Array.isArray(n) ? n : []).flatMap(function (e) {
          var t = b(e);
          return t == null
            ? []
            : [
                {
                  compassInsightUnitID: C(t.compass_insight_unit_id),
                  generationID: C(t.generation_id),
                  generationStyle: C(t.generation_style),
                  id: C(t.id),
                  imageHash: C(t.image_hash),
                  imageURL: C(t.image_url),
                  isOriginal: t.provenance === "original",
                  videoID: C(t.video_id),
                  videoURL: C(t.video_url),
                },
              ];
        }),
        generationID: C(t.generation_id),
        hasFailedRequests: t.has_failed_requests === !0,
        status: C(t.status),
      };
    }
    var R = {
      failed: "FAILED",
      generating: "PENDING",
      processing: "PENDING",
      ready: "READY",
      unavailable: "UNAVAILABLE",
    };
    function L(e) {
      return (
        e.generation_status != null &&
        e.generation_status !== "READY" &&
        !f(e.image_hash, e.video_id, e.compass_creative_id)
      );
    }
    function E(e) {
      if (e.videoID != null)
        return {
          fields: { video_id: e.videoID },
          isVideo: !0,
          key: "video://" + e.videoID,
        };
      if (e.imageHash != null)
        return {
          fields: {
            image_hash: e.imageHash,
            image_url: e.imageURL,
            source_type: "ADIMAGE",
          },
          isVideo: !1,
          key: "imagehash://" + e.imageHash,
        };
      if (e.id == null || (e.imageURL == null && e.videoURL == null))
        return null;
      var t = e.videoURL != null;
      return {
        fields: babelHelpers.extends(
          {
            compass_creative_id: e.id,
            compass_creative_media_type: t ? "VIDEO" : "IMAGE",
          },
          t ? { video_url: e.videoURL } : { image_url: e.imageURL },
        ),
        isVideo: t,
        key: "compass://" + e.id,
      };
    }
    function k(t, n) {
      var r,
        o,
        a =
          (r = R[(o = n.status) != null ? o : ""]) != null ? r : "UNAVAILABLE";
      if (a === "PENDING") return t;
      var i = a === "READY" && n.hasFailedRequests ? "FAILED" : a,
        l = new Set(
          t.map(function (e) {
            return e.id;
          }),
        );
      return t.flatMap(function (r) {
        var o = r.target_ad_id;
        if (o == null || o === "" || !L(r)) return [r];
        var a = r.description,
          u = r.generation_status,
          c = r.id,
          m = r.label,
          p = babelHelpers.objectWithoutPropertiesLoose(r, e),
          _ = new Map();
        t.forEach(function (e) {
          var t = e.generation_style;
          if (e.target_ad_id === o && e.badge === "AI" && t != null) {
            var n;
            _.set(t, ((n = _.get(t)) != null ? n : 0) + 1);
          }
        });
        var f = new Map(),
          g = n.creatives.flatMap(function (e) {
            var t,
              a,
              i,
              u,
              c,
              m = E(e),
              g = m == null ? null : o + ":" + m.key,
              h = (t = e.generationStyle) != null ? t : "Creative Compass";
            if (
              m == null ||
              g == null ||
              l.has(g) ||
              e.isOriginal ||
              (e.compassInsightUnitID != null &&
                e.compassInsightUnitID !== r.compass_insight_unit_id) ||
              (r.target_ad_video_only === !0 && !m.isVideo) ||
              ((a = f.get(h)) != null ? a : 0) >= d
            )
              return [];
            f.set(h, ((i = f.get(h)) != null ? i : 0) + 1);
            var y = ((u = _.get(h)) != null ? u : 0) + 1;
            return (
              _.set(h, y),
              [
                babelHelpers.extends({}, p, m.fields, {
                  badge: "AI",
                  description: String(s._(/*BTDS*/ "", [s._param("idea", h)])),
                  generation_id:
                    (c = e.generationID) != null ? c : n.generationID,
                  generation_status: "READY",
                  generation_style: h,
                  id: g,
                  label: h + " " + y,
                }),
              ]
            );
          }),
          h =
            g.length > 0 ||
            t.some(function (e) {
              return e.target_ad_id === o && !L(e);
            }),
          y =
            r.target_ad_video_only === !0 && !h
              ? "UNAVAILABLE"
              : i === "READY" && !h
                ? "EMPTY"
                : i;
        return y === "READY"
          ? g
          : [].concat(g, [
              babelHelpers.extends({}, r, { generation_status: y }),
            ]);
      });
    }
    ((l.MAX_MEDIA_TILE_CANDIDATES = u),
      (l.MAX_PER_AD_MEDIA_GROUPS = c),
      (l.getOrderedAdMedia = _),
      (l.isAdMediaSelectionComplete = g),
      (l.buildAdMediaRecommendationGroups = y),
      (l.parseCompassGenerationResult = S),
      (l.refreshCompassOptions = k));
  },
  226,
);
