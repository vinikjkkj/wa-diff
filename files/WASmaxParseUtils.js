__d(
  "WASmaxParseUtils",
  [
    "WABase64",
    "WABinary",
    "WACryptoUtils",
    "WADeepEquals",
    "WAHasProperty",
    "WAResultOrError",
    "WAStanzaUtils",
    "WAWapJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAResultOrError").makeResult();
    function s(t, n) {
      return t.tag !== n ? O(t, "to be <" + n + ">") : e;
    }
    function u(e, t) {
      return B(e, t) ? W(e, e.attrs[t]) : O(e, 'to have attribute "' + t + '"');
    }
    function c(e, t, n, r) {
      var a = u(e, t);
      if (!a.success) return a;
      var i = n(a.value);
      return i != null
        ? o("WAResultOrError").makeResult(i)
        : O(
            e,
            'to have "' +
              t +
              '"={' +
              r +
              '}, but instead has "' +
              a.value +
              '"',
          );
    }
    function d(e, t, n) {
      var r = P(e);
      if (!r.success) return r;
      var a = t(r.value);
      return a != null
        ? o("WAResultOrError").makeResult(a)
        : O(e, "to have " + n + ' content, but instead has "' + r.value + '"');
    }
    function m(t, n, r) {
      var o = u(t, n);
      if (o.success) {
        if (o.value !== r)
          return O(
            t,
            'to have "' +
              n +
              '"="' +
              r +
              '", but instead has "' +
              o.value +
              '"',
          );
      } else return o;
      return e;
    }
    function p(e, t) {
      return c(e, t, o("WAStanzaUtils").toStanzaId, "stanzaID");
    }
    function _(e, t) {
      return c(e, t, o("WAStanzaUtils").validateCallId, "callID");
    }
    function f(e, t) {
      return c(e, t, q, "integer");
    }
    function g(e, t, n, r) {
      var a = f(e, t);
      if (!a.success) return a;
      var i = a.value;
      return n !== void 0 && i < n
        ? O(e, 'to have "' + t + '"={at least ' + n + "} but has value " + i)
        : r !== void 0 && i > r
          ? O(e, 'to have "' + t + '"={at most ' + r + "} but has value " + i)
          : o("WAResultOrError").makeResult(i);
    }
    function h(e) {
      var t = e.content;
      return t instanceof Uint8Array
        ? O(e, "to have children")
        : o("WAResultOrError").makeResult(t);
    }
    function y(t, n) {
      var r = h(t);
      if (!r.success) return r;
      var a = r.value;
      if (a == null) return e;
      for (var i = null, l = 0; l < a.length; l++) {
        var s = a[l];
        if (s.tag === n) {
          if (i != null)
            return O(t, "to have 1 child <" + n + ">, but found more than 1");
          i = s;
        }
      }
      return o("WAResultOrError").makeResult(i);
    }
    function C(t, n, r) {
      var o = y(t, n);
      return o.success ? (o.value == null ? e : r(o.value)) : o;
    }
    function b(e, t, n) {
      var r = C(e, t, n);
      if (!r.success) return r;
      var a = r.value;
      return a == null
        ? O(e, "to have 1 child <" + t + ">, but found 0")
        : o("WAResultOrError").makeResult(a);
    }
    function v(e, t) {
      var n = y(e, t);
      return n.success
        ? n.value == null
          ? O(e, "to have 1 child <" + t + ">, but found 0")
          : o("WAResultOrError").makeResult(n.value)
        : n;
    }
    function S(e, t, n, r, a) {
      var i = U(e, t, n, r);
      if (!i.success) return i;
      for (var l = [], s = 0; s < i.value.length; s++) {
        var u = a(i.value[s]);
        if (!u.success) return u;
        l.push(u.value);
      }
      return o("WAResultOrError").makeResult(l);
    }
    function R(e, t, n, r, a) {
      var i = U(e, t, n, r);
      if (!i.success) return i;
      for (var l = i.value.length, s = 0; s < l; s++) {
        var u = a(i.value[s]);
        if (!u.success) return u;
      }
      return o("WAResultOrError").makeResult(l);
    }
    function L(e, t, n) {
      var r = S(e, t, 0, 1 / 0, n);
      if (!r.success) return r;
      for (var a = 0; a < r.value.length; a++)
        if (!o("WADeepEquals").deepEqual(r.value[0], r.value[a]))
          return O(
            e,
            "to have homogeneous children, but found two children that are not equal",
          );
      return r;
    }
    function E(e, t, n) {
      var r = L(e, t, n);
      return r.success ? o("WAResultOrError").makeResult(r.value.length) : r;
    }
    function k(t, n, r, o, a) {
      return B(n, r) ? t(n, r, o, a) : e;
    }
    function I(t, n, r, a) {
      if (a == null) return e;
      var i = k(t, n, r);
      return i.success
        ? i.value === a
          ? o("WAResultOrError").makeResult(a)
          : i.value == null
            ? e
            : O(
                n,
                'to have "' +
                  r +
                  '"={' +
                  a +
                  '}, but instead has "' +
                  i.value +
                  '"',
              )
        : i;
    }
    function T(e, t, n, r) {
      var a = e(t, n);
      return a.success
        ? a.value === r
          ? o("WAResultOrError").makeResult(r)
          : O(
              t,
              'to have "' +
                n +
                '"={' +
                r +
                '}, but instead has "' +
                a.value +
                '"',
            )
        : a;
    }
    function D(e, t, n) {
      var r = e(t);
      return r.success
        ? r.value === n
          ? o("WAResultOrError").makeResult(n)
          : O(
              t,
              'to have content "' + n + '", but instead has "' + r.value + '"',
            )
        : r;
    }
    function x(e, t, n) {
      var r = u(e, t);
      if (!r.success) return r;
      var a = n[r.value];
      if (a != null) return o("WAResultOrError").makeResult(a);
      var i = Object.values(n).join("|");
      return O(
        e,
        'to have "' + t + '"={' + i + '}, but instead has "' + r.value + '"',
      );
    }
    function $(e, t) {
      var n = P(e);
      if (!n.success) return n;
      var r = t[n.value];
      if (r != null) return o("WAResultOrError").makeResult(r);
      var a = Object.values(t).join("|");
      return O(
        e,
        'to have content "' + a + '", but instead has "' + n.value + '"',
      );
    }
    function P(e) {
      var t = N(e);
      if (t.success)
        try {
          var n = new (o("WABinary").Binary)(t.value),
            a = n.readString(n.size());
          return o("WAResultOrError").makeResult(a);
        } catch (t) {
          return O(
            e,
            "to have string content, but run into decoding error: " +
              r("getErrorSafe")(t).message,
          );
        }
      else return t;
    }
    function N(e) {
      var t = e.content;
      return t == null
        ? O(e, "to have content")
        : Array.isArray(t)
          ? O(e, "to have content, but has children instead")
          : o("WAResultOrError").makeResult(t);
    }
    function M(e, t) {
      var n = N(e);
      return n.success
        ? o("WACryptoUtils").uint8ArraysEqual(n.value, t)
          ? o("WAResultOrError").makeResult(t)
          : O(
              e,
              'to have content ":binary:' +
                o("WABase64").encodeB64(t) +
                '", but instead has ":binary:' +
                o("WABase64").encodeB64(n.value) +
                '"',
            )
        : n;
    }
    function w(e, t, n) {
      var r = e.content;
      if (r == null)
        return t === void 0 || t < 1
          ? o("WAResultOrError").makeResult(new Uint8Array([]))
          : O(e, "to have content");
      if (Array.isArray(r))
        return O(e, "to have content, but has children instead");
      var a = r.length;
      return t !== void 0 && a < t
        ? O(
            e,
            "to have binary content at least " +
              t +
              " bytes but has " +
              a +
              " bytes",
          )
        : n !== void 0 && a > n
          ? O(
              e,
              "to have binary content at most " +
                n +
                " bytes but has " +
                a +
                " bytes",
            )
          : o("WAResultOrError").makeResult(r);
    }
    function A(e) {
      return d(e, q, "integer");
    }
    function F(e) {
      return e;
    }
    function O(e, t) {
      return o("WAResultOrError").makeError("expected <" + e.tag + ">: " + t);
    }
    function B(e, t) {
      return r("WAHasProperty")(e.attrs, t);
    }
    function W(e, t) {
      return t instanceof o("WAWapJid").WapJid
        ? o("WAResultOrError").makeResult(t.toString())
        : typeof t == "string"
          ? o("WAResultOrError").makeResult(t)
          : O(
              e,
              "decodeAsString: attribute is " +
                typeof t +
                " not a string: " +
                String(t),
            );
    }
    function q(e) {
      var t = parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    function U(e, t, n, r) {
      var a = h(e);
      if (!a.success) return a;
      var i = a.value;
      if (i == null)
        return n !== 0
          ? O(e, "to have at least " + n + " <" + t + "> children, but found 0")
          : o("WAResultOrError").makeResult([]);
      for (var l = [], s = 0; s < i.length; s++) {
        var u = i[s];
        u.tag === t && l.push(u);
      }
      var c = l.length;
      return c < n
        ? O(
            e,
            "to have at least " + n + " <" + t + "> children, but found " + c,
          )
        : c > r
          ? O(
              e,
              "to have at most " + r + " <" + t + "> children, but found " + c,
            )
          : o("WAResultOrError").makeResult(l);
    }
    var V = {};
    function H(e, t, n) {
      var r = t.map(function (e, t) {
        return e + ": " + n[t].error;
      });
      return O(
        e,
        [
          "to match any of following mixins: " +
            t.join(", ") +
            ", but all mixins failed.",
        ]
          .concat(r)
          .join(" "),
      );
    }
    ((l.voidSuccess = e),
      (l.assertTag = s),
      (l.attrString = u),
      (l.attrValidate = c),
      (l.contentValidate = d),
      (l.assertAttr = m),
      (l.attrStanzaId = p),
      (l.attrCallId = _),
      (l.attrInt = f),
      (l.attrIntRange = g),
      (l.maybeChildren = h),
      (l.optionalChild = y),
      (l.optionalChildWithTag = C),
      (l.childWithTag = b),
      (l.flattenedChildWithTag = v),
      (l.mapChildrenWithTag = S),
      (l.countChildrenWithTag = R),
      (l.mapHomogeneousChildrenWithTag = L),
      (l.countHomogeneousChildrenWithTag = E),
      (l.optional = k),
      (l.optionalLiteral = I),
      (l.literal = T),
      (l.literalContent = D),
      (l.attrStringEnum = x),
      (l.contentStringEnum = $),
      (l.contentString = P),
      (l.contentBytes = N),
      (l.contentLiteralBytes = M),
      (l.contentBytesRange = w),
      (l.contentInt = A),
      (l.identity = F),
      (l.errorMessage = O),
      (l.emptyObject = V),
      (l.errorMixinDisjunction = H));
  },
  98,
);
