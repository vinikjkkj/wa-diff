__d(
  "uriIsRelativePath",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        !e.getProtocol() &&
        !e.getDomain() &&
        !e.getPort() &&
        e.toString() !== ""
      );
    }
    i.default = e;
  },
  66,
);
