__d(
  "WAWebMultiStepFormPayloadParser",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = "a2ui_form",
      l = "2",
      s = n("$InternalEnum")({ Form: "form", ChoicePicker: "ChoicePicker" }),
      u = n("$InternalEnum")({
        MutuallyExclusive: "mutuallyExclusive",
        MultipleSelection: "multipleSelection",
      }),
      c = 3,
      d = 5;
    function m(e) {
      return e == null ||
        typeof e != "object" ||
        typeof e.id != "string" ||
        typeof e.title != "string"
        ? null
        : { id: e.id, title: e.title };
    }
    function p(e) {
      if (typeof e == "string") return e;
      if (Array.isArray(e)) {
        var t = [];
        for (var n of e) {
          if (typeof n != "string") return null;
          t.push(n);
        }
        return t;
      }
      return null;
    }
    function _(e, t) {
      if (
        t == null ||
        typeof t != "object" ||
        !Array.isArray(t.children) ||
        t.children.length === 0 ||
        t.children.length > c
      )
        return null;
      var n = [];
      for (var r of t.children) {
        if (typeof r != "string") return null;
        n.push(r);
      }
      return { id: e, component: s.Form, children: n };
    }
    function f(e, t) {
      var n;
      if (t == null || typeof t != "object") return null;
      var r = t.label;
      if (typeof r != "string" || typeof t.variant != "string") return null;
      var o = u.cast(t.variant);
      if (
        o == null ||
        !Array.isArray(t.options) ||
        t.options.length === 0 ||
        t.options.length > d
      )
        return null;
      var a = [];
      for (var i of t.options) {
        var l = m(i);
        if (l == null) return null;
        a.push(l);
      }
      var c = {
          id: e,
          component: s.ChoicePicker,
          variant: o,
          label: r,
          options: a,
        },
        _ = (n = t.allow_custom_answer) != null ? n : t.allow_custom;
      typeof _ == "boolean" && (c.allow_custom_answer = _);
      var f = p(t.default_id);
      return (f != null && (c.default_id = f), c);
    }
    function g(t) {
      try {
        var n = JSON.parse(t),
          r = n.payload,
          o = n.version;
        if (o !== l || r == null || typeof r != "object" || r.type !== e)
          return null;
        var a = r.data;
        if (a == null || typeof a != "object") return null;
        var i = a.components,
          u = a.root;
        if (typeof u != "string" || !Array.isArray(i) || i.length === 0)
          return null;
        var c = [],
          d = null,
          m = new Map();
        for (var p of i) {
          if (p == null || typeof p != "object" || typeof p.id != "string")
            return null;
          if (p.component === s.Form) {
            var g = _(p.id, p);
            if (g == null) return null;
            (c.push(g), p.id === u && (d = g.children));
          } else if (p.component === s.ChoicePicker) {
            var h = f(p.id, p);
            if (h == null) return null;
            (c.push(h), m.set(p.id, h));
          } else return null;
        }
        if (d == null) return null;
        var y = [];
        for (var C of d) {
          var b = m.get(C);
          b != null && y.push(b);
        }
        return y.length === 0
          ? null
          : {
              version: o,
              steps: y,
              payload: { type: e, data: { root: u, components: c } },
            };
      } catch (e) {
        return null;
      }
    }
    ((i.A2UI_FORM_PAYLOAD_TYPE = e),
      (i.A2UI_FORM_VERSION = l),
      (i.A2UIComponentType = s),
      (i.A2UIChoicePickerVariant = u),
      (i.parseMultiStepFormPayload = g));
  },
  66,
);
