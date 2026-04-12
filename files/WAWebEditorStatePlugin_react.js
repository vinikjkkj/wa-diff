__d(
  "WAWebEditorStatePlugin.react",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebMentionNode",
    "react",
    "useWAWebLexicalEvent",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function* d(e) {
      for (var t of e.getChildren())
        (yield t, o("Lexical").$isElementNode(t) && (yield* d(t)));
    }
    function m(e) {
      var t = { text: "", parsableText: "", data: {} };
      if (!e) return t;
      var n = [],
        r = [];
      return (
        e.read(function () {
          for (var e of o("Lexical").$getRoot().getChildren())
            if (o("Lexical").$isElementNode(e)) {
              var a = "",
                i = "";
              for (var l of d(e))
                if (l instanceof o("WAWebMentionNode").MentionNode) {
                  var s,
                    u,
                    c = l.getNodeMetadata();
                  ((a += c.text),
                    (i += c.parsableText),
                    (t.data.mentionedJidList =
                      (s = t.data.mentionedJidList) != null ? s : []),
                    (t.data.groupMentions =
                      (u = t.data.groupMentions) != null ? u : []));
                  var m = c.name,
                    p = c.type,
                    _ = c.wid;
                  switch (p) {
                    case o("WAWebMentionNode").MentionTypeEnum.CONTACT: {
                      t.data.mentionedJidList.push(c.wid);
                      break;
                    }
                    case o("WAWebMentionNode").MentionTypeEnum.GROUP: {
                      t.data.groupMentions.push({
                        groupJid: _,
                        groupSubject: m,
                      });
                      break;
                    }
                  }
                } else ((a += l.getTextContent()), (i += l.getTextContent()));
              (n.push(a), r.push(i));
            }
        }),
        (t.text = n.join("\n")),
        (t.parsableText = r.join("\n")),
        t
      );
    }
    function p(e) {
      var t = e.onBlur,
        n = e.onChange,
        a = e.onFocus,
        i = o("LexicalComposerContext").useLexicalComposerContext(),
        l = i[0],
        s = c(),
        d = r("useWAWebStableCallback")(function (e, t) {
          n && n(m(e), e, t);
        });
      return (
        u(
          function () {
            if (l) {
              var e = l.getEditorState().read(function () {
                return o("Lexical").$getRoot().getTextContent();
              });
              ((s.current = e), d(l.getEditorState(), !0));
            }
          },
          [l, d],
        ),
        u(
          function () {
            if (l)
              return l.registerUpdateListener(function (e) {
                var t = e.editorState;
                if (!l.isComposing()) {
                  var n = t.read(function () {
                    return o("Lexical").$getRoot().getTextContent();
                  });
                  s.current !== n && ((s.current = n), d(t, !1));
                }
              });
          },
          [l, d],
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          l,
          o("Lexical").BLUR_COMMAND,
          function (e) {
            return (t == null || t(e), !1);
          },
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          l,
          o("Lexical").FOCUS_COMMAND,
          function (e) {
            return (a == null || a(e), !1);
          },
        ),
        null
      );
    }
    l.default = p;
  },
  98,
);
