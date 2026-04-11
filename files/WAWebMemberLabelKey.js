__d(
  "WAWebMemberLabelKey",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.chatId = e.chatId), (this.member = e.member));
        var t = [this.chatId, this.member];
        this.serialized = t.join("_");
      }
      var t = e.prototype;
      return (
        (t.toString = function () {
          return this.serialized;
        }),
        (t.equals = function (n) {
          return n instanceof e && this.toString() === n.toString();
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
