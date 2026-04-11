__d(
  "WAStringz",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
      /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;
    function l(t) {
      var n = t.match(e);
      return n ? n.length : 0;
    }
    function s(t, n, r) {
      n === void 0 && (n = 0);
      var o = t.match(e);
      return o ? o.slice(Math.max(0, n), Math.max(0, r)).join("") : "";
    }
    function u(t) {
      return t.match(e) || [];
    }
    ((i.astralRange = e), (i.length = l), (i.substring = s), (i.toArray = u));
  },
  66,
);
