__d(
  "WACreateHandleIq",
  [
    "Promise",
    "WAAdv",
    "WAHandlePairDeviceProtocol",
    "WAHandlePairSuccessProtocol",
    "WAResultOrError",
    "WASmaxParseUtils",
    "WASmaxPingsServerPingRPC",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = t.comms,
        a = t.md;
      return function (i) {
        var t = i.attrs;
        switch (t.xmlns) {
          case "urn:xmpp:ping": {
            var l = r == null ? void 0 : r.handleServerPing;
            if (l != null) {
              var s = o("WASmaxPingsServerPingRPC").receiveServerPingRPC(i),
                u = s.makeServerPingResponseClientResponse,
                c = s.parsedRequest.from;
              return l({
                makeResponse: function () {
                  return u({ hasIqXmlnsUrnx3Axmppx3Aping: !1, iqTo: c });
                },
              }).then(o("WAResultOrError").makeResult);
            }
            break;
          }
          case "md": {
            var d = o("WASmaxParseUtils").maybeChildren(i);
            if (d.success && d.value != null) {
              var m = d.value[0].tag;
              switch (m) {
                case "pair-device": {
                  var p = a == null ? void 0 : a.handlePairDevice;
                  if (p != null) {
                    var _ = o("WAHandlePairDeviceProtocol").parsePairDevice(i),
                      f = _.value,
                      g = f.makeAck,
                      h = f.refs;
                    return p({
                      generateRegistrationQrCodeString: o(
                        "WAHandlePairDeviceProtocol",
                      ).generateRegistrationQrCodeString,
                      makeAck: g,
                      refs: h,
                    }).then(o("WAResultOrError").makeResult);
                  }
                  break;
                }
                case "pair-success": {
                  var y = a == null ? void 0 : a.handlePairSuccess;
                  if (y != null) {
                    var C = o("WAHandlePairSuccessProtocol").parsePairSuccess(
                      i,
                    );
                    if (C.success)
                      return y(
                        babelHelpers.extends({}, C.value, {
                          addDeviceSignatureToProtobuf:
                            o("WAAdv").addDeviceSignatureToProtobuf,
                          verifyAdvSignedDeviceIdentity:
                            o("WAAdv").verifyAdvSignedDeviceIdentity,
                        }),
                      ).then(o("WAResultOrError").makeResult);
                  }
                  break;
                }
              }
            }
          }
        }
        return (e || (e = n("Promise"))).resolve(
          o("WAUnknownStanzaError").unknownStanzaError,
        );
      };
    }
    l.createHandleIq = s;
  },
  98,
);
