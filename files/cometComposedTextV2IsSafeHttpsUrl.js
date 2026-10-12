__d(
  "cometComposedTextV2IsSafeHttpsUrl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      try {
        var t = new URL(e),
          n = t.hostname,
          r = t.password,
          o = t.protocol,
          a = t.username;
        return o === "https:" && n !== "" && a === "" && r === "";
      } catch (e) {
        return !1;
      }
    }
    i.default = e;
  },
  66,
);
