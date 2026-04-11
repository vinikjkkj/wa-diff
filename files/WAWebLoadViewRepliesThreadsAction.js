__d(
  "WAWebLoadViewRepliesThreadsAction",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.viewRepliesThreads;
          if (n != null)
            try {
              yield n.initializeViewRepliesThreads();
            } catch (t) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[loadViewRepliesThreads] viewRepliesThreads init err",
                  ])),
              );
            }
        })),
        u.apply(this, arguments)
      );
    }
    l.loadViewRepliesThreads = s;
  },
  98,
);
