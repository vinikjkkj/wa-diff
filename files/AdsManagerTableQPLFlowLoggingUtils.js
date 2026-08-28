__d(
  "AdsManagerTableQPLFlowLoggingUtils",
  ["AdsManagerErrorUtils", "AdsPerfInteractionsController", "QPLSharing"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Set(),
        n = new Set(),
        a = new Set(),
        i = new Set(),
        l = new Set(),
        s = new Set();
      (e.forEach(function (e) {
        var r,
          u,
          c = e.column,
          d = e.error,
          m = e.objectID;
        (m != null && t.add(m), c != null && n.add(c));
        var p = d,
          _ =
            (r = p == null ? void 0 : p.error_subcode) != null
              ? r
              : p == null
                ? void 0
                : p.code;
        (_ != null && a.add(String(_)),
          (d == null ? void 0 : d.message) != null &&
            i.add(d == null ? void 0 : d.message));
        var f = p == null ? void 0 : p.fbtrace_id;
        (f != null && l.add(f),
          (u = o("AdsManagerErrorUtils").getOpesMIDs(d)) == null ||
            u.forEach(function (e) {
              return s.add(e);
            }));
      }),
        r("QPLSharing").emitPoint("LOAD_TABLE", "ALL_CELLS_LOADED_ERROR", {
          data: {
            int: { error_count: e.length },
            string_array: {
              ad_object_ids: Array.from(t),
              columns: Array.from(n),
              error_codes: Array.from(a),
              error_messages: Array.from(i),
              request_ids: Array.from(l),
              opes_mids: Array.from(s),
            },
          },
        }));
    }
    function s(e, t) {
      var n = r("AdsPerfInteractionsController").getActiveInteraction(
        "am.table",
      );
      n != null &&
        o("AdsManagerErrorUtils").addCausalErrorMetadataToInteraction(n, t);
      var a = t;
      r("QPLSharing").emitPoint("LOAD_TABLE", "ERROR_IN_CELL", {
        data: {
          int: {
            cell_id: e,
            error_code: a == null ? void 0 : a.code,
            error_subcode: a == null ? void 0 : a.error_subcode,
          },
          string: {
            error_type: a == null ? void 0 : a.type,
            message: t == null ? void 0 : t.message,
            www_request_id: a == null ? void 0 : a.fbtrace_id,
          },
          string_array: { opes_mids: o("AdsManagerErrorUtils").getOpesMIDs(t) },
        },
      });
    }
    function u(e, t) {
      var n = e;
      r("QPLSharing").emitPoint("LOAD_TABLE", "NON_CELL_STATUS_ERROR", {
        data: {
          int: {
            error_code: n == null ? void 0 : n.code,
            error_subcode: n == null ? void 0 : n.error_subcode,
          },
          string: {
            error_type: n == null ? void 0 : n.type,
            message: e == null ? void 0 : e.message,
            reason: t,
            www_request_id: n == null ? void 0 : n.fbtrace_id,
          },
          string_array: { opes_mids: o("AdsManagerErrorUtils").getOpesMIDs(e) },
        },
      });
    }
    ((l.emitAllCellErrors = e),
      (l.emitCellError = s),
      (l.emitNonCellStatusError = u));
  },
  98,
);
