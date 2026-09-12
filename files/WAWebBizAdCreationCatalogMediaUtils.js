__d(
  "WAWebBizAdCreationCatalogMediaUtils",
  ["WAWebBizAdCreationCatalogMediaItem"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.map(function (e) {
        return {
          displayUrl: e.thumbnailUrl,
          key: o("WAWebBizAdCreationCatalogMediaItem").getCatalogMediaItemKey(
            e.item,
          ),
          resolvedHash: null,
          resolvedUrl: null,
        };
      });
    }
    function s(e, t) {
      var n = new Map(
        t.map(function (e) {
          return [e.key, e];
        }),
      );
      return e.map(function (e) {
        var t;
        return (t = n.get(e.key)) != null ? t : e;
      });
    }
    function u(e, t) {
      return e.filter(function (e) {
        return !t.has(e.key);
      });
    }
    function c(e, t) {
      var n = [];
      return (
        e.forEach(function (e, r) {
          var a = t[r];
          a != null &&
            n.push({
              displayUrl: e.url,
              key: o(
                "WAWebBizAdCreationCatalogMediaItem",
              ).getCatalogMediaItemKey(a),
              resolvedHash: e.hash,
              resolvedUrl: e.url,
            });
        }),
        n
      );
    }
    function d(e, t, n) {
      var r = new Set(
          e.map(function (e) {
            return e.key;
          }),
        ),
        o = [].concat(e),
        a = 0;
      for (var i of t)
        if (!r.has(i.key)) {
          if (o.length >= n) {
            a++;
            continue;
          }
          (r.add(i.key), o.push(i));
        }
      return { droppedCount: a, selections: o };
    }
    ((l.toPendingSelections = e),
      (l.applyResolvedSelections = s),
      (l.withoutSelections = u),
      (l.toResolvedSelections = c),
      (l.mergeCatalogSelections = d));
  },
  98,
);
