__d(
  "WAWebWindowsHybridBridgeAdv.v2622",
  ["WABase64", "WAWebODS", "WAWebWindowsHybridBridgeTrace"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.verifySignatureAsync = async function (t, n, a) {
          var e = this;
          r("WAWebODS").incr("web.hybrid.bridge.adv.send.verify");
          var i = await o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
            { bridge: "adv", method: "verify", type: "sync" },
            function () {
              return e.$1.verify(
                o("WABase64").encodeB64(n),
                o("WABase64").encodeB64(a),
                o("WABase64").encodeB64(t),
              );
            },
          );
          return i;
        }),
        e
      );
    })();
    l.WindowsHybridBridgeAdv_v2622 = e;
  },
  98,
);
