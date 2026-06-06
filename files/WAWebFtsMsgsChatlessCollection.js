__d(
  "WAWebFtsMsgsChatlessCollection",
  ["WALogger", "WAWebFtsMsgsCollectionBase", "WAWebMsgCollection", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this, o("WAWebMsgCollection").MsgCollection) || this),
            (e.previousResultPage = 0),
            (e.pageToOldestMsgId = new Map()),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getNextMsgs = function (n) {
            var t = n.count,
              a = n.direction,
              i = n.msgKeyAnchor;
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getNextMsgs must be implemented",
                  ])),
              ),
              Promise.reject(r("err")("getNextMsgs must be implemented"))
            );
          }),
          (a.searchImpl = async function (t) {
            var e = t.chat,
              n = t.count,
              r = t.direction,
              o = t.filter,
              a = t.page,
              i = a === void 0 ? 1 : a,
              l = t.searchTerm;
            this.previousResultPage >= i && this.pageToOldestMsgId.clear();
            for (
              var s = this.pageToOldestMsgId.get(i - 1), u = !1, c = [];
              !u && c.length < n;
            ) {
              var d = await this.getNextMsgs({
                count: n,
                direction: r,
                msgKeyAnchor: s,
              });
              if (((u = d.length < n), d.length === 0)) break;
              ((s = d[d.length - 1].id),
                c.push.apply(c, this.filterMsgs(d, l)));
            }
            return (
              this.pageToOldestMsgId.set(i, s),
              (this.previousResultPage = i),
              { canceled: !1, eof: u, messages: c }
            );
          }),
          (a.filterMsgs = function (t, n) {
            return t;
          }),
          n
        );
      })(r("WAWebFtsMsgsCollectionBase"));
    l.default = s;
  },
  98,
);
