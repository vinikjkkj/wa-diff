__d(
  "WAWebCustomerManagerLocalFilterMembership",
  [
    "WALogger",
    "WAWebCustomerManagerLocalFilterCandidates",
    "WAWebCustomerManagerSearchUtils",
    "WAWebGetCustomerManagerLocalMembershipJob",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r) {
      var o = e.key === t ? e : null,
        a = o == null ? void 0 : o.results.get(r);
      return a != null
        ? a
        : n != null && n.cacheKey === t && n.key === r
          ? n.result
          : o == null
            ? null
            : o.unresolved;
    }
    function u(e) {
      var t = e.activeContactIds,
        n = e.contactIds,
        r = e.effectiveMembership,
        o = e.membershipActive,
        a = e.membershipResult,
        i = e.needsMembership,
        l = e.readinessKnown,
        s = e.request,
        u =
          o &&
          ((n == null ? void 0 : n.length) === 0 ||
            (r == null ? void 0 : r.status) === "ready"),
        c = (r == null ? void 0 : r.status) === "ready" ? r.contactIds : t,
        d = i && a == null && (!l || s != null);
      return { isLoading: d, memberContactIds: c, membershipReady: u };
    }
    function c(t) {
      var n = t.activeCandidateSnapshot,
        a = t.cacheKey,
        i = t.generation,
        l = t.invalidateIdentity,
        s = t.membershipResult,
        u = t.needsMembership,
        c = t.readinessKnown,
        d = t.request,
        m = t.requestKey,
        p = t.setCache,
        _ = t.setState;
      if (!(!u || s != null || (c && d == null))) {
        var f = i.current + 1;
        i.current = f;
        var g = !1,
          h = function (t) {
            if (!(g || i.current !== f)) {
              if (!c && t.status === "ready") {
                p(function (e) {
                  return e.key === a
                    ? babelHelpers.extends({}, e, { isReady: !0 })
                    : e;
                });
                return;
              }
              if (
                t.status === "ready" &&
                d != null &&
                JSON.stringify(
                  o(
                    "WAWebCustomerManagerLocalFilterCandidates",
                  ).currentMembershipRequest(d, n),
                ) !== m
              ) {
                l();
                return;
              }
              ((t.status === "ready" || t.error == null) &&
                p(function (e) {
                  if (e.key !== a) return e;
                  if (t.status === "unresolved")
                    return babelHelpers.extends({}, e, {
                      unresolved: { error: null, status: "unresolved" },
                    });
                  var n = new Map(e.results);
                  return (
                    n.set(m, t),
                    babelHelpers.extends({}, e, { results: n })
                  );
                }),
                _({ cacheKey: a, key: m, result: t }));
            }
          },
          y =
            c && d != null
              ? o(
                  "WAWebGetCustomerManagerLocalMembershipJob",
                ).getCustomerManagerLocalMembershipJob(d)
              : o(
                  "WAWebGetCustomerManagerLocalMembershipJob",
                ).getCustomerManagerLocalMembershipReadinessJob();
        return (
          y.then(h).catch(function (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[CustomerManager] local membership job failed",
                  ])),
              )
              .sendLogs("customer_manager_local_membership_job_failed"),
              h({ status: "unresolved", error: r("getErrorSafe")(t) }));
          }),
          function () {
            g = !0;
          }
        );
      }
    }
    function d(e, t, n, r, o) {
      var a =
        e != null &&
        t != null &&
        n == null &&
        r != null &&
        r.key === o &&
        r.result.status === "ready"
          ? r.result
          : null;
      return a;
    }
    function m(e, t) {
      return !e || t == null
        ? null
        : t === o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID
          ? { kind: "none" }
          : t === o("WAWebCustomerManagerSearchUtils").NO_OTHER_LIST_FILTER_ID
            ? { kind: "no_other" }
            : { kind: "list", labelId: t };
    }
    function p(e, t, n, r, o) {
      var a = e != null ? e : t,
        i = n && r != null && o != null && o.length > 0;
      return { effectiveMembership: a, needsMembership: i };
    }
    ((l.resolveMembershipResult = s),
      (l.membershipDisplayScope = u),
      (l.readMembershipScope = c),
      (l.retainedMembershipScope = d),
      (l.membershipSelection = m),
      (l.membershipReadState = p));
  },
  98,
);
