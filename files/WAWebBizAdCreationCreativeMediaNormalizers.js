__d(
  "WAWebBizAdCreationCreativeMediaNormalizers",
  ["WAWebBizAdCreationCreativeMediaModel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o(
        "WAWebBizAdCreationCreativeMediaModel",
      ).creativeMediaKindFromAttachMedia(e);
      return {
        attachMedia: e,
        displayUrl: s(e, t),
        key: e.id,
        kind: t,
        source: "upload",
        status: "pending",
      };
    }
    function s(e, t) {
      var n = e.preview;
      return n == null || n === ""
        ? null
        : t === "video"
          ? "data:image/jpeg;base64," + n
          : n;
    }
    function u(e) {
      return {
        displayUrl: e.displayUrl,
        key: e.key,
        kind: "image",
        resolvedHash: e.resolvedHash,
        resolvedUrl: e.displayUrl,
        source: "catalog",
        status: e.resolvedHash != null ? "ready" : "pending",
      };
    }
    ((l.attachMediaToCreativeMediaItem = e),
      (l.selectedCatalogMediaToCreativeMediaItem = u));
  },
  98,
);
