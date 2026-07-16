__d(
  "WAWebVoipBridgeNackHandlers",
  ["WAWebVoipNackHandlers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      handleCallOfferNacked: function (t) {
        var e = t.callOfferNackedData;
        o("WAWebVoipNackHandlers").handleCallOfferNacked(e);
      },
      handleCallLinkNacked: function (t) {
        var e = t.nackCode;
        o("WAWebVoipNackHandlers").handleCallLinkNacked(e);
      },
      handleLobbyNacked: function () {
        o("WAWebVoipNackHandlers").handleLobbyNacked();
      },
      handleLobbyTimeout: function () {
        o("WAWebVoipNackHandlers").handleLobbyTimeout();
      },
    };
    l.VoipBridgeNackHandlers = e;
  },
  98,
);
