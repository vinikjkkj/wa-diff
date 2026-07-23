__d(
  "CometAudioManagerUtils",
  ["FBLogger"],
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
        persistMutedAndVolumeStateForLocalAudioScope: function (t, n) {
          var e = t.audioLocalScope,
            r = t.symbol;
          if (e != null) {
            var o = !1;
            for (var a of n) {
              var i = a[0],
                l = a[1];
              if (l.audioLocalScope === e) {
                var s = i === r,
                  u =
                    s &&
                    (l.lastMuteReason === "user_initiated" ||
                      l.lastMuteReason === "audio_manager_initiated"),
                  c =
                    l.lastMuteReason === "reels_transition_phase_initiated" ||
                    l.lastMuteReason === "story_transition_phase_initiated" ||
                    l.lastMuteReason === "tahoe_transition_phase_initiated" ||
                    l.lastMuteReason === "vdd_transition_phase_initiated";
                if (!u && !c && l.muted !== e.muted) {
                  o = !0;
                  break;
                }
                var d =
                  l.previousVolume != null && l.previousVolume !== l.volume;
                if (!d && l.volume !== e.volume) {
                  o = !0;
                  break;
                }
              }
            }
            if (o)
              for (var m of n) {
                var p = m[0],
                  _ = m[1];
                {
                  if (_.audioLocalScope !== e) continue;
                  var f = p === r,
                    g =
                      f &&
                      (_.lastMuteReason === "user_initiated" ||
                        _.lastMuteReason === "audio_manager_initiated"),
                    h =
                      _.lastMuteReason === "reels_transition_phase_initiated" ||
                      _.lastMuteReason === "story_transition_phase_initiated" ||
                      _.lastMuteReason === "tahoe_transition_phase_initiated" ||
                      _.lastMuteReason === "vdd_transition_phase_initiated";
                  !g &&
                    !h &&
                    _.muted !== e.muted &&
                    _.controller.setMuted(e.muted, "audio_manager_initiated");
                  var y =
                    _.previousVolume != null && _.previousVolume !== _.volume;
                  !y &&
                    _.volume !== e.volume &&
                    _.controller.setVolume(e.volume);
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
        updateCurrentPlayingAudio: function (t, n, r) {
          var e = t.lastMuteReason,
            o = t.lastPlayReason,
            a = t.muted,
            i = t.paused,
            l = t.symbol;
          !a && !i && !r.has(l)
            ? r.size > 0
              ? e === "user_initiated" ||
                o === "user_initiated" ||
                e === "costreaming_switch_stream_initiated" ||
                e === "reels_transition_phase_initiated" ||
                e === "story_transition_phase_initiated" ||
                e === "tahoe_transition_phase_initiated" ||
                e === "vdd_transition_phase_initiated"
                ? (r.forEach(function (e) {
                    var o = n.get(e);
                    if (o) {
                      var a = o.controller;
                      a !== t.controller &&
                        a.setMuted(!0, "audio_manager_initiated");
                    }
                    r.delete(e);
                  }),
                  r.add(l))
                : t.controller.setMuted(!0, "audio_manager_initiated")
              : r.add(l)
            : r.has(l) && (a || i) && r.delete(l);
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
