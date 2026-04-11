__d(
  "WAWebGetDsbInfoAction",
  ["WALogger", "WAWebGetDsbInfoJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebGetDsbInfoJob").getDsbInfo(t);
            return n;
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[DSAR][getDsbInfoAction] DSB ref fetch failed",
                    ])),
                )
                .tags("newsletter", "wa-ice", "DSAR")
                .sendLogs("newsletter-get-dsb-info-action"),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.getDsbInfoAction = s;
  },
  98,
);
