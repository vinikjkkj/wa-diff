__d(
  "WAHandleStreamError",
  ["Promise", "WABridge", "WAHandleFailureUtils", "WALogger", "WAOdsEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = function (n) {
        var t = n.ackClass,
          r = n.ackId,
          a = n.ackType,
          i = "ack";
        return (
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.STREAM_ERROR,
              key: i + "." + a + "." + t,
            }),
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Client didn't send 'ack' back (type: ",
                ", class: ",
                "), closing socket. Unacked id: ",
                "",
              ])),
            a,
            t,
            r,
          ),
          v(i)
        );
      },
      g = function (t) {
        var e = t.pingId,
          n = "ping";
        return (
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.STREAM_ERROR,
              key: "" + n,
            }),
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Unacked ping id: ",
                "",
              ])),
            e,
          ),
          v(n)
        );
      },
      h = function () {
        var e = "xml-not-well-formed";
        return (
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.STREAM_ERROR,
              key: "" + e,
            }),
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "xml-not-well-formed stream:error is received",
              ])),
          ),
          v(e)
        );
      },
      y = function () {
        var e = "bad-mac";
        return (
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.STREAM_ERROR,
              key: "" + e,
            }),
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "bad-mac stream:error is received",
              ])),
          ),
          v(e)
        );
      },
      C = function (t) {
        var e = t.code,
          n = t.conflictReason,
          r = "conflict";
        return (
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.STREAM_ERROR,
              key:
                r +
                "." +
                (e != null ? e : "undefined") +
                "." +
                (n != null ? n : "undefined"),
            }),
          e === o("WAHandleFailureUtils").FAILURE_CODES.NOT_AUTHORIZED
            ? S()
            : (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Conflict stream:error is received",
                  ])),
              ),
              v(r))
        );
      },
      b = function (t) {
        var e = t.code,
          n = "other";
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Code ",
                " stream:error is received",
              ])),
            e,
          ),
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.STREAM_ERROR,
              key: n + "." + e,
            }),
          e === o("WAHandleFailureUtils").FAILURE_CODES.NOT_AUTHORIZED
            ? S()
            : v(n)
        );
      };
    function v(e) {
      return (
        o("WALogger").WARN(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "Stream error of type ",
              " is causing a closed socket",
            ])),
          e,
        ),
        (_ || (_ = n("Promise"))).resolve("CLOSE_SOCKET")
      );
    }
    function S() {
      return (_ || (_ = n("Promise"))).resolve("NO_ACK");
    }
    ((l.handleAckKick = f),
      (l.handlePingKick = g),
      (l.handleXmlNotWellFormed = h),
      (l.handleBadMac = y),
      (l.handleConflict = C),
      (l.handleStreamErrorCode = b));
  },
  98,
);
