__d(
  "AdsUniversalComposerSuggestSearchSourceUtils",
  [
    "AdsPEAISearchFilter2026H2GatingUtils",
    "AdsPETypeaheadMAIBAFilterSearchableEntry",
    "AdsUniversalComposerDimensionRegistry",
    "AdsUniversalComposerSuggestComposer",
    "AdsUniversalComposerViewSpecPayload",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "\0",
      s = new WeakMap();
    function u(e, t, n) {
      var r = p(t);
      s.set(e, {
        anchor: r.anchor,
        number: r.number,
        slot: r.slot,
        values: n.map(function (e) {
          return e.token + "=" + e.display.toLowerCase();
        }),
      });
    }
    function c(t) {
      var n = s.get(t);
      return n == null
        ? ""
        : [n.anchor, n.slot, n.number].concat(n.values).join(e);
    }
    var d = null,
      m = null;
    function p(e) {
      var t,
        n,
        r,
        a = m;
      if (d === e && a != null) return a;
      var i = o("AdsUniversalComposerDimensionRegistry").detectDisclosure(e),
        l = {
          anchor: o("AdsUniversalComposerDimensionRegistry").getRetrievalKey(e),
          disclosure: i,
          number:
            (t =
              (n = o("AdsUniversalComposerDimensionRegistry").parseNumberTail(
                e,
              )) == null
                ? void 0
                : n.value) != null
              ? t
              : "",
          slot: (r = i == null ? void 0 : i.token) != null ? r : "",
        };
      return ((d = e), (m = l), l);
    }
    function _(t, n) {
      if (n === "") return !1;
      var r = n.split(e),
        a = r[0],
        i = r[1],
        l = r[2],
        s = babelHelpers.arrayLikeToArray(r).slice(3),
        u = p(t);
      if (a !== u.anchor || i !== u.slot || l !== u.number) return !1;
      var c = u.disclosure;
      if (c == null || c.partial === "") return !0;
      var d = c.token + "=",
        m = s.filter(function (e) {
          return e.startsWith(d);
        });
      if (m.length === 0) return !0;
      var _ = new Set(
        o("AdsUniversalComposerDimensionRegistry")
          .getDimensionValues(c.token, c.partial)
          .map(function (e) {
            return e.display.toLowerCase();
          }),
      );
      return m.some(function (e) {
        return _.has(e.slice(d.length));
      });
    }
    function f(e, t, n, o) {
      return e == null || e === ""
        ? null
        : r("AdsPETypeaheadMAIBAFilterSearchableEntry").createUCSuggestion(
            e,
            n,
            p(o).anchor,
            t,
          );
    }
    var g = 3,
      h = 500;
    function y(e) {
      var t,
        n =
          (t = o("AdsUniversalComposerDimensionRegistry").buildRetrievalAnchor(
            e,
          )) != null
            ? t
            : e;
      return n.trim().length >= g;
    }
    function C(e, t, n, r) {
      return f(e, t, h + n, r);
    }
    function b(e, t) {
      return t
        ? e
        : e.filter(function (e) {
            return (
              e == null ||
              !o(
                "AdsUniversalComposerViewSpecPayload",
              ).isBetaOnlySuggestionAction(e.action)
            );
          });
    }
    function v(e, t) {
      var n = null,
        r = 0;
      for (var o of e) {
        var a = o[0],
          i = o[1];
        a.length > r && t.startsWith(a) && ((n = i), (r = a.length));
      }
      return n;
    }
    function S(e, t) {
      var n = p(t).anchor;
      if (n === "") return !0;
      var r = o("AdsUniversalComposerDimensionRegistry")
          .normalizeQueryText(e)
          .split(" ")
          .filter(Boolean),
        a = n.split(" ").filter(Boolean);
      return a.every(function (e, t) {
        return t === a.length - 1
          ? r.some(function (t) {
              return t.startsWith(e);
            })
          : r.includes(e);
      });
    }
    function R(e, t, n, r) {
      var a;
      (n === void 0 && (n = null), r === void 0 && (r = null));
      var i = e.some(function (e) {
          return (
            e != null &&
            o(
              "AdsUniversalComposerViewSpecPayload",
            ).isEnumFilterSuggestionAction(e.action)
          );
        }),
        l =
          i &&
          o("AdsPEAISearchFilter2026H2GatingUtils").getIsUCMilestone3Enabled(),
        s =
          !i || l
            ? e
            : e.filter(function (e) {
                return (
                  e == null ||
                  !o(
                    "AdsUniversalComposerViewSpecPayload",
                  ).isEnumFilterSuggestionAction(e.action)
                );
              }),
        c =
          n != null
            ? n
            : (a = s.find(function (e) {
                  return e != null;
                })) == null
              ? void 0
              : a.sourceQuery,
        d = function (t) {
          var e;
          return n == null || S((e = t.text) != null ? e : "", n);
        },
        m = s.some(function (e) {
          return e != null && d(e);
        }),
        p = s.map(function (e) {
          var t;
          return e == null || (m && !d(e))
            ? null
            : { action: e.action, text: (t = e.text) != null ? t : "" };
        }),
        _ = p.some(function (e) {
          return (
            e != null &&
            !o(
              "AdsUniversalComposerViewSpecPayload",
            ).isEnumFilterSuggestionAction(e.action)
          );
        }),
        f = r != null ? r : c,
        g = f != null && _,
        h =
          f != null && (g || l)
            ? o("AdsUniversalComposerSuggestComposer").composeSuggestions(
                p,
                f,
                function (e) {
                  return o(
                    "AdsUniversalComposerViewSpecPayload",
                  ).isEnumFilterSuggestionAction(e.action)
                    ? l
                    : g;
                },
              )
            : p.map(function (e) {
                return e == null
                  ? null
                  : {
                      action: e.action,
                      appliedValues: [],
                      isComposed: !1,
                      text: e.text,
                    };
              });
      return h.map(function (e, n) {
        var r,
          a = t(
            e == null ? void 0 : e.text,
            o("AdsUniversalComposerViewSpecPayload").composeViewSpecAction(
              e == null ? void 0 : e.action,
              (r = e == null ? void 0 : e.appliedValues) != null ? r : [],
            ),
            n,
            c != null ? c : "",
          );
        if (a != null && c != null) {
          var i;
          u(a, c, (i = e == null ? void 0 : e.appliedValues) != null ? i : []);
        }
        return a;
      });
    }
    function L(e, t) {
      var n = function (t) {
          return (
            t != null &&
            o(
              "AdsUniversalComposerViewSpecPayload",
            ).isEnumFilterSuggestionAction(t.action)
          );
        },
        r = e.find(n);
      return r == null
        ? R(e, t)
        : [].concat(
            R([r], t, null, r.text),
            R(
              e.filter(function (e) {
                return !n(e);
              }),
              t,
            ),
          );
    }
    ((l.attributeEntryToBatch = u),
      (l.getEntrySourceQuery = c),
      (l.isEntryForCurrentQuery = _),
      (l.packageSuggestion = f),
      (l.isSemanticQueryEligible = y),
      (l.packageSemanticSuggestion = C),
      (l.dropBetaOnlyRows = b),
      (l.findExtendedAnchorRows = v),
      (l.buildTypeaheadEntries = R),
      (l.buildSemanticTypeaheadEntries = L));
  },
  98,
);
