__d(
  "WASmaxInGroupsPictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsBadLinkedGroupProfilePictureErrorMixin",
    "WASmaxInGroupsBadServerProfilePictureErrorMixin",
    "WASmaxInGroupsPictureDidNotChangeMixin",
    "WASmaxInGroupsPictureNotFoundMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsPictureDidNotChangeMixin",
      ).parsePictureDidNotChangeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PictureDidNotChange",
          value: t.value,
        });
      var n = o("WASmaxInGroupsPictureNotFoundMixin").parsePictureNotFoundMixin(
        e,
      );
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PictureNotFound",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsBadServerProfilePictureErrorMixin",
      ).parseBadServerProfilePictureErrorMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "BadServerProfilePictureError",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsBadLinkedGroupProfilePictureErrorMixin",
      ).parseBadLinkedGroupProfilePictureErrorMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "BadLinkedGroupProfilePictureError",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "PictureDidNotChange",
              "PictureNotFound",
              "BadServerProfilePictureError",
              "BadLinkedGroupProfilePictureError",
            ],
            [t, n, r, a],
          );
    }
    l.parsePictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup =
      e;
  },
  98,
);
