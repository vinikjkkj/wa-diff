__d(
  "sdk.URI",
  ["QueryString", "URIAbstractBase"],
  function (t, n, r, o, a, i, l) {
    var e = /\.facebook\.com$/,
      s = {
        serialize: function (t) {
          return t ? r("QueryString").encode(t) : "";
        },
        deserialize: function (t) {
          return t ? r("QueryString").decode(t) : {};
        },
      },
      u = (function (t) {
        function n(e) {
          return t.call(this, e, s) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.isFacebookURI = function () {
            return e.test(this.getDomain());
          }),
          (o.valueOf = function () {
            return this.toString();
          }),
          (n.isValidURI = function (t) {
            return r("URIAbstractBase").isValid(t, s);
          }),
          n
        );
      })(r("URIAbstractBase"));
    l.default = u;
  },
  98,
);
