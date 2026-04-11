__d(
  "isWhatsAppCdnURI",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.getProtocol(),
        n = e.getDomain();
      return t === "https" && n === "static.whatsapp.net";
    }
    i.default = e;
  },
  66,
);
