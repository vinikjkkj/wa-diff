__d(
  "UFI2CommentsConnectionHandler",
  ["ODS", "RelayFBConnectionHandler", "gkx", "relay-runtime", "warning"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "ufi2_comments",
      u = "__connection_next_edge_index",
      c = "ufi2_connection_generation";
    function d(t, n) {
      var a = t.get(n.dataID);
      if (a) {
        var i = o("relay-runtime").ConnectionInterface.get(),
          l = i.EDGES,
          s = i.END_CURSOR,
          d = i.HAS_NEXT_PAGE,
          m = i.HAS_PREV_PAGE,
          p = i.PAGE_INFO,
          f = i.PAGE_INFO_TYPE,
          g = i.START_CURSOR,
          h = a.getLinkedRecord(n.fieldKey),
          y = h && h.getLinkedRecord(p);
        if (!h) {
          a.setValue(null, n.handleKey);
          return;
        }
        var C = o("relay-runtime").generateClientID(a.getDataID(), n.handleKey),
          b = a.getLinkedRecord(n.handleKey),
          v = b != null ? b : t.get(C),
          S = v && v.getLinkedRecord(p);
        if (v) {
          b == null && a.setLinkedRecord(v, n.handleKey);
          var E = v,
            k = h.getLinkedRecords(l);
          k &&
            (k = k.map(function (e) {
              return o("relay-runtime").ConnectionHandler.buildConnectionEdge(
                t,
                E,
                e,
              );
            }));
          var I = E.getLinkedRecords(l),
            T = E.getLinkedRecord(p);
          (E.copyFieldsFrom(h),
            I && E.setLinkedRecords(I, l),
            T && E.setLinkedRecord(T, p));
          var D = [],
            x = n.args;
          if (S != null && x.after == null && x.before == null) {
            var $ = S.getValue(g),
              P = S.getValue(s),
              N = S.getValue(d),
              M = S.getValue(m);
            if (
              ((e || (e = o("ODS"))).bumpFraction(
                2507,
                "ufi_connection_generation_incremented",
                r("gkx")("20935") ? "comet" : "blue",
                0,
                1,
              ),
              $ != null || P != null || (N !== !0 && M !== !0))
            ) {
              var w;
              (e || (e = o("ODS"))).bumpFraction(
                2507,
                "ufi_connection_generation_incremented",
                r("gkx")("20935") ? "comet" : "blue",
                1,
                0,
              );
              var A = (w = Number(E.getValue(c))) != null ? w : 0;
              E.setValue(A + 1, c);
            }
          }
          if (I && k)
            if (x.after != null)
              if (S && x.after === S.getValue(s)) {
                var F = new Set();
                (_(I, D, F), _(k, D, F));
              } else {
                r("warning")(
                  !1,
                  "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",
                  x.after,
                  S && S.getValue(s),
                );
                return;
              }
            else if (x.before != null)
              if (S && x.before === S.getValue(g)) {
                var O = new Set();
                (_(k, D, O), _(I, D, O));
              } else {
                r("warning")(
                  !1,
                  "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",
                  x.before,
                  S && S.getValue(g),
                );
                return;
              }
            else D = k;
          else k ? (D = k) : (D = I);
          if ((D != null && D !== I && E.setLinkedRecords(D, l), S && y)) {
            if (x.after == null && x.before == null) S.copyFieldsFrom(y);
            else if (x.before != null || (x.after == null && x.last)) {
              S.setValue(!!y.getValue(m), m);
              var B = y.getValue(g);
              typeof B == "string" && S.setValue(B, g);
            } else if (x.after != null || (x.before == null && x.first)) {
              S.setValue(!!y.getValue(d), d);
              var W = y.getValue(s);
              typeof W == "string" && S.setValue(W, s);
            }
          }
        } else {
          var R = t.create(C, h.getType());
          (R.setValue(0, c), R.setValue(0, u), R.copyFieldsFrom(h));
          var L = h.getLinkedRecords(l);
          (L &&
            ((L = L.map(function (e) {
              return o("relay-runtime").ConnectionHandler.buildConnectionEdge(
                t,
                R,
                e,
              );
            })),
            R.setLinkedRecords(L, l)),
            a.setLinkedRecord(R, n.handleKey),
            (S = t.create(
              o("relay-runtime").generateClientID(R.getDataID(), p),
              f,
            )),
            S.setValue(!1, d),
            S.setValue(!1, m),
            S.setValue(null, s),
            S.setValue(null, g),
            y && S.copyFieldsFrom(y),
            R.setLinkedRecord(S, p));
        }
      }
    }
    function m(e, t, n) {
      var r = o("relay-runtime").getRelayHandleKey(s, t, null);
      return e.getLinkedRecord(r, n);
    }
    function p(e, t, n) {
      return o("RelayFBConnectionHandler").getAllConnectionsWithKey(e, t, n, s);
    }
    function _(e, t, n) {
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
    ((l.update = d), (l.getConnection = m), (l.getAllConnectionsWithKey = p));
  },
  98,
);
