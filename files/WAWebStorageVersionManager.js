__d(
  "WAWebStorageVersionManager",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "DuplicateVersionError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "InvalidVersionError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "MissingVersionError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      d = (function () {
        function t() {
          ((this.versions = new Set()), (this.$1 = -1));
        }
        var n = t.prototype;
        return (
          (n.claim = function (n, r, a) {
            if (n < 0)
              throw new u("Versions must by greater than or equal to zero!");
            if (this.versions.has(n))
              throw new s("Version #" + n + " has already been claimed!");
            return r != null && r < n
              ? (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] v",
                      " skipped (",
                      "): > max ",
                      "",
                    ])),
                  n,
                  a,
                  r,
                ),
                !1)
              : (this.versions.add(n),
                (this.$1 = Math.max(this.getMax(), n)),
                !0);
          }),
          (n.version = function (t) {
            if (t < 0)
              throw new u("Versions must by greater than or equal to zero!");
            return t;
          }),
          (n.validate = function () {
            for (var e = 0; e <= this.getMax(); ++e)
              if (!this.versions.has(e))
                throw new c("Schema version #" + e + " is missing!");
          }),
          (n.getMax = function () {
            return this.$1;
          }),
          t
        );
      })();
    l.StorageVersionManager = d;
  },
  98,
);
