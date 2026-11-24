__d(
  "WAWebPersistedQueuesLoader",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("WAWebPersistedQueues").__setRef(
      "WAWebPersistedQueuesLoader",
    );
    function s() {
      return e.load();
    }
    l.loadPersistedQueues = s;
  },
  98,
);
