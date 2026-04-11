__d(
  "WAWebProductCatalogSession",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "accidental_session",
      u = (function () {
        function t(e) {
          ((this.accidental = e || !1), this.initSessionId());
        }
        var n = t.prototype;
        return (
          (n.isAccidental = function () {
            return this.accidental;
          }),
          (n.initSessionId = function () {
            this.sessionId = this.newSessionId();
          }),
          (n.newSessionId = function () {
            return (
              (this.sessionId = Math.floor(2147483648 * Math.random())),
              this.sessionId
            );
          }),
          (n.toString = function () {
            var t = "" + this.sessionId;
            return (
              this.accidental &&
                (o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "sessionId unset, returning random accidental session",
                    ])),
                ),
                (t = s + "_" + t)),
              t
            );
          }),
          t
        );
      })();
    l.ProductCatalogSession = u;
  },
  98,
);
