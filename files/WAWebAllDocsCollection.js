__d(
  "WAWebAllDocsCollection",
  [
    "WAWebAllMediaCollection",
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.filter(function (e) {
        return o("WAWebFrontendMsgGetters").getAsDoc(e) != null;
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
              "allDocs",
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
    ((l.WAWebAllDocsCollection = s), (l.AllDocsCollection = u));
  },
  98,
);
