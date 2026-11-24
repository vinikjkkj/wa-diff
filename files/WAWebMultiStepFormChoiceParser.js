__d(
  "WAWebMultiStepFormChoiceParser",
  ["WAWebMultiStepFormTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = s(t, o("WAWebMultiStepFormTypes").MAX_CHOICE_OPTIONS, c);
      return r == null || (n && r.label == null)
        ? null
        : babelHelpers.extends({}, r, { id: e, component: "ChoicePicker" });
    }
    function s(e, t, n) {
      var r,
        a,
        i =
          typeof e.variant == "string"
            ? o("WAWebMultiStepFormTypes").A2UIChoicePickerVariant.cast(
                e.variant,
              )
            : null;
      if (i == null) return null;
      var l = u(e.options, t, n);
      if (l == null) return null;
      var s = { variant: i, options: l },
        c =
          (r = o("WAWebMultiStepFormTypes").nonEmptyString(e.label)) != null
            ? r
            : o("WAWebMultiStepFormTypes").nonEmptyString(e.title);
      c != null && (s.label = c);
      var d = (a = e.allow_custom_answer) != null ? a : e.allow_custom;
      typeof d == "boolean" && (s.allow_custom_answer = d);
      var m = o("WAWebMultiStepFormTypes").parseDefaultId(e.default_id);
      m != null && (s.default_id = m);
      var p = o("WAWebMultiStepFormTypes").nonEmptyString(e.button);
      return (p != null && (s.button = p), s);
    }
    function u(e, t, n) {
      if (!Array.isArray(e) || e.length === 0 || e.length > t) return null;
      var r = [],
        o = new Set();
      for (var a of e) {
        var i = n(a);
        if (i == null || o.has(i.id)) return null;
        (o.add(i.id), r.push(i));
      }
      return r;
    }
    function c(e) {
      if (e == null || typeof e != "object") return null;
      var t = o("WAWebMultiStepFormTypes").nonEmptyString(e.id),
        n = o("WAWebMultiStepFormTypes").nonEmptyString(e.title);
      return t == null ||
        n == null ||
        (e.children != null &&
          !(Array.isArray(e.children) && e.children.length === 0))
        ? null
        : { id: t, title: n };
    }
    ((l.parseChoicePicker = e), (l.parseChoiceFields = s));
  },
  98,
);
