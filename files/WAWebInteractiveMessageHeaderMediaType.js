__d(
  "WAWebInteractiveMessageHeaderMediaType",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
        "IMAGE",
        "VIDEO",
        "DOCUMENT",
        "PRODUCT",
      ]),
      l = new Set([e.IMAGE, e.VIDEO, e.DOCUMENT, e.PRODUCT]);
    ((i.InteractiveMessageHeaderMediaType = e), (i.IM_MEDIA_HEADER_TYPES = l));
  },
  66,
);
