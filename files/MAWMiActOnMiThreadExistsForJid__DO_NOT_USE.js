__d(
  "MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
  ["MAWThreadLoadingState", "MWFBLogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("MWFBLogger")
        .MWLogger()
        .tags(["MiActMapping", "UIActions", "ThreadReady"]);
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i = yield o(
              "MAWThreadLoadingState",
            ).getThreadKeyIfMiThreadNotMissing(t, n);
            if (i == null)
              throw u.mustfixThrow(
                "Missing thread key or MI mapping for jid: %s, thread action: %s, MI mapping state %s",
                r,
                n,
              );
            return (
              u.DEBUG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Executing ",
                    ", jid: ",
                    "",
                  ])),
                r,
                n,
              ),
              a(t, i)
            );
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "MAWThreadLoadingState",
            ).getThreadKeyIfMiThreadNotMissing(e, t);
            if (a != null)
              return (
                u.DEBUG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Executing ",
                      ", jid: ",
                      "",
                    ])),
                  n,
                  t,
                ),
                r(e, a)
              );
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.onMiThreadExistsForJid__DO_NOT_USE = c),
      (l.onMiThreadExistsForJidNoThrow__DO_NOT_USE = m));
  },
  98,
);
