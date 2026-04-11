__d(
  "oz-player/manifests/Mpd",
  ["oz-player/shims/OzEventEmitter", "oz-player/utils/OzErrorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o, a, i, l, s) {
        var u;
        return (
          (u = e.call(this) || this),
          (u.$Mpd$p_9 = !1),
          (u.$Mpd$p_1 = t),
          (u.$Mpd$p_5 = i),
          (u.$Mpd$p_2 = n),
          (u.$Mpd$p_3 = r),
          (u.$Mpd$p_4 = o),
          (u.$Mpd$p_6 = a),
          (u.$Mpd$p_7 = l),
          (u.$Mpd$p_8 = s),
          u
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.markRefreshed = function () {
          this.$Mpd$p_10 = Date.now();
        }),
        (n.getRefreshDate = function () {
          return this.$Mpd$p_10;
        }),
        (n.updateLocation = function (t) {
          ((this.$Mpd$p_6 = t),
            (this.$Mpd$p_9 = !0),
            this.emit("locationUpdated"));
        }),
        (n.getLocation = function () {
          return this.$Mpd$p_6;
        }),
        (n.getMinimumUpdatePeriod = function () {
          return this.$Mpd$p_5;
        }),
        (n.getVideoRepresentations = function () {
          return this.$Mpd$p_2;
        }),
        (n.getVideoRepresentationsByVariant = function (t) {
          return t.lang === null
            ? this.$Mpd$p_2.filter(function (e) {
                return e.getLang() === t.lang && e.getRole() === t.role;
              })
            : this.$Mpd$p_2.filter(function (e) {
                return e.getLang() === t.lang && e.getRole() === t.role;
              });
        }),
        (n.getAudioRepresentationsByVariant = function (t) {
          return t.lang === null
            ? this.$Mpd$p_3.filter(function (e) {
                return e.getLang() === t.lang && e.getRole() === t.role;
              })
            : this.$Mpd$p_3.filter(function (e) {
                return e.getLang() === t.lang && e.getRole() === t.role;
              });
        }),
        (n.getAudioRepresentations = function () {
          return this.$Mpd$p_3;
        }),
        (n.getApplicationRepresentations = function () {
          return this.$Mpd$p_4;
        }),
        (n.getCustomField = function (t) {
          var e = this.$Mpd$p_7.get(t);
          if (!e)
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_MPD_PARSER",
              description: "Custom parser not specified for field " + t,
            });
          try {
            return e(this.$Mpd$p_1);
          } catch (e) {
            return null;
          }
        }),
        (n.isStaticMpd = function () {
          return this.$Mpd$p_8;
        }),
        (n.updateWith = function (t) {
          (this.$Mpd$p_9 &&
            ((this.$Mpd$p_9 = !1),
            this.$Mpd$p_2.splice(0, this.$Mpd$p_2.length),
            this.$Mpd$p_3.splice(0, this.$Mpd$p_3.length),
            this.$Mpd$p_4.splice(0, this.$Mpd$p_4.length)),
            (this.$Mpd$p_1 = t.$Mpd$p_1),
            this.$Mpd$p_11(this.$Mpd$p_2, t.getVideoRepresentations()),
            this.$Mpd$p_11(this.$Mpd$p_3, t.getAudioRepresentations()),
            this.$Mpd$p_11(this.$Mpd$p_4, t.getApplicationRepresentations()),
            (this.$Mpd$p_8 = t.isStaticMpd()),
            (this.$Mpd$p_5 = t.getMinimumUpdatePeriod()),
            this.emit("updated"));
        }),
        (n.blockTimeRange = function (t) {
          (this.$Mpd$p_2.forEach(function (e) {
            return e.blockTimeRange(t);
          }),
            this.$Mpd$p_3.forEach(function (e) {
              return e.blockTimeRange(t);
            }),
            this.$Mpd$p_4.forEach(function (e) {
              return e.blockTimeRange(t);
            }));
        }),
        (n.unblockTimeRange = function () {
          this.blockTimeRange({ startTime: 0, endTime: 0 });
        }),
        (n.$Mpd$p_11 = function (t, n) {
          for (var e = 0; e < n.length; e++) {
            for (var r = n[e], o = !1, a = 0; a < t.length; a++) {
              var i = t[a];
              if (r.getID() === i.getID()) {
                (i.updateWith(r), (o = !0));
                break;
              }
            }
            o || t.push(r);
          }
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);
