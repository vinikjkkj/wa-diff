__d(
  "bytestreamjs-1.0.29",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.parseByteMap = r));
      var t = (function () {
        function e(e) {
          (e === void 0 && (e = {}), this.clear());
          var t = !0,
            n = !1,
            r = void 0;
          try {
            for (
              var o =
                  Object.keys(e)[
                    typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
                  ](),
                a;
              !(t = (a = o.next()).done);
              t = !0
            ) {
              var i = a.value;
              switch (i) {
                case "length":
                  this.length = e.length;
                  break;
                case "stub":
                  for (var l = 0; l < this.$1.length; l++) this.$1[l] = e.stub;
                  break;
                case "view":
                  this.fromUint8Array(e.view);
                  break;
                case "buffer":
                  this.fromArrayBuffer(e.buffer);
                  break;
                case "string":
                  this.fromString(e.string);
                  break;
                case "hexstring":
                  this.fromHexString(e.hexstring);
                  break;
                default:
              }
            }
          } catch (e) {
            ((n = !0), (r = e));
          } finally {
            try {
              !t && o.return && o.return();
            } finally {
              if (n) throw r;
            }
          }
        }
        var t = e.prototype;
        return (
          (t.clear = function () {
            ((this.$2 = new ArrayBuffer(0)),
              (this.$1 = new Uint8Array(this.$2)));
          }),
          (t.fromArrayBuffer = function (t) {
            this.buffer = t;
          }),
          (t.fromUint8Array = function (t) {
            ((this.$2 = new ArrayBuffer(t.length)),
              (this.$1 = new Uint8Array(this.$2)),
              this.$1.set(t));
          }),
          (t.fromString = function (t) {
            var e = t.length;
            this.length = e;
            for (var n = 0; n < e; n++) this.view[n] = t.charCodeAt(n);
          }),
          (t.toString = function (t, n) {
            (t === void 0 && (t = 0),
              n === void 0 && (n = this.view.length - t));
            var e = "";
            ((t >= this.view.length || t < 0) && (t = 0),
              (n >= this.view.length || n < 0) && (n = this.view.length - t));
            for (var r = t; r < t + n; r++)
              e += String.fromCharCode(this.view[r]);
            return e;
          }),
          (t.fromHexString = function (t) {
            var e = t.length;
            ((this.buffer = new ArrayBuffer(e >> 1)),
              (this.view = new Uint8Array(this.buffer)));
            var n = new Map();
            (n.set("0", 0),
              n.set("1", 1),
              n.set("2", 2),
              n.set("3", 3),
              n.set("4", 4),
              n.set("5", 5),
              n.set("6", 6),
              n.set("7", 7),
              n.set("8", 8),
              n.set("9", 9),
              n.set("A", 10),
              n.set("a", 10),
              n.set("B", 11),
              n.set("b", 11),
              n.set("C", 12),
              n.set("c", 12),
              n.set("D", 13),
              n.set("d", 13),
              n.set("E", 14),
              n.set("e", 14),
              n.set("F", 15),
              n.set("f", 15));
            for (var r = 0, o = 0, a = 0; a < e; a++)
              a % 2
                ? ((o |= n.get(t.charAt(a))), (this.view[r] = o), r++)
                : (o = n.get(t.charAt(a)) << 4);
          }),
          (t.toHexString = function (t, n) {
            (t === void 0 && (t = 0),
              n === void 0 && (n = this.view.length - t));
            var e = "";
            ((t >= this.view.length || t < 0) && (t = 0),
              (n >= this.view.length || n < 0) && (n = this.view.length - t));
            for (var r = t; r < t + n; r++) {
              var o = this.view[r].toString(16).toUpperCase();
              e = e + (o.length == 1 ? "0" : "") + o;
            }
            return e;
          }),
          (t.copy = function (n, r) {
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = this.$2.byteLength - n),
              n === 0 && this.$2.byteLength === 0)
            )
              return new e();
            if (n < 0 || n > this.$2.byteLength - 1)
              throw new Error("Wrong start position: " + n);
            var t = new e();
            return (
              (t.$2 = this.$2.slice(n, n + r)),
              (t.$1 = new Uint8Array(t.$2)),
              t
            );
          }),
          (t.slice = function (n, r) {
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = this.$2.byteLength),
              n === 0 && this.$2.byteLength === 0)
            )
              return new e();
            if (n < 0 || n > this.$2.byteLength - 1)
              throw new Error("Wrong start position: " + n);
            var t = new e();
            return (
              (t.$2 = this.$2.slice(n, r)),
              (t.$1 = new Uint8Array(t.$2)),
              t
            );
          }),
          (t.realloc = function (t) {
            var e = new ArrayBuffer(t),
              n = new Uint8Array(e);
            (t > this.$1.length
              ? n.set(this.$1)
              : n.set(new Uint8Array(this.$2, 0, t)),
              (this.$2 = e.slice(0)),
              (this.$1 = new Uint8Array(this.$2)));
          }),
          (t.append = function (t) {
            var e = this.$2.byteLength,
              n = t.$2.byteLength,
              r = t.$1.slice();
            (this.realloc(e + n), this.$1.set(r, e));
          }),
          (t.insert = function (t, n, r) {
            return (
              n === void 0 && (n = 0),
              r === void 0 && (r = this.$2.byteLength - n),
              n > this.$2.byteLength - 1
                ? !1
                : (r > this.$2.byteLength - n && (r = this.$2.byteLength - n),
                  r > t.$2.byteLength && (r = t.$2.byteLength),
                  r == t.$2.byteLength
                    ? this.$1.set(t.$1, n)
                    : this.$1.set(t.$1.slice(0, r), n),
                  !0)
            );
          }),
          (t.isEqual = function (t) {
            if (this.$2.byteLength != t.$2.byteLength) return !1;
            for (var e = 0; e < t.$2.byteLength; e++)
              if (this.view[e] != t.view[e]) return !1;
            return !0;
          }),
          (t.isEqualView = function (t) {
            if (t.length != this.view.length) return !1;
            for (var e = 0; e < t.length; e++)
              if (this.view[e] != t[e]) return !1;
            return !0;
          }),
          (t.findPattern = function (t, n, r, o) {
            (n === void 0 && (n = null),
              r === void 0 && (r = null),
              o === void 0 && (o = !1),
              n == null && (n = o ? this.buffer.byteLength : 0),
              n > this.buffer.byteLength && (n = this.buffer.byteLength),
              o
                ? (r == null && (r = n), r > n && (r = n))
                : (r == null && (r = this.buffer.byteLength - n),
                  r > this.buffer.byteLength - n &&
                    (r = this.buffer.byteLength - n)));
            var e = t.buffer.byteLength;
            if (e > r) return -1;
            for (var a = [], i = 0; i < e; i++) a.push(t.view[i]);
            for (var l = 0; l <= r - e; l++) {
              for (var s = !0, u = o ? n - e - l : n + l, c = 0; c < e; c++)
                if (this.view[c + u] != a[c]) {
                  s = !1;
                  break;
                }
              if (s) return o ? n - e - l : n + e + l;
            }
            return -1;
          }),
          (t.findFirstIn = function (t, n, r, o) {
            (n === void 0 && (n = null),
              r === void 0 && (r = null),
              o === void 0 && (o = !1),
              n == null && (n = o ? this.buffer.byteLength : 0),
              n > this.buffer.byteLength && (n = this.buffer.byteLength),
              o
                ? (r == null && (r = n), r > n && (r = n))
                : (r == null && (r = this.buffer.byteLength - n),
                  r > this.buffer.byteLength - n &&
                    (r = this.buffer.byteLength - n)));
            for (
              var e = { id: -1, position: o ? 0 : n + r, length: 0 }, a = 0;
              a < t.length;
              a++
            ) {
              var i = this.findPattern(t[a], n, r, o);
              if (i != -1) {
                var l = !1,
                  s = t[a].length;
                (o
                  ? i - s >= e.position - e.length && (l = !0)
                  : i - s <= e.position - e.length && (l = !0),
                  l && ((e.position = i), (e.id = a), (e.length = s)));
              }
            }
            return e;
          }),
          (t.findAllIn = function (t, n, r) {
            (n === void 0 && (n = 0),
              r === void 0 && (r = this.buffer.byteLength - n));
            var e = [];
            if ((n == null && (n = 0), n > this.buffer.byteLength - 1))
              return e;
            (r == null && (r = this.buffer.byteLength - n),
              r > this.buffer.byteLength - n &&
                (r = this.buffer.byteLength - n));
            var o = { id: -1, position: n };
            do {
              var a = o.position;
              if (((o = this.findFirstIn(t, o.position, r)), o.id == -1)) break;
              ((r -= o.position - a),
                e.push({ id: o.id, position: o.position }));
            } while (!0);
            return e;
          }),
          (t.findAllPatternIn = function (t, n, r) {
            (n === void 0 && (n = 0),
              r === void 0 && (r = this.buffer.byteLength - n),
              n == null && (n = 0),
              n > this.buffer.byteLength && (n = this.buffer.byteLength),
              r == null && (r = this.buffer.byteLength - n),
              r > this.buffer.byteLength - n &&
                (r = this.buffer.byteLength - n));
            var e = [],
              o = t.buffer.byteLength;
            if (o > r) return -1;
            for (var a = Array.from(t.view), i = 0; i <= r - o; i++) {
              for (var l = !0, s = n + i, u = 0; u < o; u++)
                if (this.view[u + s] != a[u]) {
                  l = !1;
                  break;
                }
              l && (e.push(n + o + i), (i += o - 1));
            }
            return e;
          }),
          (t.findFirstNotIn = function (n, r, o, a) {
            (r === void 0 && (r = null),
              o === void 0 && (o = null),
              a === void 0 && (a = !1),
              r == null && (r = a ? this.buffer.byteLength : 0),
              r > this.buffer.byteLength && (r = this.buffer.byteLength),
              a
                ? (o == null && (o = r), o > r && (o = r))
                : (o == null && (o = this.buffer.byteLength - r),
                  o > this.buffer.byteLength - r &&
                    (o = this.buffer.byteLength - r)));
            for (
              var t = {
                  left: { id: -1, position: r },
                  right: { id: -1, position: 0 },
                  value: new e(),
                },
                i = o;
              i > 0;
            ) {
              if (
                ((t.right = this.findFirstIn(
                  n,
                  a ? r - o + i : r + o - i,
                  i,
                  a,
                )),
                t.right.id == -1)
              ) {
                ((o = i),
                  a ? (r -= o) : (r = t.left.position),
                  (t.value = new e()),
                  (t.value.$2 = this.$2.slice(r, r + o)),
                  (t.value.$1 = new Uint8Array(t.value.$2)));
                break;
              }
              if (
                t.right.position !=
                (a
                  ? t.left.position - n[t.right.id].buffer.byteLength
                  : t.left.position + n[t.right.id].buffer.byteLength)
              ) {
                (a
                  ? ((r = t.right.position + n[t.right.id].buffer.byteLength),
                    (o =
                      t.left.position -
                      t.right.position -
                      n[t.right.id].buffer.byteLength))
                  : ((r = t.left.position),
                    (o =
                      t.right.position -
                      t.left.position -
                      n[t.right.id].buffer.byteLength)),
                  (t.value = new e()),
                  (t.value.$2 = this.$2.slice(r, r + o)),
                  (t.value.$1 = new Uint8Array(t.value.$2)));
                break;
              }
              ((t.left = t.right), (i -= n[t.right.id].$2.byteLength));
            }
            if (a) {
              var l = t.right;
              ((t.right = t.left), (t.left = l));
            }
            return t;
          }),
          (t.findAllNotIn = function (n, r, o) {
            (r === void 0 && (r = null), o === void 0 && (o = null));
            var t = [];
            if ((r == null && (r = 0), r > this.buffer.byteLength - 1))
              return t;
            (o == null && (o = this.buffer.byteLength - r),
              o > this.buffer.byteLength - r &&
                (o = this.buffer.byteLength - r));
            var a = {
              left: { id: -1, position: r },
              right: { id: -1, position: r },
              value: new e(),
            };
            do {
              var i = a.right.position;
              ((a = this.findFirstNotIn(n, a.right.position, o)),
                (o -= a.right.position - i),
                t.push({
                  left: { id: a.left.id, position: a.left.position },
                  right: { id: a.right.id, position: a.right.position },
                  value: a.value,
                }));
            } while (a.right.id != -1);
            return t;
          }),
          (t.findFirstSequence = function (n, r, o, a) {
            (r === void 0 && (r = null),
              o === void 0 && (o = null),
              a === void 0 && (a = !1),
              r == null && (r = a ? this.buffer.byteLength : 0),
              r > this.buffer.byteLength && (r = this.buffer.byteLength),
              a
                ? (o == null && (o = r), o > r && (o = r))
                : (o == null && (o = this.buffer.byteLength - r),
                  o > this.buffer.byteLength - r &&
                    (o = this.buffer.byteLength - r)));
            var t = this.skipNotPatterns(n, r, o, a);
            if (t == -1) return { position: -1, value: new e() };
            var i = this.skipPatterns(n, t, o - (a ? r - t : t - r), a);
            a ? ((r = i), (o = t - i)) : ((r = t), (o = i - t));
            var l = new e();
            return (
              (l.$2 = this.$2.slice(r, r + o)),
              (l.$1 = new Uint8Array(l.$2)),
              { position: i, value: l }
            );
          }),
          (t.findAllSequences = function (n, r, o) {
            (r === void 0 && (r = null), o === void 0 && (o = null));
            var t = [];
            if ((r == null && (r = 0), r > this.buffer.byteLength - 1))
              return t;
            (o == null && (o = this.buffer.byteLength - r),
              o > this.buffer.byteLength - r &&
                (o = this.buffer.byteLength - r));
            var a = { position: r, value: new e() };
            do {
              var i = a.position;
              ((a = this.findFirstSequence(n, a.position, o)),
                a.position != -1 &&
                  ((o -= a.position - i),
                  t.push({ position: a.position, value: a.value })));
            } while (a.position != -1);
            return t;
          }),
          (t.findPairedPatterns = function (t, n, r, o) {
            (r === void 0 && (r = null), o === void 0 && (o = null));
            var e = [];
            if (
              t.isEqual(n) ||
              (r == null && (r = 0), r > this.buffer.byteLength - 1)
            )
              return e;
            (o == null && (o = this.buffer.byteLength - r),
              o > this.buffer.byteLength - r &&
                (o = this.buffer.byteLength - r));
            var a = 0,
              i = this.findAllPatternIn(t, r, o);
            if (i.length == 0) return e;
            var l = this.findAllPatternIn(n, r, o);
            if (l.length == 0) return e;
            for (; a < i.length && l.length != 0; ) {
              if (i[0] == l[0]) {
                (e.push({ left: i[0], right: l[0] }),
                  i.splice(0, 1),
                  l.splice(0, 1));
                continue;
              }
              if (i[a] > l[0]) break;
              for (; i[a] < l[0] && (a++, !(a >= i.length)); );
              (e.push({ left: i[a - 1], right: l[0] }),
                i.splice(a - 1, 1),
                l.splice(0, 1),
                (a = 0));
            }
            return (
              e.sort(function (e, t) {
                return e.left - t.left;
              }),
              e
            );
          }),
          (t.findPairedArrays = function (t, n, r, o) {
            (r === void 0 && (r = null), o === void 0 && (o = null));
            var e = [];
            if ((r == null && (r = 0), r > this.buffer.byteLength - 1))
              return e;
            (o == null && (o = this.buffer.byteLength - r),
              o > this.buffer.byteLength - r &&
                (o = this.buffer.byteLength - r));
            var a = 0,
              i = this.findAllIn(t, r, o);
            if (i.length == 0) return e;
            var l = this.findAllIn(n, r, o);
            if (l.length == 0) return e;
            for (; a < i.length && l.length != 0; ) {
              if (i[0].position == l[0].position) {
                (e.push({ left: i[0], right: l[0] }),
                  i.splice(0, 1),
                  l.splice(0, 1));
                continue;
              }
              if (i[a].position > l[0].position) break;
              for (
                ;
                i[a].position < l[0].position && (a++, !(a >= i.length));
              );
              (e.push({ left: i[a - 1], right: l[0] }),
                i.splice(a - 1, 1),
                l.splice(0, 1),
                (a = 0));
            }
            return (
              e.sort(function (e, t) {
                return e.left.position - t.left.position;
              }),
              e
            );
          }),
          (t.replacePattern = function (t, n, r, o, a) {
            var e;
            (r === void 0 && (r = null),
              o === void 0 && (o = null),
              a === void 0 && (a = null));
            var i,
              l,
              s = {
                status: -1,
                searchPatternPositions: [],
                replacePatternPositions: [],
              };
            if ((r == null && (r = 0), r > this.buffer.byteLength - 1))
              return !1;
            if (
              (o == null && (o = this.buffer.byteLength - r),
              o > this.buffer.byteLength - r &&
                (o = this.buffer.byteLength - r),
              a == null)
            ) {
              if (((i = this.findAllIn([t], r, o)), i.length == 0)) return s;
            } else i = a;
            (e = s.searchPatternPositions).push.apply(
              e,
              Array.from(i, function (e) {
                return e.position;
              }),
            );
            var u = t.buffer.byteLength - n.buffer.byteLength,
              c = new ArrayBuffer(this.view.length - i.length * u),
              d = new Uint8Array(c);
            for (
              d.set(new Uint8Array(this.buffer, 0, r)), l = 0;
              l < i.length;
              l++
            ) {
              var m = l == 0 ? r : i[l - 1].position;
              (d.set(
                new Uint8Array(
                  this.buffer,
                  m,
                  i[l].position - t.buffer.byteLength - m,
                ),
                m - l * u,
              ),
                d.set(n.view, i[l].position - t.buffer.byteLength - l * u),
                s.replacePatternPositions.push(
                  i[l].position - t.buffer.byteLength - l * u,
                ));
            }
            return (
              l--,
              d.set(
                new Uint8Array(
                  this.buffer,
                  i[l].position,
                  this.buffer.byteLength - i[l].position,
                ),
                i[l].position -
                  t.buffer.byteLength +
                  n.buffer.byteLength -
                  l * u,
              ),
              (this.buffer = c),
              (this.view = new Uint8Array(this.buffer)),
              (s.status = 1),
              s
            );
          }),
          (t.skipPatterns = function (t, n, r, o) {
            (n === void 0 && (n = null),
              r === void 0 && (r = null),
              o === void 0 && (o = !1),
              n == null && (n = o ? this.buffer.byteLength : 0),
              n > this.buffer.byteLength && (n = this.buffer.byteLength),
              o
                ? (r == null && (r = n), r > n && (r = n))
                : (r == null && (r = this.buffer.byteLength - n),
                  r > this.buffer.byteLength - n &&
                    (r = this.buffer.byteLength - n)));
            for (var e = n, a = 0; a < t.length; a++) {
              for (
                var i = t[a].buffer.byteLength,
                  l = o ? e - i : e,
                  s = !0,
                  u = 0;
                u < i;
                u++
              )
                if (this.view[u + l] != t[a].view[u]) {
                  s = !1;
                  break;
                }
              if (s) {
                if (((a = -1), o)) {
                  if (((e -= i), e <= 0)) return e;
                } else if (((e += i), e >= n + r)) return e;
              }
            }
            return e;
          }),
          (t.skipNotPatterns = function (t, n, r, o) {
            (n === void 0 && (n = null),
              r === void 0 && (r = null),
              o === void 0 && (o = !1),
              n == null && (n = o ? this.buffer.byteLength : 0),
              n > this.buffer.byteLength && (n = this.buffer.byteLength),
              o
                ? (r == null && (r = n), r > n && (r = n))
                : (r == null && (r = this.buffer.byteLength - n),
                  r > this.buffer.byteLength - n &&
                    (r = this.buffer.byteLength - n)));
            for (var e = -1, a = 0; a < r; a++) {
              for (var i = 0; i < t.length; i++) {
                for (
                  var l = t[i].buffer.byteLength,
                    s = o ? n - a - l : n + a,
                    u = !0,
                    c = 0;
                  c < l;
                  c++
                )
                  if (this.view[c + s] != t[i].view[c]) {
                    u = !1;
                    break;
                  }
                if (u) {
                  e = o ? n - a : n + a;
                  break;
                }
              }
              if (e != -1) break;
            }
            return e;
          }),
          babelHelpers.createClass(e, [
            {
              key: "buffer",
              get: function () {
                return this.$2;
              },
              set: function (t) {
                ((this.$2 = t.slice(0)), (this.$1 = new Uint8Array(this.$2)));
              },
            },
            {
              key: "view",
              get: function () {
                return this.$1;
              },
              set: function (t) {
                ((this.$2 = new ArrayBuffer(t.length)),
                  (this.$1 = new Uint8Array(this.$2)),
                  this.$1.set(t));
              },
            },
            {
              key: "length",
              get: function () {
                return this.$2.byteLength;
              },
              set: function (t) {
                ((this.$2 = new ArrayBuffer(t)),
                  (this.$1 = new Uint8Array(this.$2)));
              },
            },
          ])
        );
      })();
      e.ByteStream = t;
      var n = (function () {
        function e(e) {
          (e === void 0 && (e = {}),
            (this.stream = new t()),
            (this.$1 = 0),
            (this.backward = !1),
            (this.$2 = 0),
            (this.appendBlock = 0),
            (this.prevLength = 0),
            (this.prevStart = 0));
          var n = !0,
            r = !1,
            o = void 0;
          try {
            for (
              var a =
                  Object.keys(e)[
                    typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
                  ](),
                i;
              !(n = (i = a.next()).done);
              n = !0
            ) {
              var l = i.value;
              switch (l) {
                case "stream":
                  this.stream = e.stream;
                  break;
                case "backward":
                  ((this.backward = e.backward),
                    (this.$2 = this.stream.buffer.byteLength));
                  break;
                case "length":
                  this.$1 = e.length;
                  break;
                case "start":
                  this.$2 = e.start;
                  break;
                case "appendBlock":
                  this.appendBlock = e.appendBlock;
                  break;
                case "view":
                  this.stream = new t({ view: e.view });
                  break;
                case "buffer":
                  this.stream = new t({ buffer: e.buffer });
                  break;
                case "string":
                  this.stream = new t({ string: e.string });
                  break;
                case "hexstring":
                  this.stream = new t({ hexstring: e.hexstring });
                  break;
                default:
              }
            }
          } catch (e) {
            ((r = !0), (o = e));
          } finally {
            try {
              !n && a.return && a.return();
            } finally {
              if (r) throw o;
            }
          }
        }
        var n = e.prototype;
        return (
          (n.resetPosition = function () {
            ((this.$2 = this.prevStart), (this.$1 = this.prevLength));
          }),
          (n.findPattern = function (t, n) {
            (n === void 0 && (n = null),
              (n == null || n > this.length) && (n = this.length));
            var e = this.stream.findPattern(
              t,
              this.start,
              this.length,
              this.backward,
            );
            if (e == -1) return e;
            if (this.backward) {
              if (e < this.start - t.buffer.byteLength - n) return -1;
            } else if (e > this.start + t.buffer.byteLength + n) return -1;
            return ((this.start = e), e);
          }),
          (n.findFirstIn = function (t, n) {
            (n === void 0 && (n = null),
              (n == null || n > this.length) && (n = this.length));
            var e = this.stream.findFirstIn(
              t,
              this.start,
              this.length,
              this.backward,
            );
            if (e.id == -1) return e;
            if (this.backward) {
              if (e.position < this.start - t[e.id].buffer.byteLength - n)
                return {
                  id: -1,
                  position: this.backward ? 0 : this.start + this.length,
                };
            } else if (e.position > this.start + t[e.id].buffer.byteLength + n)
              return {
                id: -1,
                position: this.backward ? 0 : this.start + this.length,
              };
            return ((this.start = e.position), e);
          }),
          (n.findAllIn = function (t) {
            var e = this.backward ? this.start - this.length : this.start;
            return this.stream.findAllIn(t, e, this.length);
          }),
          (n.findFirstNotIn = function (n, r) {
            (r === void 0 && (r = null),
              (r == null || r > this.$1) && (r = this.$1));
            var e = this.$3.findFirstNotIn(n, this.$2, this.$1, this.backward);
            if (e.left.id == -1 && e.right.id == -1) return e;
            if (this.backward) {
              if (
                e.right.id != -1 &&
                e.right.position < this.$2 - n[e.right.id].$4.byteLength - r
              )
                return {
                  left: { id: -1, position: this.$2 },
                  right: { id: -1, position: 0 },
                  value: new t(),
                };
            } else if (
              e.left.id != -1 &&
              e.left.position > this.$2 + n[e.left.id].$4.byteLength + r
            )
              return {
                left: { id: -1, position: this.$2 },
                right: { id: -1, position: 0 },
                value: new t(),
              };
            return (
              this.backward
                ? e.left.id == -1
                  ? (this.start = 0)
                  : (this.start = e.left.position)
                : e.right.id == -1
                  ? (this.start = this.$2 + this.$1)
                  : (this.start = e.right.position),
              e
            );
          }),
          (n.findAllNotIn = function (t) {
            var e = this.backward ? this.$2 - this.$1 : this.$2;
            return this.$3.findAllNotIn(t, e, this.$1);
          }),
          (n.findFirstSequence = function (n, r, o) {
            (r === void 0 && (r = null),
              o === void 0 && (o = null),
              (r == null || r > this.$1) && (r = this.$1),
              (o == null || o > r) && (o = r));
            var e = this.$3.findFirstSequence(n, this.$2, r, this.backward);
            if (e.value.buffer.byteLength == 0) return e;
            if (this.backward) {
              if (e.position < this.$2 - e.value.$4.byteLength - o)
                return { position: -1, value: new t() };
            } else if (e.position > this.$2 + e.value.$4.byteLength + o)
              return { position: -1, value: new t() };
            return ((this.start = e.position), e);
          }),
          (n.findAllSequences = function (t) {
            var e = this.backward ? this.start - this.length : this.start;
            return this.stream.findAllSequences(t, e, this.length);
          }),
          (n.findPairedPatterns = function (t, n, r) {
            (r === void 0 && (r = null),
              (r == null || r > this.length) && (r = this.length));
            var e = this.backward ? this.start - this.length : this.start,
              o = this.stream.findPairedPatterns(t, n, e, this.length);
            if (o.length) {
              if (this.backward) {
                if (o[0].right < this.start - n.buffer.byteLength - r)
                  return [];
              } else if (o[0].left > this.start + t.buffer.byteLength + r)
                return [];
            }
            return o;
          }),
          (n.findPairedArrays = function (t, n, r) {
            (r === void 0 && (r = null),
              (r == null || r > this.length) && (r = this.length));
            var e = this.backward ? this.start - this.length : this.start,
              o = this.stream.findPairedArrays(t, n, e, this.length);
            if (o.length) {
              if (this.backward) {
                if (
                  o[0].right.position <
                  this.start - n[o[0].right.id].buffer.byteLength - r
                )
                  return [];
              } else if (
                o[0].left.position >
                this.start + t[o[0].left.id].buffer.byteLength + r
              )
                return [];
            }
            return o;
          }),
          (n.replacePattern = function (t, n) {
            var e = this.backward ? this.start - this.length : this.start;
            return this.stream.replacePattern(t, n, e, this.length);
          }),
          (n.skipPatterns = function (t) {
            var e = this.stream.skipPatterns(
              t,
              this.start,
              this.length,
              this.backward,
            );
            return ((this.start = e), e);
          }),
          (n.skipNotPatterns = function (t) {
            var e = this.stream.skipNotPatterns(
              t,
              this.start,
              this.length,
              this.backward,
            );
            return e == -1 ? -1 : ((this.start = e), e);
          }),
          (n.append = function (t) {
            (this.$2 + t.$4.byteLength > this.$3.$4.byteLength &&
              (t.$4.byteLength > this.appendBlock &&
                (this.appendBlock = t.$4.byteLength + 1e3),
              this.$3.realloc(this.$3.$4.byteLength + this.appendBlock)),
              this.$3.$5.set(t.$5, this.$2),
              (this.$1 += t.$4.byteLength * 2),
              (this.start = this.$2 + t.$4.byteLength),
              (this.prevLength -= t.$4.byteLength * 2));
          }),
          (n.appendView = function (t) {
            (this.$2 + t.length > this.$3.$4.byteLength &&
              (t.length > this.appendBlock &&
                (this.appendBlock = t.length + 1e3),
              this.$3.realloc(this.$3.$4.byteLength + this.appendBlock)),
              this.$3.$5.set(t, this.$2),
              (this.$1 += t.length * 2),
              (this.start = this.$2 + t.length),
              (this.prevLength -= t.length * 2));
          }),
          (n.appendChar = function (t) {
            (this.$2 + 1 > this.$3.$4.byteLength &&
              (1 > this.appendBlock && (this.appendBlock = 1e3),
              this.$3.realloc(this.$3.$4.byteLength + this.appendBlock)),
              (this.$3.$5[this.$2] = t),
              (this.$1 += 2),
              (this.start = this.$2 + 1),
              (this.prevLength -= 2));
          }),
          (n.appendUint16 = function (t) {
            this.$2 + 2 > this.$3.$4.byteLength &&
              (2 > this.appendBlock && (this.appendBlock = 1e3),
              this.$3.realloc(this.$3.$4.byteLength + this.appendBlock));
            var e = new Uint16Array([t]),
              n = new Uint8Array(e.buffer);
            ((this.$3.$5[this.$2] = n[1]),
              (this.$3.$5[this.$2 + 1] = n[0]),
              (this.$1 += 4),
              (this.start = this.$2 + 2),
              (this.prevLength -= 4));
          }),
          (n.appendUint24 = function (t) {
            this.$2 + 3 > this.$3.$4.byteLength &&
              (3 > this.appendBlock && (this.appendBlock = 1e3),
              this.$3.realloc(this.$3.$4.byteLength + this.appendBlock));
            var e = new Uint32Array([t]),
              n = new Uint8Array(e.buffer);
            ((this.$3.$5[this.$2] = n[2]),
              (this.$3.$5[this.$2 + 1] = n[1]),
              (this.$3.$5[this.$2 + 2] = n[0]),
              (this.$1 += 6),
              (this.start = this.$2 + 3),
              (this.prevLength -= 6));
          }),
          (n.appendUint32 = function (t) {
            this.$2 + 4 > this.$3.$4.byteLength &&
              (4 > this.appendBlock && (this.appendBlock = 1e3),
              this.$3.realloc(this.$3.$4.byteLength + this.appendBlock));
            var e = new Uint32Array([t]),
              n = new Uint8Array(e.buffer);
            ((this.$3.$5[this.$2] = n[3]),
              (this.$3.$5[this.$2 + 1] = n[2]),
              (this.$3.$5[this.$2 + 2] = n[1]),
              (this.$3.$5[this.$2 + 3] = n[0]),
              (this.$1 += 8),
              (this.start = this.$2 + 4),
              (this.prevLength -= 8));
          }),
          (n.getBlock = function (t, n) {
            if ((n === void 0 && (n = !0), this.$1 <= 0)) return [];
            this.$1 < t && (t = this.$1);
            var e;
            if (this.backward) {
              var r = this.$3.$4.slice(this.$1 - t, this.$1),
                o = new Uint8Array(r);
              e = new Array(t);
              for (var a = 0; a < t; a++) e[t - 1 - a] = o[a];
            } else {
              var i = this.$3.$4.slice(this.$2, this.$2 + t);
              e = Array.from(new Uint8Array(i));
            }
            return (n && (this.start += this.backward ? -1 * t : t), e);
          }),
          (n.getUint16 = function (t) {
            t === void 0 && (t = !0);
            var e = this.getBlock(2, t);
            if (e.length < 2) return 0;
            var n = new Uint16Array(1),
              r = new Uint8Array(n.buffer);
            return ((r[0] = e[1]), (r[1] = e[0]), n[0]);
          }),
          (n.getInt16 = function (t) {
            t === void 0 && (t = !0);
            var e = this.getBlock(2, t);
            if (e.length < 2) return 0;
            var n = new Int16Array(1),
              r = new Uint8Array(n.buffer);
            return ((r[0] = e[1]), (r[1] = e[0]), n[0]);
          }),
          (n.getUint24 = function (t) {
            t === void 0 && (t = !0);
            var e = this.getBlock(3, t);
            if (e.length < 3) return 0;
            for (
              var n = new Uint32Array(1), r = new Uint8Array(n.buffer), o = 3;
              o >= 1;
              o--
            )
              r[3 - o] = e[o - 1];
            return n[0];
          }),
          (n.getUint32 = function (t) {
            t === void 0 && (t = !0);
            var e = this.getBlock(4, t);
            if (e.length < 4) return 0;
            for (
              var n = new Uint32Array(1), r = new Uint8Array(n.buffer), o = 3;
              o >= 0;
              o--
            )
              r[3 - o] = e[o];
            return n[0];
          }),
          (n.getInt32 = function (t) {
            t === void 0 && (t = !0);
            var e = this.getBlock(4, t);
            if (e.length < 4) return 0;
            for (
              var n = new Int32Array(1), r = new Uint8Array(n.buffer), o = 3;
              o >= 0;
              o--
            )
              r[3 - o] = e[o];
            return n[0];
          }),
          babelHelpers.createClass(e, [
            {
              key: "stream",
              get: function () {
                return this.$3;
              },
              set: function (t) {
                ((this.$3 = t),
                  (this.prevLength = this.$1),
                  (this.$1 = t.$4.byteLength),
                  (this.prevStart = this.$2),
                  (this.$2 = 0));
              },
            },
            {
              key: "length",
              get: function () {
                return this.appendBlock ? this.start : this.$1;
              },
              set: function (t) {
                ((this.prevLength = this.$1), (this.$1 = t));
              },
            },
            {
              key: "start",
              get: function () {
                return this.$2;
              },
              set: function (t) {
                t > this.stream.buffer.byteLength ||
                  ((this.prevStart = this.$2),
                  (this.prevLength = this.$1),
                  (this.$1 -= this.backward ? this.$2 - t : t - this.$2),
                  (this.$2 = t));
              },
            },
            {
              key: "buffer",
              get: function () {
                return this.$3.$4.slice(0, this.$1);
              },
            },
          ])
        );
      })();
      e.SeqStream = n;
      function r(e, t, n, r, o) {
        if (
          (r === void 0 && (r = null),
          o === void 0 && (o = null),
          r === null && (r = 0),
          r > e.buffer.byteLength - 1)
        )
          return !1;
        (o === null && (o = e.buffer.byteLength - r),
          o > e.buffer.byteLength - r && (o = e.buffer.byteLength - r));
        var a;
        r == 0 && o == e.buffer.byteLength
          ? (a = e.view)
          : (a = new Uint8Array(e.buffer, r, o));
        for (var i = new Array(n), l = 0, s = 0, u = t.length; s < o; ) {
          var c = 0;
          i[l] = {};
          for (var d = 0; d < u; d++) {
            if (t[d].maxlength == 0) {
              "defaultValue" in t[d] && (i[l][t[d].name] = t[d].defaultValue);
              continue;
            }
            for (
              var m = new Array(t[d].maxlength), p = 0;
              p < t[d].maxlength;
              p++
            )
              m[p] = a[s++];
            var _ = t[d].func(m);
            if (_.status == -1)
              return i.length == 1 ? [] : i.slice(0, i.length - 1);
            (t[d].type != "check" && (i[l][t[d].name] = _.value),
              (s -= t[d].maxlength - _.length),
              (c += _.length));
          }
          i[l++].structureLength = c;
        }
        return i;
      }
      var o = [
          "00000000",
          "00000001",
          "00000010",
          "00000011",
          "00000100",
          "00000101",
          "00000110",
          "00000111",
          "00001000",
          "00001001",
          "00001010",
          "00001011",
          "00001100",
          "00001101",
          "00001110",
          "00001111",
          "00010000",
          "00010001",
          "00010010",
          "00010011",
          "00010100",
          "00010101",
          "00010110",
          "00010111",
          "00011000",
          "00011001",
          "00011010",
          "00011011",
          "00011100",
          "00011101",
          "00011110",
          "00011111",
          "00100000",
          "00100001",
          "00100010",
          "00100011",
          "00100100",
          "00100101",
          "00100110",
          "00100111",
          "00101000",
          "00101001",
          "00101010",
          "00101011",
          "00101100",
          "00101101",
          "00101110",
          "00101111",
          "00110000",
          "00110001",
          "00110010",
          "00110011",
          "00110100",
          "00110101",
          "00110110",
          "00110111",
          "00111000",
          "00111001",
          "00111010",
          "00111011",
          "00111100",
          "00111101",
          "00111110",
          "00111111",
          "01000000",
          "01000001",
          "01000010",
          "01000011",
          "01000100",
          "01000101",
          "01000110",
          "01000111",
          "01001000",
          "01001001",
          "01001010",
          "01001011",
          "01001100",
          "01001101",
          "01001110",
          "01001111",
          "01010000",
          "01010001",
          "01010010",
          "01010011",
          "01010100",
          "01010101",
          "01010110",
          "01010111",
          "01011000",
          "01011001",
          "01011010",
          "01011011",
          "01011100",
          "01011101",
          "01011110",
          "01011111",
          "01100000",
          "01100001",
          "01100010",
          "01100011",
          "01100100",
          "01100101",
          "01100110",
          "01100111",
          "01101000",
          "01101001",
          "01101010",
          "01101011",
          "01101100",
          "01101101",
          "01101110",
          "01101111",
          "01110000",
          "01110001",
          "01110010",
          "01110011",
          "01110100",
          "01110101",
          "01110110",
          "01110111",
          "01111000",
          "01111001",
          "01111010",
          "01111011",
          "01111100",
          "01111101",
          "01111110",
          "01111111",
          "10000000",
          "10000001",
          "10000010",
          "10000011",
          "10000100",
          "10000101",
          "10000110",
          "10000111",
          "10001000",
          "10001001",
          "10001010",
          "10001011",
          "10001100",
          "10001101",
          "10001110",
          "10001111",
          "10010000",
          "10010001",
          "10010010",
          "10010011",
          "10010100",
          "10010101",
          "10010110",
          "10010111",
          "10011000",
          "10011001",
          "10011010",
          "10011011",
          "10011100",
          "10011101",
          "10011110",
          "10011111",
          "10100000",
          "10100001",
          "10100010",
          "10100011",
          "10100100",
          "10100101",
          "10100110",
          "10100111",
          "10101000",
          "10101001",
          "10101010",
          "10101011",
          "10101100",
          "10101101",
          "10101110",
          "10101111",
          "10110000",
          "10110001",
          "10110010",
          "10110011",
          "10110100",
          "10110101",
          "10110110",
          "10110111",
          "10111000",
          "10111001",
          "10111010",
          "10111011",
          "10111100",
          "10111101",
          "10111110",
          "10111111",
          "11000000",
          "11000001",
          "11000010",
          "11000011",
          "11000100",
          "11000101",
          "11000110",
          "11000111",
          "11001000",
          "11001001",
          "11001010",
          "11001011",
          "11001100",
          "11001101",
          "11001110",
          "11001111",
          "11010000",
          "11010001",
          "11010010",
          "11010011",
          "11010100",
          "11010101",
          "11010110",
          "11010111",
          "11011000",
          "11011001",
          "11011010",
          "11011011",
          "11011100",
          "11011101",
          "11011110",
          "11011111",
          "11100000",
          "11100001",
          "11100010",
          "11100011",
          "11100100",
          "11100101",
          "11100110",
          "11100111",
          "11101000",
          "11101001",
          "11101010",
          "11101011",
          "11101100",
          "11101101",
          "11101110",
          "11101111",
          "11110000",
          "11110001",
          "11110010",
          "11110011",
          "11110100",
          "11110101",
          "11110110",
          "11110111",
          "11111000",
          "11111001",
          "11111010",
          "11111011",
          "11111100",
          "11111101",
          "11111110",
          "11111111",
        ],
        a = (function () {
          function e(e) {
            (e === void 0 && (e = {}),
              (this.buffer = new ArrayBuffer(0)),
              (this.view = new Uint8Array(this.buffer)),
              (this.bitsCount = 0));
            var t = !0,
              n = !1,
              r = void 0;
            try {
              for (
                var o =
                    Object.keys(e)[
                      typeof Symbol == "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ](),
                  a;
                !(t = (a = o.next()).done);
                t = !0
              ) {
                var i = a.value;
                switch (i) {
                  case "byteStream":
                    this.fromByteStream(e.byteStream);
                    break;
                  case "view":
                    this.fromUint8Array(e.view);
                    break;
                  case "buffer":
                    this.fromArrayBuffer(e.buffer);
                    break;
                  case "string":
                    this.fromString(e.string);
                    break;
                  case "uint32":
                    this.fromUint32(e.uint32);
                    break;
                  case "bitsCount":
                    this.bitsCount = e.bitsCount;
                    break;
                  default:
                }
              }
            } catch (e) {
              ((n = !0), (r = e));
            } finally {
              try {
                !t && o.return && o.return();
              } finally {
                if (n) throw r;
              }
            }
          }
          var n = e.prototype;
          return (
            (n.clear = function () {
              ((this.buffer = new ArrayBuffer(0)),
                (this.view = new Uint8Array(this.buffer)),
                (this.bitsCount = 0));
            }),
            (n.fromByteStream = function (t) {
              ((this.buffer = t.buffer.slice(0)),
                (this.view = new Uint8Array(this.buffer)),
                (this.bitsCount = this.view.length << 3));
            }),
            (n.fromArrayBuffer = function (t) {
              ((this.buffer = t.slice(0)),
                (this.view = new Uint8Array(this.buffer)),
                (this.bitsCount = this.view.length << 3));
            }),
            (n.fromUint8Array = function (t) {
              ((this.buffer = new ArrayBuffer(t.length)),
                (this.view = new Uint8Array(this.buffer)),
                this.view.set(t),
                (this.bitsCount = this.view.length << 3));
            }),
            (n.fromString = function (t) {
              var e = t.length;
              ((this.buffer = new ArrayBuffer((e >> 3) + (e % 8 ? 1 : 0))),
                (this.view = new Uint8Array(this.buffer)),
                (this.bitsCount = ((e >> 3) + 1) << 3));
              for (var n = 0, r = 0; r < e; r++)
                (t[r] == "1" && (this.view[n] |= 1 << (7 - (r % 8))),
                  r && (r + 1) % 8 == 0 && n++);
              (e % 8 && this.shiftRight(8 - (e % 8)), (this.bitsCount = e));
            }),
            (n.fromUint32 = function (t) {
              ((this.buffer = new ArrayBuffer(4)),
                (this.view = new Uint8Array(this.buffer)));
              for (
                var e = new Uint32Array([t]),
                  n = new Uint8Array(e.buffer),
                  r = 3;
                r >= 0;
                r--
              )
                this.view[r] = n[3 - r];
              this.bitsCount = 32;
            }),
            (n.toString = function (t, n) {
              (t === void 0 && (t = null),
                n === void 0 && (n = null),
                t == null && (t = 0),
                (t >= this.view.length || t < 0) && (t = 0),
                n == null && (n = this.view.length - t),
                (n >= this.view.length || n < 0) && (n = this.view.length - t));
              for (var e = [], r = t; r < t + n; r++) e.push(o[this.view[r]]);
              return e.join("").slice((this.view.length << 3) - this.bitsCount);
            }),
            (n.shiftRight = function (t, n) {
              if ((n === void 0 && (n = !0), this.view.length != 0)) {
                if (t < 0 || t > 8)
                  throw new Error('The "shift" parameter must be in range 0-8');
                if (t > this.bitsCount)
                  throw new Error(
                    'The "shift" parameter can not be bigger than "this.bitsCount"',
                  );
                var e = 255 >> (8 - t);
                this.view[this.view.length - 1] >>= t;
                for (var r = this.view.length - 2; r >= 0; r--)
                  ((this.view[r + 1] |= (this.view[r] & e) << (8 - t)),
                    (this.view[r] >>= t));
                ((this.bitsCount -= t),
                  this.bitsCount == 0 && this.clear(),
                  n && this.shrink());
              }
            }),
            (n.shiftLeft = function (t) {
              if (this.view.length != 0) {
                if (t < 0 || t > 8)
                  throw new Error('The "shift" parameter must be in range 0-8');
                if (t > this.bitsCount)
                  throw new Error(
                    'The "shift" parameter can not be bigger than "this.bitsCount"',
                  );
                var e = this.bitsCount & 7;
                if (e > t) this.view[0] &= 255 >> (e + t);
                else {
                  var n = new ArrayBuffer(this.buffer.byteLength - 1),
                    r = new Uint8Array(n);
                  (r.set(
                    new Uint8Array(this.buffer, 1, this.buffer.byteLength - 1),
                  ),
                    (r[0] &= 255 >> (t - e)),
                    (this.buffer = n.slice(0)),
                    (this.view = new Uint8Array(this.buffer)));
                }
                ((this.bitsCount -= t), this.bitsCount == 0 && this.clear());
              }
            }),
            (n.slice = function (n, r) {
              (n === void 0 && (n = null), r === void 0 && (r = null));
              var t = 0;
              if (
                (this.bitsCount % 8 && (t = 8 - (this.bitsCount % 8)),
                (n += t),
                (r += t),
                n == null && (n = 0),
                n < 0 || n > (this.view.length << 3) - 1)
              )
                return new e();
              if (
                (r == null && (r = (this.view.length << 3) - 1),
                r < 0 || r > (this.view.length << 3) - 1)
              )
                return new e();
              if (r - n + 1 > this.bitsCount) return new e();
              var o = n >> 3,
                a = n & 7,
                i = r >> 3,
                l = r & 7,
                s = i - o == 0 ? 1 : i - o + 1,
                u = new e();
              return (
                (u.buffer = new ArrayBuffer(s)),
                (u.view = new Uint8Array(u.buffer)),
                (u.bitsCount = s << 3),
                u.view.set(new Uint8Array(this.buffer, o, s)),
                (u.view[0] &= 255 >> a),
                (u.view[s] &= 255 << (7 - l)),
                7 - l && u.shiftRight(7 - l, !1),
                (u.bitsCount = r - n + 1),
                u.shrink(),
                u
              );
            }),
            (n.copy = function (n, r) {
              return (
                n === void 0 && (n = null),
                r === void 0 && (r = null),
                n < 0 || n > (this.view.length << 3) - 1
                  ? new e()
                  : (r === null && (r = (this.view.length << 3) - n - 1),
                    r > this.bitsCount ? new e() : this.slice(n, n + r - 1))
              );
            }),
            (n.shrink = function () {
              var e = (this.bitsCount >> 3) + (this.bitsCount % 8 ? 1 : 0);
              if (e < this.buffer.byteLength) {
                var t = new ArrayBuffer(e),
                  n = new Uint8Array(t);
                (n.set(
                  new Uint8Array(this.buffer, this.buffer.byteLength - e, e),
                ),
                  (this.buffer = t.slice(0)),
                  (this.view = new Uint8Array(this.buffer)));
              }
            }),
            (n.reverseBytes = function () {
              for (var e = 0; e < this.view.length; e++)
                this.view[e] =
                  ((((this.view[e] * 2050) & 139536) |
                    ((this.view[e] * 32800) & 558144)) *
                    65793) >>
                  16;
              if (this.bitsCount % 8) {
                var t = (this.bitsCount >> 3) + (this.bitsCount % 8 ? 1 : 0);
                this.view[this.view.length - t] >>= 8 - (this.bitsCount & 7);
              }
            }),
            (n.reverseValue = function () {
              for (
                var e = this.toString(), t = e.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[t - 1 - r] = e[r];
              this.fromString(n.join(""));
            }),
            (n.getNumberValue = function () {
              var e = this.buffer.byteLength - 1;
              if (e > 3) return -1;
              if (e == -1) return 0;
              for (
                var t = new Uint32Array(1), n = new Uint8Array(t.buffer), r = e;
                r >= 0;
                r--
              )
                n[e - r] = this.view[r];
              return t[0];
            }),
            (n.findPattern = function (n, r, o, a) {
              (r === void 0 && (r = null),
                o === void 0 && (o = null),
                a === void 0 && (a = !1));
              var e = new t({ string: this.toString() }),
                i = new t({ string: n.toString() });
              return e.findPattern(i, r, o, a);
            }),
            (n.findFirstIn = function (n, r, o, a) {
              (r === void 0 && (r = null),
                o === void 0 && (o = null),
                a === void 0 && (a = !1));
              for (
                var e = new t({ string: this.toString() }),
                  i = new Array(n.length),
                  l = 0;
                l < n.length;
                l++
              )
                i[l] = new t({ string: n[l].toString() });
              return e.findFirstIn(i, r, o, a);
            }),
            (n.findAllIn = function (n, r, o) {
              (r === void 0 && (r = null), o === void 0 && (o = null));
              for (
                var e = new t({ string: this.toString() }),
                  a = new Array(n.length),
                  i = 0;
                i < n.length;
                i++
              )
                a[i] = new t({ string: n[i].toString() });
              return e.findAllIn(a, r, o);
            }),
            (n.findAllPatternIn = function (n, r, o) {
              (r === void 0 && (r = null), o === void 0 && (o = null));
              var e = new t({ string: this.toString() }),
                a = new t({ string: n.toString() });
              return e.findAllPatternIn(a, r, o);
            }),
            (n.findFirstNotIn = function (n, r, o, a) {
              (r === void 0 && (r = null),
                o === void 0 && (o = null),
                a === void 0 && (a = !1));
              for (
                var e = new t({ string: this.toString() }),
                  i = new Array(n.length),
                  l = 0;
                l < n.length;
                l++
              )
                i[l] = new t({ string: n[l].toString() });
              return e.findFirstNotIn(i, r, o, a);
            }),
            (n.findAllNotIn = function (n, r, o) {
              (r === void 0 && (r = null), o === void 0 && (o = null));
              for (
                var e = new t({ string: this.toString() }),
                  a = new Array(n.length),
                  i = 0;
                i < n.length;
                i++
              )
                a[i] = new t({ string: n[i].toString() });
              return e.findAllNotIn(a, r, o);
            }),
            (n.findFirstSequence = function (n, r, o, a) {
              (r === void 0 && (r = null),
                o === void 0 && (o = null),
                a === void 0 && (a = !1));
              for (
                var e = new t({ string: this.toString() }),
                  i = new Array(n.length),
                  l = 0;
                l < n.length;
                l++
              )
                i[l] = new t({ string: n[l].toString() });
              return e.findFirstSequence(i, r, o, a);
            }),
            (n.findAllSequences = function (n, r, o) {
              for (
                var e = new t({ string: this.toString() }),
                  a = new Array(n.length),
                  i = 0;
                i < n.length;
                i++
              )
                a[i] = new t({ string: n[i].toString() });
              return e.findAllSequences(a, r, o);
            }),
            (n.findPairedPatterns = function (n, r, o, a) {
              (o === void 0 && (o = null), a === void 0 && (a = null));
              var e = new t({ string: this.toString() }),
                i = new t({ string: n.toString() }),
                l = new t({ string: r.toString() });
              return e.findPairedPatterns(i, l, o, a);
            }),
            (n.findPairedArrays = function (n, r, o, a) {
              (o === void 0 && (o = null), a === void 0 && (a = null));
              for (
                var e = new t({ string: this.toString() }),
                  i = new Array(n.length),
                  l = 0;
                l < n.length;
                l++
              )
                i[l] = new t({ string: n[l].toString() });
              for (var s = new Array(r.length), u = 0; u < r.length; u++)
                s[u] = new t({ string: r[u].toString() });
              return e.findPairedArrays(i, s, o, a);
            }),
            (n.replacePattern = function (n, r, o, a) {
              (o === void 0 && (o = null), a === void 0 && (a = null));
              var e = new t({ string: this.toString() }),
                i = new t({ string: n.toString() }),
                l = new t({ string: r.toString() });
              return e.findPairedPatterns(i, l, o, a)
                ? (this.fromString(e.toString()), !0)
                : !1;
            }),
            (n.skipPatterns = function (n, r, o, a) {
              for (
                var e = new t({ string: this.toString() }),
                  i = new Array(n.length),
                  l = 0;
                l < n.length;
                l++
              )
                i[l] = new t({ string: n[l].toString() });
              return e.skipPatterns(i, r, o, a);
            }),
            (n.skipNotPatterns = function (n, r, o, a) {
              for (
                var e = new t({ string: this.toString() }),
                  i = new Array(n.length),
                  l = 0;
                l < n.length;
                l++
              )
                i[l] = new t({ string: n[l].toString() });
              return e.skipNotPatterns(i, r, o, a);
            }),
            (n.append = function (t) {
              this.fromString([this.toString(), t.toString()].join(""));
            }),
            e
          );
        })();
      e.BitStream = a;
      var i = (function () {
        function e(e) {
          (e === void 0 && (e = {}),
            (this.stream = new a()),
            (this.$1 = 0),
            (this.$2 = this.stream.bitsCount),
            (this.backward = !1),
            (this.appendBlock = 0));
          var t = !0,
            n = !1,
            r = void 0;
          try {
            for (
              var o =
                  Object.keys(e)[
                    typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
                  ](),
                i;
              !(t = (i = o.next()).done);
              t = !0
            ) {
              var l = i.value;
              switch (l) {
                case "stream":
                case "start":
                case "length":
                case "backward":
                case "appendBlock":
                  this[l] = e[l];
                  break;
                default:
              }
            }
          } catch (e) {
            ((n = !0), (r = e));
          } finally {
            try {
              !t && o.return && o.return();
            } finally {
              if (n) throw r;
            }
          }
        }
        var t = e.prototype;
        return (
          (t.getBits = function (t) {
            this.start + t > this.stream.bitsCount &&
              (t = this.stream.bitsCount - this.start);
            var e;
            return (
              this.backward
                ? ((e = this.stream.copy(this.start - t, t)),
                  (this.start -= e.bitsCount))
                : ((e = this.stream.copy(this.start, t)),
                  (this.start += e.bitsCount)),
              e
            );
          }),
          (t.getBitsString = function (t) {
            this.start + t > this.stream.bitsCount &&
              (t = this.stream.bitsCount - this.start);
            var e = [],
              n;
            this.backward ? (n = this.start - t) : (n = this.start);
            var r = this.start + t - 1,
              a = 0;
            (this.stream.bitsCount % 8 && (a = 8 - (this.stream.bitsCount % 8)),
              (n += a),
              (r += a));
            for (
              var i = n >> 3,
                l = n & 7,
                s = r >> 3,
                u = r & 7,
                c = i + (s - i == 0 ? 1 : s - i + 1),
                d = i;
              d < c;
              d++
            ) {
              var m = o[this.stream.view[d]];
              (d == i && (m = m.slice(l)),
                d == c - 1 && (m = m.slice(0, u - 7 + m.length)),
                e.push(m));
            }
            return (
              (e = e.join("")),
              this.backward
                ? (this.start -= e.length)
                : (this.start += e.length),
              e
            );
          }),
          (t.getBitsReversedValue = function (t) {
            var e = this.getBitsString(t),
              n = e.length,
              r,
              o = 8 - (n % 8),
              a = new Array(n),
              i = new Uint32Array(1),
              l = new Uint8Array(i.buffer, 0, 4),
              s;
            if (n > 32) return -1;
            for (t == 32 ? (r = 3) : (r = (n - 1) >> 3), s = 0; s < n; s++)
              a[n - 1 - s] = e[s];
            for (s = o; s < o + n; s++)
              (a[s - o] == "1" && (l[r] |= 1 << (7 - (s % 8))),
                s && (s + 1) % 8 == 0 && r--);
            return i[0];
          }),
          (t.toString = function () {
            var e = this.stream.copy(this.start, this.length);
            return e.toString();
          }),
          babelHelpers.createClass(e, [
            {
              key: "start",
              get: function () {
                return this.$1;
              },
              set: function (t) {
                t > this.stream.bitsCount ||
                  ((this.$2 -= this.backward ? this.$1 - t : t - this.$1),
                  (this.$1 = t),
                  (this.prevStart = this.$1),
                  (this.prevLength = this.$2));
              },
            },
            {
              key: "length",
              get: function () {
                return this.$2;
              },
              set: function (t) {
                t > this.stream.bitsCount ||
                  ((this.prevLength = this.$2), (this.$2 = t));
              },
            },
            {
              key: "stream",
              get: function () {
                return this.$3;
              },
              set: function (t) {
                ((this.$3 = t),
                  (this.prevLength = this.$2),
                  (this.$2 = t.bitsCount),
                  (this.prevStart = this.$1),
                  (this.$1 = this.backward ? this.length : 0));
              },
            },
          ])
        );
      })();
      e.SeqBitStream = i;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
