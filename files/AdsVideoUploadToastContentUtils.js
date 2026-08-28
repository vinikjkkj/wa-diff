__d(
  "AdsVideoUploadToastContentUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      switch (e) {
        case "success":
          return s._(/*BTDS*/ "View Ad");
        case "error":
          return s._(/*BTDS*/ "Try again");
      }
      return "";
    }
    function u(e) {
      switch (e) {
        case "success":
          return s._(/*BTDS*/ "Review your video ad to finish and publish.");
        case "error":
          return s._(/*BTDS*/ "Try again or select a new video.");
      }
      return null;
    }
    function c(e, t, n) {
      switch (e) {
        case "success":
          return s._(/*BTDS*/ "Your video {title} upload is complete", [
            s._param("title", t),
          ]);
        case "progress":
          return n === !0
            ? s._(/*BTDS*/ "Processing video {title}", [s._param("title", t)])
            : s._(/*BTDS*/ "Uploading video {title}", [s._param("title", t)]);
        case "error":
          return s._(/*BTDS*/ "Unable to upload video {title}", [
            s._param("title", t),
          ]);
      }
      return null;
    }
    ((l.getCTAButtonLabel = e),
      (l.getToastCardBody = u),
      (l.getToastCardHeader = c));
  },
  226,
);
