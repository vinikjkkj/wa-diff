__d(
  "WAWebEditorStatePlugin.react",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebMentionNode",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        n = e.onBlur,
        a = e.onChange,
        i = e.onFocus,
        l = o("LexicalComposerContext").useLexicalComposerContext(),
        s = l[0],
        d = c(),
        p;
      t[0] !== a
        ? ((p = function (t, n) {
            a && a(m(t), t, n);
          }),
          (t[0] = a),
          (t[1] = p))
        : (p = t[1]);
      var g = r("useWAWebStableCallback")(p),
        h,
        y;
      (t[2] !== s || t[3] !== g
        ? ((h = function () {
            if (s) {
              var e = s.getEditorState().read(f);
              ((d.current = e), g(s.getEditorState(), !0));
            }
          }),
          (y = [s, g]),
          (t[2] = s),
          (t[3] = g),
          (t[4] = h),
          (t[5] = y))
        : ((h = t[4]), (y = t[5])),
        u(h, y));
      var C, b;
      (t[6] !== s || t[7] !== g
        ? ((C = function () {
            if (s)
              return s.registerUpdateListener(function (e) {
                var t = e.editorState;
                if (!s.isComposing()) {
                  var n = t.read(_);
                  d.current !== n && ((d.current = n), g(t, !1));
                }
              });
          }),
          (b = [s, g]),
          (t[6] = s),
          (t[7] = g),
          (t[8] = C),
          (t[9] = b))
        : ((C = t[8]), (b = t[9])),
        u(C, b));
      var v;
      (t[10] !== n
        ? ((v = function (t) {
            return (n == null || n(t), !1);
          }),
          (t[10] = n),
          (t[11] = v))
        : (v = t[11]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          s,
          o("Lexical").BLUR_COMMAND,
          v,
        ));
      var S;
      return (
        t[12] !== i
          ? ((S = function (t) {
              return (i == null || i(t), !1);
            }),
            (t[12] = i),
            (t[13] = S))
          : (S = t[13]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          s,
          o("Lexical").FOCUS_COMMAND,
          S,
        ),
        null
      );
    }
    function _() {
      return o("Lexical").$getRoot().getTextContent();
    }
    function f() {
      return o("Lexical").$getRoot().getTextContent();
    }
    l.default = p;
  },
  98,
);
