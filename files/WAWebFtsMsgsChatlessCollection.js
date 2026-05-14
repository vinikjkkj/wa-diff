__d(
  "WAWebFtsMsgsChatlessCollection",
  [
    "Promise",
    "WALogger",
    "WAWebFtsMsgsCollectionBase",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this, o("WAWebMsgCollection").MsgCollection) || this),
            (e.previousResultPage = 0),
            (e.pageToOldestMsgId = new Map()),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getNextMsgs = function (a) {
            var t = a.count,
              i = a.direction,
              l = a.msgKeyAnchor;
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getNextMsgs must be implemented",
                  ])),
              ),
              (s || (s = n("Promise"))).reject(
                r("err")("getNextMsgs must be implemented"),
              )
            );
          }),
          (i.searchImpl = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.chat,
                  n = e.count,
                  r = e.direction,
                  o = e.filter,
                  a = e.page,
                  i = a === void 0 ? 1 : a,
                  l = e.searchTerm;
                this.previousResultPage >= i && this.pageToOldestMsgId.clear();
                for (
                  var s = this.pageToOldestMsgId.get(i - 1), u = !1, c = [];
                  !u && c.length < n;
                ) {
                  var d = yield this.getNextMsgs({
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.filterMsgs = function (t, n) {
            return t;
          }),
          a
        );
      })(r("WAWebFtsMsgsCollectionBase"));
    l.default = u;
  },
  98,
);
