__d(
  "ZenonMediaLoggingUtils",
  ["CurrentUser", "ZenonAppProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        typeof ((e = window.MediaStreamTrack) == null ||
        (e = e.prototype) == null
          ? void 0
          : e.getSettings) == "function",
      u = {
        serializeMediaStreamTrack: function (t) {
          var e = s ? t.getSettings() : null;
          return JSON.stringify({
            contentHint: t.contentHint,
            enabled: t.enabled,
            id: t.id,
            kind: t.kind,
            label: t.label,
            muted: t.muted,
            readyState: t.readyState,
            remote: t.remote,
            settings: {
              deviceId: e == null ? void 0 : e.deviceId,
              groupId: e == null ? void 0 : e.groupId,
            },
          });
        },
        shouldLogEmployeeOnly: function () {
          return (
            o("ZenonAppProvider").isInstagramApp() &&
            (r("CurrentUser").isEmployee() || r("CurrentUser").isTestUser())
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
