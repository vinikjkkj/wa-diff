__d(
  "oz-player/configs/OzPlayerConfig",
  ["oz-player/configs/OzPlayerConfigDefaults"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        (e === void 0 && (e = {}), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.getBool = function (t) {
          return typeof this.$1[t] == "boolean"
            ? this.$1[t]
            : o("oz-player/configs/OzPlayerConfigDefaults").defaultBools[t];
        }),
        (t.getNumber = function (t) {
          return typeof this.$1[t] == "number"
            ? this.$1[t]
            : o("oz-player/configs/OzPlayerConfigDefaults").defaultNumbers[t];
        }),
        (t.getString = function (t) {
          return typeof this.$1[t] == "string"
            ? this.$1[t]
            : o("oz-player/configs/OzPlayerConfigDefaults").defaultStrings[t];
        }),
        (t.getLegacyConfig = function () {
          var e = this;
          return {
            getBool: function (n, r) {
              var t;
              return typeof e.$1[n] == "boolean"
                ? e.$1[n]
                : (t = o("oz-player/configs/OzPlayerConfigDefaults")
                      .defaultBools[n]) != null
                  ? t
                  : r;
            },
            getNumber: function (n, r) {
              var t;
              return typeof e.$1[n] == "number"
                ? e.$1[n]
                : (t = o("oz-player/configs/OzPlayerConfigDefaults")
                      .defaultNumbers[n]) != null
                  ? t
                  : r;
            },
            getString: function (n, r) {
              var t;
              return typeof e.$1[n] == "string"
                ? e.$1[n]
                : (t = o("oz-player/configs/OzPlayerConfigDefaults")
                      .defaultStrings[n]) != null
                  ? t
                  : r;
            },
          };
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
