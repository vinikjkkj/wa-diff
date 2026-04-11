__d(
  "relay-runtime/handlers/connection/ConnectionHandler",
  [
    "invariant",
    "relay-runtime/handlers/connection/ConnectionInterface",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/getRelayHandleKey",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/store/ClientID").generateClientID,
      s = n("relay-runtime/store/RelayStoreUtils").getStableStorageKey,
      u = "connection",
      c = "__connection_next_edge_index";
    function d(t, r) {
      var o = t.get(r.dataID);
      if (o) {
        var a = n(
            "relay-runtime/handlers/connection/ConnectionInterface",
          ).get(),
          i = a.EDGES,
          l = a.END_CURSOR,
          s = a.HAS_NEXT_PAGE,
          u = a.HAS_PREV_PAGE,
          d = a.PAGE_INFO,
          m = a.PAGE_INFO_TYPE,
          p = a.START_CURSOR,
          _ = o.getLinkedRecord(r.fieldKey),
          f = _ && _.getLinkedRecord(d);
        if (!_) {
          o.setValue(null, r.handleKey, void 0, o.getErrors(r.fieldKey));
          return;
        }
        var g = e(o.getDataID(), r.handleKey),
          h = o.getLinkedRecord(r.handleKey),
          b = h != null ? h : t.get(g),
          v = b && b.getLinkedRecord(d);
        if (b) {
          h == null && o.setLinkedRecord(b, r.handleKey);
          var L = b,
            E = _.getLinkedRecords(i);
          E &&
            (E = E.map(function (e) {
              return y(t, L, e);
            }));
          var k = L.getLinkedRecords(i),
            I = L.getLinkedRecord(d);
          (L.copyFieldsFrom(_),
            k && L.setLinkedRecords(k, i),
            I && L.setLinkedRecord(I, d));
          var T = [],
            D = r.args;
          if (k && E)
            if (D.after != null) {
              var x,
                $ = (x = v) == null ? void 0 : x.getValue(l),
                P = f == null ? void 0 : f.getValue(l),
                N = v && D.after === $,
                M = v && $ === P;
              if (N || M) {
                var w = new Set();
                (C(k, T, w), C(E, T, w));
              } else {
                n("warning")(
                  !1,
                  "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",
                  D.after,
                  v && v.getValue(l),
                );
                return;
              }
            } else if (D.before != null)
              if (v && D.before === v.getValue(p)) {
                var A = new Set();
                (C(E, T, A), C(k, T, A));
              } else {
                n("warning")(
                  !1,
                  "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",
                  D.before,
                  v && v.getValue(p),
                );
                return;
              }
            else T = E;
          else E ? (T = E) : (T = k);
          if ((T != null && T !== k && L.setLinkedRecords(T, i), v && f)) {
            if (D.after == null && D.before == null) v.copyFieldsFrom(f);
            else if (D.before != null || (D.after == null && D.last)) {
              v.setValue(!!f.getValue(u), u);
              var F = f.getValue(p);
              typeof F == "string" && v.setValue(F, p);
            } else if (D.after != null || (D.before == null && D.first)) {
              v.setValue(!!f.getValue(s), s);
              var O = f.getValue(l);
              typeof O == "string" && v.setValue(O, l);
            }
          }
        } else {
          var S = t.create(g, _.getType());
          (S.setValue(0, c), S.copyFieldsFrom(_));
          var R = _.getLinkedRecords(i);
          (R &&
            ((R = R.map(function (e) {
              return y(t, S, e);
            })),
            S.setLinkedRecords(R, i)),
            o.setLinkedRecord(S, r.handleKey),
            (v = t.create(e(S.getDataID(), d), m)),
            v.setValue(!1, s),
            v.setValue(!1, u),
            v.setValue(null, l),
            v.setValue(null, p),
            f && v.copyFieldsFrom(f),
            S.setLinkedRecord(v, d));
        }
      }
    }
    function m(e, t, r) {
      var o = n("relay-runtime/util/getRelayHandleKey")(u, t, null);
      return e.getLinkedRecord(o, r);
    }
    function p(t, r, o) {
      var a = n("relay-runtime/util/getRelayHandleKey")(u, r, null),
        i = s(a, o);
      return e(t, i);
    }
    function _(e, t, r) {
      var o = n("relay-runtime/handlers/connection/ConnectionInterface").get(),
        a = o.CURSOR,
        i = o.EDGES,
        l = e.getLinkedRecords(i);
      if (!l) {
        e.setLinkedRecords([t], i);
        return;
      }
      var s;
      if (r == null) s = l.concat(t);
      else {
        s = [];
        for (var u = !1, c = 0; c < l.length; c++) {
          var d = l[c];
          if ((s.push(d), d != null)) {
            var m = d.getValue(a);
            r === m && (s.push(t), (u = !0));
          }
        }
        u || s.push(t);
      }
      e.setLinkedRecords(s, i);
    }
    function f(t, r, o, a) {
      var i = n("relay-runtime/handlers/connection/ConnectionInterface").get(),
        l = i.NODE,
        s = e(r.getDataID(), o.getDataID()),
        u = t.get(s);
      return (
        u || (u = t.create(s, a)),
        u.setLinkedRecord(o, l),
        u.getValue("cursor") == null && u.setValue(null, "cursor"),
        u
      );
    }
    function g(e, t, r) {
      var o = n("relay-runtime/handlers/connection/ConnectionInterface").get(),
        a = o.CURSOR,
        i = o.EDGES,
        l = e.getLinkedRecords(i);
      if (!l) {
        e.setLinkedRecords([t], i);
        return;
      }
      var s;
      if (r == null) s = [t].concat(l);
      else {
        s = [];
        for (var u = !1, c = 0; c < l.length; c++) {
          var d = l[c];
          if (d != null) {
            var m = d.getValue(a);
            r === m && (s.push(t), (u = !0));
          }
          s.push(d);
        }
        u || s.unshift(t);
      }
      e.setLinkedRecords(s, i);
    }
    function h(e, t) {
      var r = n("relay-runtime/handlers/connection/ConnectionInterface").get(),
        o = r.EDGES,
        a = r.NODE,
        i = e.getLinkedRecords(o);
      if (i) {
        for (var l, s = 0; s < i.length; s++) {
          var u = i[s],
            c = u && u.getLinkedRecord(a);
          c != null && c.getDataID() === t
            ? l === void 0 && (l = i.slice(0, s))
            : l !== void 0 && l.push(u);
        }
        l !== void 0 && e.setLinkedRecords(l, o);
      }
    }
    function y(t, r, o) {
      if (o == null) return o;
      var a = n("relay-runtime/handlers/connection/ConnectionInterface").get(),
        i = a.EDGES,
        s = r.getValue(c);
      typeof s == "number" || l(0, 20561, c, s);
      var u = e(r.getDataID(), i, s),
        d = t.create(u, o.getType());
      return (
        d.copyFieldsFrom(o),
        d.getValue("cursor") == null && d.setValue(null, "cursor"),
        r.setValue(s + 1, c),
        d
      );
    }
    function C(e, t, r) {
      for (
        var o = n(
            "relay-runtime/handlers/connection/ConnectionInterface",
          ).get(),
          a = o.NODE,
          i = 0;
        i < e.length;
        i++
      ) {
        var l = e[i];
        if (l) {
          var s = l.getLinkedRecord(a),
            u = s && s.getDataID();
          if (u) {
            if (r.has(u)) continue;
            r.add(u);
          }
          t.push(l);
        }
      }
    }
    a.exports = {
      buildConnectionEdge: y,
      createEdge: f,
      deleteNode: h,
      getConnection: m,
      getConnectionID: p,
      insertEdgeAfter: _,
      insertEdgeBefore: g,
      update: d,
    };
  },
  null,
);
