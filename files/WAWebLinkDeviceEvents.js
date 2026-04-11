__d(
  "WAWebLinkDeviceEvents",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.triggerRefreshAltLinkingCode = function () {
            this.trigger("link_device_events:refresh_alt_linking_code");
          }),
          (n.triggerErrorAltLinking = function () {
            this.trigger("link_device_events:error_alt_linking");
          }),
          (n.triggerPrimaryHelloReceived = function () {
            this.trigger("link_device_events:primary_hello_received");
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.WAWebLinkDeviceEvents = s;
  },
  98,
);
