__d(
  "TrustedTypesLinkTagHTMLPolicy",
  ["TrustedTypes", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        createHTML: function (t) {
          if (t === "<link />") return t;
          throw r("err")(
            "Violating Trusted Type policies. Only works for '<link />' strings.",
          );
        },
      },
      s = r("TrustedTypes").createPolicy("link-tag-html", e),
      u = s;
    l.default = u;
  },
  98,
);
