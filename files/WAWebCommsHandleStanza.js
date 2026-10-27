__d(
  "WAWebCommsHandleStanza",
  [
    "WALogger",
    "WAWebCommsHandleLoggedInStanzaDeferred",
    "WAWebCommsHandleWorkerCompatibleStanza",
    "WAWebHandleStanzaCommon",
    "WAWebOfflineHandler",
    "WAWebOneQueue",
    "WAWebVoipBackendEnqueueCallOfferPlaceholder",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          a === void 0 && (a = 0);
          var i = d(t, n, a),
            l = o("WAWebOneQueue").countOfflineStanzaForPullMode(t);
          try {
            var u = yield i;
            if (u != null) return u;
          } catch (n) {
            var c, m;
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleStanza] exception for tag:",
                  " type:",
                  " id:",
                  "",
                ])),
              t.tag,
              (c = t.attrs) == null ? void 0 : c.type,
              (m = t.attrs) == null ? void 0 : m.id,
            ),
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleStanza] ",
                      "",
                    ])),
                  r("getErrorSafe")(n).stack,
                )
                .sendLogs("handle-stanza"));
          } finally {
            l();
          }
          return "NO_ACK";
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.attrs;
          if (r.offline) {
            var a = parseInt(r.t, 10),
              i = parseInt(r.offline, 10);
            o("WAWebOfflineHandler").OfflineMessageHandler.newOfflineStanza(
              a,
              n,
              i,
            );
          }
          if (e.tag === "iq") return o("WAWebHandleStanzaCommon").handleIq(e);
          var l = o(
            "WAWebCommsHandleWorkerCompatibleStanza",
          ).handleWorkerCompatibleStanza(e);
          return l != null
            ? l
            : (o(
                "WAWebVoipBackendEnqueueCallOfferPlaceholder",
              ).maybeEnqueueCallOfferPlaceholderFromStanza(e),
              o("WAWebCommsHandleLoggedInStanzaDeferred").handleLoggedInStanza(
                e,
                t,
              ));
        })),
        m.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
