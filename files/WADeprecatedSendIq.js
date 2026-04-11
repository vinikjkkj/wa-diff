__d(
  "WADeprecatedSendIq",
  [
    "Promise",
    "WAAckParser",
    "WAArrayUtils",
    "WAComms",
    "WALogger",
    "WAParseIqResponse",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return o("WAComms")
        ._sendIq(e, !1)
        .then(function (e) {
          return o("WAParseIqResponse").parseIqResponse(e, t);
        });
    }
    function c(e, t, n) {
      return o("WAComms")
        ._sendIq(e, !1)
        .then(function (e) {
          return o("WAParseIqResponse").parseIqResponse(e, t, n);
        });
    }
    function d(e, t, n) {
      return o("WAComms")
        ._sendIq(e, !1, n)
        .then(function (e) {
          return o("WAParseIqResponse").parseIqResponse(e, t);
        });
    }
    function m(e, t) {
      return o("WAComms")
        ._sendIq(e, !0)
        .then(function (e) {
          return o("WAParseIqResponse").parseIqResponse(e, t);
        });
    }
    function p(e, t) {
      return _(e, t).then(function () {});
    }
    function _(t, r) {
      return new (s || (s = n("Promise")))(function (a) {
        var i = o("WAComms").singletonOrThrowIfUninitialized(
            "deprecatedSendStanzaAndReturnAck",
          ),
          l = function (t) {
            var e = o("WAAckParser").AckParser.parse(t);
            return !e.error && o("WAAckParser").ackMatchesTemplate(e.success, r)
              ? t
              : null;
          },
          u = {
            type: "ack",
            parseAndTest: l,
            resolve: a,
            stanza: t,
            attachedToSocketId: o("WAComms").DEFAULT_SOCKET_ID,
            orderedId: o("WAComms").getAndIncrementNextOrderedId(),
          };
        if ((i.ackHandlers.push(u), !i.socket)) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Comms has no open socket, will send stanza when socket opens",
              ])),
          );
          return;
        }
        i.callStanza(t).catch(function (e) {
          var t = i.ackHandlers.indexOf(u);
          t !== -1 &&
            (o("WAArrayUtils").removeIndexWithoutPreservingOrder(
              i.ackHandlers,
              t,
            ),
            u.resolve((s || (s = n("Promise"))).reject(e)));
        });
      });
    }
    function f(e, t) {
      o("WAComms").castSmaxStanza(e, t);
    }
    ((l.deprecatedSendIq = u),
      (l.deprecatedSendIqErrorParser = c),
      (l.deprecatedSendIqIfConnectedWithin = d),
      (l.deprecatedSendIqWithoutRetry = m),
      (l.deprecatedSendStanzaAndWaitForAck = p),
      (l.deprecatedSendStanzaAndReturnAck = _),
      (l.deprecatedCastStanza = f));
  },
  98,
);
