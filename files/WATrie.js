__d(
  "WATrie",
  ["WANullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this._children = {}), (this._indices = []), e && (this._data = e));
      }
      e.fromBackwardsStrings = function (n, r) {
        return n
          .reduce(function (e, t, n) {
            return e.addBackwardsString(t, n);
          }, new e(r))
          ._optimize();
      };
      var t = e.prototype;
      return (
        (t.addBackwardsString = function (n, r) {
          for (var t = n.length - 1, o = this; t >= 0; ) {
            var a = n.charAt(t);
            (o._addIndex(r), (o = o.get(a) || o.set(a, new e())), t--);
          }
          return (o._addIndex(r), this);
        }),
        (e.fromForwardsStrings = function (n, r) {
          return n
            .reduce(function (e, t, n) {
              return e.addForwardsString(t, n);
            }, new e(r))
            ._optimize();
        }),
        (t.addForwardsString = function (n, r) {
          for (var t = 0, o = this; t < n.length; ) {
            var a = n.charAt(t);
            (o._addIndex(r), (o = o.get(a) || o.set(a, new e())), t++);
          }
          return (o._addIndex(r), this);
        }),
        (t.set = function (t, n) {
          return ((this._children[t] = n), n);
        }),
        (t.get = function (t) {
          return this._children[t];
        }),
        (t.getChildren = function () {
          var e = this;
          return Object.keys(this._children).map(function (t) {
            return { prefix: t, node: r("WANullthrows")(e.get(t)) };
          });
        }),
        (t.hasChildren = function () {
          return !s(this._children);
        }),
        (t.search = function (t) {
          var e = this._data;
          if (!e) return [];
          for (var n = this, r = 0; r < t.length && n; r++) {
            var o = t[r];
            n = n.get(o);
          }
          if (!n) return [];
          var a = n.getIndices();
          return a.map(function (t) {
            return e[t];
          });
        }),
        (t._addIndex = function (t) {
          this._indices.push(t);
        }),
        (t.getIndices = function () {
          var e = this._indices,
            t = Object.keys(this._children);
          return t.length === 1 && this._indices.length === 0
            ? this._children[t[0]].getIndices()
            : e;
        }),
        (t._optimize = function () {
          var e = this;
          if (!this.hasChildren()) return this;
          var t = Object.keys(this._children),
            n = this._children[t[0]]._indices;
          return (
            t.forEach(function (t) {
              e._children[t]._optimize();
            }),
            t.length === 1 &&
              this._indices.length === n.length &&
              (this._indices = []),
            this
          );
        }),
        (t.testOnlyGetChildrenProperty = function () {
          return this._children;
        }),
        (t.testOnlyGetIndicesProperty = function () {
          return this._indices;
        }),
        e
      );
    })();
    function s(e) {
      for (var t in e) return !1;
      return !0;
    }
    l.default = e;
  },
  98,
);
