__d(
  "WAWebChangeProfilePicThumb",
  [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactProfilePicThumbBridge",
    "WAWebProfilePicConstants",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = [s(e, t)];
      if (e.isUser()) {
        var r = o("WAWebApiContact").getAlternateUserWid(e);
        r && n.push(s(r, t));
      }
      await Promise.all(n);
    }
    async function s(e, t) {
      if (t === o("WAWebProfilePicConstants").ProfilePicCommand.Remove)
        (await o("WAWebContactProfilePicThumbBridge").persistProfilePicToDB(e),
          o("WAWebBackendApi").frontendFireAndForget("removeProfilePicThumb", {
            wid: e,
          }));
      else
        return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "setProfilePicThumb",
          { wid: e },
        );
    }
    l.changeProfilePicThumb = e;
  },
  98,
);
