__d(
  "ReStorePersistence",
  [
    "FBLogger",
    "JSONStringifyBigIntSafe",
    "ReStoreCommonUtils",
    "ReStoreKeyComparer",
    "ReStorePersistenceIds",
    "ReStoreUtils",
    "gkx",
    "isPromise",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["dir"],
      s,
      u,
      c = "__ReStore_DELETED__",
      d = { gt: [!1, 0], gte: [!0, 0], lt: [!0, 1], lte: [!1, 1] },
      m = new Set([
        "encrypted_backups_virtual_devices",
        "secure_encrypted_backups_recovery_code_status",
        "device_metadata",
        "secure_encrypted_backups_epochs",
        "secure_encrypted_backups_client_state",
        "encrypted_backups",
        "experiences_shared_state",
      ]),
      p = 16,
      _ = 64,
      f = 64,
      g = Math.floor(p / 2),
      h = Math.floor(_ / 2),
      y = Math.floor(f / 2);
    function C(e) {
      if (e == null) return e;
      var t = Object.getOwnPropertyNames(e),
        n = {},
        r,
        o;
      for (r = 0; r < t.length; r++) ((o = e[t[r]]), (n[t[r]] = o));
      return n;
    }
    function b(e, t) {
      return (t === void 0 && (t = c), e === t);
    }
    function v(e, t, n) {
      for (var r = 0, a = e.length - 1; r <= a; ) {
        var i = (r + a) >> 1;
        (
          n[0]
            ? (u || (u = o("ReStoreKeyComparer"))).compareKey(e[i], t) < 0
            : (u || (u = o("ReStoreKeyComparer"))).compareKey(e[i], t) <= 0
        )
          ? (r = i + 1)
          : (a = i - 1);
      }
      var l = [r, a][n[1]];
      return l === e.length ? -1 : l;
    }
    var S = (function () {
        function t(e, t, n, r, o, a) {
          ((this.$2 = t),
            (this.$3 = n),
            (this.$1 = e),
            (this.$4 = r),
            (this.$5 = o),
            (this.$6 = a));
        }
        var n = t.prototype;
        return (
          (n.$7 = function (t) {
            return t == null ? "root" : "index(" + t + ")";
          }),
          (n.$8 = function (t, n) {
            return o("ReStoreUtils").getOrCreate(this.$1, n, function () {
              return {
                children: [].concat(t.children),
                isLeaf: !0,
                keys: [].concat(t.keys),
                nextId: t.nextId,
                prevId: t.prevId,
              };
            });
          }),
          (n.$9 = function (t, n) {
            return o("ReStoreUtils").getOrCreate(this.$1, n, function () {
              return {
                children: [].concat(t.children),
                isLeaf: !1,
                keys: [].concat(t.keys),
              };
            });
          }),
          (n.$10 = function (t, n) {
            return o("ReStoreUtils").getOrCreate(this.$1, n, function () {
              return { headId: t.headId, rootId: t.rootId, tailId: t.tailId };
            });
          }),
          (n.$11 = function (t, n) {
            if (!t.length) return [0, 0];
            var e = v(t, n, d.gte);
            return e === -1
              ? [t.length, 0]
              : (u || (u = o("ReStoreKeyComparer"))).compareKey(t[e], n) === 0
                ? [e, 1]
                : [e, 0];
          }),
          (n.$12 = function* (t, n, o, a) {
            for (
              var e = yield* this.$13(t, n), i = e, l = n, s = -1;
              !i.isLeaf;
            ) {
              if ((a == null || a.push([i, l, s]), i.keys == null)) {
                if (m.has(this.$2)) {
                  var u, c;
                  (u = (c = this.$4).logError) == null ||
                    u.call(c, this.$2, this.$5, "dbCorruption", {});
                }
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "Encountered not leaf node without keys",
                );
              }
              ((s = v(i.keys, o, d.gt)),
                s === -1 && (s = i.keys.length),
                (l = i.children[s]),
                (i = yield* this.$13(t, l)));
            }
            return [i, l, s];
          }),
          (n.$14 = function* (t, n) {
            this.$3();
            var e = this.$1.get(n);
            if (!b(e)) {
              if (e !== void 0) return e;
              var o = this.$4.get(t, this.$2, n, this.$5);
              return (s || (s = r("isPromise")))(o) ? yield o : o;
            }
          }),
          (n.$13 = function* (t, n) {
            var e = yield* this.$14(t, n);
            if (e === void 0) {
              var o,
                a,
                i = this.$1.get(n);
              throw (
                (o = (a = this.$4).logError) == null ||
                  o.call(a, this.$2, this.$5, "dbCorruption", {
                    deletedInThisTxn: b(i) ? "true" : "false",
                    id: r("JSONStringifyBigIntSafe")(n) || "",
                  }),
                r("FBLogger")("messenger_web").mustfixThrow("value not found")
              );
            }
            return e;
          }),
          (n.$15 = function* (t, n) {
            var e = yield* this.$14(t, o("ReStorePersistenceIds").idForNextId),
              r = e != null ? e : 0;
            return (this.$1.set("nextId", r + 1), this.$1.set(r, n), r);
          }),
          (n.$16 = function (t, n) {
            (this.$3(), this.$1.set(t, n));
          }),
          (n.incrementSeed = function* (t, n) {
            var e = yield* this.$14(t, "seed"),
              r = e != null ? e : 0;
            return n === void 0
              ? (this.$1.set("seed", r + 1), r)
              : (n >= r && this.$1.set("seed", n + 1), n);
          }),
          (n.readData = function* (t, n) {
            return yield* this.$14(t, n);
          }),
          (n.$17 = function* (t, n, r) {
            var e = yield* this.$14(t, this.$7(n));
            if (e != null) {
              var a = yield* this.$12(t, e.rootId, r),
                i = a[0],
                l = v(i.keys, r, d.gte);
              if (
                !(
                  l === -1 ||
                  (u || (u = o("ReStoreKeyComparer"))).compareKey(
                    i.keys[l],
                    r,
                  ) !== 0
                )
              )
                return i.children[l];
            }
          }),
          (n.tableGet = function* (t, n) {
            var e = yield* this.$17(t, void 0, n);
            if (e !== void 0) return yield* this.$18(t, e);
          }),
          (n.$18 = function* (t, n) {
            return Array.isArray(n) ? n[0] : yield* this.$13(t, n);
          }),
          (n.$19 = function* (t, n, o, a) {
            if (Array.isArray(n)) {
              var e = yield* this.$17(t, void 0, n);
              if (e == null)
                throw (
                  r("gkx")("3570") && this.$6(o, a, this.$2),
                  r("FBLogger")("messenger_web").mustfixThrow(
                    "Encountered value in index %s but not found in table %s",
                    o,
                    this.$2,
                  )
                );
              return yield* this.$18(t, e);
            }
            return yield* this.$13(t, n);
          }),
          (n.indexGet = function* (t, n, r) {
            var e = yield* this.$17(t, n, r);
            if (e != null) return yield* this.$19(t, e, n, r);
          }),
          (n.getId = function* (t, n) {
            var e = yield* this.$17(t, void 0, n);
            return Array.isArray(e) ? n : e;
          }),
          (n.tableSet = function* (t, n, r) {
            var e,
              o = this.$4.shouldInline(this.$2, r),
              a = this.$7(),
              i = yield* this.$14(t, a);
            if (i == null) {
              o || (e = yield* this.$15(t, r));
              var l = {
                  children: [e != null ? e : [r]],
                  isLeaf: !0,
                  keys: [n],
                },
                s = yield* this.$15(t, l);
              return (
                this.$16(a, { headId: s, rootId: s, tailId: s }),
                [e != null ? e : n, !1]
              );
            }
            var u = [],
              d = yield* this.$12(t, i.rootId, n, u),
              m = d[0],
              p = d[1],
              _ = this.$11(m.keys, n),
              f = _[0],
              g = _[1],
              h = !1;
            if (g === 1) {
              var y = m.children[f];
              if (!Array.isArray(y))
                if (((h = !0), o)) this.$1.set(y, c);
                else return (this.$16(y, r), [y, !1]);
            }
            var C = this.$8(m, p);
            return (
              o || (e = yield* this.$15(t, r)),
              g === 0 && C.keys.splice(f, 0, n),
              C.children.splice(f, g, e != null ? e : [r]),
              yield* this.$20(t, C, p, u, i, a, !0),
              [e != null ? e : n, g === 1 && !(o && !h)]
            );
          }),
          (n.indexSet = function* (t, n, r, o) {
            var e = this.$7(n),
              a = yield* this.$14(t, e);
            if (a == null) {
              var i = { children: [o], isLeaf: !0, keys: [r] },
                l = yield* this.$15(t, i);
              this.$16(e, { headId: l, rootId: l, tailId: l });
              return;
            }
            var s = [],
              u = yield* this.$12(t, a.rootId, r, s),
              c = u[0],
              d = u[1],
              m = this.$11(c.keys, r),
              p = m[0],
              _ = m[1];
            if (!(_ === 1 && c.children[p] === o)) {
              var f = this.$8(c, d);
              (f.keys.splice(p, _, r),
                f.children.splice(p, _, o),
                yield* this.$20(t, f, d, s, a, e, !1));
            }
          }),
          (n.$20 = function* (t, n, r, o, a, i, l) {
            for (
              var e = n, s, u, c, d = r;
              e.keys.length >= (e.isLeaf ? (l ? p : _) : f);
              e = s, d = c
            ) {
              var m,
                g = (m = o.pop()) != null ? m : [];
              ((u = g[0]),
                (c = g[1]),
                c != null
                  ? (s = this.$9(u, c))
                  : ((s = { children: [d], isLeaf: !1, keys: [] }),
                    (this.$10(a, i).rootId = yield* this.$15(t, s))));
              var h = Math.floor(e.keys.length / 2),
                y = void 0;
              if (e.isLeaf) {
                var C = {
                    children: e.children.slice(h),
                    isLeaf: !0,
                    keys: e.keys.slice(h),
                    nextId: e.nextId,
                    prevId: d,
                  },
                  b = (y = e.nextId = yield* this.$15(t, C)),
                  v = C.nextId;
                v
                  ? (this.$8(yield* this.$13(t, v), v).prevId = b)
                  : (this.$10(a, i).tailId = y);
              } else
                y = yield* this.$15(t, {
                  children: e.children.slice(h + 1),
                  isLeaf: !1,
                  keys: e.keys.slice(h + 1),
                });
              var S = this.$11(s.keys, e.keys[h]),
                R = S[0],
                L = S[1];
              (s.keys.splice(R, L, e.keys[h]),
                s.children.splice(R + 1, 0, y),
                (e.keys.length = h),
                (e.children.length = h + (e.isLeaf ? 0 : 1)));
            }
          }),
          (n.tableDelete = function* (t, n) {
            var e = yield* this.$21(t, void 0, n);
            return e == null
              ? !1
              : (Array.isArray(e) || (this.$3(), this.$1.set(e, c)), !0);
          }),
          (n.indexDelete = function* (t, n, r) {
            return (yield* this.$21(t, n, r)) != null;
          }),
          (n.$21 = function* (t, n, a) {
            var e = this.$7(n),
              i = yield* this.$14(t, e);
            if (i != null) {
              var l = [],
                s = yield* this.$12(t, i.rootId, a, l),
                p = s[0],
                _ = s[1],
                f = s[2],
                C = this.$8(p, _),
                b = v(p.keys, a, d.gte);
              if (
                !(
                  b === -1 ||
                  (u || (u = o("ReStoreKeyComparer"))).compareKey(
                    p.keys[b],
                    a,
                  ) !== 0
                )
              ) {
                var S = C.children[b];
                (C.keys.splice(b, 1), C.children.splice(b, 1));
                for (
                  var R = C, L = _, E = f, k, I, T, D;
                  R.keys.length < (R.isLeaf ? (n == null ? g : h) : y) &&
                  l.length;
                  x = [k, T, D], R = x[0], L = x[1], E = x[2], x
                ) {
                  var x,
                    $ = l.pop();
                  ((I = $[0]), (T = $[1]), (D = $[2]), (k = this.$9(I, T)));
                  var P = [
                    [
                      { nodeId: k.children[E - 1] },
                      { node: R, nodeId: L },
                      E - 1,
                    ],
                    [{ node: R, nodeId: L }, { nodeId: k.children[E + 1] }, E],
                  ].filter(function (e) {
                    var t = e[0],
                      n = e[1];
                    return t.nodeId !== void 0 && n.nodeId !== void 0;
                  });
                  for (var N of P) {
                    var M = N[0],
                      w = N[1],
                      A = N[2],
                      F = (M.node = M.node || (yield* this.$13(t, M.nodeId))),
                      O = (w.node = w.node || (yield* this.$13(t, w.nodeId))),
                      B = R.isLeaf ? (n == null ? g : h) : y;
                    if (F.keys.length + w.node.keys.length >= B * 2) {
                      if (R.isLeaf) {
                        var W = this.$8(F, M.nodeId),
                          q = this.$8(O, w.nodeId),
                          U = [].concat(W.children, q.children),
                          V = [].concat(F.keys, O.keys);
                        ((W.children = (q.children = U).splice(0, B)),
                          (W.keys = (q.keys = V).splice(0, B)),
                          (k.keys[A] = V[0]));
                      } else {
                        var H = this.$9(F, M.nodeId),
                          G = this.$9(O, w.nodeId),
                          z = [].concat(H.children, G.children),
                          j = [].concat(H.keys, [k.keys[A]], G.keys);
                        ((H.children = (G.children = z).splice(0, B + 1)),
                          (k.keys[A] = j.splice(B, 1)[0]),
                          (H.keys = (G.keys = j).splice(0, B)));
                      }
                      return S;
                    }
                  }
                  for (var K of P) {
                    var Q = K[0],
                      X = K[1],
                      Y = K[2];
                    if (R.isLeaf) {
                      var J = this.$8(Q.node, Q.nodeId),
                        Z = this.$8(X.node, X.nodeId);
                      ((J.children = [].concat(J.children, Z.children)),
                        (J.keys = [].concat(J.keys, Z.keys)),
                        (Z.keys.length = 0));
                      var ee = Z.nextId;
                      if (ee) {
                        var te = this.$8(yield* this.$13(t, ee), ee);
                        te.prevId = Q.nodeId;
                      } else this.$10(i, e).tailId = Q.nodeId;
                      J.nextId = Z.nextId;
                    } else {
                      var ne = this.$9(Q.node, Q.nodeId),
                        re = this.$9(X.node, X.nodeId);
                      ((ne.children = [].concat(ne.children, re.children)),
                        (ne.keys = [].concat(ne.keys, [k.keys[Y]], re.keys)));
                    }
                    (k.keys.splice(Y, 1),
                      k.children.splice(Y + 1, 1),
                      this.$1.set(X.nodeId, c));
                    break;
                  }
                }
                var oe = yield* this.$13(t, i.rootId);
                if (!oe.keys.length && oe.children.length) {
                  if (oe.isLeaf) {
                    if (m.has(this.$2)) {
                      var ae, ie;
                      (ae = (ie = this.$4).logError) == null ||
                        ae.call(ie, this.$2, this.$5, "dbCorruption", {});
                    }
                    throw r("FBLogger")("messenger_web").mustfixThrow(
                      "cannot be leaf",
                    );
                  }
                  (this.$1.set(i.rootId, c),
                    (this.$10(i, e).rootId = oe.children[0]));
                }
                return S;
              }
            }
          }),
          (n.btreeIterator = function (n, a, i) {
            var t = i === void 0 ? {} : i,
              l = t.dir,
              s = l === void 0 ? "asc" : l,
              c = babelHelpers.objectWithoutPropertiesLoose(t, e);
            function m() {
              if (s === "asc") {
                if (Object.prototype.hasOwnProperty.call(c, "gt")) return c.gt;
                if (Object.prototype.hasOwnProperty.call(c, "gte"))
                  return c.gte;
              } else {
                if (Object.prototype.hasOwnProperty.call(c, "lt")) return c.lt;
                if (Object.prototype.hasOwnProperty.call(c, "lte"))
                  return c.lte;
              }
            }
            function p(e) {
              return s === "asc"
                ? Object.prototype.hasOwnProperty.call(c, "gt")
                  ? v(e.keys, c.gt, d.gt)
                  : Object.prototype.hasOwnProperty.call(c, "gte")
                    ? v(e.keys, c.gte, d.gte)
                    : 0
                : Object.prototype.hasOwnProperty.call(c, "lt")
                  ? v(e.keys, c.lt, d.lt)
                  : Object.prototype.hasOwnProperty.call(c, "lte")
                    ? v(e.keys, c.lte, d.lte)
                    : e.keys.length - 1;
            }
            if (
              Object.prototype.hasOwnProperty.call(c, "gt") &&
              Object.prototype.hasOwnProperty.call(c, "gte")
            )
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "cannot specify both greater than and greater than or equal",
              );
            if (
              Object.prototype.hasOwnProperty.call(c, "lt") &&
              Object.prototype.hasOwnProperty.call(c, "lte")
            )
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "cannot specify both less than and less than or equal",
              );
            var _,
              f = this;
            return {
              next: function* (t) {
                var e, i, l, g;
                if (_ == null) {
                  var h = yield* f.$14(n, f.$7(a));
                  if (h == null) return { done: !0 };
                  var y = m();
                  if (y !== void 0) {
                    var C = yield* f.$12(n, h.rootId, y);
                    ((i = C[0]), (l = C[1]));
                  } else if (s === "asc") {
                    var b = [yield* f.$13(n, h.headId), h.headId];
                    ((i = b[0]), (l = b[1]));
                  } else {
                    var S = [yield* f.$13(n, h.tailId), h.tailId];
                    ((i = S[0]), (l = S[1]));
                  }
                  e = p(i);
                } else {
                  var R = _;
                  if (
                    ((e = R.i),
                    (g = R.key),
                    (l = R.nodeId),
                    (i = yield* f.$14(n, l)),
                    t != null)
                  ) {
                    if (
                      (u || (u = o("ReStoreKeyComparer"))).compareKey(t, g) ===
                      (s === "asc" ? -1 : 1)
                    )
                      throw r("FBLogger")("messenger_web").mustfixThrow(
                        "key must be ahead of current key",
                      );
                    if (
                      i == null ||
                      (u || (u = o("ReStoreKeyComparer"))).compareKey(
                        t,
                        i.keys[0],
                      ) < 0 ||
                      (u || (u = o("ReStoreKeyComparer"))).compareKey(
                        t,
                        i.keys[i.keys.length - 1],
                      ) > 0
                    ) {
                      var L = yield* f.$14(n, f.$7(a));
                      if (L == null) return { done: !0 };
                      var E = yield* f.$12(n, L.rootId, t);
                      ((i = E[0]), (l = E[1]));
                    }
                    e = v(i.keys, t, d[s === "asc" ? "gte" : "lte"]);
                  } else {
                    if (
                      i == null ||
                      e < 0 ||
                      e >= i.keys.length ||
                      (u || (u = o("ReStoreKeyComparer"))).compareKey(
                        i.keys[e],
                        g,
                      ) !== 0
                    ) {
                      if (
                        i == null ||
                        !i.keys.length ||
                        (u || (u = o("ReStoreKeyComparer"))).compareKey(
                          g,
                          i.keys[0],
                        ) < 0 ||
                        (u || (u = o("ReStoreKeyComparer"))).compareKey(
                          g,
                          i.keys[i.keys.length - 1],
                        ) > 0
                      ) {
                        var k = yield* f.$14(n, f.$7(a));
                        if (k == null) return { done: !0 };
                        var I = yield* f.$12(n, k.rootId, g);
                        ((i = I[0]), (l = I[1]));
                      }
                      e = v(i.keys, g, d[s === "asc" ? "lte" : "gte"]);
                    }
                    e += s === "asc" ? 1 : -1;
                  }
                }
                if (e < 0 || e >= i.keys.length)
                  if (s === "asc") {
                    if (i.nextId === void 0) return { done: !0 };
                    ((l = i.nextId), (i = yield* f.$13(n, l)), (e = 0));
                  } else {
                    if (i.prevId === void 0) return { done: !0 };
                    ((l = i.prevId),
                      (i = yield* f.$13(n, l)),
                      (e = i.keys.length - 1));
                  }
                if (
                  ((g = i.keys[e]),
                  (_ = { i: e, key: g, node: i, nodeId: l }),
                  e < 0 || e >= i.keys.length)
                )
                  return { done: !0 };
                var T =
                  s === "asc"
                    ? (Object.prototype.hasOwnProperty.call(c, "lt") &&
                        (u || (u = o("ReStoreKeyComparer"))).compareKey(
                          g,
                          c.lt,
                        ) >= 0) ||
                      (Object.prototype.hasOwnProperty.call(c, "lte") &&
                        (u || (u = o("ReStoreKeyComparer"))).compareKey(
                          g,
                          c.lte,
                        ) > 0)
                    : (Object.prototype.hasOwnProperty.call(c, "gt") &&
                        (u || (u = o("ReStoreKeyComparer"))).compareKey(
                          g,
                          c.gt,
                        ) <= 0) ||
                      (Object.prototype.hasOwnProperty.call(c, "gte") &&
                        (u || (u = o("ReStoreKeyComparer"))).compareKey(
                          g,
                          c.gte,
                        ) < 0);
                return T
                  ? { done: !0 }
                  : { done: !1, value: [i.keys[e], i.children[e]] };
              },
            };
          }),
          (n.tableEntries = function (t, n) {
            n === void 0 && (n = {});
            var e = this.btreeIterator(t, void 0, n),
              r = this;
            return {
              next: function* (o) {
                var n = yield* e.next(o);
                if (n.done) return n;
                var a = n.value,
                  i = a[0],
                  l = a[1],
                  s = yield* r.$18(t, l);
                return { done: !1, value: [i, s] };
              },
            };
          }),
          (n.indexEntries = function (t, n, r) {
            r === void 0 && (r = {});
            var e = this.btreeIterator(t, n, r),
              o = this;
            return {
              next: function* (a) {
                var r = yield* e.next(a);
                if (r.done) return r;
                var i = r.value,
                  l = i[0],
                  s = i[1],
                  u = yield* o.$19(t, s, n, l);
                return { done: !1, value: [l, u] };
              },
            };
          }),
          (n.keys = function (t, n, r) {
            r === void 0 && (r = {});
            var e = this.btreeIterator(t, n, r);
            return {
              next: function* (n) {
                var t = yield* e.next(n);
                if (t.done) return t;
                var r = t.value,
                  o = r[0];
                return { done: !1, value: o };
              },
            };
          }),
          (n.clearIds = function* (t, n) {
            this.$3();
            var e = this.$7(n),
              r = yield* this.$14(t, e);
            if ((this.$3(), r != null)) {
              for (
                var o = yield* this.$13(t, r.rootId),
                  a = [{ id: r.rootId, node: o }];
                a.length > 0;
              ) {
                var i = a.shift(),
                  l = i.id,
                  s = i.node;
                if (!s.isLeaf)
                  for (var u of s.children) {
                    var d = yield* this.$14(t, u);
                    d != null && a.push({ id: u, node: d });
                  }
                this.$1.set(l, c);
              }
              this.$1.set(e, c);
            }
          }),
          (n.readSeed = function* (t) {
            var e = yield* this.$14(t, o("ReStorePersistenceIds").idForSeed);
            return e != null ? e : 0;
          }),
          (n.remove = function (t, n) {
            (this.$3(), this.$1.set(n, c));
          }),
          (n.writeData = function (t, n, r) {
            this.$16(n, C(r));
          }),
          (n.writeNewData = function* (t, n) {
            return yield* this.$15(t, C(n));
          }),
          t
        );
      })(),
      R = (function () {
        function e(e, t, n, a, i) {
          var l = this;
          ((this.$2 = new Map()),
            (this.$6 = !1),
            (this.$3 = function () {
              if (l.$6)
                throw (
                  a == null || a.mark("transaction_closed"),
                  r("FBLogger")("messenger_web").mustfixThrow(
                    "Transaction has closed",
                  )
                );
              n();
            }),
            (this.$4 = t),
            (this.$1 = e),
            (this.$5 = {
              get: function (n, r, a) {
                var e = o("ReStoreUtils").getOrCreate(l.$1, r, function () {
                    return new Map();
                  }),
                  i = e.get(a);
                if (!b(i))
                  return i !== void 0 ? i : t.get(n, r, a, "readwrite");
              },
              logError: t.logError,
              shouldInline: t.shouldInline,
            }),
            (this.$7 = i));
        }
        var t = e.prototype;
        return (
          (t.flush = function () {
            for (var e of this.$2) {
              var t = e[0],
                n = e[1],
                r = o("ReStoreUtils").getOrCreate(this.$1, t, function () {
                  return new Map();
                });
              for (var a of n) {
                var i = a[0],
                  l = a[1];
                r.set(i, l);
              }
            }
            this.$6 = !0;
          }),
          (t.table = function (t) {
            return new S(
              o("ReStoreUtils").getOrCreate(this.$2, t, function () {
                return new Map();
              }),
              t,
              this.$3,
              this.$5,
              "readwrite",
              this.$7,
            );
          }),
          e
        );
      })(),
      L = (function () {
        function e(e, t, n, o) {
          var a = this;
          ((this.$1 = new Map()),
            (this.$2 = !1),
            (this.$7 = function () {
              if (a.$2)
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "Transaction has closed: %s",
                  a.$5,
                );
            }),
            (this.$3 = e),
            (this.$4 = t),
            (this.types = e.types),
            (this.$5 = n),
            (this.$6 = o));
        }
        var t = e.prototype;
        return (
          (t.close = function () {
            this.$2 = !0;
          }),
          (t.flush = async function (t) {
            (t === void 0 && (t = { upgrade: !1 }),
              await this.$3.flush(this.$1, t),
              (this.$2 = !0));
          }),
          (t.tablePermitsSynchronousIO = function (t) {
            var e, n, r;
            return (e =
              (n = (r = this.$3).permitsSynchronousIO) == null
                ? void 0
                : n.call(r, t)) != null
              ? e
              : !1;
          }),
          (t.table = function (t) {
            return new S(
              o("ReStoreUtils").getOrCreate(this.$1, t, function () {
                return new Map();
              }),
              t,
              this.$7,
              this.$3,
              this.$4,
              this.$6,
            );
          }),
          (t.createNested = function (t) {
            return new R(this.$1, this.$3, this.$7, t, this.$6);
          }),
          e
        );
      })();
    function E(e) {
      function t(t, n, a) {
        r("promiseDone")(
          (async function () {
            await e.runExclusively(function () {
              return Promise.resolve([
                async function () {
                  var r = new L(e, "readwrite", void 0, function () {});
                  (await o("ReStoreCommonUtils").gen(
                    r.table(a).indexDelete(new WeakMap(), t, n),
                  ),
                    await r.flush());
                },
                "readwrite",
              ]);
            }, "fixBrokenIndex");
          })(),
        );
      }
      return {
        clearCache: e.clearCache,
        close: e.close,
        createTransaction: function (r, o) {
          return new L(e, r, o, t);
        },
        isClosed:
          e.isClosed ||
          function () {
            return !1;
          },
        isPersistenceSupported: e.isPersistenceSupported,
        logError: e.logError,
        runExclusively: e.runExclusively,
      };
    }
    ((l.sentinelDeleted = c),
      (l.isDeletedValue = b),
      (l.ReStoreDbStoreTable = S),
      (l.ReStoreDbStoreTransaction = L),
      (l.createDbStore = E));
  },
  98,
);
