__d(
  "MediaDeviceChangeUtils",
  [
    "MediaDeviceChangeEvent",
    "MediaDeviceChangeLogging",
    "Promise",
    "ZenonCallsModelTypes",
    "ZenonLocalAudioVideoTypes",
    "ZenonMediaDevicesUtils",
    "ZenonMediaTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "default",
      c =
        typeof ((e = window.MediaStreamTrack) == null ||
        (e = e.prototype) == null
          ? void 0
          : e.getSettings) == "function";
    function d(e) {
      var t = c
        ? e == null
          ? void 0
          : e.webrtcTrack.getSettings().deviceId
        : null;
      return t != null ? t : null;
    }
    function m(e, t) {
      var n = D(e, o("ZenonMediaTypes").AUDIO_OUTPUT_DEVICE_KIND);
      return x(n, t);
    }
    function p(e, t, n, r, o, a, i, l, s, u) {
      var c = g(e),
        d = g(t),
        m = { audioinput: !1, audiooutput: !1, videoinput: !1 },
        p = [],
        v = f(c, d);
      v.length > 0 && (p.push("connection"), _(v, e, n, r, m, a));
      var S = h(c, d);
      return (
        S.length > 0 && (p.push("disconnection"), C(S, e, t, n, m, a)),
        i.length > 0 && (p.push("defaultDeviceChange"), y(i, n, m, a)),
        b(e, n, r, o, a, m, l, s, u, p)
      );
    }
    function _(e, t, n, r, a, i) {
      e.forEach(function (e) {
        o("MediaDeviceChangeLogging").logDeviceConnection(e, i);
        var l = r[e.kind],
          s = n[e.kind];
        ((l != null && e.id === l) || (s === u && R(e, t))) && (a[e.kind] = !0);
      });
    }
    function f(e, t) {
      return e.filter(function (e) {
        return !t.some(function (t) {
          return t.id === e.id;
        });
      });
    }
    function g(e) {
      return e.filter(function (e) {
        return e.id !== u;
      });
    }
    function h(e, t) {
      return t.filter(function (t) {
        return !e.some(function (e) {
          return e.id === t.id;
        });
      });
    }
    function y(e, t, n, r) {
      e.forEach(function (e) {
        o("MediaDeviceChangeLogging").logDefaultDeviceChange(e[0], e[1], r);
        var a = e[0].kind,
          i = t[a];
        i != null && i === u && (n[a] = !0);
      });
    }
    function C(e, t, n, r, a, i) {
      e.forEach(function (e) {
        var l = D(t, e.kind),
          s = v(e, n, r);
        (o("MediaDeviceChangeLogging").logDeviceDisconnection(
          e,
          s,
          l.length > 0,
          i,
        ),
          s && (a[e.kind] = !0));
      });
    }
    function b(e, t, r, a, i, l, u, c, d, p) {
      l[o("ZenonMediaTypes").VIDEO_INPUT_DEVICE_KIND] &&
        o("MediaDeviceChangeLogging").logPossibleVideoInputDeviceSwitch(
          e,
          l,
          i,
        );
      var _ = m(e, r[o("ZenonMediaTypes").AUDIO_OUTPUT_DEVICE_KIND]);
      if (!l[o("ZenonMediaTypes").AUDIO_INPUT_DEVICE_KIND])
        return (
          _ != null &&
            o("MediaDeviceChangeEvent").eventEmitter.emitAudioDeviceChanged(
              o("MediaDeviceChangeEvent").AUDIO_OUTPUT_DEVICE_CHANGED_EVENT,
              _.groupId,
              o("ZenonMediaTypes").AUDIO_OUTPUT_DEVICE_KIND,
              e,
            ),
          (s || (s = n("Promise"))).resolve()
        );
      if (
        u === o("ZenonCallsModelTypes").ZenonCallState.Terminating ||
        u === o("ZenonCallsModelTypes").ZenonCallState.Terminated
      )
        return (
          o("MediaDeviceChangeLogging").logSkipDeviceSwitchDueToCallState(i),
          (s || (s = n("Promise"))).resolve()
        );
      if (c && d)
        return (
          o("MediaDeviceChangeLogging").logSkipDeviceSwitchForP2PScreenshare(i),
          (s || (s = n("Promise"))).resolve()
        );
      var f = D(e, o("ZenonMediaTypes").AUDIO_INPUT_DEVICE_KIND),
        g = x(f, r[o("ZenonMediaTypes").AUDIO_INPUT_DEVICE_KIND]);
      return g == null
        ? (s || (s = n("Promise"))).resolve()
        : (o("MediaDeviceChangeLogging").logDeviceSwitch(
            g,
            t[o("ZenonMediaTypes").AUDIO_INPUT_DEVICE_KIND],
            i,
            p,
          ),
          a(
            o("ZenonLocalAudioVideoTypes").ZenonLocalMediaFallbackStrategy.None,
            { deviceId: g.id },
          ).then(function (t) {
            var n;
            t != null &&
              o(
                "MediaDeviceChangeEvent",
              ).eventEmitter.emitAudioDeviceChangedEvents(
                [t],
                (n = _ == null ? void 0 : _.groupId) != null ? n : null,
                e,
              );
          }));
    }
    function v(e, t, n) {
      var r = n[e.kind];
      return (r == null &&
        e.kind === o("ZenonMediaTypes").AUDIO_OUTPUT_DEVICE_KIND) ||
        r === u
        ? R(e, t)
        : r == null
          ? !1
          : e.id === r;
    }
    function S(e, t) {
      var n = {};
      L(e).forEach(function (e) {
        n[e.kind] = e;
      });
      var r = L(t),
        o = [];
      return (
        r.forEach(function (e) {
          var t = n[e.kind];
          if (!t || e.groupId !== t.groupId) {
            var r = [e];
            (t && r.push(t), o.push(r));
          }
        }),
        o
      );
    }
    function R(e, t) {
      var n = D(t, e.kind),
        r = E(n);
      return r ? I(e, r) : !1;
    }
    function L(e) {
      return e.filter(function (e) {
        return T(e);
      });
    }
    function E(e) {
      return (
        e.find(function (e) {
          return T(e);
        }) || null
      );
    }
    function k(e, t) {
      return t == null
        ? null
        : e.find(function (e) {
            return e.id === t;
          }) || null;
    }
    function I(e, t) {
      return (
        (t == null ? void 0 : t.groupId) === e.groupId &&
        (t == null ? void 0 : t.id) !== e.id &&
        (t == null ? void 0 : t.label.includes(e.label))
      );
    }
    function T(e) {
      return e.id === u && e.groupId !== "" && e.label !== "";
    }
    function D(e, t) {
      return e.filter(function (e) {
        return e.kind === t;
      });
    }
    function x(e, t) {
      if (!e || e.length === 0) return null;
      var n = k(e, t);
      if (n != null) return n;
      var r = k(e, u);
      if (r != null) return r;
      var a = o("ZenonMediaDevicesUtils").filterVirtualAudioDevices(e);
      return !a || a.length === 0 ? null : a[0];
    }
    ((l.CHROMIUM_BROWSER_DEFAULT_ID = u),
      (l.getMediaTrackDeviceId = d),
      (l.inferAudioOutputDevice = m),
      (l.handleMediaDeviceChange = p),
      (l.getDefaultDeviceChanges = S),
      (l.selectDeviceForSwitching = x));
  },
  98,
);
