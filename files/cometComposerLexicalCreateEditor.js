__d(
  "cometComposerLexicalCreateEditor",
  [
    "CometComposerNodes",
    "FBLogger",
    "Lexical",
    "cometLexicalBaseTheme",
    "mlcErrorHandler__INTERNAL",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("Lexical").createEditor({
        namespace: "CometPostComposer",
        nodes: o("CometComposerNodes").COMET_NODES,
        onError: function (n) {
          return r("mlcErrorHandler__INTERNAL")(n, e, function (e) {
            r("FBLogger")("CometComposer")
              .catching(n)
              .mustfix("Lexical Error Composer \u2013 " + e);
          });
        },
        theme: babelHelpers.extends({}, r("cometLexicalBaseTheme"), {
          hashtag: "xv78j7m x1sy0etr",
          link: "x1fey0fg xmper1u x1edh9d7",
          paragraph: "xdj266r x14z9mp xat24cr x1lziwak x16tdsg8",
          placeholder:
            "xi81zsa x6ikm8r x10wlt62 x47corl x10l6tqk xlyipyv x13vifvy x87ps6o xuxw1ft",
        }),
      });
      return e;
    }
    l.default = e;
  },
  98,
);
