__d(
  "Base64Utils",
  ["XPlatReactTextEncoder", "base64Binary"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("base64Binary").encode(
        new (o("XPlatReactTextEncoder").TextEncoder)().encode(e),
      );
    }
    function s(e) {
      return o("base64Binary").encode(new Uint8Array(e));
    }
    function u(e) {
      return o("base64Binary").decode(e).buffer;
    }
    ((l.encodeUnicode = e), (l.fromArrayBuffer = s), (l.toArrayBuffer = u));
  },
  98,
);
