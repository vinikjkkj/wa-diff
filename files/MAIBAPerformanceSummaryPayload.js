__d(
  "MAIBAPerformanceSummaryPayload",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function u(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function c(t) {
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        return [];
      }
      var r = e(n);
      if (
        (r == null ? void 0 : r.type) !== "performance_summary" ||
        !Array.isArray(r.issues) ||
        !Array.isArray(r.assessment_limitations)
      )
        return [];
      var o = [];
      for (var a of r.assessment_limitations) {
        var i,
          l,
          s = e(a),
          c = (i = u(s == null ? void 0 : s.title)) != null ? i : "",
          d = (l = u(s == null ? void 0 : s.description)) != null ? l : "";
        (c !== "" || d !== "") && o.push({ description: d, title: c });
      }
      return o;
    }
    function d(t) {
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        return null;
      }
      var r = e(n);
      if (
        r == null ||
        r.type !== "performance_summary" ||
        !Array.isArray(r.issues)
      )
        return null;
      var o = [];
      for (var a of r.issues) {
        var i,
          l = e(a);
        if (l != null) {
          var c = e(l.metadata),
            d =
              (i = u(c == null ? void 0 : c.level)) != null
                ? i
                : u(c == null ? void 0 : c.entity_level),
            m = u(c == null ? void 0 : c.severity),
            p = u(c == null ? void 0 : c.validator),
            _ = [],
            f = Array.isArray(l.actions) ? l.actions : [];
          for (var g of f) {
            var h = e(g);
            if (h != null) {
              var y = e(h.metadata),
                C = u(y == null ? void 0 : y.action_name),
                b = u(h.elicitation_type),
                v = h.elicitation_request_id,
                S = v != null ? String(v) : null,
                R = h.url;
              if (typeof R == "string" && R !== "") {
                var L =
                  typeof h.label == "string" && h.label !== ""
                    ? h.label
                    : String(s._(/*BTDS*/ ""));
                _.push({
                  actionName: C,
                  elicitationId: S,
                  elicitationType: b,
                  isLink: !0,
                  label: L,
                  payload: { url: R },
                  variant: _.length === 0 ? "primary" : "default",
                });
                continue;
              }
              if (S != null) {
                var E =
                  typeof h.label == "string" && h.label !== ""
                    ? h.label
                    : String(s._(/*BTDS*/ ""));
                _.push({
                  actionName: C,
                  elicitationId: S,
                  elicitationType: b,
                  label: E,
                  payload: { elicitation_id: S, outcome: "APPROVED" },
                  variant: _.length === 0 ? "primary" : "default",
                });
              }
            }
          }
          var k = typeof l.description == "string" ? l.description : "",
            I = typeof l.title == "string" ? l.title : "";
          (_.length === 0 && I === "" && k === "") ||
            o.push({
              actions: _,
              description: k,
              level: d,
              severity: m,
              title: I,
              validator: p,
            });
        }
      }
      return o.length > 0 ? o : null;
    }
    ((l.tryParsePerformanceSummaryAssessmentLimitations = c),
      (l.tryParsePerformanceSummaryIssues = d));
  },
  226,
);
