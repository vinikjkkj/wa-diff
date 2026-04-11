__d(
  "WAWebGetBusinessNameFromMsg",
  ["WAWebWidToFormattedNameOrNumber"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      return (t = (n = e.templateParams[0]) == null ? void 0 : n.toString()) !=
        null
        ? t
        : r("WAWebWidToFormattedNameOrNumber")(e.id.remote);
    }
    l.default = e;
  },
  98,
);
