__d(
  "WAWebNonJidMentionNode",
  ["Lexical", "WAWebClassnames", "err"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n = t.key,
          r = t.text;
        return e.call(this, r, n) || this;
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.clone = function (n) {
          return new t({ text: n.__text, key: n.__key });
        }),
        (t.getType = function () {
          return "non-jid-mention";
        }),
        (t.importJSON = function () {
          throw r("err")("Deserialization of NonJidMentionNode is unsupported");
        }));
      var n = t.prototype;
      return (
        (n.createDOM = function (n) {
          var t = e.prototype.createDOM.call(this, n);
          return (
            (t.className = o(
              "WAWebClassnames",
            ).classnamesConvertMeToStylexPlease(t.className, "x1ph7ams")),
            t
          );
        }),
        (n.exportJSON = function () {
          return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
            type: "non-jid-mention-node",
          });
        }),
        t
      );
    })(o("Lexical").TextNode);
    l.NonJidMentionNode = e;
  },
  98,
);
