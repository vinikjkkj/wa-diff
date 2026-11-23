__d(
  "WAWebRevokeServiceClient",
  ["WAWebRevokeService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        processSentRevoke: function (n) {
          return e(o("WAWebRevokeService").RevokeService, function (e) {
            return e.processSentRevoke(n);
          });
        },
      };
    }
    l.revokeServiceClient = e;
  },
  98,
);
