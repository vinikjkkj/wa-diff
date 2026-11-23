__d(
  "MAIBAPreviewPublishNestedValueFormatter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "\u2022 ",
      l = "  ";
    function s(e, t, n) {
      var r = n.split("\n");
      return (
        e +
        r[0] +
        r
          .slice(1)
          .map(function (e) {
            return "\n" + t + e;
          })
          .join("")
      );
    }
    function u(e) {
      return e
        .split("\n")
        .map(function (e) {
          return l + e;
        })
        .join("\n");
    }
    function c(t, n) {
      return t.length === 0
        ? "-"
        : t.length === 1
          ? n(t[0])
          : t
              .map(function (t) {
                return s(e, l, n(t));
              })
              .join("\n");
    }
    function d(e, t) {
      return t.includes("\n") ? e + ":\n" + u(t) : e + ": " + t;
    }
    function m(e, t) {
      return s(String(e + 1) + ".	", "	", t);
    }
    ((i.indentNestedText = u),
      (i.formatNestedList = c),
      (i.formatLabeledNestedValue = d),
      (i.formatNumberedNestedValue = m));
  },
  66,
);
