__d(
  "MqttUserName",
  ["MqttUserNameUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, a, i, l, s, u, c, d, m) {
        (l === void 0 && (l = null),
          s === void 0 && (s = ""),
          u === void 0 && (u = "websocket"),
          c === void 0 && (c = null),
          d === void 0 && (d = null),
          m === void 0 && (m = null),
          (this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$4 = r),
          (this.$5 = a),
          (this.$6 = i),
          (this.$7 = o("MqttUserNameUtils").getMqttForegroundStatus()),
          (this.$8 = l),
          (this.$9 = s),
          (this.$10 = u),
          (this.$11 = c),
          (this.$12 = d),
          (this.$13 = m));
      }
      var t = e.prototype;
      return (
        (t.gen = function (t, n, r, a) {
          a === void 0 && (a = []);
          var e = o("MqttUserNameUtils").getMqttForegroundStatus(this.$7),
            i = r.map(function (e) {
              var t = {
                isBase64Publish: !1,
                messageId: e.messageId,
                payload: e.payload,
                qos: e.qos,
                topic: e.topic,
              };
              return (
                typeof t.payload != "string" &&
                  ((t.payload = btoa(
                    String.fromCharCode.apply(null, t.payload),
                  )),
                  (t.isBase64Publish = !0)),
                t
              );
            }),
            l = {
              a: o("MqttUserNameUtils").getUserAgent(),
              asi: this.$13,
              aid: this.$5,
              aids: this.$12 != null ? Object.fromEntries(this.$12) : null,
              chat_on: this.$6,
              cp: this.$3,
              ct: this.$10,
              d: this.$4,
              dc: "",
              ecp: this.$2,
              fg: e,
              gas: this.$8,
              mqtt_sid: "",
              no_auto_fg: !0,
              p: this.$11,
              pack: a,
              php_override: this.$9,
              pm: i,
              s: t,
              st: n,
              u: this.$1,
            };
          return JSON.stringify(l);
        }),
        (t.setForegroundState = function (t) {
          this.$7 = t;
        }),
        (t.setChatVisibility = function (t) {
          this.$6 = t;
        }),
        (t.getEndpointCapabilities = function () {
          return this.$2;
        }),
        (t.getDeviceId = function () {
          return this.$4;
        }),
        (t.setEndpointCapabilities = function (t) {
          this.$2 = t;
        }),
        (t.getIsGuestAuthStringPresent = function () {
          return this.$8 !== null;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
