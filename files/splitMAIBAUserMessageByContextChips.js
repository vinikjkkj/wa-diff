__d(
  "splitMAIBAUserMessageByContextChips",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n,
        r =
          (n =
            t == null
              ? void 0
              : t.filter(function (e) {
                  return e.matched_text !== "";
                })) != null
            ? n
            : [];
      if (r.length === 0) return [{ kind: "text", text: e }];
      for (var o = [], a = 0, i = 0; i < e.length; ) {
        var s = l(e, i, r);
        if (s == null) {
          i += 1;
          continue;
        }
        (a < i && o.push({ kind: "text", text: e.slice(a, i) }),
          o.push({ chip: s, kind: "chip" }),
          (i += s.matched_text.length),
          (a = i));
      }
      return (
        a < e.length && o.push({ kind: "text", text: e.slice(a) }),
        o.length > 0 ? o : [{ kind: "text", text: e }]
      );
    }
    function l(e, t, n) {
      var r = null;
      for (var o of n)
        e.startsWith(o.matched_text, t) &&
          (r == null || o.matched_text.length > r.matched_text.length) &&
          (r = o);
      return r;
    }
    i.default = e;
  },
  66,
);
