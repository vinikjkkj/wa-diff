__d(
  "CometNewsFeedConnectionHandler",
  [
    "FBLogger",
    "RelayFBConnectionHandler",
    "XPlatReactEnvironment",
    "gkx",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "comet_news_feed",
      s = "__connection_next_edge_index",
      u = "received_edges_count";
    function c(e, t) {
      var n,
        a,
        i = e.get(t.dataID);
      if (i) {
        var l = o("relay-runtime").ConnectionInterface.get(),
          c = l.EDGES;
        if (t.args.before != null)
          throw r("FBLogger")("comet_feed").mustfixThrow(
            "The newsfeed connection does not support backward pagination by design",
          );
        var m = i.getLinkedRecord(t.fieldKey);
        if (!m) {
          r("FBLogger")("comet_feed").mustfix(
            "Newsfeed connection is null in the store, this means no feed stories will be shown",
          );
          return;
        }
        var p = o("relay-runtime").generateClientID(i.getDataID(), t.handleKey),
          f = i.getLinkedRecord(t.handleKey),
          g = f != null ? f : e.get(p);
        if (!g) {
          var h,
            y = e.create(p, m.getType());
          (y.setValue(0, s), y.copyFieldsFrom(m));
          var C = ((h = m.getLinkedRecords(c)) != null ? h : []).map(
            function (t) {
              return o("relay-runtime").ConnectionHandler.buildConnectionEdge(
                e,
                y,
                t,
              );
            },
          );
          (y.setLinkedRecords(C, c),
            y.setValue(C.length, u),
            i.setLinkedRecord(y, t.handleKey),
            d(e, C, C, y, m));
          return;
        }
        f == null && i.setLinkedRecord(g, t.handleKey);
        var b = g,
          v = ((n = m.getLinkedRecords(c)) != null ? n : []).map(function (t) {
            return o("relay-runtime").ConnectionHandler.buildConnectionEdge(
              e,
              b,
              t,
            );
          });
        b.setValue(v.length, u);
        var S = b.getLinkedRecords(c);
        b.copyFieldsFrom(m);
        var R = [],
          L = new Set();
        (t.args.after != null ||
          ((a = v == null ? void 0 : v.length) != null ? a : 0) === 0) &&
          _(S != null ? S : [], R, L);
        var E = _(v != null ? v : [], R, L);
        (b.setLinkedRecords(R, c),
          d(
            e,
            o("XPlatReactEnvironment").isWeb() && r("gkx")("20836") ? E : v,
            R,
            b,
            m,
          ));
      }
    }
    function d(e, t, n, a, i) {
      var l = o("relay-runtime").ConnectionInterface.get(),
        s = l.END_CURSOR,
        u = l.HAS_NEXT_PAGE,
        c = l.HAS_PREV_PAGE,
        d = l.PAGE_INFO,
        m = l.PAGE_INFO_TYPE,
        p = i.getLinkedRecord(d),
        _ = a.getLinkedRecord(d);
      if (_ == null) {
        var f,
          g = o("relay-runtime").generateClientID(a.getDataID(), d);
        ((_ = (f = e.get(g)) != null ? f : e.create(g, m)),
          a.setLinkedRecord(_, d));
      }
      var h = p == null ? void 0 : p.getValue(s);
      (_.setValue(!1, c),
        _.setValue(
          t.length > 0 || (p == null ? void 0 : p.getValue(u)) === !0,
          u,
        ));
      var y = n != null ? n[n.length - 1] : null,
        C = null;
      if ((y != null && (C = y.getValue("cursor")), C == null && h == null)) {
        r("FBLogger")("comet_feed").info(
          "Unable to set end_cursor as neither the server end cursor, or last edge cursor is defined, this can happen on initial load when there are no stories but shouldn't happen otherwise",
          "comet_feed",
        );
        return;
      }
      _.setValue(h != null ? h : C, s);
    }
    function m(t, n, r) {
      var a = o("relay-runtime").getRelayHandleKey(e, n, null);
      return t.getLinkedRecord(a, r);
    }
    function p(t, n, r) {
      return o("RelayFBConnectionHandler").getAllConnectionsWithKey(t, n, r, e);
    }
    function _(e, t, n) {
      for (var o = [], a = 0; a < e.length; a++) {
        var i = e[a];
        if (i) {
          var l = i.getValue("deduplication_key");
          if (typeof l != "string") {
            (r("FBLogger")("comet_feed").mustfix(
              "Found edge without deduplication nodeID in comet_news_feed, this can lead to duplicate feed stories being rendered",
            ),
              t.push(i));
            continue;
          }
          n.has(l) || (n.add(l), t.push(i), o.push(i));
        }
      }
      return o;
    }
    function f(e, t, n, a) {
      if (n == null) return n;
      var i = o("relay-runtime").ConnectionInterface.get(),
        l = i.EDGES,
        u = t.getValue(s);
      if (typeof u != "number")
        throw r("FBLogger")("comet_feed").mustfixThrow(
          "CometNewsFeedConnectionHandler: Expected edgeIndex to be a number",
        );
      var c =
          a != null
            ? a
            : o("relay-runtime").generateClientID(t.getDataID(), l, u),
        d = e.create(c, n.getType());
      return (d.copyFieldsFrom(n), t.setValue(u + 1, s), d);
    }
    ((l.update = c),
      (l.getConnection = m),
      (l.getAllConnectionsWithKey = p),
      (l.buildConnectionEdge = f),
      (l.insertEdgeBefore =
        o("relay-runtime").ConnectionHandler.insertEdgeBefore));
  },
  98,
);
