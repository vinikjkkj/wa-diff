__d(
  "isMimeTypeForFile",
  ["UFICommentFileInputAcceptValues.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { "image/gif": "video" },
      s,
      u,
      c;
    function d(e) {
      return e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .map(function (e) {
          return e.replace(/\/\*$/, "/");
        });
    }
    function m(t) {
      u == null &&
        (u = d(r("UFICommentFileInputAcceptValues.experimental").photos));
      var n = e[t];
      return n != null
        ? n === "photo"
        : u.some(function (e) {
            return t.startsWith(e);
          });
    }
    function p(t) {
      s == null &&
        (s = d(r("UFICommentFileInputAcceptValues.experimental").videos));
      var n = e[t];
      return n != null
        ? n === "video"
        : s.some(function (e) {
            return t.startsWith(e);
          });
    }
    function _(t) {
      c == null &&
        (c = d(r("UFICommentFileInputAcceptValues.experimental").files));
      var n = e[t];
      return n != null
        ? n === "file"
        : c.some(function (e) {
            return t.startsWith(e);
          });
    }
    function f(e, t) {
      return (t === void 0 && (t = !1), m(e) || (!t && p(e)));
    }
    ((l.isMimeTypeForPhoto = m),
      (l.isMimeTypeForVideo = p),
      (l.isMimeTypeForFile = _),
      (l.isMimeTypeForMedia = f));
  },
  98,
);
