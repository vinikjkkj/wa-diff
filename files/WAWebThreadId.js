__d(
  "WAWebThreadId",
  ["WALogger", "WAWebMsgKey", "WAWebThreadUtils", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        function t(t) {
          ((this.type = t.type),
            t.key instanceof r("WAWebMsgKey")
              ? (this.key = t.key)
              : (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadId] non-WAWebMsgKey key for type ",
                        "",
                      ])),
                    this.type,
                  )
                  .sendLogs("WAWebThreadId: invalid MsgKey"),
                (this.key = r("WAWebMsgKey").from(t.key))),
            (this.$1 = this.type + "_" + this.key.toString()));
        }
        var n = t.prototype;
        return (
          (n.toString = function () {
            return this.$1;
          }),
          (n.equals = function (n) {
            return n instanceof t && this.toString() === n.toString();
          }),
          (t.from = function (t) {
            var e = t.split("_");
            if (e.length < 2)
              throw r("err")("ThreadId.from error: invalid string format");
            var n = e[0],
              a = e.slice(1, e.length).join("_"),
              i = o("WAWebThreadUtils").getThreadTypeFromString(n);
            return o("WAWebThreadUtils").getThreadIDfromType(
              r("WAWebMsgKey").from(a),
              i,
            );
          }),
          (t.tryFrom = function (n) {
            try {
              return t.from(n);
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadId.tryFrom] malformed id: ",
                        "",
                      ])),
                    n,
                  )
                  .sendLogs("WAWebThreadId: malformed-db-id"),
                null
              );
            }
          }),
          (t.fromMessage = function (t, n) {
            var e =
              t instanceof r("WAWebMsgKey") ? t : r("WAWebMsgKey").from(t);
            return o("WAWebThreadUtils").getThreadIDfromType(e, n);
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
