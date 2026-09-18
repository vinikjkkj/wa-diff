__d(
  "polarisLongVideoUploadReportStorage",
  [
    "WebStorage",
    "performanceAbsoluteNow",
    "polarisLongFormDiagnosticSanitizer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "ig_long_video_report_context",
      c = 147456,
      d = 900 * 1e3;
    function m(t, n) {
      var a = (e || (e = r("performanceAbsoluteNow")))();
      if (t == null || t.length > c) return null;
      var i;
      try {
        i = JSON.parse(t);
      } catch (e) {
        return null;
      }
      if (i == null || typeof i != "object") return null;
      var l = i,
        s = l.expiresAtMs,
        u = l.ownerViewerId,
        m = l.snapshot;
      if (
        typeof u != "string" ||
        u === "" ||
        u === "0" ||
        (n != null && u !== n) ||
        typeof s != "number" ||
        !Number.isFinite(s) ||
        s <= a ||
        s > a + d ||
        m == null ||
        typeof m != "object" ||
        m.schema_version !== 1 ||
        m.client_platform !== "WEB" ||
        m.feature !== "longform_upload" ||
        !Array.isArray(m.events) ||
        m.events.length > 250
      )
        return null;
      var p = o("polarisLongFormDiagnosticSanitizer").longFormDiagnosticID(
          m.uploader_session_id,
        ),
        _ = m.captured_at_ms,
        f = m.dropped_event_count,
        g = m.started_at_ms;
      if (
        p == null ||
        typeof _ != "number" ||
        !Number.isFinite(_) ||
        _ > a + 1e3 ||
        _ < 0 ||
        typeof g != "number" ||
        !Number.isFinite(g) ||
        g > _ ||
        g < 0 ||
        typeof f != "number" ||
        !Number.isSafeInteger(f) ||
        f < 0
      )
        return null;
      var h = [];
      for (var y of m.events) {
        if (y == null || typeof y != "object") return null;
        var C = y.kind,
          b = y.operation,
          v = y.sequence_number,
          S = y.timestamp_ms;
        if (
          (C !== "exception" && C !== "network") ||
          typeof b != "string" ||
          !/^[A-Za-z_]{1,80}$/.test(b) ||
          typeof v != "number" ||
          !Number.isSafeInteger(v) ||
          v < 1 ||
          typeof S != "number" ||
          !Number.isFinite(S) ||
          S < 0 ||
          S > _
        )
          return null;
        var R = o(
          "polarisLongFormDiagnosticSanitizer",
        ).sanitizeLongFormDiagnosticBody(y.fields, !0).body;
        if (R == null || typeof R != "object" || Array.isArray(R)) return null;
        h.push({
          fields: R,
          kind: C,
          operation: b,
          sequence_number: v,
          timestamp_ms: S,
        });
      }
      var L = m.creation_step;
      return {
        expiresAtMs: s,
        ownerViewerId: u,
        snapshot: o(
          "polarisLongFormDiagnosticSanitizer",
        ).freezeLongFormDiagnosticValue({
          captured_at_ms: _,
          client_platform: "WEB",
          coverage: {
            console: "excluded",
            http: "error_status_only",
            legacy_blue_sdk: "operation_summary_only",
            relay: "application_payload_only",
          },
          creation_step:
            typeof L == "string" && /^[A-Za-z_]{1,32}$/.test(L) ? L : null,
          dropped_event_count: f,
          events: h,
          feature: "longform_upload",
          publish_attempt_id: o(
            "polarisLongFormDiagnosticSanitizer",
          ).longFormDiagnosticID(m.publish_attempt_id),
          schema_version: 1,
          session_active: !1,
          started_at_ms: g,
          uploader_session_id: p,
        }),
      };
    }
    function p(e) {
      try {
        var t = (s || (s = r("WebStorage"))).getSessionStorageForRead(),
          n = m(t == null ? void 0 : t.getItem(u), e);
        return (
          n == null && (t == null || t.removeItem(u)),
          n == null
            ? null
            : { ownerViewerId: n.ownerViewerId, snapshot: n.snapshot }
        );
      } catch (e) {
        return null;
      }
    }
    function _(t, n) {
      if (!(n == null || t === "" || t === "0"))
        try {
          var o = (s || (s = r("WebStorage"))).getSessionStorage(),
            a = m(o == null ? void 0 : o.getItem(u), t),
            i =
              a != null &&
              a.snapshot.uploader_session_id === n.uploader_session_id
                ? a.expiresAtMs
                : (e || (e = r("performanceAbsoluteNow")))() + d,
            l = JSON.stringify({
              expiresAtMs: i,
              ownerViewerId: t,
              snapshot: babelHelpers.extends({}, n, { session_active: !1 }),
            });
          if (l.length > c) {
            o == null || o.removeItem(u);
            return;
          }
          if ((s || (s = r("WebStorage"))).setItemGuarded(o, u, l) != null) {
            var p;
            (p = (s || (s = r("WebStorage"))).getSessionStorageForRead()) ==
              null || p.removeItem(u);
          }
        } catch (e) {}
    }
    ((l.readPolarisLongVideoUploadReportContext = p),
      (l.savePolarisLongVideoUploadReportContext = _));
  },
  98,
);
