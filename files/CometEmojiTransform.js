__d(
  "CometEmojiTransform",
  [
    "CometEmojiWithContextualSize.react",
    "EmojiRenderer",
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
            return o("EmojiRenderer").render(e, function (e) {
              return s.jsx(
                r("CometEmojiWithContextualSize.react"),
                { emoji: e, size: a },
                t + "-" + n++,
              );
            });
          },
          t,
        );
      };
    }
    l.default = u;
  },
  98,
);
