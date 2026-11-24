__d(
  "WAWebProfilePictureServiceWebLive",
  [
    "WAWebContactProfilePicThumbBridge",
    "WAWebProfilePictureService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebProfilePictureService").ProfilePictureService.make(
      function* () {
        var e = {
          requestProfilePicFromServer: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebContactProfilePicThumbBridge",
              ).requestProfilePicFromServer(t);
            });
          },
          sendSetPicture: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebContactProfilePicThumbBridge").sendSetPicture(
                t,
                n,
                r,
              );
            });
          },
          requestDeletePicture: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebContactProfilePicThumbBridge",
              ).requestDeletePicture(t);
            });
          },
        };
        return e;
      },
    );
    l.ProfilePictureServiceWebLive = e;
  },
  98,
);
