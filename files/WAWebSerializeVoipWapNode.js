__d(
  "WAWebSerializeVoipWapNode",
  ["WABase64", "WABinary", "WAParsableWapNode", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
          e instanceof o("WAParsableWapNode").ParsableWapNode ? e.node() : e,
        n = o("WAWap").encodeStanza(t),
        r = new (o("WABinary").Binary)(n),
        a = r.readUint8(),
        i = r.readByteArrayView();
      return o("WABase64").encodeB64(i);
    }
    l.serializeVoipWapNode = e;
  },
  98,
);
