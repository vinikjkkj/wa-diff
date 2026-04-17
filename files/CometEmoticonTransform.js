__d(
  "CometEmoticonTransform",
  [
    "CometEmojiWithContextualSize.react",
    "EmoticonRenderer",
    "FBEmojiResource",
    "FBEmojiUtils",
    "baseTextTransformAllStrings",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = e === void 0 ? {} : e,
        a = n.size;
      return function (e) {
        var n = 0;
        return r("baseTextTransformAllStrings")(
          e,
          function (e, t) {
            return o("EmoticonRenderer").render(
              e,
              function (e) {
                return s.jsx(
                  r("CometEmojiWithContextualSize.react"),
                  {
                    emoji: [
                      o("FBEmojiUtils").codepointsToString(
                        e.split("_").map(function (e) {
                          return +("0x" + e);
                        }),
                      ),
                    ],
                    resource: new (r("FBEmojiResource"))(e),
                    size: a,
                  },
                  t + "-" + n++,
                );
              },
              function (e, o) {
                return s.jsx(
                  r("CometEmojiWithContextualSize.react"),
                  {
                    emoji: o,
                    resource: new (r("FBEmojiResource"))(e),
                    size: a,
                  },
                  t + "-" + n++,
                );
              },
            );
          },
          t,
        );
      };
    }
    l.default = u;
  },
  98,
);
