__d(
  "MAIBAGovernedReviewUtils",
  ["MAIBAGovernedActionCardModule"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || !e.includes('"governed_review"')) return null;
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || typeof t != "object") return null;
      var n = t.governed_review;
      if (n == null || typeof n != "object") return null;
      var r = n.action_id;
      if (typeof r != "string" || r === "") return null;
      var o = n.state_revision,
        a = n.title;
      return {
        actionId: r,
        stateRevision: typeof o == "number" ? o : null,
        title: typeof a == "string" ? a : null,
      };
    }
    function s(t) {
      return r("MAIBAGovernedActionCardModule") != null && e(t) != null;
    }
    function u(e) {
      if (e == null || !e.includes('"governed_blocked"')) return !1;
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return !1;
      }
      if (t == null || typeof t != "object") return !1;
      var n = t.governed_blocked;
      return (
        n != null &&
        typeof n == "object" &&
        Array.isArray(n.unmet) &&
        n.unmet.length > 0
      );
    }
    function c(e) {
      return s(e) || u(e);
    }
    function d(e, t) {
      var n;
      return (n = e.key) != null ? n : String(t);
    }
    var m = new Set([
      "REVIEW",
      "PREREQUISITE",
      "CHOICE",
      "RESOLUTION",
      "OUTCOME",
      "SEQUENCE",
    ]);
    function p(e, t) {
      return e === "REVIEW" || (e === "PREREQUISITE" && t !== "none");
    }
    function _(e) {
      var t = e.recipe;
      return t != null && m.has(t) ? t : "REVIEW";
    }
    function f(e) {
      return p(_(e), e.authority);
    }
    function g(e) {
      return e === "PREPARED"
        ? "REVIEW"
        : e === "APPROVED" || e === "EXECUTING"
          ? "RUNNING"
          : e === "COMMITTED"
            ? "SUCCESS"
            : e === "FAILED"
              ? "ERROR"
              : e === "REJECTED_STALE"
                ? "CONFLICT"
                : e === "REJECTED"
                  ? "NOTHING_APPLIED"
                  : e === "EXPIRED"
                    ? "EXPIRED"
                    : null;
    }
    function h(e) {
      return typeof e == "string" ? e : null;
    }
    function y(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.name,
        n = e.type;
      return typeof t == "string" && typeof n == "string"
        ? { name: t, type: n }
        : null;
    }
    function C(e, t) {
      if (!Array.isArray(e)) return null;
      var n = [];
      for (var r of e) {
        var o = t(r);
        if (o == null) return null;
        n.push(o);
      }
      return n;
    }
    function b(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.label,
        n = e.value;
      return typeof n == "string" ? { label: h(t), value: n } : null;
    }
    function v(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.label,
        n = C(e.children, b);
      return typeof t != "string" || n == null
        ? null
        : {
            after: h(e.after),
            before: h(e.before),
            children: n,
            label: t,
            value: h(e.value),
          };
    }
    function S(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.title;
      return typeof t == "string"
        ? {
            key: h(e.key),
            link: R(e.link),
            selected: e.selected === !0,
            status: h(e.status),
            subtitle: h(e.subtitle),
            title: t,
          }
        : null;
    }
    function R(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.label,
        n = e.url;
      return typeof t == "string" &&
        t !== "" &&
        typeof n == "string" &&
        n.startsWith("https://")
        ? { label: t, url: n }
        : null;
    }
    function L(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.key,
        n = e.kind,
        r = e.overflow_after,
        o = C(e.rows, v),
        a = C(e.items, S);
      return typeof t != "string" ||
        typeof n != "string" ||
        typeof r != "number" ||
        o == null ||
        a == null
        ? null
        : {
            items: a,
            key: t,
            kind: n,
            link: R(e.link),
            open_label: h(e.open_label),
            overflow_after: r,
            preview_text: h(e.preview_text),
            rows: o,
            selectable: e.selectable === !0,
            text: h(e.text),
            title: h(e.title),
            tone: h(e.tone),
          };
    }
    function E(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.count,
        n = e.index,
        r = e.label;
      return typeof t == "number" &&
        typeof n == "number" &&
        typeof r == "string" &&
        n >= 0 &&
        n < t
        ? { count: t, index: n, label: r }
        : null;
    }
    function k(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.decision,
        n = e.header,
        r = e.lifecycle,
        o = e.policy,
        a = C(e.blocks, L);
      if (
        a == null ||
        t == null ||
        typeof t != "object" ||
        n == null ||
        typeof n != "object" ||
        r == null ||
        typeof r != "object" ||
        o == null ||
        typeof o != "object"
      )
        return null;
      var i = t.tone,
        l = n.action,
        s = r.phase,
        u = o.tier,
        c = y(n.target);
      if (
        typeof i != "string" ||
        typeof l != "string" ||
        typeof s != "string" ||
        typeof u != "string" ||
        c == null
      )
        return null;
      var d = e.recipe,
        _ = typeof d == "string" && m.has(d) ? d : "REVIEW",
        f = null;
      return _ === "SEQUENCE" &&
        ((f = C(e.steps, k)), f == null || f.length === 0)
        ? null
        : {
            authority: p(_, e.authority) ? "commit" : "none",
            blocks: a,
            decision: {
              chat_more: t.chat_more === !0,
              primary: h(t.primary),
              secondary: t.secondary === !0,
              secondary_label: h(t.secondary_label),
              tone: i,
            },
            header: {
              action: l,
              subject: h(n.subject),
              switcher: E(n.switcher),
              target: c,
            },
            lifecycle: {
              applied_title: h(r.applied_title),
              applying_status: h(r.applying_status),
              applying_title: h(r.applying_title),
              confirmation_text: h(r.confirmation_text),
              confirmation_title: h(r.confirmation_title),
              outcome_unknown: r.outcome_unknown === !0,
              phase: s,
              review_intro: h(r.review_intro),
              success_label: h(r.success_label),
            },
            policy: {
              ack: h(o.ack),
              copy: h(o.copy),
              legal: o.legal === !0,
              tier: u,
            },
            recipe: _,
            steps: f != null ? f : void 0,
          };
    }
    function I(e) {
      if (e == null) return null;
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || typeof t != "object") return null;
      var n = t,
        r = n.action_id,
        o = n.digest,
        a = n.expires_at,
        i = n.state_revision,
        l = n.status,
        s = k(t.card);
      return typeof r != "string" ||
        typeof o != "string" ||
        typeof a != "number" ||
        typeof i != "number" ||
        typeof l != "string" ||
        s == null
        ? null
        : {
            action_id: r,
            card: s,
            digest: o,
            error: h(t.error),
            expires_at: a,
            state_revision: i,
            status: l,
          };
    }
    function T(e) {
      if (e == null) return null;
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || typeof t != "object") return null;
      var n = k(t.card);
      return (n == null ? void 0 : n.recipe) === "PREREQUISITE" ? n : null;
    }
    ((l.parseGovernedReviewHandle = e),
      (l.isGovernedReviewResult = s),
      (l.isGovernedBlockedResult = u),
      (l.isGovernedCardResult = c),
      (l.getMAIBAActionCardItemKey = d),
      (l.getMAIBAActionCardRecipe = _),
      (l.isMAIBAActionCardCommit = f),
      (l.getMAIBAActionCardPhase = g),
      (l.parseActionCardSpec = k),
      (l.parseGovernedActionJSON = I),
      (l.parseGovernedPrerequisiteJSON = T));
  },
  98,
);
