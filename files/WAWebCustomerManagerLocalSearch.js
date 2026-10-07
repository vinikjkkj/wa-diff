__d(
  "WAWebCustomerManagerLocalSearch",
  [
    "WAJids",
    "WALogger",
    "WAWebCustomerContactResolver",
    "WAWebCustomerManagerChatJid",
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerDateFormatUtils",
    "WAWebCustomerManagerProfileQueryPlan",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebL10NAccentFold",
    "WAWebLabelCollection",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebPhoneNumberSearch",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      if (!o("WAWebCustomerManagerProfileQueryPlan").isSearchQueryActive(t))
        return !0;
      var r = o("WAWebL10NAccentFold").accentFold(t.trim()),
        a = o("WAWebPhoneNumberSearch").numberSearch(r) || null,
        i = o("WAWebCustomerManagerChatJid").toChatJidOrNull(String(e.chatJid)),
        l =
          i == null
            ? null
            : o("WAWebCustomerContactResolver").resolveCustomerContact(
                o("WAWebWidFactory").createWid(String(i)),
              );
      return (l == null ? void 0 : l.searchMatchExact(r, a)) != null
        ? !0
        : u(e, l, n).some(function (e) {
            return f(e, r, a);
          }) || p(e, r, a);
    }
    function u(e, t, n) {
      var r = [];
      if (
        (_(r, e.email),
        _(r, e.address),
        c(r, e.altPhoneNumbers),
        _(r, n),
        e.acquisitionSource != null)
      ) {
        var a = o(
          "WAWebCustomerProfileAcquisitionSourceNames",
        ).getProfileAcquisitionSourceLabel(e.acquisitionSource);
        a != null && _(r, String(a));
      }
      return (d(r, e.leadStage), m(r, t, String(e.chatJid)), r);
    }
    function c(e, t) {
      if (!(t == null || t === "")) {
        var n;
        try {
          n = JSON.parse(t);
        } catch (n) {
          _(e, t);
          return;
        }
        if (!Array.isArray(n)) {
          _(e, t);
          return;
        }
        for (var r of n) typeof r == "string" && _(e, r);
      }
    }
    function d(e, t) {
      var n = o("WAWebLeadStage").getLeadStageFromNumber(t);
      n != null && _(e, String(o("WAWebLeadStageNames").getLeadStageName(n)));
    }
    function m(e, t, n) {
      var r,
        a = new Set(
          [].concat(
            (r = t == null ? void 0 : t.labels) != null ? r : [],
            o("WAWebCustomerContactResolver").resolveCustomerLabelIds(n),
          ),
        );
      for (var i of a) {
        var l;
        _(
          e,
          (l = o("WAWebLabelCollection").LabelCollection.get(i)) == null
            ? void 0
            : l.name,
        );
      }
    }
    function p(e, t, n) {
      var r;
      if (/^[0-9]{1,7}$/.test(t)) return !1;
      var a = n != null && n.length >= 8 ? n : null,
        i = [].concat(
          g(e.birthday, "birthday"),
          g(e.lastOrder, "dateOnly"),
          g(
            (r = o(
              "WAWebCustomerManagerChatResolver",
            ).resolveCustomerManagerChat(e.chatJid)) == null
              ? void 0
              : r.t,
            "instant",
          ),
        );
      return i.some(function (e) {
        return f(e, t, a);
      })
        ? !0
        : []
            .concat(
              g(e.createdAt, "instant", !1),
              g(e.modifiedAt, "instant", !1),
            )
            .some(function (e) {
              return f(e, t, a);
            });
    }
    function _(e, t) {
      t != null && t !== "" && e.push(t);
    }
    function f(e, t, n) {
      var r = o("WAWebL10NAccentFold").accentFold(e);
      if (r.includes(t)) return !0;
      if (n == null) return !1;
      var a = r.replace(/[^0-9]/g, "");
      return a !== "" && a.includes(n);
    }
    function g(e, t, n) {
      if ((n === void 0 && (n = !0), e == null || e === 0)) return [];
      var r = new Date(e * 1e3);
      if (!Number.isFinite(r.getTime())) return [];
      var a = h(r, t);
      if (!n) return [a];
      var i =
        t === "birthday"
          ? o("WAWebCustomerManagerDateFormatUtils").formatCustomerBirthday(e)
          : t === "dateOnly"
            ? o("WAWebCustomerManagerDateFormatUtils").formatCustomerDateOnly(e)
            : t === "instant"
              ? o("WAWebCustomerManagerDateFormatUtils").formatCustomerDate(e)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
      return [a, i];
    }
    function h(e, t) {
      var n = t !== "instant",
        r = n ? e.getUTCMonth() + 1 : e.getMonth() + 1,
        o = n ? e.getUTCDate() : e.getDate(),
        a = String(r).padStart(2, "0") + "-" + String(o).padStart(2, "0");
      if (t === "birthday") return a;
      var i = n ? e.getUTCFullYear() : e.getFullYear();
      return i + "-" + a;
    }
    function y(t) {
      if (t == null) return null;
      var n = [];
      for (var a of t)
        if (
          r("WAWebWid").isStringLid(a) &&
          (n.push(o("WAWebWidFactory").createUserLidOrThrow(a).user),
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
      return n;
    }
    function C(e, t) {
      var n = new Set();
      for (var r of t)
        for (var a of (i = e.get(r)) != null ? i : []) {
          var i,
            l = a.candidateLid;
          n.add(o("WAJids").toLidUserJid(l));
        }
      return n;
    }
    function b(e) {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          a = n[1];
        for (var i of a) {
          var l = i.candidateLid;
          t.set(o("WAJids").toLidUserJid(l), r);
        }
      }
      return t;
    }
    ((l.matchesCustomerSearchQuery = s),
      (l.toCandidateLids = y),
      (l.getLeadStageContactIds = C),
      (l.getLeadStageByContactId = b));
  },
  98,
);
