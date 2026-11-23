__d(
  "AdsUniversalComposerSuggestComposer",
  [
    "AdsUniversalComposerAIMode2026H1GatingUtils",
    "AdsUniversalComposerDimensionRegistry",
    "AdsUniversalComposerTemplateRender",
    "AdsUniversalComposerViewSpecPayload",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsUniversalComposerViewSpecPayload").parseCompositionFields(
        e,
      );
      if (
        t == null ||
        !o(
          "AdsUniversalComposerAIMode2026H1GatingUtils",
        ).getIsInUCFilterValueContinuationsOnly()
      )
        return t;
      var n = t.slots.filter(function (e) {
        return (
          e.token ===
            o("AdsUniversalComposerDimensionRegistry").SLOT_FILTER_VALUE ||
          e.token ===
            o("AdsUniversalComposerDimensionRegistry").SLOT_NUMBER_VALUE
        );
      });
      return babelHelpers.extends({}, t, {
        slots: n,
        slotTokens: n.map(function (e) {
          return e.token;
        }),
      });
    }
    function s(t, n, r) {
      r === void 0 &&
        (r = function () {
          return !0;
        });
      var a = [],
        i = [];
      t.forEach(function (t, l) {
        if (t == null) {
          ((a[l] = null), (i[l] = null));
          return;
        }
        if (!r(t)) {
          ((a[l] = {
            action: t.action,
            appliedValues: [],
            isComposed: !1,
            text: t.text,
          }),
            (i[l] = null));
          return;
        }
        var s = e(t.action);
        i[l] = s == null ? void 0 : s.intentKey;
        var u = s == null ? null : s.template;
        if (s == null || u == null) {
          a[l] = {
            action: t.action,
            appliedValues: [],
            isComposed: !1,
            text: t.text,
          };
          return;
        }
        var c = o(
            "AdsUniversalComposerDimensionRegistry",
          ).scanQueryForSlotValues(n, s.slots),
          d = [],
          m = new Map();
        for (var p of s.slots) {
          var _ = c.get(p.token);
          _ != null && (d.push(_), m.set(p.token, _.display));
        }
        var f = o("AdsUniversalComposerTemplateRender").renderTemplate(u, m);
        if (
          f == null ||
          o("AdsUniversalComposerTemplateRender").containsTemplateSyntax(f)
        ) {
          a[l] = {
            action: t.action,
            appliedValues: [],
            isComposed: !1,
            text: t.text,
          };
          return;
        }
        var g = f !== t.text;
        a[l] = { action: t.action, appliedValues: d, isComposed: g, text: f };
      });
      var l = new Map(),
        s = new Map();
      a.forEach(function (e, t) {
        var n,
          r = i[t];
        if (!(e == null || r == null)) {
          var o = s.get(r);
          if (o == null) {
            (l.set(r, t), s.set(r, t));
            return;
          }
          e.isComposed &&
            ((n = a[o]) == null ? void 0 : n.isComposed) !== !0 &&
            s.set(r, t);
        }
      });
      var c = [],
        p = [];
      (a.forEach(function (e, t) {
        var n;
        if (e != null) {
          var r = i[t];
          if (r == null) {
            (c.push(e), p.push(t));
            return;
          }
          if (l.get(r) === t) {
            var o = s.get(r);
            (c.push((n = o != null ? a[o] : null) != null ? n : e),
              p.push(o != null ? o : t));
          }
        }
      }),
        u(c, p));
      var _ = m(c, p, t, n, r);
      return _ !== c ? _ : d(c, p, t, n, r);
    }
    function u(e, t) {
      var n = function (t) {
          var e, n;
          return (
            ((e = t.field) != null ? e : "") +
            ":" +
            ((n = t.operator) != null ? n : "")
          );
        },
        r = new Set();
      for (var a of e)
        for (var i of a.appliedValues)
          if (
            i.token ===
            o("AdsUniversalComposerDimensionRegistry").SLOT_NUMBER_VALUE
          ) {
            var l;
            ((l = i.patch.filters) != null ? l : []).forEach(function (e) {
              return r.add(n(e));
            });
          }
      if (r.size !== 0) {
        var s = function (t) {
            return t.appliedValues.some(function (e) {
              return (
                e.token ===
                o("AdsUniversalComposerDimensionRegistry").SLOT_NUMBER_VALUE
              );
            });
          },
          u = e
            .map(function (e, n) {
              return { entry: e, from: t[n] };
            })
            .filter(function (e) {
              var t,
                a,
                i = e.entry;
              return (
                s(i) ||
                !(
                  (t =
                    (a = o(
                      "AdsUniversalComposerViewSpecPayload",
                    ).parseViewSpecAction(i.action)) == null
                      ? void 0
                      : a.filters) != null
                    ? t
                    : []
                ).some(function (e) {
                  return r.has(n(e));
                })
              );
            }),
          c = [].concat(
            u.filter(function (e) {
              var t = e.entry;
              return s(t);
            }),
            u.filter(function (e) {
              var t = e.entry;
              return !s(t);
            }),
          );
        ((e.length = 0), (t.length = 0));
        for (var d of c) {
          var m = d.entry,
            p = d.from;
          (e.push(m), t.push(p));
        }
      }
    }
    var c = 3;
    function d(t, n, r, a, i) {
      var l = o("AdsUniversalComposerDimensionRegistry").normalizeQueryText(a);
      if (l === "") return t;
      for (var s = 0; s < t.length; s++)
        if (
          o("AdsUniversalComposerDimensionRegistry").normalizeQueryText(
            t[s].text,
          ) === l
        ) {
          var u = r[n[s]];
          if (!(u == null || !i(u))) {
            var d = e(u.action),
              m = d == null ? null : d.template;
            if (!(d == null || m == null)) {
              var p = o(
                  "AdsUniversalComposerDimensionRegistry",
                ).scanQueryForSlotValues(a, d.slots),
                _ = [];
              for (var f of d.slots)
                if (!p.has(f.token))
                  for (var g of o("AdsUniversalComposerDimensionRegistry")
                    .getDimensionValues(f)
                    .slice(0, c)) {
                    var h = new Map(),
                      y = [];
                    for (var C of d.slots) {
                      var b = C.token === f.token ? g : p.get(C.token);
                      b != null && (y.push(b), h.set(C.token, b.display));
                    }
                    var v = o(
                      "AdsUniversalComposerTemplateRender",
                    ).renderTemplate(m, h);
                    v == null ||
                      o(
                        "AdsUniversalComposerTemplateRender",
                      ).containsTemplateSyntax(v) ||
                      _.push({
                        action: u.action,
                        appliedValues: y,
                        isComposed: !0,
                        text: v,
                      });
                  }
              return _.length === 0
                ? t
                : [].concat(t.slice(0, s + 1), _, t.slice(s + 1));
            }
          }
        }
      return t;
    }
    function m(t, n, r, a, i) {
      for (
        var l = o("AdsUniversalComposerDimensionRegistry").detectDisclosure(a),
          s = 0;
        s < t.length;
        s++
      ) {
        var u = r[n[s]];
        if (!(u == null || !i(u))) {
          var c = e(u.action);
          if (c != null) {
            var d = c.template;
            if (d != null) {
              var m = o(
                  "AdsUniversalComposerDimensionRegistry",
                ).scanQueryForSlotValues(a, c.slots),
                _ =
                  l == null
                    ? p(a, u.text, c.slots, m)
                    : c.slots
                        .filter(function (e) {
                          return e.token === l.token;
                        })
                        .map(function (e) {
                          return { partial: l.partial, slot: e };
                        })[0];
              if (_ != null) {
                var f = _.partial,
                  g = _.slot,
                  h = [];
                for (var y of o(
                  "AdsUniversalComposerDimensionRegistry",
                ).getDimensionValues(g, f)) {
                  var C = new Map(),
                    b = [];
                  for (var v of c.slots) {
                    var S = v.token === g.token ? y : m.get(v.token);
                    S != null && (b.push(S), C.set(v.token, S.display));
                  }
                  var R = o(
                    "AdsUniversalComposerTemplateRender",
                  ).renderTemplate(d, C);
                  R == null ||
                    o(
                      "AdsUniversalComposerTemplateRender",
                    ).containsTemplateSyntax(R) ||
                    h.push({
                      action: u.action,
                      appliedValues: b,
                      isComposed: !0,
                      text: R,
                    });
                }
                return h.length === 0
                  ? t
                  : [].concat(t.slice(0, s), h, t.slice(s + 1));
              }
            }
          }
        }
      }
      return t;
    }
    function p(e, t, n, r) {
      var a = o("AdsUniversalComposerDimensionRegistry").normalizeQueryText(e),
        i = o("AdsUniversalComposerDimensionRegistry").normalizeQueryText(t);
      if (a === "" || i === "") return null;
      for (var l of n)
        if (
          !(
            l.token !==
              o("AdsUniversalComposerDimensionRegistry").SLOT_FILTER_VALUE ||
            r.has(l.token)
          )
        ) {
          if (i.startsWith(a)) return { partial: "", slot: l };
          var s = i + " ";
          if (a.startsWith(s)) {
            var u = a.slice(s.length);
            if (
              u !== "" &&
              o("AdsUniversalComposerDimensionRegistry").getDimensionValues(
                l,
                u,
              ).length > 0
            )
              return { partial: u, slot: l };
          }
        }
      return null;
    }
    l.composeSuggestions = s;
  },
  98,
);
