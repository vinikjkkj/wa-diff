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
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(8),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          )),
          (t[0] = n))
        : (n = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [r("WAWebCallCollection").activeCall]), (t[1] = a))
        : (a = t[1]);
      var i = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), n, u, a),
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipStreamEvents.DISPLAY_INFO,
          )),
          (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [o("WAWebStreamModel").Stream.displayInfo]), (t[3] = c))
        : (c = t[3]);
      var d = r("useWAWebEventTargetValue")(
          o("WAWebStreamModel").Stream,
          l,
          s,
          c,
        ),
        m;
      return (
        t[4] !== e || t[5] !== i || t[6] !== d
          ? ((m =
              !i &&
              !o("WAWebChatGroupUtils").shouldBlockCall(e) &&
              !o("WAWebFrontendContactGetters").getIsContactBlocked(
                e.contact,
              ) &&
              d),
            (t[4] = e),
            (t[5] = i),
            (t[6] = d),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function s() {
      return (
        o("WAWebStreamModel").Stream.displayInfo ===
        o("WAWebStreamModel").StreamInfo.NORMAL
      );
    }
    function u() {
      return r("WAWebCallCollection").activeCall != null;
    }
    function c(e) {
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
      (l.useWAWebVoipIsCapiCallingPermissionAllowed = c));
  },
  98,
);
