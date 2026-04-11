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
          (i.getNextMsgs = function (a, i, l) {
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
              function* (e, t, n, r, o, a) {
                (n === void 0 && (n = 1),
                  this.previousResultPage >= n &&
                    this.pageToOldestMsgId.clear());
                for (
                  var i = this.pageToOldestMsgId.get(n - 1), l = !1, s = [];
                  !l && s.length < r;
                ) {
                  var u = yield this.getNextMsgs(r, i, a);
                  if (((l = u.length < r), u.length === 0)) break;
                  ((i = u[u.length - 1].id),
                    s.push.apply(s, this.filterMsgs(u, t)));
                }
                return (
                  this.pageToOldestMsgId.set(n, i),
                  (this.previousResultPage = n),
                  { canceled: !1, eof: l, messages: s }
                );
              },
            );
            function t(t, n, r, o, a, i) {
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
