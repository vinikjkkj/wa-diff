__d(
  "WAWebLoadViewRepliesThreadsAction",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = t.viewRepliesThreads;
      if (n != null)
        try {
          await n.initializeViewRepliesThreads();
        } catch (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[loadViewRepliesThreads] viewRepliesThreads init err",
              ])),
          );
        }
    }
    l.loadViewRepliesThreads = s;
  },
  98,
);
