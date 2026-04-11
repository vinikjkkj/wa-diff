__d(
  "WAWebQuoteLineNode",
  ["Lexical", "WAWebClassnames", "WAWebCopyPasteCopyable.react", "err"],
  function (t, n, r, o, a, i, l) {
    var e = "\u3000",
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.getType = function () {
            return "quote-line";
          }),
          (n.clone = function (t) {
            return new n(t.__text, t.__key);
          }),
          (n.importJSON = function () {
            throw r("err")("Deserialization of QuoteLineNode is unsupported");
          }));
        var a = n.prototype;
        return (
          (a.createDOM = function (r) {
            var n = t.prototype.createDOM.call(this, r);
            return (
              (n.className = o(
                "WAWebClassnames",
              ).classnamesConvertMeToStylexPlease(
                n.className,
                "x1uu0p8 x1cpjm7i x1hmns74 x1hnjks8 x1n405n8 x1oi0s10 xy6poam x1s9ezuj x6g0gvw x1a3o5l8 xe21s8h",
              )),
              (n.textContent = e),
              (n.dataset[
                o("WAWebCopyPasteCopyable.react").PLAIN_TEXT_DATA_ATTR
              ] = ">"),
              n
            );
          }),
          (a.updateDOM = function (r, o, a) {
            var n = t.prototype.updateDOM.call(this, r, o, a);
            return ((o.textContent = e), n);
          }),
          (a.exportJSON = function () {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
              type: "quote-line-node",
            });
          }),
          n
        );
      })(o("Lexical").TextNode);
    function u(e) {
      return new s(e).setMode("token");
    }
    function c(e) {
      return e instanceof s;
    }
    function d(e) {
      if (c(e)) return e;
      var t = u(e.getTextContent());
      return (e.replace(t), t);
    }
    ((l.QuoteLineNode = s), (l.$transformToQuoteLineNode = d));
  },
  98,
);
