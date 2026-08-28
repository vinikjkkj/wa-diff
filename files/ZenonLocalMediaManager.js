__d(
  "ZenonLocalMediaManager",
  [
    "$InternalEnum",
    "ZenonGetDisplayMediaUtils",
    "ZenonLocalAudioVideoManagerUtils",
    "ZenonMediaActionLogger",
    "ZenonMediaDevicesUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["requestAudio"],
      s = ["requestVideo"],
      u = ["facingMode"],
      c,
      d = n("$InternalEnum")({
        ENDED: "ended",
        MUTE: "mute",
        UNMUTE: "unmute",
      }),
      m = n("$InternalEnum")({ DISPLAY: "display", USER: "user" });
    typeof ((c = window.OverconstrainedError) == null ||
    (c = c.prototype) == null
      ? void 0
      : c.toString) == "function" &&
      (window.OverconstrainedError.prototype.toString = function () {
        return (
          this.name + ": " + this.message + " - Constraint: " + this.constraint
        );
      });
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("ZenonMediaDevicesUtils").enumerateDevices(),
            n = t.map(function (e) {
              return {
                groupId: e.groupId,
                id: e.id,
                kind: e.kind,
                label: e.label,
              };
            });
          return e != null
            ? n.filter(function (t) {
                return t.kind === e;
              })
            : n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          r("ZenonMediaActionLogger").logEvent({
            checkpoint:
              "GetDisplayMedia audioConstraints: " +
              JSON.stringify(e) +
              " videoConstraints: " +
              JSON.stringify(t),
          });
          var a = yield o("ZenonGetDisplayMediaUtils").getUserScreenMedia(
              h(e, t),
            ),
            i = a.getVideoTracks();
          return (
            i.length > 0 && (i[0].contentHint = t.contentHint),
            [d.ENDED, d.MUTE, d.UNMUTE].forEach(function (e) {
              b(e, a, m.DISPLAY);
            }),
            o(
              "ZenonLocalAudioVideoManagerUtils",
            ).convertToZenonImmutableMediaTrack(a, e, t, !0, n)
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return { audio: y(e), video: C(t) };
    }
    function y(t) {
      var n = t.requestAudio,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return n === !1 ? !1 : Object.keys(r).length > 0 ? r : !0;
    }
    function C(e) {
      var t = e.requestVideo,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      if (t === !1) return !1;
      if (Object.keys(n).length === 0) return !0;
      var r = n.facingMode,
        o = babelHelpers.objectWithoutPropertiesLoose(n, u),
        a = babelHelpers.extends({}, o);
      return (r != null && (a.facingMode = { ideal: r }), a);
    }
    function b(e, t, n) {
      t.getTracks().forEach(function (t) {
        var o = t.id,
          a = t.kind;
        t.addEventListener(e, function () {
          r("ZenonMediaActionLogger").logEvent({
            checkpoint:
              a + ": " + o + " fired " + e + " event for " + n + " media",
          });
        });
      });
    }
    ((l.Events = d),
      (l.getDevices = p),
      (l.getDisplayMedia = f),
      (l.adaptAudioConstraints = y),
      (l.adaptVideoConstraints = C));
  },
  98,
);
