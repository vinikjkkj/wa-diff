__d(
  "WAWebVoipScreenShareStreamKey",
  [],
  function (t, n, r, o, a, i) {
    var e = "#ss";
    function l(t) {
      return t + e;
    }
    function s(t) {
      return t.endsWith(e);
    }
    function u(t) {
      return s(t) ? t.slice(0, -e.length) : t;
    }
    ((i.getScreenShareStreamKey = l),
      (i.isScreenShareStreamKey = s),
      (i.getBaseJidFromStreamKey = u));
  },
  66,
);
