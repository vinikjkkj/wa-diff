__d(
  "WAWebMultiStepFormAnswers",
  ["WAWebMultiStepFormTypes"],
  function (t, n, r, o, a, i, l) {
    var e = { selectedIds: new Set(), customAnswer: "" };
    function s(t, n) {
      return b(t.choices, n) ? t.choices[n] : e;
    }
    function u(e, t) {
      return b(e.fields, t) ? e.fields[t] : "";
    }
    function c(e) {
      return (
        e.variant ===
        o("WAWebMultiStepFormTypes").A2UIChoicePickerVariant.MutuallyExclusive
      );
    }
    function d(e, t) {
      var n, r;
      if (e.component !== "CompositePillWithChoicePicker") return [];
      var o = g(s(t, e.id));
      return (n =
        (r = e.options.find(function (e) {
          return e.id === o;
        })) == null
          ? void 0
          : r.children) != null
        ? n
        : [];
    }
    function m(e, t, n) {
      var r = s(e, t.id);
      if (!c(t)) {
        var o = new Set(r.selectedIds);
        return (
          o.has(n) ? o.delete(n) : o.add(n),
          C(e, t.id, babelHelpers.extends({}, r, { selectedIds: o }))
        );
      }
      return g(r) === n
        ? e
        : C(y(e, t), t.id, { selectedIds: new Set([n]), customAnswer: "" });
    }
    function p(e, t, n) {
      var r = s(e, t.id);
      return c(t)
        ? C(y(e, t), t.id, { selectedIds: new Set(), customAnswer: n })
        : C(e, t.id, babelHelpers.extends({}, r, { customAnswer: n }));
    }
    function _(e, t, n) {
      var r;
      return babelHelpers.extends({}, e, {
        fields: babelHelpers.extends(
          {},
          e.fields,
          ((r = {}),
          (r[t] = n.slice(
            0,
            o("WAWebMultiStepFormTypes").MAX_INPUT_FIELD_LENGTH,
          )),
          r),
        ),
      });
    }
    function f(e, t) {
      return e.component === "InputFields"
        ? e.fields.every(function (e) {
            return !e.required || u(t, e.id).trim() !== "";
          })
        : h(s(t, e.id)) &&
            d(e, t).every(function (e) {
              return h(s(t, e.id));
            });
    }
    function g(e) {
      return e.customAnswer.trim() !== "" ? null : Array.from(e.selectedIds)[0];
    }
    function h(e) {
      return e.selectedIds.size > 0 || e.customAnswer.trim() !== "";
    }
    function y(e, t) {
      if (t.component !== "CompositePillWithChoicePicker") return e;
      var n = babelHelpers.extends({}, e.choices);
      for (var r of t.options) for (var o of r.children) delete n[o.id];
      return babelHelpers.extends({}, e, { choices: n });
    }
    function C(e, t, n) {
      var r;
      return babelHelpers.extends({}, e, {
        choices: babelHelpers.extends({}, e.choices, ((r = {}), (r[t] = n), r)),
      });
    }
    function b(e, t) {
      return Object.hasOwn(e, t);
    }
    ((l.getChoiceAnswer = s),
      (l.getFieldValue = u),
      (l.isSingleSelect = c),
      (l.getRevealedChildren = d),
      (l.selectOption = m),
      (l.changeCustomAnswer = p),
      (l.changeFieldValue = _),
      (l.isStepAnswered = f),
      (l.getSingleSelectedId = g),
      (l.withChoice = C));
  },
  98,
);
