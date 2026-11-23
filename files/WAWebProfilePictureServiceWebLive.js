__d(
  "WAWebProfilePictureServiceWebLive",
  ["JSResourceForInteraction", "WAWebProfilePictureService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebContactProfilePicThumbBridge",
      ).__setRef("WAWebProfilePictureServiceWebLive"),
      s = o("WAWebProfilePictureService").ProfilePictureService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return e.load();
            }),
            n = t.requestDeletePicture,
            r = t.requestProfilePicFromServer,
            a = t.sendSetPicture,
            i = {
              requestProfilePicFromServer: function (t) {
                return o("WebDi.Async").fromPromise(function () {
                  return r(t);
                });
              },
              sendSetPicture: function (t, n, r) {
                return o("WebDi.Async").fromPromise(function () {
                  return a(t, n, r);
                });
              },
              requestDeletePicture: function (t) {
                return o("WebDi.Async").fromPromise(function () {
                  return n(t);
                });
              },
            };
          return i;
        },
      );
    l.ProfilePictureServiceWebLive = s;
  },
  98,
);
