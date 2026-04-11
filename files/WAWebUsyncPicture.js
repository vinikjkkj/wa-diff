__d(
  "WAWebUsyncPicture",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.assertTag("picture");
      var t = e.maybeChild("error");
      return t
        ? { errorCode: t.attrInt("code"), errorText: t.attrString("text") }
        : { id: e.attrInt("id") };
    }
    var s = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "picture";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap("picture", null);
        }),
        (t.getUserElement = function (t) {
          return null;
        }),
        e
      );
    })();
    ((l.pictureParser = e), (l.USyncPictureProtocol = s));
  },
  98,
);
