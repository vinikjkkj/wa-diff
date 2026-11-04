__d(
  "WAWebCustomerManagerLocalSearch",
  [
    "WAJids",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebCustomerContactResolver",
    "WAWebCustomerManagerChatJid",
    "WAWebCustomerManagerProfileQueryPlan",
    "WAWebCustomerManagerSearchValueMatcher",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebL10NAccentFold",
    "WAWebLabelCollection",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebPhoneNumberSearch",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return c(t, !1)(e, n);
    }
    function u(e, t) {
      return c(e, !0, t);
    }
    function c(e, t, n) {
      if (!o("WAWebCustomerManagerProfileQueryPlan").isSearchQueryActive(e))
        return o("WAWebBoolFunc").returnTrue;
      n == null || n.prepareForQuery();
      var r = o("WAWebL10NAccentFold").accentFold(e.trim()),
        a = o("WAWebPhoneNumberSearch").numberSearch(r) || null,
        i = o(
          "WAWebCustomerManagerSearchValueMatcher",
        ).createCustomerDateMatcher(r, a, t);
      return function (e, t) {
        return d(e, r, a, t, i, n);
      };
    }
    function d(e, t, n, r, a, i) {
      var l = o("WAWebCustomerManagerChatJid").toChatJidOrNull(
          String(e.chatJid),
        ),
        s =
          l == null
            ? null
            : o("WAWebCustomerContactResolver").resolveCustomerContact(
                o("WAWebWidFactory").createWid(String(l)),
              );
      return (s == null ? void 0 : s.searchMatchExact(t, n)) != null
        ? !0
        : i != null
          ? i.matchesText(e, r, t, n) ||
            i.matchesLabels(e, s, t, n) ||
            i.matchesDates(e, t, n)
          : m(e, s, r, t, n) || a(e);
    }
    function m(e, t, n, r, o) {
      return h(e.email, r, o) ||
        h(e.address, r, o) ||
        h(e.lastOrderDescription, r, o) ||
        h(n, r, o)
        ? !0
        : p(e.altPhoneNumbers, r, o) ||
            _(e.acquisitionSource, r, o) ||
            f(e.leadStage, r, o) ||
            g(t, String(e.chatJid), r, o);
    }
    function p(e, t, n) {
      if (e == null || e === "") return !1;
      var r;
      try {
        r = JSON.parse(e);
      } catch (r) {
        return o("WAWebCustomerManagerSearchValueMatcher").matchesSearchValue(
          e,
          t,
          n,
        );
      }
      return Array.isArray(r)
        ? r.some(function (e) {
            return typeof e == "string" && h(e, t, n);
          })
        : o("WAWebCustomerManagerSearchValueMatcher").matchesSearchValue(
            e,
            t,
            n,
          );
    }
    function _(e, t, n) {
      var r =
        e == null
          ? null
          : o(
              "WAWebCustomerProfileAcquisitionSourceNames",
            ).getProfileAcquisitionSourceLabel(e);
      return r != null && h(String(r), t, n);
    }
    function f(e, t, n) {
      var r = o("WAWebLeadStage").getLeadStageFromNumber(e);
      return (
        r != null &&
        h(String(o("WAWebLeadStageNames").getLeadStageName(r)), t, n)
      );
    }
    function g(e, t, n, r) {
      var a,
        i = new Set(
          [].concat(
            (a = e == null ? void 0 : e.labels) != null ? a : [],
            o("WAWebCustomerContactResolver").resolveCustomerLabelIds(t),
          ),
        );
      for (var l of i) {
        var s;
        if (
          h(
            (s = o("WAWebLabelCollection").LabelCollection.get(l)) == null
              ? void 0
              : s.name,
            n,
            r,
          )
        )
          return !0;
      }
      return !1;
    }
    function h(e, t, n) {
      return (
        e != null &&
        e !== "" &&
        o("WAWebCustomerManagerSearchValueMatcher").matchesSearchValue(e, t, n)
      );
    }
    function y(t) {
      if (t == null) return null;
      var n = [];
      for (var r of t) {
        var a = o("WAJids").validateLidUserJid(r);
        if (
          a != null &&
          (n.push(a),
          n.length ===
            o("WAWebCustomerManagerProfileQueryPlan").MAX_CANDIDATE_LIDS)
        ) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] local search reached the candidate cap of ",
                  " contacts; candidates truncated",
                ])),
              o("WAWebCustomerManagerProfileQueryPlan").MAX_CANDIDATE_LIDS,
            )
            .sendLogs("customer_manager_search_candidates_truncated");
          break;
        }
      }
      return n;
    }
    function C(e, t) {
      var n = new Set();
      for (var r of t)
        for (var o of (a = e.get(r)) != null ? a : []) {
          var a,
            i = o.candidateLid;
          n.add(i);
        }
      return n;
    }
    function b(e) {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          o = n[1];
        for (var a of o) {
          var i = a.candidateLid;
          t.set(i, r);
        }
      }
      return t;
    }
    ((l.matchesCustomerSearchQuery = s),
      (l.createCustomerSearchQueryMatcher = u),
      (l.toCandidateLids = y),
      (l.getLeadStageContactIds = C),
      (l.getLeadStageByContactId = b));
  },
  98,
);
