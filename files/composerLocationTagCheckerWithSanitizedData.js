__d(
  "composerLocationTagCheckerWithSanitizedData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (
        (e == null ? void 0 : e.locationMinutiae) != null &&
        t.locationMinutiae == null
      )
        return { type: "DELETED" };
      if (
        (e == null ? void 0 : e.locationMinutiae) == null &&
        t.locationMinutiae == null
      )
        return { type: "UNCHANGED" };
      if (t.locationMinutiae != null) {
        var n, r;
        if (
          (e == null || (n = e.locationMinutiae) == null
            ? void 0
            : n.placeID) !==
          ((r = t.locationMinutiae) == null ? void 0 : r.placeID)
        )
          return { data: t.locationMinutiae, type: "UPDATED" };
        var o,
          a,
          i =
            (e == null || (o = e.attachmentArea) == null
              ? void 0
              : o.activeAttachmentType) === "LOCATION",
          l =
            ((a = t.attachmentArea) == null
              ? void 0
              : a.activeAttachmentType) === "LOCATION";
        if (i !== l) return { data: t.locationMinutiae, type: "UPDATED" };
      }
      return { type: "UNCHANGED" };
    }
    i.default = e;
  },
  66,
);
