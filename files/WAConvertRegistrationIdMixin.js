__d(
  "WAConvertRegistrationIdMixin",
  ["WAParsableXmlNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAParsableXmlNode").convertBytesToUint(
        e.registrationElementValue,
        4,
      );
    }
    l.registrationIdMixin = e;
  },
  98,
);
