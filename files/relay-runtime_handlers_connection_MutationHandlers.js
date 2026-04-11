__d(
  "relay-runtime/handlers/connection/MutationHandlers",
  [
    "invariant",
    "relay-runtime/handlers/connection/ConnectionHandler",
    "relay-runtime/handlers/connection/ConnectionInterface",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        update: function (t, n) {
          var e = t.get(n.dataID);
          if (e != null) {
            var r = e.getValue(n.fieldKey);
            typeof r == "string"
              ? t.delete(r)
              : Array.isArray(r) &&
                r.forEach(function (e) {
                  typeof e == "string" && t.delete(e);
                });
          }
        },
      },
      u = {
        update: function (t, r) {
          var e = t.get(r.dataID);
          if (e != null) {
            var o = r.handleArgs.connections;
            o != null || l(0, 23070);
            var a = e.getValue(r.fieldKey),
              i = Array.isArray(a) ? a : [a];
            i.forEach(function (e) {
              if (typeof e == "string")
                for (var r of o) {
                  var a = t.get(r);
                  if (a == null) {
                    n("warning")(
                      !1,
                      "[Relay] The connection with id `%s` doesn't exist.",
                      r,
                    );
                    continue;
                  }
                  n(
                    "relay-runtime/handlers/connection/ConnectionHandler",
                  ).deleteNode(a, e);
                }
            });
          }
        },
      },
      c = {
        update: _(
          (e = n("relay-runtime/handlers/connection/ConnectionHandler"))
            .insertEdgeAfter,
        ),
      },
      d = { update: _(e.insertEdgeBefore) },
      m = { update: f(e.insertEdgeAfter) },
      p = { update: f(e.insertEdgeBefore) };
    function _(e) {
      return function (t, r) {
        var o = t.get(r.dataID);
        if (o != null) {
          var a = r.handleArgs.connections;
          a != null || l(0, 23070);
          var i, s;
          try {
            i = o.getLinkedRecord(r.fieldKey);
          } catch (e) {}
          if (!i)
            try {
              s = o.getLinkedRecords(r.fieldKey);
            } catch (e) {}
          if (i == null && s == null) {
            n("warning")(
              !1,
              "MutationHandlers: Expected the server edge to be non-null.",
            );
            return;
          }
          var u = n(
              "relay-runtime/handlers/connection/ConnectionInterface",
            ).get(),
            c = u.NODE,
            d = u.EDGES,
            m = s != null ? s : [i],
            p = function () {
              if (f == null) return 0;
              var r = f.getLinkedRecord("node");
              if (!r) return 0;
              var o = r.getDataID();
              for (var i of a) {
                var s,
                  u = t.get(i);
                if (u == null) {
                  n("warning")(
                    !1,
                    "[Relay] The connection with id `%s` doesn't exist.",
                    i,
                  );
                  continue;
                }
                var m =
                  (s = u.getLinkedRecords(d)) == null
                    ? void 0
                    : s.some(function (e) {
                        var t;
                        return (
                          (e == null || (t = e.getLinkedRecord(c)) == null
                            ? void 0
                            : t.getDataID()) === o
                        );
                      });
                if (!m) {
                  var p = n(
                    "relay-runtime/handlers/connection/ConnectionHandler",
                  ).buildConnectionEdge(t, u, f);
                  (p != null || l(0, 23071), e(u, p));
                }
              }
            },
            _;
          for (var f of m) _ = p();
        }
      };
    }
    function f(e) {
      return function (t, r) {
        var o = t.get(r.dataID);
        if (o != null) {
          var a = r.handleArgs,
            i = a.connections,
            s = a.edgeTypeName;
          (i != null || l(0, 23070), s != null || l(0, 26584));
          var u, c;
          try {
            u = o.getLinkedRecord(r.fieldKey);
          } catch (e) {}
          if (!u)
            try {
              c = o.getLinkedRecords(r.fieldKey);
            } catch (e) {}
          if (u == null && c == null) {
            n("warning")(
              !1,
              "MutationHandlers: Expected target node to exist.",
            );
            return;
          }
          var d = n(
              "relay-runtime/handlers/connection/ConnectionInterface",
            ).get(),
            m = d.NODE,
            p = d.EDGES,
            _ = c != null ? c : [u],
            f = function () {
              if (g == null) return 1;
              var r = g.getDataID();
              for (var o of i) {
                var a,
                  u = t.get(o);
                if (u == null) {
                  n("warning")(
                    !1,
                    "[Relay] The connection with id `%s` doesn't exist.",
                    o,
                  );
                  continue;
                }
                var c =
                  (a = u.getLinkedRecords(p)) == null
                    ? void 0
                    : a.some(function (e) {
                        var t;
                        return (
                          (e == null || (t = e.getLinkedRecord(m)) == null
                            ? void 0
                            : t.getDataID()) === r
                        );
                      });
                if (!c) {
                  var d = n(
                    "relay-runtime/handlers/connection/ConnectionHandler",
                  ).createEdge(t, u, g, s);
                  (d != null || l(0, 23071), e(u, d));
                }
              }
            };
          for (var g of _) f();
        }
      };
    }
    a.exports = {
      AppendEdgeHandler: c,
      DeleteRecordHandler: s,
      PrependEdgeHandler: d,
      AppendNodeHandler: m,
      PrependNodeHandler: p,
      DeleteEdgeHandler: u,
    };
  },
  null,
);
