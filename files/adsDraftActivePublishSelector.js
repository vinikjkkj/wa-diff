__d(
  "adsDraftActivePublishSelector",
  ["AdsDraftPublishProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsDraftPublishProvider").toFluxSelector()],
        function (t) {
          return t.active;
        },
        { name: i.id + ".adsDraftActivePublishSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
