__d(
  "WAWebHttpParseHeaders",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return (e || "")
        .trim()
        .toLowerCase()
        .split("\n")
        .reduce(function (e, t) {
          if (!t.trim()) return e;
          var n = t.indexOf(":"),
            r = t.substr(0, n).trim(),
            o = t
              .substr(n + 1)
              .trim()
              .replace(/;$/, "");
          return (
            e[r]
              ? Array.isArray(e[r])
                ? e[r].push(o)
                : (e[r] += ", " + o)
              : (e[r] = o),
            e
          );
        }, {});
    }
    i.default = e;
  },
  66,
);
