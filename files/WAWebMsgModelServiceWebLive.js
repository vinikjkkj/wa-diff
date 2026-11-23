__d(
  "WAWebMsgModelServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebMsgModelService",
    "WebDi.Async",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebRevokeMsgAction").__setRef(
        "WAWebMsgModelServiceWebLive",
      ),
      u = r("JSResourceForInteraction")(
        "WAWebUpdateLastAddOnPreviewChatAction",
      ).__setRef("WAWebMsgModelServiceWebLive"),
      c = o("WAWebMsgModelService").MsgModelService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([s.load(), u.load()]);
          }),
          r = t[0].revoke,
          a = t[1].deleteModelsForLastAddOnPreview,
          i = {
            clearAddOnPreviews: function (t) {
              return o("WebDi.Fx").sync(function () {
                return a(t);
              });
            },
            revoke: function (t, n) {
              return o("WebDi.Fx").sync(function () {
                return r(t, n);
              });
            },
          };
        return i;
      });
    l.MsgModelServiceWebLive = c;
  },
  98,
);
