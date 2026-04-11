__d(
  "WAWebGalaxyFlowsWamEventParser",
  ["WAFlowsWAMLoggerTypes", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = { BOOL: 1, LONG: 2, FLOAT: 3, STRING: 4, ENUM: 5 },
      _ =
        ((e = {}),
        (e[
          o(
            "WAFlowsWAMLoggerTypes",
          ).WAFlowsWAMEventCodeType.WamExtensionsScreenProgress
        ] = [13, 17]),
        e),
      f = 4,
      g = 0,
      h = 1,
      y = 2,
      C = 3;
    function b(e, t) {
      switch (e) {
        case p.BOOL:
        case p.LONG:
        case p.FLOAT:
          return typeof t == "number" ? t : Number(t);
        case p.STRING:
          return String(t);
        case p.ENUM: {
          if (typeof t == "string") {
            var n = t.split("|");
            if (n.length > 0) {
              var r = n[0],
                o = Number(r);
              return isNaN(o) ? r : o;
            }
          }
          return t;
        }
        default:
          return t;
      }
    }
    function v(e) {
      if (e == null || typeof e != "object")
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[GalaxyFlowsWAM] Invalid payload: payload is not an object",
              ])),
          ),
          null
        );
      var t = e;
      if (typeof t.code != "number" || !Array.isArray(t.fields))
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[GalaxyFlowsWAM] Invalid payload: missing code or fields",
              ])),
          ),
          null
        );
      var n = t.channel,
        r = t.code,
        a = t.fields,
        i = t.psIdKey;
      if (a.length % f !== 0)
        return (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[GalaxyFlowsWAM] fields.length=",
                " not divisible by ",
                "",
              ])),
            a.length,
            f,
          ),
          null
        );
      for (
        var l = {
            id: r,
            weight: 1,
            privateStatsIdInt: i != null ? Number(i) : 0,
            wamChannel:
              o("WAFlowsWAMLoggerTypes").WAFlowsWAMChannelType.PRIVATE_STATS ===
              n
                ? "private"
                : "regular",
          },
          p = a.length / f,
          _ = 0;
        _ < p;
        _++
      ) {
        var h = _ * f,
          v = a[h + g],
          R = a[h + y],
          L = a[h + C];
        if (typeof v != "number" || typeof R != "number") {
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[GalaxyFlowsWAM] field[",
                "]: fieldId/fieldType not a number",
              ])),
            _,
          );
          continue;
        }
        try {
          var E = S(r, v, R),
            k = b(E, L);
          l[v] = k;
        } catch (e) {
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[GalaxyFlowsWAM] Error parsing field ",
                ": ",
                "",
              ])),
            v,
            e,
          );
        }
      }
      return l;
    }
    function S(e, t, n) {
      return e !==
        o("WAFlowsWAMLoggerTypes").WAFlowsWAMEventCodeType
          .WamExtensionsScreenProgress
        ? n
        : _[
              o("WAFlowsWAMLoggerTypes").WAFlowsWAMEventCodeType
                .WamExtensionsScreenProgress
            ].includes(t)
          ? p.BOOL
          : n;
    }
    ((l.parseRawWamEvent = v), (l.fixFieldType = S));
  },
  98,
);
