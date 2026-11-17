__d(
  "CometNewsFeedConnectionHandler",
  [
    "CometNewsFeedConnectionDebugState",
    "CometNewsFeedReuseEdgesGating",
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
      u = "received_edges_count",
      c = "__connection_edges_request_qid",
      d = "__connection_edges_request_keys";
    function m(e, t) {
      var n,
        a,
        i,
        l = e.get(t.dataID);
      if (l) {
        var m = o("relay-runtime").ConnectionInterface.get(),
          y = m.EDGES;
        if (t.args.before != null)
          throw r("FBLogger")("comet_feed").mustfixThrow(
            "The newsfeed connection does not support backward pagination by design",
          );
        var C = l.getLinkedRecord(t.fieldKey);
        if (!C) {
          r("FBLogger")("comet_feed").mustfix(
            "Newsfeed connection is null in the store, this means no feed stories will be shown",
          );
          return;
        }
        var v = o("relay-runtime").generateClientID(l.getDataID(), t.handleKey),
          S = l.getLinkedRecord(t.handleKey),
          R = S != null ? S : e.get(v);
        if (!R) {
          var L,
            E = e.create(v, C.getType());
          (E.setValue(0, s), E.copyFieldsFrom(C));
          var k = ((L = C.getLinkedRecords(y)) != null ? L : []).map(
            function (t) {
              return o("relay-runtime").ConnectionHandler.buildConnectionEdge(
                e,
                E,
                t,
              );
            },
          );
          (E.setLinkedRecords(k, y),
            E.setValue(k.length, u),
            l.setLinkedRecord(E, t.handleKey),
            o(
              "CometNewsFeedConnectionDebugState",
            ).recordConnectionUpdateForDebugging("initial"),
            k.length > 0 &&
              o(
                "CometNewsFeedReuseEdgesGating",
              ).shouldReuseCometNewsFeedEdges() &&
              (E.setValue(p(k), c), E.setValue(_(k), d)),
            h(e, k, k, E, C));
          return;
        }
        S == null && l.setLinkedRecord(R, t.handleKey);
        var I = R,
          T = I.getLinkedRecords(y),
          D = (n = C.getLinkedRecords(y)) != null ? n : [],
          x;
        if (
          t.args.after == null &&
          D.length > 0 &&
          o("CometNewsFeedReuseEdgesGating").shouldReuseCometNewsFeedEdges()
        ) {
          var $ = p(D),
            P = _(D),
            N = $ != null && I.getValue(c) === $ && f(P, I.getValue(d));
          (I.setValue($, c),
            I.setValue(P, d),
            (x = N
              ? g(e, I, D, T)
              : D.map(function (t) {
                  return o(
                    "relay-runtime",
                  ).ConnectionHandler.buildConnectionEdge(e, I, t);
                })));
        } else
          x = D.map(function (t) {
            return o("relay-runtime").ConnectionHandler.buildConnectionEdge(
              e,
              I,
              t,
            );
          });
        (I.setValue(x.length, u), I.copyFieldsFrom(C));
        var M = [],
          w = new Set();
        (t.args.after != null ||
          ((a = (i = x) == null ? void 0 : i.length) != null ? a : 0) === 0) &&
          b(T != null ? T : [], M, w);
        var A = b(x != null ? x : [], M, w);
        I.setLinkedRecords(M, y);
        var F = "replace";
        (t.args.after != null ? (F = "append") : x.length === 0 && (F = "keep"),
          o(
            "CometNewsFeedConnectionDebugState",
          ).recordConnectionUpdateForDebugging(F),
          h(
            e,
            o("XPlatReactEnvironment").isWeb() && r("gkx")("20836") ? A : x,
            M,
            I,
            C,
          ));
      }
    }
    function p(e) {
      for (var t of e) {
        var n,
          r =
            t == null || (n = t.getLinkedRecord("feed_backend_data")) == null
              ? void 0
              : n.getValue("qid");
        if ((typeof r == "string" || typeof r == "number") && String(r) !== "0")
          return String(r);
      }
      return null;
    }
    function _(e) {
      return e.map(function (e) {
        var t = e == null ? void 0 : e.getValue("deduplication_key");
        return typeof t == "string" ? t : null;
      });
    }
    function f(e, t) {
      return (
        Array.isArray(t) &&
        t.length > 0 &&
        t.length <= e.length &&
        t.every(function (t, n) {
          return t != null && t === e[n];
        })
      );
    }
    function g(e, t, n, r) {
      var a = new Map();
      for (var i of r != null ? r : []) {
        var l = i == null ? void 0 : i.getValue("deduplication_key");
        i != null && typeof l == "string" && !a.has(l) && a.set(l, i);
      }
      return n.map(function (n) {
        var r = n == null ? void 0 : n.getValue("deduplication_key"),
          i = typeof r == "string" ? a.get(r) : void 0;
        return n == null || i == null || typeof r != "string"
          ? o("relay-runtime").ConnectionHandler.buildConnectionEdge(e, t, n)
          : (a.delete(r),
            i.copyFieldsFrom(n),
            i.setValue(n.getValue("has_been_seen"), "has_been_seen"),
            i);
      });
    }
    function h(e, t, n, a, i) {
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
    function y(t, n, r) {
      var a = o("relay-runtime").getRelayHandleKey(e, n, null);
      return t.getLinkedRecord(a, r);
    }
    function C(t, n, r) {
      return o("RelayFBConnectionHandler").getAllConnectionsWithKey(t, n, r, e);
    }
    function b(e, t, n) {
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
    function v(e, t, n, a) {
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
    ((l.update = m),
      (l.getConnection = y),
      (l.getAllConnectionsWithKey = C),
      (l.buildConnectionEdge = v),
      (l.insertEdgeBefore =
        o("relay-runtime").ConnectionHandler.insertEdgeBefore));
  },
  98,
);
