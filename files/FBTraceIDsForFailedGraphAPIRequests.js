__d(
  "FBTraceIDsForFailedGraphAPIRequests",
  ["AdsBugConstants"],
  function (t, n, r, o, a, i, l) {
    var e = [];
    function s(t) {
      (e.length >= r("AdsBugConstants").TRAVERSABLE_PARAM_MAX_COUNT &&
        e.shift(),
        e.push(t));
    }
    ((l.errorFBTraces = e), (l.insert = s));
  },
  98,
);
