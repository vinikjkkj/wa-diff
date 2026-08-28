__d(
  "ControlledReferer",
  [
    "invariant",
    "ConstUriUtils",
    "XRefererFrameControllerRouteBuilder",
    "getRequestConstUri",
    "isInternalFBURI",
    "isWorkplaceDotComURI",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      function a() {
        var n = "";
        try {
          n = e.contentWindow.location.pathname;
        } catch (e) {
          return;
        }
        (n !== "/intern/common/referer_frame.php" &&
          n !== "/common/referer_frame.php" &&
          n !== "/common/referer_frame.php/") ||
          t();
      }
      var i = r("XRefererFrameControllerRouteBuilder").buildUri({ cb: 1 }),
        l = i;
      if (
        (r("isInternalFBURI")(r("getRequestConstUri")()) &&
          (l = o("ConstUriUtils").getUri("/intern/common/referer_frame.php")),
        n == null &&
          r("isWorkplaceDotComURI")(r("getRequestConstUri")()) &&
          (n = "workplace"),
        n != null && n !== "")
      ) {
        var u;
        l = (u = l) == null ? void 0 : u.addQueryParam("fb_source", n);
      }
      (l != null || s(0, 67317), (e.onload = a), (e.src = l.toString()));
    }
    function u(t, n, r) {
      e(
        t,
        function () {
          t.contentWindow.document.body.innerHTML = n;
        },
        r,
      );
    }
    ((l.shouldUseFacebookReferer = e), (l.useFacebookRefererHtml = u));
  },
  98,
);
