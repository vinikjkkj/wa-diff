__d(
  "logCallPromptToggleEvent",
  ["AdsInterfacesLogger", "first"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a = ((o = {}), (o.adgroup_id = r("first")(t)), (o.page_id = n), o);
      r("AdsInterfacesLogger").log({ eventName: e, data: a });
    }
    l.default = e;
  },
  98,
);
