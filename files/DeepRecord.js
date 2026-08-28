__d(
  "DeepRecord",
  ["invariant", "PathArrayIndex", "immutable", "mapObject"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = "DeepRecordKey-" + Math.random();
    function c(t) {
      var n = (e || (e = r("mapObject")))(t, function () {}),
        a = e(t, function (e) {
          return e && new e();
        }),
        i = r("immutable").Record(n),
        l = (function (n) {
          function i(o) {
            var a;
            return (
              (a =
                n.call(
                  this,
                  (e || (e = r("mapObject")))(o, function (e, n) {
                    return e && t[n] ? new t[n](e) : r("immutable").fromJS(e);
                  }),
                ) || this),
              (a.__toJSCache = null),
              a
            );
          }
          (babelHelpers.inheritsLoose(i, n),
            (i.getSpec = function () {
              return t;
            }));
          var l = i.prototype;
          return (
            (l.getSpec = function () {
              return t;
            }),
            (l.getSubRecordClass = function (n) {
              if (n.length === 0) return null;
              if (n.length === 1) return t[n[0]] || null;
              var e = a[n[0]] || null;
              return e && e.getSubRecordClass(n.slice(1));
            }),
            (l.getIn = function (t, r) {
              return n.prototype.getIn.call(
                this,
                o("PathArrayIndex").unwrapPathArrayIndex(t),
                r,
              );
            }),
            (l.hasIn = function (t) {
              return n.prototype.hasIn.call(
                this,
                o("PathArrayIndex").unwrapPathArrayIndex(t),
              );
            }),
            (l.removeIn = function (t) {
              return n.prototype.removeIn.call(
                this,
                o("PathArrayIndex").unwrapPathArrayIndex(t),
              );
            }),
            (l.deleteIn = function (t) {
              var e = o("PathArrayIndex").unwrapPathArrayIndex(t);
              return this.getIn(e) === void 0
                ? this
                : n.prototype.deleteIn.call(this, e);
            }),
            (l.updateIn = function (t, r, a) {
              return n.prototype.updateIn.call(
                this,
                o("PathArrayIndex").unwrapPathArrayIndex(t),
                r,
                a,
              );
            }),
            (l.set = function (r, o) {
              return (
                t[r] && o != null && (t[r] === o.constructor || s(0, 282, r)),
                n.prototype.set.call(this, r, o)
              );
            }),
            (l.setIn = function (i, l) {
              if (this.getIn(i) === l) return this;
              if (i.length > 1) {
                var e = i[0],
                  s = i.slice(1),
                  u = t[e],
                  c = this.get(e);
                if (u) {
                  var d = a[e],
                    m = c ? c.setIn(s, l) : d ? d.setIn(s, l) : null;
                  return this.set(e, m);
                } else if (!c && o("PathArrayIndex").isPathArrayIndex(i[1]))
                  return this.set(
                    e,
                    r("immutable")
                      .List()
                      .setIn(
                        o("PathArrayIndex").unwrapPathArrayIndex(i).slice(1),
                        l,
                      ),
                  );
              }
              return n.prototype.setIn.call(
                this,
                o("PathArrayIndex").unwrapPathArrayIndex(i),
                l,
              );
            }),
            (l.isEmpty = function () {
              for (var e of this) {
                var t = e[1];
                if (t !== void 0) return !1;
              }
              return !0;
            }),
            (l.toJS = function () {
              var e = n.prototype.toJS.call(this);
              for (var t of Object.keys(e)) e[t] === void 0 && delete e[t];
              return e;
            }),
            (l.toJSCached = function () {
              var e;
              return (
                (this.__toJSCache =
                  (e = this.__toJSCache) != null ? e : this.toJS()),
                this.__toJSCache
              );
            }),
            i
          );
        })(i);
      return ((l[u] = !0), l);
    }
    function d(e) {
      return !!(e && m(e.constructor));
    }
    function m(e) {
      return !!(e && e[u]);
    }
    ((c.isDeepRecord = d), (c.isDeepRecordClass = m), (l.default = c));
  },
  98,
);
