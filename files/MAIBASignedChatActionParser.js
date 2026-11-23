__d(
  "MAIBASignedChatActionParser",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
    function l(t) {
      if (t.length > 4096 || t.includes(",")) return null;
      var n = /^maiba_chat((?:\[[^\]]+\])*)>open$/.exec(t);
      if (n == null) return null;
      var r = n[1];
      if (/\[(?:prompt_text|hide_user_message)=/i.test(r)) return null;
      var o = r.match(/\[dl_token=[^\]]+\]/gi);
      if (o == null || o.length !== 1) return null;
      var a = o[0];
      if (!a.startsWith("[dl_token=")) return null;
      var i = a.slice(10, -1);
      return e.test(i) ? i : null;
    }
    i.default = l;
  },
  66,
);
