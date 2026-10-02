__d(
  "WACreateHandleStreamError",
  [
    "Promise",
    "WAResultOrError",
    "WASmaxDecisionTreeUtils",
    "WASmaxStreamErrorAckKickRPC",
    "WASmaxStreamErrorBadMacRPC",
    "WASmaxStreamErrorCodeRPC",
    "WASmaxStreamErrorConflictRPC",
    "WASmaxStreamErrorPingKickRPC",
    "WASmaxStreamErrorXMLNotWellFormedRPC",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = t.md,
        a = t.streamError;
      return function (i) {
        var t = o("WASmaxDecisionTreeUtils").firstChild(i);
        if (t.success) {
          var l = t.value;
          switch (l.tag) {
            case "ack": {
              var s = o("WASmaxStreamErrorAckKickRPC").receiveAckKickRPC(i),
                u = s.parsedRequest;
              return a.handleAckKick(u).then(o("WAResultOrError").makeResult);
            }
            case "ping": {
              var c = o("WASmaxStreamErrorPingKickRPC").receivePingKickRPC(i),
                d = c.parsedRequest;
              return a.handlePingKick(d).then(o("WAResultOrError").makeResult);
            }
            case "xml-not-well-formed":
              return (
                o(
                  "WASmaxStreamErrorXMLNotWellFormedRPC",
                ).receiveXMLNotWellFormedRPC(i),
                a.handleXmlNotWellFormed().then(o("WAResultOrError").makeResult)
              );
            case "bad-mac":
              return (
                o("WASmaxStreamErrorBadMacRPC").receiveBadMacRPC(i),
                a.handleBadMac().then(o("WAResultOrError").makeResult)
              );
            case "conflict": {
              var m = o("WASmaxStreamErrorConflictRPC").receiveConflictRPC(i),
                p = m.parsedRequest;
              return a.handleConflict(p).then(o("WAResultOrError").makeResult);
            }
            default:
              return (e || (e = n("Promise"))).resolve(
                o("WAUnknownStanzaError").unknownStanzaError,
              );
          }
        } else {
          var _ = o("WASmaxStreamErrorCodeRPC").receiveCodeRPC(i),
            f = _.parsedRequest,
            g = f.code;
          switch (g) {
            case "515": {
              var h = r == null ? void 0 : r.handleRegistrateCompanionSuccess;
              if (h != null) return h().then(o("WAResultOrError").makeResult);
              break;
            }
            case "516": {
              var y = r == null ? void 0 : r.handleRegistrateCompanionFailure;
              if (y != null) return y().then(o("WAResultOrError").makeResult);
              break;
            }
            default:
              return a
                .handleStreamErrorCode({ code: g })
                .then(o("WAResultOrError").makeResult);
          }
          return (e || (e = n("Promise"))).resolve(
            o("WAUnknownStanzaError").unknownStanzaError,
          );
        }
      };
    }
    l.createHandleStreamError = s;
  },
  98,
);
