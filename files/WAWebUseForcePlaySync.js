__d(
  "WAWebUseForcePlaySync",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t, n) {
      var r = c(e),
        o = c(null);
      return (
        u(
          function () {
            var a = r.current;
            r.current = e;
            var i = t.current;
            if (!(i == null || !n.current)) {
              if (e) {
                var l = o.current;
                (l != null &&
                  (i.removeOnLoopCompleteHandler(l), (o.current = null)),
                  i.setLoop(!0),
                  i.play());
                return;
              }
              if (a) {
                var s = function () {
                  var e = t.current;
                  (e == null || e.removeOnLoopCompleteHandler(s),
                    (o.current = null),
                    e == null || e.stop(),
                    e == null || e.setLoop(!1),
                    (n.current = !1));
                };
                return (
                  (o.current = s),
                  i.addOnLoopCompleteHandler(s),
                  function () {
                    (i.removeOnLoopCompleteHandler(s),
                      o.current === s && (o.current = null));
                  }
                );
              }
            }
          },
          [e],
        ),
        r
      );
    }
    l.useForcePlaySync = d;
  },
  98,
);
