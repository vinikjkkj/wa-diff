__d(
  "MAIBATriggerSendSummaryModel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 10,
      l = new Set(["IN_APPEAL", "PENDING"]);
    function s(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function u(e) {
      return typeof e == "boolean" ? e : null;
    }
    function c(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = e.index;
      if (typeof t != "number" || !Number.isInteger(t)) return null;
      var n = u(e.has_template_variables),
        r = u(e.has_trigger),
        o = u(e.mappings_filled),
        a = u(e.recipient_mapped),
        i = u(e.trigger_complete);
      if (n == null || r == null || o == null || a == null || i == null)
        return null;
      var l = s(e.template_name),
        c = s(e.template_status);
      return l == null || c == null
        ? null
        : {
            hasTemplateVariables: n,
            hasTrigger: r,
            index: t,
            mappingsFilled: o,
            recipientMapped: a,
            templateCategory: s(e.template_category),
            templateName: l,
            templateStatus: c,
            triggerComplete: i,
          };
    }
    function d(t) {
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        return null;
      }
      if (n == null || typeof n != "object" || Array.isArray(n)) return null;
      var r = n.steps;
      if (!Array.isArray(r) || r.length === 0) return null;
      var o = [],
        a = new Set();
      for (var i of r.slice(0, e)) {
        var l = c(i);
        if (l == null || a.has(l.index)) return null;
        (a.add(l.index), o.push(l));
      }
      return (
        o.sort(function (e, t) {
          return e.index - t.index;
        }),
        {
          campaignName: s(n.campaign_name),
          crmAppTitle: s(n.crm_app_title),
          steps: o,
        }
      );
    }
    function m(e) {
      var t = e.templateCategory,
        n = e.templateStatus;
      return t != null && t !== "UTILITY"
        ? "choose_utility_template"
        : n === "REJECTED"
          ? "modify_rejected_template"
          : n !== "APPROVED" && !l.has(n)
            ? "replace_template"
            : null;
    }
    function p(e) {
      var t = [],
        n = m(e);
      (n != null && t.push(n),
        e.hasTrigger
          ? e.triggerComplete || t.push("finish_trigger")
          : t.push("set_trigger"),
        e.recipientMapped || t.push("add_phone"),
        e.hasTemplateVariables && !e.mappingsFilled && t.push("map_variables"));
      var r = "needs_attention";
      return (
        t.length === 0 &&
          (r = e.templateStatus === "APPROVED" ? "ready" : "in_review"),
        { fixes: t, status: r }
      );
    }
    ((i.parseTriggerSendSummary = d), (i.getStepReadiness = p));
  },
  66,
);
