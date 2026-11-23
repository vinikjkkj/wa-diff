__d(
  "MAIBAAdSpecHumanReadableFormatter",
  [
    "MAIBAPreviewPublishFieldLabel",
    "MAIBAPreviewPublishReviewUtils",
    "MAIBAR23WorkspaceAdSpecFormatters",
    "lengthInUTF8Bytes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "preview_publish_deterministic_v1",
      s = "r23_workspace_budget_schedule_v1",
      u = 32768;
    function c(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function d(e) {
      if (typeof e != "string") return e;
      try {
        return JSON.parse(e);
      } catch (t) {
        return e;
      }
    }
    function m(e) {
      var t = d(e);
      if (typeof t == "number" && Number.isFinite(t)) return t;
      if (typeof t != "string") return null;
      var n = t.trim();
      if (n === "") return null;
      var r = Number(n);
      return Number.isFinite(r) ? r : null;
    }
    function p(e) {
      var t = d(e);
      return typeof t == "string" && t !== "" ? t : null;
    }
    function _(e) {
      var t = d(e);
      if (!Array.isArray(t)) return null;
      var n = [];
      for (var r of t) {
        var o = c(r);
        if (o == null) return null;
        n.push({
          interval_days: m(o.interval_days),
          max_frequency: m(o.max_frequency),
        });
      }
      return n;
    }
    function f(t) {
      return t === "preview_publish_deterministic"
        ? e
        : t === "r23_workspace_formatter"
          ? s
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    function g(e) {
      var t,
        n = new Set(),
        r = new Set(),
        o = new Set(),
        a =
          (t = c(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : t.fragments;
      if (Array.isArray(a))
        for (var i of a) {
          var l = c(i);
          if (l != null) {
            (typeof l.fragment_id == "string" && r.add(l.fragment_id),
              typeof l.object_id == "string" && o.add(l.object_id));
            var s = l.changes;
            if (Array.isArray(s))
              for (var u of s) {
                var d,
                  m = (d = c(u)) == null ? void 0 : d.field;
                typeof m == "string" && n.add(m);
              }
          }
        }
      return {
        fieldKeys: Array.from(n).sort().join(","),
        fragmentIds: Array.from(r).sort().join(","),
        objectIds: Array.from(o).sort().join(","),
      };
    }
    function h(e) {
      return e.reduce(function (e, t) {
        return e + t.rows.length;
      }, 0);
    }
    function y(e) {
      var t = JSON.stringify(e),
        n = r("lengthInUTF8Bytes")(t);
      return n > u
        ? { renderedTables: "", renderedTablesByteLength: n, valuesOmitted: !0 }
        : { renderedTables: t, renderedTablesByteLength: n, valuesOmitted: !1 };
    }
    function C(e) {
      var t, n, r, o;
      return {
        after: e.after,
        afterImageCount:
          (t = (n = e.afterImageUrls) == null ? void 0 : n.length) != null
            ? t
            : 0,
        before: e.before,
        beforeImageCount:
          (r = (o = e.beforeImageUrls) == null ? void 0 : o.length) != null
            ? r
            : 0,
        field: e.field,
        kind: "change",
      };
    }
    function b(e, t) {
      var n = o("MAIBAPreviewPublishReviewUtils").getReviewTableHeaders(t);
      return e.map(function (e) {
        return {
          caption: o("MAIBAPreviewPublishReviewUtils").formatAdObjectCaption(
            e.level,
            e.name,
            e.objectId,
          ),
          fragmentId: e.fragmentId,
          headers: n,
          kind: "spec_diff",
          objectId: e.objectId,
          objectLevel: e.level,
          rows: e.rows.map(C),
        };
      });
    }
    function v(e, t, n) {
      return t == null && n == null
        ? null
        : {
            after: n != null ? n : "-",
            afterImageCount: 0,
            before: t != null ? t : "-",
            beforeImageCount: 0,
            field: e,
            kind: "change",
          };
    }
    function S(e) {
      return {
        after: "unsupported_by_r23_workspace_formatter",
        afterImageCount: 0,
        before: "unsupported_by_r23_workspace_formatter",
        beforeImageCount: 0,
        field: o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(e),
        kind: "change",
      };
    }
    function R(e, t, n) {
      var r = e.get(t);
      return r == null ? null : m(n === "new" ? r.new : r.old);
    }
    function L(e, t, n) {
      var r = e.get(t);
      return r == null ? null : p(n === "new" ? r.new : r.old);
    }
    function E(e, t, n) {
      var r = e.get(t);
      return r == null ? null : _(n === "new" ? r.new : r.old);
    }
    function k(e, t, n, r) {
      (t.add(n), r != null && e.push(r));
    }
    function I(e, t) {
      var n = e.changes;
      if (!Array.isArray(n)) return { rows: [], unsupportedFieldKeys: [] };
      var r = new Map(),
        a = [];
      for (var i of n) {
        var l = c(i),
          s = l == null ? void 0 : l.field;
        l == null ||
          typeof s != "string" ||
          (r.has(s) || a.push(s), r.set(s, l));
      }
      var u = [],
        d = new Set();
      if (r.has("daily_budget") || r.has("lifetime_budget")) {
        (d.add("daily_budget"), d.add("lifetime_budget"));
        var m = o("MAIBAR23WorkspaceAdSpecFormatters").formatMAIBAR23Budget(
            t == null ? void 0 : t.currency,
            R(r, "daily_budget", "old"),
            R(r, "lifetime_budget", "old"),
          ),
          p = o("MAIBAR23WorkspaceAdSpecFormatters").formatMAIBAR23Budget(
            t == null ? void 0 : t.currency,
            R(r, "daily_budget", "new"),
            R(r, "lifetime_budget", "new"),
          ),
          _ = v("budget_schedule", m, p);
        _ != null && u.push(_);
      }
      if (r.has("start_time") || r.has("stop_time")) {
        (d.add("start_time"), d.add("stop_time"));
        var f = o(
            "MAIBAR23WorkspaceAdSpecFormatters",
          ).formatMAIBAR23ScheduleBullet(
            R(r, "start_time", "old"),
            R(r, "stop_time", "old"),
            t == null ? void 0 : t.timezoneID,
          ),
          g = o(
            "MAIBAR23WorkspaceAdSpecFormatters",
          ).formatMAIBAR23ScheduleBullet(
            R(r, "start_time", "new"),
            R(r, "stop_time", "new"),
            t == null ? void 0 : t.timezoneID,
          ),
          h = v("budget_schedule", f, g);
        h != null && u.push(h);
      }
      (r.has("bid_strategy") &&
        k(
          u,
          d,
          "bid_strategy",
          v(
            "bid_strategy",
            o("MAIBAR23WorkspaceAdSpecFormatters").formatMAIBAR23BidStrategy(
              L(r, "bid_strategy", "old"),
            ),
            o("MAIBAR23WorkspaceAdSpecFormatters").formatMAIBAR23BidStrategy(
              L(r, "bid_strategy", "new"),
            ),
          ),
        ),
        r.has("bid_amount") &&
          k(
            u,
            d,
            "bid_amount",
            v(
              "bid_amount",
              o("MAIBAR23WorkspaceAdSpecFormatters").formatMAIBAR23BidAmount(
                t == null ? void 0 : t.currency,
                R(r, "bid_amount", "old"),
              ),
              o("MAIBAR23WorkspaceAdSpecFormatters").formatMAIBAR23BidAmount(
                t == null ? void 0 : t.currency,
                R(r, "bid_amount", "new"),
              ),
            ),
          ),
        r.has("frequency_control_specs") &&
          k(
            u,
            d,
            "frequency_control_specs",
            v(
              "frequency_control_specs",
              o(
                "MAIBAR23WorkspaceAdSpecFormatters",
              ).formatMAIBAR23FrequencyControl(
                E(r, "frequency_control_specs", "old"),
              ),
              o(
                "MAIBAR23WorkspaceAdSpecFormatters",
              ).formatMAIBAR23FrequencyControl(
                E(r, "frequency_control_specs", "new"),
              ),
            ),
          ));
      var y = a.filter(function (e) {
        return !d.has(e);
      });
      for (var C of y) u.push(S(C));
      return { rows: u, unsupportedFieldKeys: y };
    }
    function T(e, t, n) {
      var r,
        a =
          (r = c(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : r.fragments;
      if (!Array.isArray(a)) return { tables: [], unsupportedFieldKeys: "" };
      var i = [],
        l = o("MAIBAPreviewPublishReviewUtils").getReviewTableHeaders(n),
        s = new Set();
      for (var u of a) {
        var d = c(u);
        if (d != null) {
          var m = I(d, t);
          if (m.rows.length !== 0) {
            for (var p of m.unsupportedFieldKeys) s.add(p);
            i.push({
              caption: o(
                "MAIBAPreviewPublishReviewUtils",
              ).formatAdObjectCaption(
                typeof d.object_level == "string" ? d.object_level : "",
                typeof d.name == "string" ? d.name : "",
                typeof d.object_id == "string" ? d.object_id : "",
              ),
              fragmentId:
                typeof d.fragment_id == "string" ? d.fragment_id : void 0,
              headers: l,
              kind: "spec_diff",
              objectId: typeof d.object_id == "string" ? d.object_id : void 0,
              objectLevel:
                typeof d.object_level == "string" ? d.object_level : void 0,
              rows: m.rows,
            });
          }
        }
      }
      return {
        tables: i,
        unsupportedFieldKeys: Array.from(s).sort().join(","),
      };
    }
    function D(e) {
      return e.map(function (e) {
        return {
          caption: e.caption,
          kind: "ab_test_summary",
          rows: e.rows.map(function (e) {
            return { kind: "summary", label: e.label, value: e.value };
          }),
          studyId: e.studyId,
        };
      });
    }
    function x(e, t, n) {
      var r = [].concat(D(n), b(t, n.length > 0));
      return $("preview_publish_deterministic", e, r, "");
    }
    function $(e, t, n, r) {
      r === void 0 && (r = "");
      var o = g(t),
        a = y(n);
      return babelHelpers.extends({}, o, a, {
        formatterID: e,
        formatterVersion: f(e),
        rowCount: h(n),
        tableCount: n.length,
        unsupportedFieldKeys: r,
      });
    }
    function P(e, t, n) {
      return x(e, t, n);
    }
    function N(e, t, n, r) {
      var o = P(e, n, r),
        a = T(e, t, r.length > 0),
        i = $(
          "r23_workspace_formatter",
          e,
          [].concat(D(r), a.tables),
          a.unsupportedFieldKeys,
        ),
        l = o.valuesOmitted || i.valuesOmitted,
        s = l
          ? "inconclusive"
          : o.renderedTables === i.renderedTables
            ? "match"
            : "mismatch";
      return { candidate: i, current: o, status: s };
    }
    function M(e) {
      return {
        bool: {
          candidate_values_omitted: e.candidate.valuesOmitted,
          current_values_omitted: e.current.valuesOmitted,
          formatters_match: e.status === "match",
        },
        int: {
          candidate_rendered_tables_byte_length:
            e.candidate.renderedTablesByteLength,
          candidate_row_count: e.candidate.rowCount,
          candidate_table_count: e.candidate.tableCount,
          current_rendered_tables_byte_length:
            e.current.renderedTablesByteLength,
          current_row_count: e.current.rowCount,
          current_table_count: e.current.tableCount,
        },
        string: {
          candidate_field_keys: e.candidate.fieldKeys,
          candidate_formatter_id: e.candidate.formatterID,
          candidate_formatter_version: e.candidate.formatterVersion,
          candidate_fragment_ids: e.candidate.fragmentIds,
          candidate_object_ids: e.candidate.objectIds,
          candidate_rendered_tables: e.candidate.renderedTables,
          candidate_unsupported_field_keys: e.candidate.unsupportedFieldKeys,
          current_field_keys: e.current.fieldKeys,
          current_formatter_id: e.current.formatterID,
          current_formatter_version: e.current.formatterVersion,
          current_fragment_ids: e.current.fragmentIds,
          current_object_ids: e.current.objectIds,
          current_rendered_tables: e.current.renderedTables,
          current_unsupported_field_keys: e.current.unsupportedFieldKeys,
          formatter_comparison_status: e.status,
        },
      };
    }
    ((l.PREVIEW_PUBLISH_DETERMINISTIC_FORMATTER_VERSION = e),
      (l.R23_WORKSPACE_FORMATTER_VERSION = s),
      (l.buildMAIBAAdSpecHumanReadableFormatterComparison = N),
      (l.buildMAIBAAdSpecHumanReadableFormatterQPLAnnotations = M));
  },
  98,
);
