__d(
  "AdsUEditorAdgroupMultiProductMutators",
  ["AdsAdgroupChildAttachmentTypes", "AdsChildAttachmentsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = o("AdsChildAttachmentsUtils").getChildAttachmentsPath(n);
      if (!r) return n;
      var a = [].concat(r, ["" + e], t);
      return n.deleteIn(a);
    }
    function s(e, t) {
      var n = t;
      return (
        f(n, function (t, r, o) {
          n = n.deleteIn([].concat(o, e));
        }),
        n
      );
    }
    function u(e, t, n, r) {
      var a = o("AdsChildAttachmentsUtils").getChildAttachmentsPath(r);
      if (!a) return r;
      var i = [].concat(a, ["" + e], t);
      return r.setIn(i, n);
    }
    function c(e, t, n) {
      var r = n;
      return (
        f(r, function (n, o, a) {
          r = r.setIn([].concat(a, e), t);
        }),
        r
      );
    }
    function d(e, t, n) {
      var r = n;
      return (
        f(r, function (n, a, i) {
          o("AdsChildAttachmentsUtils").hasPlaceData(n) ||
            (r = r.setIn([].concat(i, e), t));
        }),
        r
      );
    }
    function m(e, t, n) {
      var r = n;
      return (
        f(r, function (n, a, i) {
          if (!o("AdsChildAttachmentsUtils").hasPlaceData(n)) {
            var l = r.getIn([].concat(i, e));
            (l == null || l === "") && (r = r.setIn([].concat(i, e), t));
          }
        }),
        r
      );
    }
    function p(e, t, n) {
      var a = n;
      return (
        f(a, function (n, i, l) {
          o("AdsChildAttachmentsUtils").getChildAttachmentType(a, n) ===
            r("AdsAdgroupChildAttachmentTypes").DYNAMIC &&
            (a = a.setIn([].concat(l, e), t));
        }),
        a
      );
    }
    function _(e, t, n) {
      var r = n;
      return (
        f(r, function (n, a, i) {
          o("AdsChildAttachmentsUtils").hasPlaceData(n) &&
            (r = r.setIn([].concat(i, e), t));
        }),
        r
      );
    }
    function f(e, t) {
      var n = o("AdsChildAttachmentsUtils").getChildAttachmentsPath(e);
      if (n)
        for (var r = e.getIn(n), a = r ? r.size : 0, i = 0; i < a; i++) {
          var l = [].concat(n, ["" + i]),
            s = e.getIn(l);
          s && t(s, i, l);
        }
    }
    ((l.deleteInChild = e),
      (l.deleteInEachChild = s),
      (l.setInChild = u),
      (l.setInEachChild = c),
      (l.setInEachNonPlaceDataChild = d),
      (l.setInEachNonPlaceDataChildIfEmpty = m),
      (l.setInEachDynamicChild = p),
      (l.setInEachPlaceDataChild = _),
      (l.forEachChild = f));
  },
  98,
);
