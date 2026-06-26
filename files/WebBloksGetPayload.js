__d(
  "WebBloksGetPayload",
  ["WebBloksInflate"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = e.readPayload(t),
        a = r.payload.layout.bloks_payload,
        i = e.createScopedContextWithDepth(a.depth),
        l = o(
          "WebBloksInflate",
        ).inflateBloksDataFromBloksPayloadToBloksParseResult(
          a,
          i,
          t,
          !0,
          !0,
          n,
        );
      return l;
    }
    l.default = e;
  },
  98,
);
