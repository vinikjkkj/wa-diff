__d(
  "WAParsableXmlNode",
  ["WAHasProperty", "WAXmlParsingFailure", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = (function () {
      function e(e, t) {
        var n = this;
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = Array.isArray(t.content)
            ? t.content.map(function (t) {
                return new n.constructor(e, t);
              })
            : null));
      }
      var t = e.prototype;
      return (
        (t.name = function () {
          return this.$1;
        }),
        (t.node = function () {
          return this.$2;
        }),
        (t.hasAttr = function (t) {
          return r("WAHasProperty")(this.$2.attrs, t);
        }),
        (t.assertTag = function (t) {
          this.$2.tag !== t && this.throw("to be <" + t + ">");
        }),
        (t.tag = function () {
          return this.$2.tag;
        }),
        (t.maybeChild = function (t) {
          var e = this.$3;
          if (!e) return null;
          for (var n = 0; n < e.length; n++) if (e[n].tag() === t) return e[n];
          return null;
        }),
        (t.hasChild = function (t) {
          return !!this.maybeChild(t);
        }),
        (t.child = function (t) {
          var e = this.maybeChild(t);
          return e || this.throw("to have child <" + t + ">");
        }),
        (t.assertAttr = function (t, n) {
          var e = this.attrString(t);
          e !== n &&
            this.throw(
              'to have "' + t + '"="' + n + '", but instead has "' + e + '"',
            );
        }),
        (t.attrString = function (t) {
          return r("WAHasProperty")(this.$2.attrs, t)
            ? this.decodeAsString(this.$2.attrs[t])
            : this.throw('to have attribute "' + t + '"');
        }),
        (t.forEachAttributeKey = function (t) {
          var e = this.$2.attrs;
          Object.keys(e).forEach(function (e) {
            return t(e);
          });
        }),
        (t.maybeAttrString = function (t) {
          return this.hasAttr(t) ? this.decodeAsString(this.$2.attrs[t]) : null;
        }),
        (t.maybeAttrInt = function (t, n, r) {
          return this.hasAttr(t) ? this.attrInt(t, n, r) : null;
        }),
        (t.attrEnumValues = function (t, n, r) {
          var e = new Set(n),
            o = this.attrString(t);
          if (!e.has(o)) {
            if (r != null) return r;
            var a = Array.from(e).join("|");
            return this.throw(
              'to have "' + t + '"={' + a + '} but has value "' + o + '"',
            );
          }
          return o;
        }),
        (t.attrEnum = function (t, n) {
          var e = this.attrString(t);
          if (!r("WAHasProperty")(n, e)) {
            var o = Object.keys(n).join("|");
            return this.throw(
              'to have "' + t + '"={' + o + '} but has value "' + e + '"',
            );
          }
          return n[e];
        }),
        (t.attrEnumOrNullIfUnknown = function (t, n) {
          var e = this.attrString(t);
          return r("WAHasProperty")(n, e) ? n[e] : null;
        }),
        (t.maybeAttrEnum = function (t, n) {
          return this.hasAttr(t) ? this.attrEnum(t, n) : null;
        }),
        (t.attrInt = function (t, n, r) {
          var e = this.attrString(t);
          return this.$4(e, t, n, r);
        }),
        (t.$4 = function (t, n, r, o) {
          var e = parseInt(t, 10);
          return Number.isNaN(e)
            ? this.throw(
                'to have "' + n + '"={integer} but has value "' + t + '"',
              )
            : r !== void 0 && e < r
              ? this.throw(
                  'to have "' + n + '"={at least ' + r + "} but has value " + e,
                )
              : o !== void 0 && e >= o
                ? this.throw(
                    'to have "' + n + '"={below ' + o + "} but has value " + e,
                  )
                : e;
        }),
        (t.forEachChild = function (t) {
          var e = this.$3;
          if (e)
            e.forEach(function (e) {
              return t(e);
            });
          else if (this.$2.content != null)
            return this.throw("to have children");
        }),
        (t.forEachChildWithTag = function (t, n) {
          this.forEachChild(function (e) {
            e.tag() === t && n(e);
          });
        }),
        (t.mapChildren = function (t) {
          var e = this.$3;
          return !e && this.$2.content != null
            ? this.throw("to have children")
            : e
              ? e.map(function (e) {
                  return t(e);
                })
              : [];
        }),
        (t.mapChildrenWithTag = function (t, n) {
          var e = this.$3;
          return !e && this.$2.content != null
            ? this.throw("to have children")
            : e
              ? e
                  .filter(function (e) {
                    return e.tag() === t;
                  })
                  .map(function (e) {
                    return n(e);
                  })
              : [];
        }),
        (t.mapFirstChild = function (t) {
          var e = this.$3;
          return !e || e.length === 0
            ? this.throw("to have children")
            : t(e[0]);
        }),
        (t.hasContent = function () {
          return !this.$3 && !!this.$2.content;
        }),
        (t.hasChildren = function () {
          return this.$3 != null;
        }),
        (t.getChildren = function () {
          return this.$3;
        }),
        (t.mapAttrKeys = function (t) {
          var e = this.getAttrKeys();
          return e && e.length ? e.map(t) : [];
        }),
        (t.getAttrKeys = function () {
          return Object.keys(this.$2.attrs);
        }),
        (t.hasAttrs = function () {
          var e = this.$2.attrs ? Object.keys(this.$2.attrs) : [];
          return e.length > 0;
        }),
        (t.getNode = function () {
          return this.$2;
        }),
        (t.unsafeSetChildren = function (t) {
          this.$3 = t;
        }),
        (t.unsafeSetNodeContent = function (t) {
          this.$2.content = t;
        }),
        (t.contentUint = function (t) {
          var e = this.contentBytes(t);
          return u(e, t);
        }),
        (t.contentBytes = function (t) {
          if ((t === void 0 && (t = -1), this.$3))
            return this.throw(
              "to have binary content, but has children instead",
            );
          if (this.$2.content != null) {
            var e = this.$2.content;
            return t !== -1 && e.length !== t
              ? this.throw(
                  "to be " + t + " bytes, but got " + e.length + " instead",
                )
              : e;
          } else return this.throw("to have content");
        }),
        (t.contentString = function () {
          return this.$3
            ? this.throw("to have string content, but has children instead")
            : this.$2.content != null
              ? this.$2.content
              : this.throw("to have content");
        }),
        (t.contentInt = function (t, n) {
          var e = this.contentString();
          return this.$4(e, "content", t, n);
        }),
        (t.contentEnum = function (t) {
          var e = this.contentString();
          if (!r("WAHasProperty")(t, e)) {
            var n = Object.keys(t).join("|");
            return this.throw(
              "to have content {" + n + '} but has value "' + e + '"',
            );
          }
          return t[e];
        }),
        (t.decodeAsString = function (t) {
          if (typeof t != "string")
            throw r("err")(
              "decodeAsString: attribute is " +
                typeof t +
                " not a string: " +
                t,
            );
          return t;
        }),
        (t.throw = function (t) {
          throw new (o("WAXmlParsingFailure").XmlParsingFailure)(
            this.$1,
            "expected <" + this.$2.tag + "> " + t,
          );
        }),
        (t.toString = function () {
          return this.$2.toString();
        }),
        e
      );
    })();
    function u(e, t) {
      for (var n = 0, r = 0; r < t; r++) n = n * 256 + e[r];
      return n;
    }
    ((l.ParsableXmlNode = s), (l.convertBytesToUint = u));
  },
  98,
);
