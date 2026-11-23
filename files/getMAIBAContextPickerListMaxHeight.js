__d(
  "getMAIBAContextPickerListMaxHeight",
  ["getMAIBAContextAtMentionListMaxHeight"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30;
    function s(t, n) {
      var o = t.spaceAbove,
        a = t.spaceBelow,
        i = r("getMAIBAContextAtMentionListMaxHeight")(a, n);
      return a == null || o == null || i + n + e <= a || o <= a
        ? i
        : r("getMAIBAContextAtMentionListMaxHeight")(o, n);
    }
    l.default = s;
  },
  98,
);
