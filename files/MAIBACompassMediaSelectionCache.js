__d(
  "MAIBACompassMediaSelectionCache",
  ["FBLogger", "MAIBACompassMediaSelectionUtils", "WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["tileID"],
      s;
    function u(t) {
      var n = [],
        r = {},
        o = new Map();
      return (
        Object.entries(t).forEach(function (t) {
          var a = t[0],
            i = t[1];
          r[a] = i.map(function (t) {
            var r = t.tileID,
              a = babelHelpers.objectWithoutPropertiesLoose(t, e),
              i = JSON.stringify(a),
              l = o.get(i);
            return (
              l == null && ((l = n.length), o.set(i, l), n.push(a)),
              { poolIndex: l, tileID: r }
            );
          });
        }),
        { mediaTilePool: n, mediaTileRefsByAd: r }
      );
    }
    function c(e, t) {
      return Array.isArray(e)
        ? (t ? e : e.slice(0, 160)).flatMap(function (e) {
            if (
              e == null ||
              typeof e != "object" ||
              typeof e.reuseKey != "string" ||
              typeof e.title != "string" ||
              typeof e.tileID != "string"
            )
              return [];
            var n = e.reuseKey,
              r = e.tileID,
              o = e.title,
              a =
                typeof e.videoID == "string"
                  ? e.videoID
                  : n.startsWith("video:")
                    ? n.slice(6)
                    : null,
              i = t && n.startsWith("compass:") ? n.slice(8) : null;
            return e.isVideo === !0 && (a == null || a === "") && i == null
              ? []
              : [
                  babelHelpers.extends(
                    {},
                    i != null ? { compassCreativeID: i } : {},
                    {
                      coverImageURL:
                        typeof e.coverImageURL == "string"
                          ? e.coverImageURL
                          : null,
                      coverVideoURL:
                        i != null && typeof e.coverVideoURL == "string"
                          ? e.coverVideoURL
                          : null,
                      description:
                        typeof e.description == "string" ? e.description : null,
                      isVideo: e.isVideo === !0,
                      generationStyle:
                        typeof e.generationStyle == "string"
                          ? e.generationStyle
                          : null,
                      isAIGenerated: e.isAIGenerated === !0,
                      isRetained: e.isRetained === !0,
                      previewVideoURL:
                        typeof e.previewVideoURL == "string"
                          ? e.previewVideoURL
                          : null,
                      reuseKey: n,
                      sourceDescription:
                        typeof e.sourceDescription == "string"
                          ? e.sourceDescription
                          : null,
                      sourceImageURL:
                        typeof e.sourceImageURL == "string"
                          ? e.sourceImageURL
                          : null,
                      tileID: r,
                      title: o,
                      videoID: a,
                    },
                  ),
                ];
          })
        : [];
    }
    function d(e, t, n, a, i) {
      if (e == null) return null;
      try {
        var l,
          u,
          d =
            (l = (s || (s = r("WebStorage"))).getSessionStorageForRead()) ==
            null
              ? void 0
              : l.getItem(e);
        if (d == null) return null;
        var m = JSON.parse(d);
        if (m == null || typeof m != "object" || Array.isArray(m)) return null;
        var p = {},
          _ = (u = m.mediaTilesByAd) != null ? u : m.addedTilesByAd,
          f = m.mediaTilePool,
          g = m.mediaTileRefsByAd,
          h = m.selectedByAd,
          y = o("MAIBACompassMediaSelectionUtils").initialSelections(t),
          C = new Map(),
          b = m.generationKey !== n || m.instanceKey !== a;
        (t.forEach(function (e) {
          var t =
              _ != null && typeof _ == "object" && !Array.isArray(_)
                ? _[e.adID]
                : null,
            n =
              g != null && typeof g == "object" && !Array.isArray(g)
                ? g[e.adID]
                : null,
            r =
              i && Array.isArray(f) && Array.isArray(n)
                ? n.flatMap(function (e) {
                    if (
                      e == null ||
                      typeof e != "object" ||
                      Array.isArray(e) ||
                      typeof e.tileID != "string" ||
                      typeof e.poolIndex != "number" ||
                      !Number.isSafeInteger(e.poolIndex) ||
                      e.poolIndex < 0 ||
                      e.poolIndex >= f.length
                    )
                      return [];
                    var t = f[e.poolIndex];
                    return t != null &&
                      typeof t == "object" &&
                      !Array.isArray(t)
                      ? [babelHelpers.extends({}, t, { tileID: e.tileID })]
                      : [];
                  })
                : t,
            a = c(r, i),
            l =
              h != null && typeof h == "object" && !Array.isArray(h)
                ? h[e.adID]
                : null;
          if (Array.isArray(l)) {
            var s = new Set(
              a
                .filter(function (t) {
                  return (
                    l.includes(t.tileID) &&
                    o(
                      "MAIBACompassMediaSelectionUtils",
                    ).isMediaCompatibleWithAd(e, t)
                  );
                })
                .map(function (e) {
                  return e.reuseKey;
                }),
            );
            i &&
              a.forEach(function (e) {
                e.isAIGenerated === !0 &&
                  s.has(e.reuseKey) &&
                  C.set(e.reuseKey, e);
              });
            var u = new Map(
              e.tiles.map(function (e) {
                return [e.reuseKey, e];
              }),
            );
            p[e.adID] = a
              .filter(function (e) {
                return (
                  (!u.has(e.reuseKey) || (i && b && s.has(e.reuseKey))) &&
                  (e.isAIGenerated !== !0 || !b || s.has(e.reuseKey))
                );
              })
              .map(function (e) {
                var t, n, r;
                return babelHelpers.extends(
                  {},
                  e,
                  (t = u.get(e.reuseKey)) != null ? t : {},
                  {
                    isRetained: b || e.isRetained === !0,
                    tileID:
                      (n =
                        (r = u.get(e.reuseKey)) == null ? void 0 : r.tileID) !=
                      null
                        ? n
                        : e.tileID.startsWith(
                              o("MAIBACompassMediaSelectionUtils")
                                .LIBRARY_TILE_ID_PREFIX,
                            )
                          ? e.tileID
                          : o("MAIBACompassMediaSelectionUtils")
                              .RETAINED_TILE_ID_PREFIX + e.reuseKey,
                  },
                );
              });
            var d = o("MAIBACompassMediaSelectionUtils").getTilesForAd(e, p, s);
            y[e.adID] = l
              .flatMap(function (t) {
                var n,
                  r =
                    (n = a.find(function (e) {
                      return e.tileID === t;
                    })) == null
                      ? void 0
                      : n.reuseKey,
                  i = d.find(function (e) {
                    return e.reuseKey === r || e.tileID === t;
                  });
                return i == null ||
                  !o("MAIBACompassMediaSelectionUtils").isMediaCompatibleWithAd(
                    e,
                    i,
                  )
                  ? []
                  : [i.tileID];
              })
              .slice(0, o("MAIBACompassMediaSelectionUtils").MAX_MEDIA_PER_AD);
          } else p[e.adID] = [];
        }),
          i &&
            t.forEach(function (e) {
              var t,
                n = (t = p[e.adID]) != null ? t : [],
                r = new Map(
                  e.tiles.map(function (e) {
                    return [e.reuseKey, e];
                  }),
                ),
                a = Array.from(C.values()).map(function (e) {
                  var t, n, a;
                  return babelHelpers.extends(
                    {},
                    e,
                    (t = r.get(e.reuseKey)) != null ? t : {},
                    {
                      isRetained: b || e.isRetained === !0,
                      tileID:
                        (n =
                          (a = r.get(e.reuseKey)) == null
                            ? void 0
                            : a.tileID) != null
                          ? n
                          : o("MAIBACompassMediaSelectionUtils")
                              .RETAINED_TILE_ID_PREFIX + e.reuseKey,
                    },
                  );
                });
              p[e.adID] = [].concat(
                n.filter(function (e) {
                  return !C.has(e.reuseKey);
                }),
                a,
              );
            }));
        var v = new Set(
            t.map(function (e) {
              return e.adID;
            }),
          ),
          S = function (n) {
            return typeof n == "number" && Number.isSafeInteger(n)
              ? Math.max(0, Math.min(t.length - 1, n))
              : 0;
          };
        return {
          addedTilesByAd: p,
          currentAdIndex: S(m.currentAdIndex),
          generateVariantAdIDs:
            !b && Array.isArray(m.generateVariantAdIDs)
              ? m.generateVariantAdIDs.filter(function (e) {
                  return typeof e == "string" && v.has(e);
                })
              : [],
          isVariantStep: !b && m.isVariantStep === !0,
          reachedAdIndex: S(m.reachedAdIndex),
          selectedByAd: y,
          wasSubmitted: !b && m.wasSubmitted === !0,
        };
      } catch (e) {
        return (
          r("FBLogger")("maiba_optionality").warn(
            "Unable to restore media picker state: %s",
            String(e),
          ),
          null
        );
      }
    }
    function m(e, t, n, a, i, l, c) {
      var d = l.addedTilesByAd,
        m = l.currentAdIndex,
        p = l.generateVariantAdIDs,
        _ = l.isVariantStep,
        f = l.reachedAdIndex,
        g = l.selectedByAd,
        h = l.wasSubmitted;
      try {
        var y = Object.fromEntries(
            t.map(function (e) {
              return [
                e.adID,
                o("MAIBACompassMediaSelectionUtils").getTilesForAd(e, d, c),
              ];
            }),
          ),
          C = i ? u(y) : { addedTilesByAd: d, mediaTilesByAd: y };
        (s || (s = r("WebStorage"))).setItemGuarded(
          s.getSessionStorage(),
          e,
          JSON.stringify(
            babelHelpers.extends({}, C, {
              currentAdIndex: m,
              generationKey: n,
              instanceKey: a,
              generateVariantAdIDs: p,
              isVariantStep: _,
              reachedAdIndex: f,
              selectedByAd: g,
              wasSubmitted: h,
            }),
          ),
        );
      } catch (e) {
        r("FBLogger")("maiba_optionality").warn(
          "Unable to save media picker state: %s",
          String(e),
        );
      }
    }
    ((l.readPickerState = d), (l.writePickerState = m));
  },
  98,
);
