__d(
  "ReStoreDefaultValuesMetadata",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = { c: "string", t: "string" };
      for (var n in t) {
        if (!Object.prototype.hasOwnProperty.call(e, n) || e[n] == null)
          return (
            r("FBLogger")("messenger_web").warn(
              'Malformed default values data, missing key "%s"',
              n,
            ),
            null
          );
        var o = e[n],
          a = t[n],
          i = typeof o;
        if (i !== a)
          return (
            r("FBLogger")("messenger_web").warn(
              'Malformed default values data, key "%s" has type "%s" but expected "%s"',
              n,
              i,
              a,
            ),
            null
          );
      }
      if (typeof e.c != "string" || typeof e.t != "string") return null;
      var l = [],
        s = e.t;
      try {
        l = JSON.parse(e.c);
        for (var u of l) if (typeof u != "string") return null;
      } catch (e) {
        return null;
      }
      return { columns: l, tableName: s };
    }
    function s(e) {
      return { c: JSON.stringify(e.columns), t: e.tableName };
    }
    var u = "_db_defaults_meta";
    ((l.tryParseDefaultValuesData = e),
      (l.defaultValuesColumnToValue = s),
      (l.defaultValuesTableName = u));
  },
  98,
);
