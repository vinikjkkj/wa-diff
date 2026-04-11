__d(
  "WAWebLidPnCache",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          ((this.$1 = new Map()), (this.$2 = new Map()));
        }
        var n = t.prototype;
        return (
          (n.getPhoneNumber = function (t) {
            var e;
            return (e = this.getLidEntry(t)) == null ? void 0 : e.phoneNumber;
          }),
          (n.getLidEntry = function (t) {
            if (!t.isUser())
              throw r("err")("WaWebLidPnCache - Invalid get call (not user)");
            if (!t.isLid())
              throw r("err")("WaWebLidPnCache - Invalid get call (not lid)");
            var e = t.toString();
            return this.$1.get(e);
          }),
          (n.getCurrentLid = function (n) {
            var t;
            if (n.isLid())
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WaWebLidPnCache.getCurrentLid called with a lid",
                      ])),
                  )
                  .sendLogs("get-current-lid-called-with-lid"),
                n
              );
            var r = n.toString();
            return (t = this.$2.get(r)) == null ? void 0 : t.lid;
          }),
          (n.add = function (t, n) {
            if (!t.isLid())
              throw r("err")("WaWebLidPnCache - Invalid add call");
            var e = t.toString();
            this.$1.set(e, n);
            var o = n.phoneNumber;
            o != null && this.$3(o, n);
          }),
          (n.$3 = function (t, n) {
            if (t.isLid())
              throw r("err")("WaWebLidPnCache - Invalid _updatePnMap call");
            var e = t.toString(),
              o = this.$2.get(e);
            o != null
              ? (o == null ? void 0 : o.phoneNumberCreatedAt) <=
                  n.phoneNumberCreatedAt && this.$2.set(e, n)
              : this.$2.set(e, n);
          }),
          (n.clear = function () {
            (this.$1.clear(), this.$2.clear());
          }),
          (n.remove = function (t) {
            if (!t.isLid())
              throw r("err")("WaWebLidPnCache - Invalid remove call");
            var e = t.toString(),
              n = null;
            if (this.$1.has(e)) {
              var o;
              n = (o = this.$1.get(e)) == null ? void 0 : o.phoneNumber;
            }
            (n != null && this.$2.delete(n.toString()), this.$1.delete(e));
          }),
          t
        );
      })();
    l.LidPnCache = s;
  },
  98,
);
