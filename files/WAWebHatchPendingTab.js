__d(
  "WAWebHatchPendingTab",
  ["WAWebExternalLink.react", "WAWebHatchConnectInfoDecoder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = window.open("", "_blank");
      return (
        e != null && (e.opener = null),
        {
          close: function () {
            e == null || e.close();
          },
          navigate: function (n) {
            if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(n)) {
              e == null || e.close();
              return;
            }
            if (e == null || e.closed === !0) {
              o("WAWebExternalLink.react").openExternalLink(n, {
                noApiCmdHandling: !0,
              });
              return;
            }
            e.location.replace(n);
          },
        }
      );
    }
    l.openHatchPendingTab = e;
  },
  98,
);
