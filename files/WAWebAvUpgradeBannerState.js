__d(
  "WAWebAvUpgradeBannerState",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.bannerQueue = []),
            (t.currentBannerIndex = 0),
            (t.rotationInterval = null),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getCurrentBanner = function () {
            return this.bannerQueue.length === 0
              ? null
              : this.bannerQueue[this.currentBannerIndex];
          }),
          (n.showBanner = function (t) {
            if (t.isBannerVisible) {
              var e = this.bannerQueue.findIndex(function (e) {
                return e.jid.equals(t.jid);
              });
              e === -1 &&
                (this.bannerQueue.push(t),
                this.bannerQueue.length > 1 &&
                  this.rotationInterval == null &&
                  this.startRotation(),
                this.trigger("change"));
            }
          }),
          (n.startRotation = function () {
            var e = this;
            this.rotationInterval = window.setInterval(function () {
              ((e.currentBannerIndex =
                (e.currentBannerIndex + 1) % e.bannerQueue.length),
                e.trigger("change"));
            }, 5e3);
          }),
          (n.removeBannerForJid = function (t) {
            var e = this.bannerQueue.findIndex(function (e) {
              return e.jid.equals(t);
            });
            e !== -1 &&
              (this.bannerQueue.splice(e, 1),
              this.currentBannerIndex >= this.bannerQueue.length &&
                (this.currentBannerIndex = 0),
              this.bannerQueue.length <= 1 &&
                this.rotationInterval != null &&
                (window.clearInterval(this.rotationInterval),
                (this.rotationInterval = null)),
              this.trigger("change"));
          }),
          (n.clearAllBanners = function () {
            ((this.bannerQueue = []),
              (this.currentBannerIndex = 0),
              this.rotationInterval != null &&
                (window.clearInterval(this.rotationInterval),
                (this.rotationInterval = null)),
              this.trigger("change"));
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
