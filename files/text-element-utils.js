__d(
  "text-element-utils",
  ["dompurify"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("dompurify").sanitize(e, { ALLOWED_TAGS: ["br"] });
    }
    l.extractText = e;
  },
  98,
);
