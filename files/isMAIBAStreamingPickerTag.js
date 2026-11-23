__d(
  "isMAIBAStreamingPickerTag",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /<(optionality|disambiguation)(?=[\s/>]|$)/gi;
    function l(e) {
      for (var t = null, n = 0; n < e.length; n++) {
        var r = e[n];
        if (t != null) r === t && (t = null);
        else if (r === '"' || r === "'") t = r;
        else if (r === ">") return !0;
      }
      return !1;
    }
    function s(t) {
      if (t == null || t === "") return !1;
      var n = -1,
        r = "";
      for (var o of t.matchAll(e)) {
        var a;
        ((n = (a = o.index) != null ? a : n), (r = o[1]));
      }
      if (n === -1) return !1;
      var i = t.slice(n + 1);
      return !(
        i.includes("/>") ||
        i.toLowerCase().includes("</" + r.toLowerCase()) ||
        l(i)
      );
    }
    i.default = s;
  },
  66,
);
