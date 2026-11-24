__d(
  "WAWebMultiStepFormDefaults",
  ["WAWebMultiStepFormAnswers"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = { choices: {}, fields: u(e) };
      for (var n of e) n.component !== "InputFields" && (t = c(d(t, n), n));
      return t;
    }
    function s(e, t, n) {
      var r = o("WAWebMultiStepFormAnswers").selectOption(e, t, n);
      return r === e ? e : c(r, t);
    }
    function u(e) {
      var t = {};
      for (var n of e)
        if (n.component === "InputFields")
          for (var r of n.fields) r.default != null && (t[r.id] = r.default);
      return t;
    }
    function c(e, t) {
      return o("WAWebMultiStepFormAnswers")
        .getRevealedChildren(t, e)
        .reduce(function (e, t) {
          return d(e, t);
        }, e);
    }
    function d(e, t) {
      var n = m(t);
      return n.size > 0
        ? o("WAWebMultiStepFormAnswers").withChoice(e, t.id, {
            selectedIds: n,
            customAnswer: "",
          })
        : e;
    }
    function m(e) {
      var t,
        n = new Set(
          e.options.map(function (e) {
            return e.id;
          }),
        ),
        r = [(t = e.default_id) != null ? t : []].flat().filter(function (e) {
          return n.has(e);
        });
      if (r.length > 0)
        return new Set(
          o("WAWebMultiStepFormAnswers").isSingleSelect(e) ? r.slice(0, 1) : r,
        );
      if (
        e.component === "CompositePillWithChoicePicker" &&
        o("WAWebMultiStepFormAnswers").isSingleSelect(e)
      ) {
        var a = e.options.find(function (e) {
          return e.children.length > 0;
        });
        if (a != null) return new Set([a.id]);
      }
      return new Set();
    }
    ((l.getInitialAnswers = e), (l.selectOptionWithDefaults = s));
  },
  98,
);
