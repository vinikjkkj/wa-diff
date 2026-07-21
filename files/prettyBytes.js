__d(
  "prettyBytes",
  ["prettyInt"],
  function (t, n, r, o, a, i, l) {
    var e = ["", "Ki", "Mi", "Gi", "Ti", "Pi", "Ei", "Zi", "Yi"];
    function s(t, n) {
      var o = { powerOfTwo: !0, unit: "B" },
        a = n != null ? babelHelpers.extends({}, n, o) : o;
      return r("prettyInt")(t, e, null, a);
    }
    l.default = s;
  },
  98,
);
