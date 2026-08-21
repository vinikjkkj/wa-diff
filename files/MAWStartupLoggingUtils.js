__d(
  "MAWStartupLoggingUtils",
  ["FBLogger", "MAWInit", "MAWMIC", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i = (a = t == null ? void 0 : t.message) != null ? a : "";
      (i.indexOf("Failed to execute 'importScripts'") >= 0
        ? o("MAWInit").MAWInit.fail(
            "import_scripts_failure",
            r("getErrorSafe")(t),
          )
        : o("MAWInit").MAWInit.fail("worker_error", r("getErrorSafe")(t)),
        r("FBLogger")("messenger_web").mustfix(
          "[MAWWebWorkerSingletonAsync: " + e + "]: %s:%s:%s:%s:%s:%s:%s",
          JSON.stringify(t == null ? void 0 : t.message),
          t == null ? void 0 : t.lineno,
          t == null ? void 0 : t.colno,
          t == null ? void 0 : t.filename,
          JSON.stringify(t, Object.getOwnPropertyNames(t)),
          t == null ? void 0 : t.name,
          n,
        ));
    }
    function s(e) {
      var t = function (o) {
        var n = o == null ? void 0 : o.data;
        if (typeof n == "object")
          if ((n == null ? void 0 : n.type) === "importScripts_error") {
            var a, i, l, s, u;
            e.removeEventListener("message", t);
            var c = r("FBLogger")("messenger_web");
            c = c.addMetadata(
              "FBLOGGER",
              "ERROR_STACK",
              (a =
                typeof (n == null ? void 0 : n.stack) == "string"
                  ? n == null
                    ? void 0
                    : n.stack
                  : JSON.stringify(n == null ? void 0 : n.stack)) != null
                ? a
                : "no_stack",
            );
            var d = n != null ? n : {},
              m = d.error_code,
              p = d.error_msg,
              _ = d.error_name,
              f = d.source,
              g = n == null ? void 0 : n.perfEntry,
              h = typeof g == "object" && g != null ? g : {},
              y = h.duration,
              C = h.encodedBodySize,
              b = h.responseStatus,
              v = h.transferSize;
            c.mustfix(
              "[MAWWebWorkerSingletonAsync Script Import Error Details]: %s:%s:%s || errCode:%s || respStatus:%s || encBodySize:%s || duration:%s || transferSize:%s",
              (f != null && JSON.stringify(f)) || "no_source",
              (_ != null && JSON.stringify(_)) || "no_name",
              (p != null && JSON.stringify(p)) || "no_msg",
              (m != null && JSON.stringify(m)) || "none",
              (i = JSON.stringify(b)) != null ? i : "none",
              (l = JSON.stringify(C)) != null ? l : "none",
              (s = JSON.stringify(y)) != null ? s : "none",
              (u = JSON.stringify(v)) != null ? u : "none",
            );
          } else
            (n == null ? void 0 : n.type) === "importScripts_success" &&
              e.removeEventListener("message", t);
      };
      e.addEventListener("message", t);
    }
    var u = new Set([
      "worker_connection_established",
      "worker_init_point_hsdp_end",
      "worker_init_point_hblp_end",
      "get_worker_rev_ack_received",
      "old_worker_shutdown_end",
      "old_worker_shutdown_start",
    ]);
    function c(e) {
      var t = e.data.annotations;
      if (t != null) {
        var n = { allowEarlyAnnotations: !0 };
        Object.keys(t).forEach(function (e) {
          var r,
            a = (r = t[e]) != null ? r : {};
          Object.entries(a).forEach(function (t) {
            var r = t[0],
              a = t[1],
              i = "workerInit" + r.charAt(0).toUpperCase() + r.substring(1);
            e === "int" && typeof a == "number"
              ? (o("MAWInit").MAWInit.addIntAnnotation(i, a, n),
                o("MAWMIC").addIntAnnotation(i, a))
              : e === "string" && typeof a == "string"
                ? (o("MAWInit").MAWInit.addStringAnnotation(i, a, n),
                  o("MAWMIC").addStringAnnotation(i, a))
                : e === "bool" &&
                  typeof a == "boolean" &&
                  (o("MAWInit").MAWInit.addBoolAnnotation(i, a, n),
                  o("MAWMIC").addBoolAnnotation(i, a));
          });
        });
      }
      var r = { allowEarlyLogPoints: !0 };
      if (e.type === "point") {
        if (u.has(e.data.event)) {
          var a = "worker_" + e.data.event;
          (o("MAWInit").MAWInit.logPoint(a, r), o("MAWMIC").addPoint(a));
        }
      } else
        e.type === "end" &&
          (e.data.cancel === !0
            ? o("MAWInit").MAWInit.logPoint("worker_creation_cancel", r)
            : e.data.errorName != null &&
              (o("MAWInit").MAWInit.addStringAnnotation(
                "errorDescription",
                e.data.errorName,
                { allowEarlyAnnotations: !0 },
              ),
              o("MAWInit").MAWInit.logPoint("worker_creation_fail", r)));
    }
    ((l.logWorkerError = e),
      (l.setImportScriptsErrorListener = s),
      (l.logSharedWorkerQPLEvents = c));
  },
  98,
);
