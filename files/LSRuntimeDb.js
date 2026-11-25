__d(
  "LSRuntimeDb",
  ["FBLogger", "LSIterationHelpers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o, a, i) {
      return {
        metadata: n,
        table: function (l) {
          var t = n.tableNames[n.tableIds[l]];
          return s(e, t, r, o, a, i);
        },
        transactionId: e.__internal__transaction_id,
      };
    }
    function s(e, t, n, a, i, l) {
      var s = e.transactionTable(t.name, a[a.length - 1]);
      return {
        add: function (n) {
          (l == null || l.logTableOperation(t.name, "add"),
            t.name.includes("encrypted_backups") &&
              (l == null || l.shouldSample()),
            o("LSIterationHelpers").isTranportKeyEnforcedTable(t.name) &&
              i &&
              (n.transportKey = "FBBroker"));
          var e = s.add(n);
          return e;
        },
        fetch: function () {
          (l == null || l.logTableOperation(t.name, "fetch"),
            t.name.includes("encrypted_backups") &&
              (l == null || l.shouldSample()));
          for (var e = arguments.length, r = new Array(e), c = 0; c < e; c++)
            r[c] = arguments[c];
          return o("LSIterationHelpers").fetch(
            r.length === 0 ? [[[[]], void 0]] : r,
            "asc",
            t,
            n,
            s,
            u,
            i,
            a.join(", "),
          );
        },
        fetchDesc: function () {
          (l == null || l.logTableOperation(t.name, "fetchDesc"),
            t.name.includes("encrypted_backups") &&
              (l == null || l.shouldSample()));
          for (var e = arguments.length, r = new Array(e), c = 0; c < e; c++)
            r[c] = arguments[c];
          return o("LSIterationHelpers").fetch(
            r.length === 0 ? [[[[]], void 0]] : r,
            "desc",
            t,
            n,
            s,
            u,
            i,
            a.join(", "),
          );
        },
        peekNextAutoIncrementId: function () {
          return (
            l == null || l.logTableOperation(t.name, "peekNextAutoIncrementId"),
            t.name.includes("encrypted_backups") &&
              (l == null || l.shouldSample()),
            s.peekNextAutoIncrementId()
          );
        },
        put: function (n) {
          if (
            (l == null || l.logTableOperation(t.name, "put"),
            t.name.includes("encrypted_backups") &&
              (l == null || l.shouldSample()),
            o("LSIterationHelpers").isTranportKeyEnforcedTable(t.name) &&
              i &&
              (n.transportKey = "FBBroker"),
            o("LSIterationHelpers").isNativePendingTaskViolation(i, t, n))
          )
            throw r("FBLogger")("messenger_web").mustfixThrow(
              "cannot put native task via LS transport",
            );
          var e = t.primaryKeyIds.map(function (e) {
              if (n[e] !== void 0) return n[e];
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "primary key must be defined on object",
              );
            }),
            a = s.delete.apply(s, e).then(function () {
              return s.add(
                o("LSIterationHelpers").stripUndefinedProperties(
                  babelHelpers.extends({}, n),
                ),
              );
            });
          return a;
        },
      };
    }
    function u(e, t) {
      if (typeof e == "object" && !Array.isArray(e)) {
        var n = e,
          o,
          a;
        if (t === "asc") {
          if (
            (Object.prototype.hasOwnProperty.call(e, "gt") && (o = [n.gt, 1]),
            Object.prototype.hasOwnProperty.call(e, "gte"))
          ) {
            if (o != null)
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "Cannot specify both gt and gte",
              );
            o = [n.gte, 0];
          }
          if (
            (Object.prototype.hasOwnProperty.call(e, "lt") && (a = [n.lt, 1]),
            Object.prototype.hasOwnProperty.call(e, "lte"))
          ) {
            if (a != null)
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "Cannot specify both lt and lte",
              );
            a = [n.lte, 0];
          }
        } else {
          if (
            (Object.prototype.hasOwnProperty.call(e, "lt") && (o = [n.lt, 1]),
            Object.prototype.hasOwnProperty.call(e, "lte"))
          ) {
            if (o != null)
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "Cannot specify both lt and lte",
              );
            o = [n.lte, 0];
          }
          if (
            (Object.prototype.hasOwnProperty.call(e, "gt") && (a = [n.gt, 1]),
            Object.prototype.hasOwnProperty.call(e, "gte"))
          ) {
            if (a != null)
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "Cannot specify both gt and gte",
              );
            a = [n.gte, 0];
          }
        }
        return { end: a, start: o };
      }
      return { end: [e, 0], start: [e, 0] };
    }
    ((l.LSRuntimeDb = e), (l.parseConstraint = u));
  },
  98,
);
