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
    "WAWebListsGatingUtils",
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
    function _(e, t, n, r) {
      var a = f(e, t, n, r, o("WAWebSearchMatchStrategies").wordBoundaryMatch);
      return a == null
        ? null
        : {
            match: a.match,
            results: a.results.map(function (e) {
              return new (o(
                "WAWebPrefixSearchMatchResult",
              ).WAWebPrefixSearchMatchResult)(e.startIndex, e.length);
            }),
          };
    }
    function f(e, t, n, a, i) {
      var l = o("WAWebFrontendContactGetters").getSearchName(e);
      if (
        o("WAWebListsGatingUtils").isListsEnabled() &&
        !r("isStringNullOrEmpty")(a)
      ) {
        var u,
          d = o("WAWebUsernameTypes").serializeMaybeUsername(
            o("WAWebFrontendContactGetters").getUsername(e),
          );
        return t &&
          !r("isStringNullOrEmpty")(l) &&
          i(l, t) == null &&
          !r("isStringNullOrEmpty")(d) &&
          i(d, t) == null
          ? null
          : (u = e.labels) != null && u.includes(a)
            ? {
                match: a,
                results: t ? [{ startIndex: 0, length: a.length }] : [],
              }
            : null;
      }
      if (!t) return null;
      if (!r("isStringNullOrEmpty")(l)) {
        var p = i(l, t);
        if (p != null) return { match: l, results: p };
      }
      var _ = o("WAWebContactGetters").getUserid(e);
      if (!r("isStringNullOrEmpty")(_) && _.includes(t) && !c(e)) {
        var f = _.indexOf(t);
        return { match: _, results: [{ startIndex: f, length: t.length }] };
      }
      var g = m(e, n);
      if (g != null && n != null) {
        var h = g.indexOf(n);
        return { match: g, results: [{ startIndex: h, length: n.length }] };
      }
      var y = o("WAWebFrontendContactGetters").getSearchVerifiedName(e);
      if (!r("isStringNullOrEmpty")(y)) {
        var C = i(y, t);
        if (C != null) return { match: y, results: C };
      }
      if (e.pushname) {
        var b = i(o("WAWebL10NAccentFold").accentFold(e.pushname), t);
        if (b != null) return { match: e.pushname, results: b };
      }
      var v = e.username;
      if (v != null) {
        var S = o("WAWebUsernameTypes").serializeUsername(v),
          R = o("WAWebL10NAccentFold").accentFold(S),
          L = i(R, t);
        if (
          L != null &&
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
        )
          return { match: S, results: L };
      }
      if (o("WAWebContactGetters").getIsMe(e)) {
        var E = o("WAWebL10NAccentFold").accentFold(
            s._(/*BTDS*/ "Me").toString(),
          ),
          k = i(E, t);
        if (k != null) return { match: E, results: k };
      }
      return null;
    }
    function g(e) {
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
    function h(e, t) {
      var n = t.split(/\s+/).filter(Boolean);
      if (n.length === 0) return null;
      var r = [
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
        a =
          1 -
          o("WAWebContactSearchGatingUtils").getFuzzySearchDistanceThreshold();
      for (var i of r) {
        var l = [];
        for (var s of n) {
          var u = g({ input: i, query: s, similarityThreshold: a });
          if (u == null) break;
          l.push(u);
        }
        if (l.length === n.length) return { match: i, results: l };
      }
      return null;
    }
    function y(e, t, n, r) {
      if (
        t.startsWith("@") &&
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
      ) {
        var a,
          i = d(t);
        return (a = _(e, i, n, r)) != null ? a : _(e, t, n, r);
      }
      return _(e, t, n, r);
    }
    function C(e, t, n, r) {
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
    function b(e, t) {
      if (
        t.startsWith("@") &&
        o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
      ) {
        var n,
          r = d(t);
        return (n = h(e, r)) != null ? n : h(e, t);
      }
      return h(e, t);
    }
    ((l.searchMatchPrefix = y),
      (l.searchMatchExact = C),
      (l.searchMatchFuzzy = b));
  },
  226,
);
