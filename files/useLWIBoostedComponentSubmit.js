__d(
  "useLWIBoostedComponentSubmit",
  [
    "CometRelay",
    "LWICometCreateBoostedComponentMutation",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = o("CometRelay").useRelayEnvironment(),
        a = e.extractEntityID,
        i = e.getVariables,
        l = e.onError,
        s = e.onPartialError,
        u = e.onSuccess,
        d;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== l ||
      t[4] !== s ||
      t[5] !== u
        ? ((d = function (t, d, m) {
            var e = m != null ? m : n;
            o("CometRelay").commitMutation(e, {
              mutation: r("LWICometCreateBoostedComponentMutation"),
              onCompleted: function (t, n) {
                if (n != null && n.length > 0) {
                  s == null || s(t, n);
                  return;
                }
                var e = a != null ? a(t) : null;
                u == null || u(t, e);
              },
              onError: function (t) {
                l == null || l(t);
              },
              updater: c,
              variables: i(t, d),
            });
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = u),
          (t[6] = d))
        : (d = t[6]);
      var m = d;
      return m;
    }
    function c(e) {}
    l.default = u;
  },
  98,
);
