__d(
  "WAWebAllLinksCollection",
  [
    "WAWebAllMediaCollection",
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebMsgCollection",
    "WAWebMsgLinks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.filter(function (e) {
        return o("WAWebMsgLinks").getGalleryLinks(e).length > 0;
      });
    }
    var s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getNextMsgs = function (t, n, r) {
            return o("WAWebMsgCollection").MsgCollection.queryMedia(
              void 0,
              Math.min(
                o("WAWebAllMsgTypeCollectionUtils").HARD_LIMIT_MAX_COUNT,
                t,
              ),
              r,
              n,
              "allLinks",
            );
          }),
          (r.filterMsgs = function (n, r) {
            var t = e(n);
            return o(
              "WAWebAllMsgTypeCollectionUtils",
            ).filterOnlyMsgsFromChatAndGroup(t);
          }),
          n
        );
      })(o("WAWebAllMediaCollection").WAWebAllMediaCollection),
      u = new s();
    ((l.WAWebAllLinksCollection = s), (l.AllLinksCollection = u));
  },
  98,
);
