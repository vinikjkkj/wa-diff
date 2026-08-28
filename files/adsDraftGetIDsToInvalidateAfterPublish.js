__d(
  "adsDraftGetIDsToInvalidateAfterPublish",
  [
    "invariant",
    "adsDraftGetAdObjectIDsFromFragmentStatuses",
    "adsDraftGetAdObjectIDsFromPublishResponse",
    "adsDraftGetFragmentStatusesFromPublishResponse",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = e.filter(function (e) {
        return e.ad_object_type === t;
      });
      return r("adsDraftGetAdObjectIDsFromFragmentStatuses")(n);
    }
    function u(t, n) {
      return e(r("adsDraftGetFragmentStatusesFromPublishResponse")(t), n);
    }
    function c(e, t) {
      var n = [];
      if (
        (e.ancestorIDs && (n = n.concat(e.ancestorIDs.toArray())),
        e.publishedObjectIDs && (n = n.concat(e.publishedObjectIDs)),
        e.response &&
          ((n = n.concat(
            r("adsDraftGetAdObjectIDsFromPublishResponse")(e.response),
          )),
          t))
      ) {
        e.response || s(0, 368);
        var o = u(e.response, "campaign");
        for (var a of o) {
          t || s(0, 368);
          var i = t.get(a);
          i && (n = n.concat(i));
        }
      }
      return n;
    }
    l.default = c;
  },
  98,
);
