__d(
  "WAWebAllMediaCollection",
  [
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebDBMessageFindLocal",
    "WAWebFrontendMsgGetters",
    "WAWebFtsMsgsChatlessCollection",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.filter(function (e) {
        return (
          o("WAWebFrontendMsgGetters").getAsVisualMedia(e) != null &&
          o("WAWebMsgGetters").getIsViewOnce(e) === !1
        );
      });
    }
    var s = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getNextMsgs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return o("WAWebMsgCollection").MsgCollection.queryMedia(
                  void 0,
                  Math.min(
                    o("WAWebAllMsgTypeCollectionUtils").HARD_LIMIT_MAX_COUNT,
                    e,
                  ),
                  n,
                  t,
                  "allMedia",
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.filterMsgs = function (n, r) {
            var t = o("WAWebDBMessageFindLocal").getMediaAvailableMsgBoundary(),
              a = e(
                n.filter(function (e) {
                  return e.t > t;
                }),
              );
            return o(
              "WAWebAllMsgTypeCollectionUtils",
            ).filterOnlyMsgsFromChatAndGroup(a);
          }),
          (a.getMsgsAround = function (t, n) {
            var e = this.indexOf(t),
              r = Math.floor(Math.floor(n / 2)),
              o = Math.max(e - r, 0),
              a = Math.min(this.length, o + n);
            return (a - o < n && (o = Math.max(a - n, 0)), this.slice(o, a));
          }),
          (a.getAfter = function (t) {
            var e = this.indexOf(t);
            return e < 0 || e === this.length - 1 ? null : this.at(e + 1);
          }),
          (a.getBefore = function (t) {
            var e = this.indexOf(t);
            return e <= 0 ? null : this.at(e - 1);
          }),
          r
        );
      })(r("WAWebFtsMsgsChatlessCollection")),
      u = new s();
    ((l.WAWebAllMediaCollection = s), (l.AllMediaCollection = u));
  },
  98,
);
