__d(
  "WebBloksGetPayload",
  ["WebBloksInflate"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = e.createScopedContext(),
        a = e.readPayload(t),
        i = o(
          "WebBloksInflate",
        ).inflateBloksDataFromBloksPayloadToBloksParseResult(
          a.payload.layout.bloks_payload,
          r,
          t,
          !0,
          !0,
          n,
        );
      return i;
    }
    l.default = e;
  },
  98,
);
