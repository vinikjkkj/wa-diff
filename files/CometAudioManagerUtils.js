__d(
  "CometAudioManagerUtils",
  ["FBLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        t.type === "setMuted" && t.newMuted !== void 0
          ? t.controller.setMuted(t.newMuted, t.reason)
          : t.type === "setVolume" &&
            t.newVolume !== void 0 &&
            t.controller.setVolume(t.newVolume);
      },
      s = function (t, n, r) {
        var e = r.get(t);
        e &&
          e.forEach(function (e) {
            var t = n.get(e);
            t && t.controller.setMuted(!0, "audio_manager_initiated");
          });
      },
      u = {
        consumeAndExecuteAudioActions: function (n, r) {
          var t = function (t, r) {
            var e = n.get(t.reason) || 0,
              o = n.get(r.reason) || 0;
            return e - o;
          };
          r.sort(t);
          for (var o = new Set(), a = 0; a < r.length; a++) {
            var i = r[a];
            o.has(i.audioSymbol) || (e(i), o.add(i.audioSymbol));
          }
          (o.clear(), (r.length = 0));
        },
        persistMutedAndVolumeStateForLocalAudioScope: function (t, n, o) {
          var e = t.audioLocalScope,
            a = t.symbol;
          if (e != null) {
            var i = !1;
            for (var l of n) {
              var s = l[0],
                u = l[1];
              if (u.audioLocalScope === e) {
                var c = s === a,
                  d =
                    c &&
                    (u.lastMuteReason === "user_initiated" ||
                      u.lastMuteReason === "audio_manager_initiated"),
                  m =
                    u.lastMuteReason === "reels_transition_phase_initiated" ||
                    u.lastMuteReason === "story_transition_phase_initiated" ||
                    u.lastMuteReason === "tahoe_transition_phase_initiated" ||
                    u.lastMuteReason === "vdd_transition_phase_initiated";
                if (!d && !m && u.muted !== e.muted) {
                  i = !0;
                  break;
                }
                var p =
                  u.previousVolume != null && u.previousVolume !== u.volume;
                if (!p && u.volume !== e.volume) {
                  i = !0;
                  break;
                }
              }
            }
            if (i)
              for (var _ of n) {
                var f = _[0],
                  g = _[1];
                {
                  if (g.audioLocalScope !== e) continue;
                  var h = f === a,
                    y =
                      h &&
                      (g.lastMuteReason === "user_initiated" ||
                        g.lastMuteReason === "audio_manager_initiated"),
                    C =
                      g.lastMuteReason === "reels_transition_phase_initiated" ||
                      g.lastMuteReason === "story_transition_phase_initiated" ||
                      g.lastMuteReason === "tahoe_transition_phase_initiated" ||
                      g.lastMuteReason === "vdd_transition_phase_initiated";
                  !y &&
                    !C &&
                    g.muted !== e.muted &&
                    (o != null &&
                      !e.muted &&
                      !g.paused &&
                      r("gkx")("11495") &&
                      o.add(f),
                    g.controller.setMuted(e.muted, "audio_manager_initiated"));
                  var b =
                    g.previousVolume != null && g.previousVolume !== g.volume;
                  !b &&
                    g.volume !== e.volume &&
                    g.controller.setVolume(e.volume);
                }
              }
          }
        },
        persistMutedStateForLocalAudioScope: function (t, n) {
          var e = t.audioLocalScope,
            r = t.controller,
            o = t.lastMuteReason,
            a = t.muted,
            i = t.paused;
          (e &&
            a !== e.muted &&
            o !== "user_initiated" &&
            i &&
            r.setMuted(e.muted, "audio_manager_initiated"),
            n.forEach(function (e) {
              var n = e.symbol;
              n !== t.symbol &&
                e.audioLocalScope &&
                ((!e.audioLocalScope.muted && e.paused) ||
                  e.audioLocalScope.muted) &&
                e.controller.setMuted(
                  e.audioLocalScope.muted,
                  "audio_manager_initiated",
                );
            }));
        },
        persistVolumeStateForLocalAudioScope: function (t, n, r) {
          var e = t.audioLocalScope,
            o = t.controller,
            a = t.lastMuteReason,
            i = t.volume;
          (e && (a || (i !== e.volume && o.setVolume(e.volume))),
            n.forEach(function (n) {
              var o = n.symbol;
              if (
                o !== t.symbol &&
                n.audioLocalScope &&
                n.volume !== e.volume
              ) {
                var a = {
                  audioSymbol: o,
                  controller: n.controller,
                  newVolume: e.volume,
                  reason: "audio_manager_initiated",
                  type: "setVolume",
                };
                r.push(a);
              }
            }));
        },
        register: function (t, n, r, o, a) {
          var e = t.groupID,
            i = t.symbol;
          if ((r.set(i, t), a.has(e) || a.set(e, n), o.has(e))) {
            var l = o.get(e);
            l && !l.has(i) && l.add(i);
          } else {
            var s = new Set();
            (s.add(i), o.set(e, s));
          }
        },
        unmuteAudiosMutedByAudioManager: function (t) {
          var e = t.controller,
            n = t.lastMuteReason,
            r = t.muted,
            o = t.paused;
          o &&
            r &&
            n === "audio_manager_initiated" &&
            e.setMuted(!1, "audio_manager_initiated");
        },
        unregister: function (t, n, r, o, a, i, l) {
          if (a.has(t)) {
            var e = a.get(t);
            e && a.delete(t);
          }
          if ((n.has(t) && n.delete(t), o.has(r))) {
            var s = o.get(r);
            s &&
              s.has(t) &&
              (s.delete(t),
              s.size === 0 &&
                (o.delete(r),
                l.has(r) && l.delete(r),
                i.has(r) && i.delete(r)));
          }
        },
        updateAudioContext: function (t, n) {
          var e = t.audioLocalScope,
            r = t.lastMuteReason,
            o = t.muted,
            a = t.previousVolume,
            i = t.volume;
          e &&
            e.customAudioSettingFunc &&
            ((r === "user_initiated" ||
              r === "reels_transition_phase_initiated" ||
              r === "story_transition_phase_initiated" ||
              r === "tahoe_transition_phase_initiated" ||
              r === "vdd_transition_phase_initiated") &&
              (o && n.size === 0 && !e.muted
                ? e.setMuted(!0)
                : !o && e.muted && e.setMuted(!1)),
            a !== null && a !== i && e.setVolume(i));
        },
        updateAudioContextWithGroup: function (t, n) {
          var e = t.audioLocalScope,
            r = t.lastMuteReason,
            o = t.muted,
            a = t.previousVolume,
            i = t.volume;
          e &&
            (r === "user_initiated" &&
              (o && n.size === 0 && !e.muted
                ? e.setMuted(!0)
                : !o && e.muted && e.setMuted(!1)),
            a !== null && a !== i && e.setVolume(i));
        },
        updateCurrentPlayingAudio: function (t, n, o, a) {
          var e = t.lastMuteReason,
            i = t.lastPlayReason,
            l = t.muted,
            s = t.paused,
            u = t.symbol,
            c = a != null && a.has(u) && e === "audio_manager_initiated" && !s;
          ((!l || s) && (a == null || a.delete(u)),
            !l && !s && !o.has(u)
              ? o.size > 0
                ? e === "user_initiated" ||
                  (i === "user_initiated" && !c) ||
                  e === "costreaming_switch_stream_initiated" ||
                  e === "reels_transition_phase_initiated" ||
                  e === "story_transition_phase_initiated" ||
                  e === "tahoe_transition_phase_initiated" ||
                  e === "vdd_transition_phase_initiated"
                  ? (o.forEach(function (e) {
                      var r = n.get(e);
                      if (r) {
                        var a = r.controller;
                        a !== t.controller &&
                          a.setMuted(!0, "audio_manager_initiated");
                      }
                      o.delete(e);
                    }),
                    o.add(u))
                  : (r("FBLogger")("comet_video_player").warn(
                      "CometAudioManager: audio %s became unmuted (lastMuteReason=%s, lastPlayReason=%s) while %s other audio(s) were already playing; muting it to preserve single-audio playback",
                      u,
                      e != null ? e : "unknown",
                      i != null ? i : "unknown",
                      String(o.size),
                    ),
                    t.controller.setMuted(!0, "audio_manager_initiated"))
                : o.add(u)
              : o.has(u) && (l || s) && o.delete(u));
        },
        updateCurrentPlayingAudioGroup: function (t, n, r, o, a) {
          var e = t.groupID,
            i = t.lastMuteReason,
            l = t.lastPlayReason,
            u = t.muted,
            c = t.paused,
            d = o.get(e);
          !u && !c && !a.has(e)
            ? a.size > 0
              ? i === "user_initiated" || l === "user_initiated"
                ? (a.forEach(function (e) {
                    var t = o.get(e);
                    (t && (t.setAllowSound(!1), s(e, n, r)), a.delete(e));
                  }),
                  a.add(e),
                  d == null || d.setAllowSound(!0))
                : d && (d.setAllowSound(!1), s(e, n, r))
              : (d == null || d.setAllowSound(!0), a.add(e))
            : a.has(e) && (u || c) && a.delete(e);
        },
        updateCurrentPlayingAudioIgnoreLastReason: function (t, n, r) {
          var e = t.muted,
            o = t.paused,
            a = t.symbol;
          !e && !o && !r.has(a)
            ? (r.size > 0 &&
                r.forEach(function (e) {
                  var t = n.get(e);
                  if (t) {
                    var o = t.controller;
                    o.setMuted(!0, "audio_manager_initiated");
                  }
                  r.delete(e);
                }),
              r.add(a))
            : r.has(a) && (e || o) && r.delete(a);
        },
        updateRegisteredAudio: function (t, n) {
          var e = t.symbol,
            o = n.get(e);
          o
            ? n.set(e, t)
            : r("FBLogger")("comet_video_player").mustfix(
                "Received an update for an unregisterd video unit: %s",
                e,
              );
        },
      };
    l.CometAudioManagerUtils = u;
  },
  98,
);
