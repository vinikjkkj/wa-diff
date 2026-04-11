__d(
  "WAWebUsyncBackoff",
  ["Promise", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map();
    function d(t, r) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "usync: ",
            " protocol: ",
            "ms backoff started",
          ])),
        t,
        r,
      ),
        c.set(
          t,
          new (u || (u = n("Promise")))(function (e) {
            return self.setTimeout(e, r);
          }).then(function () {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "usync: ",
                  " protocol: ",
                  "ms backoff ended",
                ])),
              t,
              r,
            );
          }),
        ));
    }
    function m(e) {
      return p(e)
        ? (u || (u = n("Promise"))).all(
            e.protocols.map(function (e) {
              return c.get(e.getName());
            }),
          )
        : (u || (u = n("Promise"))).resolve();
    }
    function p(e) {
      if (e.context === "interactive") return !1;
      var t = e.protocols.map(function (e) {
        return e.getName();
      });
      return !(
        t.includes("devices") &&
        (e.context === "message" || e.context === "voip")
      );
    }
    ((l.setProtocolBackoffMs = d), (l.waitForBackoff = m));
  },
  98,
);
