__d(
  "WAWebMainThreadQplHandler",
  ["WALogger", "WATimeUtils", "WAWebWorkerQplTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 2 * o("WATimeUtils").MINUTE_MILLISECONDS,
      d = new Map();
    function m(e, t) {
      return e + ":" + t;
    }
    function p(t) {
      var n = t.getQPLAttrs(),
        r = n.instanceKey,
        a = n.markerId;
      return t.isActive()
        ? _(t)
        : (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[QplHandler] inactive flow, skip registration",
              ])),
          ),
          o("WAWebWorkerQplTypes").createSerializableQplHandle(a, r));
    }
    function _(e) {
      g();
      var t = e.getQPLAttrs(),
        n = t.instanceKey,
        r = t.markerId,
        a = m(r, n),
        i = function () {
          return d.delete(a);
        },
        l = e.endSuccess,
        s = e.endFail,
        u = e.endFailWithError,
        c = e.endTimeout,
        p = e.endCancel;
      return (
        (e.endSuccess = function () {
          return (i(), l.apply(void 0, arguments));
        }),
        (e.endFail = function () {
          return (i(), s.apply(void 0, arguments));
        }),
        (e.endFailWithError = function () {
          return (i(), u.apply(void 0, arguments));
        }),
        (e.endTimeout = function () {
          return (i(), c.apply(void 0, arguments));
        }),
        (e.endCancel = function () {
          return (i(), p.apply(void 0, arguments));
        }),
        d.set(a, e),
        o("WAWebWorkerQplTypes").createSerializableQplHandle(r, n)
      );
    }
    function f(e) {
      var t = m(e.markerId, e.instanceKey);
      g({ exceptKey: t });
      var n = d.get(t);
      if (n == null) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebMainThreadQplHandler: no flow found for key=",
              "",
            ])),
          t,
        );
        return;
      }
      if (!n.isActive()) {
        (o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebMainThreadQplHandler: flow key=",
              " already ended",
            ])),
          t,
        ),
          d.delete(t));
        return;
      }
      e: {
        var r = e;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "addAnnotations" &&
          "annotations" in r
        ) {
          var a = r.annotations;
          n.addAnnotations(a);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "addPoint" &&
          "pointName" in r &&
          "annotations" in r &&
          "timestamp" in r
        ) {
          var i = r.pointName,
            l = r.annotations,
            c = r.timestamp;
          n.addPoint(i, l != null ? l : void 0, { timestamp: c });
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "addPointLocal" &&
          "pointName" in r &&
          "annotations" in r &&
          "timestamp" in r
        ) {
          var p = r.pointName,
            _ = r.annotations,
            f = r.timestamp;
          n.addPointLocal(p, _ != null ? _ : void 0, { timestamp: f });
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          (r.type === "endSuccess" ||
            r.type === "endFail" ||
            r.type === "endFailWithError" ||
            r.type === "endTimeout" ||
            r.type === "endCancel")
        ) {
          var y = r;
          h(n, y);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    function g(e) {
      for (var t of d) {
        var n = t[0],
          r = t[1];
        n !== (e == null ? void 0 : e.exceptKey) &&
          (!r.isActive() || r.hasPassedTimeout({ graceInMs: c })) &&
          d.delete(n);
      }
    }
    function h(e, t) {
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "endSuccess" &&
          "annotations" in n &&
          "timestamp" in n
        ) {
          var r = n.annotations,
            o = n.timestamp;
          e.endSuccess(r != null ? r : void 0, { timestamp: o });
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "endFail" &&
          "errorName" in n &&
          "annotations" in n &&
          "timestamp" in n
        ) {
          var a = n.errorName,
            i = n.annotations,
            l = n.timestamp;
          e.endFail(a, i != null ? i : void 0, { timestamp: l });
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "endFailWithError" &&
          "errorName" in n &&
          "failReason" in n &&
          "annotations" in n &&
          "timestamp" in n
        ) {
          var s = n.errorName,
            u = n.failReason,
            c = n.annotations,
            d = n.timestamp;
          e.endFailWithError(
            s,
            u != null ? u : void 0,
            c != null ? c : void 0,
            { timestamp: d },
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "endTimeout" &&
          "annotations" in n &&
          "timestamp" in n
        ) {
          var m = n.annotations,
            p = n.timestamp;
          e.endTimeout(m != null ? m : void 0, { timestamp: p });
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "endCancel" &&
          "cancelReason" in n &&
          "annotations" in n &&
          "timestamp" in n
        ) {
          var _ = n.cancelReason,
            f = n.annotations,
            g = n.timestamp;
          e.endCancel(_ != null ? _ : void 0, f != null ? f : void 0, {
            timestamp: g,
          });
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    ((l.TIMED_OUT_FLOW_GRACE_MS = c),
      (l.serializeQplForBridge = p),
      (l.handleQplBridgeMessage = f));
  },
  98,
);
