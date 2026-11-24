__d(
  "WAWebMsgModelServiceWebLive",
  [
    "WAWebMsgModelService",
    "WAWebRevokeMsgAction",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebMsgModelService").MsgModelService.make(function* () {
      var e = {
        clearAddOnPreviews: function (t) {
          return o("WebDi.Fx").sync(function () {
            return o(
              "WAWebUpdateLastAddOnPreviewChatAction",
            ).deleteModelsForLastAddOnPreview(t);
          });
        },
        revoke: function (t, n) {
          return o("WebDi.Fx").sync(function () {
            return o("WAWebRevokeMsgAction").revoke(t, n);
          });
        },
      };
      return e;
    });
    l.MsgModelServiceWebLive = e;
  },
  98,
);
