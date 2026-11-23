__d(
  "MAIBALeadGenFormURLsPromptUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function l(t) {
      try {
        return e(JSON.parse(t));
      } catch (e) {
        return null;
      }
    }
    function s(e, t) {
      var n = e == null ? void 0 : e[t];
      return typeof n == "string" && n.trim() !== "" ? n : null;
    }
    function u(t) {
      var n = t == null ? void 0 : t.questions;
      if (!Array.isArray(n)) return [];
      var r = [];
      for (var o of n) {
        var a = s(e(o), "label");
        a != null && r.push(a);
      }
      return r;
    }
    function c(e) {
      return e === "page_profile"
        ? "page_profile"
        : e === "page_website"
          ? "page_website"
          : e === "prior_form"
            ? "prior_form"
            : null;
    }
    function d(t) {
      var n,
        r = t == null ? void 0 : t.result,
        o = typeof r == "string" ? l(r) : t;
      return (n = e(o == null ? void 0 : o.preview)) != null ? n : o;
    }
    function m(e) {
      var t;
      if (e == null || e === "") return null;
      var n = d(l(e));
      if (
        n == null ||
        s(n, "form_id") != null ||
        s(n, "blocked_by") != null ||
        s(n, "proposed_form") == null
      )
        return null;
      var r = l((t = s(n, "proposed_form")) != null ? t : ""),
        o = s(n, "thank_you_url"),
        a = o == null ? null : c(s(n, "thank_you_url_source"));
      return {
        formName: s(r, "name"),
        privacyPolicyUrl: s(n, "privacy_policy_url"),
        questions: u(r),
        thankYouSource: a,
        thankYouUrl: o,
      };
    }
    i.parseLeadGenFormURLsPrompt = m;
  },
  66,
);
