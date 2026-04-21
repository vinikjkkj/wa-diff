__d(
  "FbtResult",
  ["FbtReactUtil", "FbtResultBase"],
  function (t, n, r, o, a, i) {
    var e = function (t) {
        return t.content;
      },
      l = (function (t) {
        "use strict";
        function r(r, o) {
          var a;
          return (
            (a = t.call(this, r, o) || this),
            (a.$$typeof = n("FbtReactUtil").REACT_ELEMENT_TYPE),
            (a.key = null),
            (a.ref = null),
            (a.type = e),
            (a.props = { content: r }),
            a
          );
        }
        return (
          babelHelpers.inheritsLoose(r, t),
          (r.get = function (t) {
            return new r(t.contents, t.errorListener);
          }),
          r
        );
      })(n("FbtResultBase"));
    a.exports = l;
  },
  null,
);
