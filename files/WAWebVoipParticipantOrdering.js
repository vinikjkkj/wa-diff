__d(
  "WAWebVoipParticipantOrdering",
  ["WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      if (e.length === 0 || t <= 0) return { pages: [], dominantSpeakers: [] };
      var i = null,
        l = [];
      for (var g of e)
        o("WAWebUserPrefsMeUser").isMeAccount(g) ? (i = g) : l.push(g);
      var h = i != null ? t - 1 : t,
        y = Math.max(1, Math.ceil((l.length + (i != null ? 1 : 0)) / t));
      if (a == null || a.pages.length === 0)
        return s({
          gridRanks: n,
          otherParticipants: l,
          page1Capacity: h,
          pageSize: t,
          participantStates: r,
          selfParticipant: i,
        });
      var C = u(l, a, h, n, r),
        b = c(
          y,
          t,
          i,
          C.previousPositions,
          C.jidToParticipant,
          C.newParticipants,
        );
      (d(
        b,
        C.idealPage1Jids,
        C.previousJidToPosition,
        C.jidToParticipant,
        C.participantScores,
        i,
        t,
        y,
      ),
        m(b, y, t, i),
        p(C.newParticipants, C.participantScores, b, y, t, i));
      var v = [];
      for (var S of b) {
        var R = S.filter(function (e) {
          return e != null;
        });
        R.length > 0 && v.push(R);
      }
      return (
        i != null && v.length > 0 && _(i, v),
        { pages: v, dominantSpeakers: f(v, n, r) }
      );
    }
    function s(e) {
      var t = e.gridRanks,
        n = e.otherParticipants,
        r = e.page1Capacity,
        o = e.pageSize,
        a = e.participantStates,
        i = e.selfParticipant,
        l = h(n, t, a),
        s = [],
        u = l.slice(0, r);
      (i != null && u.push(i), s.push(u));
      for (var c = r; c < l.length; ) (s.push(l.slice(c, c + o)), (c += o));
      return { pages: s, dominantSpeakers: f(s, t, a) };
    }
    function u(e, t, n, r, o) {
      var a = new Map(),
        i = new Set(),
        l = new Map();
      for (var s of e) {
        var u = s.toString();
        (a.set(u, g(u, r, o)), i.add(u), l.set(u, s));
      }
      for (var c = [], d = new Map(), m = 0; m < t.pages.length; m++)
        for (var p = t.pages[m], _ = 0; _ < p.length; _++) {
          var f = p[_],
            y = f.toString();
          if (i.has(y)) {
            var C = { pageIndex: m, indexInPage: _, participant: f };
            (c.push(C), d.set(y, C));
          }
        }
      var b = [];
      for (var v of e) d.has(v.toString()) || b.push(v);
      for (
        var S = h(e, r, o), R = new Set(), L = 0;
        L < Math.min(n, S.length);
        L++
      )
        R.add(S[L].toString());
      return {
        participantScores: a,
        previousPositions: c,
        previousJidToPosition: d,
        jidToParticipant: l,
        newParticipants: b,
        idealPage1Jids: R,
      };
    }
    function c(e, t, n, r, o, a) {
      for (var i = [], l = 0; l < e; l++) i.push(new Array(t).fill(null));
      n != null && (i[0][t - 1] = n);
      for (var s of r) {
        var u = s.participant.toString(),
          c = o.get(u);
        if (c != null)
          if (c != null && s.pageIndex < e) {
            if (s.pageIndex === 0 && s.indexInPage === t - 1 && n != null) {
              a.push(c);
              continue;
            }
            s.indexInPage < t ? (i[s.pageIndex][s.indexInPage] = c) : a.push(c);
          } else c != null && a.push(c);
      }
      return i;
    }
    function d(e, t, n, r, o, a, i, l) {
      var s = [];
      for (var u of t) {
        var c = n.get(u);
        if (
          c != null &&
          c.pageIndex > 0 &&
          c.pageIndex < l &&
          c.indexInPage < i
        ) {
          var d = r.get(u);
          d != null && s.push(d);
        }
      }
      for (
        var m = [], p = a != null ? i - 1 : i, _ = 0;
        _ < Math.min(p, e[0].length);
        _++
      ) {
        var f = e[0][_];
        f != null &&
          !t.has(f.toString()) &&
          m.push({ participant: f, indexInPage: _ });
      }
      (m.sort(function (e, t) {
        var n,
          r,
          a = (n = o.get(e.participant.toString())) != null ? n : 0,
          i = (r = o.get(t.participant.toString())) != null ? r : 0;
        return a - i;
      }),
        s.sort(function (e, t) {
          var n,
            r,
            a = (n = o.get(e.toString())) != null ? n : 0,
            i = (r = o.get(t.toString())) != null ? r : 0;
          return i - a;
        }));
      for (var g = Math.min(s.length, m.length), h = 0; h < g; h++) {
        var y = s[h],
          C = m[h],
          b = y.toString(),
          v = n.get(b);
        v != null &&
          v.pageIndex < l &&
          ((e[v.pageIndex][v.indexInPage] = C.participant),
          (e[0][C.indexInPage] = y));
      }
      for (var S = g; S < s.length; S++)
        for (
          var R = s[S], L = R.toString(), E = n.get(L), k = !1, I = 0;
          I < p && !k;
          I++
        )
          e[0][I] == null &&
            ((e[0][I] = R),
            E != null &&
              E.pageIndex < l &&
              (e[E.pageIndex][E.indexInPage] = null),
            (k = !0));
    }
    function m(e, t, n, r) {
      for (var o = 0; o < t - 1; o++)
        for (var a = 0; a < n; a++)
          if (!(o === 0 && a === n - 1 && r != null) && e[o][a] == null)
            for (var i = t - 1; i > o; i--) {
              for (var l = n - 1; l >= 0; l--)
                if (e[i][l] != null) {
                  ((e[o][a] = e[i][l]), (e[i][l] = null));
                  break;
                }
              if (e[o][a] != null) break;
            }
    }
    function p(e, t, n, r, o, a) {
      e.sort(function (e, n) {
        var r,
          o,
          a = (r = t.get(e.toString())) != null ? r : 0,
          i = (o = t.get(n.toString())) != null ? o : 0;
        return i - a;
      });
      for (var i of e)
        for (var l = !1, s = 0; s < r && !l; s++)
          for (var u = 0; u < o && !l; u++)
            (s === 0 && u === o - 1 && a != null) ||
              (n[s][u] == null && ((n[s][u] = i), (l = !0)));
    }
    function _(e, t) {
      for (
        var n = e.toString(), r = t[0], o = -1, a = -1, i = 0;
        i < t.length;
        i++
      ) {
        for (var l = t[i], s = 0; s < l.length; s++)
          if (l[s].toString() === n) {
            ((o = i), (a = s));
            break;
          }
        if (o !== -1) break;
      }
      o === -1
        ? r.push(e)
        : o !== 0
          ? (t[o].splice(a, 1), r.push(e))
          : a !== r.length - 1 && (r.splice(a, 1), r.push(e));
    }
    function f(e, t, n) {
      return e.map(function (e) {
        var r = null,
          a = -1;
        for (var i of e)
          if (!o("WAWebUserPrefsMeUser").isMeAccount(i)) {
            var l = g(i.toString(), t, n);
            l > a && ((a = l), (r = i));
          }
        return r;
      });
    }
    function g(e, t, n) {
      var r,
        o = 0,
        a = n == null ? void 0 : n.get(e);
      ((a == null ? void 0 : a.isPinned) === !0 && (o += 1e6),
        (a == null ? void 0 : a.isScreenSharing) === !0 && (o += 1e5));
      var i = (r = t == null ? void 0 : t.get(e)) != null ? r : 0;
      return ((o += i), o);
    }
    function h(e, t, n) {
      return e.slice().sort(function (e, r) {
        var o = g(e.toString(), t, n),
          a = g(r.toString(), t, n);
        return a - o;
      });
    }
    function y(e, t, n, r, o) {
      n === void 0 && (n = 0);
      var a = h(e, r, o);
      return a.slice(n, n + t);
    }
    function C(e, t, n) {
      var r, a;
      if (e.length === 0) return null;
      var i = e.filter(function (e) {
        if (!o("WAWebUserPrefsMeUser").isMeAccount(e)) return !0;
        var t = n == null ? void 0 : n.get(e.toString());
        return (t == null ? void 0 : t.isScreenSharing) === !0;
      });
      if (i.length === 0) {
        var l;
        return (l = e[0]) != null ? l : null;
      }
      var s = i[0],
        u = g(
          (r = (a = s) == null ? void 0 : a.toString()) != null ? r : "",
          t,
          n,
        );
      for (var c of i) {
        var d = g(c.toString(), t, n);
        d > u && ((u = d), (s = c));
      }
      return s != null ? s : null;
    }
    function b(e, t, n, r) {
      var a = Math.min(r, e.length),
        i = e.findIndex(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(e);
        }),
        l = i !== -1;
      if (l && i >= a) {
        var s = a - 1,
          u = e[i];
        ((e[i] = e[s]), (e[s] = u));
      }
      var c = l ? Math.max(a - 1, 0) : a;
      if (!(e.length <= a || c === 0)) {
        var d = new Map();
        for (var m of e)
          o("WAWebUserPrefsMeUser").isMeAccount(m) ||
            d.set(m.toString(), g(m.toString(), t, n));
        for (
          var p = e
              .filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e);
              })
              .map(function (e) {
                var t;
                return {
                  jid: e.toString(),
                  score: (t = d.get(e.toString())) != null ? t : 0,
                };
              })
              .sort(function (e, t) {
                return t.score - e.score;
              }),
            _ = new Set(
              p.slice(0, c).map(function (e) {
                return e.jid;
              }),
            ),
            f = [],
            h = [],
            y = 0;
          y < e.length;
          y++
        ) {
          var C = e[y].toString(),
            b = d.get(C);
          b != null &&
            (y < a && !_.has(C)
              ? h.push({ index: y, score: b })
              : y >= a && _.has(C) && f.push({ index: y, score: b }));
        }
        (f.sort(function (e, t) {
          return e.index - t.index;
        }),
          h.sort(function (e, t) {
            return e.index - t.index;
          }));
        for (var v = Math.min(f.length, h.length), S = 0; S < v; S++) {
          var R = f[S].index,
            L = h[S].index,
            E = e[R];
          ((e[R] = e[L]), (e[L] = E));
        }
      }
    }
    function v(e, t) {
      return t != null && e > t;
    }
    function S(e, t, n, r, o, a) {
      if (e.length === 0)
        return { dominantSpeaker: null, stripParticipants: [] };
      var i =
          a != null &&
          e.some(function (e) {
            return e.equals(a);
          })
            ? a
            : null,
        l = i != null ? i : C(e, t, r);
      if (l == null) return { dominantSpeaker: null, stripParticipants: e };
      var s = l.toString();
      if (n == null || n.dominantSpeaker == null) {
        var u = e
          .filter(function (e) {
            return e.toString() !== s;
          })
          .slice()
          .sort(function (e, n) {
            var o = g(e.toString(), t, r),
              a = g(n.toString(), t, r);
            return a - o;
          });
        return (R(u), { dominantSpeaker: l, stripParticipants: u });
      }
      var c = n.dominantSpeaker.toString();
      if (s === c) {
        var d = new Set(
            e.map(function (e) {
              return e.toString();
            }),
          ),
          m = n.stripParticipants.filter(function (e) {
            return d.has(e.toString());
          }),
          p = new Set(
            m.map(function (e) {
              return e.toString();
            }),
          );
        for (var _ of e) {
          var f = _.toString();
          f !== s && !p.has(f) && m.push(_);
        }
        return (
          v(m.length, o) && b(m, t, r, o != null ? o : m.length),
          R(m),
          { dominantSpeaker: l, stripParticipants: m }
        );
      }
      var h = L(e, s, n, t, r, o);
      return { dominantSpeaker: l, stripParticipants: h };
    }
    function R(e) {
      var t = e.findIndex(function (e) {
        return o("WAWebUserPrefsMeUser").isMeAccount(e);
      });
      if (t !== -1 && t !== e.length - 1) {
        var n = e.splice(t, 1)[0];
        e.push(n);
      }
    }
    function L(e, t, n, r, o, a) {
      var i,
        l = [],
        s = n.dominantSpeaker;
      for (var u of n.stripParticipants) {
        var c = u.toString();
        c === t ? s != null && l.push(s) : l.push(u);
      }
      var d = new Set(
          e.map(function (e) {
            return e.toString();
          }),
        ),
        m = l.filter(function (e) {
          return d.has(e.toString());
        }),
        p = (i = s == null ? void 0 : s.toString()) != null ? i : "",
        _ = new Set(
          m.map(function (e) {
            return e.toString();
          }),
        );
      if (!_.has(p) && d.has(p)) {
        var f = e.find(function (e) {
          return e.toString() === p;
        });
        f != null && (m.push(f), _.add(p));
      }
      for (var g of e) {
        var h = g.toString();
        h !== t && !_.has(h) && (m.push(g), _.add(h));
      }
      return (v(m.length, a) && b(m, r, o, a != null ? a : m.length), R(m), m);
    }
    ((l.computePagedParticipantsWithMinimalMovement = e),
      (l.sortParticipantsByPriority = h),
      (l.getTopParticipants = y),
      (l.getDominantSpeaker = C),
      (l.computeSpeakerModeOrder = S));
  },
  98,
);
