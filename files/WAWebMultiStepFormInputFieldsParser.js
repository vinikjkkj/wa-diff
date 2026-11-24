__d(
  "WAWebMultiStepFormInputFieldsParser",
  ["WAWebMultiStepFormTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r =
          (n = o("WAWebMultiStepFormTypes").nonEmptyString(t.label)) != null
            ? n
            : o("WAWebMultiStepFormTypes").nonEmptyString(t.title),
        a = t.fields;
      if (
        r == null ||
        !Array.isArray(a) ||
        a.length === 0 ||
        a.length > o("WAWebMultiStepFormTypes").MAX_INPUT_FIELDS
      )
        return null;
      var i = [],
        l = new Set();
      for (var u of a) {
        var c = s(u);
        if (c == null || l.has(c.id)) return null;
        (l.add(c.id), i.push(c));
      }
      var d = { id: e, component: "InputFields", label: r, fields: i },
        m = o("WAWebMultiStepFormTypes").nonEmptyString(t.button);
      return (m != null && (d.button = m), d);
    }
    function s(e) {
      if (e == null || typeof e != "object") return null;
      var t = o("WAWebMultiStepFormTypes").parseAnswerKey(e.id),
        n = o("WAWebMultiStepFormTypes").nonEmptyString(e.label),
        r =
          typeof e.type == "string"
            ? o("WAWebMultiStepFormTypes").A2UIInputFieldType.cast(e.type)
            : null;
      if (t == null || n == null || r == null) return null;
      var a = { id: t, label: n, type: r, required: e.required === !0 },
        i = typeof e.default == "string" ? e.default.trim() : "";
      return i.length > o("WAWebMultiStepFormTypes").MAX_INPUT_FIELD_LENGTH
        ? null
        : (i !== "" && (a.default = i), a);
    }
    l.parseInputFields = e;
  },
  98,
);
