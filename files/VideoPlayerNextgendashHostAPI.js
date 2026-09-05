__d(
  "VideoPlayerNextgendashHostAPI",
  ["fb-error"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return { perfMs: e.perfMs - t.perfMs, unixMs: e.unixMs - t.unixMs };
    }
    function s(e) {
      return e;
    }
    function u(e) {
      return e;
    }
    var c = function () {},
      d = function () {};
    function m(e) {
      return e;
    }
    function p(e) {
      return e;
    }
    function _(e) {
      if (e instanceof c)
        throw r("fb-error")
          .FBLogger("comet_video_player_nextgendash")
          .mustfixThrow(
            "VideoPlayerNextgendashHostMediaSourceIsNotAMediaSource",
          );
      return e;
    }
    function f(e) {
      if (e instanceof c) return e;
      throw r("fb-error")
        .FBLogger("comet_video_player_nextgendash")
        .mustfixThrow("VideoPlayerNextgendashHostMediaSourceIsNotASinkObject");
    }
    function g(e) {
      return e;
    }
    function h(e) {
      return e;
    }
    function y(e) {
      if (e instanceof d)
        throw r("fb-error")
          .FBLogger("comet_video_player_nextgendash")
          .mustfixThrow(
            "VideoPlayerNextgendashHostSourceBufferIsNotASourceBuffer",
          );
      return e;
    }
    function C(e) {
      if (e instanceof d) return e;
      throw r("fb-error")
        .FBLogger("comet_video_player_nextgendash")
        .mustfixThrow("VideoPlayerNextgendashHostSourceBufferIsNotASinkObject");
    }
    function b(e) {
      return e;
    }
    function v(e) {
      return e;
    }
    function S(e) {
      return e;
    }
    ((l.diffVideoPlayerNextgendashClockstamp = e),
      (l.opaqueVideoPlayerNextgendashHostMediaElement = s),
      (l.unopaqueVideoPlayerNextgendashHostMediaElement = u),
      (l.VideoPlayerNextgendashHostSinkMediaSource = c),
      (l.VideoPlayerNextgendashHostSinkSourceBuffer = d),
      (l.opaqueVideoPlayerNextgendashHostMediaSource = m),
      (l.opaqueVideoPlayerNextgendashHostMediaSourceFromSink = p),
      (l.unopaqueVideoPlayerNextgendashHostMediaSource = _),
      (l.unopaqueVideoPlayerNextgendashHostMediaSourceAsSink = f),
      (l.opaqueVideoPlayerNextgendashHostSourceBuffer = g),
      (l.opaqueVideoPlayerNextgendashHostSourceBufferFromSink = h),
      (l.unopaqueVideoPlayerNextgendashHostSourceBuffer = y),
      (l.unopaqueVideoPlayerNextgendashHostSourceBufferAsSink = C),
      (l.opaqueVideoPlayerNextgendashHostMediaSourceHandle = b),
      (l.unopaqueVideoPlayerNextgendashHostMediaSourceHandle = v),
      (l.unopaqueVideoPlayerNextgendashHostEventTarget = S));
  },
  98,
);
