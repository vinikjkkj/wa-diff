__d(
  "WAHandleDecisionTreeResult",
  ["WAErrorMessage", "WATagsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, n) {
      var r = o("WATagsLogger").TAGS(["decision tree"]);
      return n
        .then(function (n) {
          return n.success
            ? n.value
            : n.error.type === "unknown-stanza"
              ? (r.ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "unrecognized stanza: ",
                      "",
                    ])),
                  t,
                ),
                "NO_ACK")
              : (n.error.type,
                r.ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] runtime-error ",
                      "",
                    ])),
                  t.tag,
                  n.error.error,
                ),
                "NO_ACK");
        })
        .catch(function (e) {
          return (
            r.ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] unexpected-runtime-error: ",
                  "",
                ])),
              t.tag,
              o("WAErrorMessage").maybeGetMessageFromError(e),
            ),
            "NO_ACK"
          );
        });
    }
    l.handleDecisionTreeResult = c;
  },
  98,
);
