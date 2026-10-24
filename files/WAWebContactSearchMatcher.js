__d(
  "WAWebContactSearchMatcher",
  [
    "fbt",
    "WAMemoizeOne",
    "WAPhoneFindCC",
    "WAWebApiContact",
    "WAWebContactGetters",
    "WAWebContactSearchGatingUtils",
    "WAWebExactSearchMatchResult",
    "WAWebFrontendContactGetters",
    "WAWebFuzzyMatcher",
    "WAWebFuzzySearchMatchResult",
    "WAWebL10NAccentFold",
    "WAWebOrgMemberContactName",
    "WAWebPrefixSearchMatchResult",
    "WAWebSearchMatchStrategies",
    "WAWebTrunkPrefixUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("WAMemoizeOne")(function (e) {
      var t = e.numeric,
        n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (n == null) return null;
      var r = o("WAPhoneFindCC").findCC(n.user);
      return r + o("WAWebTrunkPrefixUtils").trimTrunkPrefix(r, t);
    });
    function u(t, n) {
      if (n.includes(t)) return !0;
      var r = e({ numeric: t });
      return r == null ? !1 : n.includes(r);
    }
    function c(e) {
      var t = o("WAWebUsernameTypes").serializeMaybeUsername(
        o("WAWebFrontendContactGetters").getUsername(e),
      );
      if (r("isStringNullOrEmpty")(t)) return !1;
      var n = o("WAWebFrontendContactGetters").getSearchName(e);
      if (!r("isStringNullOrEmpty")(n)) return !1;
      var a = o("WAWebFrontendContactGetters").getSearchVerifiedName(e);
      return r("isStringNullOrEmpty")(a);
    }
    function d(e) {
      return e.slice(1).replace(/#.*/, "");
    }
    function m(e, t) {
      if (r("isStringNullOrEmpty")(t) || c(e)) return null;
      var n = o("WAWebContactGetters").getUserid(e);
      if (e.id.isLid()) {
        if (n != null) {
          var a = o("WAWebWidFactory").asUserLidOrThrow(
              o("WAWebWidFactory").createUserWidOrThrow(n, "lid"),
            ),
            i = o("WAWebApiContact").getPhoneNumber(a);
          if (i != null) {
            var l = i.toString();
            return u(t, l) ? l : null;
          }
        }
      } else return n != null && u(t, n) ? n : null;
      return null;
    }
    function p(e) {
      var t = e.contact,
        n = e.label,
        r = e.numeric,
        a = e.term,
        i = f(t, a, r, n, o("WAWebSearchMatchStrategies").substringMatch);
      return i == null
        ? null
        : {
            match: i.match,
            results: i.results.map(function (e) {
              return new (o(
                "WAWebExactSearchMatchResult",
              ).WAWebExactSearchMatchResult)(e.startIndex, e.length);
            }),
          };
    }
    function _(e) {
      var t = e.contact,
        n = e.label,
        r = e.numeric,
        a = e.term,
        i = f(t, a, r, n, o("WAWebSearchMatchStrategies").wordBoundaryMatch);
      return i == null
        ? null
        : {
            match: i.match,
            results: i.results.map(function (e) {
              return new (o(
                "WAWebPrefixSearchMatchResult",
              ).WAWebPrefixSearchMatchResult)(e.startIndex, e.length);
            }),
          };
    }
    function f(e, t, n, a, i) {
      var l = o("WAWebFrontendContactGetters").getSearchName(e),
        u = y(e);
      if (!r("isStringNullOrEmpty")(a))
        return g({
          contact: e,
          label: a,
          matchFn: i,
          orgMemberNames: u,
          term: t,
        });
      if (!t) return null;
      var d = h(u.shown, t, i);
      if (d != null) return d;
      if (!r("isStringNullOrEmpty")(l)) {
        var p = i(l, t);
        if (p != null) return { match: l, results: p };
      }
      var _ = o("WAWebContactGetters").getUserid(e);
      if (!r("isStringNullOrEmpty")(_) && _.includes(t) && !c(e)) {
        var f = _.indexOf(t);
        return { match: _, results: [{ startIndex: f, length: t.length }] };
      }
      var C = m(e, n);
      if (C != null && n != null) {
        var b = C.indexOf(n);
        return { match: C, results: [{ startIndex: b, length: n.length }] };
      }
      var v = o("WAWebFrontendContactGetters").getSearchVerifiedName(e);
      if (!r("isStringNullOrEmpty")(v)) {
        var S = i(v, t);
        if (S != null) return { match: v, results: S };
      }
      if (e.pushname) {
        var R = i(o("WAWebL10NAccentFold").accentFold(e.pushname), t);
        if (R != null) return { match: e.pushname, results: R };
      }
      var L = e.username;
      if (L != null) {
        var E = o("WAWebUsernameTypes").serializeUsername(L),
          k = o("WAWebL10NAccentFold").accentFold(E),
          I = i(k, t);
        if (
          I != null &&
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
        )
          return { match: E, results: I };
      }
      var T = h(u.hidden, t, i);
      if (T != null) return T;
      if (o("WAWebContactGetters").getIsMe(e)) {
        var D = o("WAWebL10NAccentFold").accentFold(
            s._(/*BTDS*/ "Me").toString(),
          ),
          x = i(D, t);
        if (x != null) return { match: D, results: x };
      }
      return null;
    }
    function g(e) {
      var t,
        n,
        a = e.contact,
        i = e.label,
        l = e.matchFn,
        s = e.orgMemberNames,
        u = e.term,
        c = o("WAWebFrontendContactGetters").getSearchName(a),
        d = o("WAWebUsernameTypes").serializeMaybeUsername(
          o("WAWebFrontendContactGetters").getUsername(a),
        );
      return u &&
        h((t = s.shown) != null ? t : s.hidden, u, l) == null &&
        !r("isStringNullOrEmpty")(c) &&
        l(c, u) == null &&
        !r("isStringNullOrEmpty")(d) &&
        l(d, u) == null
        ? null
        : (n = a.labels) != null && n.includes(i)
          ? {
              match: i,
              results: u ? [{ startIndex: 0, length: i.length }] : [],
            }
          : null;
    }
    function h(e, t, n) {
      if (r("isStringNullOrEmpty")(e)) return null;
      var a = n(o("WAWebL10NAccentFold").accentFold(e), t);
      return a == null ? null : { match: e, results: a };
    }
    function y(e) {
      var t,
        n = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(e);
      if (n != null) return { hidden: null, shown: n };
      var r =
        (t = o("WAWebOrgMemberContactName").getKnownOrgMember(e.id)) == null
          ? void 0
          : t.memberName.trim();
      return { hidden: r === "" ? null : r, shown: null };
    }
    function C(e) {
      var t = e.input,
        n = e.query,
        a = e.similarityThreshold;
      if (a < 0 || a > 1)
        throw r("err")(
          "similarityThreshold must be between 0.0 and 1.0, got: " + a,
        );
      if (n.length === 0) return null;
      var i = o("WAWebFuzzyMatcher").fuzzyMatch({
        costTolerance: o("WAWebFuzzySearchMatchResult").MAX_ALLOWED_COST,
        input: t,
        query: n,
      });
      return i.isMatch() && i.getSimilarityRating() >= a ? i : null;
    }
    function b(e, t) {
      var n = t.split(/\s+/).filter(Boolean);
      if (n.length === 0) return null;
      var r = y(e),
        a = [
          r.shown == null ? null : o("WAWebL10NAccentFold").accentFold(r.shown),
          o("WAWebFrontendContactGetters").getSearchName(e),
          o("WAWebFrontendContactGetters").getSearchVerifiedName(e),
          o("WAWebL10NAccentFold").accentFold(e.pushname),
        ]
          .concat(
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              e.username != null
              ? [
                  o("WAWebL10NAccentFold").accentFold(
                    o("WAWebUsernameTypes").serializeUsername(e.username),
                  ),
                ]
              : [],
          )
          .concat(
            r.hidden == null
              ? []
              : [o("WAWebL10NAccentFold").accentFold(r.hidden)],
          )
          .filter(Boolean),
        i =
          1 -
          o("WAWebContactSearchGatingUtils").getFuzzySearchDistanceThreshold();
      for (var l of a) {
        var s = [];
        for (var u of n) {
          var c = C({ input: l, query: u, similarityThreshold: i });
          if (c == null) break;
          s.push(c);
        }
        if (s.length === n.length) return { match: l, results: s };
      }
      return null;
    }
    function v(e, t, n, r) {
      if (
        t.startsWith("@") &&
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
      ) {
        var a,
          i = d(t);
        return (a = _({ contact: e, label: r, numeric: n, term: i })) != null
          ? a
          : _({ contact: e, label: r, numeric: n, term: t });
      }
      return _({ contact: e, label: r, numeric: n, term: t });
    }
    function S(e, t, n, r) {
      if (
        t.startsWith("@") &&
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
      ) {
        var a,
          i = d(t);
        return (a = p({ contact: e, label: r, numeric: n, term: i })) != null
          ? a
          : p({ contact: e, label: r, numeric: n, term: t });
      }
      return p({ contact: e, label: r, numeric: n, term: t });
    }
    function R(e, t) {
      if (
        t.startsWith("@") &&
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
      ) {
        var n,
          r = d(t);
        return (n = b(e, r)) != null ? n : b(e, t);
      }
      return b(e, t);
    }
    ((l.searchMatchPrefix = v),
      (l.searchMatchExact = S),
      (l.searchMatchFuzzy = R));
  },
  226,
);
