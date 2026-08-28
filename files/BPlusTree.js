__d(
  "BPlusTree",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["dir"],
      s = { gt: [!1, 0], gte: [!0, 0], lt: [!0, 1], lte: [!1, 1] },
      u = (function () {
        function t(e, t) {
          (t === void 0 && (t = 32),
            (this.$3 = { children: [], isLeaf: !0, keys: [] }),
            (this.$4 = this.$3),
            (this.$5 = this.$3),
            (this.$1 = e),
            (this.$2 = t));
        }
        t.fromSorted = function (t, n, r) {
          for (
            var e = new this(n, r),
              o =
                t[
                  typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
                ](),
              a = o.next();
            !a.done;
          ) {
            for (var i = [], l = e.$5, s = -1; !l.isLeaf; )
              (i.push([l, -1]), (s = l.keys.length), (l = l.children[s]));
            for (
              var u = (e.$2 - 1) * 2, c = u - l.keys.length;
              !a.done && c > 0;
            )
              (l.keys.push(a.value[0]),
                l.children.push(a.value[1]),
                c--,
                (a = o.next()));
            e.$6(l, i, !0);
          }
          return e;
        };
        var n = t.prototype;
        return (
          (n.$7 = function (t, n) {
            for (var e = this.$5, r = -1; !e.isLeaf; )
              (n == null || n.push([e, r]),
                (r = this.$8(e.keys, t, s.gt)),
                r === -1 && (r = e.keys.length),
                (e = e.children[r]));
            return [e, r];
          }),
          (n.$8 = function (t, n, r) {
            for (var e = 0, o = t.length - 1; e <= o; ) {
              var a = (e + o) >> 1;
              (r[0] ? this.$1(t[a], n) < 0 : this.$1(t[a], n) <= 0)
                ? (e = a + 1)
                : (o = a - 1);
            }
            var i = [e, o][r[1]];
            return i === t.length ? -1 : i;
          }),
          (n.$9 = function (t, n) {
            if (!t.length) return (t.push(n), [0, 0]);
            var e = this.$8(t, n, s.gte);
            return e === -1
              ? [t.push(n) - 1, 0]
              : this.$1(t[e], n) === 0
                ? [e, 1]
                : (t.splice(e, 0, n), [e, 0]);
          }),
          (n.$6 = function (t, n, r) {
            for (var e = t, o; e.keys.length >= this.$2; e = o) {
              var a = n.pop() || [
                (this.$5 = { children: [e], isLeaf: !1, keys: [] }),
              ];
              o = a[0];
              var i = Math.floor(e.keys.length / 2),
                l = void 0;
              if (
                (e.isLeaf
                  ? ((l = e.next =
                      {
                        children: e.children.slice(i),
                        isLeaf: !0,
                        keys: e.keys.slice(i),
                        next: e.next,
                        prev: e,
                      }),
                    l.next ? (l.next.prev = l) : (this.$4 = l))
                  : (l = {
                      children: e.children.slice(i + 1),
                      isLeaf: !1,
                      keys: e.keys.slice(i + 1),
                    }),
                r)
              )
                (o.keys.push(e.keys[i]), o.children.push(l));
              else {
                var s = this.$9(o.keys, e.keys[i]),
                  u = s[0];
                o.children.splice(u + 1, 0, l);
              }
              ((e.keys.length = i),
                (e.children.length = i + (e.isLeaf ? 0 : 1)));
            }
          }),
          (n.clear = function () {
            this.$5 =
              this.$3 =
              this.$4 =
                { children: [], isLeaf: !0, keys: [] };
          }),
          (n.delete = function (t) {
            var e = Math.floor(this.$2 / 2),
              n = [],
              o = this.$7(t, n),
              a = o[0],
              i = o[1],
              l = this.$8(a.keys, t, s.gte);
            if (l === -1 || this.$1(a.keys[l], t) !== 0) return !1;
            (a.keys.splice(l, 1), a.children.splice(l, 1));
            for (var u = a, c = i; u.keys.length < e && n.length; ) {
              var d = n.pop();
              if (d == null) break;
              var m = d[0],
                p = d[1],
                _ = [
                  [m.children[c - 1], u, c - 1],
                  [u, m.children[c + 1], c],
                ].filter(function (e) {
                  var t = e[0],
                    n = e[1];
                  return t && n;
                });
              for (var f of _) {
                var g = f[0],
                  h = f[1],
                  y = f[2];
                if (g.keys.length + h.keys.length >= e * 2) {
                  if (u.isLeaf) {
                    var C = [].concat(g.children, h.children),
                      b = [].concat(g.keys, h.keys);
                    ((g.children = (h.children = C).splice(0, e)),
                      (g.keys = (h.keys = b).splice(0, e)),
                      (m.keys[y] = b[0]));
                  } else {
                    var v = [].concat(g.children, h.children),
                      S = [].concat(g.keys, [m.keys[y]], h.keys);
                    ((g.children = (h.children = v).splice(0, e + 1)),
                      (m.keys[y] = S.splice(e, 1)[0]),
                      (g.keys = (h.keys = S).splice(0, e)));
                  }
                  return !0;
                }
              }
              for (var R of _) {
                var L = R[0],
                  E = R[1],
                  k = R[2];
                ((L.children = [].concat(L.children, E.children)),
                  u.isLeaf
                    ? ((L.keys = [].concat(L.keys, E.keys)),
                      (E.keys.length = 0),
                      E.next ? (E.next.prev = L) : (this.$4 = L),
                      (L.next = E.next))
                    : (L.keys = [].concat(L.keys, [m.keys[k]], E.keys)),
                  m.keys.splice(k, 1),
                  m.children.splice(k + 1, 1));
                break;
              }
              ((u = m), (c = p));
            }
            if (!this.$5.keys.length && this.$5.children.length) {
              var I = this.$5;
              if (I.isLeaf)
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "cannot be leaf",
                );
              this.$5 = I.children[0];
            }
            return !0;
          }),
          (n.entries = function (n) {
            var t = this,
              o = n === void 0 ? {} : n,
              a = o.dir,
              i = a === void 0 ? "asc" : a,
              l = babelHelpers.objectWithoutPropertiesLoose(o, e);
            return (function* () {
              if (
                Object.prototype.hasOwnProperty.call(l, "gt") &&
                Object.prototype.hasOwnProperty.call(l, "gte")
              )
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "cannot specify both greater than and greater than or equal",
                );
              if (
                Object.prototype.hasOwnProperty.call(l, "lt") &&
                Object.prototype.hasOwnProperty.call(l, "lte")
              )
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "cannot specify both less than and less than or equal",
                );
              var e;
              if (i === "asc") {
                if (Object.prototype.hasOwnProperty.call(l, "gt")) {
                  var n = t.$7(l.gt);
                  e = n[0];
                } else if (Object.prototype.hasOwnProperty.call(l, "gte")) {
                  var o = t.$7(l.gte);
                  e = o[0];
                } else e = t.$3;
                for (
                  var a = Object.prototype.hasOwnProperty.call(l, "gt")
                    ? t.$8(e.keys, l.gt, s.gt)
                    : Object.prototype.hasOwnProperty.call(l, "gte")
                      ? t.$8(e.keys, l.gte, s.gte)
                      : 0;
                  e;
                ) {
                  for (var u = e; a !== -1 && a < u.keys.length; ) {
                    var c = u.keys[a];
                    if (
                      (Object.prototype.hasOwnProperty.call(l, "lt") &&
                        t.$1(c, l.lt) >= 0) ||
                      (Object.prototype.hasOwnProperty.call(l, "lte") &&
                        t.$1(c, l.lte) > 0)
                    )
                      return;
                    var d = yield [u.keys[a], u.children[a]];
                    if (d != null) {
                      if (t.$1(d, c) <= 0)
                        throw r("FBLogger")("messenger_web").mustfixThrow(
                          "key must be greater than current key",
                        );
                      if (((a = t.$8(u.keys, d, s.gte)), a === -1)) {
                        var m = t.$7(d);
                        ((u = m[0]), (a = t.$8(u.keys, d, s.gte)));
                      }
                    } else {
                      var p = u.keys[a] !== c;
                      if (p && ((a = t.$8(u.keys, c, s.lte)), a === -1)) {
                        var _ = t.$7(c);
                        ((u = _[0]), (a = t.$8(u.keys, c, s.lte)));
                      }
                      a++;
                    }
                  }
                  ((e = u.next), (a = 0));
                }
              } else {
                if (Object.prototype.hasOwnProperty.call(l, "lt")) {
                  var f = t.$7(l.lt);
                  e = f[0];
                } else if (Object.prototype.hasOwnProperty.call(l, "lte")) {
                  var g = t.$7(l.lte);
                  e = g[0];
                } else e = t.$4;
                for (
                  var h = Object.prototype.hasOwnProperty.call(l, "lt")
                    ? t.$8(e.keys, l.lt, s.lt)
                    : Object.prototype.hasOwnProperty.call(l, "lte")
                      ? t.$8(e.keys, l.lte, s.lte)
                      : e.keys.length - 1;
                  e;
                ) {
                  for (var y = e; h !== -1 && h >= 0; ) {
                    var C = y.keys[h];
                    if (
                      (Object.prototype.hasOwnProperty.call(l, "gt") &&
                        t.$1(C, l.gt) <= 0) ||
                      (Object.prototype.hasOwnProperty.call(l, "gte") &&
                        t.$1(C, l.gte) < 0)
                    )
                      return;
                    var b = yield [y.keys[h], y.children[h]];
                    if (b != null) {
                      if (t.$1(b, C) >= 0)
                        throw r("FBLogger")("messenger_web").mustfixThrow(
                          "key must be less than current key",
                        );
                      if (((h = t.$8(y.keys, b, s.lte)), h === -1)) {
                        var v = t.$7(b);
                        ((y = v[0]), (h = t.$8(y.keys, b, s.lte)));
                      }
                    } else {
                      var S = y.keys[h] !== C;
                      if (S && ((h = t.$8(y.keys, C, s.gte)), h === -1)) {
                        var R = t.$7(C);
                        ((y = R[0]), (h = t.$8(y.keys, C, s.gte)));
                      }
                      h--;
                    }
                  }
                  ((e = y.prev), (h = e != null ? e.keys.length - 1 : -1));
                }
              }
            })();
          }),
          (n.get = function (t) {
            var e = this.$7(t),
              n = e[0],
              o = this.$8(n.keys, t, s.gte);
            if (o === -1 || this.$1(n.keys[o], t) !== 0)
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "key not found: %s",
                String(t),
              );
            return n.children[o];
          }),
          (n.getWithDefault = function (t, n) {
            var e = this.$7(t),
              r = e[0],
              o = this.$8(r.keys, t, s.gte);
            return o === -1 || this.$1(r.keys[o], t) !== 0 ? n : r.children[o];
          }),
          (n.has = function (t) {
            var e = this,
              n = this.$7(t),
              r = n[0];
            return (
              r.keys.findIndex(function (n) {
                return e.$1(t, n) === 0;
              }) !== -1
            );
          }),
          (n.set = function (t, n) {
            var e = [],
              r = this.$7(t, e),
              o = r[0],
              a = this.$9(o.keys, t),
              i = a[0],
              l = a[1];
            return (o.children.splice(i, l, n), this.$6(o, e, !1), this);
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
