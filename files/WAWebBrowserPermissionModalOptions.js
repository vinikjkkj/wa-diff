__d(
  "WAWebBrowserPermissionModalOptions",
  ["WAWebKeyboardTabUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      'microphone, camera, usermedia, button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';
    function s() {
      return {
        focusType: {
          customSelector: e,
          type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM_SELECTOR,
        },
        transition: "none",
      };
    }
    l.getBrowserPermissionModalOptions = s;
  },
  98,
);
