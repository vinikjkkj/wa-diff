__d(
  "WDSBidiParagraphNode",
  ["Lexical", "Locale", "WABidi", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "bidi-paragraph";
    function s(t) {
      return t.endsWith(e);
    }
    var u = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.getType = function () {
          return "wds-bidi-paragraph";
        }),
        (t.clone = function (n) {
          return new t(n.__key);
        }));
      var n = t.prototype;
      return (
        (n.updateDOM = function (t, n) {
          return (this.updateDOMDirection(n), !1);
        }),
        (t.importJSON = function (t) {
          throw r("err")(
            "Deserialization of WDSBidiParagraphNode is unsupported",
          );
        }),
        (n.updateDOMDirection = function (t) {
          var e = o("Locale").isRTL() ? "rtl" : "ltr",
            n = this.getTextContent();
          if (n) {
            var r = o("WABidi").dir(n);
            e = r != null ? r : e;
          }
          t.dir = e;
        }),
        (n.exportJSON = function () {
          return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
            type: "wds-bidi-paragraph",
          });
        }),
        t
      );
    })(o("Lexical").ParagraphNode);
    ((l.isBidiNodeType = s), (l.WDSBidiParagraphNode = u));
  },
  98,
);
