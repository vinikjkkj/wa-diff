__d(
  "WAWebMultiStepFormPayloadParser",
  [
    "WAWebABProps",
    "WAWebMultiStepFormChoiceParser",
    "WAWebMultiStepFormInputFieldsParser",
    "WAWebMultiStepFormPillParser",
    "WAWebMultiStepFormTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      try {
        var t = JSON.parse(e),
          n = t.payload,
          r = t.version;
        if (
          r !== o("WAWebMultiStepFormTypes").A2UI_FORM_VERSION ||
          n == null ||
          typeof n != "object" ||
          n.type !== o("WAWebMultiStepFormTypes").A2UI_FORM_PAYLOAD_TYPE
        )
          return null;
        var a = n.data;
        if (a == null || typeof a != "object") return null;
        var i = a.components,
          l = a.root;
        return typeof l != "string" ? null : u(r, l, i);
      } catch (e) {
        return null;
      }
    }
    function u(e, t, n) {
      if (!Array.isArray(n) || n.length === 0) return null;
      var r = [],
        a = new Map(),
        i = null;
      for (var l of n) {
        var s = d(l);
        if (s == null) return null;
        (r.push(s),
          s.component === "form"
            ? s.id === t && (i = s.children)
            : a.set(s.id, s));
      }
      if (i == null) return null;
      var u = c(i, a);
      return u == null || !p(u)
        ? null
        : {
            version: e,
            steps: u,
            payload: {
              type: o("WAWebMultiStepFormTypes").A2UI_FORM_PAYLOAD_TYPE,
              data: { root: t, components: r },
            },
          };
    }
    function c(e, t) {
      var n = [];
      for (var r of e) {
        var o = t.get(r);
        if (o == null) return null;
        n.push(o);
      }
      return n;
    }
    function d(e) {
      if (e == null || typeof e != "object") return null;
      var t = o("WAWebMultiStepFormTypes").parseAnswerKey(e.id);
      return t == null
        ? null
        : e.component === "form"
          ? m(t, e)
          : e.component === "ChoicePicker"
            ? o("WAWebMultiStepFormChoiceParser").parseChoicePicker(t, e, !0)
            : e.component === "CompositePillWithChoicePicker"
              ? o("WAWebABProps").getABPropConfigValue("im_a2ui_appt_web")
                ? o("WAWebMultiStepFormPillParser").parseCompositePill(t, e)
                : null
              : e.component === "InputFields" &&
                  o("WAWebABProps").getABPropConfigValue("im_a2ui_appt_web")
                ? o("WAWebMultiStepFormInputFieldsParser").parseInputFields(
                    t,
                    e,
                  )
                : null;
    }
    function m(e, t) {
      var n = o("WAWebMultiStepFormTypes").parseStringArray(t.children);
      return n == null ||
        n.length === 0 ||
        n.length > o("WAWebMultiStepFormTypes").MAX_FORM_CHILDREN
        ? null
        : { id: e, component: "form", children: n };
    }
    function p(e) {
      var t = new Map();
      for (var n of e)
        for (var r of _(n)) {
          var o = t.get(r);
          if (o != null && o !== n.id) return !1;
          t.set(r, n.id);
        }
      var a = new Set();
      for (var i of e)
        for (var l of f(i)) {
          if (t.has(l) || a.has(l)) return !1;
          a.add(l);
        }
      return !0;
    }
    function _(e) {
      return e.component === "CompositePillWithChoicePicker"
        ? e.options.flatMap(function (e) {
            return e.children.map(function (e) {
              return e.id;
            });
          })
        : [];
    }
    function f(e) {
      return e.component === "InputFields"
        ? e.fields.map(function (e) {
            return e.id;
          })
        : [e.id];
    }
    ((l.A2UI_FORM_PAYLOAD_TYPE = (e = o(
      "WAWebMultiStepFormTypes",
    )).A2UI_FORM_PAYLOAD_TYPE),
      (l.A2UI_FORM_VERSION = e.A2UI_FORM_VERSION),
      (l.A2UIChoicePickerVariant = e.A2UIChoicePickerVariant),
      (l.A2UIInputFieldType = e.A2UIInputFieldType),
      (l.MAX_INPUT_FIELD_LENGTH = e.MAX_INPUT_FIELD_LENGTH),
      (l.parseMultiStepFormPayload = s));
  },
  98,
);
