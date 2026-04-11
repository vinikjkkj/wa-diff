__d(
  "WAWebNormalizeStack",
  ["WAUpperFirst", "escapeRegex"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      t === void 0 && (t = !1);
      var n = s(e),
        o = n.message,
        a = n.name,
        i = n.stack,
        l = i.indexOf("\n"),
        u = i.slice(0, l),
        c = u.match(new RegExp("(" + r("escapeRegex")(a) + "|Error)(:|$)"));
      if (c != null) {
        if (!t) return i;
        var d = c.index + c[0].length,
          m = o == null ? -1 : i.indexOf(o, d),
          p = o == null || m === -1 ? -1 : m + o.length,
          _ = Math.max(0, l, d, p);
        return i.slice(_).replace(/^\n+/, "");
      }
      if (t) return i;
      var f = i === "" ? "" : "\n" + i;
      return o ? a + ": " + o + f : "" + a + f;
    }
    function s(e) {
      var t =
          typeof e == "object" &&
          typeof (e == null ? void 0 : e.name) == "string"
            ? e.name
            : "Thrown" + r("WAUpperFirst")(typeof e) + "Error",
        n;
      e != null && typeof e.message == "string"
        ? (n = e.message)
        : e === void 0
          ? (n = "")
          : (n = String(e));
      var o;
      if (e != null && typeof e.stack == "string") o = e.stack;
      else {
        var a = new Error();
        ((a.name = t),
          (a.message = n),
          (o = typeof a.stack == "string" ? a.stack : ""));
      }
      var i = typeof e == "object" ? babelHelpers.extends({}, e) : null;
      return babelHelpers.extends({}, i, { name: t, message: n, stack: o });
    }
    ((l.normalizeStack = e), (l.normalizeError = s));
  },
  98,
);
