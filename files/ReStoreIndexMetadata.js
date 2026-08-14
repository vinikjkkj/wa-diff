__d(
  "ReStoreIndexMetadata",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = typeof e == "string" ? e : null;
      if (t == null) return null;
      try {
        var n = JSON.parse(t);
        for (var r of n) if (typeof r != "string") return null;
        return n;
      } catch (e) {
        return null;
      }
    }
    function s(t) {
      var n = {
        indexName: "string",
        keyIds: "string",
        "predicate?": "string",
        tableName: "string",
      };
      for (var o in n) {
        var a = void 0,
          i = o.endsWith("?");
        if (i) a = t[o.slice(0, -1)];
        else {
          if (!Object.prototype.hasOwnProperty.call(t, o) || t[o] == null)
            return (
              r("FBLogger")("messenger_web").warn(
                'Malformed index data, missing key "%s"',
                o,
              ),
              null
            );
          a = t[o];
        }
        var l = n[o],
          s = typeof a;
        if (a != null && s !== l)
          return (
            r("FBLogger")("messenger_web").warn(
              'Malformed index data, key "%s" has type "%s" but expected "%s"',
              o,
              s,
              l,
            ),
            null
          );
      }
      var u = e(t.keyIds);
      return u == null
        ? (r("FBLogger")("messenger_web").warn(
            'Malformed index data, key IDs "%s" are invalid',
            typeof t.keyIds == "string"
              ? t.keyIds
              : "<" + typeof t.keyIds + ">",
          ),
          null)
        : typeof t.indexName != "string" ||
            typeof t.tableName != "string" ||
            (typeof t.predicate != "string" && t.predicate != null)
          ? null
          : babelHelpers.extends(
              { data: u, indexName: t.indexName, tableName: t.tableName },
              t.predicate == null ? {} : { predicate: t.predicate },
            );
    }
    function u(e, t) {
      if (e[0] == null || e[0].length !== t[0].length) return !0;
      for (var n = 0; n < e[0].length; n++) if (e[0][n] !== t[0][n]) return !0;
      return e[1] !== t[1];
    }
    function c(e) {
      return babelHelpers.extends(
        {
          indexName: e.indexName,
          keyIds: JSON.stringify(e.data),
          tableName: e.tableName,
        },
        e.predicate == null ? {} : { predicate: e.predicate },
      );
    }
    var d = "_db_indices_meta";
    ((l.tryParseIndexData = s),
      (l.indicesDiffer = u),
      (l.indexDataToValue = c),
      (l.indicesTableName = d));
  },
  98,
);
