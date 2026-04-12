__d(
  "useWAWebVoipCanStartCall",
  [
    "WAWebCallCollection",
    "WAWebChatGroupUtils",
    "WAWebDBCAPIPermissions",
    "WAWebFrontendContactGetters",
    "WAWebStreamModel",
    "WAWebUserPrefsMultiDevice",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          (t = o("WAWebVoipEventConstants")).getChangeEvent(
            t.VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          function () {
            return r("WAWebCallCollection").activeCall != null;
          },
          [r("WAWebCallCollection").activeCall],
        ),
        a = r("useWAWebEventTargetValue")(
          o("WAWebStreamModel").Stream,
          t.getChangeEvent(t.VoipStreamEvents.DISPLAY_INFO),
          function () {
            return (
              o("WAWebStreamModel").Stream.displayInfo ===
              o("WAWebStreamModel").StreamInfo.NORMAL
            );
          },
          [o("WAWebStreamModel").Stream.displayInfo],
        );
      return (
        !n &&
        !o("WAWebChatGroupUtils").shouldBlockCall(e) &&
        !o("WAWebFrontendContactGetters").getIsContactBlocked(e.contact) &&
        a
      );
    }
    function s(e) {
      return !o(
        "WAWebUserPrefsMultiDevice",
      ).getIsHostedMeAccountFromLocalStorage() ||
        e.capiCallingPermissionType == null ||
        !o("WAWebVoipGatingUtils").isCoexCallingPermissionsEnabled()
        ? !0
        : e.capiCallingPermissionType ===
            o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.ALLOW;
    }
    ((l.useWAWebVoipCanStartCall = e),
      (l.useWAWebVoipIsCapiCallingPermissionAllowed = s));
  },
  98,
);
