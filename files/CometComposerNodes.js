__d(
  "CometComposerNodes",
  [
    "CometLexicalDelightNode",
    "CometLexicalEmojiNode",
    "CometLexicalGenericEntityNode",
    "LexicalHashtag",
    "LexicalLink",
    "LexicalOverflow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      o("CometLexicalGenericEntityNode").CometLexicalGenericEntityNode,
      o("CometLexicalEmojiNode").EmojiNode,
      o("LexicalLink").LinkNode,
      o("LexicalLink").AutoLinkNode,
      o("LexicalHashtag").HashtagNode,
      o("LexicalOverflow").OverflowNode,
      o("CometLexicalDelightNode").CometLexicalDelightNode,
    ];
    l.COMET_NODES = e;
  },
  98,
);
