__d(
  "WACreateHandleErrorStanza",
  [
    "Promise",
    "WAHandleErrorStanzaProtocol",
    "WALogger",
    "WAResultOrError",
    "WASmaxParseUtils",
    "WASmaxSmaxInvalidErrorRPC",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var r = t.error;
      return function (a) {
        var t = o("WASmaxParseUtils").attrInt(a, "code");
        if (!t.success)
          return (s || (s = n("Promise"))).resolve(
            o("WAUnknownStanzaError").unknownStanzaError,
          );
        var i = t.value;
        if (
          (r == null ? void 0 : r.handleSmaxErrorStanza) != null &&
          i === o("WAHandleErrorStanzaProtocol").SMAX_INVALID_CODE
        ) {
          var l = o("WASmaxSmaxInvalidErrorRPC").receiveErrorRPC(a),
            u = l.parsedRequest;
          return r
            .handleSmaxErrorStanza({
              code: o("WAHandleErrorStanzaProtocol").SMAX_INVALID_CODE,
              text: u.text,
            })
            .then(o("WAResultOrError").makeResult);
        }
        return (r == null ? void 0 : r.handleErrorStanza) != null
          ? r
              .handleErrorStanza({ code: i })
              .then(o("WAResultOrError").makeResult)
          : (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Receiced error from server: ",
                  "",
                ])),
              a.toString(),
            ),
            (s || (s = n("Promise"))).resolve(
              o("WAResultOrError").makeResult("NO_ACK"),
            ));
      };
    }
    l.createHandleErrorStanza = u;
  },
  98,
);
