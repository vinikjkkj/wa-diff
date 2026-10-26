__d(
  "WAWebShowMessageActionRetryErrorAction",
  [
    "fbt",
    "WALogger",
    "WAWebFbtCommon",
    "WAWebShowMessageActionFallbackErrorAction",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u() {
      (o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Message action rejected by live eligibility",
          ])),
      ),
        r("WAWebShowMessageActionFallbackErrorAction")({
          title: r("WAWebFbtCommon")("Try again"),
          body: s._(/*BTDS*/ "Something went wrong."),
        }));
    }
    l.default = u;
  },
  226,
);
