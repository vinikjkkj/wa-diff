__d(
  "WAWebSignalAddress",
  [
    "WAWebApiContact",
    "WAWebBizCoexGatingUtils",
    "WAWebSessionScope",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ":99",
      s = "_status",
      u = (function () {
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
              if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
                if (t !== e) throw r("err")("Hosted jid with wrong device id");
                var n = o("WAWebWidFactory").asUserWidOrThrow(this.wid),
                  a = !n.isLid() && !n.isHostedLid() && n.isUser(),
                  i = a ? o("WAWebApiContact").getCurrentLid(n) : n;
                return i == null
                  ? [this.wid.user, t, "@hosted"].join("")
                  : [i.user, t, "@hosted.lid"].join("");
              }
              throw r("err")("Unexpected hosted jid");
            }
            var l = o("WAWebWidFactory").asUserWidOrThrow(this.wid),
              u = !l.isLid() && l.isUser(),
              c = u ? o("WAWebApiContact").getCurrentLid(l) : l;
            if (c == null) return [this.wid.user, t, "@c.us"].join("");
            var d = [c.user, t, "@lid"].join("");
            return this.$1 === o("WAWebSessionScope").SessionScope.STATUS
              ? d + s
              : d;
          }),
          t
        );
      })();
    l.SignalAddress = u;
  },
  98,
);
