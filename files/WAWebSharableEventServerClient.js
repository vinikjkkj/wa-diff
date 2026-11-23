__d(
  "WAWebSharableEventServerClient",
  ["WAWebRelayClient", "err"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = null,
        r = await o("WAWebRelayClient").fetchQuery(e, t, {
          environmentType: "whatsapp_web",
          fetchPolicy: "network-only",
          getInlineDataReader: function (t) {
            n = t;
          },
        });
      return { response: r, reader: u(n) };
    }
    async function s(e, t) {
      var n = null,
        r = await o("WAWebRelayClient").commitMutation(e, t, {
          environmentType: "whatsapp_web",
          getInlineDataReader: function (t) {
            n = t;
          },
        });
      return { response: r, reader: u(n) };
    }
    function u(e) {
      if (e == null)
        throw r("err")(
          "[sharable_event] the Relay client returned no inline reader",
        );
      return e;
    }
    ((l.querySharableEventServer = e), (l.mutateSharableEventServer = s));
  },
  98,
);
