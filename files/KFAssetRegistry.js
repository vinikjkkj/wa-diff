__d(
  "KFAssetRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = { audio: [], images: [] };
      }
      var t = e.prototype;
      return (
        (t.addAudio = function (t) {
          this.$1.audio.push(t);
        }),
        (t.addImageAtIndex = function (t, n) {
          this.$1.images[n] = t;
        }),
        (t.getAudio = function (t) {
          return this.$1.audio[t];
        }),
        (t.getImage = function (t) {
          return this.$1.images[t];
        }),
        (t.getImages = function () {
          return this.$1.images;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
