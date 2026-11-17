__d(
  "WAWebMetaAiFileDocMsgId",
  [],
  function (t, n, r, o, a, i) {
    var e = "maifiledoc_",
      l = "_",
      s = 2;
    function u(t) {
      return t.startsWith(e);
    }
    function c(e) {
      return u(e.split(l).slice(s).join(l));
    }
    ((i.isMetaAiFileDocMsgId = u), (i.isMetaAiFileDocMsgKeyString = c));
  },
  66,
);
