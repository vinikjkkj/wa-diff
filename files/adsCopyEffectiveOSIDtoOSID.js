__d(
  "adsCopyEffectiveOSIDtoOSID",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n =
          e == null || (t = e.creative) == null
            ? void 0
            : t.effective_object_story_id;
      n != null &&
        n != "" &&
        e != null &&
        e.creative &&
        (e.creative.object_story_id = n);
    }
    i.default = e;
  },
  66,
);
