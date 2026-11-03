__d(
  "WAWebSharableEventServerClient",
  ["WAWebRelayClient", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = null,
            r = yield o("WAWebRelayClient").fetchQuery(e, t, {
              environmentType: "whatsapp_web",
              fetchPolicy: "network-only",
              getInlineDataReader: function (t) {
                n = t;
              },
            });
          return { response: r, reader: d(n) };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = null,
            r = yield o("WAWebRelayClient").commitMutation(e, t, {
              environmentType: "whatsapp_web",
              getInlineDataReader: function (t) {
                n = t;
              },
            });
          return { response: r, reader: d(n) };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      if (e == null)
        throw r("err")(
          "[sharable_event] the Relay client returned no inline reader",
        );
      return e;
    }
    ((l.querySharableEventServer = e), (l.mutateSharableEventServer = u));
  },
  98,
);
