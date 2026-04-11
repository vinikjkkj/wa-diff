__d(
  "CometNotificationsThinClientConnectionHandler",
  ["FBLogger", "relay-runtime", "warning"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "comet_notifications_thin_client",
      s = "__connection_next_edge_index";
    function u(e, t) {
      var n = e.get(t.dataID);
      if (n) {
        var a = o("relay-runtime").ConnectionInterface.get(),
          i = a.EDGES,
          l = a.END_CURSOR,
          u = a.HAS_NEXT_PAGE,
          c = a.HAS_PREV_PAGE,
          f = a.PAGE_INFO,
          g = a.PAGE_INFO_TYPE,
          h = a.START_CURSOR,
          y = n.getLinkedRecord(t.fieldKey),
          C = y && y.getLinkedRecord(f);
        if (!y) {
          n.setValue(null, t.handleKey);
          return;
        }
        var b = o("relay-runtime").generateClientID(n.getDataID(), t.handleKey),
          v = n.getLinkedRecord(t.handleKey),
          S = v != null ? v : e.get(b),
          R = S && S.getLinkedRecord(f);
        if (S) {
          v == null && n.setLinkedRecord(S, t.handleKey);
          var T = S,
            D = y.getLinkedRecords(i);
          D &&
            (D = D.map(function (t) {
              return d(e, T, t);
            }));
          var x = T.getLinkedRecords(i),
            $ = T.getLinkedRecord(f);
          (T.copyFieldsFrom(y),
            x && T.setLinkedRecords(x, i),
            $ && T.setLinkedRecord($, f));
          var P = [],
            N = t.args;
          if (x && D)
            if (N.after != null)
              if (R && N.after === R.getValue(l)) {
                var M = new Set();
                (m(x, P, M), m(D, P, M));
              } else {
                r("warning")(
                  !1,
                  "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",
                  N.after,
                  R && R.getValue(l),
                );
                return;
              }
            else if (N.before != null)
              if (R && N.before === R.getValue(h)) {
                var w = new Set();
                (m(D, P, w), m(x, P, w));
              } else {
                r("warning")(
                  !1,
                  "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",
                  N.before,
                  R && R.getValue(h),
                );
                return;
              }
            else {
              var A = p(x),
                F = new Set();
              _(D, P, A, F);
            }
          else D ? (P = D) : (P = x);
          if ((P != null && P !== x && T.setLinkedRecords(P, i), R && C)) {
            if (N.after == null && N.before == null) R.copyFieldsFrom(C);
            else if (N.before != null || (N.after == null && N.last)) {
              R.setValue(!!C.getValue(c), c);
              var O = C.getValue(h);
              typeof O == "string" && R.setValue(O, h);
            } else if (N.after != null || (N.before == null && N.first)) {
              R.setValue(!!C.getValue(u), u);
              var B = C.getValue(l);
              typeof B == "string" && R.setValue(B, l);
            }
          }
        } else {
          var L = e.create(b, y.getType());
          (L.setValue(0, s), L.copyFieldsFrom(y));
          var E = y.getLinkedRecords(i);
          if (E) {
            var k = o("relay-runtime").ConnectionInterface.get(),
              I = k.NODE;
            ((E = E.reduce(function (t, n) {
              if (!n) return t;
              var r = n.getLinkedRecord(I),
                o = r == null ? void 0 : r.getType();
              return o === "NotifPageCachedNotificationRow"
                ? t
                : t.concat(d(e, L, n));
            }, [])),
              L.setLinkedRecords(E, i));
          }
          (n.setLinkedRecord(L, t.handleKey),
            (R = e.create(
              o("relay-runtime").generateClientID(L.getDataID(), f),
              g,
            )),
            R.setValue(!1, u),
            R.setValue(!1, c),
            R.setValue(null, l),
            R.setValue(null, h),
            C && R.copyFieldsFrom(C),
            L.setLinkedRecord(R, f));
        }
      }
    }
    function c(t, n, r) {
      var a = o("relay-runtime").getRelayHandleKey(e, n, null);
      return t.getLinkedRecord(a, r);
    }
    function d(e, t, n) {
      if (n == null) return n;
      var a = o("relay-runtime").ConnectionInterface.get(),
        i = a.EDGES,
        l = a.NODE,
        u = t.getValue(s);
      if (typeof u != "number")
        throw r("FBLogger")("Notifications").mustfixThrow(
          "CometNotificationsThinClientConnectionHandler: Expected edgeIndex to be a number",
        );
      var c = o("relay-runtime").generateClientID(t.getDataID(), i, u),
        d = n.getLinkedRecord(l);
      if (d) {
        var m = o("relay-runtime").generateClientID(n.getDataID(), l, u),
          p = e.create(m, d.getType());
        (p.copyFieldsFrom(d), n.setLinkedRecord(p, l));
      }
      var _ = e.create(c, n.getType());
      return (_.copyFieldsFrom(n), t.setValue(u + 1, s), _);
    }
    function m(e, t, n) {
      for (
        var r = o("relay-runtime").ConnectionInterface.get(), a = r.NODE, i = 0;
        i < e.length;
        i++
      ) {
        var l = e[i];
        if (l) {
          var s = l.getLinkedRecord(a),
            u = s && s.getDataID();
          if (u != null) {
            if (n.has(u)) continue;
            n.add(u);
          }
          t.push(l);
        }
      }
    }
    function p(e) {
      for (
        var t = {},
          n = o("relay-runtime").ConnectionInterface.get(),
          r = n.NODE,
          a = 0;
        a < e.length;
        a++
      ) {
        var i = e[a];
        if (i) {
          var l = i.getLinkedRecord(r),
            s = l && l.getType();
          if (s === "NotifPageNotificationRow") {
            var u,
              c =
                l == null || (u = l.getLinkedRecord("notif")) == null
                  ? void 0
                  : u.getValue("id");
            typeof c == "string" && (t[c] = l);
          }
        }
      }
      return t;
    }
    function _(e, t, n, r) {
      for (
        var a = o("relay-runtime").ConnectionInterface.get(), i = a.NODE, l = 0;
        l < e.length;
        l++
      ) {
        var s,
          u = e[l];
        if (u) {
          var c = u.getLinkedRecord(i),
            d = c && c.getDataID();
          if (d != null) {
            if (r.has(d)) continue;
            r.add(d);
          }
          var m = c == null ? void 0 : c.getType(),
            p =
              c == null || (s = c.getLinkedRecord("notif")) == null
                ? void 0
                : s.getValue("id");
          if (c && m === "NotifPageCachedNotificationRow") {
            if (typeof p == "string") {
              var _ = n[p];
              _ && (_.copyFieldsFrom(c), u.setLinkedRecord(_, i), t.push(u));
            }
          } else t.push(u);
        }
      }
    }
    ((l.update = u), (l.getConnection = c), (l.buildConnectionEdge = d));
  },
  98,
);
