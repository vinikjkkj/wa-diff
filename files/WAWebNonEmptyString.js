__d(
  "WAWebNonEmptyString",
  ["err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e !== "") return e;
    }
    function s(e) {
      if (e === "")
        throw r("err")("Cannot convert empty string to NonEmptyString");
      return e;
    }
    ((l.asMaybeNonEmptyString = e), (l.asNonEmptyString = s));
  },
  98,
);
