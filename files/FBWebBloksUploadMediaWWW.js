__d(
  "FBWebBloksUploadMediaWWW",
  ["ApiClient", "JSResourceForInteraction", "Promise"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("ResumableUploadService").__setRef(
        "FBWebBloksUploadMediaWWW",
      ),
      u = r("JSResourceForInteraction")(
        "ResumableUploadServiceState.enum",
      ).__setRef("FBWebBloksUploadMediaWWW"),
      c = "facebook.com",
      d = "internalfb.com";
    function m() {
      return window.location.hostname.endsWith(".facebook.com") ? c : d;
    }
    function p(t, o, a, i, l) {
      (e || (e = n("Promise")))
        .all([s.load(), u.load()])
        .then(function (e) {
          var n = e[0],
            s = e[1],
            u = n.create({
              consumer: l,
              serviceDomain: m(),
              accessToken: r("ApiClient").getAccessToken(),
            });
          u.addListener(s.SUCCESS, function (e) {
            (u.removeAllListeners(), a != null && t.execute(a, [e]));
          });
          var c = function () {
            (u.removeAllListeners(),
              i != null && t.execute(i, ["Upload failed"]));
          };
          return (
            u.addListener(s.TRANSPORT_FAILURE, c),
            u.addListener(s.FAIL, c),
            u.resume(o)
          );
        })
        .catch(function (e) {
          i != null && t.execute(i, ["Upload failed:" + e.message]);
        });
    }
    l.default = p;
  },
  98,
);
