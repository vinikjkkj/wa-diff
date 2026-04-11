__d(
  "youtube-player-5.5.2",
  ["sister-3.0.2", "load-script-1.0.0", "debug-0.0.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("sister-3.0.2"),
      l = n("load-script-1.0.0"),
      s = n("debug-0.0.0"),
      u = {},
      c = { exports: u };
    function d() {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var e = l(),
        t = n(e);
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      ((u.default = function (e) {
        var n = new Promise(function (n) {
          if (
            window.YT &&
            window.YT.Player &&
            window.YT.Player instanceof Function
          ) {
            n(window.YT);
            return;
          } else {
            var r = window.location.protocol === "http:" ? "http:" : "https:";
            (0, t.default)(r + "//www.youtube.com/iframe_api", function (t) {
              t && e.trigger("error", t);
            });
          }
          var o = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = function () {
            (o && o(), n(window.YT));
          };
        });
        return n;
      }),
        (c.exports = u.default));
    }
    var m = !1;
    function p() {
      return (m || ((m = !0), d()), c.exports);
    }
    var _ = {},
      f = { exports: _ };
    function g() {
      (Object.defineProperty(_, "__esModule", { value: !0 }),
        (_.default = [
          "cueVideoById",
          "loadVideoById",
          "cueVideoByUrl",
          "loadVideoByUrl",
          "playVideo",
          "pauseVideo",
          "stopVideo",
          "getVideoLoadedFraction",
          "cuePlaylist",
          "loadPlaylist",
          "nextVideo",
          "previousVideo",
          "playVideoAt",
          "setShuffle",
          "setLoop",
          "getPlaylist",
          "getPlaylistIndex",
          "setOption",
          "mute",
          "unMute",
          "isMuted",
          "setVolume",
          "getVolume",
          "seekTo",
          "getPlayerState",
          "getPlaybackRate",
          "setPlaybackRate",
          "getAvailablePlaybackRates",
          "getPlaybackQuality",
          "setPlaybackQuality",
          "getAvailableQualityLevels",
          "getCurrentTime",
          "getDuration",
          "removeEventListener",
          "getVideoUrl",
          "getVideoEmbedCode",
          "getOptions",
          "getOption",
          "addEventListener",
          "destroy",
          "setSize",
          "getIframe",
        ]),
        (f.exports = _.default));
    }
    var h = !1;
    function y() {
      return (h || ((h = !0), g()), f.exports);
    }
    var C = {},
      b = { exports: C };
    function v() {
      (Object.defineProperty(C, "__esModule", { value: !0 }),
        (C.default = [
          "ready",
          "stateChange",
          "playbackQualityChange",
          "playbackRateChange",
          "error",
          "apiChange",
          "volumeChange",
        ]),
        (b.exports = C.default));
    }
    var S = !1;
    function R() {
      return (S || ((S = !0), v()), b.exports);
    }
    var L = {},
      E = { exports: L };
    function k() {
      (Object.defineProperty(L, "__esModule", { value: !0 }),
        (L.default = {
          BUFFERING: 3,
          ENDED: 0,
          PAUSED: 2,
          PLAYING: 1,
          UNSTARTED: -1,
          VIDEO_CUED: 5,
        }),
        (E.exports = L.default));
    }
    var I = !1;
    function T() {
      return (I || ((I = !0), k()), E.exports);
    }
    var D = {},
      x = { exports: D };
    function $() {
      Object.defineProperty(D, "__esModule", { value: !0 });
      var e = T(),
        t = n(e);
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      ((D.default = {
        pauseVideo: {
          acceptableStates: [t.default.ENDED, t.default.PAUSED],
          stateChangeRequired: !1,
        },
        playVideo: {
          acceptableStates: [t.default.ENDED, t.default.PLAYING],
          stateChangeRequired: !1,
        },
        seekTo: {
          acceptableStates: [
            t.default.ENDED,
            t.default.PLAYING,
            t.default.PAUSED,
          ],
          stateChangeRequired: !0,
          timeout: 3e3,
        },
      }),
        (x.exports = D.default));
    }
    var P = !1;
    function N() {
      return (P || ((P = !0), $()), x.exports);
    }
    var M = {},
      w = { exports: M };
    function A() {
      Object.defineProperty(M, "__esModule", { value: !0 });
      var e = s(),
        t = u(e),
        n = y(),
        r = u(n),
        o = R(),
        a = u(o),
        i = N(),
        l = u(i);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (0, t.default)("youtube-player"),
        d = {};
      ((d.proxyEvents = function (e) {
        var t = {},
          n = function (r) {
            var n = "on" + r.slice(0, 1).toUpperCase() + r.slice(1);
            t[n] = function (t) {
              (c('event "%s"', n, t), e.trigger(r, t));
            };
          },
          r = !0,
          o = !1,
          i = void 0;
        try {
          for (
            var l = a.default[Symbol.iterator](), s;
            !(r = (s = l.next()).done);
            r = !0
          ) {
            var u = s.value;
            n(u);
          }
        } catch (e) {
          ((o = !0), (i = e));
        } finally {
          try {
            !r && l.return && l.return();
          } finally {
            if (o) throw i;
          }
        }
        return t;
      }),
        (d.promisifyPlayer = function (e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            n = {},
            o = function (o) {
              t && l.default[o]
                ? (n[o] = function () {
                    for (
                      var t = arguments.length, n = Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    return e.then(function (e) {
                      var t = l.default[o],
                        r = e.getPlayerState(),
                        a = e[o].apply(e, n);
                      return t.stateChangeRequired ||
                        (Array.isArray(t.acceptableStates) &&
                          t.acceptableStates.indexOf(r) === -1)
                        ? new Promise(function (n) {
                            var r = function r() {
                              var o = e.getPlayerState(),
                                a = void 0;
                              (typeof t.timeout == "number" &&
                                (a = setTimeout(function () {
                                  (e.removeEventListener("onStateChange", r),
                                    n());
                                }, t.timeout)),
                                Array.isArray(t.acceptableStates) &&
                                  t.acceptableStates.indexOf(o) !== -1 &&
                                  (e.removeEventListener("onStateChange", r),
                                  clearTimeout(a),
                                  n()));
                            };
                            e.addEventListener("onStateChange", r);
                          }).then(function () {
                            return a;
                          })
                        : a;
                    });
                  })
                : (n[o] = function () {
                    for (
                      var t = arguments.length, n = Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    return e.then(function (e) {
                      return e[o].apply(e, n);
                    });
                  });
            },
            a = !0,
            i = !1,
            s = void 0;
          try {
            for (
              var u = r.default[Symbol.iterator](), c;
              !(a = (c = u.next()).done);
              a = !0
            ) {
              var d = c.value;
              o(d);
            }
          } catch (e) {
            ((i = !0), (s = e));
          } finally {
            try {
              !a && u.return && u.return();
            } finally {
              if (i) throw s;
            }
          }
          return n;
        }),
        (M.default = d),
        (w.exports = M.default));
    }
    var F = !1;
    function O() {
      return (F || ((F = !0), A()), w.exports);
    }
    var B = {},
      W = { exports: B };
    function q() {
      Object.defineProperty(B, "__esModule", { value: !0 });
      var t =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        n = e(),
        r = s(n),
        o = p(),
        a = s(o),
        i = O(),
        l = s(i);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = void 0;
      ((B.default = function (e) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
          i = (0, r.default)();
        if ((u || (u = (0, a.default)(i)), n.events))
          throw new Error("Event handlers cannot be overwritten.");
        if (typeof e == "string" && !document.getElementById(e))
          throw new Error('Element "' + e + '" does not exist.');
        n.events = l.default.proxyEvents(i);
        var s = new Promise(function (r) {
            if (
              (typeof e == "undefined" ? "undefined" : t(e)) === "object" &&
              e.playVideo instanceof Function
            ) {
              var o = e;
              r(o);
            } else
              u.then(function (t) {
                var o = new t.Player(e, n);
                return (
                  i.on("ready", function () {
                    r(o);
                  }),
                  null
                );
              });
          }),
          c = l.default.promisifyPlayer(s, o);
        return ((c.on = i.on), (c.off = i.off), c);
      }),
        (W.exports = B.default));
    }
    var U = !1;
    function V() {
      return (U || ((U = !0), q()), W.exports);
    }
    function H(e) {
      switch (e) {
        case void 0:
          return V();
      }
    }
    a.exports = H;
  },
  null,
);
