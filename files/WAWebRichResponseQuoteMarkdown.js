__d(
  "WAWebRichResponseQuoteMarkdown",
  [],
  function (t, n, r, o, a, i) {
    var e = /!\[[^\[\]\r\n]*\]\((?:container|sandbox):\/\/[^()\s]+\)/g;
    function l(t) {
      return t.replace(e, "");
    }
    i.stripServerFileImages = l;
  },
  66,
);
