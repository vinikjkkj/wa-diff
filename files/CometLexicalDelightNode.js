__d(
  "CometLexicalDelightNode",
  ["CometLexicalEntityTextNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o, a) {
        var i;
        return (
          (i = e.call(this, t, a) || this),
          (i.__entityType = "TextDelightCampaign"),
          (i.__styles = n),
          (i.__campaignID = r),
          (i.__delightAsset = o),
          i
        );
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.getType = function () {
          return "delight";
        }),
        (t.clone = function (n) {
          return new t(
            n.__text,
            n.__styles,
            n.__campaignID,
            n.__delightAsset,
            n.__key,
          );
        }),
        (t.importJSON = function (t) {
          return s(t.text, t.styles, t.campaignID, t.delightAsset);
        }));
      var n = t.prototype;
      return (
        (n.exportJSON = function () {
          return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
            campaignID: this.__campaignID,
            delightAsset: this.__delightAsset,
            styles: this.__styles,
            type: "delight",
            version: 1,
          });
        }),
        (n.createDOM = function (n) {
          var t = e.prototype.createDOM.call(this, n),
            r = this.__delightAsset.id,
            o = this.__styles,
            a = o.color,
            i = o["font-weight"];
          return (
            r != null && t.setAttribute("data-delight-asset", r),
            t.setAttribute("data-delight", "true"),
            a != null &&
              i != null &&
              ((t.style.color = a), (t.style.fontWeight = i)),
            t
          );
        }),
        (n.getEntity = function () {
          return {
            __UFI__: !0,
            id: this.__campaignID,
            isWeak: !1,
            type: this.__entityType,
          };
        }),
        (n.canInsertTextBefore = function () {
          return !1;
        }),
        (n.canInsertTextAfter = function () {
          return !1;
        }),
        t
      );
    })(o("CometLexicalEntityTextNode").CometLexicalEntityTextNode);
    function s(t, n, r, o) {
      return new e(t, n, r, o);
    }
    function u(t) {
      return t instanceof e;
    }
    ((l.CometLexicalDelightNode = e),
      (l.$createLexicalDelightNode = s),
      (l.$isLexicalDelightNode = u));
  },
  98,
);
