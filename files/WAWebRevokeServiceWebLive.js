__d(
  "WAWebRevokeServiceWebLive",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMessageStoreService",
    "WAWebMsgGetters",
    "WAWebMsgModelService",
    "WAWebRevokeService",
    "WAWebSendMsgResultAction",
    "WebDi.Gen",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebRevokeService").RevokeService.make(function* () {
      var e = yield* o("WAWebMessageStoreService").MessageStoreService,
        t = yield* o("WAWebMsgModelService").MsgModelService,
        n = {
          processSentRevoke: function (r) {
            var n = r.msg,
              a = r.newKey,
              i = r.sender,
              l = r.subtype,
              s = r.t,
              u = r.viewMode;
            return o("WebDi.Gen").gen(function* () {
              var r = n.id.toString(),
                c = yield* e.processRevokes([
                  {
                    revokeMsgKey: n.id,
                    newMsgKey: a,
                    timestamp: o("WAWebMsgGetters").getT(n),
                    revokeTimestamp: s,
                    subtype: l,
                    sender: i,
                    viewMode: u,
                  },
                ]);
              if (!c.has(r)) {
                var d = {
                  messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                    .ERROR_UNKNOWN,
                };
                return d;
              }
              (yield* t.clearAddOnPreviews([r]),
                yield* e.deleteAddOns(
                  o("WAWebFrontendMsgGetters").getChat(n).id.toString(),
                  [r],
                ),
                yield* t.revoke(n, {
                  msgKey: a,
                  subtype: l,
                  sender: i,
                  revokeTimestamp: s,
                  viewMode: u,
                }));
              var m = {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
              };
              return m;
            });
          },
        };
      return n;
    });
    l.RevokeServiceWebLive = e;
  },
  98,
);
