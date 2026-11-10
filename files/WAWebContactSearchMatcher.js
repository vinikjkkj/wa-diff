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
        u = o("WAWebFrontendContactGetters").getShownOrgMemberName(e);
      if (!r("isStringNullOrEmpty")(a))
        return g({
          contact: e,
          label: a,
          matchFn: i,
          orgMemberName: u,
          term: t,
        });
      if (!t) return null;
      var d = h(u, t, i);
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
      var y = m(e, n);
      if (y != null && n != null) {
        var C = y.indexOf(n);
        return { match: y, results: [{ startIndex: C, length: n.length }] };
      }
      var b = o("WAWebFrontendContactGetters").getSearchVerifiedName(e);
      if (!r("isStringNullOrEmpty")(b)) {
        var v = i(b, t);
        if (v != null) return { match: b, results: v };
      }
      if (e.pushname) {
        var S = i(o("WAWebL10NAccentFold").accentFold(e.pushname), t);
        if (S != null) return { match: e.pushname, results: S };
      }
      var R = e.username;
      if (R != null) {
        var L = o("WAWebUsernameTypes").serializeUsername(R),
          E = o("WAWebL10NAccentFold").accentFold(L),
          k = i(E, t);
        if (
          k != null &&
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
        )
          return { match: L, results: k };
      }
      if (o("WAWebContactGetters").getIsMe(e)) {
        var I = o("WAWebL10NAccentFold").accentFold(
            s._(/*BTDS*/ "Me").toString(),
          ),
          T = i(I, t);
        if (T != null) return { match: I, results: T };
      }
      return null;
    }
    function g(e) {
      var t,
        n = e.contact,
        a = e.label,
        i = e.matchFn,
        l = e.orgMemberName,
        s = e.term,
        u = o("WAWebFrontendContactGetters").getSearchName(n),
        c = o("WAWebUsernameTypes").serializeMaybeUsername(
          o("WAWebFrontendContactGetters").getUsername(n),
        );
      return s &&
        h(l, s, i) == null &&
        ![u, c].some(function (e) {
          return !r("isStringNullOrEmpty")(e) && i(e, s) != null;
        })
        ? null
        : (t = n.labels) != null && t.includes(a)
          ? {
              match: a,
              results: s ? [{ startIndex: 0, length: a.length }] : [],
            }
          : null;
    }
    function h(e, t, n) {
      if (r("isStringNullOrEmpty")(e)) return null;
      var a = n(o("WAWebL10NAccentFold").accentFold(e), t);
      return a == null ? null : { match: e, results: a };
    }
    function y(e) {
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
    function C(e, t) {
      var n = t.split(/\s+/).filter(Boolean);
      if (n.length === 0) return null;
      var r = o("WAWebFrontendContactGetters").getShownOrgMemberName(e),
        a = [
          r == null ? null : o("WAWebL10NAccentFold").accentFold(r),
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
          .filter(Boolean),
        i =
          1 -
          o("WAWebContactSearchGatingUtils").getFuzzySearchDistanceThreshold();
      for (var l of a) {
        var s = [];
        for (var u of n) {
          var c = y({ input: l, query: u, similarityThreshold: i });
          if (c == null) break;
          s.push(c);
        }
        if (s.length === n.length) return { match: l, results: s };
      }
      return null;
    }
    function b(e, t, n, r) {
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
    function v(e, t, n, r) {
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
    function S(e, t) {
      if (
        t.startsWith("@") &&
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
      ) {
        var n,
          r = d(t);
        return (n = C(e, r)) != null ? n : C(e, t);
      }
      return C(e, t);
    }
    ((l.searchMatchPrefix = b),
      (l.searchMatchExact = v),
      (l.searchMatchFuzzy = S));
  },
  226,
);
