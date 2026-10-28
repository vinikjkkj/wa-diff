__d(
  "WAWebCustomerManagerLocalFilterCandidates",
  ["WALogger", "WAWebApiContact", "WAWebContactCollection", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      try {
        var r =
            n != null
              ? n
              : t.map(function (e) {
                  var t,
                    n =
                      (t = o("WAWebContactCollection").ContactCollection.get(
                        e,
                      )) == null
                        ? void 0
                        : t.id;
                  return (
                    (n == null || n.toString() !== e) &&
                      (n = o("WAWebWidFactory").createWid(e)),
                    { id: e, wid: o("WAWebWidFactory").asUserWidOrThrow(n) }
                  );
                }),
          a = c(r);
        return a == null ? null : { candidates: a, identities: r };
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] local membership identity is unresolved",
                ])),
            )
            .sendLogs("customer_manager_local_membership_identity_unresolved"),
          null
        );
      }
    }
    function c(e) {
      var t = [];
      try {
        for (var n of e) {
          var r = n.id,
            a = n.wid,
            i = void 0;
          if (a.isLid()) i = o("WAWebApiContact").getPnIfLidIsLatestMapping(a);
          else {
            var l,
              u = o("WAWebApiContact").getCurrentLid(a);
            i =
              u != null &&
              ((l = o("WAWebApiContact").getPnIfLidIsLatestMapping(u)) == null
                ? void 0
                : l.equals(a)) === !0
                ? u
                : null;
          }
          t.push({ aliases: i == null ? [] : [i.toString()], id: r });
        }
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerManager] local membership identity is unresolved",
                ])),
            )
            .sendLogs("customer_manager_local_membership_identity_unresolved"),
          null
        );
      }
      return t;
    }
    function d(e, t, n, r) {
      var o = e != null && e.key === t ? e : null,
        a = r && (e == null ? void 0 : e.identityKey) === n ? e : null;
      return { cachedCandidateSnapshot: o, retainedCandidateSnapshot: a };
    }
    function m(e, t) {
      var n, r;
      return {
        candidates: c(
          (n = t == null || (r = t.prepared) == null ? void 0 : r.identities) !=
            null
            ? n
            : [],
        ),
        selection: e.selection,
      };
    }
    ((l.prepareMembershipCandidates = u),
      (l.membershipCandidates = c),
      (l.candidateSnapshots = d),
      (l.currentMembershipRequest = m));
  },
  98,
);
