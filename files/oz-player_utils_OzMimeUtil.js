__d(
  "oz-player/utils/OzMimeUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (e.split("/")[0] || "").trim();
    }
    function l(e) {
      var t = (e.split(";")[0] || "").trim(),
        n = (t.split("/")[1] || "").trim();
      return n;
    }
    function s(e) {
      var t = e.split('codecs="').pop();
      return t.split(".")[0].trim();
    }
    ((i.getMimeType = e),
      (i.getContainerType = l),
      (i.getParsedCodecFamily = s));
  },
  66,
);
