__d(
  "WAWebMultiStepFormPillParser",
  ["WAWebMultiStepFormChoiceParser", "WAWebMultiStepFormTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebMultiStepFormChoiceParser").parseChoiceFields(
        t,
        o("WAWebMultiStepFormTypes").MAX_PILL_OPTIONS,
        s,
      );
      if (n == null) return null;
      var r = n.label;
      return r == null ||
        (n.variant !==
          o("WAWebMultiStepFormTypes").A2UIChoicePickerVariant
            .MutuallyExclusive &&
          n.options.some(function (e) {
            return e.children.length > 0;
          }))
        ? null
        : babelHelpers.extends({}, n, {
            label: r,
            id: e,
            component: "CompositePillWithChoicePicker",
          });
    }
    function s(e) {
      if (e == null || typeof e != "object") return null;
      var t = o("WAWebMultiStepFormTypes").nonEmptyString(e.id),
        n = o("WAWebMultiStepFormTypes").nonEmptyString(e.title);
      if (t == null || n == null) return null;
      var r = u(e.children);
      return r == null ? null : { id: t, title: n, children: r };
    }
    function u(e) {
      if (e == null) return [];
      if (
        !Array.isArray(e) ||
        e.length > o("WAWebMultiStepFormTypes").MAX_OPTION_CHILDREN
      )
        return null;
      var t = [];
      for (var n of e) {
        var r = c(n);
        if (r == null) return null;
        t.push(r);
      }
      var a =
        new Set(
          t.map(function (e) {
            var t = e.id;
            return t;
          }),
        ).size !== t.length;
      return a ? null : t;
    }
    function c(e) {
      if (e == null || typeof e != "object" || e.component !== "ChoicePicker")
        return null;
      var t = o("WAWebMultiStepFormTypes").parseAnswerKey(e.id);
      return t != null
        ? o("WAWebMultiStepFormChoiceParser").parseChoicePicker(t, e, !1)
        : null;
    }
    l.parseCompositePill = e;
  },
  98,
);
