__d(
  "WAAbPropsHelpers",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 86400,
      m = 600,
      p = 604800;
    function _(e) {
      return e == null ? d : Math.max(m, Math.min(p, e));
    }
    function f(e) {
      var t = [];
      return (
        Object.keys(e).forEach(function (n) {
          var r = e[n],
            o = r[0],
            a = r[1],
            i = r[2];
          typeof o == "number" &&
            t.push({ configName: n, configCode: o, configDefault: i });
        }),
        t
      );
    }
    function g(t, n) {
      switch (typeof n) {
        case "boolean":
          return t === "1";
        case "number":
          return parseFloat(t);
        case "string":
          return t;
        default:
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseValue: unsure how to read ",
                  "",
                ])),
              t,
            ),
            null
          );
      }
    }
    function h(e, t) {
      var n = new Map();
      t.forEach(function (e) {
        var t = e.configCode,
          r = e.configExpoKey,
          o = e.configValue;
        n.set(t, { configValue: o, configExpoKey: r });
      });
      var r = {},
        o = {};
      return (
        f(e).forEach(function (e) {
          var t = e.configCode,
            a = e.configDefault,
            i = e.configName,
            l = n.get(t);
          if (l != null) {
            var s = l.configExpoKey,
              u = l.configValue,
              c = g(u, a);
            (c != null && (r[i] = c), (o[t] = s != null ? s : null));
          }
        }),
        { values: r, expoKeys: o }
      );
    }
    function y(e, t, n) {
      var r = babelHelpers.extends({}, t, e),
        a = {};
      return (
        Object.keys(r).forEach(function (e) {
          if (n[e] == null) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeUpdatePropValues: deleting config ",
                  "",
                ])),
              e,
            );
            return;
          }
          a[e] = r[e];
        }),
        a
      );
    }
    function C(e, t, n) {
      var r = babelHelpers.extends({}, t, e),
        a = {},
        i = f(n).map(function (e) {
          return e.configCode;
        }),
        l = new Set(i),
        s = new Set();
      return (
        Object.keys(r).forEach(function (e) {
          var n = parseInt(e, 10),
            i = t ? t[n] : null;
          l.has(n)
            ? (r[n] !== i &&
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeUpdateExpoKeys: config_expo_key ",
                      " changed",
                    ])),
                  n,
                ),
                i != null && i.trim() && s.add(i)),
              (a[n] = r[n]))
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeUpdateExpoKeys: deleting config_expo_key ",
                    "",
                  ])),
                n,
              ),
              i != null && i.trim() && s.add(i));
        }),
        { propExpoKeys: a, expoKeysToDelete: s }
      );
    }
    function b(e, t) {
      if (t != null) {
        var n = t;
        if (
          (e.forEach(function (e) {
            n.delete(e);
          }),
          n.size !== 0)
        )
          return { internalExpoKeys: n, expoKeyStr: Array.from(n).join(",") };
      }
    }
    ((l.maybeUpdateRefresh = _),
      (l.asAbList = f),
      (l.parseAbProps = h),
      (l.maybeUpdatePropValues = y),
      (l.maybeUpdateExpoKeys = C),
      (l.maybeUpdateInternalExpoKeys = b));
  },
  98,
);
