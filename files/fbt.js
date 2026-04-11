__d(
  "fbt",
  [
    "invariant",
    "FbtEnv",
    "FbtHooks",
    "FbtQTOverrides",
    "FbtResultBase",
    "FbtTable",
    "FbtTableAccessor",
    "GenderConst",
    "IntlVariationResolver",
    "intlNumUtils",
    "substituteTokens",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    o("FbtEnv").setupOnce();
    var u = Object.prototype.hasOwnProperty,
      c = !1,
      d = { number: 0, gender: 1 },
      m = { object: 0, possessive: 1, reflexive: 2, subject: 3 },
      p = {};
    function _(t, n, a) {
      if (
        (((a == null ? void 0 : a.hk) != null &&
          (a == null ? void 0 : a.hk) !== "") ||
          (a == null ? void 0 : a.ehk) != null) &&
        c
      )
        return { text: t, fbt: !0, hashKey: a.hk };
      var i = (e || (e = r("FbtHooks"))).getTranslatedInput({
          table: t,
          args: n,
          options: a,
        }),
        l = i.args,
        u = i.table,
        d = {};
      if (u.__vcg != null) {
        l = l || [];
        var m = (e || (e = r("FbtHooks"))).getViewerContext(),
          p = m.GENDER,
          _ = r("IntlVariationResolver").getGenderVariations(p);
        l.unshift(o("FbtTableAccessor").getGenderResult(_, null, p));
      }
      var h = [];
      l &&
        (typeof u != "string" && (u = r("FbtTable").access(u, l, 0, h)),
        (d = f(l)),
        u !== null || s(0, 479));
      var y, C;
      if (Array.isArray(u)) {
        ((y = u[0]), (C = u[1]));
        var b = "1_" + C;
        r("FbtQTOverrides").overrides[b] != null &&
          r("FbtQTOverrides").overrides[b] !== "" &&
          ((y = r("FbtQTOverrides").overrides[b]),
          (e || (e = r("FbtHooks"))).onTranslationOverride(C));
        var v = { inputTable: t, tokens: h };
        (e || (e = r("FbtHooks"))).logImpression(C, v);
      } else if (typeof u == "string") y = u;
      else
        throw new Error(
          "Table access did not result in string: " +
            (u === void 0 ? "undefined" : JSON.stringify(u)) +
            ", Type: " +
            typeof u,
        );
      var S = this.cachedResults[y],
        R = g(d);
      if (S && !R) return S;
      var L = r("substituteTokens")(
          y,
          d,
          (e || (e = r("FbtHooks"))).getErrorListener == null
            ? void 0
            : (e || (e = r("FbtHooks"))).getErrorListener({
                translation: y,
                hash: C,
              }),
        ),
        E = this._wrapContent(L, y, C, a == null ? void 0 : a.eo);
      return (R || (this.cachedResults[y] = E), E);
    }
    function f(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          var n = e[r("FbtTable").ARG.SUBSTITUTION];
          if (n)
            for (var o in n)
              u.call(n, o) && (t[o] == null || s(0, 56656, o), (t[o] = n[o]));
        }),
        t
      );
    }
    function g(e) {
      for (var t in e) return !0;
      return !1;
    }
    function h(e, t) {
      return o("FbtTableAccessor").getEnumResult(e);
    }
    function y(e) {
      return o("FbtTableAccessor").getGenderResult(
        r("IntlVariationResolver").getGenderVariations(e),
        null,
        e,
      );
    }
    function C(e, t, n) {
      var a,
        i = ((a = {}), (a[e] = t), a);
      if (n)
        if (n[0] === d.number) {
          var l = n.length > 1 ? n[1] : t;
          typeof l == "number" || s(0, 484);
          var u = r("IntlVariationResolver").getNumberVariations(l);
          return (
            typeof t == "number" &&
              (i[e] = r("intlNumUtils").formatNumberWithThousandDelimiters(t)),
            o("FbtTableAccessor").getNumberResult(u, i, l)
          );
        } else if (n[0] === d.gender) {
          var c = n[1];
          return (
            c != null || s(0, 485),
            o("FbtTableAccessor").getGenderResult(
              r("IntlVariationResolver").getGenderVariations(c),
              i,
              c,
            )
          );
        } else s(0, 486);
      else return o("FbtTableAccessor").getSubstitution(i);
    }
    function b(e, t, n) {
      return this._param(e, t, n);
    }
    function v(e, t, n) {
      var a = r("IntlVariationResolver").getNumberVariations(e),
        i = {};
      return (
        t != null &&
          t !== "" &&
          (typeof n == "number"
            ? (i[t] = r("intlNumUtils").formatNumberWithThousandDelimiters(n))
            : (i[t] =
                n != null
                  ? n
                  : r("intlNumUtils").formatNumberWithThousandDelimiters(e))),
        o("FbtTableAccessor").getNumberResult(a, i, e)
      );
    }
    function S(e, t, n) {
      t !== r("GenderConst").NOT_A_PERSON || !n || !n.human || s(0, 11835);
      var a = R(e, t);
      return o("FbtTableAccessor").getPronounResult(a);
    }
    function R(e, t) {
      switch (t) {
        case r("GenderConst").NOT_A_PERSON:
          return e === m.object || e === m.reflexive
            ? r("GenderConst").NOT_A_PERSON
            : r("GenderConst").UNKNOWN_PLURAL;
        case r("GenderConst").FEMALE_SINGULAR:
        case r("GenderConst").FEMALE_SINGULAR_GUESS:
          return r("GenderConst").FEMALE_SINGULAR;
        case r("GenderConst").MALE_SINGULAR:
        case r("GenderConst").MALE_SINGULAR_GUESS:
          return r("GenderConst").MALE_SINGULAR;
        case r("GenderConst").MIXED_UNKNOWN:
        case r("GenderConst").FEMALE_PLURAL:
        case r("GenderConst").MALE_PLURAL:
        case r("GenderConst").NEUTER_PLURAL:
        case r("GenderConst").UNKNOWN_PLURAL:
          return r("GenderConst").UNKNOWN_PLURAL;
        case r("GenderConst").NEUTER_SINGULAR:
        case r("GenderConst").UNKNOWN_SINGULAR:
          return e === m.reflexive
            ? r("GenderConst").NOT_A_PERSON
            : r("GenderConst").UNKNOWN_PLURAL;
      }
      return r("GenderConst").NOT_A_PERSON;
    }
    function L(e, t, n) {
      var a = r("IntlVariationResolver").getGenderVariations(n),
        i = {};
      return ((i[e] = t), o("FbtTableAccessor").getGenderResult(a, i, n));
    }
    function E(t, n, o, a) {
      var i = typeof t == "string" ? [t] : t,
        l = (e || (e = r("FbtHooks"))).getErrorListener({
          translation: n,
          hash: o,
        }),
        s = e.getFbtResult({
          contents: i,
          errorListener: l,
          extraOptions: a,
          patternHash: o,
          patternString: n,
        });
      return s;
    }
    function k() {
      c = !0;
    }
    function I() {
      c = !1;
    }
    function T(e) {
      return e instanceof r("FbtResultBase");
    }
    var D = function () {};
    ((D._ = _),
      (D._enum = h),
      (D._implicitParam = b),
      (D._name = L),
      (D._param = C),
      (D._plural = v),
      (D._pronoun = S),
      (D._subject = y),
      (D._wrapContent = E),
      (D.disableJsonExportMode = I),
      (D.enableJsonExportMode = k),
      (D.isFbtInstance = T),
      (D.cachedResults = p),
      (D._getCachedFbt = void 0));
    var x = D;
    i.exports = x;
  },
  34,
);
