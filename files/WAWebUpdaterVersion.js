__d(
  "WAWebUpdaterVersion",
  ["WACustomError", "WAWebBuildConstants"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "InvalidVersion"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      s = (function () {
        function t(t) {
          var n = t.split(".");
          if (n.length !== 3)
            throw new e("Version format does not contain 3 numbers.");
          if (
            ((this.primary = Number.parseInt(n[0], 10)),
            (this.secondary = Number.parseInt(n[1], 10)),
            (this.tertiary = Number.parseInt(n[2], 10)),
            Number.isNaN(this.primary) ||
              Number.isNaN(this.secondary) ||
              Number.isNaN(this.tertiary))
          )
            throw new e("Version contains a non-parseable string.");
        }
        var n = t.prototype;
        return (
          (n.lt = function (n) {
            var e = n;
            return (
              typeof e == "string" && (e = new t(e)),
              this.primary < e.primary ||
                (this.primary === e.primary && this.secondary < e.secondary) ||
                (this.primary === e.primary &&
                  this.secondary === e.secondary &&
                  this.tertiary < e.tertiary)
            );
          }),
          (n.equals = function (n) {
            var e = n;
            return e == null || e === ""
              ? !1
              : (typeof e == "string" && (e = new t(e)),
                this.primary === e.primary &&
                  this.secondary === e.secondary &&
                  this.tertiary === e.tertiary);
          }),
          (n.toString = function () {
            return this.primary + "." + this.secondary + "." + this.tertiary;
          }),
          t
        );
      })();
    function u(e) {
      return e.replace(/\.[di]$/, "");
    }
    var c = u(o("WAWebBuildConstants").VERSION_STR);
    ((l.Version = s),
      (l.sanitizeVersionStr = u),
      (l.SANITIZED_VERSION_STR = c));
  },
  98,
);
