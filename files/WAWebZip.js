__d(
  "WAWebZip",
  ["WABinary", "WACrc32"],
  function (t, n, r, o, a, i, l) {
    var e = 33639248,
      s = 101010256,
      u = 67324752,
      c = 46,
      d = 22,
      m = 30,
      p = 0,
      _ = 0,
      f = 10;
    function g(e) {
      var t = e.getHours(),
        n = e.getMinutes(),
        r = e.getSeconds();
      return (((t << 6) | n) << 5) | (r / 2);
    }
    function h(e) {
      var t = e.getFullYear() - 1980,
        n = e.getMonth() + 1;
      return (((t << 4) | n) << 5) | e.getDate();
    }
    function y(e) {
      var t = e[0],
        n = e[1],
        r = n.crc,
        a = n.date,
        i = n.path,
        l = new (o("WABinary").Binary)(void 0, !0);
      return (
        l.ensureCapacity(m + i.length),
        l.writeUint32(u),
        l.writeUint8(f),
        l.writeUint8(_),
        l.writeUint16(0),
        l.writeUint16(p),
        l.writeUint16(g(a)),
        l.writeUint16(h(a)),
        l.writeUint32(r),
        l.writeUint32(t.size()),
        l.writeUint32(t.size()),
        l.writeUint16(i.length),
        l.writeUint16(0),
        l.writeString(i),
        l
      );
    }
    function C(t, n) {
      var r = t[0],
        a = t[1],
        i = a.crc,
        l = a.date,
        s = a.path,
        u = new (o("WABinary").Binary)(void 0, !0);
      return (
        u.ensureCapacity(c + s.length),
        u.writeUint32(e),
        u.writeUint8(f),
        u.writeUint8(_),
        u.writeUint8(f),
        u.writeUint8(_),
        u.writeUint16(0),
        u.writeUint16(p),
        u.writeUint16(g(l)),
        u.writeUint16(h(l)),
        u.writeUint32(i),
        u.writeUint32(r.size()),
        u.writeUint32(r.size()),
        u.writeUint16(s.length),
        u.writeUint16(0),
        u.writeUint16(0),
        u.writeUint16(0),
        u.writeUint16(0),
        u.writeUint32(0),
        u.writeUint32(n),
        u.writeString(s),
        u
      );
    }
    function b(e, t, n) {
      var r = new (o("WABinary").Binary)(void 0, !0);
      return (
        r.ensureCapacity(d),
        r.writeUint32(s),
        r.writeUint16(0),
        r.writeUint16(0),
        r.writeUint16(e),
        r.writeUint16(e),
        r.writeUint32(t),
        r.writeUint32(n),
        r.writeUint16(0),
        r
      );
    }
    var v = /[^\x00-\x7F]/g;
    function S(e) {
      return e.replace(/\\/, "/").replace(v, "");
    }
    var R = (function () {
      function e() {
        ((this.files = []), (this.filenameCount = {}));
      }
      var t = e.prototype;
      return (
        (t.add = function (t, n, o) {
          o === void 0 && (o = new Date());
          var e = S(n);
          (this.filenameCount[e] >= 0
            ? ((this.filenameCount[e] += 1),
              (e = e.replace(
                /\.(\w+)$/,
                " (" + this.filenameCount[e] + ").$1",
              )))
            : (this.filenameCount[e] = 0),
            this.files.push([t, { crc: r("WACrc32")(t), path: e, date: o }]));
        }),
        (t.create = function () {
          var e = 0,
            t = 0,
            n = 0,
            r = [],
            a = [];
          this.files.forEach(function (o, i) {
            var l = o[0],
              s = l.size(),
              u = y(o),
              c = C(o, n),
              d = u.size() + s;
            ((n += d),
              (e += d + c.size()),
              (t += c.size()),
              a.push(u, l),
              r.push(c));
          });
          var i = b(this.files.length, t, n),
            l = new (o("WABinary").Binary)(void 0, !0);
          return (
            l.ensureCapacity(e + i.size()),
            l.write.apply(l, a.concat(r, [i])),
            l
          );
        }),
        e
      );
    })();
    l.default = R;
  },
  98,
);
