__d(
  "WAWebListBulletNode",
  ["Lexical", "WAWebClassnames", "WAWebCopyPasteCopyable.react", "err"],
  function (t, n, r, o, a, i, l) {
    var e = "\u2022",
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.create = function (t) {
            return new n(t);
          }),
          (n.getType = function () {
            return "list-bullet";
          }),
          (n.clone = function (t) {
            return new n(t.__text, t.__key);
          }),
          (n.importJSON = function () {
            throw r("err")("Deserialization of ListBulletNode is unsupported");
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
                "x1sdyfia x1ncwhqj xd4r4e8 x1n8ftqi",
              )),
              (n.textContent = e),
              (n.dataset[
                o("WAWebCopyPasteCopyable.react").PLAIN_TEXT_DATA_ATTR
              ] = "*"),
              n
            );
          }),
          (a.updateDOM = function (n, r, o) {
            return ((r.textContent = e), !1);
          }),
          (a.exportJSON = function () {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
              type: "list-bullet-node",
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
    ((l.ListBulletNode = s),
      (l.$createListBulletNode = u),
      (l.$transformToListBulletNode = d));
  },
  98,
);
