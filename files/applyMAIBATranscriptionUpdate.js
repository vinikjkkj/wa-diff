__d(
  "applyMAIBATranscriptionUpdate",
  ["Lexical", "MAIBATranscriptionTextNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { keys: [], text: "" };
    function s(e) {
      var t = o("Lexical").$getRoot(),
        n = t.getLastChild();
      ((n == null || !o("Lexical").$isParagraphNode(n)) &&
        ((n = o("Lexical").$createParagraphNode()), t.append(n)),
        n.append(e));
    }
    function u(t, n, a) {
      var i = [],
        l = "";
      for (var u of t.keys) {
        var c = o("Lexical").$getNodeByKey(u);
        c != null && (i.push(c), (l += c.getTextContent()));
      }
      var d = t.keys.length > 0 && l !== t.text,
        m = t.text !== "" && n.startsWith(t.text),
        p = m ? n.slice(t.text.length) : n;
      if (!m && !d) for (var _ of i) _.remove();
      var f = null;
      if (p !== "") {
        var g = new (r("MAIBATranscriptionTextNode"))(p);
        (s(g), (f = g.getKey()));
      }
      if ((o("Lexical").$getRoot().selectEnd(), a)) return e;
      var h = m && !d ? [].concat(t.keys) : [];
      return { keys: f != null ? [].concat(h, [f]) : h, text: n };
    }
    function c(t) {
      return t.text === "" ? e : u(t, t.text + " ", !0);
    }
    ((l.EMPTY_ACTIVE_TRANSCRIPTION = e),
      (l.applyMAIBATranscriptionUpdate = u),
      (l.sealMAIBATranscription = c));
  },
  98,
);
