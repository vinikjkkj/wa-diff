__d(
  "stripTopicMenuRoutingValue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^Selected:\s*([\s\S]*?)\s*\[value:\s*topic_menu:[^\]]*\]$/;
    function l(t) {
      if (t == null) return t;
      var n = e.exec(t.trim());
      return n == null ? t : n[1];
    }
    i.default = l;
  },
  66,
);
