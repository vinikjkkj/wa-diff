__d(
  "WAWebCommentList.react",
  [
    "WAWebCommentRow.react",
    "WAWebMessageDateMarker.react",
    "WAWebMessageListDayOfMsg",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      for (
        var t = e.comments,
          n = e.isAlbumMsg,
          o = [],
          a = !1,
          i = t[0] ? r("WAWebMessageListDayOfMsg")(t[0]) : 0,
          l = 0;
        l < t.length;
        l++
      ) {
        var u = t[l],
          c = t[l + 1],
          d = void 0,
          m = void 0;
        (a ||
          o.push(
            s.jsx(
              r("WAWebMessageDateMarker.react"),
              { timestamp: u.t },
              "msg-" + u.id.toString() + "-date",
            ),
          ),
          c != null
            ? ((m = r("WAWebMessageListDayOfMsg")(c)), (d = m === i))
            : ((d = !1), (m = 0)),
          o.push(
            s.jsx(
              r("WAWebCommentRow.react"),
              { comment: u, isAlbumMsg: n },
              u.id.toString(),
            ),
          ),
          (a = d),
          (i = m));
      }
      return o;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
