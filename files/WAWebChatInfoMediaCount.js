__d(
  "WAWebChatInfoMediaCount",
  ["Promise", "WAWebStateUtils", "sumBy"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = o("WAWebStateUtils").unproxy(t);
      return i.promises.sendDelete != null
        ? (e || (e = n("Promise"))).resolve(0)
        : (e || (e = n("Promise")))
            .all(
              [i.getMediaMsgs(), i.getLinkMsgs(), i.getDocMsgs()].map(
                function (e) {
                  return e.count(i, a);
                },
              ),
            )
            .then(function (e) {
              return r("sumBy")(e, function (e) {
                return e != null ? e : 0;
              });
            });
    }
    l.countAllMedia = s;
  },
  98,
);
