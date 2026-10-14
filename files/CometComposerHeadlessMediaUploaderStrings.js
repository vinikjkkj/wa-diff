__d(
  "CometComposerHeadlessMediaUploaderStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Videos must be at least {number} seconds long","_1":"Videos must be at least 1 second long"}',
        [s._plural(e, "number")],
      );
    }
    function u(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Videos cannot be longer than {number} minutes","_1":"Videos cannot be longer than 1 minute"}',
        [s._plural(Math.round(e / 60), "number")],
      );
    }
    var c = s._(
        /*BTDS*/ "Resolution too low. Please upload a higher resolution video.",
      ),
      d = s._(
        /*BTDS*/ "Aspect ratio unsupported. Please upload a different video.",
      );
    ((l.VIDEO_UPLOAD_ERROR_TOO_SHORT = e),
      (l.VIDEO_UPLOAD_ERROR_TOO_LONG = u),
      (l.VIDEO_UPLOAD_ERROR_LOW_RESOLUTION = c),
      (l.VIDEO_UPLOAD_ERROR_BAD_ASPECT_RATIO = d));
  },
  226,
);
