__d(
  "WAWebMentionNode",
  [
    "$InternalEnum",
    "Lexical",
    "WAWebClassnames",
    "WAWebCopyPasteCopyable.react",
    "WAWebRichTextInputConst",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["GROUP", "CONTACT"]),
      s = (function (t) {
        function n(e) {
          var n,
            r = e.key,
            o = e.name,
            a = e.text,
            i = e.type,
            l = e.wid;
          return (
            (n = t.call(this, a, r) || this),
            (n.name = o),
            (n.wid = l),
            (n.type = i),
            n
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.clone = function (t) {
            return new n({
              text: t.__text,
              name: t.name,
              wid: t.wid,
              type: t.type,
              key: t.__key,
            });
          }),
          (n.getType = function () {
            return "mention";
          }),
          (n.importJSON = function () {
            throw r("err")("Deserialization of MentionNode is unsupported");
          }));
        var a = n.prototype;
        return (
          (a.createDOM = function (n) {
            var e = t.prototype.createDOM.call(this, n);
            return (
              (e.className = o(
                "WAWebClassnames",
              ).classnamesConvertMeToStylexPlease(e.className, "x1ph7ams")),
              (e.dataset[
                o("WAWebCopyPasteCopyable.react").APP_TEXT_TEMPLATE_DATA_ATTR
              ] =
                "" +
                o("WAWebRichTextInputConst").ZWS +
                this.wid +
                o("WAWebRichTextInputConst").ZWS),
              e
            );
          }),
          (a.getNodeMetadata = function () {
            var t = o("WAWebWidFactory").createWid(this.wid),
              n = o("WAWebRichTextInputConst").AT_SYMBOL + t.user;
            return (
              this.type === e.GROUP &&
                (n = o("WAWebRichTextInputConst").AT_SYMBOL + t.toString()),
              {
                text: n,
                parsableText:
                  "" +
                  o("WAWebRichTextInputConst").ZWS +
                  this.wid +
                  o("WAWebRichTextInputConst").ZWS,
                type: this.type,
                name: this.name,
                wid: t,
              }
            );
          }),
          (a.exportJSON = function () {
            return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
              type: "mention-node",
            });
          }),
          n
        );
      })(o("Lexical").TextNode);
    function u(e, t, n) {
      return new s({
        text: o("WAWebRichTextInputConst").AT_SYMBOL + e,
        name: e,
        wid: t,
        type: n,
      });
    }
    function c(e) {
      return e instanceof s;
    }
    ((l.MentionTypeEnum = e),
      (l.MentionNode = s),
      (l.$createMentionNode = u),
      (l.$isMentionNode = c));
  },
  98,
);
