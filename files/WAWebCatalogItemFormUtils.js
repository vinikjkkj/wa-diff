__d(
  "WAWebCatalogItemFormUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return !1;
      var t = e.querySelector(
        'input[aria-invalid="true"], textarea[aria-invalid="true"], select[aria-invalid="true"]',
      );
      if (t instanceof HTMLElement) return (t.focus(), !0);
      var n = e.querySelector(
        'button[data-invalid="true"], button[aria-invalid="true"]',
      );
      return n instanceof HTMLElement ? (n.focus(), !0) : !1;
    }
    i.focusFirstInvalidField = e;
  },
  66,
);
