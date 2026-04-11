__d(
  "getFalcoLogPolicy_DO_NOT_USE",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { r: 1 },
      s = {};
    function u(t) {
      var n = s[t];
      return n == null
        ? (r("FBLogger")("staticresources").mustfix(
            "Failed to find a Haste-supplied log policy for the Falco event ' + 'identified by token `%s`. Failing open (ie. with a sampling rate of 1.0).",
            t,
          ),
          e)
        : n;
    }
    ((u.add = function (e, t) {
      Object.keys(e).forEach(function (n) {
        (t && t.entry++, s[n] == null ? (s[n] = e[n]) : t && t.dup_entry++);
      });
    }),
      (l.default = u));
  },
  98,
);
