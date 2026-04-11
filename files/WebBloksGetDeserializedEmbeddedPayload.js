__d(
  "WebBloksGetDeserializedEmbeddedPayload",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r =
          (n = e.getResources()) == null || (n = n.payloads.get(t)) == null
            ? void 0
            : n.payload;
      if (r == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Could not find embedded payload for ID: " + t,
        );
      return r;
    }
    l.default = e;
  },
  98,
);
