__d(
  "WAWebDelimiterNode",
  ["Lexical", "WAWebClassnames", "err"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return ((o = e.call(this, t, r) || this), (o.__position = n), o);
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.getType = function () {
          return "delimiter";
        }),
        (t.clone = function (n) {
          return new t(n.__text, n.__position, n.__key);
        }),
        (t.importJSON = function () {
          throw r("err")("Deserialization of DelimiterNode is unsupported");
        }));
      var n = t.prototype;
      return (
        (n.createDOM = function (n) {
          var t = e.prototype.createDOM.call(this, n);
          return (
            (t.className = o(
              "WAWebClassnames",
            ).classnamesConvertMeToStylexPlease(t.className, "xgkkfiv")),
            t
          );
        }),
        (n.isOpen = function () {
          return this.__position === "open";
        }),
        (n.getPosition = function () {
          return this.__position;
        }),
        (n.setPosition = function (t) {
          if (this.getPosition() !== t) {
            var e = this.getWritable();
            e.__position = t;
          }
        }),
        (n.exportJSON = function () {
          return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
            type: "delimiter-node",
          });
        }),
        t
      );
    })(o("Lexical").TextNode);
    function s(t, n) {
      return new e(t, n);
    }
    function u(t) {
      return t instanceof e;
    }
    function c(e, t) {
      if (u(e)) return (e.setPosition(t), e);
      var n = s(e.getTextContent(), t);
      return (e.replace(n), n);
    }
    ((l.DelimiterNode = e),
      (l.$createDelimiterNode = s),
      (l.$isDelimiterNode = u),
      (l.$transformToDelimiterNode = c));
  },
  98,
);
