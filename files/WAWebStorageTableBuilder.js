__d(
  "WAWebStorageTableBuilder",
  ["invariant", "WAWebStorageMutationUtils", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e;
    }
    function u(e) {
      return e;
    }
    var c = (function () {
      function t(e, t, n) {
        ((this.maxVersion = -1),
          (this.versions = new Map()),
          (this.upgraders = new Map()),
          (this.shouldEnablePropFilter = !0),
          (this.shouldUseDbMsgEncKeyForEncryptedCol = !0),
          (this.name = e),
          (this.versionManager = t),
          (this.maxVersionAllowedRollout = n));
      }
      var n = t.prototype;
      return (
        (n.version = function (n, r, a) {
          var t = this.versionManager.claim(
            n,
            this.maxVersionAllowedRollout,
            this.name,
          );
          if (!t) return this;
          (!this.versions.has(n) || s(0, 75719, this.name, +n),
            n > this.maxVersion || s(0, 75720, this.name),
            (this.maxVersion = n));
          var i =
              this.schema(n) || o("WAWebStorageSchema").emptySchema(this.name),
            l = o("WAWebStorageMutationUtils")
              .sortMutations(r)
              .reduce(function (e, t) {
                return (t.validate(e), t.apply(e));
              }, o("WAWebStorageSchema").cloneSchema(i));
          return (
            this.versions.set(n, o("WAWebStorageSchema").freezeSchema(l)),
            this.upgraders.set(n, a),
            this
          );
        }),
        (n.devOnlyDoNotUseInitWithMaxVersion = function (t, n) {
          var e = this.versionManager.getMax() + 1,
            r = e;
          return this.version(r, t, n);
        }),
        (n.delete = function (n) {
          var t = this.versionManager.claim(
            n,
            this.maxVersionAllowedRollout,
            this.name,
          );
          if (!t) return this;
          (!this.versions.has(n) || s(0, 75719, this.name, +n),
            n > this.maxVersion || s(0, 75720, this.name),
            (this.maxVersion = n));
          var r =
              this.schema(n) || o("WAWebStorageSchema").emptySchema(this.name),
            a = babelHelpers.extends({}, r, { deleted: !0 });
          return (
            this.versions.set(n, o("WAWebStorageSchema").freezeSchema(a)),
            this
          );
        }),
        (n.view = function (t) {
          return ((this.rowview = t), this);
        }),
        (n.enablePropFilter = function (t) {
          return ((this.shouldEnablePropFilter = t), this);
        }),
        (n.useDbMsgEncKeyForEncryptedCol = function (t) {
          return ((this.shouldUseDbMsgEncKeyForEncryptedCol = t), this);
        }),
        (n.schema = function (n) {
          var t = this.versions.get(n);
          if (t) return t;
          var r = Array.from(this.versions.keys())
              .map(e)
              .sort(function (e, t) {
                return e - t;
              })
              .filter(function (t) {
                return t < n;
              }),
            a = r.pop();
          if (!a && a !== 0) return null;
          var i = a;
          return (
            this.versions.get(i) ||
            o("WAWebStorageSchema").emptySchema(this.name)
          );
        }),
        (n.tableExists = function () {
          return this.maxVersion !== -1;
        }),
        (n.commit = function () {
          return this;
        }),
        t
      );
    })();
    l.default = c;
  },
  98,
);
