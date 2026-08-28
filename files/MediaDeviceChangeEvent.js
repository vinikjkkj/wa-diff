__d(
  "MediaDeviceChangeEvent",
  ["EventEmitter", "ZenonMediaTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "audioInputDeviceChanged",
      s = "audioInputOutputDeviceChanged",
      u = "audioOutputDeviceChanged",
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.emitAudioDeviceChangedEvents = function (n, r, a) {
            var t;
            if (a.length !== 0) {
              var i = n.find(function (e) {
                return e.contentType === "audio";
              });
              if (i != null) {
                var l = this.supportsGetSettings()
                  ? (t = i.webrtcTrack) == null || (t = t.getSettings()) == null
                    ? void 0
                    : t.groupId
                  : null;
                l != null &&
                  (r != null && l === r
                    ? this.emitAudioDeviceChanged(
                        s,
                        l,
                        o("ZenonMediaTypes").AUDIO_INPUT_DEVICE_KIND,
                        a,
                      )
                    : (l != null &&
                        this.emitAudioDeviceChanged(
                          e,
                          l,
                          o("ZenonMediaTypes").AUDIO_INPUT_DEVICE_KIND,
                          a,
                        ),
                      r != null &&
                        this.emitAudioDeviceChanged(
                          u,
                          r,
                          o("ZenonMediaTypes").AUDIO_OUTPUT_DEVICE_KIND,
                          a,
                        )));
              }
            }
          }),
          (r.emitAudioDeviceChanged = function (t, n, r, o) {
            var e = this.getDeviceNameWithoutPrefix(n, r, o);
            e != null && e.length > 0 && this.emit(t, e);
          }),
          (r.getDeviceNameWithoutPrefix = function (t, n, r) {
            var e,
              o =
                (e = r.filter(function (e) {
                  return e.groupId === t && e.kind === n;
                })) == null
                  ? void 0
                  : e.map(function (e) {
                      return e.label;
                    });
            return (o == null ? void 0 : o.length) === 0
              ? null
              : o.reduce(function (e, t) {
                  return e.length <= t.length ? e : t;
                });
          }),
          (r.supportsGetSettings = function () {
            var e;
            return (
              typeof ((e = window.MediaStreamTrack) == null ||
              (e = e.prototype) == null
                ? void 0
                : e.getSettings) == "function"
            );
          }),
          n
        );
      })(r("EventEmitter")),
      d = new c();
    ((l.AUDIO_INPUT_DEVICE_CHANGED_EVENT = e),
      (l.AUDIO_INPUT_OUTPUT_DEVICE_CHANGED_EVENT = s),
      (l.AUDIO_OUTPUT_DEVICE_CHANGED_EVENT = u),
      (l.eventEmitter = d));
  },
  98,
);
