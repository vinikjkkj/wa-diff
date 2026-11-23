__d(
  "MAIBACreativeMediaUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "VIDEO";
    function l(e) {
      return e != null && e.trim() !== "";
    }
    function s(e, t) {
      return (
        (t != null ? t : []).some(function (e) {
          return e != null;
        }) || l(e)
      );
    }
    function u(e) {
      return (e != null ? e : []).some(function (e) {
        return e != null;
      });
    }
    function c(t) {
      return t.media_type === e;
    }
    ((i.isMAIBACatalogCreative = l),
      (i.hasMAIBARenderableCreative = s),
      (i.hasMAIBARenderableCreativeMediaItems = u),
      (i.isMAIBARenderableCreativeMediaVideo = c));
  },
  66,
);
