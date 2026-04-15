__d(
  "MLCTypingPerformancePlugin__INTERNAL.react",
  [
    "LexicalComposerContext",
    "LexicalText",
    "MLCTextLengthBucket",
    "mlcInternBootstrapTypingPerformance__INTERNAL",
    "one-trace",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useLayoutEffect,
      c = new RegExp("[^,;\\s]{200,}"),
      d = new RegExp("[^,;\\s]{100,199}"),
      m = new RegExp("[^,;\\s]{50,99}");
    function p(e) {
      return e === ""
        ? 0
        : c.test(e)
          ? 200
          : d.test(e)
            ? 100
            : m.test(e)
              ? 50
              : 0;
    }
    function _(e) {
      return (
        r("mlcInternBootstrapTypingPerformance__INTERNAL")(),
        s.jsx(f, babelHelpers.extends({}, e))
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.format__DEPRECATED,
        n = e.surface,
        a = e.typingPerformanceID,
        i = a === void 0 ? "" : a,
        l = o("LexicalComposerContext").useLexicalComposerContext(),
        s = l[0];
      return (
        u(
          function () {
            var e = babelHelpers.extends(
                {
                  largeWord: p(
                    s.getEditorState().read(o("LexicalText").$rootTextContent),
                  ),
                  textLengthBucket: o(
                    "MLCTextLengthBucket",
                  ).getTextLengthBucket(
                    s.getEditorState().read(o("LexicalText").$rootTextContent)
                      .length,
                  ),
                },
                n === "FeedComposerCometStatusArea"
                  ? { autolinkFastPath: String(!0) }
                  : null,
              ),
              a;
            l();
            function l() {
              a == null || a();
              var o = null,
                l = s.registerRootListener(function (a) {
                  a !== o &&
                    (o !== null && r("one-trace").unregisterTypingPerf(o),
                    a !== null &&
                      r("one-trace").trackTypingPerf(
                        a,
                        n,
                        o,
                        babelHelpers.extends({}, e, {
                          editor: "LexicalEditor",
                          format: t != null ? t : "",
                          typingPerformanceID: i,
                        }),
                      ),
                    (o = a));
                });
              a = function () {
                (l(), o !== null && r("one-trace").unregisterTypingPerf(o));
              };
            }
            var u = s.registerTextContentListener(function (t) {
                var n = p(t);
                n !== e.largeWord && ((e.largeWord = n), l());
              }),
              c = s.registerTextContentListener(function (t) {
                var n = o("MLCTextLengthBucket").getTextLengthBucket(t.length);
                n !== e.textLengthBucket && ((e.textLengthBucket = n), l());
              });
            return function () {
              (a == null || a(), u == null || u(), c == null || c());
            };
          },
          [i, s, t, n],
        ),
        null
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
