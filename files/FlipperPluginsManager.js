__d(
  "FlipperPluginsManager",
  ["FlipperCometDevToolsImpl", "QPLFlipperPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = new (o("QPLFlipperPlugin").QPLFlipperPlugin)();
      return (o("FlipperCometDevToolsImpl").flipperClient.addPlugin(e), e);
    }
    var s = e();
    l.qplFlipperPlugin = s;
  },
  98,
);
