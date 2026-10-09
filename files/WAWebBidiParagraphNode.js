__d(
  "WAWebBidiParagraphNode",
  [
    "Lexical",
    "Locale",
    "WABidi",
    "WAWebABProps",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebQuoteLineNode",
    "WDSBidiParagraphNode",
    "WDSVars.stylex",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 40,
      s = 30,
      u = 14,
      c = o("Lexical").createState("waQuoteDirection", {
        parse: function (t) {
          return t === "ltr" || t === "rtl" ? t : null;
        },
      }),
      d = (function (t) {
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
              this.updateDOMQuoteBarHeight(r),
              !1
            );
          }),
          (n.importJSON = function (t) {
            throw r("err")(
              "Deserialization of BidiParagraphNode is unsupported",
            );
          }),
          (a.updateDOMDirection = function (n) {
            var e = this.getQuoteDirection();
            if (e == null) {
              t.prototype.updateDOMDirection.call(this, n);
              return;
            }
            n.dir = e;
          }),
          (a.getQuoteDirection = function () {
            var e;
            if (
              !(
                this.getQuoteLineNode() == null ||
                !o("WAWebABProps").getABPropConfigValue(
                  "expanded_formatting_multiline_quotes",
                )
              )
            )
              return (e = o("Lexical").$getState(this, c)) != null ? e : void 0;
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
          (a.getQuoteBarDirection = function () {
            var e, t;
            return (e =
              (t = this.getQuoteDirection()) != null
                ? t
                : o("WABidi").bidiDir(this.getTextContent())) != null
              ? e
              : o("Locale").isRTL()
                ? "rtl"
                : "ltr";
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
            if (this.getQuoteLineNode()) {
              var s = m(this, t);
              ((n = s.marginBottom), (e = s.marginTop));
            }
            ((t.style.marginTop = e + "px"), (t.style.marginBottom = n + "px"));
          }),
          (a.updateDOMQuoteBarHeight = function (t) {
            if (!this.getQuoteLineNode()) {
              t.style.removeProperty("--wa-quote-bar-height");
              return;
            }
            var e = this.getChildren().some(o("Lexical").$isLineBreakNode);
            t.style.setProperty("--wa-quote-bar-height", e ? "1lh" : "100%");
          }),
          (a.exportJSON = function () {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
              type: "bidi-paragraph-node",
            });
          }),
          n
        );
      })(o("WDSBidiParagraphNode").WDSBidiParagraphNode);
    function m(e, t) {
      var n = o("WAWebABProps").getABPropConfigValue(
          "expanded_formatting_multiline_quotes",
        ),
        r = n && _(e, e.getPreviousSibling()),
        a = n && _(e, e.getNextSibling());
      return (
        p(t, "--wa-quote-bar-top-radius", r),
        p(t, "--wa-quote-bar-bottom-radius", a),
        { marginTop: r ? 0 : 4, marginBottom: a ? 0 : 4 }
      );
    }
    function p(e, t, n) {
      n
        ? e.style.setProperty(t, o("WDSVars.stylex").WDSVars.borderRadiusNone)
        : e.style.removeProperty(t);
    }
    function _(e, t) {
      return (
        t != null &&
        t.getQuoteLineNode() != null &&
        t.getQuoteBarDirection() === e.getQuoteBarDirection()
      );
    }
    function f(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "expanded_formatting_multiline_quotes",
        )
      )
        for (var t = e; t != null; ) {
          for (var n, r = []; t instanceof d && t.getQuoteLineNode() != null; )
            (r.push(t), (t = t.getNextSibling()));
          (g(r), (t = (n = t) == null ? void 0 : n.getNextSibling()));
        }
    }
    function g(e) {
      var t = null;
      for (var n of e) {
        var r;
        if (
          ((t =
            (r = o("WABidi").bidiDir(n.getTextContent())) != null ? r : null),
          t != null)
        )
          break;
      }
      for (var a of e)
        o("Lexical").$getState(a, c) !== t && o("Lexical").$setState(a, c, t);
    }
    ((l.BidiParagraphNode = d), (l.$setQuoteDirections = f));
  },
  98,
);
