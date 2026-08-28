__d(
  "getChunkForContentState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (t != null && t !== "") {
        var r = n.getEntity(t);
        if (r.getType() === "EMOTICON") return r.getData().originalEmoticon;
        if (r.getType() === "EMOJI") return r.getData().emoji.join("");
      }
      return e.replace("@[", "@ [");
    }
    i.default = e;
  },
  66,
);
