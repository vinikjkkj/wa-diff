__d(
  "WADevToolMessageChannel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new MessageChannel(),
      l,
      s = function () {
        return ((e = new MessageChannel()), l == null || l(e), e);
      };
    i.createNewChannel = s;
  },
  66,
);
