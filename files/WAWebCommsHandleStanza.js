__d(
  "WAWebCommsHandleStanza",
  [
    "WALogger",
    "WAWebCommsHandleLoggedInStanzaDeferred",
    "WAWebCommsHandleWorkerCompatibleStanza",
    "WAWebHandleStanzaCommon",
    "WAWebOfflineHandler",
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
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            : o("WAWebCommsHandleLoggedInStanzaDeferred").handleLoggedInStanza(
                e,
                t,
              );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          a === void 0 && (a = 0);
          try {
            var i = yield u(t, n, a);
            if (i != null) return i;
          } catch (n) {
            var l, c;
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleStanza] exception for tag:",
                  " type:",
                  " id:",
                  "",
                ])),
              t.tag,
              (l = t.attrs) == null ? void 0 : l.type,
              (c = t.attrs) == null ? void 0 : c.id,
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
          }
          return "NO_ACK";
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
