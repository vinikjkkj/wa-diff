__d(
  "WAWebVoipLabMetricsFile",
  [
    "WACamelCase",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebVoipPersistentFS",
    "WAWebWamEnumFieldStatsRowType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "/wa_voip_storage/call_metrics.json",
      _ = "/wa_voip_storage/call_metrics_js_patch.json",
      f = 1,
      g = "prod-lab",
      h = "prod-labvideo",
      y = 44;
    async function C(t) {
      if (b())
        try {
          var n =
              await o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              ),
            a = S(n);
          if (a == null) return;
          var i = a.split(`
`),
            l = L(i);
          if (l < 0) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [LabMetrics] no self row in ",
                  ", nothing patched",
                ])),
              p,
            );
            return;
          }
          var d = E(i[l]),
            m = k(d);
          if (m == null) return;
          var g = T(m, t),
            h = g.filled,
            y = g.patched;
          if (y.length === 0) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [LabMetrics] no null fields matched, ",
                  " left untouched",
                ])),
              p,
            );
            return;
          }
          var C = babelHelpers.extends({}, m, h),
            v = Array.isArray(d) ? [C].concat(d.slice(1)) : C,
            R = new TextEncoder();
          i[l] = JSON.stringify(v);
          var I = R.encode(
            i.join(`
`),
          );
          (n.FS.writeFile(p, I),
            n.FS.writeFile(
              _,
              R.encode(
                JSON.stringify({
                  callMetricsByteLength: I.byteLength,
                  patchedFieldCount: y.length,
                  patchedRowIndex: l,
                  patchVersion: f,
                }),
              ),
            ),
            await o("WAWebVoipPersistentFS").syncPersistentFS(n),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [LabMetrics] filled ",
                  " field(s) in row ",
                  ": ",
                  "",
                ])),
              y.length,
              l,
              y.join(", "),
            ));
        } catch (e) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [LabMetrics] failed to patch ",
                  "",
                ])),
              p,
            )
            .catching(r("getErrorSafe")(e));
        }
    }
    function b() {
      var e = v();
      return e === g || e === h;
    }
    function v() {
      try {
        var e = o("WAWebABProps").getABPropConfigValue(
          "web_voip_load_wasm_variant",
        );
        return typeof e == "string" ? e : null;
      } catch (e) {
        return null;
      }
    }
    function S(e) {
      try {
        return new TextDecoder().decode(e.FS.readFile(p));
      } catch (e) {
        return (
          R(e) ||
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [LabMetrics] failed to read ",
                    "",
                  ])),
                p,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-lab-metrics-read-failed", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              }),
          null
        );
      }
    }
    function R(e) {
      return e == null || typeof e != "object"
        ? !1
        : e.code === "ENOENT" || e.errno === y;
    }
    function L(e) {
      for (var t = e.length - 1; t >= 0; t--) {
        var n = k(E(e[t]));
        if (n != null && I(n)) return t;
      }
      return -1;
    }
    function E(e) {
      if (e.trim() === "") return null;
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    function k(e) {
      var t = Array.isArray(e) ? e[0] : e;
      return t == null || typeof t != "object" || Array.isArray(t) ? null : t;
    }
    function I(e) {
      var t = e.field_stats_row_type;
      return (
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    function T(e, t) {
      var n = D(e),
        r = {},
        o = [];
      for (var a of Object.keys(t)) {
        var i = n[a];
        if (!(i == null || e[i] != null)) {
          var l = x(t[a]);
          l != null && ((r[i] = l), o.push(i + "=" + String(l)));
        }
      }
      return { filled: r, patched: o };
    }
    function D(e) {
      var t = {},
        n = new Set();
      for (var a of Object.keys(e)) {
        var i = r("WACamelCase")(a, { treatNumbersAsWordBoundaries: !1 });
        if (n.has(i)) {
          ((t[i] = null),
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [LabMetrics] ambiguous camelCase key ",
                  ", skipping",
                ])),
              i,
            ));
          continue;
        }
        (n.add(i), (t[i] = a));
      }
      return t;
    }
    function x(e) {
      return typeof e == "number"
        ? Number.isFinite(e)
          ? e
          : null
        : typeof e == "boolean"
          ? e
            ? 1
            : 0
          : typeof e == "string"
            ? e
            : null;
    }
    l.patchLabMetricsSelfRow = C;
  },
  98,
);
