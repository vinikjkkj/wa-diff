__d(
  "WAWebConvertHtmlString",
  [
    "Lexical",
    "LexicalCode",
    "LexicalHtml",
    "LexicalLink",
    "LexicalList",
    "LexicalRichText",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (
        e ||
          (e = o("Lexical").createEditor({
            namespace: "headless-editor",
            onError: r("WAWebNoop"),
            nodes: [
              o("LexicalRichText").HeadingNode,
              o("LexicalList").ListNode,
              o("LexicalList").ListItemNode,
              o("LexicalRichText").QuoteNode,
              o("LexicalCode").CodeNode,
              o("LexicalLink").AutoLinkNode,
              o("LexicalLink").LinkNode,
            ],
          })),
        e
      );
    }
    function u(e) {
      try {
        var t = new DOMParser(),
          n = t.parseFromString(e, "text/html"),
          r = [],
          a = s();
        return (
          a.update(function () {
            for (
              var e = o("LexicalHtml").$generateNodesFromDOM(a, n).reverse(),
                t = null;
              e.length;
            ) {
              var i = e.pop();
              if (!m(i)) {
                ((t = t != null ? t : []), t.push(i));
                continue;
              }
              if (
                (t && (r.push(c(t)), (t = null)),
                o("Lexical").$isParagraphNode(i))
              )
                (r.push(c(i.getChildren())), r.push(""));
              else if (o("LexicalRichText").$isHeadingNode(i))
                (r.push("*" + i.getTextContent() + "*"), r.push(""));
              else if (o("LexicalRichText").$isQuoteNode(i))
                (r.push(">" + i.getTextContent()), r.push(""));
              else if (o("LexicalList").$isListNode(i)) {
                var l = i.getListType() === "bullet",
                  s = i.getListType() === "number",
                  u = "";
                l ? (u = "* ") : s && (u = "1. ");
                for (var d of i.getChildren())
                  (r.push("" + u + c(d.getChildren())),
                    s && (u = parseInt(u, 10) + 1 + ". "));
                r.push("");
              }
            }
            t && r.push(c(t));
          }),
          r.join("\n")
        );
      } catch (e) {
        return null;
      }
    }
    function c(e) {
      var t = [];
      for (var n of e)
        if (o("Lexical").$isTextNode(n)) t.push(d(n));
        else if (o("LexicalLink").$isLinkNode(n)) {
          var r = n.getTextContent(),
            a = n.getURL();
          r === a ? t.push(a) : t.push(r + " (" + a + ")");
        } else t.push(n.getTextContent());
      return t.join("");
    }
    function d(e) {
      var t = e.getTextContent();
      return (
        e.hasFormat("italic") && (t = "_" + t + "_"),
        e.hasFormat("bold") && (t = "*" + t + "*"),
        e.hasFormat("strikethrough") && (t = "~" + t + "~"),
        e.hasFormat("code") && (t = "`" + t + "`"),
        t
      );
    }
    function m(e) {
      return (
        o("Lexical").$isParagraphNode(e) ||
        o("LexicalRichText").$isHeadingNode(e) ||
        o("LexicalRichText").$isQuoteNode(e) ||
        o("LexicalList").$isListNode(e)
      );
    }
    l.default = u;
  },
  98,
);
