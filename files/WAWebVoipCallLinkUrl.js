__d(
  "WAWebVoipCallLinkUrl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e == null || e === "") return null;
      var n = t ? "video" : "voice";
      return "https://call.whatsapp.com/" + n + "/" + e;
    }
    i.getCallLinkUrl = e;
  },
  66,
);
