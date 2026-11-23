__d(
  "MAIBACompassMediaSelectionUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "library:",
      l = "retained:",
      s = new Set(),
      u = 10;
    function c(e) {
      return e.isVideoOnly === !0;
    }
    function d(e, t) {
      return (
        !c(e) ||
        (t.videoID != null && t.videoID !== "") ||
        (t.compassCreativeID != null && t.isVideo === !0)
      );
    }
    function m(e, t, n) {
      var r = new Set(
        t
          .filter(function (t) {
            return !d(e, t);
          })
          .map(function (e) {
            return e.tileID;
          }),
      );
      return n.filter(function (e) {
        return !r.has(e);
      });
    }
    function p(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          t[e.adID] = e.tiles
            .filter(function (t) {
              return t.isPreselected === !0 && d(e, t);
            })
            .slice(0, u)
            .map(function (e) {
              return e.tileID;
            });
        }),
        t
      );
    }
    function _(e, t) {
      return new Set(
        e
          .filter(function (e) {
            return t.includes(e.tileID);
          })
          .map(function (e) {
            return e.reuseKey;
          }),
      );
    }
    function f(e, t, n) {
      var r, o;
      n === void 0 && (n = s);
      var a = t[e.adID],
        i =
          a == null
            ? e.tiles
            : [].concat(
                a.filter(function (e) {
                  return e.isRetained === !0;
                }),
                e.tiles,
                a.filter(function (e) {
                  return e.isRetained !== !0;
                }),
              ),
        l = new Set(
          i
            .filter(function (e) {
              return (
                e.isRetained === !0 ||
                e.isPreselected === !0 ||
                n.has(e.reuseKey)
              );
            })
            .map(function (e) {
              return e.reuseKey;
            }),
        ),
        u = (r = e.generationIDs) != null ? r : [],
        c = u[u.length - 1],
        d = new Set(
          i
            .filter(function (e) {
              return (
                e.isRetained === !0 ||
                (c != null &&
                  e.generationID != null &&
                  e.generationID !== c &&
                  l.has(e.reuseKey))
              );
            })
            .map(function (e) {
              return e.reuseKey;
            }),
        ),
        m = new Map(),
        p = function (t) {
          return t.isAIGenerated === !0 &&
            t.generationStyle != null &&
            t.generationStyle !== ""
            ? t.generationStyle
            : null;
        };
      i.forEach(function (e) {
        var t = p(e);
        if (t != null && l.has(e.reuseKey) && !d.has(e.reuseKey)) {
          var n,
            r = (n = m.get(t)) != null ? n : new Set();
          (r.add(e.reuseKey), m.set(t, r));
        }
      });
      var _ = new Set(),
        f = i.filter(function (e) {
          var t;
          if (_.has(e.reuseKey)) return !1;
          _.add(e.reuseKey);
          var n = p(e);
          if (n == null || l.has(e.reuseKey)) return !0;
          var r = (t = m.get(n)) != null ? t : new Set();
          return r.size >= 3 ? !1 : (r.add(e.reuseKey), m.set(n, r), !0);
        });
      if (
        !f.some(function (e) {
          return p(e) != null;
        })
      )
        return [].concat(
          f.filter(function (e) {
            return e.isAIGenerated !== !0;
          }),
          f.filter(function (e) {
            return e.isAIGenerated === !0;
          }),
        );
      var g = new Map();
      f.forEach(function (e) {
        if (e.isAIGenerated === !0) {
          var t,
            n,
            r = (t = e.generationStyle) != null ? t : "",
            o = (n = g.get(r)) != null ? n : [];
          g.set(r, [].concat(o, [e]));
        }
      });
      var h = new Set(
        [].concat(
          (o = e.generationStyles) != null ? o : [],
          e.tiles.flatMap(function (e) {
            var t;
            return p(e) == null
              ? []
              : [(t = e.generationStyle) != null ? t : ""];
          }),
          Array.from(g.keys()),
        ),
      );
      return [].concat(
        f.filter(function (e) {
          return e.isAIGenerated !== !0;
        }),
        Array.from(h).flatMap(function (e) {
          var t;
          return (t = g.get(e)) != null ? t : [];
        }),
      );
    }
    function g(e, t, n) {
      return new Set(
        e.flatMap(function (e) {
          var r;
          return []
            .concat(e.tiles, (r = n[e.adID]) != null ? r : [])
            .filter(function (n) {
              var r;
              return (
                ((r = t[e.adID]) != null ? r : []).includes(n.tileID) && d(e, n)
              );
            })
            .map(function (e) {
              return e.reuseKey;
            });
        }),
      );
    }
    ((i.LIBRARY_TILE_ID_PREFIX = e),
      (i.RETAINED_TILE_ID_PREFIX = l),
      (i.MAX_MEDIA_PER_AD = u),
      (i.isVideoOnlyAd = c),
      (i.isMediaCompatibleWithAd = d),
      (i.getCompatibleSelectionIDs = m),
      (i.initialSelections = p),
      (i.getSelectedHashes = _),
      (i.getTilesForAd = f),
      (i.getSelectedReuseKeys = g));
  },
  66,
);
