__d(
  "relay-runtime/mutations/RelayDeclarativeMutationConfig",
  ["relay-runtime/handlers/connection/ConnectionHandler", "warning"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze({
        RANGE_ADD: "RANGE_ADD",
        RANGE_DELETE: "RANGE_DELETE",
        NODE_DELETE: "NODE_DELETE",
      }),
      l = Object.freeze({ APPEND: "append", PREPEND: "prepend" });
    function s(e, t, n, r) {
      var o = n ? [n] : [],
        a = r ? [r] : [];
      return (
        e.forEach(function (e) {
          switch (e.type) {
            case "NODE_DELETE":
              var n = u(e, t);
              n && (o.push(n), a.push(n));
              break;
            case "RANGE_ADD":
              var r = c(e, t);
              r && (o.push(r), a.push(r));
              break;
            case "RANGE_DELETE":
              var i = d(e, t);
              i && (o.push(i), a.push(i));
              break;
          }
        }),
        {
          optimisticUpdater: function (t, n) {
            o.forEach(function (e) {
              e(t, n);
            });
          },
          updater: function (t, n) {
            a.forEach(function (e) {
              e(t, n);
            });
          },
        }
      );
    }
    function u(e, t) {
      var n = e.deletedIDFieldName,
        r = p(t);
      return r
        ? function (e, t) {
            var o = e.getRootField(r);
            if (o) {
              var a = o.getValue(n),
                i = Array.isArray(a) ? a : [a];
              i.forEach(function (t) {
                t && typeof t == "string" && e.delete(t);
              });
            }
          }
        : null;
    }
    function c(e, t) {
      var r = e.parentID,
        o = e.connectionInfo,
        a = e.edgeName;
      if (!r)
        return (
          n("warning")(
            !1,
            "RelayDeclarativeMutationConfig: For mutation config RANGE_ADD to work you must include a parentID",
          ),
          null
        );
      var i = p(t);
      return !o || !i
        ? null
        : function (e, t) {
            var l = e.get(r);
            if (l) {
              var s = e.getRootField(i);
              if (s) {
                var u = s.getLinkedRecord(a);
                for (var c of o)
                  if (u) {
                    var d = n(
                      "relay-runtime/handlers/connection/ConnectionHandler",
                    ).getConnection(l, c.key, c.filters);
                    if (d) {
                      var m = n(
                        "relay-runtime/handlers/connection/ConnectionHandler",
                      ).buildConnectionEdge(e, d, u);
                      if (m)
                        switch (c.rangeBehavior) {
                          case "append":
                            n(
                              "relay-runtime/handlers/connection/ConnectionHandler",
                            ).insertEdgeAfter(d, m);
                            break;
                          case "prepend":
                            n(
                              "relay-runtime/handlers/connection/ConnectionHandler",
                            ).insertEdgeBefore(d, m);
                            break;
                          default:
                            n("warning")(
                              !1,
                              "RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` will not work as expected in RelayModern, supported range behaviors are 'append', 'prepend'.",
                              c.rangeBehavior,
                            );
                            break;
                        }
                    }
                  }
              }
            }
          };
    }
    function d(e, t) {
      var r = e.parentID,
        o = e.connectionKeys,
        a = e.pathToConnection,
        i = e.deletedIDFieldName;
      if (!r)
        return (
          n("warning")(
            !1,
            "RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE to work you must include a parentID",
          ),
          null
        );
      var l = p(t);
      return l
        ? function (e, t) {
            if (t) {
              var n = [],
                s = t[l];
              if (s && Array.isArray(i)) {
                for (var u of i) s && typeof s == "object" && (s = s[u]);
                Array.isArray(s)
                  ? s.forEach(function (e) {
                      e &&
                        e.id &&
                        typeof e == "object" &&
                        typeof e.id == "string" &&
                        n.push(e.id);
                    })
                  : s && s.id && typeof s.id == "string" && n.push(s.id);
              } else
                s &&
                  typeof i == "string" &&
                  typeof s == "object" &&
                  ((s = s[i]),
                  typeof s == "string"
                    ? n.push(s)
                    : Array.isArray(s) &&
                      s.forEach(function (e) {
                        typeof e == "string" && n.push(e);
                      }));
              m(r, o, a, e, n);
            }
          }
        : null;
    }
    function m(e, t, r, o, a) {
      n("warning")(
        t != null,
        "RelayDeclarativeMutationConfig: RANGE_DELETE must provide a connectionKeys",
      );
      var i = o.get(e);
      if (i) {
        if (r.length < 2) {
          n("warning")(
            !1,
            "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection must include at least parent and connection",
          );
          return;
        }
        for (var l = i, s = 1; s < r.length - 1; s++)
          l && (l = l.getLinkedRecord(r[s]));
        if (!t || !l) {
          n("warning")(
            !1,
            "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection is incorrect. Unable to find connection with parentID: %s and path: %s",
            e,
            r.toString(),
          );
          return;
        }
        var u = function () {
          var e = n(
            "relay-runtime/handlers/connection/ConnectionHandler",
          ).getConnection(l, c.key, c.filters);
          e &&
            a.forEach(function (t) {
              n(
                "relay-runtime/handlers/connection/ConnectionHandler",
              ).deleteNode(e, t);
            });
        };
        for (var c of t) u();
      }
    }
    function p(e) {
      return e.fragment.selections &&
        e.fragment.selections.length > 0 &&
        e.fragment.selections[0].kind === "LinkedField"
        ? e.fragment.selections[0].name
        : null;
    }
    a.exports = { MutationTypes: e, RangeOperations: l, convert: s };
  },
  null,
);
