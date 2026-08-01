__d(
  "AsyncTypedRequest",
  ["AsyncRequest"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          n.setReplaceTransportMarkers(),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.promisePayload = function (n) {
          return e.prototype.promisePayload.call(this, n);
        }),
        (n.setPayloadHandler = function (n) {
          return (e.prototype.setPayloadHandler.call(this, n), this);
        }),
        t
      );
    })(r("AsyncRequest"));
    l.default = e;
  },
  98,
);
