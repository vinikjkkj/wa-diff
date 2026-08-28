__d(
  "ZenonPeerConnectionDataActions",
  ["promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        if (n.type === "createDataChannel") {
          var e = n.payload,
            r = e.dataChannelLabel,
            o = e.dataChannelOptions,
            a = e.onDataChannelMessage,
            i = e.onDataChannelOpen,
            l = e.shouldEstablishDataChannel;
          (t.mediaChannelManager.createDataChannel(r, a, i, l, o),
            n.onSuccess());
        }
      },
      s = function (t, n) {
        if (n.type === "dataChannelMessageReceived") {
          var e = n.payload,
            o = e.dataChannelLabel,
            a = e.dataMessage;
          r("promiseDone")(
            t.onDataChannelMessageReceived(o, a),
            n.onSuccess,
            n.onError,
          );
        }
      },
      u = function (t, n) {
        if (n.type === "createDataMessageSubscription") {
          var e = n.payload,
            o = e.dataChannelLabel,
            a = e.onSignalingDataMessage;
          r("promiseDone")(
            t.onCreateDataMessageSubscription(o, a),
            n.onSuccess,
            n.onError,
          );
        }
      },
      c = function (t, n) {
        if (n.type === "removeDataMessageSubscription") {
          var e = n.payload,
            o = e.dataChannelLabel,
            a = e.onSignalingDataMessage;
          r("promiseDone")(
            t.onRemoveDataMessageSubscription(o, a),
            n.onSuccess,
            n.onError,
          );
        }
      };
    ((l.onCreateDataChannel = e),
      (l.onDataChannelMessageReceived = s),
      (l.onCreateDataMessageSubscription = u),
      (l.onRemoveDataMessageSubscription = c));
  },
  98,
);
