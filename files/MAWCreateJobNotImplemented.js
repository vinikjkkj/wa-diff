__d(
  "MAWCreateJobNotImplemented",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return [
        {
          info: function (r, a) {
            return {
              code: function () {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " not implemented for MAW",
                    ])),
                  t,
                );
              },
              requirements: null,
            };
          },
          stepName: "NOT_IMPLEMENTED",
        },
      ];
    }
    l.createNotImplementedJob = s;
  },
  98,
);
