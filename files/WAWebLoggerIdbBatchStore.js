__d(
  "WAWebLoggerIdbBatchStore",
  ["WAWebLoggerOptimizer"],
  function (t, n, r, o, a, i, l) {
    var e = 200,
      s = 250,
      u = "[sendlogs]",
      c = 100,
      d = [5e3, 25e3, 15e4].map(function (e) {
        return e - 1;
      });
    async function m(e, t, n) {
      var r = v(t);
      if (r.length !== 0) {
        n != null && !$(n) && (await E(e, n, P(r[0])));
        for (var o of L(r)) {
          var a = o.chunkCount,
            i = o.first,
            l = o.last;
          (l - i + 1 > a &&
            (await e.where("line").between(i, l, !0, !0).delete()),
            await I(e, l));
        }
        await e.bulkPut(r);
      }
    }
    function p(e, t, n, r) {
      (t === void 0 && (t = 0),
        n === void 0 && (n = !1),
        r === void 0 && (r = 1 / 0));
      var o = { from: t, to: r };
      return new Promise(function (t, r) {
        e.transaction("r", e.logs, function () {
          return _(e.logs, o, n);
        })
          .then(t)
          .catch(r);
      });
    }
    async function _(e, t, n) {
      var r = t.from - s;
      if (!n) {
        var o = await f(e, r, t.to);
        return (await g(e, o, t)).map(C);
      }
      var a = await e
          .where("timestamp")
          .between(r, t.to, !0, !1)
          .reverse()
          .until(function (e) {
            return e.log.includes(u);
          }, !0)
          .toArray(),
        i = a[a.length - 1];
      if (i == null || !i.log.includes(u)) return b(await g(e, a, t), 0);
      var l = Math.max(i.timestamp - s, r),
        c = await e
          .where("timestamp")
          .between(l, i.timestamp, !0, !0)
          .toArray(),
        d = await g(e, y([].concat(c, a)), t),
        m = x(d);
      if (m >= 0 && d[m].timestamp - s >= l) return b(d, m);
      var p = await g(e, await f(e, r, t.to), t);
      return b(p, Math.max(x(p), 0));
    }
    function f(e, t, n) {
      return e.where("timestamp").between(t, n, !0, !1).toArray();
    }
    async function g(e, t, n) {
      var r = await h(e, t);
      return T(t, r)
        .filter(function (e) {
          return e.timestamp >= n.from && e.timestamp < n.to;
        })
        .sort(function (e, t) {
          return e.timestamp - t.timestamp || e.slot - t.slot;
        });
    }
    async function h(t, n) {
      var r = [],
        o = n
          .filter(function (e) {
            return $(e) && e.line > P(e);
          })
          .map(function (e) {
            return [P(e), e.line - 1];
          })
          .sort(function (e, t) {
            return e[0] - t[0];
          });
      for (var a of o) {
        var i = a[0],
          l = a[1],
          s = r[r.length - 1];
        s != null && i - s[1] <= e
          ? (s[1] = Math.max(s[1], l))
          : r.push([i, l]);
      }
      var u = new Set();
      for (var c of r) {
        var d = c[0],
          m = c[1],
          p = await t.where("line").between(d, m, !0, !0).primaryKeys();
        p.forEach(function (e) {
          return u.add(e);
        });
      }
      return u;
    }
    function y(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          return t.set(e.line, e);
        }),
        Array.from(t.values())
      );
    }
    function C(e) {
      return {
        log: e.log.slice(0, o("WAWebLoggerOptimizer").TRIM_LENGTH),
        timestamp: e.timestamp,
      };
    }
    function b(e, t) {
      for (var n = [], r = t; r < e.length; r++) {
        var a = e[r].log.slice(0, o("WAWebLoggerOptimizer").TRIM_LENGTH);
        if (
          (n.push({ log: a, timestamp: e[r].timestamp }),
          a.includes(o("WAWebLoggerOptimizer").END_OF_UPLOAD))
        )
          break;
      }
      return n;
    }
    function v(e) {
      var t = [],
        n = [],
        r = 0;
      for (var o of e)
        (n.length > 0 && !S(n, r, o) && (t.push(R(n)), (n = []), (r = 0)),
          (r += (n.length > 0 ? 1 : 0) + o.log.length),
          n.push(o));
      return (n.length > 0 && t.push(R(n)), t);
    }
    function S(t, n, r) {
      var a = t[t.length - 1];
      return (
        r.line === a.line + 1 &&
        t.length < e &&
        n + 1 + r.log.length <= o("WAWebLoggerOptimizer").TRIM_LENGTH &&
        r.timestamp - t[0].timestamp <= s
      );
    }
    function R(e) {
      var t = e[e.length - 1],
        n = {
          line: t.line,
          log: e.map(function (e) {
            return e.log;
          }).join(`
`),
          timestamp: e[0].timestamp,
          count: t.count,
          ts: e.map(function (e) {
            return e.timestamp;
          }),
          lens: e.map(function (e) {
            return e.log.length;
          }),
        };
      return t.tableCapacity == null
        ? n
        : babelHelpers.extends({}, n, { tableCapacity: t.tableCapacity });
    }
    function L(e) {
      var t = [];
      for (var n of e) {
        var r = t[t.length - 1];
        r != null && P(n) === r.last + 1
          ? ((r.last = n.line), r.chunkCount++)
          : t.push({ first: P(n), last: n.line, chunkCount: 1 });
      }
      return t;
    }
    async function E(e, t, n) {
      var r = await k(e, t),
        o = r.findIndex($),
        a = (o < 0 ? r : r.slice(0, o)).reverse(),
        i = a
          .filter(function (e, t) {
            var r, o;
            return (
              ((r = (o = a[t + 1]) == null ? void 0 : o.line) != null
                ? r
                : n) !==
              e.line + 1
            );
          })
          .map(function (e) {
            return e.line;
          });
      for (var l of o < 0 ? [].concat(i, d) : i) await I(e, l);
    }
    async function k(e, t) {
      var n = t.count;
      if (n == null) return [t];
      var r = await e
        .where("count")
        .between(n - c + 1, n, !0, !0)
        .toArray();
      return r.reverse();
    }
    async function I(e, t) {
      var n = await e.where("line").above(t).limit(1).toArray(),
        r = n[0];
      r != null && $(r) && P(r) <= t && (await e.delete(r.line));
    }
    function T(e, t) {
      var n = e.flatMap(function (e) {
          return D(e).filter(function (n) {
            return n.slot === e.line || !t.has(n.slot);
          });
        }),
        r = new Map();
      for (var o of n) {
        var a = r.get(o.slot);
        (a == null || o.count > a) && r.set(o.slot, o.count);
      }
      return n.filter(function (e) {
        return r.get(e.slot) === e.count;
      });
    }
    function D(e) {
      var t,
        n = (t = e.count) != null ? t : -1 / 0,
        r = e.lens,
        o = e.ts;
      if (!$(e) || r == null || o == null)
        return [{ log: e.log, timestamp: e.timestamp, slot: e.line, count: n }];
      for (var a = [], i = 0, l = 0; l < r.length; l++) {
        var s = r.length - 1 - l;
        (a.push({
          log: e.log.slice(i, i + r[l]),
          timestamp: o[l],
          slot: e.line - s,
          count: n - s,
        }),
          (i += r[l] + 1));
      }
      return a;
    }
    function x(e) {
      for (var t = e.length - 1; t >= 0; t--)
        if (e[t].log.includes(u)) return t;
      return -1;
    }
    function $(e) {
      var t = e.lens,
        n = e.ts;
      return (
        Array.isArray(t) &&
        Array.isArray(n) &&
        t.length > 0 &&
        t.length === n.length
      );
    }
    function P(e) {
      var t, n;
      return (
        e.line -
        ((t = (n = e.lens) == null ? void 0 : n.length) != null ? t : 1) +
        1
      );
    }
    ((l.MAX_CHUNK_LINES = e),
      (l.MAX_CHUNK_SPAN_MS = s),
      (l.persistRows = m),
      (l.readLogs = p));
  },
  98,
);
