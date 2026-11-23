__d(
  "MAIBAOrgmanInviteConfirmationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 600;
    function l(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function s(e) {
      if (typeof e != "string") return null;
      try {
        return l(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function u(e) {
      return typeof e == "string" && e.trim() !== "" ? e : null;
    }
    function c(e) {
      return e === "ORG_MANAGEMENT" ||
        e === "PEOPLE_MIGRATION" ||
        e === "IT_ADMIN" ||
        e === "IT_ADMIN_AND_PEOPLE_MIGRATION" ||
        e === "SUPER_ADMIN"
        ? e
        : null;
    }
    function d(e) {
      return e === "SUPER_ADMIN" ? "full control organization admin" : e;
    }
    function m(e) {
      return e === null || typeof e == "string";
    }
    var p = 5;
    function _(e) {
      return typeof e == "string" ? e : null;
    }
    function f(e) {
      if (e !== void 0) {
        var t = l(e),
          n = t == null ? void 0 : t.existing_people;
        if (
          (t == null ? void 0 : t.code) !== "same_name_as_existing_person" ||
          !Array.isArray(n) ||
          n.length === 0 ||
          n.length > p
        )
          return null;
        var r = [];
        for (var o of n) {
          var a = l(o);
          if (
            a == null ||
            !m(a.name) ||
            !m(a.email) ||
            !m(a.portfolio) ||
            !m(a.status)
          )
            return null;
          r.push({
            email: _(a.email),
            name: _(a.name),
            portfolio: _(a.portfolio),
            status: _(a.status),
          });
        }
        return r;
      }
    }
    function g(e) {
      return e === null || (typeof e == "string" && /^[1-9]\d*$/.test(e));
    }
    function h(e, t, n, r) {
      var o, a, i, l;
      return r
        ? (o = (a = u(t)) != null ? a : u(e)) != null
          ? o
          : n
        : (i = (l = u(e)) != null ? l : u(t)) != null
          ? i
          : n;
    }
    function y(e, t, n) {
      if (e == null) return !1;
      if (e.disposition !== "local") return e.local_group_index === null;
      var r = c(t == null ? void 0 : t.role),
        o = t == null ? void 0 : t.company_user_id,
        a = t == null ? void 0 : t.name;
      return r == null ||
        (r !== "ORG_MANAGEMENT" && r !== "PEOPLE_MIGRATION") ||
        e.handoff_kind !== null ||
        (o === null && u(a) == null)
        ? !1
        : (n.has(r) || n.set(r, n.size), e.local_group_index === n.get(r));
    }
    function C(e) {
      var t = e.rows,
        n = e.confirm_invitees,
        r = e.handoff_descriptions;
      if (
        !Array.isArray(t) ||
        !Array.isArray(n) ||
        !Array.isArray(r) ||
        t.length < 1 ||
        t.length > 50 ||
        n.length !== t.length
      )
        return null;
      for (var o = [], a = new Map(), i = 0, s = 0; s < t.length; s++) {
        var p = l(t[s]),
          _ = l(n[s]),
          C = u(_ == null ? void 0 : _.email),
          b = _ == null ? void 0 : _.company_user_id,
          v = _ == null ? void 0 : _.name,
          S = c(_ == null ? void 0 : _.role),
          R = p == null ? void 0 : p.disposition,
          L = p == null ? void 0 : p.reason_code,
          E = p == null ? void 0 : p.local_group_index,
          k = p == null ? void 0 : p.handoff_kind;
        if (
          p == null ||
          C == null ||
          S == null ||
          !g(b) ||
          !m(v) ||
          !m(L) ||
          typeof p.display_name != "string" ||
          p.input_index !== s ||
          p.normalized_email !== C ||
          p.canonical_company_user_id !== b ||
          p.name !== v ||
          p.role !== d(S) ||
          (R !== "local" &&
            R !== "handoff" &&
            R !== "no_action" &&
            R !== "manual_resolution_required" &&
            R !== "rejected") ||
          !y(p, _, a)
        )
          return null;
        if (R === "handoff") {
          var I = l(r[i]);
          if (
            ++i > 1 ||
            b === null ||
            S === "ORG_MANAGEMENT" ||
            S === "PEOPLE_MIGRATION" ||
            k !== "work_accounts_typed_add" ||
            I == null ||
            I.input_index !== s ||
            I.kind !== k ||
            u(I.destination) == null ||
            u(I.message) == null ||
            I.url != null
          )
            return null;
        } else if (k !== null) return null;
        var T = f(p.warning);
        if (T === null || (T !== void 0 && (R !== "local" || b !== null)))
          return null;
        var D = p.pending_role === void 0 ? void 0 : c(p.pending_role);
        if (
          D === null ||
          (D !== void 0 && (D === S || R === "local" || R === "rejected"))
        )
          return null;
        var x = typeof b == "string" ? b : null,
          $ = {};
        (D != null && ($.pendingRole = D),
          T != null && ($.sameNamePeople = T),
          o.push(
            babelHelpers.extends(
              {
                companyUserID: x,
                displayName: h(
                  typeof v == "string" ? v : null,
                  p.display_name,
                  C,
                  x != null,
                ),
                disposition: R,
                email: C,
                handoffKind: k === "work_accounts_typed_add" ? k : null,
                inputIndex: s,
                localGroupIndex: typeof E == "number" ? E : null,
                reasonCode: typeof L == "string" ? L : null,
                role: S,
              },
              $,
            ),
          ));
      }
      return a.size > 0 && r.length === i ? o : null;
    }
    function b(e) {
      var t = [];
      for (var n of e != null ? e : []) {
        var r = s(n.tool_result);
        if (r != null) {
          if (n.tool_name === "orgman_invite_enterprise_user")
            t.push({
              completed: n.is_completed === !0,
              result: r,
              toolCallID: u(n.tool_call_id),
            });
          else if (n.tool_name === "tool_group") {
            var o = r.tool_results;
            if (!Array.isArray(o)) continue;
            for (var a of o) {
              var i = l(a),
                c = s(i == null ? void 0 : i.result);
              (i == null ? void 0 : i.tool_name) ===
                "orgman_invite_enterprise_user" &&
                c != null &&
                t.push({
                  completed: n.is_completed === !0 && i.status === "success",
                  result: c,
                  toolCallID: u(i.tool_call_id),
                });
            }
          }
        }
      }
      return t;
    }
    function v(e) {
      var t,
        n,
        r = e.flatMap(function (e) {
          return b(e.tool_calls)
            .filter(function (e) {
              return (
                e.result.execution_mode === "direct_web" &&
                e.result.confirmation_required === !0
              );
            })
            .map(function (t) {
              return { call: t, message: e };
            });
        });
      if (r.length !== 1) return null;
      var o = r[0],
        a = o.call,
        i = o.message,
        s = a.toolCallID,
        c = u(i.bot_request_id),
        d = u(i.bot_invocation_message_otid),
        m = u(i.external_conversation_id),
        p = u(i.offline_threading_id);
      if (
        !a.completed ||
        s == null ||
        c == null ||
        d == null ||
        m == null ||
        p == null ||
        e.some(function (e) {
          return (
            e.role !== "ASSISTANT" ||
            e.bot_request_id !== c ||
            e.bot_invocation_message_otid !== d ||
            e.external_conversation_id !== m
          );
        })
      )
        return null;
      var _ = a.result,
        f = l(_.preview),
        g = f == null ? null : C(f),
        h = u(f == null ? void 0 : f.enterprise_id),
        y = u(f == null ? void 0 : f.organization_name),
        v = u(f == null ? void 0 : f.plan_digest),
        S = _.token_timestamp,
        R = u(_.confirmation_token),
        L = l(_.direct_web_receipt),
        E = L == null ? void 0 : L.state,
        k = u(
          (t = l(f == null ? void 0 : f.confirmation)) == null
            ? void 0
            : t.confirm_label,
        ),
        I = {};
      if (
        (k != null && (I.confirmLabel = k),
        (f == null ? void 0 : f.plan_schema_version) !==
          "fr4-reduced-plan-v3" ||
          R == null ||
          !R.startsWith("direct_web:fr4-reduced-plan-v3:") ||
          typeof S != "number" ||
          !Number.isInteger(S) ||
          S < 0 ||
          g == null ||
          h == null ||
          !/^[1-9]\d*$/.test(h) ||
          y == null ||
          v == null ||
          (_.direct_web_receipt != null &&
            E !== "started" &&
            E !== "completed" &&
            E !== "cancelled"))
      )
        return null;
      var T = u((n = l(f.confirmation)) == null ? void 0 : n.message);
      return babelHelpers.extends(
        { botInvocationMessageOTID: d, botRequestID: c },
        T != null ? { confirmationMessage: T } : {},
        {
          enterpriseID: h,
          externalConversationID: m,
          isStreamingComplete: e.every(function (e) {
            return e.streaming_state === "OVERALL_DONE";
          }),
          organizationName: y,
          planDigest: v,
          receiptState:
            E === "started" || E === "completed" || E === "cancelled"
              ? E
              : null,
          rows: g,
          sourceMessageOfflineThreadingID: p,
          tokenTimestamp: S,
          toolCallID: s,
        },
        I,
      );
    }
    function S(e) {
      return b(e).some(function (e) {
        return (
          e.completed &&
          e.result.execution_mode === "direct_web" &&
          e.result.confirmation_completed === !0 &&
          e.result.confirmation_required !== !0 &&
          u(e.result.source_message_offline_threading_id) != null
        );
      });
    }
    var R = [
      ["sent", "sent_count"],
      ["handoff", "handoff_count"],
      ["no_action", "no_action_count"],
      ["manual_resolution_required", "manual_resolution_required_count"],
      ["rejected", "rejected_count"],
      ["verification_required", "verification_required_count"],
      ["unknown", "unknown_count"],
      ["not_attempted", "not_attempted_count"],
    ];
    function L(e) {
      for (var t of R) {
        var n = t[0];
        if (e === n) return n;
      }
      return null;
    }
    function E(e, t, n) {
      return (
        e.requested_count === n &&
        R.every(function (n) {
          var r = n[0],
            o = n[1];
          return e[o] === t[r];
        }) &&
        e.has_unknown_outcome === t.unknown > 0 &&
        e.partial_success ===
          (t.sent > 0 &&
            t.verification_required + t.unknown + t.not_attempted > 0)
      );
    }
    function k(e, t, n) {
      var r = b(e).filter(function (e) {
        return (
          e.completed &&
          e.result.execution_mode === "direct_web" &&
          e.result.confirmation_completed === !0 &&
          e.result.confirmation_required !== !0
        );
      });
      if (r.length !== 1 || r[0].toolCallID == null) return null;
      var o = r[0].result,
        a = u(o.source_message_offline_threading_id),
        i = l(o.direct_web_receipt),
        s = l(i == null ? void 0 : i.outcome),
        p = l(o.invitation_result),
        _ = p == null ? void 0 : p.results,
        f = s == null ? void 0 : s.results,
        y = u(p == null ? void 0 : p.enterprise_id),
        C = u(p == null ? void 0 : p.organization_name);
      if (
        a == null ||
        u(t) == null ||
        u(n) == null ||
        a === t ||
        a === n ||
        t === n ||
        (i == null ? void 0 : i.state) !== "completed" ||
        i.bot_message_offline_threading_id !== t ||
        i.user_message_offline_threading_id !== n ||
        typeof i.confirmation_text != "string" ||
        !w(i.confirmation_text) ||
        typeof i.started_at != "number" ||
        !Number.isInteger(i.started_at) ||
        i.started_at < 0 ||
        y == null ||
        !/^[1-9]\d*$/.test(y) ||
        C == null ||
        p == null ||
        s == null ||
        s.enterprise_id !== y ||
        !Array.isArray(_) ||
        !Array.isArray(f) ||
        _.length < 1 ||
        _.length > 50 ||
        f.length !== _.length
      )
        return null;
      for (
        var v = {
            handoff: 0,
            manual_resolution_required: 0,
            no_action: 0,
            not_attempted: 0,
            rejected: 0,
            sent: 0,
            unknown: 0,
            verification_required: 0,
          },
          S = [],
          R = 0;
        R < _.length;
        R++
      ) {
        var k = l(_[R]),
          I = l(f[R]),
          T =
            (I == null ? void 0 : I.role) === "full control organization admin"
              ? "SUPER_ADMIN"
              : c(I == null ? void 0 : I.role),
          D = u(k == null ? void 0 : k.email),
          $ = k == null ? void 0 : k.company_user_id,
          P = k == null ? void 0 : k.name,
          N = k == null ? void 0 : k.reason_code,
          M = L(k == null ? void 0 : k.status);
        if (
          k == null ||
          I == null ||
          T == null ||
          D == null ||
          M == null ||
          !g($) ||
          !m(P) ||
          !m(N) ||
          typeof k.display_name != "string" ||
          k.input_index !== R ||
          I.input_index !== R ||
          I.email !== D ||
          I.company_user_id !== $ ||
          I.status !== M ||
          I.reason_code !== N ||
          I.role !== d(T) ||
          k.role !== d(T) ||
          ($ !== null && P !== null) ||
          (M === "sent" &&
            ((T !== "ORG_MANAGEMENT" && T !== "PEOPLE_MIGRATION") ||
              ($ === null && u(P) == null)))
        )
          return null;
        var A = null;
        if (M === "handoff") {
          var F = l(k.handoff),
            O = u(F == null ? void 0 : F.url);
          if (
            v.handoff !== 0 ||
            $ === null ||
            T === "ORG_MANAGEMENT" ||
            T === "PEOPLE_MIGRATION" ||
            O == null ||
            !/^https:\/\/\S+$/.test(O) ||
            (F == null ? void 0 : F.kind) !== "work_accounts_typed_add" ||
            F.external_confirmation_required !== !0 ||
            F.completion_tracking !== "not_available" ||
            F.operation !== "add_system_admin" ||
            F.external_age_attestation_required !== !0
          )
            return null;
          A = O;
        } else if (k.handoff != null) return null;
        var B = k.pending_role === void 0 ? void 0 : c(k.pending_role);
        if (B === null || (B !== void 0 && (B === T || M === "sent")))
          return null;
        v[M]++;
        var W = typeof $ == "string" ? $ : null;
        S.push(
          babelHelpers.extends(
            {
              companyUserID: W,
              displayName: h(
                typeof P == "string" ? P : null,
                k.display_name,
                D,
                W != null,
              ),
              email: D,
              handoffURL: A,
              inputIndex: R,
            },
            B != null ? { pendingRole: B } : {},
            { reasonCode: typeof N == "string" ? N : null, role: T, status: M },
          ),
        );
      }
      return E(s, v, _.length) && E(p, v, _.length)
        ? {
            counts: v,
            enterpriseID: y,
            organizationAdminsURL: x(p),
            organizationName: C,
            rows: S,
          }
        : null;
    }
    var I = ["Open Organization admins", "View Organization admins"],
      T = /^https:\/\/business\.(?:[a-z0-9-]+\.)*facebook\.com\//i;
    function D(e) {
      return typeof e == "string" && T.test(e);
    }
    function x(e) {
      var t,
        n,
        r = (t = l(e.card)) == null ? void 0 : t.buttons,
        o = Array.isArray(r) ? r : Object.values((n = l(r)) != null ? n : {});
      for (var a of o) {
        var i,
          s = (i = l(a)) == null ? void 0 : i.url;
        if (D(s) && typeof s == "string") return s;
      }
      var u = e.check_url;
      if (D(u) && typeof u == "string") return u;
      var c = e.links;
      if (!Array.isArray(c)) return null;
      for (var d of c) {
        var m = l(d),
          p = m == null ? void 0 : m.url;
        if (
          (m == null ? void 0 : m.type) === "link_button" &&
          typeof m.label == "string" &&
          I.includes(m.label) &&
          D(p) &&
          typeof p == "string"
        )
          return p;
      }
      return null;
    }
    var $ = "[System: A2UI] Confirmed",
      P = "Confirmed",
      N = "Declined",
      M = new Set([
        "ahead",
        "and",
        "confirm",
        "confirmed",
        "go",
        "i",
        "it",
        "ok",
        "okay",
        "please",
        "proceed",
        "send",
        "sure",
        "thank",
        "thanks",
        "that",
        "this",
        "yeah",
        "yep",
        "yes",
        "you",
      ]);
    function w(e) {
      var t = e.trim();
      if (t === P || t === $) return !0;
      var n = t
        .toLowerCase()
        .replace(/\u2019/g, "'")
        .replace(/[.,;:!?\"\'`]+/g, " ")
        .trim()
        .split(/\s+/);
      return (
        n.some(function (e) {
          return e === "confirm" || e === "confirmed";
        }) &&
        n.every(function (e) {
          return M.has(e);
        })
      );
    }
    var A = {
        IT_ADMIN: ["IT settings", "IT admin"],
        IT_ADMIN_AND_PEOPLE_MIGRATION: [
          "People migration and IT settings",
          "IT settings and People migration",
          "IT and People Migration admin",
        ],
        ORG_MANAGEMENT: [
          "Organization management",
          "Organization Management",
          "Organization admin",
        ],
        PEOPLE_MIGRATION: [
          "People migration",
          "People Migration",
          "People Migration admin",
        ],
        SUPER_ADMIN: ["Full control", "Full control organization admin"],
      },
      F = {
        handoff: ["Finish in Admin Center", "Continue in Admin Center"],
        local: ["Will send"],
        manual_resolution_required: ["Can't send in chat", "Needs review"],
        no_action: ["Already invited", "Already pending"],
        rejected: ["Not invited"],
      };
    function O(e, t) {
      var n = new Map();
      for (var r of e.rows) {
        var o,
          a = t(r);
        n.set(a, String(Number((o = n.get(a)) != null ? o : 0) + 1));
      }
      return n;
    }
    function B(e, t, n) {
      var r = new Set();
      for (var o of e) {
        var a = l(o),
          i = a == null ? void 0 : a.label;
        if (
          a == null ||
          typeof i != "string" ||
          r.has(i) ||
          Object.keys(a).some(function (e) {
            return e !== "label" && e !== "value";
          })
        )
          return !1;
        r.add(i);
        var s = n && i === "When" && !t.has(i);
        if (s ? typeof a.value != "string" : a.value !== t.get(i)) return !1;
      }
      return (
        Array.from(r).filter(function (e) {
          return t.has(e);
        }).length === t.size
      );
    }
    function W(e) {
      return e.displayName === e.email
        ? e.email
        : e.displayName + " (" + e.email + ")";
    }
    function q(e) {
      return [W(e), e.displayName];
    }
    function U(e, t) {
      if (t.rows.length !== 1) return !1;
      var n = t.rows[0];
      return A[n.role].some(function (r) {
        var o = r.endsWith("admin") ? r : r + " admin";
        return (
          e ===
          "Review the invitation for " +
            W(n) +
            " as an " +
            o +
            " in " +
            t.organizationName +
            "."
        );
      });
    }
    function V(e, t) {
      var n = e.items,
        r = e.summary;
      if (
        e.type !== "list_card" ||
        e.title !== "Invite admins" ||
        e.description !== t.organizationName ||
        Object.keys(e).some(function (e) {
          return !["description", "items", "summary", "title", "type"].includes(
            e,
          );
        }) ||
        !Array.isArray(n) ||
        (r !== void 0 && !Array.isArray(r)) ||
        n.length !== t.rows.length
      )
        return !1;
      for (
        var o = function () {
            var e = t.rows[i],
              r = l(n[i]);
            if (
              r == null ||
              Object.keys(r).some(function (e) {
                return ![
                  "icon_name",
                  "image_placeholder",
                  "subtitle",
                  "title",
                  "trailing_label",
                ].includes(e);
              }) ||
              !q(e).includes(String(r.title)) ||
              !F[e.disposition].includes(String(r.trailing_label)) ||
              !A[e.role].some(function (e) {
                return (
                  r.subtitle === e ||
                  (typeof r.subtitle == "string" &&
                    r.subtitle.startsWith(e + " \xB7 "))
                );
              })
            )
              return { v: !1 };
          },
          a,
          i = 0;
        i < n.length;
        i++
      )
        if (((a = o()), a)) return a.v;
      var s = O(t, function (e) {
          return F[e.disposition][0];
        }),
        u = O(t, function (e) {
          return e.disposition === "local"
            ? "Ready to send in chat"
            : F[e.disposition][F[e.disposition].length - 1];
        });
      return Array.isArray(r) ? B(r, s, !0) || B(r, u, !1) : !0;
    }
    var H = new Set([
      "button",
      "card",
      "confirmation",
      "info_card",
      "link_button",
      "list_card",
    ]);
    function G(e, t) {
      if (typeof e == "string") t.push(e.toLowerCase());
      else if (Array.isArray(e))
        e.forEach(function (e) {
          return G(e, t);
        });
      else {
        var n = l(e);
        n != null &&
          Object.values(n).forEach(function (e) {
            return G(e, t);
          });
      }
    }
    var z =
      /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDDB0-\uDDDB\uDDE0-\uDDE9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2-\uDFF6]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])/;
    function j(e, t) {
      for (var n = e.indexOf(t); n !== -1; n = e.indexOf(t, n + 1))
        if (!z.test(e.charAt(n - 1)) && !z.test(e.charAt(n + t.length)))
          return !0;
      return !1;
    }
    function K(e, t) {
      var n = [];
      return (
        G(e, n),
        t.rows.some(function (e) {
          var t = e.email.trim().toLowerCase(),
            r = e.displayName.trim().toLowerCase();
          return n.some(function (e) {
            return (t !== "" && e.includes(t)) || (r !== "" && j(e, r));
          });
        })
      );
    }
    function Q(e, t) {
      if (typeof e != "string") return !1;
      var n = e.trim(),
        r = t.rows.filter(function (e) {
          return e.disposition === "local";
        }).length;
      return (
        (t.confirmLabel != null && n === t.confirmLabel.trim()) ||
        n === "Invite admins" ||
        n === "Invite admin" ||
        t.rows.some(function (e) {
          return A[e.role].some(function (e) {
            return n === "Invite " + e + " admin";
          });
        }) ||
        n === "Send invitation" ||
        n === "Send " + r + " invitations"
      );
    }
    function X(e, t) {
      var n = e.type;
      return (
        typeof n == "string" &&
        H.has(n) &&
        ((n === "confirmation" && Q(e.confirm_label, t)) || K(e, t))
      );
    }
    function Y(e, t) {
      var n = l(e);
      if (n == null) return !1;
      if (X(n, t)) return !0;
      if (t.rows.length > 1) return V(n, t);
      var r = t.rows[0],
        o = n == null ? void 0 : n.items;
      if (n.type === "list_card" && n.title === "Review invitation") {
        if (
          !U(n.fallback_text, t) ||
          Object.keys(n).some(function (e) {
            return !["fallback_text", "type", "title", "items"].includes(e);
          }) ||
          !Array.isArray(o) ||
          o.length !== 1
        )
          return !1;
        var a = l(o[0]);
        return (
          a != null &&
          Object.keys(a).every(function (e) {
            return ["title", "subtitle", "trailing_label"].includes(e);
          }) &&
          a.title === r.displayName &&
          a.subtitle === r.email &&
          A[r.role].includes(String(a.trailing_label))
        );
      }
      var i =
        (n == null ? void 0 : n.title) === "Invite admin" ||
        A[r.role].some(function (e) {
          return (n == null ? void 0 : n.title) === "Invite " + e + " admin";
        });
      if (
        (n == null ? void 0 : n.type) !== "info_card" ||
        !i ||
        n.subtitle !== t.organizationName ||
        Object.keys(n).some(function (e) {
          return !["items", "subtitle", "title", "type"].includes(e);
        }) ||
        !Array.isArray(o) ||
        o.length < 2 ||
        o.length > 3
      )
        return !1;
      var s = new Set();
      for (var u of o) {
        var c = l(u),
          d = c == null ? void 0 : c.label;
        if (
          c == null ||
          typeof d != "string" ||
          s.has(d) ||
          Object.keys(c).some(function (e) {
            return e !== "label" && e !== "value";
          })
        )
          return !1;
        if ((s.add(d), d === "Person")) {
          if (!q(r).includes(String(c.value))) return !1;
        } else if (d === "Same name") {
          if (typeof c.value != "string") return !1;
        } else if (d === "Invited role" || d === "Access") {
          if (!A[r.role].includes(String(c.value))) return !1;
        } else if (d === "Action") {
          if (c.value !== "Send invitation") return !1;
        } else return !1;
      }
      return s.has("Person") && (s.has("Access") || s.has("Invited role"));
    }
    function J(e, t, n) {
      n === void 0 && (n = !1);
      var r = e.trim(),
        o = t.rows.length === 1 ? t.rows[0] : null;
      return (
        (o != null &&
          (r === "Reply confirm to invite " + o.displayName + "." ||
            r === "Reply `confirm` to invite " + o.displayName + "." ||
            r === "Reply **confirm** to invite " + o.displayName + ".")) ||
        (n &&
          (r === "Reply confirm to send the eligible admin invitations." ||
            r === "Reply `confirm` to send the eligible admin invitations." ||
            r === "Reply **confirm** to send the eligible admin invitations." ||
            r === "Confirm the invitation above to send it." ||
            r === "You can also reply `confirm`, or tell me what to change." ||
            U(r, t) ||
            Z(r, t)))
      );
    }
    function Z(e, t) {
      var n = t.rows.length === 1 ? t.rows[0] : null;
      return (
        (n == null ? void 0 : n.role) === "ORG_MANAGEMENT" &&
        e ===
          "I've prepared the invitation for " +
            n.displayName +
            " (" +
            n.email +
            ") to join the " +
            t.organizationName +
            " organization as an Organization admin. Please review the details in the invitation card above and click the button to send it."
      );
    }
    function ee(e) {
      var t = l(e);
      if (t == null) return null;
      var n = t.entity_ranges,
        r = t.inline_style_ranges,
        o = t.text,
        a = t.data,
        i = s(a);
      return t.block_type !== "UNSTYLED" ||
        t.depth !== 0 ||
        t.media_alignment != null ||
        t.media_caption != null ||
        (a != null && (i == null || Object.keys(i).length !== 0)) ||
        !Array.isArray(n) ||
        !Array.isArray(r) ||
        typeof o != "string"
        ? null
        : { entities: n, styles: r, text: o };
    }
    function te(e, t) {
      for (var n = new Set(), r = 0; r < e.length; r++) {
        var o = ee(e[r]);
        o != null &&
          o.entities.length === 0 &&
          o.styles.length === 0 &&
          J(o.text, t, ne(e[r - 1], t) || ne(e[r + 1], t)) &&
          n.add(r);
      }
      var a = t.rows.length === 1 ? t.rows[0] : null;
      if ((a == null ? void 0 : a.role) !== "ORG_MANAGEMENT") return n;
      for (
        var i =
            "I've prepared the invitation for " +
            a.displayName +
            " to join " +
            t.organizationName +
            " as an Organization admin.",
          s = 1;
        s < e.length;
        s++
      ) {
        var u = ee(e[s - 1]),
          c = ee(e[s]);
        if (
          !(
            u == null ||
            u.text.trim() !== "" ||
            u.styles.length !== 0 ||
            c == null ||
            c.entities.length !== 0 ||
            c.styles.length !== 0
          )
        ) {
          var d = u.entities.map(function (e) {
            var t = l(e);
            return (t == null ? void 0 : t.entity_type) === "EMBED"
              ? l(t.entity)
              : null;
          });
          if (
            !(
              d.some(function (e) {
                return (
                  (e == null ? void 0 : e.__typename) !== "XFBToolCallObject"
                );
              }) ||
              !d.some(function (e) {
                return (
                  e != null &&
                  e.tool_call_id === t.toolCallID &&
                  e.tool_name === "orgman_invite_enterprise_user"
                );
              })
            )
          ) {
            if (Z(c.text, t)) {
              n.add(s);
              continue;
            }
            var m = ee(e[s + 1]);
            if (
              c.text ===
                "I've prepared the invitation for " +
                  a.displayName +
                  " (" +
                  a.email +
                  ") as an Organization admin in " +
                  t.organizationName +
                  "." &&
              (m == null ? void 0 : m.text) ===
                'Please review the details in the invitation card above and type "confirm" to send it.' &&
              m.entities.length === 0 &&
              m.styles.length === 0
            ) {
              (n.add(s), n.add(s + 1));
              continue;
            }
            if (
              !(
                c.text !== i ||
                m == null ||
                m.text !==
                  "Reply confirm to send the eligible admin invitations." ||
                m.entities.length !== 0
              )
            ) {
              var p = l(m.styles[0]);
              (m.styles.length !== 0 &&
                (m.styles.length !== 1 ||
                  (p == null ? void 0 : p.inline_style) !== "BOLD" ||
                  p.offset !== 6 ||
                  p.length !== 7)) ||
                (n.add(s), n.add(s + 1));
            }
          }
        }
      }
      return n;
    }
    function ne(e, t) {
      var n,
        r,
        o = l(e);
      if (
        (o == null ? void 0 : o.block_type) !== "CODE" ||
        (o.depth != null && o.depth !== 0) ||
        (o.entity_ranges != null &&
          (!Array.isArray(o.entity_ranges) || o.entity_ranges.length !== 0))
      )
        return !1;
      var a =
        (n = (r = s(o.data)) == null ? void 0 : r.lang) != null
          ? n
          : o.language;
      return (a === "a2ui" || a === "json") && Y(s(o.text), t);
    }
    function re(e) {
      var t = e.review;
      return t == null ||
        !e.isActive ||
        !e.isEnabled ||
        !t.isStreamingComplete ||
        e.isWaitingForExplicitConsent ||
        e.currentConversationID !== t.externalConversationID ||
        e.attempt.cancelled === !0
        ? !1
        : ae(e, t, P);
    }
    function oe(e) {
      var t = e.review;
      if (t == null || e.attempt.claimed) return !1;
      ((e.attempt.cancelled = !0), (e.attempt.claimed = !0));
      var n = function (n) {
          try {
            e.onState(n);
          } catch (e) {}
        },
        r = function () {
          ((e.attempt.cancelled = !1),
            (e.attempt.claimed = !1),
            n("cancel_not_saved"));
        };
      n("cancelling");
      try {
        e.execute({
          confirmation_text: N,
          external_conversation_id: t.externalConversationID,
          source_message_offline_threading_id:
            t.sourceMessageOfflineThreadingID,
          tool_call_id: t.toolCallID,
        }).then(function (e) {
          e === "busy" ? r() : n(e != null ? e : "confirmed_elsewhere");
        }, r);
      } catch (e) {
        r();
      }
      return !0;
    }
    function ae(e, t, n) {
      if (e.attempt.claimed) return !0;
      e.attempt.claimed = !0;
      var r = function (n) {
        try {
          e.onState(n);
        } catch (e) {}
      };
      try {
        if (t.receiptState != null)
          return (
            r(
              t.receiptState === "completed"
                ? "recorded"
                : t.receiptState === "cancelled"
                  ? "cancelled"
                  : t.receiptState === "started"
                    ? "unknown"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t.receiptState,
                        );
                      })(),
            ),
            !0
          );
        (r("submitting"),
          e
            .execute({
              confirmation_text: n,
              external_conversation_id: t.externalConversationID,
              source_message_offline_threading_id:
                t.sourceMessageOfflineThreadingID,
              tool_call_id: t.toolCallID,
            })
            .then(
              function (t) {
                (t === "busy" && (e.attempt.claimed = !1),
                  r(t != null ? t : "recorded"));
              },
              function () {
                return r("unknown");
              },
            ));
      } catch (e) {
        r("unknown");
      }
      return !0;
    }
    ((i.ORGMAN_INVITATION_REVIEW_LIFETIME_SECONDS = e),
      (i.ORGMAN_MAX_SAME_NAME_PEOPLE = p),
      (i.resolveOrgmanInvitationReview = v),
      (i.isOrgmanInviteResult = S),
      (i.resolveOrgmanInvitationResult = k),
      (i.isOrgmanInviteConfirmationText = w),
      (i.isDuplicateOrgmanInvitationCard = Y),
      (i.isOrgmanInvitationConfirmationPrompt = J),
      (i.getDuplicateOrgmanInvitationProseBlockIndexes = te),
      (i.isDuplicateOrgmanInvitationCodeBlock = ne),
      (i.confirmOrgmanInvitationFromButton = re),
      (i.cancelOrgmanInvitation = oe));
  },
  66,
);
