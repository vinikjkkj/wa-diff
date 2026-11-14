__d(
  "VideoPlayerMediaElementSourceRetention",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new WeakSet();
    function l(t) {
      e.add(t);
    }
    function s(t) {
      e.delete(t);
    }
    function u(t) {
      return e.has(t);
    }
    ((i.retainVideoPlayerMediaElementSource = l),
      (i.releaseVideoPlayerMediaElementSource = s),
      (i.shouldRetainVideoPlayerMediaElementSource = u));
  },
  66,
);
