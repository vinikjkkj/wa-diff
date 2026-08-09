__d(
  "SharedWorkerEventManager",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = function (n) {
          var e, o, a;
          if (
            typeof n.data == "object" &&
            ((e = n.data) == null ? void 0 : e.type) === "console" &&
            typeof ((o = n.data) == null ? void 0 : o.response) == "object" &&
            ((a = n.data) == null ? void 0 : a.response) != null
          ) {
            var i = n.data.response,
              l = i.args,
              s = i.method;
            if (
              typeof s != "string" ||
              !["log", "error", "info", "debug", "warn"].includes(s)
            ) {
              r("FBLogger")("worker").mustfix(
                "Unexpected console method: %s",
                String(s),
              );
              return;
            }
            if (!Array.isArray(l)) {
              r("FBLogger")("worker").mustfix(
                'Expected console args "%s" to be an array',
                JSON.stringify(l),
              );
              return;
            }
            t({ method: s, args: l });
          }
        },
        o = e.port;
      return (
        o.addEventListener("message", n),
        function () {
          return o.removeEventListener("message", n);
        }
      );
    }
    function s(e, t) {
      var n = function (n) {
          var e;
          if (
            typeof n.data == "object" &&
            ((e = n.data) == null ? void 0 : e.type) === "sw-uncaught-error"
          ) {
            var r,
              o,
              a =
                typeof ((r = n.data) == null ? void 0 : r.e) == "object"
                  ? (o = n.data.e) != null
                    ? o
                    : {}
                  : {},
              i = a.colno,
              l = a.error,
              s = a.filename,
              u = a.lineno,
              c = a.message;
            t({
              error: l instanceof Error ? l : null,
              errorObject: {
                lineno: typeof u == "number" ? u : null,
                colno: typeof i == "number" ? i : null,
                filename: typeof s == "string" ? s : null,
                message: typeof c == "string" ? c : null,
              },
            });
          }
        },
        r = e.port;
      return (
        r.addEventListener("message", n),
        function () {
          return r.removeEventListener("message", n);
        }
      );
    }
    function u(e, t, n) {
      var o = function (o) {
          var e;
          if (
            typeof o.data == "object" &&
            ((e = o.data) == null ? void 0 : e.type) === "sw-get-rev" &&
            typeof o.data.response == "object"
          ) {
            var a, i;
            t == null || t.markPoint("get_worker_rev_ack_received");
            var l =
                typeof o.data == "object" &&
                typeof ((a = o.data) == null ? void 0 : a.response) == "object"
                  ? (i = o.data) == null
                    ? void 0
                    : i.response
                  : {},
              s = l == null ? void 0 : l.workerRevision,
              u = l == null ? void 0 : l.spinTime,
              c = l == null ? void 0 : l.workerChecksum;
            if (s == null || typeof s != "number") {
              (t == null ||
                t.addAnnotations({
                  string: { malformedData: "rev is non-number" },
                }),
                r("FBLogger")("worker").mustfix(
                  "Expected worker rev to be non-null number, but instead received: %s",
                  String(s),
                ));
              return;
            }
            if (u == null || typeof u != "number") {
              (t == null ||
                t.addAnnotations({
                  string: { malformedData: "spin_time is non-number" },
                }),
                r("FBLogger")("worker").mustfix(
                  "Expected worker spin time to be non-null number, but instead received: %s",
                  String(u),
                ));
              return;
            }
            n({
              rev: s,
              spinTime: u,
              workerChecksum: typeof c == "string" ? c : void 0,
            });
          }
        },
        a = e.port;
      return (
        a.addEventListener("message", o),
        function () {
          return a.removeEventListener("message", o);
        }
      );
    }
    function c(e, t, n) {
      var r = function (a) {
          var o;
          if (
            typeof a.data == "object" &&
            ((o = a.data) == null ? void 0 : o.type) === "sw-shutdown" &&
            typeof a.data.response == "object"
          ) {
            var i,
              l,
              s,
              u,
              c,
              d,
              m =
                typeof ((i = a.data.response) == null ? void 0 : i.reason) ==
                "string"
                  ? (l = a.data.response) == null
                    ? void 0
                    : l.reason
                  : null,
              p =
                typeof ((s = a.data.response) == null ? void 0 : s.workerID) ==
                "string"
                  ? (u = a.data.response) == null
                    ? void 0
                    : u.workerID
                  : null,
              _ =
                typeof ((c = a.data.response) == null
                  ? void 0
                  : c.isInitialized) == "boolean"
                  ? (d = a.data.response) == null
                    ? void 0
                    : d.isInitialized
                  : null;
            (t({ reason: m, workerID: p, isInitialized: _ }),
              (n == null ? void 0 : n.once) === !0 &&
                e.port.removeEventListener("message", r));
          }
        },
        o = e.port;
      return (
        o.addEventListener("message", r),
        function () {
          return o.removeEventListener("message", r);
        }
      );
    }
    function d(e, t) {
      e.port.addEventListener("message", function (e) {
        var n, r, o;
        typeof e.data == "object" &&
          ((n = e.data) == null ? void 0 : n.type) === "sw-uptime-tracking" &&
          typeof ((r = e.data) == null ? void 0 : r.response) == "object" &&
          typeof ((o = e.data) == null || (o = o.response) == null
            ? void 0
            : o.trackerID) == "number" &&
          t({ trackerID: e.data.response.trackerID });
      });
    }
    function m(e, t, n) {
      var o = function (o) {
          var e, a;
          if (
            typeof o.data == "object" &&
            ((e = o.data) == null ? void 0 : e.type) === "execute-worker-ack" &&
            typeof ((a = o.data) == null ? void 0 : a.response) == "object"
          ) {
            var i,
              l,
              s,
              u =
                typeof o.data == "object" &&
                typeof ((i = o.data) == null ? void 0 : i.response) == "object"
                  ? (l = (s = o.data) == null ? void 0 : s.response) != null
                    ? l
                    : {}
                  : {},
              c = u.error,
              d = u.errorGettingSiteData,
              m = u.firstInit,
              p = u.spinMode,
              _ = u.spinTime,
              f = u.workerRevision;
            if (typeof m != "boolean") {
              (t == null ||
                t.addAnnotations({
                  string: { malformedData: "firstInit is non-boolean" },
                }),
                r("FBLogger")("worker").mustfix(
                  "Expected firstInit to be a boolean, but instead received: %s",
                  String(m),
                ));
              return;
            }
            var g = d != null ? d : c;
            if (typeof g == "string") return n({ err: g, isFirstInit: m });
            if (
              typeof f == "number" &&
              typeof p == "number" &&
              typeof _ == "number"
            )
              return n({
                workerRev: f,
                workerSpinTime: _,
                workerSpinMode: p,
                isFirstInit: m,
              });
            (t == null ||
              t.addAnnotations({
                string: {
                  malformedData:
                    "workerRevision, spinMode, and/or spinTime are non-numbers",
                },
              }),
              r("FBLogger")("worker").mustfix(
                "Expected workerRevision, spinMode, and spinTime to be non-null number, but instead received: %s %s %s",
                String(f),
                String(p),
                String(_),
              ));
          }
        },
        a = e.port;
      return (
        a.addEventListener("message", o),
        function () {
          return a.removeEventListener("message", o);
        }
      );
    }
    function p(e, t, n, o) {
      var a = function (l) {
          var i, s;
          if (
            typeof l.data == "object" &&
            ((i = l.data) == null ? void 0 : i.type) ===
              "execute-worker-imports" &&
            typeof ((s = l.data) == null ? void 0 : s.response) == "object"
          ) {
            var u, c, d;
            ((o == null ? void 0 : o.once) === !0 &&
              e.port.removeEventListener("message", a),
              t == null || t.markPoint("bundle_imports_ack"));
            var m =
                typeof l.data == "object" &&
                typeof ((u = l.data) == null ? void 0 : u.response) == "object"
                  ? (c = (d = l.data) == null ? void 0 : d.response) != null
                    ? c
                    : {}
                  : {},
              p = m.attempts,
              _ = m.err;
            if (_ != null && typeof _ != "string") {
              (t == null ||
                t.addAnnotations({
                  string: { malformedData: "err is neither null or a string" },
                }),
                r("FBLogger")("worker").mustfix(
                  "Expected err to be null or a string, but instead receieved: %s",
                  String(_),
                ));
              return;
            }
            if (p != null && typeof p != "number") {
              (t == null ||
                t.addAnnotations({
                  string: {
                    malformedData: "attempts is neither null or a number",
                  },
                }),
                r("FBLogger")("worker").mustfix(
                  "Expected attempts to be a number or null, but instead receieved: %s",
                  String(p),
                ));
              return;
            }
            n({ err: _, attempts: p });
          }
        },
        i = e.port;
      return (
        i.addEventListener("message", a),
        function () {
          return i.removeEventListener("message", a);
        }
      );
    }
    function _(e, t, n) {
      var o = function (o) {
          var e;
          if (
            typeof o.data == "object" &&
            ((e = o.data) == null ? void 0 : e.type) === "ww-hrp-init"
          ) {
            var a, i, l;
            t == null || t.markEventEnd("hrp_init");
            var s =
                typeof o.data == "object" &&
                typeof ((a = o.data) == null ? void 0 : a.response) == "object"
                  ? (i = (l = o.data) == null ? void 0 : l.response) != null
                    ? i
                    : {}
                  : {},
              u = s.err;
            if (u != null && typeof u != "string") {
              (t == null ||
                t.addAnnotations({
                  string: { malformedData: "err is neither null or a string" },
                }),
                r("FBLogger")("worker").mustfix(
                  "Expected err to be null or a string, but instead receieved: %s",
                  String(u),
                ));
              return;
            }
            n({ err: u });
          }
        },
        a = e.port;
      return (
        a.addEventListener("message", o),
        function () {
          return a.removeEventListener("message", o);
        }
      );
    }
    function f(e, t) {
      var n = function (n) {
          var e, r, o;
          if (
            typeof n.data == "object" &&
            ((e = n.data) == null ? void 0 : e.type) === "worker-init-mark" &&
            typeof ((r = n.data) == null ? void 0 : r.response) == "object" &&
            typeof ((o = n.data) == null || (o = o.response) == null
              ? void 0
              : o.point) == "string"
          ) {
            var a;
            t(
              (a = n.data) == null || (a = a.response) == null
                ? void 0
                : a.point,
            );
          }
        },
        r = e.port;
      return (
        r.addEventListener("message", n),
        function () {
          return r.removeEventListener("message", n);
        }
      );
    }
    function g(e, t, n) {
      var r = function (a) {
          var o, i, l;
          if (
            typeof a.data == "object" &&
            ((o = a.data) == null ? void 0 : o.type) === "self-terminate" &&
            typeof ((i = a.data) == null ? void 0 : i.response) == "object" &&
            typeof ((l = a.data) == null || (l = l.response) == null
              ? void 0
              : l.from) == "string"
          ) {
            var s,
              u,
              c,
              d,
              m,
              p,
              _,
              f =
                (s = a.data) == null || (s = s.response) == null
                  ? void 0
                  : s.from,
              g =
                typeof ((u = a.data) == null || (u = u.response) == null
                  ? void 0
                  : u.reason) == "string"
                  ? (c = a.data) == null || (c = c.response) == null
                    ? void 0
                    : c.reason
                  : "unknown",
              h =
                typeof ((d = a.data) == null || (d = d.response) == null
                  ? void 0
                  : d.workerID) == "string"
                  ? (m = a.data) == null || (m = m.response) == null
                    ? void 0
                    : m.workerID
                  : "unknown",
              y =
                typeof ((p = a.data) == null || (p = p.response) == null
                  ? void 0
                  : p.error) == "string"
                  ? (_ = a.data) == null || (_ = _.response) == null
                    ? void 0
                    : _.error
                  : void 0;
            ((n == null ? void 0 : n.once) === !0 &&
              e.port.removeEventListener("message", r),
              t(f, g, h, y));
          }
        },
        o = e.port;
      return (
        o.addEventListener("message", r),
        function () {
          return o.removeEventListener("message", r);
        }
      );
    }
    function h(e, t) {
      var n = t != null ? t : {},
        r = n.reason,
        o = n.upgrade;
      e.port.postMessage({
        type: "sw-shutdown",
        args: [{ reason: r, upgrade: o }],
      });
    }
    function y(e) {
      e.port.postMessage({ type: "sw-get-rev", args: [] });
    }
    function C(e, t) {
      var n = t != null ? t : {},
        r = n.isDev,
        o = n.jsModuleResource;
      e.port.postMessage({
        type: "execute-worker",
        args: [o != null ? o : {}, r],
      });
    }
    var b = ["no-hrp", "initialized", "processed"];
    function v(e, t, n) {
      var r = function (a) {
          var o, i, l;
          if (
            typeof a.data == "object" &&
            ((o = a.data) == null ? void 0 : o.type) === "connection-ack" &&
            typeof ((i = a.data) == null ? void 0 : i.response) == "object" &&
            typeof ((l = a.data) == null || (l = l.response) == null
              ? void 0
              : l.from) == "string"
          ) {
            var s,
              u,
              c,
              d,
              m,
              p =
                typeof ((s = a.data) == null || (s = s.response) == null
                  ? void 0
                  : s.workerID) == "string"
                  ? (u = a.data) == null || (u = u.response) == null
                    ? void 0
                    : u.workerID
                  : void 0,
              _ =
                typeof ((c = a.data) == null || (c = c.response) == null
                  ? void 0
                  : c.hrpStatus) == "string"
                  ? (d = a.data) == null || (d = d.response) == null
                    ? void 0
                    : d.hrpStatus
                  : void 0;
            (t(
              (m = a.data) == null || (m = m.response) == null
                ? void 0
                : m.from,
              p,
              _ != null && b.includes(_) ? _ : void 0,
            ),
              (n == null ? void 0 : n.once) === !0 &&
                e.port.removeEventListener("message", r));
          }
        },
        o = e.port;
      return (
        o.addEventListener("message", r),
        function () {
          return o.removeEventListener("message", r);
        }
      );
    }
    function S(e, t) {
      var n = function (n) {
          t(n.data);
        },
        r = e.port;
      return (
        r.addEventListener("message", n),
        function () {
          return r.removeEventListener("message", n);
        }
      );
    }
    function R(e) {
      e.port.postMessage({ type: "ww-connection-ack" });
    }
    function L(e, t, n) {
      var r = t.hrp,
        o = t.isDev,
        a = t.js_env;
      e.port.postMessage({
        type: "ww-hrp-init",
        hrp: r,
        is_dev: o,
        js_env: a,
        tiered: !0,
      });
    }
    function E(e, t) {
      var n = t.trackerID;
      e.port.postMessage({
        type: "sw-uptime-tracking",
        args: { trackerID: n },
      });
    }
    function k(t) {
      var n = e(t, function (e) {
          var t,
            n = e.args,
            r = e.method;
          (t = console)[r].apply(t, n);
        }),
        o = s(t, function (e) {
          var t = e.error,
            n = e.errorObject;
          t != null
            ? r("FBLogger")("worker")
                .catching(t)
                .mustfix("Shared Worker uncaught error.")
            : r("FBLogger")("worker").mustfix(
                "Shared Worker uncaught error with no Error object. %s:%d:%d:%s",
                n.message,
                n.lineno,
                n.colno,
                n.filename,
              );
        });
      return function () {
        (n(), o());
      };
    }
    ((l.registerLogFowardingListener = e),
      (l.registerUncaughtErrorForwardingListener = s),
      (l.registerGetWorkerRevListener = u),
      (l.registerWorkerShutdownListener = c),
      (l.registerUptimeTrackerListener = d),
      (l.registerExecuteWorkerAckListener = m),
      (l.registerExecuteWorkerImportsListener = p),
      (l.registerHrpInitListener = _),
      (l.registerWorkerInitPointsListener = f),
      (l.registerWorkerSelfTerminationListener = g),
      (l.emitWorkerShutdown = h),
      (l.emitGetRev = y),
      (l.emitExecuteWorker = C),
      (l.registerConnectionAckListener = v),
      (l.registerAnyMessageListener = S),
      (l.emitConnectionAckRequest = R),
      (l.emitHrpInit = L),
      (l.emitUptimeTracking = E),
      (l.registerForwardListeners = k));
  },
  98,
);
