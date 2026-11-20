__d(
  "WAWebSlashCommandsComposer",
  ["Lexical", "WAWebLexicalUtils", "WAWebMentionNode", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.getEditorState().read(function () {
        return o("Lexical")
          .$getRoot()
          .getAllTextNodes()
          .flatMap(function (e) {
            return o("WAWebMentionNode").$isMentionNode(e) &&
              e.type === o("WAWebMentionNode").MentionTypeEnum.CONTACT
              ? [{ wid: o("WAWebWidFactory").createWid(e.wid), name: e.name }]
              : [];
          });
      });
    }
    function s(t) {
      return e(t)
        .map(function (e) {
          var t = e.wid;
          return t.toString();
        })
        .join(" ");
    }
    function u(e) {
      e.update(
        function () {
          return o("WAWebLexicalUtils").$setTextContent(
            "",
            o("WAWebLexicalUtils").isFocused(e),
          );
        },
        {
          discrete: !0,
          tag: o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG,
        },
      );
    }
    function c(e, t) {
      (e.update(
        function () {
          o("Lexical").$getRoot().selectEnd();
          var e = o("Lexical").$getSelection();
          o("Lexical").$isRangeSelection(e) && e.insertText(t);
        },
        { tag: o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG },
      ),
        e.focus());
    }
    function d(e, t) {
      e.update(
        function () {
          return o("WAWebLexicalUtils").$setTextContent(
            t,
            o("WAWebLexicalUtils").isFocused(e),
          );
        },
        {
          discrete: !0,
          tag: o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG,
        },
      );
    }
    function m(e, t) {
      (e.update(
        function () {
          return o("WAWebLexicalUtils").$setTextContent(t, !0);
        },
        { tag: o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG },
      ),
        e.focus());
    }
    function p(e, t, n) {
      e.update(
        function () {
          var e = o("Lexical").$getRoot().getFirstDescendant();
          if (o("Lexical").$isTextNode(e)) {
            var r = e.getTextContent();
            if (r.toLowerCase().startsWith(t.toLowerCase())) {
              var a = n.length === 0 && r.charAt(t.length) === " ";
              e.spliceText(0, t.length + (a ? 1 : 0), n, !0);
            }
          }
        },
        {
          discrete: !0,
          tag: o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG,
        },
      );
    }
    ((l.getComposerMentions = e),
      (l.getComposerMentionKey = s),
      (l.clearComposerNow = u),
      (l.appendComposerText = c),
      (l.setComposerTextNow = d),
      (l.replaceComposerText = m),
      (l.replaceCommandWord = p));
  },
  98,
);
