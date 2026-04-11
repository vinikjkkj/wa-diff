__d(
  "WASmaxRpcUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = Object.keys(t)
        .map(function (e) {
          var n = e === "Request" ? "<request>" : '<response name="' + e + '">';
          return "Tried " + n + ", but failed with " + t[e].error + ".";
        })
        .join(" ");
      return 'Failed to parse incoming stanza of <rpc name="' + e + '">. ' + n;
    }
    i.errorMessageRpcParsing = e;
  },
  66,
);
