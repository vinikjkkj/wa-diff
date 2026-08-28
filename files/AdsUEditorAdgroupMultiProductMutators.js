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
      return (
        f(t, function (n, r, o) {
          t = t.deleteIn([].concat(o, e));
        }),
        t
      );
    }
    function u(e, t, n, r) {
      var a = o("AdsChildAttachmentsUtils").getChildAttachmentsPath(r);
      if (!a) return r;
      var i = [].concat(a, ["" + e], t);
      return r.setIn(i, n);
    }
    function c(e, t, n) {
      return (
        f(n, function (r, o, a) {
          n = n.setIn([].concat(a, e), t);
        }),
        n
      );
    }
    function d(e, t, n) {
      return (
        f(n, function (r, a, i) {
          o("AdsChildAttachmentsUtils").hasPlaceData(r) ||
            (n = n.setIn([].concat(i, e), t));
        }),
        n
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
      return (
        f(n, function (a, i, l) {
          o("AdsChildAttachmentsUtils").getChildAttachmentType(n, a) ===
            r("AdsAdgroupChildAttachmentTypes").DYNAMIC &&
            (n = n.setIn([].concat(l, e), t));
        }),
        n
      );
    }
    function _(e, t, n) {
      return (
        f(n, function (r, a, i) {
          o("AdsChildAttachmentsUtils").hasPlaceData(r) &&
            (n = n.setIn([].concat(i, e), t));
        }),
        n
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
