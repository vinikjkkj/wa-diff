__d(
  "WebBloksScriptTokens",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t) {
        this.lispyOffset = t != null ? t : 0;
      },
      l = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n) || this),
            (r.type = "number"),
            (r.value = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n) || this),
            (r.type = "string"),
            (r.value = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      u = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n) || this),
            (r.type = "boolean"),
            (r.value = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      c = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, n) || this),
            (r.type = "identifier"),
            (r.value = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e);
    ((i.WebBloksNumberToken = l),
      (i.WebBloksStringToken = s),
      (i.WebBloksBooleanToken = u),
      (i.WebBloksIdentifierToken = c));
  },
  66,
);
