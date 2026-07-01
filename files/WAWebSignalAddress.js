__d(
  "WAWebSignalAddress",
  ["WAWebApiContact", "WAWebSessionScope", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    var e = ":99",
      s = "_status",
      u = "_pq",
      c = (function () {
        function t(e, t) {
          (t === void 0 && (t = o("WAWebSessionScope").SessionScope.DEFAULT),
            (this.wid = e),
            (this.$1 = t));
        }
        var n = t.prototype;
        return (
          (n.getWid = function () {
            return this.wid;
          }),
          (n.toString = function () {
            var t =
              this.wid.device != null && this.wid.device !== 0
                ? ":" + this.wid.device
                : "";
            if (this.wid.isFbidBot()) return [this.wid.user, "@bot"].join("");
            if (this.wid.isBot()) return [this.wid.user, t, "@c.us"].join("");
            if (this.wid.isHosted()) {
              if (t !== e) throw r("err")("Hosted jid with wrong device id");
              var n = o("WAWebWidFactory").asUserWidOrThrow(this.wid),
                a = !n.isLid() && !n.isHostedLid() && n.isUser(),
                i = a ? o("WAWebApiContact").getCurrentLid(n) : n;
              return i == null
                ? [this.wid.user, t, "@hosted"].join("")
                : [i.user, t, "@hosted.lid"].join("");
            }
            var l = o("WAWebWidFactory").asUserWidOrThrow(this.wid),
              c = !l.isLid() && l.isUser(),
              d = c ? o("WAWebApiContact").getCurrentLid(l) : l;
            if (d == null) return [this.wid.user, t, "@c.us"].join("");
            var m = [d.user, t, "@lid"].join("");
            return this.$1 === o("WAWebSessionScope").SessionScope.STATUS
              ? m + s
              : this.$1 === o("WAWebSessionScope").SessionScope.PQ
                ? m + u
                : m;
          }),
          t
        );
      })();
    l.SignalAddress = c;
  },
  98,
);
