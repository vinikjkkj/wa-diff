__d(
  "FBBrowserPasswordEncryption",
  ["EnvelopeEncryption", "tweetnacl-util"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "#PWD_BROWSER",
      s = 5;
    function u(t, n, a, i, l, u) {
      (l === void 0 && (l = s), u === void 0 && (u = e));
      var c = r("tweetnacl-util").decodeUTF8(a),
        d = r("tweetnacl-util").decodeUTF8(i);
      return o("EnvelopeEncryption")
        .encrypt(t, n, c, d)
        .then(function (e) {
          return [u, l, i, r("tweetnacl-util").encodeBase64(e)].join(":");
        });
    }
    l.encryptPassword = u;
  },
  98,
);
