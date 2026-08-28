__d(
  "Href",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return typeof e == "object" && e != null && e.url != null
        ? { type: "legacy", value: e }
        : { type: "modern", value: e };
    }
    i.getTypedHref = e;
  },
  66,
);
