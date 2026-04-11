__d(
  "ChannelClientID",
  ["MqttWebDeviceID", "gkx", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("gkx")("21118")
        ? r("uuidv4")()
        : (e =
              r("MqttWebDeviceID") == null
                ? void 0
                : r("MqttWebDeviceID").clientID) != null
          ? e
          : r("uuidv4")(),
      u = {
        getID: function () {
          return s;
        },
      };
    i.exports = u;
  },
  34,
);
