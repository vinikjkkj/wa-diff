__d(
  "WAWebVoipLabMetricsFile",
  [
    "WACamelCase",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebVoipPersistentFS",
    "WAWebWamEnumFieldStatsRowType",
    "asyncToGeneratorRuntime",
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (v())
            try {
              var t =
                  yield o("WAWebBackendApi").frontendSendAndReceive(
                    "initializeVoipWasm",
                  ),
                n = R(t);
              if (n == null) return;
              var a = n.split("\n"),
                i = E(a);
              if (i < 0) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [LabMetrics] no self row in ",
                      ", nothing patched",
                    ])),
                  p,
                );
                return;
              }
              var l = k(a[i]),
                s = I(l);
              if (s == null) return;
              var g = D(s, e),
                h = g.filled,
                y = g.patched;
              if (y.length === 0) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [LabMetrics] no null fields matched, ",
                      " left untouched",
                    ])),
                  p,
                );
                return;
              }
              var C = babelHelpers.extends({}, s, h),
                b = Array.isArray(l) ? [C].concat(l.slice(1)) : C,
                S = new TextEncoder();
              a[i] = JSON.stringify(b);
              var L = S.encode(a.join("\n"));
              (t.FS.writeFile(p, L),
                t.FS.writeFile(
                  _,
                  S.encode(
                    JSON.stringify({
                      callMetricsByteLength: L.byteLength,
                      patchedFieldCount: y.length,
                      patchedRowIndex: i,
                      patchVersion: f,
                    }),
                  ),
                ),
                yield o("WAWebVoipPersistentFS").syncPersistentFS(t),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [LabMetrics] filled ",
                      " field(s) in row ",
                      ": ",
                      "",
                    ])),
                  y.length,
                  i,
                  y.join(", "),
                ));
            } catch (e) {
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [LabMetrics] failed to patch ",
                      "",
                    ])),
                  p,
                )
                .catching(r("getErrorSafe")(e));
            }
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      var e = S();
      return e === g || e === h;
    }
    function S() {
      try {
        var e = o("WAWebABProps").getABPropConfigValue(
          "web_voip_load_wasm_variant",
        );
        return typeof e == "string" ? e : null;
      } catch (e) {
        return null;
      }
    }
    function R(t) {
      try {
        return new TextDecoder().decode(t.FS.readFile(p));
      } catch (t) {
        return (
          L(t) ||
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [LabMetrics] failed to read ",
                    "",
                  ])),
                p,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-lab-metrics-read-failed", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              }),
          null
        );
      }
    }
    function L(e) {
      return e == null || typeof e != "object"
        ? !1
        : e.code === "ENOENT" || e.errno === y;
    }
    function E(e) {
      for (var t = e.length - 1; t >= 0; t--) {
        var n = I(k(e[t]));
        if (n != null && T(n)) return t;
      }
      return -1;
    }
    function k(e) {
      if (e.trim() === "") return null;
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    function I(e) {
      var t = Array.isArray(e) ? e[0] : e;
      return t == null || typeof t != "object" || Array.isArray(t) ? null : t;
    }
    function T(e) {
      var t = e.field_stats_row_type;
      return (
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        t === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    function D(e, t) {
      var n = x(e),
        r = {},
        o = [];
      for (var a of Object.keys(t)) {
        var i = n[a];
        if (!(i == null || e[i] != null)) {
          var l = $(t[a]);
          l != null && ((r[i] = l), o.push(i + "=" + String(l)));
        }
      }
      return { filled: r, patched: o };
    }
    function x(e) {
      var t = {},
        n = new Set();
      for (var a of Object.keys(e)) {
        var i = r("WACamelCase")(a, { treatNumbersAsWordBoundaries: !1 });
        if (n.has(i)) {
          ((t[i] = null),
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
    function $(e) {
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
