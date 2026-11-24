__d(
  "WAWebMultiStepFormTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = "a2ui_form",
      l = "2",
      s = n("$InternalEnum")({
        MutuallyExclusive: "mutuallyExclusive",
        MultipleSelection: "multipleSelection",
      }),
      u = n("$InternalEnum")({ Text: "text" }),
      c = 3,
      d = 100,
      m = 14,
      p = 3,
      _ = 5,
      f = 128;
    function g(e) {
      return typeof e == "string" ? e : h(e);
    }
    function h(e) {
      if (!Array.isArray(e)) return null;
      var t = [];
      for (var n of e) {
        if (typeof n != "string" || n === "") return null;
        t.push(n);
      }
      return t;
    }
    function y(e) {
      var t = C(e);
      return t === "__proto__" ? null : t;
    }
    function C(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    ((i.A2UI_FORM_PAYLOAD_TYPE = e),
      (i.A2UI_FORM_VERSION = l),
      (i.A2UIChoicePickerVariant = s),
      (i.A2UIInputFieldType = u),
      (i.MAX_FORM_CHILDREN = c),
      (i.MAX_CHOICE_OPTIONS = d),
      (i.MAX_PILL_OPTIONS = m),
      (i.MAX_OPTION_CHILDREN = p),
      (i.MAX_INPUT_FIELDS = _),
      (i.MAX_INPUT_FIELD_LENGTH = f),
      (i.parseDefaultId = g),
      (i.parseStringArray = h),
      (i.parseAnswerKey = y),
      (i.nonEmptyString = C));
  },
  66,
);
