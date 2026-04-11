__d(
  "WAWebMainThreadQplHandler",
  ["WALogger", "WAWebWorkerQplTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Map();
    function d(e, t) {
      return e + ":" + t;
    }
    function m(t) {
      var n = t.getQPLAttrs(),
        r = n.instanceKey,
        a = n.markerId;
      return t.isActive()
        ? p(t)
        : (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[QplHandler] inactive flow, skip registration",
              ])),
          ),
          o("WAWebWorkerQplTypes").createSerializableQplHandle(a, r));
    }
    function p(e) {
      var t = e.getQPLAttrs(),
        n = t.instanceKey,
        r = t.markerId,
        a = d(r, n),
        i = function () {
          return c.delete(a);
        },
        l = e.endSuccess,
        s = e.endFail,
        u = e.endFailWithError,
        m = e.endCancel;
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
        (e.endCancel = function () {
          return (i(), m.apply(void 0, arguments));
        }),
        c.set(a, e),
        o("WAWebWorkerQplTypes").createSerializableQplHandle(r, n)
      );
    }
    function _(e, t) {
      c.delete(d(e, t));
    }
    function f(e) {
      var t = d(e.markerId, e.instanceKey),
        n = c.get(t);
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
          c.delete(t));
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
          "annotations" in r
        ) {
          var i = r.pointName,
            l = r.annotations;
          n.addPoint(i, l != null ? l : void 0);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "endSuccess" &&
          "annotations" in r
        ) {
          var m = r.annotations;
          n.endSuccess(m != null ? m : void 0);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "endFail" &&
          "errorName" in r &&
          "annotations" in r
        ) {
          var p = r.errorName,
            _ = r.annotations;
          n.endFail(p, _ != null ? _ : void 0);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "endFailWithError" &&
          "errorName" in r &&
          "failReason" in r &&
          "annotations" in r
        ) {
          var f = r.errorName,
            g = r.failReason,
            h = r.annotations;
          n.endFailWithError(f, g != null ? g : void 0, h != null ? h : void 0);
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "endCancel" &&
          "cancelReason" in r &&
          "annotations" in r
        ) {
          var y = r.cancelReason,
            C = r.annotations;
          n.endCancel(y != null ? y : void 0, C != null ? C : void 0);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    ((l.serializeQplForBridge = m),
      (l.unregisterQplFlow = _),
      (l.handleQplBridgeMessage = f));
  },
  98,
);
