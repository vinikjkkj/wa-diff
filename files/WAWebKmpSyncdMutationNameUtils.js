__d(
  "WAWebKmpSyncdMutationNameUtils",
  ["WALogger", "WASyncdConst", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n = o("WASyncdConst").Actions.cast(t.value);
      return (
        n == null &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "asSyncdAction: unknown KmpSyncdMutationName ",
                "",
              ])),
            t.value,
          ),
        n
      );
    }
    function c(e) {
      var t = o("wa-kmp-syncd-engine-api")
        .KmpSyncdMutationName.fromString(e)
        .getOrElse(function (t) {
          throw (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "asKmpSyncdMutationName: unknown Actions ",
                  "",
                ])),
              e,
            ),
            t
          );
        });
      return t;
    }
    ((l.asSyncdActionName = u), (l.asKmpSyncdMutationName = c));
  },
  98,
);
