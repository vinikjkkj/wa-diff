__d(
  "CometLexicalGenericEntityNode",
  ["CometLexicalEntityTextNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r,
          o = "",
          a = "Actor",
          i = void 0,
          l = "";
        return (
          t !== void 0 && ((o = t.id), (a = t.type), (i = t.uri), (l = t.text)),
          (r = e.call(this, l, n) || this),
          (r.__id = o),
          (r.__entityType = a),
          (r.__uri = i),
          r
        );
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.getType = function () {
          return "actor";
        }),
        (t.clone = function (n) {
          var e;
          return new t(
            {
              id: n.__id,
              text: n.__text,
              type: n.__entityType,
              uri: (e = n.__uri) != null ? e : void 0,
            },
            n.__key,
          );
        }),
        (t.importJSON = function (t) {
          var e;
          return s({
            id: t.id,
            text: t.text,
            type: t.entityType,
            uri: (e = t.uri) != null ? e : void 0,
          });
        }));
      var n = t.prototype;
      return (
        (n.exportJSON = function () {
          return babelHelpers.extends({}, e.prototype.exportJSON.call(this), {
            entityType: this.__entityType,
            id: this.__id,
            type: "actor",
            uri: this.__uri,
          });
        }),
        (n.createDOM = function (n) {
          var t = e.prototype.createDOM.call(this, n);
          return ((t.className = "xv78j7m"), (t.spellcheck = !1), t);
        }),
        (n.getEntity = function () {
          var e = this.__uri != null ? { uri: this.__uri } : null;
          return babelHelpers.extends(
            { __UFI__: !0, id: this.__id, isWeak: !1, type: this.__entityType },
            e,
          );
        }),
        (n.getEntityType = function () {
          return this.__entityType;
        }),
        (n.getID = function () {
          return this.__id;
        }),
        t
      );
    })(o("CometLexicalEntityTextNode").CometLexicalEntityTextNode);
    function s(t) {
      return new e(t).setMode("segmented").toggleDirectionless();
    }
    function u(t) {
      return t instanceof e;
    }
    ((l.CometLexicalGenericEntityNode = e),
      (l.$createCometLexicalGenericEntityNode = s),
      (l.$isCometLexicalGenericEntityNode = u));
  },
  98,
);
