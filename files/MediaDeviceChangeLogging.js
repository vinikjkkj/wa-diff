__d(
  "MediaDeviceChangeLogging",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "MediaDeviceChangePlugin - ";
    function l(e, t) {
      _("Connected new " + e.kind + " device: " + JSON.stringify(e), t);
    }
    function s(e, t, n, r) {
      (_("Disconnected " + e.kind + " device: " + JSON.stringify(e), r),
        n ||
          _(
            "Disconnected " +
              e.kind +
              " device with no alternative available: " +
              JSON.stringify(e),
            r,
          ),
        t &&
          _(
            "Disconnected " +
              e.kind +
              " device when it was in-use: " +
              JSON.stringify(e),
            r,
          ));
    }
    function u(e, t, n) {
      (_("Changed default " + e.kind + " device: " + JSON.stringify(e), n),
        t &&
          _("Previous default " + t.kind + " device: " + JSON.stringify(t), n));
    }
    function c(e, t, n, r) {
      _(
        "Switching device after devicechange event for " +
          e.kind +
          " - old device id: " +
          JSON.stringify(t) +
          ", new device: " +
          JSON.stringify(e) +
          ", event type is " +
          JSON.stringify(r),
        n,
      );
    }
    function d(e) {
      _(
        "Not performing the device switch since the call is either terminated or terminating",
        e,
      );
    }
    function m(e) {
      _("Not performing the device switch in P2P calls while screensharing", e);
    }
    function p(e, t, n) {
      _(
        "Possible switch for video-input device: " +
          JSON.stringify(e) +
          ", device switch flag: " +
          JSON.stringify(t),
        n,
      );
    }
    function _(t, n) {
      n(e + t);
    }
    ((i.MEDIA_DEVICE_CHANGE_CHECKPOINT_PREFIX = e),
      (i.logDeviceConnection = l),
      (i.logDeviceDisconnection = s),
      (i.logDefaultDeviceChange = u),
      (i.logDeviceSwitch = c),
      (i.logSkipDeviceSwitchDueToCallState = d),
      (i.logSkipDeviceSwitchForP2PScreenshare = m),
      (i.logPossibleVideoInputDeviceSwitch = p));
  },
  66,
);
