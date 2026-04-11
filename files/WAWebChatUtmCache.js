__d(
  "WAWebChatUtmCache",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e() {
          this.utmReadChatIds = new Set();
        }
        var t = e.prototype;
        return (
          (t.deleteChatId = function (t) {
            this.utmReadChatIds.delete(t);
          }),
          (t.hasRead = function (t) {
            return this.utmReadChatIds.has(t);
          }),
          (t.read = function (t) {
            this.utmReadChatIds.add(t);
          }),
          (t.clearAll = function () {
            this.utmReadChatIds.clear();
          }),
          e
        );
      })(),
      l = new e();
    i.default = l;
  },
  66,
);
