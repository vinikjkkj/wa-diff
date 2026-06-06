__d(
  "WAWebAllMediaCollection",
  [
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebDBMessageFindLocal",
    "WAWebFrontendMsgGetters",
    "WAWebFtsMsgsChatlessCollection",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
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
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getNextMsgs = async function (t) {
            var e = t.count,
              n = t.direction,
              r = t.msgKeyAnchor;
            return o("WAWebMsgCollection").MsgCollection.queryMedia(
              void 0,
              Math.min(
                o("WAWebAllMsgTypeCollectionUtils").HARD_LIMIT_MAX_COUNT,
                e,
              ),
              n,
              r,
              "allMedia",
            );
          }),
          (r.filterMsgs = function (n, r) {
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
          (r.getMsgsAround = function (t, n) {
            var e = this.indexOf(t),
              r = Math.floor(Math.floor(n / 2)),
              o = Math.max(e - r, 0),
              a = Math.min(this.length, o + n);
            return (a - o < n && (o = Math.max(a - n, 0)), this.slice(o, a));
          }),
          (r.getAfter = function (t) {
            var e = this.indexOf(t);
            return e < 0 || e === this.length - 1 ? null : this.at(e + 1);
          }),
          (r.getBefore = function (t) {
            var e = this.indexOf(t);
            return e <= 0 ? null : this.at(e - 1);
          }),
          n
        );
      })(r("WAWebFtsMsgsChatlessCollection")),
      u = new s();
    ((l.WAWebAllMediaCollection = s), (l.AllMediaCollection = u));
  },
  98,
);
