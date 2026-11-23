__d(
  "WAWebDebugBizBroadcastChatUtils",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e4;
    function u(t) {
      r("vulture")("VVQyakP4bPA0f7HAOE-jfQtmisk=");
      var a = o("WAWebWidFactory").createWid(t);
      return o("WAWebChatCollection").ChatCollection.get(a) != null
        ? (e || (e = n("Promise"))).resolve()
        : new (e || (e = n("Promise")))(function (e, n) {
            r("vulture")("JqxbMlWj_srp6IcVuPtAC-Dsm6U=");
            var i = function () {
              (r("vulture")("PVHPzAME7NouhtN72x8FavJEv-A="),
                o("WAWebChatCollection").ChatCollection.get(a) != null &&
                  (o("WAWebChatCollection").ChatCollection.off("add", i), e()));
            };
            (window.setTimeout(function () {
              (r("vulture")("wZ3pguQsSguRlrRXCyupc1NnB9A="),
                o("WAWebChatCollection").ChatCollection.off("add", i),
                n(
                  r("err")(
                    "Broadcast chat " +
                      t +
                      " never reached ChatCollection within " +
                      s +
                      "ms",
                  ),
                ));
            }, s),
              o("WAWebChatCollection").ChatCollection.on("add", i));
          });
    }
    function c() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (e == null) throw r("err")("No active chat");
      return o("WAWebWidToJid").widToBroadcastJid(e.id);
    }
    ((l.whenBroadcastChatVisible = u), (l.getActiveBroadcastJid = c));
  },
  98,
);
