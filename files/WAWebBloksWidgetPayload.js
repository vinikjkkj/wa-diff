__d(
  "WAWebBloksWidgetPayload",
  [],
  function (t, n, r, o, a, i) {
    var e = "im_a2ui";
    function l(t) {
      return (t == null ? void 0 : t.type) === e;
    }
    function s(e) {
      var t = c(e, "title");
      if (t == null) return null;
      var n = t.trim();
      return n === "" ? null : n;
    }
    function u(e) {
      return c(e, "type");
    }
    function c(e, t) {
      if (e == null || e === "") return null;
      try {
        var n = JSON.parse(e);
        if (n == null || typeof n != "object" || Array.isArray(n)) return null;
        var r = babelHelpers.extends({}, n),
          o = r[t];
        return typeof o == "string" && o.length > 0 ? o : null;
      } catch (e) {
        return null;
      }
    }
    ((i.isA2UIBloksWidget = l),
      (i.readA2UITitle = s),
      (i.readA2UIComponentType = u));
  },
  66,
);
