__d(
  "MAIBAContextChipNode",
  ["fbt", "Lexical", "MAIBAContextChipToken.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === "prompt_builder" ? e : null;
    }
    var d = (function (e) {
      function t(t, n, r, o, a, i) {
        var l;
        return (
          (l = e.call(this, i) || this),
          (l.__entityType = t),
          (l.__entityID = n),
          (l.__displayName = r),
          (l.__typeLabel = o),
          (l.__origin = a != null ? a : null),
          l
        );
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.getType = function () {
          return "maiba-context-chip";
        }),
        (t.clone = function (n) {
          return new t(
            n.__entityType,
            n.__entityID,
            n.__displayName,
            n.__typeLabel,
            n.__origin,
            n.__key,
          );
        }),
        (t.importJSON = function (n) {
          return new t(
            n.entity_type,
            n.entity_id,
            n.display_name,
            n.type_label,
            c(n.origin),
          );
        }));
      var n = t.prototype;
      return (
        (n.getChip = function () {
          var e = {
              display_name: this.__displayName,
              entity_id: this.__entityID,
              entity_type: this.__entityType,
              type_label: this.__typeLabel,
            },
            t = this.__origin;
          return t != null ? babelHelpers.extends({}, e, { origin: t }) : e;
        }),
        (n.exportJSON = function () {
          var e = {
              display_name: this.__displayName,
              entity_id: this.__entityID,
              entity_type: this.__entityType,
              type: "maiba-context-chip",
              type_label: this.__typeLabel,
              version: 1,
            },
            t = this.__origin;
          return t != null ? babelHelpers.extends({}, e, { origin: t }) : e;
        }),
        (n.getTextContent = function () {
          return this.__displayName !== ""
            ? this.__displayName
            : this.__entityID;
        }),
        (n.createDOM = function () {
          var e = o("Lexical").$getDocument().createElement("span");
          return (
            (e.style.display = "inline-flex"),
            (e.style.verticalAlign = "baseline"),
            (e.style.maxWidth = "260px"),
            (e.style.marginInline = "1px"),
            (e.style.marginBlock = "2px"),
            e.setAttribute("role", "group"),
            e.setAttribute("aria-label", this.getAccessibleName()),
            e
          );
        }),
        (n.updateDOM = function () {
          return !1;
        }),
        (n.isKeyboardSelectable = function () {
          return !1;
        }),
        (n.decorate = function () {
          return u.jsx(r("MAIBAContextChipToken.react"), {
            chip: this.getChip(),
            nodeKey: this.getKey(),
          });
        }),
        (n.getAccessibleName = function () {
          var e = this.getTextContent();
          return s
            ._(/*BTDS*/ "", [
              s._param("type", this.__typeLabel),
              s._param("name", e),
            ])
            .toString();
        }),
        t
      );
    })(o("Lexical").DecoratorNode);
    function m(e) {
      return new d(
        e.entity_type,
        e.entity_id,
        e.display_name,
        e.type_label,
        e.origin,
      );
    }
    function p(e) {
      return e instanceof d;
    }
    ((l.MAIBAContextChipNode = d),
      (l.$createMAIBAContextChipNode = m),
      (l.$isMAIBAContextChipNode = p));
  },
  226,
);
