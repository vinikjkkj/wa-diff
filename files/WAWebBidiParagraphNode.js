__d(
  "WAWebBidiParagraphNode",
  [
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebQuoteLineNode",
    "WDSBidiParagraphNode",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 40,
      s = 30,
      u = 14,
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.getType = function () {
            return "bidi-paragraph";
          }),
          (n.clone = function (t) {
            return new n(t.__key);
          }));
        var a = n.prototype;
        return (
          (a.updateDOM = function (n, r) {
            return (
              t.prototype.updateDOM.call(this, n, r),
              this.updateDOMTextIndent(r),
              this.updateDOMMargin(r),
              !1
            );
          }),
          (n.importJSON = function (t) {
            throw r("err")(
              "Deserialization of BidiParagraphNode is unsupported",
            );
          }),
          (a.getTargetIndent = function () {
            return this.getNumberNode() || this.getBulletNode()
              ? s / e
              : this.getQuoteLineNode()
                ? u / e
                : 0;
          }),
          (a.getBulletNode = function () {
            var e = this.getFirstChild();
            return e instanceof o("WAWebListBulletNode").ListBulletNode
              ? e
              : null;
          }),
          (a.getNumberNode = function () {
            var e = this.getFirstChild();
            return e instanceof o("WAWebListNumberNode").ListNumberNode
              ? e
              : null;
          }),
          (a.getQuoteLineNode = function () {
            var e = this.getFirstChild();
            return e instanceof o("WAWebQuoteLineNode").QuoteLineNode
              ? e
              : null;
          }),
          (a.updateDOMTextIndent = function (t) {
            ((t.style.textIndent = "0"),
              this.getBulletNode() && (t.style.textIndent = "-12px"));
            var e = this.getNumberNode();
            (e && (t.style.textIndent = "-" + e.getTextContentSize() + "ch"),
              this.getQuoteLineNode() && (t.style.textIndent = "-" + u + "px"));
          }),
          (a.updateDOMMargin = function (t) {
            var e = 0,
              n = 0,
              r = this.getBulletNode() || this.getNumberNode();
            if (r) {
              var o = this.getPreviousSibling(),
                a =
                  (o == null ? void 0 : o.getBulletNode()) ||
                  (o == null ? void 0 : o.getNumberNode());
              (!a || a.getType() !== r.getType()) && (e = 4);
              var i = this.getNextSibling(),
                l =
                  (i == null ? void 0 : i.getBulletNode()) ||
                  (i == null ? void 0 : i.getNumberNode());
              (!l || l.getType() !== r.getType()) && (n = 4);
            }
            (this.getQuoteLineNode() && ((e = 4), (n = 4)),
              (t.style.marginTop = e + "px"),
              (t.style.marginBottom = n + "px"));
          }),
          (a.exportJSON = function () {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
              type: "bidi-paragraph-node",
            });
          }),
          n
        );
      })(o("WDSBidiParagraphNode").WDSBidiParagraphNode);
    l.BidiParagraphNode = c;
  },
  98,
);
