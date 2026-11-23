__d(
  "WAAbPropsConverters",
  ["WAAbPropsTypes", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n = {
        expoKeyStr: t.expoKeyStr,
        internalExpoKeys: t.internalExpoKeys
          ? Array.from(t.internalExpoKeys)
          : [],
        lastSyncTime: t.lastSyncTime,
        refresh: t.refresh,
      };
      if (
        (t.abHash != null && (n.abHash = t.abHash),
        t.abKey != null && (n.abKey = t.abKey),
        t.propExpoKeys)
      ) {
        var r = t.propExpoKeys,
          a = [];
        (Object.keys(r).forEach(function (e) {
          var t = Number(e),
            n = { expoKey: t };
          (r[t] != null && (n.value = r[t]), a.push(n));
        }),
          (n.propExpoKeys = a));
      }
      if (t.propValues) {
        var i = t.propValues,
          l = [];
        (Object.keys(i).forEach(function (t) {
          var n = { name: t, value: {} };
          switch (typeof i[t]) {
            case "boolean":
              n.value.boolValue = i[t];
              break;
            case "number":
              n.value.intValue = i[t];
              break;
            case "string":
              n.value.strValue = i[t];
              break;
            default:
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "convertAbPropsParsedToDbEntity: unsure how to read ",
                    "",
                  ])),
                i[t],
              );
              return;
          }
          l.push(n);
        }),
          (n.propValues = l));
      }
      return n;
    }
    function c(e) {
      var t = {
        expoKeyStr: e.expoKeyStr,
        internalExpoKeys: e.internalExpoKeys,
        lastSyncTime: e.lastSyncTime,
        propExpoKeys: e.propExpoKeys,
        refresh: e.refresh,
      };
      if (
        (e.hash != null && (t.abHash = e.hash),
        e.abKey != null && (t.abKey = e.abKey),
        e.propValues)
      ) {
        var n = e.propValues,
          r = {};
        (Object.keys(n).forEach(function (e) {
          n[e] != null && (r[e] = n[e]);
        }),
          (t.propValues = r));
      }
      return t;
    }
    function d(e) {
      var t = e.abHash,
        n = e.abKey,
        r = e.expoKeyStr,
        a = e.internalExpoKeys,
        i = e.lastSyncTime,
        l = e.propExpoKeys,
        u = e.propValues,
        c = e.refresh,
        d = { abHash: t, abKey: n, expoKeyStr: r, lastSyncTime: i, refresh: c };
      if ((a != null && (d.internalExpoKeys = new Set(a)), l != null)) {
        var m = {};
        (l.forEach(function (e) {
          e.expoKey != null && (m[e.expoKey] = e.value);
        }),
          (d.propExpoKeys = m));
      }
      if (u != null) {
        var p = {};
        (u.forEach(function (e) {
          var t = e.name,
            n = o("WAAbPropsTypes").ABPropConfigs[t];
          if (!(n == null || n.length < 3)) {
            var r = n[2];
            switch (typeof r) {
              case "boolean":
                p[t] = e.value.boolValue;
                return;
              case "number":
                p[t] = e.value.intValue;
                return;
              case "string":
                p[t] = e.value.strValue;
                return;
              default:
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "convertDbAbPropsToParsed: unsure how to read ",
                      "",
                    ])),
                  r,
                );
                return;
            }
          }
        }),
          (d.propValues = p));
      }
      return d;
    }
    ((l.convertAbPropsParsedToDbEntity = u),
      (l.convertAbPropsDataToParsed = c),
      (l.convertDbAbPropsToParsed = d));
  },
  98,
);
