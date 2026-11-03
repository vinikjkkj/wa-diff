__d(
  "WAWebSharableEventCallLinkUrl",
  ["WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    var e = "https://call.whatsapp.com";
    function s(t) {
      var n = t.callLinkToken;
      if (n == null || n === "") return null;
      var r =
        t.callLinkMediaType ===
        o("WAWebSharableEventStorageEnums").SharableEventCallLinkMediaType.Voice
          ? "voice"
          : "video";
      return e + "/" + r + "/" + n;
    }
    l.getSharableEventCallLinkUrl = s;
  },
  98,
);
